# Markdown Links

## Índice

* [1. Resumen](#1-Resumen)
* [2. Planning](#2-Planning)
* [3. Diagramas de flujo](#3-Diagramas-de-flujo)
* [4. Modo de uso](#4-modo-de-uso)

***

## 1. Resumen

Markdown links es una herramienta de línea de comando (CLI) y
propia librería (o biblioteca - library) en JavaScript para detectar links rotos.
Al instalar este módulo serás capaz de detectar el status de tus links en archivos .md
además de validar estos mismos.


## 2. Planning

Planning en github, usando milestones e issues.

![image](https://github.com/solsepulveda/DEV004-md-links/assets/122575839/96f48b33-27e1-454c-bacc-bae1f33fdf52)

Estas fueron las Tareas a realizar:

![image](https://github.com/solsepulveda/DEV004-md-links/assets/122575839/9bbdb430-abff-43e1-b48f-905ae5de0244)
![image](https://github.com/solsepulveda/DEV004-md-links/assets/122575839/fed8fab0-70ed-4af7-8a50-7cb26132326b)


## 3. Diagramas de flujo

Para empezar este proyecto se realizaron dos diagramas de flujo para así poder tener trazados los pasos a seguir. Uno para la api y el otro para la línea de comando.

![api](imgapi.jpg)

![cli](imgcli.jpg)

## 4. Modo de uso

Instalación

Se puede instalar usando npm install solsepulveda/DEV004-md-links

Comandos:

#### md-links

![image](https://github.com/solsepulveda/DEV004-md-links/assets/122575839/c598ae59-ced8-41a2-aa13-d52ef68696ab)


#### md-links --help
Con este comando puedes visualizar todas las opciones que puedes utilizar.

por ejemplo:

![image](https://github.com/solsepulveda/DEV004-md-links/assets/122575839/14e864de-87be-49ff-8330-13f892be211d)


#### md-links <ruta>
Con este comando puedes visualizar text, href y file.

por ejemplo:

    md-links ./ejercicios/archivo.md

![image](https://github.com/solsepulveda/DEV004-md-links/assets/122575839/cb207898-4d93-447e-98dd-e0e4b6b5be4a)
  
#### md-links <ruta> --stats

por ejemplo:

    md-links ./ejercicios/archivo.md --stats
  
  ![image](https://github.com/solsepulveda/DEV004-md-links/assets/122575839/27676af2-1df2-4ce3-ad0e-e54856ebb06b)


#### md-links <ruta> --validate

por ejemplo:

        md-links ./ejercicios/archivo.md --validate

  ![image](https://github.com/solsepulveda/DEV004-md-links/assets/122575839/0d850c7a-e9ff-48dc-99a3-8e464e685f40)

#### md-links <ruta> --stats --validate   ó   md-links <ruta> --validate --stats

por ejemplo:

    md-links ./ejercicios/archivo.md --validate --stats

  ![image](https://github.com/solsepulveda/DEV004-md-links/assets/122575839/433925c5-b303-4265-aafc-d8368d1314de)