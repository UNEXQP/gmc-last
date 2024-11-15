import mongoose from "mongoose";

const connect = async () => {
  try {
    console.log("Attempting to connect to database.....");
    await mongoose.connect('mongodb+srv://anfelarotimi10:B7EDmgb75cJyEVJR@tasyfyer.x3akb.mongodb.net/Taskfyer?retryWrites=true&w=majority&appName=firstCluster0', {});
    console.log("Connected to database.....");
  } catch (error) {
    console.log("Failed to connect to database.....", error.message);
    process.exit(1);
  }
};

export default connect;
