const express= require('express');
const nodemon = require('nodemon');
const exemplo=express.Router();
const funcionarioController=require('./../controllers/funcionarioController')
//get pega dados
//post envia dados, (precisa dos dados que serão enviados)
//put edita dado a dado escolhido, (preciso dos dados que foram atualizados),(de quem estou alterando dados)
//patch obriga todos os dados a serem editados
//delete destroi o dado, quem eu quero deletar

exemplo.get('/exemplo',(req,res)=>{
    res.send("voce acessou o exemplo");
});

exemplo.get('/tayna',(req,res)=>{
    res.send("essa eh a pagina da tayna");
})

exemplo.post('/funcionario',funcionarioController.addFuncionario);

module.exports= exemplo;