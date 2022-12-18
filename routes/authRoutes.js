// import Router
const {Router}=require('express')
//define router
const router=Router();

//imort controllers
const {signUp,logIn,getAll}=require('../controllers/authControllers');
// define auth routes
router.post('/signup',signUp);
router.post('/login',logIn);
router.get('/users',getAll);

// export routes
module.exports=router;