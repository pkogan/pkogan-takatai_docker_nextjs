
# takatai_docker_nextjs

**Dockerized Next.js Example Project with PokeAPI Integration**

## Description

This game project serves as a practical example of using Docker and Next.js to create a web application that integrates with the [PokeAPI](https://pokeapi.co/docs/v2). The PokeAPI is a RESTful API that provides comprehensive data about Pokémon.

The purpose of this project is to demonstrate how to set up a development environment using Docker, build a Next.js application, and connect it to an external API. By following the steps outlined in this README, you will be able to run the project locally and explore its functionality.

## Features

- Dockerized development environment
- Next.js framework for server-side rendering and client-side JavaScript
- Integration with the PokeAPI for retrieving Pokémon data

## Prerequisites

Before running this project, ensure that you have the following prerequisites installed on your machine:

- [Docker](https://www.docker.com/get-started)
- [Git](https://git-scm.com/downloads)

## Installation

1. Clone the repository:

```shell
git clone https://github.com/pkogan/pkogan-takatai_docker_nextjs.git
```

2. Change into the project directory:

```shell
cd project-repo
```

3. Run/Build the Docker image:

```bash
docker compose up -d
```

4. Access the application in your browser at `http://localhost:3000`.

## Usage
This is docker and [Next.js](https://nextjs.org/) project to practice

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. Click Tirar button (shuffle)

## Architecture

The project architecture consists of the following components:

### App Container

The App container is developed using Next.js and is responsible for presenting the front-end of the application. It is published on port 3000 and can be accessed through a web browser. 

### API Container
The API container is developed using Next.js and is only accessible from within the App container. It serves as an intermediary between the App container and the PokeAPI. The API container's main task is to select two random Pokémon from the PokeAPI by making requests to the PokeAPI's internet-facing endpoints. It retrieves the selected Pokémon data and sends it back to the App container for display.

## Acknowledgements

- [Docker](https://www.docker.com/)
- [Next.js](https://nextjs.org/)
- [PokeAPI](https://pokeapi.co/docs/v2)
