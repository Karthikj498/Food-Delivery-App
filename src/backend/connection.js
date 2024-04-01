const mongoose = require('mongoose');
const MONGO_URI = 'mongodb+srv://yumcourier:peakyblinders@cluster0.pjldehv.mongodb.net/yumcourier?retryWrites=true&w=majority&appName=Cluster0';

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);

        console.log("Database connection successful");

        const fetchedData = await mongoose.connection.db.collection("food_items").find({}).toArray();
        global.food_items = fetchedData;

        const fetchedCategories = await mongoose.connection.db.collection("food_category").find({}).toArray();
        global.food_category = fetchedCategories;
    } catch (err) {
        console.error("Error connecting to the database:", err);
        throw err; // Re-throw the error to propagate it to the caller
    }
};

module.exports = connectDB;
