# takatai_docker_nextjs

**de ejemplo de Next.js con Docker y integración de PokeAPI**

## Descripción

Este proyecto de juego sirve como un ejemplo práctico de cómo utilizar Docker y Next.js para crear una aplicación web que se integra con la [PokeAPI](https://pokeapi.co/docs/v2). La PokeAPI es una API RESTful que proporciona datos completos sobre Pokémon.

El propósito de este proyecto es demostrar cómo configurar un entorno de desarrollo utilizando Docker, construir una aplicación Next.js y conectarla a una API externa. Siguiendo los pasos descritos en este README, podrás ejecutar el proyecto de forma local y explorar su funcionalidad.

## Características

- Entorno de desarrollo Dockerizado
- Framework Next.js para renderizado del lado del servidor y JavaScript del lado del cliente
- Integración con la PokeAPI para obtener datos de Pokémon

## Requisitos previos

Antes de ejecutar este proyecto, asegúrate de tener los siguientes requisitos previos instalados en tu máquina:

- [Docker](https://www.docker.com/get-started)
- [Git](https://git-scm.com/downloads)

## Instalación

1. Clona el repositorio:

```shell
git clone https://github.com/pkogan/pkogan-takatai_docker_nextjs.git
```

2. Ingresa al directorio del proyecto:

```shell
cd repo-del-proyecto
```

3. Ejecuta/Construye la imagen de Docker:

```bash
docker compose -f "docker_compose.yml" up -d --build

```

4. Accede a la aplicación en tu navegador en `http://localhost:3000`.

![imagen aplicación](https://raw.githubusercontent.com/pkogan/pkogan-takatai_docker_nextjs/main/assets/takatai.png)

## Uso

Este es un proyecto de Docker y [Next.js](https://nextjs.org/) para practicar.

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado. Haz clic en el botón "Tirar" (shuffle) mostrará 10 jugadas de duplas de pokemones aleatorias.

## Arquitectura

La arquitectura del proyecto consta de los siguientes componentes:

### Contenedor de la Aplicación (App Container)

El contenedor de la aplicación está desarrollado utilizando Next.js y es responsable de presentar el front-end de la aplicación. Se publica en el puerto 3000 y se puede acceder a él a través de un navegador web.

### Contenedor de la API (API Container)

El contenedor de la API está desarrollado utilizando Next.js y solo es accesible desde dentro del contenedor de la aplicación. Sirve como intermediario entre el contenedor de la aplicación y la PokeAPI. La tarea principal del contenedor de la API es seleccionar dos Pokémon aleatorios de la PokeAPI haciendo solicitudes a los puntos finales de la PokeAPI en Internet. Obtiene los datos de los Pokémon seleccionados y los envía de vuelta al contenedor de la aplicación para mostrarlos.

## Reconocimientos

- [Docker](https://www.docker.com/)
- [Next.js](https://nextjs.org/)
- [PokeAPI](https://pokeapi.co/docs/v2)