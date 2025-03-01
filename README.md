# Express SQLite API

This is a simple REST API built with **Express.js** and **SQLite**.

## Features
- Get all persons (`GET /personnes`)
- Get a person by ID (`GET /personnes/:id`)
- Add a person (`POST /personnes`)
- Update a person (`PUT /personnes/:id`)
- Delete a person (`DELETE /personnes/:id`)

## Installation
1. Clone this repository:
   git clone https://github.com/EyaZantour/TP2-express-sqlite-api.git

Install dependencies:

npm install
Start the server:
node server.js
Use Postman to test the API.

Database Setup:

The project uses an SQLite database. The database.js file will create the database automatically.

Example Requests:

Create a new person:

POST http://localhost:3000/personnes -H "Content-Type: application/json" -d '{"nom": "Eya", "adresse": "4070 Msaken"}'

Get all persons:
GET http://localhost:3000/personnes   
