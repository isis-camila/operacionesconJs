//operaciones: suma, resta, división, multiplicación, modulo

//definimos variables
let boton= document.getElementById("button");
let resultado= document.getElementById("resultados");

//operaciones matemáticas
boton.addEventListener("click", function(){
    let dato1= parseInt(document.getElementById("number1").value);
    let dato2= parseInt(document.getElementById("number2").value);
    //comillas francesas temple literal
    resultado.innerHTML= `el resultado de la suma, resta, multiplicación, división y módulo son ${dato1 + dato2} ,${dato1 - dato2}, ${dato1 * dato2}, ${dato1 / dato2}, ${dato1 % dato2} , respectivamente. `;
    // escribir dentro de input serie resultado.value=
    //resultado.innerHTML +=
    //var=hola + ""
    console.log(dato1+dato2);
})



