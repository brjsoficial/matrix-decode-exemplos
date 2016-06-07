/* 
 * Exemplo de Readline (Input via console)
 * 
 * @author André Ferreira <andrehrf@gmail.com>
 */

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Qual sua idade? ', (idade) => {
    console.log('Sua idade é :', idade);
    rl.close();
});