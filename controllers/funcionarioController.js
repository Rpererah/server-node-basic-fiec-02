const funcionarioModel=require('./../models/funcionarioModel');

function addFuncionario(req,res){
const newFuncionario = req.body;

funcionarioModel.addFuncionario(newFuncionario,(err,result)=>{
if(err){
    console.error('erro ao inserir o usuario');
    res.status(500).send('Erro interno ao inserir o usuario');
}else{
    res.json({mensagem:'Usuario inserido com sucesso', result});
}
})
}

module.exports={
    addFuncionario
}