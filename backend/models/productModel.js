import { Sequelize } from "sequelize"; // import library
import db from "../config/database.js"; // import database

// destructuring object
const {DataTypes} = Sequelize;

const Product = db.define('products', {
    title:{
        type: DataTypes.STRING
    },
    price:{
        type: DataTypes.DOUBLE
    },
},{
    freezeTableName: true
});

export default Product;