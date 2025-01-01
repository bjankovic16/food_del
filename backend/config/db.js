import mongoose from "mongoose";

export const connectDB = async ()=>{
    await mongoose.connect('mongodb+srv://bogdan:12345@cluster0.dquau.mongodb.net/food_del').then(()=>{console.log("DB connected")});
}