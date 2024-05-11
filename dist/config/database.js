"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const URL = process.env.DATABASE_URL || '';
const dbConnect = () => {
    mongoose_1.default
        .connect(URL)
        .then(() => console.log('Database connection successful'))
        .catch((error) => {
        console.log("Database connection issue");
        console.error(error.message);
        process.exit(1);
    });
};
exports.default = dbConnect;
