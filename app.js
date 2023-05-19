const express = require('express');
const app = express();
const userRouter= require('./Routes/users.router');



app.use('/api/user',userRouter);

app.use('/register', (req,res)=> {
res.statusCode = 200;
res.sendFile(__dirname+ "/views/register.html");

});

app.use('/contact', (req,res)=> {
    res.statusCode = 200;
    res.sendFile(__dirname+ "/views/contact.html");
});

app.use('/skill', (req,res)=>{
    res.statusCode = 200;
    res.sendFile(__dirname+ "/views/skill.html");
});

app.get('/', (req,res)=>{
    res.statusCode = 200;
    res.sendFile(__dirname+ "/views/index.html");
    
});
app.get('/login', (req,res)=>{
    res.send('<h2>Hello i am a login Page</h2>');
});

module.exports = app;