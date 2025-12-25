const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./sensor_data.db', (err) => {
  if (err) {
    console.error('Database connection failed', err);
  } else {
    console.log('Database connected');
  }
});

db.run(`
  CREATE TABLE IF NOT EXISTS sensor_data (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    device_id TEXT,
    temperature REAL,
    humidity REAL,
    timestamp TEXT
  )
`);

module.exports = db;
