const Category = require("../models/categorys.model");

const categoryCreate = async (req, res) => {
    const {name} = req.body;

    const category = await Category.findOne({where: {name}});

    if(category) return res.status(403).json({message: "Category there is"});

    const newCategory = await Category.create({name});

    res.status(201).json({message: 'Success', newCategory: newCategory});
};

const categoryGet = async (req, res) => {
    const categorys = await Category.findAll();

    res.status(201).json({message: "Success", categorys: categorys})
};

const categoryGetOne = async (req, res) => {
    const {id} = req.params;

    const category = await Category.findByPk(id)

    if(!category) return res.status(404).json({message: "Category Not Found"});

    res.status(201).json({message: 'Success', category: category});
};

const categoryUpdate = async (req, res) => {
    const {id} = req.params;
    const {name} = req.body;

    const category = await Category.findByPk(id);

    if(!category) return res.status(404).json({message: "Category Not Found"});

    const [, [updateCategory]] = await Category.update({name}, {where: {id: id}, returning: "*"});

    res.status(201).json({message: 'Success', updateCategory: updateCategory});
};

const categoryDelete = async (req, res) => {
    const {id} = req.params;

    const category = await Category.findByPk(id);
    if(!category) return res.status(404).json({message: "Category Not Found"});

    await Category.destroy({where: {id: id}});
    
    res.status(201).json({message: "Success"});
};

module.exports = {categoryCreate, categoryGet, categoryGetOne, categoryUpdate, categoryDelete}; 