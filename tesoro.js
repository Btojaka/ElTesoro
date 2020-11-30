// que ocurre una vez cargada la ventana 
window.onload= function(){
    // cuando pulse enviar
    document.getElementById("enviar").addEventListener('click', validar, false);
    // cuando pulse jugar
    document.getElementById("jugar").addEventListener('click', partida, false);   
}
        //captura la respuesta introducida y la valida
        let validarNombre = () =>{
            let elemento = document.getElementById("name");
            borrarError('errorName', elemento);
            if(!elemento.checkValidity()) {
                if(elemento.validity.valueMissing){
                    error(elemento, "Debes introducir un nombre", 'errorName');
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
        let validacionFinal = () => {
            if(validarNombre()) {
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
        }
        
        let borrarError = (parrafo, elemento) => {
            document.getElementById(parrafo).innerHTML = "";
            elemento.style.border = '1px solid #ccc';
           
          }

        //función que llama a realizar validaciones
        let validar = (e) => {
            if (validacionFinal()){
                solitictud();
            }
        }

let solitictud = () => {
     // se inicializa el objeto httpRequest para hacer la peticion al servidor
    let httpRequest= new XMLHttpRequest();

    // Abrimos la conexion
    httpRequest.open("POST", "https://apuntesfpinformatica.es/DWEC/entregable1-2.php", true); // servidor utilizado para la prácitca

    httpRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    
    httpRequest.onreadystatechange=function(){ // estados por los que pasa la petición  

        if(httpRequest.readyState==4){
        
            if (httpRequest.status==200){

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
    httpRequest.send("nombre=" + document.getElementById('name').value); // lo que se envía al servidor
}

let partida = () =>{
    // boton introducir nombre se esconde
    document.getElementById("enviar").style.display = "none";

    // contador de tiradas
    let contador = 0;
    document.querySelector("#contador").textContent = contador;

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

    const dado = [
        face1,
        face2,
        face3,
        face4,
        face5,
        face6
    ]

    // 1. crear el tablero
    let crearTablero = () => {
        // si hay un tablero lo borra
        if(document.getElementById("tablero")){
            document.getElementById("tablero").innerHTML = "";
        } 
    
        let i_celda= 0;
        // crea la tabla con las celdas y a las celdas les pone la imagen grass
        let table = document.createElement("table");
        tablero.appendChild(table);

        for (let i = 0; i < 10; i++) {
            let fila = document.createElement("tr");
            table.appendChild(fila)
                for (let j = 0; j < 10; j++) {
                let celda = document.createElement("td");
                let imagen = document.createElement("img");
                celda.setAttribute("id", i_celda);
                imagen.classList.add("miestilo");
                imagen.setAttribute("src", grass.img);
                fila.appendChild(celda);
                celda.appendChild(imagen);
                i_celda++;
            }           
        } 
        // en las celdas 0 y 99 se cambia la imagen grass por la de pirata y cofreLock
        let heroina = document.getElementById('0'); 
        let cofre = document.getElementById('99'); 
        let imagenH = heroina.getElementsByTagName('img'); // array
        let imagenC = cofre.getElementsByTagName('img'); // array
        imagenH[0].setAttribute("src", pirata.img) ; // casilla con imagen de pirata
        imagenC[0].setAttribute("src", cofreLock.img) ; // casilla con imagen de cofre cerrado

    }
    document.getElementById("dado").style.display = "block"; // aparece el boton dado
    let padreDado = document.getElementById("padreDado");

    // 2. crea dado 
    let crearDado = () =>{
        
        document.getElementById("padreDado").innerHTML="";
        
        //crea imagen dado 
        let imgDado = document.createElement('img');
        imgDado.setAttribute("src", dado[0].img);
        imgDado.setAttribute("id", "iDado" )
        padreDado.appendChild(imgDado);
    }
    // 3 saca numero aleatorio y cambia la imagen del dado
    let modifDado = () =>{
        let imgDado = document.getElementById('iDado');
        let numero = Math.floor(Math.random() * (7 - 1)) + 1;
        imgDado.setAttribute("src", dado[numero-1].img);

        let idH = parseInt(lugarHeroina());
        opcionesMov(idH, numero);

    }
    // devuelve el id del lugar donde se encunentra la heroína
    let lugarHeroina = () => {
        let lugarI = document.getElementsByTagName('img');
        for(let i =0; i<lugarI.length; i++){
            let busca = lugarI[i].src.search("/images/piratilla.png"); // busca la imagen en el array de imagenes
            if (busca != -1){
                let idPadre = lugarI[i].parentElement.id; // devuelve id del elemento padre de lugarI[i]
                return idPadre;
            }
        }
    }    
    // 4. Opciones mover
    let opcionesMov = (id, num) =>{

        document.getElementById("dado").style.display = "none"; // desaparece el boton dado para que no pueda volver a pulsarlo
        let ella = id;
        let cadenaElla = String(ella); // para poder coger el ultimo caracter, debe ser un string
        let dice = num;      
        let posicion= cadenaElla.substr(cadenaElla.length - 1);
        // operaciones con las que se obtienen los id de las celdas donde puede moverse la heroína
        let suma = ella + dice; 
        let resta = ella - dice;  
        let sMulti = ella + (10 * dice); 
        let rMulti = ella - (10 * dice);          
        let opcion1;
        let opcion2;
        let opcion3;
        let opcion4;

        if ((parseInt(posicion) + dice) <= 9 ){
            document.getElementById(`${suma}`).style.border = 'solid 3px rgb(214, 86, 118)';
            opcion1 =suma;
            
        }else{ // cuando es una opcion no válida
            opcion1="";
        }
        if (parseInt(posicion) > dice){  
            document.getElementById(`${resta}`).style.border = 'solid 3px rgb(214, 86, 118)';
            opcion2=resta;
        }else{ // cuando es una opcion no válida
            opcion2="";
        }
        if (sMulti <= 99 ){
            document.getElementById(`${sMulti}`).style.border = 'solid 3px rgb(214, 86, 118)';
            opcion3=sMulti;
        }else{ // cuando es una opcion no válida
            opcion3="";
        }
        if (rMulti>=0){
            document.getElementById(`${rMulti}`).style.border = 'solid 3px rgb(214, 86, 118)';
            opcion4=rMulti;
        }else{ // cuando es una opcion no válida
            opcion4="";
        }

        // evento que cuando cliques en celda de las ociones buenas llama a cambiarImagen      
        if(document.getElementById(`${opcion1}`)!= null){
            document.getElementById(`${opcion1}`).addEventListener("click", cambiarImagen);
        }
        if(document.getElementById(`${opcion2}`)!= null){
            document.getElementById(`${opcion2}`).addEventListener('click', cambiarImagen);
        }
        if(document.getElementById(`${opcion3}`)!= null){
            document.getElementById(`${opcion3}`).addEventListener('click', cambiarImagen);
        }
        if(document.getElementById(`${opcion4}`)!= null){
            document.getElementById(`${opcion4}`).addEventListener('click', cambiarImagen);
        }
    }
    // cambia imagen si clica encima de una opcion y desactiva los demas eventos. También comprueba si el juego ha acabado y muestra mensajes
    // de records, pone el contador de tiradas en marcha 

    let cambiarImagen=(e)=>{ 

        let posCeldaInicial = lugarHeroina();
        let celdaInicial = document.getElementById(`${posCeldaInicial}`);
        let imagInicial = celdaInicial.getElementsByTagName('img'); // array
        imagInicial[0].setAttribute('src', grass.img)

        let idCeldaElegida = e.target.parentElement.getAttribute("id");
        
        //6. final de juego
        if(idCeldaElegida === '99'){
            document.getElementById("dado").style.display = "none"; // desaparece boton dado porque ya no es necesario
            contador++;
            alert("Heroína, has llegado al cofre en "+contador+" tiradas.");
            let celdaFinal = document.getElementById(`${idCeldaElegida}`); // celda elegida
            let imagFinal = celdaFinal.getElementsByTagName('img'); // array
            imagFinal[0].setAttribute("src", cofreOpen.img);
            
            if(localStorage.getItem("recordTiradas")){

                if (localStorage.getItem("recordTiradas") > contador ){
                    //record
                    alert("Récord superado con "+ contador + " tiradas");
                }else if ( localStorage.getItem("recordTiradas")== contador){
                     // igualas
                     alert("Has igualado el récord con "+contador+" tiradas.");
                }else{
                    // no record
                    alert("Récord no superado, el actual récord es: "+ localStorage.getItem("recordTiradas"));
                }

            }else{
                localStorage.setItem("recordTiradas", contador);
                alert("Has establecido nuevo récord con "+ contador + " tiradas." );

            }
            // 5. mover a la pirata por el tablero
        }else{
            // suma movimientos a contador
            contador++;
            let celdaElegida = document.getElementById(`${idCeldaElegida}`); // celda elegida
            let imagEleccion = celdaElegida.getElementsByTagName('img'); // array
            imagEleccion[0].setAttribute("src", pirata.img);
        }
        // recorre el tablero y elimina bordes rojos
        let tdArray = document.getElementsByTagName('td');
        for(let i=0; i<tdArray.length; i++){
            tdArray[i].removeEventListener('click', cambiarImagen); // desactiva eventos
            tdArray[i].style.border = 'none';
        }
        document.getElementById("dado").style.display = "block"; // aparece el boton dado para volver a tirar
        
        document.querySelector("#contador").textContent = contador;
    }
        // cuando pulse tirar dado 
        document.getElementById("dado").addEventListener('click', modifDado, false); 
    crearTablero();
    crearDado();
}