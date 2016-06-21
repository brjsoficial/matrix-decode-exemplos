/* 
 * Exemplo condicionais
 * 
 * @author André Ferreira <andrehrf@gmail.com>
 */

/*
  SE sua idade for maior ou igual a 18 anos
    VOCÊ PODE BEBER
  SE NÃO
    VOCÊ NÃO PODE BEBER
*/

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Qual sua idade? ', (idade) => {    
    if(idade >= 18){
        console.log("VOCÊ PODE BEBER");
    }   
    else{
        console.log('VOCÊ NÃO PODE BEBER');
    }
    
    rl.close();
});