const express = require('express');
const db = require('../database/db');

const router = express.Router();

router.post('/', (req, res) => {
  const { device_id, temperature, humidity, timestamp } = req.body;

  // Validasi
  if (!device_id || typeof temperature !== 'number' || typeof humidity !== 'number') {
    return res.status(400).json({ error: 'Invalid payload' });
  }

  const time = timestamp || new Date().toISOString();

  db.run(
    `INSERT INTO sensor_data (device_id, temperature, humidity, timestamp)
     VALUES (?, ?, ?, ?)`,
    [device_id, temperature, humidity, time],
    (err) => {
      if (err) {
        return res.status(500).json({ error: 'Database error' });
      }
      res.json({ message: 'Sensor data saved' });
    }
  );
});

module.exports = router;
