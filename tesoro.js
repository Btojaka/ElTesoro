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
            let elemento = document.getElementById("name");
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
        

        if(httpRequest.readyState==2){

        }
        if(httpRequest.readyState==3){
        }
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

    const dado = [
        face1,
        face2,
        face3,
        face4,
        face5,
        face6
    ]
    let crearTablero = () => {
        if(document.getElementById("tablero")){
            document.getElementById("tablero").innerHTML = "";
        } 
    
        let i_celda= 0;
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

                imagen.setAttribute("src", imagTablero[1].img);
                
                fila.appendChild(celda);
                celda.appendChild(imagen);
                i_celda++;
            } 
            //document.getElementById('0').           
        } 
        let heroina = document.getElementById('0'); // celda con id 0
        let cofre = document.getElementById('99'); // celda con id 99
        let imagenH = heroina.getElementsByTagName('img'); // array
        let imagenC = cofre.getElementsByTagName('img'); // array
        imagenH[0].setAttribute("src", imagTablero[0].img) ; // casilla con imagen de pirata
        imagenC[0].setAttribute("src", imagTablero[2].img) ; // casilla con imagen de cofre cerrado

        return heroina.id;

    }
    document.getElementById("dado").style.display = "block"; // aparece el boton dado
    let padreDado = document.getElementById("padreDado");

    // 2. creo dado 
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

        console.log("dentro de modificar: " + numero);
        
        let idH = parseInt(lugarHeroina());
        opcionesMov(idH, numero);

    }
    // devuelve el id del lugar donde se encunentra la heroína
    let lugarHeroina = () => {
        let lugarI = document.getElementsByTagName('img');
        for(let i =0; i<lugarI.length; i++){
            console.log(lugarI[i].src);
            let busca = lugarI[i].src.search("/images/piratilla.png");
            if (busca != -1){

             let idPadre = lugarI[i].parentElement.id; // devuelve id del elemento padre de lugarI[i]
             console.log("padre: "+idPadre);
                return idPadre;
            }
        }

    }

    // 4. Opciones mover
    // obtener id celda y num dado para dar las opciones => (id celda +-num dado) [sino cambiar de decena] y id+-(num dado*10) [sin >99 ni < 0]
    let opcionesMov = (id, num) =>{
        // 15 celda
        //4 dado
        console.log(id);
        let ella =  parseInt(id); // string a number
        let dice = num;

        // operaciones con las que se obtienen los id de las celdas donde puede moverse la heroína
        let suma = ella + dice; // 19
        console.log(dice); //num
        console.log(ella); // nan
        console.log(suma);
        let resta = ella - dice;  // -1
        let sMulti = ella + (10 * dice); // 32
        let rMulti = ella - (10 * dice); // 
        let maxS = 10-(ella+1); // 7 
        let maxR = ella; // 2
        let maxMs =  ella + 10 * (10-(ella+1)); //72
        let maxMr = 10*ella;

        if (ella <= maxS ){
            //alert("estoy cambiando el borde a rojo");
            document.getElementById(`${suma}`).style.border = 'solid 5px rgb(214, 86, 118)';
        }
        if (dice <= maxR){
            document.getElementById(`${resta}`).style.border = 'solid 5px rgb(214, 86, 118)';
        }
        if (sMulti <= maxMs ){
            document.getElementById(`${sMulti}`).style.border = 'solid 5px rgb(214, 86, 118)';
        }
        if (rMulti<= maxMr){
            document.getElementById(`${sMulti}`).style.border = 'solid 5px rgb(214, 86, 118)';
        }

    }
        // cuando pulse tirar dado 
        document.getElementById("dado").addEventListener('click', modifDado, false); 
   
    //let celdaH = 
    crearTablero();
    crearDado();
}

