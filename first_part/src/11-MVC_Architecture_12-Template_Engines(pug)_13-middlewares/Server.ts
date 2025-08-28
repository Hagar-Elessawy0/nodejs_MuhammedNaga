import express from "express";
import ProductsServices  from "./Services/productsServices";
import ProductsViewController from "./Controllers/productsViewController";
import { generateFakeProduct } from "../10-Expressjs_And_API/Utils/FakeData";
import path from "path";
import productsRouter from "./Routes/products";
import ErrorMiddleware from "./Middlewares/Error";
import NotFoundMiddleware from "./Middlewares/NotFound";
import helmet from "helmet";
import morgan from "morgan";
import rateLimit from "express-rate-limit";
import compression from "compression";

const app = express();
app.use(compression());
app.use(morgan('dev'));

//* setting up security
app.use(helmet({
    contentSecurityPolicy: false,       //? disable CSP to show the images on the browser (don't use it in production mode)
    xFrameOptions: {
        action: "deny"                  //? disable xFrameOptions to not allow iframe in another website
    }
}));

const rateLimitOptions = {
    windowMs: 15 * 60 * 1000,                                           //? 15 minutes 
    limit: 100,                                                         //? limit each IP to 100 requests per windowMs
    message: "Too many requests from this IP, please try again later!"  //? message when limit is reached - status code 429
}

app.use(rateLimit(rateLimitOptions));

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

// app.get('/db/products', async (req, res) => {       //? async function because it will take time to execute it so we use it to not freeze the server
//     try {
//         const products = await pool.query('SELECT * FROM products;');
//         res.json({                                  //? convert data to application/json
//             products : products.rows,
//             length : products.rowCount
//         });
//     } catch (error) {
//         console.error(error);
//     }
// })

//? Rendering
app.get('/products',productsViewController.renderProductsList);

app.get("/products/:id",productsViewController.renderProductPage);

app.get('/', (req, res) => res.render('Home', { pageTitle: "My Store - Home" }));

//app.get('*', (req, res) => res.render('notFound', { pageTitle: "My Store - Page Not Found" }));     // any other route //? we replace it with middleware

//* middlewares
app.use(NotFoundMiddleware.handle);

app.use(ErrorMiddleware.handle);

const PORT : number = 8007;
app.listen(PORT,() => {console.log(`Server running on http://localhost:${PORT}`);});
