const express = require("express");
const fileUpload = require("express-fileupload");
const app = express();

require("./models/associations");
const routes = require("./routes");
const config = require("../config");
const sequelize = require("./database");
const { swaggerUi, swaggerSpec} = require("./swagger/config");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(fileUpload());
app.use(express.static(process.cwd() + "/uploads"));

app.use("/", routes);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const bootstrap = async() => {
    await sequelize.authenticate({
        logging: false 
    });

    await sequelize.sync({ 
        logging: false,
        alter: true 
    });

    app.listen(config.PORT, () => {
        console.log(config.PORT);
    });
};

bootstrap();