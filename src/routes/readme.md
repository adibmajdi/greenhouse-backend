    Overview

This project is a simple backend system that simulates a greenhouse IoT environment.
The backend receives sensor data, stores it in a database, and sends control commands to devices using MQTT.

This project is designed as part of a Backend Engineer technical assignment.

////////////////////////////////////////////////////////////////////
System Architecture

Data Flow:

Sensor → Backend API → Database

Backend API → MQTT Broker → Device (simulated)

Key Components:

Backend API: Node.js + Express

Database: SQLite

Messaging: MQTT (Mosquitto broker)

///////////////////////////////////////////////////////////////////  
 Tech Stack

Node.js

Express.js

SQLite

MQTT (Mosquitto)

Postman (API testing)

///////////////////////////////////////////////////////////////////
How to Run the Project

1. Install dependencies
   npm install

2. Run Mosquitto Broker

Make sure Mosquitto is running (Windows service or manual):

mosquitto

3. Run Backend Server
   node src/app.js

If successful, you will see:

MQTT connected
Server running on port 3000

///////////////////////////////////////////////////////////////////
API Endpoints

1. POST /sensor-data

Receive sensor data from greenhouse sensors.

Request Body:

{
"device_id": "sensor-1",
"temperature": 28.5,
"humidity": 65
}

Response:

{
"message": "Sensor data saved"
}

2. POST /device-control

Send control commands to greenhouse devices via MQTT.

Request Body:

{
"device_id": "fan-1",
"command": "ON"
}

MQTT Topic:

greenhouse/control/{device_id}

3. GET /status

Check system health status.

Response:

{
"service": "OK",
"database": "CONNECTED",
"mqtt": "CONNECTED"
}

///////////////////////////////////////////////////////////////////
Error Handling

Invalid payloads return HTTP 400

Server or database errors return HTTP 500

Commands are validated to accept only predefined values (ON/OFF)

///////////////////////////////////////////////////////////////////
Design Considerations

Event-driven architecture using MQTT

Simple validation to prevent invalid commands

Clear separation of concerns between API, database, and messaging

///////////////////////////////////////////////////////////////////
Notes

This project simulates an IoT system. No physical devices are required.
