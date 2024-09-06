import { Request, Response } from "express";
import ProductsServices  from "../Services/productsServices";


class ProductViewController {
    constructor(private productsService : ProductsServices) {
        this.renderProductsList = this.renderProductsList.bind(this);
        this.renderProductPage = this.renderProductPage.bind(this);
    }

    renderProductsList(req :Request, res :Response) {
        res.render('products',
            {
                PageTitle : "Products List",
                description : "This is awesome store",
                products : this.productsService.findAll()
            })
    }

    renderProductPage(req :Request, res :Response) {
        res.render('product', 
            {
                product : this.productsService.getProductByID(+req.params.id),
            }
        )
    }

}

export default ProductViewController