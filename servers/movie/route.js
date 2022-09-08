const express = require('express');
const { getAllMovie } = require('./Controller/controller.js');
const Movie = require('./Model/Movie.js');



const router = new express.Router();

router.route('/api/v1/movies',getAllMovie)