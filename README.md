Estructurado , implementando pruebas con vitest, modularizado, un disenio delicado y minimalista , que no sea muy brusco ni forzado , evitar animaciones incesarias, centarse en un buen html

Crear un disenio previo en un hoja de papel o un figma , para tener una referencia del projecto, 
Dedicar 3hora diarias al projecto

Html:
- Html estructurado correctamente 
- Html accesible y con aria si son necesarios
- Aplicacion de clases Bem de forma correcta

CSS: 

- Paleta de colores y fuentes que usaras minimalista no mezclar tantos colores
- Empezar con los colores de los textos y los background 
- Despues estructurad el layour y los elementos
- Ahora hacerlo para mobile , asegurarse bien que no se rompa el disenio

Programacion:

- Verificar cual es la funcion principal de tu programa, modularizar, tener en cuenta los modulos y que gestiones va a manejar en el projecto.

Test: 

- Despues realizar los test (TDD) con cada modulo.
  
Codificacion: 

- Ahora que ya tienes los test escritos , es hora de codificar para que pasen satisfactoriamente, entonces debes buscar la forma que con el menor codigo posible se pase un test.
- Una vez logrado esto , puedes regresar a la funcion y refactorizar. 
- Y asi con cada test y modulo.

De que trato el projecto ? :
Consumo de una Api con Vanilla Js usando axios, renderizando los datos en una tabla y permitiendo hacer un filtro de busqueda de los mismos, Al momento de hacer la busqueda de datos vas a usar los mismo datos de la tabla entonces es un filtro de los datos que ya estan ahi , si pero igual es un filtro de buscada , debido a que se van filtrando los datos sengun un elemento en especifico , como su nombre, su id , y ni bien escribes , va a mostrar los que coinciden. 

Pero mejor seria tener una tabla vacio y la api y cuando busques por ejemplo comido , 'hamburguesa' ==> se renderize en la tabla los datos que tienen que ver con la hamburguesa, no se los dos son buenas ideas. 

En cuanto al disenio, es algo minimalista con pocos detalles visules , una animacion en el titulo, paleta de colores pasiva no muy diversa , y las fuentes no tan estravagantes algo sin tantas distracciones , con un dibujo de un munieco que saludo y pequenios detalles de animacion que no duran mas de .5s. 
