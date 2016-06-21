/* 
 * Exemplo swtich
 * 
 * @author André Ferreira <andrehrf@gmail.com>
 */

var signo = "peixe";

switch(signo){
    case "aries": 
        console.log("O Sol começa sua caminhada através de Câncer e se une a Vênus deixando você mais fechado e..."); 
    break;
    case "touro": 
        console.log("O Sol começa sua caminhada através de Câncer e se une a Vênus, seu regente, beneficiando..."); 
    break;
    case "gemeos": 
        console.log("O Sol começa sua caminhada através de Câncer e se une a Vênus indicando uma fase de maior..."); 
    break;
    default:
        console.log("Singo não encontrado");
    break;
}