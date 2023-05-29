# Markdown Links

## Índice

* [1. Preámbulo](#1-Resumen)
* [2. Resumen del proyecto](#2-Diagramas-de-flujo)
* [3. Objetivos de aprendizaje](#3-Planning)
* [4. Consideraciones generales](#4-modo-de-uso)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Entregables](#6-entregables)

***

## 1. Resumen

Markdown links es una herramienta de línea de comando (CLI) y
propia librería (o biblioteca - library) en JavaScript para detectar links rotos.


## 2. Diagramas de flujo

Para empezar este proyecto se realizaron dos diagramas de flujo para así poder tener trazados los pasos a seguir. Uno para la api y el otro para la línea de comando.

![api](imgapi.jpg)

![cli](imgcli.jpg)

## 3. Planning

Planning en github, usando milestones e issues.

## 4. Modo de uso

Instalación

Se puede instalar usando npm install solsepulveda/DEV004-md-links

Comandos:

#### md-links

#### md-links --help
Con este comando puedes visualizar todas las opciones que puedes utilizar.

#### md-links <ruta>
Con este comando puedes visualizar text, href y file.

por ejemplo:

    md-links ./ejercicios/archivo.md

![example](image.png)
#### md-links <ruta> --stats

por ejemplo:

    md-links ./ejercicios/archivo.md --stats

#### md-links <ruta> --validate

por ejemplo:

        md-links ./ejercicios/archivo.md --validate

#### md-links <ruta> --stats --validate   ó   md-links <ruta> --validate --stats

por ejemplo:

    md-links ./ejercicios/archivo.md --validate --stats