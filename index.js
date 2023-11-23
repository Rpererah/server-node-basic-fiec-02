const express=require('express');
const bodyParser=require('body-parser');
const cors=require('cors');
const exemplo=require('./routes/exemplo');
const port=4000;

const app=express();
app.use('/',exemplo);


app.listen(port,()=>{
    console.log(`o servidor esta rodando na porta:${port}`);
});