import { Sequelize } from "sequelize";

const db = new Sequelize("react_apps_db", "root", "", {
    host: "localhost",
    dialect: "mysql"
});

export default db;