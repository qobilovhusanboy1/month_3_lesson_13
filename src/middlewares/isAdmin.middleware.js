const User = require("../models/user.model");

const isAdmin = async(req, res, next) => {
    const [user] = await User.findAll({where: {id: req.idUser}});

    if(user.is_admin === false) return res.status(401).json({message: 'Unauthorized'});

    next();
};

module.exports = isAdmin;