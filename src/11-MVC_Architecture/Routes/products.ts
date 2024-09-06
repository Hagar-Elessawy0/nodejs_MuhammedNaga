import { Router } from "express";
import ProductController from "../Controllers/productController";
import ProductsServices  from "../Services/productsServices";
import { generateFakeProduct } from "../../10-Expressjs_And_API/Utils/FakeData";

const productsRouter = Router();

let fakeData = generateFakeProduct();
const productsServices = new ProductsServices(fakeData);
const { getProducts, createNewProduct, getProductByID, updateProduct, deleteProduct } = new ProductController(productsServices);

productsRouter.route('/').get(getProducts).post(createNewProduct);

productsRouter.route('/:id').get(getProductByID).patch(updateProduct).delete(deleteProduct);

export default productsRouter