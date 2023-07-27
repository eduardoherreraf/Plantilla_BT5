# Plantilla Bootstrap

Plantilla para Bootstrap 5 con preprocesador SASS y con la herramienta compilación y minificado Vite.

## Comenzando 🚀

Descargar el repo con:

- git clone ```<https://github.com/eduardoherreraf/Plantilla_BT5.git>``` (https) o,
- git clone ```<git@github.com>:eduardoherreraf/Plantilla_BT5.git``` (ssh)

Instalar el proyecto: ```npm install```.

Compilar el archivo: ```npm run build```.

Corregir las direcciones de llamado a los archivos css y js insertando un punto "." antes del slash, debe quedar asi en la cabecera ```<head>``` del archivo:

- ```<script type="module" crossorigin src="./assets/index-e9ba998b.js"></script>``` y
- ```<link rel="stylesheet" href="./assets/index-1b619488.css">```

Para evitar que el formateador de código cambie el formato del código de una sola línea al HTML clásico se debe en VSC desmarcar la opción Format On Save.

**En este momento ya se puede usar esta plantilla para hacer una página web con Bootstrap + SASS + Vite**

### Pre-requisitos 📋

- Tener instalado NodeJS

## Como se Construyó esta Plantilla

### Instalación Bootstrap v5.3

De la dirección ```https://getbootstrap.com/docs/5.3/getting-started/vite/```, se tomaron los siguientes comandos, los cuales son usados en la terminal:

#### Configuración inicial

```dos
mkdir my-project && cd my-project
npm init -y
npm i --save-dev vite
npm i --save bootstrap @popperjs/core
npm i --save-dev sass
```

#### Configuración del Espacio de Trabajo

```dos
mkdir {src,src/js,src/scss}
touch src/index.html src/js/main.js src/scss/styles.scss vite.config.js
```

#### Configuración de Vite

En el archivo ```vite.config.js```, se llena con:

```javascript
const path = require('path')

export default {
  root: path.resolve(__dirname, 'src'),
  build: {
    outDir: '../dist'
  },
  server: {
    port: 8080
  }
}
```

El archivo ```src/index.html```, se llena con:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap w/ Vite</title>
    <script type="module" src="./js/main.js"></script>
  </head>
  <body>
    <div class="container py-4 px-3 mx-auto">
      <h1>Hello, Bootstrap and Vite!</h1>
      <button class="btn btn-primary">Primary button</button>
    </div>
  </body>
</html>
```

En el archivo ```package.json``` debe quedar configurado así:

```json
{
  // ...
  "scripts": {
    "start": "vite",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  // ...
}
```

Iniciar el proyecto con vite: ```npm start```

### Importación Bootstrap v5.3

#### Importar SASS

En el archivo ```src/scss/styles.scss``` llenar con

```javascript
// Import all of Bootstrap's CSS
@import "bootstrap/scss/bootstrap";
```

Next we load the CSS and import Bootstrap’s JavaScript. Add the following to src/js/main.js

```javascript
// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
```

## Instalación plugin PurgeCSS

```npm i vite-plugin-purgecss```
,este plugin elimina toda clase de CSS que no sea utilizada.

## Instalación plugin HTML

```npm i vite-plugin-HTML```
, este plugin elimina toda espacio extra o cambio de línea del documento HTML y deja todo el código en una sola línea.

### Congiguración archivo vite.cfg.js

Este archivo se debe configurar asi:

```javascript
import htmlPurge from 'vite-plugin-purgecss'
import { createHtmlPlugin } from 'vite-plugin-html'

const path = require('path')

export default {
  root: path.resolve(__dirname, 'src'),
  plugins:[
    htmlPurge(),
    createHtmlPlugin({
      minify:true,
      removeComments:true,
      colapseWhitespaces:true
    })
  ],
  build: {
    outDir: '../dist',
    emptyOutDir:true
  },
  server: {
    port: 8080
  }
}
```

### Configuración archivo package.json

Asi debe quedar este archivo:

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "vite",
    "build": "vite build", // para realizar la compilación del proyecto para producción.
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "sass": "^1.64.1",
    "vite": "^4.4.7",
    "vite-plugin-html": "^3.2.0"
  },
  "dependencies": {
    "@popperjs/core": "^2.11.8",
    "bootstrap": "^5.3.0",
    "vite-plugin-purgecss": "^0.2.12"
  }
}
```

## Ejecución del proyecto

Iniciar la ejecución del proyecto ```npm start```.
Compilar el proyecto para obtener los archivos para producción ```npm run build```.

## Detalles Finales

Corregir las direcciones de llamado a los archivos css y js insertando un punto "." antes del slash, debe quedar asi:

- ```<script type="module" crossorigin src="./assets/index-e9ba998b.js"></script>``` y
- ```<link rel="stylesheet" href="./assets/index-1b619488.css">```

Para evitar que el formateador de código cambie el formato del código de una sola línea al HTML clásico se debe en VSC desmarcar la opción Format On Save.

## Construido con 🛠️

- [Bootstrap v5.3](https://getbootstrap.com/) - Librería web usado
- [Vite](https://vitejs.dev/) - Copilador de código
- [SASS](https://sass-lang.com/) - Preprocesador

## Autor ✒️

- **Eduardo Herrera Forero** - _Trabajo Inicial_ - [eduardoherreraf](https://github.com/eduardoherreraf)

## Licencia 📄

Este proyecto está bajo la Licencia libre.

---
⌨️ con ❤️ por [eduardoherreraf](https://github.com/eduardoherreraf) 😊
