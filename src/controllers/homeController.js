const router=require('express').Router();

router.get('/' , (req,res)=>{
    res.render('home',{layout:false})
});

router.get('/about', (req,res)=>{
    res.render('about',{layout:false})
})
module.exports=router;