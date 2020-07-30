# Farmers Search Backend

This project was developed using NodeJS, Express 4.17.1, PostgreSQL 12 and the package node-postgres.

## Description

Application that searches farmers in a API NodeJS with PostreSQL database according to the parameter passed in the request, wich can be a name or document. If the search has more than one result, return any result that match’s. Once the farmer is selected, the farmer’s details should be populated in the correct inputs.

## Requirements
* You must have installed in your machine:
  * NodeJS
  * PostgreSQL

## Installation

* Replace your file .env and .env.test with your username and password

* Run this script on pgAdmin to create the maindatabase:
`CREATE DATABASE elaine_farmers
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1;`

* Run this script on pgAdmin to create the database to run the unit tests:
`CREATE DATABASE elaine_farmers_test
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    CONNECTION LIMIT = -1;`  
    
* Run `npm install` to install all dependencies and to run the migration that create the table farms.

## Development server

Run `npm run dev` for a dev server. The API will run on `http://localhost:3000`.

## Unit Tests

Run `npm run test` to run the unit tests.


## For further information

* Email: elaine.m.a.silva@accenture.com or elaine.manoelle@pmipe.org.br
* Social Network: www.linkedin.com/in/elainemanoelle.
