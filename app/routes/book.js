let mongoose = require('mongoose');
let Book = require('../models/book');

/*
 * GET /book route to retrieve all the books.
 */
function getBooks(req, res) {
    //Query the DB and if no errors, send all the books
    let query = Book.find({});
    query.exec((err, books) => {
        if(err) res.send(err);
        //If no errors, send them back to the client
        res.json(books);
    });
}

//export all the functions
module.exports = { getBooks, postBook, getBook, deleteBook, updateBook };
