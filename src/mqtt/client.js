const mqtt = require('mqtt');

const client = mqtt.connect('mqtt://localhost:1883');

let mqttStatus = 'DISCONNECTED';

client.on('connect', () => {
  mqttStatus = 'CONNECTED';
  console.log('MQTT connected');
});

client.on('error', () => {
  mqttStatus = 'ERROR';
});

module.exports = { client, getStatus: () => mqttStatus };
