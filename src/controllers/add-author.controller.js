const Author = require("../models/author.model");

const authorCreate = async (req, res) => {
    const {first_name, last_name, date_of_birthday, date_of_death, country, bio} = req.body;

    const author = await Author.findOne({where: {first_name: first_name, last_name: last_name}});

    if(author) return res.status(403).json({message: "Author there is"});

    const newAuthor = await Author.create({first_name, last_name, date_of_birthday, date_of_death, country, bio});

    res.status(201).json({message: 'Success', newAuthor: newAuthor});
};

const authorGet = async (req, res) => {
    const authors = await Author.findAll();

    res.status(201).json({message: 'Success', authors: authors});
};

const authorGetOne = async (req, res) => {
    const {id} = req.params;

    const author = await Author.findByPk(id)

    if(!author) return res.status(404).json({message: "Author Not Found"});

    res.status(201).json({message: 'Success', author: author});
};

const authorUpdate = async (req, res) => {
    const {id} = req.params;
    const {first_name, last_name, date_of_birthday, date_of_death, country, bio} = req.body;

    const author = await Author.findByPk(id);

    if(!author) return res.status(404).json({message: "Author Not Found"});

    const [, [updateAuthor]] = await Author.update({first_name, last_name, date_of_birthday, date_of_death, country, bio}, {where: {id: id}, returning: "*"});

    res.status(201).json({message: 'Success', updateAuthor: updateAuthor});
};

const authorDelete = async (req, res) => {
    const {id} = req.params;

    const author = await Author.findByPk(id);
    if(!author) return res.status(404).json({message: "Author Not Found"});

    await Author.destroy({where: {id: id}});
    
    res.status(201).json({message: "Success"});
};
 

module.exports = {authorCreate, authorGet, authorGetOne, authorUpdate, authorDelete}; 