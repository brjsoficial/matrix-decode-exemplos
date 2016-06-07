/* 
 * Exemplo números primos
 * 
 * @author André Ferreira <andrehrf@gmail.com>
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um numero ', (numeroasertestado) => {
    numeroasertestado = parseInt(numeroasertestado);
    
    if(numeroasertestado != NaN && numeroasertestado >= 0){    
        var quantasvezesorestofoizero = 0;

        for(var ponteirodarepeticao = 1; ponteirodarepeticao <= numeroasertestado; ponteirodarepeticao++){
            if(numeroasertestado % ponteirodarepeticao == 0)
                quantasvezesorestofoizero = quantasvezesorestofoizero + 1;
        }

        if(quantasvezesorestofoizero == 2)
            console.log('O numero é primo');
        else
            console.log('o numero não é primo');
    }
    else{
        console.log("Por favor digite um numero");
    }

    rl.close();
});


