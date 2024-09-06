import express from "express";
import ProductController from "./Controllers/productController";
import ProductsServices  from "./Services/productsServices";
import ProductsViewController from "./Controllers/productsViewController";
import { generateFakeProduct } from "../10-Expressjs_And_API/Utils/FakeData";
import path from "path";
import productsRouter from "./Routes/products";

const app = express();

//* setting up view engine and directory
app.set("view engine", "pug");
app.set("views", path.join(__dirname, 'Views'));

//* setting up static files
app.use(express.static(path.join(__dirname, 'Public')));

app.use(express.json());  
let fakeData = generateFakeProduct();
const productsServices = new ProductsServices(fakeData);
const productsController = new ProductController(productsServices);
const productsViewController = new ProductsViewController(productsServices);

//* Product Routes
//? API
app.use("/api/products", productsRouter);

//? Rendering
app.get('/products',productsViewController.renderProductsList);

app.get("/products/:id",productsViewController.renderProductPage);

app.get('/', (req, res) => res.render('Home'));

app.get('*', (req, res) => res.render('notFound'));             // any other route

const PORT : number = 8006;
app.listen(PORT,() => {console.log(`Server running on http://localhost:${PORT}`);});
