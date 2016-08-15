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

/*
 * POST /book to save a new book.
 */
function postBook(req, res) {
    //Creates a new book
    var newBook = new Book(req.body);
    //Save it into the DB.
    newBook.save((err,book) => {
        if(err) {
            res.send(err);
        }
        else { //If no errors, send it back to the client
            res.json({message: "Book successfully added!", book });
        }
    });
}

//export all the functions
module.exports = { getBooks, postBook, getBook, deleteBook, updateBook };
