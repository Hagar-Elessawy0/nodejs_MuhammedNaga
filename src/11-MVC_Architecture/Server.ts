import express from "express";
import ProductsServices  from "./Services/productsServices";
import ProductsViewController from "./Controllers/productsViewController";
import { generateFakeProduct } from "../10-Expressjs_And_API/Utils/FakeData";
import path from "path";
import productsRouter from "./Routes/products";
import ErrorMiddleware from "./Middlewares/Error";
import NotFoundMiddleware from "./Middlewares/NotFound";
import dotenv from "dotenv";

const app = express();

dotenv.config();

//* setting up view engine and directory
app.set("view engine", "pug");
app.set("views", path.join(__dirname, 'Views'));

//* setting up static files
app.use(express.static(path.join(__dirname, 'Public')));

app.use(express.json());  
let fakeData = generateFakeProduct();
const productsServices = new ProductsServices(fakeData);
const productsViewController = new ProductsViewController(productsServices);

//* Product Routes
//? API
app.use("/api/products", productsRouter);

//? Rendering
app.get('/products',productsViewController.renderProductsList);

app.get("/products/:id",productsViewController.renderProductPage);

app.get('/', (req, res) => res.render('Home', { pageTitle: "My Store - Home" }));

//* middlewares
//app.get('*', (req, res) => res.render('notFound', { pageTitle: "My Store - Page Not Found" }));             // any other route
app.use(NotFoundMiddleware.handle);

app.use(ErrorMiddleware.handle);

const PORT : number = 8007;
app.listen(PORT,() => {console.log(`Server running on http://localhost:${PORT}`);});
