
const express=require("express");
const productController=require("../controller/productController")
const router=express.Router();
router.post("/search",productController.searchProducts);
router.get ("/getByPrice",productController.getByPrice);
router.get("/",productController.getProducts);
router.get("/name-products",productController.getNameProducts);
router.get("/all",productController.getAllProduct);
router.get("/new",productController.getNewProduct);
router.get("/:id_product",productController.getProduct);
router.get("/newproductby-seller/:seller",productController.getNewproductBySeller)
router.get("/getproduct/:seller",productController.getProductBySeller);
router.post("/delete-product",productController.deleteProduct);
router.post("/update-product",productController.updateProduct);
router.get("/relate-product/:id_product",productController.getRelateProduct);

module.exports = router;