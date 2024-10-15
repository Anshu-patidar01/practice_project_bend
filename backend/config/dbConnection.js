import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(
      `mongodb+srv://patidaranshu490:xdHIEP4GX09X5qVr@cluster0.jg79p.mongodb.net/contact`
      // "mongodb+srv://patidaranshu490:Zu4HOc7ZQ3s9KtdW@poral01.fo3qp.mongodb.net/"
    );
    console.log("DB connected!!");
  } catch (error) {
    console.log("somme error occure in db", error);
    process.exit(1);
  }
};

export default connectDb;
