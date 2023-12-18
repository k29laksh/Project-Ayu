import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";
const connectDB = async () => {
  await mongoose
    .connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((e) => {
      console.log("MONGODB CONNECTION FAILED ",e);
      process.exit(1)
    });
};

export default connectDB