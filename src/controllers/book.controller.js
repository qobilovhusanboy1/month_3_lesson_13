const path = require("path");

const Book = require("../models/book.model");
const Category = require("../models/categorys.model");

const bookCreate = async(req, res) => {
    const {book_name, title, pages, year, price, country, description, janri, nashriyot, qogoz_kitob, audio, elektron, category_name} = req.body;
    const photo = req.files?.photo;

    const book = await Book.findOne({where: {book_name: book_name, year: year, janri: janri}});

    if(book) return res.status(403).json({message: "Book there is"});

    const category = await Category.findOne({where: {name: category_name}});

    if(!category) return res.status(403).json({message: "Category Not Found"});

    const mimetype = path.extname(photo.name);
    const imageName = photo.md5 + "_" + Date.now() + mimetype;
    photo.mv(`${process.cwd()}/uploads/${imageName}`);

    const newBook = await Book.create({book_name, title, pages, year, price, country, description, photo: imageName, janri, nashriyot, qogoz_kitob, audio, elektron, category_id: category.id});

    return res.status(201).json({message: "Success", book: newBook})
};

const bookGet = async(req, res) => {
    const books = await Book.findAll();

    res.status(201).json({message: "Success", books: books});
};

const bookGetOne = async(req, res) => {
    const {id} = req.params;

    const book = await Book.findByPk(id)

    if(!book) return res.status(404).json({message: "Book Not Found"});

    res.status(201).json({message: 'Success', book: book});
};

const bookUpdate = async(req, res) => {
    const {id} = req.params;
    const {book_name, title, pages, year, price, country, description, janri, nashriyot, qogoz_kitob, audio, elektron, category_name} = req.body;
    const photo = req.files?.photo;

    const book = await Book.findByPk(id)
    if(!book) return res.status(404).json({message: "Book Not Found"});
    

    const category = await Category.findOne({where: {name: category_name}});
    if(!category) return res.status(403).json({message: "Category Not Found"});

    
    const mimetype = path.extname(photo.name);
    const imageName = photo.md5 + "_" + Date.now() + mimetype;
    photo.mv(`${process.cwd()}/uploads/${imageName}`);

    
    const [, [updateBook]] = await Book.update({book_name, title, pages, year, price, country, description, photo: imageName, janri, nashriyot, qogoz_kitob, audio, elektron, category_id: category.id}, {where: {id: id}, returning: "*"});
    res.status(201).json({message: 'Success', updateBook: updateBook});
};

const bookDelete = async(req, res) => {
    const {id} = req.params;

    const book = await Book.findByPk(id);
    if(!book) return res.status(404).json({message: "Book Not Found"});

    await Book.destroy({where: {id: id}});
    
    res.status(201).json({message: "Success"});
};


module.exports = {bookCreate, bookGet, bookGetOne, bookUpdate, bookDelete};