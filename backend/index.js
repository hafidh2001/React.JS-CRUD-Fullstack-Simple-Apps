/* 
  Library EXPRESS untuk mengatur fungsionalitas website, seperti : 
  - pengelolaan routing dan session, 
  - permintaan HTTP, 
  - penanganan error
  - pertukaran data di server.
*/
import express from "express";
/* 
  Library CORS untuk mengakses API pada FrontEnd
*/
import cors from "cors";

import db from "./config/database.js"; // import database

// import routes
import productRoute from "./routes/productRoute.js";


// Initializing variable express and port number
const app = express();
const portNumber = 5000;

// asynchronous arrow function expression checkConnection
const checkConnection = async () => {
  try {
    await db.authenticate();
    console.log("Database connected");
  } catch (error) {
    console.error(`Database not connected ${error}`);
  }
};
// call function
checkConnection();

// calling the cors method for access API
app.use(cors());

// calling the express.json() method for parsing
app.use(express.json());

// calling route
app.use("/products", productRoute);

// declare route
app.listen(portNumber, () => console.log(`Server running at port ${portNumber}`));
