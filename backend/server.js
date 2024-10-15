import express from "express";
import dotenv from "dotenv";
import router from "./routes/contact.route.js";
import errorHandler from "./middleware/errorHandler.js";
import connectDB from "./config/dbConnection.js";
const port = process.env.PORT || 5000;
dotenv.config();
connectDB();
const app = express();
app.use(express.json());

app.use("/api/contacts", router);
app.use(errorHandler);

app.listen(port, () => {
  console.log("server started!!");
  console.log(`server is running on PORT ::${port}`);
});
