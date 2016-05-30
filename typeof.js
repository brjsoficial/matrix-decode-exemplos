/* 
 * Exemplo de Typeof e tipos de dados no Javascript
 * 
 * @author André Ferreira <andrehrf@gmail.com>
 */

//Numeros
console.log("37 = " + typeof 37);
console.log("3.14 = " + typeof 3.14);
console.log("Math.LN2 = " + typeof Math.LN2);
console.log("Infinity = " + typeof Infinity);
console.log("NaN = " + typeof NaN);
console.log("Number(1) = " + typeof Number(1));

//Texto
console.log("'' = " + typeof "");
console.log("bla = " + typeof "bla");
console.log("String('abc') = " + typeof String("abc"));

//Algebra Booleana
console.log("true = " + typeof true);
console.log("false = " + typeof false);
console.log("Boolean(true) = " + typeof Boolean(true));

//Indefinido
console.log("undefined = " + typeof undefined);
console.log("declaredButUndefinedVariable = " + typeof declaredButUndefinedVariable);
console.log("undeclaredVariable = " + typeof undeclaredVariable);

//Objeto
console.log("{a:1} = " + typeof {a:1});
console.log("[1, 2, 4] = " + typeof [1, 2, 4]);
console.log("new Date() = " + typeof new Date());
console.log("new Boolean(true) = " + typeof new Boolean(true));
console.log("new Number(1) = " + typeof new Number(1));
console.log("new String('abc') = " + typeof new String("abc"));

// Função
console.log("function(){} = " + typeof function(){});
console.log("class C {} = " + typeof class C {});
console.log("Math.sin = " + typeof Math.sin);