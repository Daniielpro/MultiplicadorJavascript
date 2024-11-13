# Multiplicador de Dos Números

Este es un proyecto simple en JavaScript que permite multiplicar dos números ingresados por el usuario. La aplicación se ejecuta en un navegador web y también se puede ejecutar en un contenedor Docker.


## Características

- Interfaz simple para ingresar dos números.
- Botón para multiplicar los números.
- Muestra el resultado en la misma página.

## Tecnologías Utilizadas

- HTML
- CSS (opcional, puedes agregar estilos si lo deseas)
- JavaScript
- Docker

## Clonar el Repositorio

Para clonar este repositorio, usa el siguiente comando:

``bash

git clone https://github.com/Daniielpro/MultiplicadorJavascript.git

## Clonar el Repositorio

Metodo 1 Abrir Directamente el archivo html

1. Navega a la carpeta del proyecto.

2. Haz doble clic en index.html para abrirlo en tu navegador.

Metodo 2 Usar un servidor HTTP simple con Python

1. Abre la terminal.

2. Navega a la carpeta del proyecto.

3. Ejecuta el siguiente comando:
``bash

   python -m http.server 8081

4. Abre tu navegador y ve a http://localhost:8081/index.html

## Ejecucion Dcoker
Para Eejcutar lmediante Docker el proyecto, sigue estos pasos:

1. Abrir terminal desde la carpeta raiz del proyecto
2. Eejcuta el siguietne comando
   ```bash
   docker build -t username/appname .
3. Eejcuta el siguietne comando
   ```bash
   docker run -d -p 8081:8081 username/nameapp
