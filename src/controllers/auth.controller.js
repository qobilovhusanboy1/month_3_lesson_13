const bcrypt = require("bcrypt");

const User = require("../models/user.model")
const jwt = require("../utils/jwt");

const register = async (req, res) => {
    const {first_name, last_name, phonenumber, email, password} = req.body;

    const user = await User.findOne({where: {email: email}});

    if(user)
        return res.status(403).json({message: "Email already exists"});

    const hashedPass = await bcrypt.hash(password, 12);

    const newUser = await User.create({first_name, last_name, phonenumber, email, password: hashedPass});

    const token = jwt.sign({id: newUser.id});

    res.status(201).json({message: 'Success', token});
};

const login = async (req, res) => { 
    const {email, password} = req.body;

    const [user] = await User.findAll({where: {email: email}});
    
    if(!user)
        return res.status(403).json({message: 'Invalid username or password'});

    const pswd = await bcrypt.compare(password, user.password);

    if(!pswd)
        return res.status(403).json({message: 'Invalid username or password'});

    const token = jwt.sign({id: user.id});

    res.status(201).json({message: 'Success', token});
};

module.exports = {register, login} 