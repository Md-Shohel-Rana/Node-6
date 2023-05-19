const app = require('./app');
const port =3000;

app.use((req,res)=>{

    res.send('<h1>404!!! Not a Valid Url</h1>');
});

app.listen(port,(req,res)=>{
    console.log(`Server Run Success at http://localhost:${port}`);
});