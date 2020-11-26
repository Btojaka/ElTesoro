# EN BUSCA DEL TESORO
###  Mini juego en Vanilla JavaScript
### Tarea evaluable de la asignartura Desarrollo Web en Entrono Cliente de DAW


#### Instrucciones del entregable:

##### Nuestra práctica debe contener los siguientes elementos:
+ 1) Un campo de un formulario donde introducir nuestro nombre y un botón “Introducir nombre”. Al
      pulsar este botón, si el campo de texto tiene menos de 4 letras mostrará el mensaje “El nombre
      debe tener 4 o más letras” mediante un alert. Si supera las 4 letras pero tiene algún número,
      aparecerá un alert diciendo “Números no permitidos”.
      Si las dos anteriores comprobaciones son correctas, se realizará una comprobación enviando por
      AJAX y usando el método POST dicho nombre a la URL
      https://apuntesfpinformatica.es/DWEC/entregable1-2.php y si responde OK se cambiará dicho
      nombre en el elemento HTML (como se indica más adelante), pero si responde ERROR se mostrará
      un alert pidiendo que el número letras sea impar.
      Si finalmente todo es correcto, se modificará algún elemento HTML (por ejemplo, un p dentro de
      un div) para que muestre el mensaje (“A luchar héroe :” + nombre) y activará un botón llamado
      “Jugar”.
      Si el botón “Introducir nombre”, se pulsa más de una vez, se repetirá el proceso.
+ 2) Habrá un botón “Jugar”, inicialmente deshabilitado y que se habilitará cuando se introduzca un
      nombre con éxito (ver apartado anterior).
      Este botón generará una tabla de 10x10. Cada celda contendrá una imagen de un suelo, excepto la
      más arriba a la izquierda que contendrá “a nuestro héroe” y la mas abajo a la derecha que
      contendrá un cofre.
      Para las imágenes podéis usar imágenes que os gusten o “tileset” de algún video juego. Un ejemplo
      este https://www.spriters-resource.com/snes/legendofzeldaalinktothepast/sheet/28736/
      Al pulsarse el botón “Jugar”, desaparecerá el botón “Introducir nombre” y aparecerá un botón
      “Tirar dado” y una imagen para el dado.
+ 3) El botón “Tirar dado” y su imagen asociada (Que inicialmente mostrará uno en el dado). Al pulsar
      “Tirar dado”, se obtendrá un número aleatorio entre el 1 y el 6, cambiandose la imagen del dado
      por la del número obtenido.
      Cada vez que tiremos el dado se actualizará un contador de tiradas realizadas.
      Además en la tabla de las imágenes, se pondrá de color rojo las casillas a las que el héroe podría
      mover (Suponemos el héroe solo puede moverse en horizontal y vertical).
      Para cambiar a rojo, se puede cambiar el borde a ese color o cambiar la imagen por alguna imagen
      roja, como queráis.
      Si hacemos click en una de ellas, el héroe se moverá a ella, dejando una casilla de suelo donde
      estaba anteriormente el héroe y quitando cualquier casilla en rojo.
      Si la casilla a la que llega el héroe es el cofre, se mostrará con un alert el mensaje “Héroe, has
      llegado al cofre en ”+numeroTiradas+” tiradas”.
+ 4) Al ganar, habrá que comprobar si en el LocalStorage hay guardado un valor “recordTiradas”.
      Si no lo hay, se mostrará un mensaje “Héroe, has establecido un récord de tiradas con
      ”+numeroTiradas+” tiradas”. Y se actualizará el valor “recordTiradas”.
      Si si lo había, deberéis mostrar un mensaje si no ha superado el récord de tiradas mínimas (“Récord
      no superado, el actual récord es “+recordTiradas) o si lo ha superado, mostrar otro mensaje similar
      al primero y actualizar el valor de “recordTiradas”.
+ 5) Se permite realizar la tarea usando el llamado “desarrollo” usando Javascript clásico. No
      obstante, todo el que demuestre en su entrega que ha seguido lo establecido en la “UD10.
      Javascript: del desarrollo clásico al desarrollo moderno” , se le sumarán 0.75 puntos extra (sobre
      10) a la nota del entregable.

