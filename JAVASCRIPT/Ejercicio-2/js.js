const sueldo = prompt("De cuanto es su sueldo base: ");
const venta = prompt("Cuanto fue el total de las ventas este mes: ");
const pventa = 30/100;
const rpventa = parseInt(venta*pventa);
const Sventa = parseInt(sueldo) + parseInt(rpventa);

alert("usted gana este mes una suma de "+Sventa);