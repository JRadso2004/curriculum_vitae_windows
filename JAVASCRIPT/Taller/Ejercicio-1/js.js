/* Ejercicio 1 - Una tienda ofrece un 25% de
descuento por cada compra. Un cliente desea
saber cuánto deberá pagar por su compra.

let com = prompt("¿Cuál es el valor total de su compra?");
let des = 25/100;
let comd = parseInt(com) - parseInt(com*des);
alert("El valor de su compra con el 25% de descuento es: "+comd);*/

/* Ejercicio 2 - Suponga que un individuo desea invertir
su capital en un banco y desea saber cuánto dinero ganará
después de un mes si el banco paga a razón de 2% mensual.

let inv = prompt ("¿Cuánto dinero piensa invertir?");
let pgan = 2/100;
let gan = parseInt(inv*pgan);
let dint = parseInt(inv) + parseInt (gan)
alert ("Si invirtiera "+inv+" su ganacia del 2% sería "+gan+" y su dinero total sería "+dint);*/

/* Ejercicio 3 NO LO HE HECHO- Un alumno desea saber cuál será su
calificación final en la materia de Algoritmos. Dicha
calificación se compone de los siguientes porcentajes:
a. 55% del promedio de sus tres calificaciones parciales.
b. 30% de la calificación del examen final.
c. 15% de la calificación de un trabajo final.

let cal1 = prompt ("Ingrese la nota de su primera calificación.");
let cal2 = prompt ("Ingrese la nota de su segunda calificación.");
let cal3 = prompt ("Ingrese la nota de su tercera calificación.");
let exf = prompt ("Ingrese la nota de su examen final");
let trf = prompt ("Ingrese la nota de su trabajo final");
let cal = parseInt(cal1+cal2+cal3)/3
let porcal = 55/100;
let porexf = 30/100;
let portrf = 15/100;
let pcal = parseInt(cal*porcal);
let pexf = parseInt(exf*porexf);
let ptrf = parseInt(trf*portrf);
let cf = parseInt(ptrf) + parseInt(pexf) + parseInt(pcal);
alert ("Su calificación final es de "+cf);*/

/* Ejercicio 4 - El dueño de una tienda compra un artículo
a un precio determinado. Obtener el precio en que lo debe
vender para obtener una ganancia del 30%.

let vala = prompt ("Ingrese el valor del artículo.");
let pg = 30/100
let valva = parseInt(vala) + parseInt(vala*pg);
alert ("Si el valor del producto que va a comprar es de "+vala+", debería venderlo en "+valva+" para poder tener un 30% de ganacias.");*/

/* Ejercicio 5 - Un taxi cobra por una carrera 15 mil pesos por kilómetro recorrido y 2 mil por
minuto. Determine el monto a pagar por una carrera.

let km = prompt ("¿Cuántos kilómetros ha recorrido?");
let min = prompt ("¿Cuántos minutos demoró en recorrer esta distancia?");
let dkm = 15000;
let dmin = 2000;
let dtkm = parseInt(dkm) * parseInt(km);
let dtmin = parseInt(dmin) * parseInt(min);
let vcrr = parseInt(dtkm) + parseInt (dtmin);
alert("El valor a pagar por esta carrera es de: "+vcrr);*/

/* Ejercicio 6 - Realizara un programa en el cual se van a leer tres números y determinar el
cuadrado de cada uno de ellos.

let num1 = prompt ("Ingrese el primer número.");
let num2 = prompt ("Ingrese el segundo número.");
let num3 = prompt ("Ingrese el tercer número.");
cnum1 = parseInt(num1) * parseInt(num1);
cnum2 = parseInt(num2) * parseInt(num2);
cnum3 = parseInt(num3) * parseInt(num3);
alert ("El cuadrado del número "+num1+" es "+cnum1+". El cuadrado del número "+num2+" es "+cnum2+". Y por último, el cuadrado del número "+num3+" es "+cnum3);*/

/* Ejercicio 7 - En un hospital existen tres áreas:
Ginecología, Pediatría, Traumatología. El presupuesto
anual del hospital se reparte conforme a la sig. tabla:

Área            Porcentaje del presupuesto
Ginecología     40%
Traumatología   30%
Pediatría       30%

Obtener la cantidad de dinero que recibirá cada área,
para cualquier monto presupuestal.

let pre = prompt ("Ingrese el presupuesto anual del hospital.");
let pgin = 40/100;
let ptra = 30/100;
let pped = 30/100;
let pregin = parseInt(pre*pgin);
let pretra = parseInt(pre*ptra);
let preped = parseInt(pre*pped);
alert("El presupuesto de este año es de $"+pre+". Por lo tanto, el área de Ginecología recibirá $"+pregin+". Por otro lado, el área de Traumatología recibirá $"+pretra+". Y por último, el área de Pediatría recibirá $"+preped);*/

/* Ejercicio 8 - El dueño de una tienda compra un
artículo a un precio determinado. Obtener el precio
en que lo debe vender para obtener una ganancia del 30%.

let vala = prompt ("Ingrese el valor del artículo.");
let pg = 30/100
let valva = parseInt(vala) + parseInt(vala*pg);
alert ("Si el valor del producto que va a comprar es de "+vala+", debería venderlo en "+valva+" para poder tener un 30% de ganacias.");*/

/* Ejercicio 9 - Tres personas deciden invertir su dinero para fundar una empresa. Cada una de
ellas invierte una cantidad distinta. Obtener el porcentaje que cada quien invierte
con respecto a la cantidad total invertida.*/

let per1 = prompt("Ingrese la cantidad de dinero que invirtió la persona 1.");
let per2 = prompt("Ingrese la cantidad de dinero que invirtió la persona 2.");
let per3 = prompt("Ingrese la cantidad de dinero que invirtió la persona 3.");
let dt = parseInt(per1) + parseInt(per2) + parseInt(per3);
let up = 1/100;
let dtup = parseInt(dt*up);
let pper1 = parseInt(per1/dtup);
let pper2 = parseInt(per2/dtup);
let pper3 = parseInt(per3/dtup);
alert("La cantidad total de dinero invertida es: "+dt+". Por lo tanto, la persona 1 invirtió un %"+pper1+", la persona dos invirtió un %"+pper2+" y la persona 3 invirtió un %"+pper3);