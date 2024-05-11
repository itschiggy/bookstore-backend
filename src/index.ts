import express, {Express, Request, Response} from "express";
import dotenv from "dotenv";
import cors from "cors";
import dbConnect from "./config/database";
import booksRoute from "./routes/booksRoute";

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS policy
app.use(cors());

app.use('/books', booksRoute);

app.listen(PORT, () => {
    console.log(`App is listening to port: ${PORT}`);
});

dbConnect();

/* Define a route for the root path ("/")
 using the HTTP GET method */
app.get('/', (request: Request, response: Response) => {
    return response.status(234).send('Welcome to my bookstore!');
});