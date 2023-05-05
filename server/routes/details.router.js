const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

//GET for details of specific movie

//! moved to movie router (grouping by what's being retrieved from where)

// router.get('/:id', (req, res) => {
//     // GET for description of /description/:id
//     console.log(req.params.id);
//     let queryText = 'SELECT * FROM "movies" WHERE "id" = $1';
//     pool.query(queryText, [req.params.id])
//     .then(result => {
//         res.send(result.rows);
//     }).catch(error => {
//         console.log(`Error in get select ${error}`);
//         res.sendStatus(500);
//     });
// });

module.exports = router;