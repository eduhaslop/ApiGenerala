# ApiGenerala
El siguiente repo contiene un proyecto realizado en Node, el cual constituye una Api para un juego de generala. 
El frontend se encuentra en: https://github.com/bautiq/generala-react

Integrantes: Eduardo Haslop, Bautista Querejeta, Franco De Angelis, Facundo Tzoymaher


## Documentaciones

## Endpoints basicos de datos

### Usuarios:
## TODO importante, esto se va a quitar y agregar un endpoint publico Login y otro Register, para validar los datos ingresados desde el front.

GET `Path: /login`
- Se enviaran los datos de email y contrasenia en el header del request, se validara en el back y se devolvera si el request fue exitoso.

PUT `Path: /register`
- Se enviaran los datos: 

```
{
  nombre: pepin,
  mail: pepin1@gmail.com,
  pass: pepin123
}
```

Si el put es exitoso se auto-logeara el usuario y podra comenzar una partida.


GET `Path: /usuarios`

Devuelve una lista de los usuarios registrados

```
{
  nombre: pepin,
  mail: pepin1@gmail.com,
  pass: pepin123,
  victorias: 10,
  derrotas: 2,
  score: 200,
  record: 200,
  promedio: 100
}
```

GET `Path: /usuarios:id`

Devuelve un usuario apartir del id

```
{
  nombre: pepin,
  mail: pepin1@gmail.com,
  pass: pepin123,
  victorias: 10,
  derrotas: 2,
  score: 200,
  record: 200,
  promedio: 100
}
```

POST `Path: /usuarios`

```
{
  _id: 1,
  nombre: 'pepin',
  mail: 'pepin@gmail.com',
  pass: 'pepin123',
  victorias: 0,
  derrotas: 0,
  score: 0,
  record: 0,
  promedio: 0
}
```


### Ranking:

`Path: /ranking`

Devuelve un array de objetos ranking:
```
{
	usuario: 'pepito',
	posicion: 10,
	score: 1500,
	promedio: 1000
}
```
## Cruds Partidas
GET `Path: /partidas`
- Devuelve un listado con todas las partidas

GET `Path: /partidas:id`
- Devuelve la partida dependiendo del id enviado

POST `Path: /partidas`
- Ingresa una partida 
```
Recibe
{
  id: 1,
  usuario: 'pepin',
  nivel: 'dificil',
  tirada: 1, // En que tirada termino el juego
  juegos: 3,
  victoria: true,
  puntaje: 1500
}
```

## Endpoints del juego

`Path: /nuevaPartida`
- Este endpoint se encargara de devolvernos una partida con cierta dificultad para jugar, para elegir la dificultad se elige el PATH `/dificil`,  `/medio` y  `/facil` 
(TODO en un futuro planeamos unificar este path en uno solo y recibir la dificultad por query param, asi unificando la logica del back)

