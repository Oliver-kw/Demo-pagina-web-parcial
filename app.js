function validar(){

    event.preventDefault();

    let nombre = document.getElementById("Nombre");
    let ape = document.getElementById("Apellido");
    let di = document.getElementById("Direccion");
    let co = document.getElementById("Correo");
    let tel = document.getElementById("Telefono");
    let mensaje = document.getElementById("mensaje");


    if(nombre.value === "" || ape.value ==="" || di.value==="" || co.value === "" || tel.value === ""){
        mensaje.textContent = "Por favor llenar todos los campos";
        mensaje.className = "Error";
    }else{
        mensaje.textContent = "Nuestros asistentes verificaran sus Datos para validar su peticion";
        mensaje.className = "Correcto";
    }

}