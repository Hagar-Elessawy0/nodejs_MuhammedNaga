// import { Request, Response } from "express";
// import ProductsServices  from "../Services/productsServices";


// class ProductViewController {
//     constructor(private productsService : ProductsServices) {
//         this.renderProductsList = this.renderProductsList.bind(this);
//         this.renderProductPage = this.renderProductPage.bind(this);
//     }

//     renderProductsList(req :Request, res :Response) {
//         //throw new Error("Something went wrong");                //? err.message   -   test middleware error
//         res.render('products',
//             {
//                 pageTitle : "My Store - Products Page",
//                 description : "This is awesome store",
//                 products : this.productsService.findAll()
//             })
//     }

//     renderProductPage(req :Request, res :Response) {
//         const product = this.productsService.getProductByID(+req.params.id);
//         res.render('product', 
//             {
//                 pageTitle: `My Store - ${product?.title}`,
//                 product,
//             }
//         )
//     }

// }

// export default ProductViewController