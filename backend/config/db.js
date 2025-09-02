import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://darjiparth6850_db_user:taskflow2025@cluster0.sej4hla.mongodb.net/TaskFlow"
    )
    .then(() => console.log("DB Connected"));
};
