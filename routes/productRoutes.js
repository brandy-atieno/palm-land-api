// import productRouter
const {Router}=require('express')
//define productRouter
const productRouter=Router();
//import token verification moddleware
const {authorization,adminAuthorization}=require('../middlewares/verifyToken')

//import controllers
const {postProducts,getProducts,getById,deleteProduct,updateProduct}=require('../controllers/productControllers');
// define auth routes
productRouter.post('/new/product',adminAuthorization,postProducts);
productRouter.put('/update/:id',adminAuthorization,updateProduct);
productRouter.delete('/delete/:id',adminAuthorization,deleteProduct);
// productRouter.get('/',getProducts);
productRouter.get('/products',getProducts);

productRouter.get('/product/:id',adminAuthorization,getById);

// export routes
module.exports=productRouter;