/* 
 * Exemplo condicionais composto
 * 
 * @author André Ferreira <andrehrf@gmail.com>
 */

var idade = 18;

if(typeof idade == "number"){
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