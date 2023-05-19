
ScrollReveal().reveal('.footer-content');
ScrollReveal().reveal('.blog', {delay: 500});
ScrollReveal().reveal('.grillas', {delay: 500});
ScrollReveal().reveal('.grid', {delay: 500});

var getData = function(){
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    var correo = document.getElementById("correo").value;
    var telefono = document.getElementById("telefono").value;
    var nombre = document.getElementById("area").value;
    var mensaje = document.getElementById("mensaje").value;
    if(nombre == ""){
        document.getElementById("nombre").focus;
    }else{
        if(apellidos == ""){
            var apellidos = document.getElementById("apellidos").focus;
        }else{
            if(correo == ""){
                var correo = document.getElementById("correo").focus;
            }else{
                if(telefono == ""){
                    var telefono = document.getElementById("telefono").focus;
                }else{
                    if(area == ""){
                        var nombre = document.getElementById("area").focus;
                    }else{
                        if(mensaje == ""){
                            var mensaje = document.getElementById("mensaje").focus;
                        }else{
                            console.log(`Los datos son: ${nombre}, ${apellidos}, ${correo}`);
                            document.getElementById("name").value == "";
                            document.getElementById("apellidos").value == "";
                            document.getElementById("correo").value == "";
                            document.getElementById("telefono").value == "";
                            document.getElementById("area").value == "";
                            document.getElementById("mensaje").value == "";
                        }
                    }
                }
            }
        }
    }




    
}