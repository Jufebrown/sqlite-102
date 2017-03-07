#!/usr/bin/env node

'use strict'

// Create a database that is saved on disk.
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database('employee.sqlite', (err) => console.log('Connected'))

const dropEmployees = () => {
  db.run(`DROP TABLE employees`)
}

// Create a table titled employees with the following columns:
// id, firstName, lastName, jobTitle, address
db.run(`CREATE TABLE IF NOT EXISTS employees (id INT PRIMARY KEY, firstName TEXT, lastName TEXT, jobTitle TEXT, address TEXT)`)

// Create an array of at least 6 objects. Each object should have a key value pair matching each column name in the employees table.
let array = [
  { id: 0, firstName: 'Fred', lastName: 'Flintstone', jobTitle: 'Cashier', address: '500 Somewhere Lane' },
  { id: 0, firstName: 'Wilma', lastName: 'Flintstone', jobTitle: 'Cashier', address: '500 Somewhere Lane' },
  { id: 0, firstName: 'Chloe', lastName: 'Catherine', jobTitle: 'Cashier', address: '500 Somewhere Lane' },
  { id: 0, firstName: 'Sam', lastName: 'Gamgee', jobTitle: 'Cashier', address: '500 Somewhere Lane' },
  { id: 0, firstName: 'Chuck', lastName: 'Doggert', jobTitle: 'Cashier', address: '500 Somewhere Lane' },
  { id: 0, firstName: 'Matt', lastName: 'Smith', jobTitle: 'Cashier', address: '500 Somewhere Lane' },
]


// Insert each of the employee objects into the database.

// Write a statement to query the database and console.log() all employee records.

// Write a statement to query the database and console.log() each employees jobTitle.

// Write a statement to query the database and console.log() each employees firstName, lastName and address only.
