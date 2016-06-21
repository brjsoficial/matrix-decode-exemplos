/* 
 * Exemplo condicionais serial
 * 
 * @author André Ferreira <andrehrf@gmail.com>
 */

var nome = "André";
var email = "andrehr@gmail.com";
var usuario = "andre";

if(nome === ""){
    console.log("Por favor informe um nome válido");
}
else if(!validateEmail(email)){
    console.log("Por favor informe um email válido");
}
else if(usuario === ""){
    console.log("Por favor informe um usuário válido");
}
else{
    console.log("Registro inserido com sucesso!!");
    //Inserir no banco de dados por exemplo
}

/**
 * @see http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
 */
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}