import "dotenv/config";

import express, { type Express, type Request, type Response, type NextFunction } from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import helmet from "helmet";
import path from "path";

import swaggerDocs from "./utils/swagger";

// Route Imports
import route from "./routes/routes";

const PORT = process.env.PORT || 3000;

const app: Express = express();

app.use(cors());
app.use(helmet({
    contentSecurityPolicy: {
        useDefaults: true,
        directives: {
            imgSrc: ["self", "*"],
            scriptSrc: ["self", "*"],
            defaultSrc: ["self", "*"]
        }
    }
}));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(route);

app.listen(PORT, () => {
    console.log(`Server is listening in port ${PORT}`);
    swaggerDocs(app, +PORT);
});