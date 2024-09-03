import express from "express";
import ProductController from "./Controllers/productController";
import ProductsServices  from "./Services/productsServices";
import { generateFakeProduct } from "../10-Expressjs_And_API/Utils/FakeData";

const app = express();
app.use(express.json());  
let fakeData = generateFakeProduct();

const productsServices = new ProductsServices(fakeData);
const productsController = new ProductController(productsServices);

app.get('/', (req, res) => res.send('Welcome to MVC Server'));

app.get("/products", (req, res) => productsController.getProducts(req, res));

app.get("/products/:id", (req, res) => productsController.getProductByID(req, res));

app.post("/products", (req, res) => productsController.createNewProduct(req, res));

app.patch("/products/:id", (req, res) => productsController.updateProduct(req, res));

app.delete("/products/:id", (req, res) => productsController.deleteProduct(req, res));

const PORT : number = 8006;
app.listen(PORT,() => {console.log(`Server running on http://localhost:${PORT}`);});
