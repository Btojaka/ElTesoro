// que ocurre una vez cargada la ventana 
window.onload= function(){
    // cuando pulse enviar
    document.getElementById("enviar").addEventListener('click', validar, false);
    // cuando pulse jugar
    document.getElementById("jugar").addEventListener('click', partida, false);
}

        console.log("recargando");
        //captura la respuesta introducida y la valida
        let validarNombre = () =>{
            //alert("estoy validando");
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
        }

        let validacionFinal = () => {
            if(validarNombre) {
                return false;
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
        let validar = (e) => {
            //alert("START");
            validarNombre();
            validacionFinal()
            if (validacionFinal){
                solitictud();
            }
            //alert("STOP");
        }
         //el botón enviar inicia la función validar


    
let solitictud = () => {
     // se inicializa el objeto httpRequest para hacer la peticion al servidor
    let httpRequest= new XMLHttpRequest();

    // Abrimos la conexion
    httpRequest.open("POST", "https://apuntesfpinformatica.es/DWEC/entregable1-2.php", true);
    //alert("Hola");
    console.log(httpRequest);

    httpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    console.log(httpRequest);
    //alert('hola');
    
    httpRequest.onreadystatechange=function(){ // AQUI NO ENTRA 
        

        if(httpRequest.readyState==2){
           // alert("estoy en 2");
        }
        if(httpRequest.readyState==3){
           // alert("estoy en 3");
        }
        if(httpRequest.readyState==4){
            // alert("ya estoy en 4");
            // alert(httpRequest.status);
        if (httpRequest.status==200){
            alert(httpRequest.responseText+ " " + document.getElementById('name').value.length);

                if(httpRequest.responseText === 'OK'){
                    document.getElementById("jugar").style.display = "block";
                    document.getElementById("jugar").disabled = false;
                  //  alert(document.getElementById('name').value);
                    document.getElementById('nom').innerHTML = document.getElementById('name').value;
                }else{
                    alert("Numero de letras debe ser impar");
                }
        } 
        }
    }
    httpRequest.send("nombre=" + document.getElementById('name').value); // OJO REPASAR
    // alert(httpRequest.status);
    // console.log(httpRequest);

}


let partida = () =>{
    document.getElementById("jugar").style.display = "none";
    // imagenes
    const pirata = {
        name: "pirata",
        img: "./images/piratilla.png"
    };
    const grass = {
        name: "grass",
        img: "./images/grass.png"
    };
    const cofreLock = {
        name: "cofreLock",
        img: "./images/cofreLock.png"
    };
    const cofreOpen = {
        name: "cofreOpen",
        img: "./images/cofreOpen.png"
    };
    const face1 = {
        name: "1",
        img: "./images/1.png"
    };
    const face2 = {
        name: "2",
        img: "./images/2.png"
    };
    const face3 = {
        name: "3",
        img: "./images/3.png"
    };
    const face4 = {
        name: "4",
        img: "./images/4.png"
    };
    const face5 = {
        name: "5",
        img: "./images/5.png"
    };
    const face6 = {
        name: "6",
        img: "./images/6.png"
    };
    // tablero
    let tablero = document.querySelector(".tablero");


    // 1. Crear tablero 
    const imagTablero = [
        pirata,
        grass,
        cofreLock
    ]
    function crearTablero() {
        for (let i = 0; i < 10; i++) {
            for(let j=0; j<10; j++){
                let celda = document.createElement("img");
                celda.setAttribute("src", "./images/grass.png");
                celda.setAttribute("data-id", i); 
                celda.classList.add("miestilo");
            // carta.addEventListener("click", girarCarta);
                tablero.appendChild(celda);
            }        
        }
    }  
    function borrarTablero() {
        for (let i = 0; i < 10; i++) {
            
            for(let j=0; j<10; j++){
                let celda= document.querySelector("img")
                document.getElementById('tablero').removeChild(celda);   
            }
        }
    }
    // borra tablero existente
    borrarTablero();
    // crea nuevo tablero
    crearTablero();
    // 2. Generar imagen dado con la cara 1 ( y su boton)
    // 3. Funcion lanzar dado cuando click en boton
    // 4. Opciones mover

}



