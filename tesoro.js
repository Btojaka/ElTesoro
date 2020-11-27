document.addEventListener(
    "DOMContentLoaded",
    function(){
        // capturamos la respuesta introducida y la validamos

        //validacion del nombre introducido
        let validarNombre = () =>{
            let elemento = document.getElementById("name");
            borrarError('errorName', elemento);
            if(!elemento.checkValidity()) {
                if(elemento.validity.valueMissing){
                    error(elemento, "Debes introducir un nombre", 'errorName');
                    
                    // hay que distinguir entre cuando faltan letras y cuanodo aparecen numeros
                }else if(elemento.validity.patternMismatch){
                    //alert("EL nombre debe tener más de 4 letras");
                    alert("Números no permitidos");
                }
                return false;
            }
            return true;
        }

        let validacionFinal = () => {
            if(validarNombre) {
              return true; 
          } else {
            //console.log("prevent default")
            e.preventDefault();
            return false;
          }
        }

            //error debajo del input
        let error = (elemento, mensaje, parrafo) => {
            document.getElementById(parrafo).innerHTML = mensaje;
            document.getElementById(parrafo).className = 'wrong'
            elemento.style.border = 'solid 2px rgb(214, 86, 118)';
            //elemento.focus(); no hace falta
        }
         // alert
        // let error2 = (elemento, mensaje, parrafo) => {
        //     document.getElementById(parrafo).innerHTML = mensaje;
        //     document.getElementById(parrafo).className = 'wrong'
        //     elemento.style.border = 'solid 2px rgb(214, 86, 118)';
        //     //elemento.focus(); no hace falta
        // }
    
        let borrarError = (parrafo, elemento) => {
            document.getElementById(parrafo).innerHTML = "";
            elemento.style.border = '1px solid #ccc';
        
        }

        //realizar validaciones
        let validar = (e) => {
            validarNombre();
            validacionFinal()
            }


        //el botón enviar inicia la función validar
        document.getElementById("enviar").addEventListener('click', validar, false);


    },
    false
);