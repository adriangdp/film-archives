# Film Archives

[![Netlify Status](https://api.netlify.com/api/v1/badges/f1d3d010-24ce-46a6-82b0-398bc54e90c4/deploy-status)](https://app.netlify.com/projects/filmarchives/deploys)
![Size](https://img.shields.io/github/repo-size/aidanarr/nanas-quest)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=flat&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=flat&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white)


![Film Archives mockup](public/mockup-filmarchives.webp)

## Table of contents
- [Español](#ES)
    - [Cuenta de TMDB](#seguridad)
    - [Seguridad](#seguridad)
    - [Tech Stack](#tech-stack-es)
    - [Instalación](#instalación)
- [English](#EN)
    - [TMDB Account](#tmdb-account)
    - [Security](#security)
    - [Tech Stack](#tech-stack-en)
    - [Install](#install)


## ES

Film Archives está diseñada para simplificar la edición y gestión de colecciones de cine. ¿Quieres crear una colección temática de películas? ¿Quieres guardar las películas que te recomiendan?. Film Archives trata de simplificar el trabajo y se centra exclusivamente en:

- **Descubrimiento y búsqueda** de películas, series y las personas que han trabajado en ellas.
- **Gestión de las colecciones** de TMDB sin esfuerzo.
- **Acceso rápido** a la información fundamental para que puedas decidir si quieres añadir una película o serie a la lista.

Utiliza la API de [TMDB](https://www.themoviedb.org/), construida con el esfuerzo de una comunidad abierta de cinéfilos.

### Cuenta de TMDB
Para utilizar las colecciones, es necesario tener registrada una cuenta en [TMDB](https://www.themoviedb.org/). La aplicación solicitará permisos de terceros a [TMDB](https://www.themoviedb.org/) para leer y modificar datos del usuario.

### Seguridad

Film Archives utiliza localstorage para almacenar tu sessionID y datos de tu cuenta para funcionar. Estos datos son almacenados exclusivamente en tu navegador (¡y en ningún otro lugar!) y tienen un sistema de obfuscado extremadamente simple para protegerlo de miradas curiosas.

Las sessionID de [TMDB](https://www.themoviedb.org/) da acceso a cierta información de tu usuario y permite ciertas acciones como añadir y quitar películas de las colecciones.

Dado que las sessionID de [TMDB](https://www.themoviedb.org/) potencialmente no tienen fecha de caducidad, Film Archives cierra tu sesión cada 4 horas. Cada vez que se cierra sesión, se eliminan todos los datos almacenados para el uso de Film Archives.

### Tech Stack (es)

- **React Vite**
- **Zustand**
- **Tanstack Query**
- **Tailwind CSS**

### Instalación

 1. Solicitar una API KEY en [TMDB API](https://www.themoviedb.org/settings/api)
 2. Clonar el repositorio `git clone https://github.com/adriangdp/film-archives`
 3. En la carpeta raíz del proyecto, crear un archivo .env y asignar la API KEY de TMDB a la variable `VITE_TMDB_TOKEN`
 3. Usar el comando `npm install`
 4. Usar el comando `npm run dev`

 ## EN
Film Archives is designed to simplify film collection creation and manangement. Do you want to create a themed collection? Maybe another one with films suggested by a friend? Film Archives tries to simplify the work and focuses exclusively on:

- **Discovery and Search** of films, shows and the people in their cast and crew.
- **Collection manangement** using TMDB lists effortlessly.
- **Quick Access** to basic information to help you decide if you want to add the film to the collection.

Uses [TMDB](https://www.themoviedb.org/)'s API, built with with the effort of an open community of cinephiles.

### TMDB Account
Collections usage requires a [TMDB](https://www.themoviedb.org/) account. The application will request third-party access to read and modify user data. 

### Security

Film Archives uses localstorage to store your sessionID and user data in order to work. 

This data is stored exclusively in your browser (and nowhere else!), and it does it through a extremely simple obfuscation proccess to protect it from prying eyes. 

[TMDB's](https://www.themoviedb.org/) SessionID gives access to some of your user information, and allows certain actions such as adding or removing films and TV Shows from your collections.

Since [TMDB's](https://www.themoviedb.org/) sessionIDs potentially do not have an expiration date, Film Archives will log you out every 4 hours. During the log out, all the data stored by Film Archives to work will be deleted, requiring you to [request third-party](#tmdb-account) access again.


### Tech Stack (en)

- **React Vite**
- **Zustand**
- **Tanstack Query**
- **Tailwind CSS**

### Install

 1. Request an API KEY at [TMDB API](https://www.themoviedb.org/settings/api)
 2. Clone the repository `git clone https://github.com/adriangdp/film-archives`
 3. On the root folder, create an .env  file and assign the API KEY from TMDB to the variable `VITE_TMDB_TOKEN`
 3. Execute command `npm install`
 4. Execute command `npm run dev`