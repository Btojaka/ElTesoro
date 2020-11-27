document.addEventListener(
    "DOMContentLoaded",
    function(){
        // capturamos la respuesta introducida y la validamos

        //validacion del nombre introducido
        let validarNombre = () =>{
            let elemento = document.getElementById("nombre");
            if(!elemento.checkValidity()) {
                if(elemento.validity.valueMissing){
                    error(elemento, "Debe introducir un nombre", 'alerta');
                }else if(elemento.validity.patternMismatch){
                    if(elemento < )

                }
            }
        }
        
    },
    false
);