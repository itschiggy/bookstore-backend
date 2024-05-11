import mongoose from 'mongoose';
import dotenv from "dotenv";

dotenv.config();

const URL = process.env.DATABASE_URL || '';

const dbConnect = () => {

    mongoose
        .connect(URL)
        .then(() => console.log('Database connection successful'))
        .catch((error) => {
            console.log("Database connection issue");
            console.error(error.message);
            process.exit(1);
        });
}

export default dbConnect;