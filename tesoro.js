window.onload=
    function(){
        //el botón enviar inicia la función validar
        document.getElementById("enviar").addEventListener('click', validar, false);
}
        console.log("recargando");
        //captura la respuesta introducida y la valida
        let validarNombre = () =>{
            alert("estoy validando");
            let elemento = document.getElementById("name");
            //borrarError('errorName', elemento);
            if(!elemento.checkValidity()) {
                if(elemento.validity.valueMissing){
                    error(elemento, "Debes introducir un nombre", 'errorName');
                    // hay que distinguir entre cuando faltan letras y cuanodo aparecen numeros
                }else if(elemento.validity.patternMismatch){
                    if(elemento.value.length<4){
                        alert("EL nombre debe tener más de 4 letras");
                    }else{
                        alert("Números no permitidos");
                    } 
                }
                return false;
            }
            return true;
        }

        let validacionFinal = (e) => {
            if(validarNombre) {
              return true; 
          } else {
            //cancela el evento (enviar a servidor) si la validación es false
            e.preventDefault();
            return false;
          }
        }

            //error debajo del input y cambio de borde en input
        let error = (elemento, mensaje, parrafo) => {
            document.getElementById(parrafo).innerHTML = mensaje;
            elemento.style.border = 'solid 2px rgb(214, 86, 118)';
            //elemento.focus(); no hace falta
        }
  

        //función que llama a realizar validaciones
        let validar = () => {
            alert("START");
            validarNombre();
            validacionFinal()
            solitictud();
            alert("STOP");
        }
        


function solitictud(){
     // se inicializa el objeto httpRequest para hacer la peticion al servidor
    let httpRequest= new XMLHttpRequest();

    // Abrimos la conexion
    httpRequest.open("POST", "https://apuntesfpinformatica.es/DWEC/entregable1-2.php", true);
    alert("Hola");
    console.log(httpRequest);

    httpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    console.log(httpRequest);
    alert('hola');
    
    httpRequest.onreadystatechange=function(){ // AQUI NO ENTRA 
        
       
        if(httpRequest.readyState==2){
            alert("estoy en 2");
        }
        if(httpRequest.readyState==3){
            alert("estoy en 3");
        }
        if(httpRequest.readyState==4){
            alert("ya estoy en 4");
            alert(httpRequest.status);
           if (httpRequest.status==200){
               alert(httpRequest.responseText+ " " + document.getElementById('name').value.length);

                if(httpRequest.responseText === 'OK'){
                    document.getElementById("jugar").disabled = false;
                    alert(document.getElementById('name').value);
                    document.getElementById('nom').innerHTML = document.getElementById('name').value;
                }else{
                    alert("Numero de letras debe ser impar");
                }
           } 
        }
    }
    httpRequest.send("nombre=" + document.getElementById('name').value); // OJO REPASAR
    alert(httpRequest.status);
    console.log(httpRequest);

}