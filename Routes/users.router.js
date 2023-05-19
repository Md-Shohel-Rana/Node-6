const express= require('express');
const Router= express.Router();
const userRouter= express();





userRouter.get('/', (req,res)=>{
    res.send('<h2>Hello i am a Home developer Page</h2>');
});
userRouter.get('/contact', (req,res)=>{
    res.send('<h2>Hello i am a login Page</h2>');
});





module.exports = userRouter;