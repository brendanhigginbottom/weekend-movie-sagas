const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

//GET for details of specific movie

router.get('/:id', (req, res) => {
    // GET for description of /description/:id
    console.log(req.params.id);
})

module.exports = router;