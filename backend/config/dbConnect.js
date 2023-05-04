import mongoose from "mongoose";
//DOTENV
import * as dotenv from "dotenv";
dotenv.config();

const dbConnect = async () => {
  try {
    const connected = await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("DB connected successfully");
  } catch (error) {
    console.log("Error ====>" + error.message);
  }
};

export default dbConnect;
