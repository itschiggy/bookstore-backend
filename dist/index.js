"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const database_1 = __importDefault(require("./config/database"));
const booksRoute_1 = __importDefault(require("./routes/booksRoute"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Middleware for parsing request body
app.use(express_1.default.json());
// Middleware for handling CORS policy
app.use((0, cors_1.default)());
app.use('/books', booksRoute_1.default);
app.listen(PORT, () => {
    console.log(`App is listening to port: ${PORT}`);
});
(0, database_1.default)();
/* Define a route for the root path ("/")
 using the HTTP GET method */
app.get('/', (request, response) => {
    return response.status(234).send('Welcome to my bookstore!');
});
