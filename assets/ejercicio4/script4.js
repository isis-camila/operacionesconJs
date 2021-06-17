//pasar días a años, días, horas

//inicio: solicito información
let dia= parseInt(prompt("Por favor ingrese la cantidad de días que desea convertir a años, días y horas"));
console.log (dia)

//procesos
año = Math.floor(dia/336);
meses = Math.floor((dia*12)/336);
semana = Math.floor((dia*48)/336);

//salida
alert("los " + dia + " que usted ha ingresado corresponden a " + año + " años, " + meses + " meses y " + semana + " semanas")

