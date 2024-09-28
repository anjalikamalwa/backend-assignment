import express from "express";
import dotenv from "dotenv";
import connectDb from "./dbconfig/dbconnection.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { router } from "./routes/employeeRoute.js";

const result = dotenv.config();

const app = express();

const port = process.env.PORT || 4000;
connectDb();

app.use(express.json())
app.use(errorHandler);
app.use("/api/employee",router)

app.listen(port, () => {
  console.log(`server is running on ${port}`);
});
