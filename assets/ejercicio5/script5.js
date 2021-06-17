//suma y promedio de 5 dígitos

//defino variables

jquery
$(document).ready(function(){
    //variables globales
     let data1 = '';
     let data2 = '';
     let data3 = '';
     let data4 = '';
     let data5 = '';

     //con id llamo a html, la nombre variable dato1 y la convierto a número como parseInt
    $('#number1').on('change',function(){
        dato1 = $('#number1').val();
        data1 = parseInt(dato1);
    });

    $('#number2').on('change',function(){
        dato2 = $('#number2').val();
        data2 = parseInt(dato2);
                
            });
    
    $('#number3').on('change',function(){
        dato3 = $('#number3').val();
        data3 = parseInt(dato3);
                
    });

    $('#number4').on('change',function(){
        dato4 = $('#number4').val();
        data4 = parseInt(dato4);
        
    });

    $('#number5').on('change',function(){
        dato5 = $('#number5').val();
        data5 = parseInt(dato5);
        
    });

    //procesos
        
        $('#suma').on('click',function(){
            suma = data1 + data2 + data3 + data4 + data5;
                $('#resultado_suma').val(suma);
                 
            });

        $('#promedio').on('click',function(){
            promedio = ((data1 + data2 + data3 + data4 + data5)/5);
            $('#resultado_promedio').val(promedio);
                 
            });


})
