const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// GET
router.get('/', function (request, response) {
    
    const queryText = 'SELECT * FROM "todoapp";';
    pool.query(queryText)
        .then((dbResult) => {
            let todoapp = dbResult.rows;
            response.send(todoapp)
        })
        .catch((dbError) => {
            console.log('dbError:', dbError);
            response.sendStatus(500);
        })
});
// POST
router.post('/', function (request, response) {
    console.log('request.body', request.body);

    let newToDo = request.body;

    let task = newToDo.task;
    let complete = newToDo.complete;
    

    let queryText = `INSERT INTO "todoapp" ("task", "complete")
    VALUES ($1, $2);`
    
    pool.query(queryText, [task, complete])
        .then(dbResult => {
            console.log('dbResult.rows', dbResult.rows);
            response.sendStatus(201);
        })
        .catch(dbError => {
            // unpack the results
            console.log('dbError:', dbError);
            // send the client a response, based on the results.
            response.sendStatus(500);

            console.log('Adding tasks', newToDo);
        })
});


// PUT
router.put('/:id', function (request, response) {
    console.log()
    let idToUpdate = request.params.id;
    let queryText = `UPDATE "todoapp" WHERE id = $1, $2`;
    pool.query(queryText, [idToUpdate])
        .then(dbResult => {
            console.log(dbResult);
            response.sendStatus(200);
        })
        .catch(dbError => {
            console.log(dbError);
            response.sendStatus(500);
        })
});

// DELETE
router.delete('/:id', function (request, response) {
   
    console.log('req.params', request.params);

    let idToDelete = request.params.id;

    console.log('idToDelete', idToDelete);
    console.log('typeof idToDelete', typeof idToDelete);

    let queryText = `DELETE FROM "todoapp" WHERE id = $1;`;

    pool.query(queryText, [idToDelete])
        .then(dbResult => {
            console.log(dbResult);
            response.sendStatus(200);
        })
        .catch(dbError => {
            console.log(dbError);
            response.sendStatus(500);
        })
});

module.exports = router;
