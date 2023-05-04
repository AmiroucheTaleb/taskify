import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
dotenv.config();
import dbConnect from "./config/dbConnect.js";
import router from "./routes/todoRoute.js";
//PORT
const PORT = process.env.PORT || 5000;

const app = express();

//DABATABSE
dbConnect();

//Midelware

app.use(express.json());
app.use(cors({ origin: "*" }));
app.use(express.urlencoded({ extended: true }));

//ROUTES
app.use("/api", router);
// PORT LISTENING
app.listen(PORT, () =>
  console.log(`The server is running on Port : ${PORT} -  http://localhost:${PORT}`)
);
