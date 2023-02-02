# Memories APP PHOTOS

<img src="src\Img\preview memories.png" alt="preview-app">

Aplicación de React, Redux, API Unplash. MUI y Sass.
Diseño creado con Figma.

# Descripción y Requisitos

## Descripción

La aplicación dispone de 2 vistas:

📝  Vista Home o principal, en ella nada más cargar la página se muestran diferentes fotografías consumiendo la API de Unplash.

A través del buscador el usuario puede realizar una búsqueda por palabras claves y obtener diferentes imágenes o simplemente pulsar enter y recibirá fotografías aleatorias.

Las fotografías podrá descargarlas y/o guardarlas en favoritos.
El logotipo de la cámara le llevará siempre a la vista Home y el título le llevará a sus fotos guardadas

📝  Vista favoritos, aquí el usuario podrá guardar las fotografías que quiera, al pinchar sobre ellas se habilitará un modal con información de la misma en el que podrá editar la descripción de la fotografía.

Podrá ordenarlas por tamaño, altura, ancho y fecha, además de filtrar las mismas por palabras clave que estén en la descripción

## Requisitos

- Instalar create-react-app con la plantilla de Redux
- Crear 2 slices, searchSlice y favouritesSlice
searchSlice tendrá un thunk, para hacer la petición a la API de unsplash, favouritesSlice será totalmente síncrono.
- Cuando se hace una búsqueda sin input (‘’) devolver una selección de fotos aleatorias, unsplash tiene esta funcionalidad.
- Editar la descripción de las fotos favoritas en un modal, crear el modal fuera del bucle de fotos (photos.map())
- No guardar todos los datos de unsplash, selecciona solo los datos necesarios
- Solo reutilizar un componente si tiene sentido y no crea más problemas (e.g. el motor de búsqueda de las dos páginas) 


# Tecnologías

<a href="https://reactjs.org/">
    <img src="https://img.shields.io/badge/-REACT-000?style=for-the-badge&logo=react&logoColor=">
</a>
<a href="https://es.redux.js.org/">
    <img src="https://img.shields.io/badge/-REDUX-000?style=for-the-badge&logo=redux&logoColor=">
</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
    <img src="https://img.shields.io/badge/-HTML5-000?style=for-the-badge&logo=html5&logoColor=">
</a>
<a href="https://developer.mozilla.org/es/docs/Web/CSS">
    <img src="https://img.shields.io/badge/-CSS3-000?style=for-the-badge&logo=Css3&logoColor=">
</a>

<br>
<a href="https://sass-lang.com/">
    <img src="https://img.shields.io/badge/-SASS-000?style=for-the-badge&logo=Sass&logoColor=">
</a>
<a href="https://www.npmjs.com/"><img src="https://img.shields.io/badge/-NPM-000?style=for-the-badge&logo=npm&logoColor="></a>
<a href="https://getbem.com/">
    <img src="https://img.shields.io/badge/-BEM-000?style=for-the-badge&logo=bem&logoColor=">
</a>


# Scripts

En el directorio del proyecto, puedes ejecutar

### `npm start`

Ejecuta la aplicación en el modo de desarrollo.\
Abre [http://localhost:3000](http://localhost:3000) para verla en tu navegador.

La página se recargará cuando hagas cambios.\

## 🚀 Proyecto desplegado

- Github-pages : https://moyrasc.github.io/Memories-App-Photos/
