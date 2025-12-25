const express = require('express');
const bodyParser = require('body-parser');

const sensorRoutes = require('./routes/sensor');
const deviceRoutes = require('./routes/device');
const statusRoutes = require('./routes/status');

const app = express();
app.use(bodyParser.json());

app.use('/sensor-data', sensorRoutes);
app.use('/device-control', deviceRoutes);
app.use('/status', statusRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
