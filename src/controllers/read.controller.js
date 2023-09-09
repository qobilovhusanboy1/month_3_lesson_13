const Book = require("../models/book.model");
const Read = require("../models/reads.model");
const User = require("../models/user.model");

const readCreate = async (req, res) => {
    const {oqilganmi, oqishni_holash, oqilmoqda, book_id} = req.body;

    const book = await Book.findOne({where: {id: book_id}});

    if(!book) return res.status(403).json({message: "Book there is"});

    const newRead = await Read.create({oqilganmi, oqishni_holash, oqilmoqda, book_id, user_id: req.idUser});

    res.status(201).json({message: 'Success', newRead: newRead});
};

const readGet = async (req, res) => {
    const reads = await Read.findAll({include: [{model: User}, {model: Book}], attributes: {exclude: ["user_id", "book_id"]} });

    res.json({message: "Success", reads: reads})
};

const readGetOne = async (req, res) => {
    const {id} = req.params;
    const read = await Read.findAll({include: [{model: User}, {model: Book}], attributes: {exclude: ["user_id", "book_id"]}, where: {id} });

    if(!read) return res.status(404).json({message: "Read Not Found"});

    res.status(201).json({message: 'Success', read: read});
};

const readUpdate = async (req, res) => {
    const {id} = req.params;
    const {oqilganmi, oqishni_holash, oqilmoqda, book_id} = req.body;

    const read = await Read.findByPk(id);

    if(!read) return res.status(404).json({message: "Read Not Found"});

    const [, [updateRead]] = await Read.update({oqilganmi, oqishni_holash, oqilmoqda, book_id}, {where: {id: id}, returning: "*"});

    res.status(201).json({message: 'Success', updateRead: updateRead});
};

const readDelete = async (req, res) => {
    const {id} = req.params;

    const read = await Author.findByPk(id);
    if(!read) return res.status(404).json({message: "Read Not Found"});

    await Read.destroy({where: {id: id}});
    
    res.status(201).json({message: "Success"});
};


module.exports = {readCreate, readGet, readGetOne, readUpdate, readDelete};