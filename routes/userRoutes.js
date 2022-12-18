// import Router
const {Router}=require('express')
//define router
const router=Router();
//import token verification moddleware
const {authorization,adminAuthorization}=require('../middlewares/verifyToken')

//import controllers
const {updateProfile,deleteById,getById}=require('../controllers/userControllers');
// define auth routes
router.get('/:id',adminAuthorization,getById);
router.put('/:id',authorization,updateProfile);
router.delete('delete/:id',deleteById);



// export routes
module.exports=router;