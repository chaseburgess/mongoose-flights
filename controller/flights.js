// routes/flights.js
const express = require('express');
const router = express.Router();
const Flight = require('../models/Flight');
const moment = require('moment');

// Index route: Display a list of all flights
router.get('/', async (req, res) => {
  const flights = await Flight.find();
  res.render('flights/index', { flights, moment });
});

// New route: Display a form to add a new flight
router.get('/new', (req, res) => {
  res.render('flights/new');
});

// Create route: Handle form submission to create a new flight
router.post('/', async (req, res) => {
  const flight = new Flight(req.body);
  await flight.save();
  res.redirect('/flights');
});

module.exports = router;