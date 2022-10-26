# Rick-Morty-Services-Data

Rick & Morty Services Data
crear una función que nos permita usar la api de Rick and Morty para obtener los personajes y episodios.

Crear una aplicación en nodejs que reciba un parámetro por consola (process.argv) y realice la función correspondiente a la operación que se le indique.

Listar los nombres de los personajes de la serie Rick and Morty
Listar los nombres episodios de la serie Rick and Morty
Mostrar el nombre del episodio con el Id indicado
Mostrar el nombre del personaje con el Id indicado
Ejemplo
node index.js personajes debe imprimir una lista de personajes
node index.js episodios debe imprimir una lista de episodios
node index.js episodios 1 debe imprimir el resultado obtenido del episodio con id 1
node index.js personajes 1 debe imprimir el resultado obtenido del personaje con id 1

Para ello se puede usar la api de Rick and Morty: https://rickandmortyapi.com/ y utilizar la libreria axios para hacer las peticiones.

Debes crear un archivo index.js, services.js y un archivo package.json con el comando npm init -y y luego instalar la libreria axios con el comando npm install axios.

En el archivo index.js debes importar la funcion getCharacters, getEpisodes, getCharacterEpisodes y getEpisodeCharacters del archivo services.js y usarlas para imprimir los resultados.


![Exercise](https://user-images.githubusercontent.com/79812118/198154477-d2ddea72-2630-4819-886f-0194a75eafab.jpg)


                                                                   Bibliografia
                                                                   
Para realizar este ejercicio se necesito implementar la documentación de axios que se encuentra en su pagina principal:


https://www.npmjs.com/package/axios

Tambien se hizo uso de la sintaxis destructuring assignment para importar funciones dentro de una misma variable 


                                                          Que aprendi?
                                                          
Anteriormente habia realizado diferentes peticiones mediante apis utilizando los metodos crud en el lenguaje Python sin embargo en el lenguaje Javascritp su sintaxis varia y se convierte en todo un reto. Por lo tanto es necesario seguir aprendiendo un buscar información sobre el tema 

Resultado final del ejercicio:

Personajes


![Personajes](https://user-images.githubusercontent.com/79812118/198155527-99196d1b-dce1-4876-becc-f96969cfe689.jpg)

Personajes por Id


![Personajes_id](https://user-images.githubusercontent.com/79812118/198155617-9b4534dd-8af2-4e4a-b1f4-a194d1412357.jpg)

Episodios:

![Episodios](https://user-images.githubusercontent.com/79812118/198155800-117acbcb-291b-4e05-9b94-9f17c9508323.jpg)

Episodios por Id del personaje :

![Episodios_idPersonaje](https://user-images.githubusercontent.com/79812118/198155986-f924643e-6c58-4444-8349-a0928ab6c55c.jpg)









