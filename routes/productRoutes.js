// import Router
const {Router}=require('express')
//define router
const router=Router();

//import controllers
const {postProducts,getAllProducts,getById}=require('../controllers/productControllers');
// define auth routes
router.post('/products',postProducts);
router.get('/getall',getAllProducts);
router.get('product/:id',getById);

// export routes
module.exports=router;