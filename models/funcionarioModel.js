const db =require('./db');

function addFuncionario(funcionario,callback){
    db.query("INSERT INTO funcionario (nome,idade) VALUES ?") [funcionario] , callback;
};

module.exports={
    addFuncionario
};