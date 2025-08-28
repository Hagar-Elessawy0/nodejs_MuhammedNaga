import express from "express";
import ProductsServices  from "./Services/productsServices";
import ProductsController from "./Controllers/productController";
//import ProductsViewController from "./Controllers/productsViewController";
import { generateFakeProduct } from "../10-Expressjs_And_API/Utils/FakeData";
import path from "path";
import productsRouter from "./Routes/products";
import ErrorMiddleware from "./Middlewares/Error";
import NotFoundMiddleware from "./Middlewares/NotFound";
import helmet from "helmet";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import compression from "compression";
import pool from "./Models/db"; 

const app = express();
app.use(compression());
app.use(morgan('dev'));

//* setting up security
app.use(helmet({
    contentSecurityPolicy: false,  
    xFrameOptions: {
        action: "deny" 
    }
}));

const rateLimitOptions = {
    windowMs: 15 * 60 * 1000, 
    limit: 100,                                                         
    message: "Too many requests from this IP, please try again later!"  
}

app.use(rateLimit(rateLimitOptions));

//* setting up view engine and directory
app.set("view engine", "pug");
app.set("views", path.join(__dirname, 'Views'));

//* setting up static files
app.use(express.static('E:/nodejs_MuhammedNaga/src/11-MVC_Architecture_12-Template_Engines(pug)_13-middlewares/Public'));

app.use(express.json());  
let fakeData = generateFakeProduct();
const productsServices = new ProductsServices(fakeData);
const productsController = new ProductsController(productsServices);
//const productsViewController = new ProductsViewController(productsServices);

//* Product Routes
//? API
app.use("/api/products", productsRouter);

app.get("/db/products", async (req, res) => productsController.getProducts(req, res));

//? Rendering
// app.get('/products',productsViewController.renderProductsList);

// app.get("/products/:id",productsViewController.renderProductPage);

// app.get('/', (req, res) => res.render('Home', { pageTitle: "My Store - Home" }));

//* middlewares
app.use(NotFoundMiddleware.handle);

app.use(ErrorMiddleware.handle);

const PORT : number = 8008;
app.listen(PORT,() => {console.log(`Server running on http://localhost:${PORT}`);});
