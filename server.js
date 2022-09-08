const express=require('express');
const app=express();
app.set('view-engine','ejs')
app.use(express.static('public'))
app.get('/',(req,res)=>{
    res.render('index.ejs',{name:'HIMA'})
})
app.get('/about',(req,res)=>{
    res.render('about.ejs')
})
app.use((req,res)=>{
    res.render('404.ejs')
})
app.listen(3000)