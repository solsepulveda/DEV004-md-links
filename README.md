# Markdown Links

## Índice

* [1. Preámbulo](#1-Resumen)
* [2. Resumen del proyecto](#2-Diagramas-de-flujo)
* [3. Objetivos de aprendizaje](#3-Planning)
* [4. Modo de uso](#4-modo-de-uso)

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

por ejemplo:

![image](https://github.com/solsepulveda/DEV004-md-links/assets/122575839/9e2bde3e-ac83-442c-be63-b4b362714ad4)


#### md-links <ruta>
Con este comando puedes visualizar text, href y file.

por ejemplo:

    md-links ./ejercicios/archivo.md

![image](https://github.com/solsepulveda/DEV004-md-links/assets/122575839/c8317759-cdd9-4112-b513-bca885ae7f94)
  
#### md-links <ruta> --stats

por ejemplo:

    md-links ./ejercicios/archivo.md --stats
  
  ![image](https://github.com/solsepulveda/DEV004-md-links/assets/122575839/cb5a634e-62e0-418c-8275-262b30f399d4)


#### md-links <ruta> --validate

por ejemplo:

        md-links ./ejercicios/archivo.md --validate

  ![image](https://github.com/solsepulveda/DEV004-md-links/assets/122575839/94b64f84-2554-4b69-aec0-fb36f553f4a8)

#### md-links <ruta> --stats --validate   ó   md-links <ruta> --validate --stats

por ejemplo:

    md-links ./ejercicios/archivo.md --validate --stats

  ![image](https://github.com/solsepulveda/DEV004-md-links/assets/122575839/8c1dae8f-47de-401d-88b6-cee8c92ed03c)