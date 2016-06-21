/* 
 * Exemplo condicionais composto com realine
 * 
 * @author André Ferreira <andrehrf@gmail.com>
 */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Qual sua idade? ', (idade) => { 
    idade = parseInt(idade);//Função para tentar converter variável para inteiro
    
    if(typeof idade == "number" && !isNaN(idade)){//isNaN função para verificar se a variável retorna NaN
        if(idade >= 18){
            console.log("VOCÊ PODE BEBER");
        }
        else{
            console.log('VOCÊ NÃO PODE BEBER');
        }
    }
    else{
        console.log('O valor de idade deve ser um numero!!!');
    }
    
    rl.close();
});