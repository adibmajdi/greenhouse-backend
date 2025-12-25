const express = require('express');
const { client } = require('../mqtt/client');

const router = express.Router();

router.post('/', (req, res) => {
  const { device_id, command } = req.body;

  if (!device_id || !['ON', 'OFF'].includes(command)) {
    return res.status(400).json({ error: 'Invalid command' });
  }

  const topic = `greenhouse/control/${device_id}`;
  const payload = JSON.stringify({ command });

  client.publish(topic, payload);

  res.json({ message: 'Command sent via MQTT' });
});

module.exports = router;
