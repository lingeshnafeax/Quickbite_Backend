import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://admin:admin@quickbite.pjq7b0o.mongodb.net/QuickBite?retryWrites=true&w=majority&appName=QuickBite"
    )
    .then(() => console.log("DataBase Connected"));
};
