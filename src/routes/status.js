const express = require('express');
const db = require('../database/db');
const { getStatus } = require('../mqtt/client');

const router = express.Router();

router.get('/', (req, res) => {
  db.get('SELECT 1', (err) => {
    res.json({
      service: 'OK',
      database: err ? 'DISCONNECTED' : 'CONNECTED',
      mqtt: getStatus()
    });
  });
});

module.exports = router;
