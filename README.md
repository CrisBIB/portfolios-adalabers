![image-in-local](./web/public/assets/images/portada.png)

<!-- ![image-in-dev](https://github.com/CrisBIB/portfolio-women-tech/blob/dev/web/src/images/portada.png) -->

<!-- ![image-in master](https://github.com/CrisBIB/portfolio-women-tech/blob/master/web/src/images/portada.png) -->

## Hola Adalabers!

Me dirijo en primer lugar a vosotras porque esta idea es fruto de lo mucho que me inspiráis cuando trabajamos juntas, cuando descubro vuestros proyectos (de programación y artísticos), o cuando simplemente disfrutamos de un rato de e-charla para compartir ideas, inquietudes y experiencias.

Estoy plenamente convencida de que es fundamental que haya más personas como nosotras sumando, creando y decidiendo en el mundo IT: mujeres profesionales, valientes y resilientes. Por eso, nos dedico este proyecto, confiando en que, con mucho trabajo, vuestro apoyo y el de Adalab, llegue a buen puerto y se convierta en una herramienta más para darnos a conocer y encontrar nuestra primera oportunidad como programadoras.

## Hola empresas!

Si habéis llegado hasta este repo, y estáis dedicando tiempo a leerme, es que algo he hecho bien; y eso ya me satisface. Este Readme, por ahora, es más una declaración de intenciones, que una forma de documentar el proyecto. Sin embargo, la idea es alimentarlo de contenido técnico según vaya progresando en su desarrollo.

Hasta este punto, puedo contar que la idea original, el [diseño creativo](https://www.canva.com/design/DAEYKV2pubY/DDNXDQA-H0fgJRz2_3Cukg/watch?utm_content=DAEYKV2pubY&utm_campaign=designshare&utm_medium=link&utm_source=sharebutton) y el [código](https://github.com/CrisBIB/portfolio-women-tech/tree/dev/web/src) son ©CrisBIB. Para la arquitectura y funcionalidad, cuento con las orientaciones de nuestros profesores de Adalab: Miguel M., Iván G. y Dayana R.

También puedo mostrar la estructura de carpetas. Como se puede ver, estoy utilizando HTML5 y SASS y JS para el desarrollo front-end:

    ├── server
    │ ├── data
    │ ├── src
    │ ├── index.js
    ├── web
    │ ├── node_modules
    │ ├── public
    │ ├── src
    │ │ ├── html
    │ │ │ ├── partials
    │ │ │ │ ├── adalabers
    │ │ │ │ │ └── main.html
    │ │ │ │ ├── companies
    │ │ │ │ │ └── main.html
    │ │ │ │ ├── index
    │ │ │ │ │ └── header.html
    │ │ │ │ │ └── main.html
    │ │ │ │ ├── visitors
    │ │ │ │ │ └── main.html
    │ │ │ │ └── anchors.html
    │ │ │ │ └── footer.html
    │ │ │ │ └── topMenu.html
    │ │ │ └── adalabers.html
    │ │ │ └── companies.html
    │ │ │ └── index.html
    │ │ │ └── visitors.js
    │ │ ├── images
    │ │ ├── js
    │ │ │ └── main.js
    │ │ ├── scss
    │ │ │ ├── components
    │ │ │ ├── core
    │ │ │ ├── layout
    │ │ │ ├── pages
    │ │ │ └── main.scss
    │ │ └── index.js
    ├── package-lock.json
    ├── package.json
    ├── .gitignore
    ├── README.md

Algo de back-end ya habréis intuido. Aquí estará el mayor reto, junto con el testing. Pero lo sacaré adelante, solo necesito tiempo y confianza (sobretodo propia).

## Hola visitantes!

Visitantes... pronto tendré más que mostrar.

<!--```
 Delicious Profile Card

 Si quieres instalar y ejecutar el proyecto completo, sigue los siguientes pasos:

1. Clona este repositorio
2. Entra en la carpeta raíz
3. Ejecuta en la terminal `npm install`
4. Para lanzar el proyecto: ejecuta en la terminal `npm start` o `npm run dev`
   Si quieres probar o modificar la parte del front-end con React:
5. Entra en la carpeta `/web/`
6. Ejecuta npm install
7. Para lanzar sólo la parte front-end del proyecto, ejecuta `npm start` dentro de la carpeta `/web/`

├── node_modules
├── public
├── src
├── view/pages
├── web
│   ├── node_modules
│   ├── public
│   ├── src
│   │   ├── components
│   │   │   ├── App.js
│   │   │   ├── CardPage.js
│   │   │   ├── Collapsable.js
│   │   │   ├── Design.js
│   │   │   ├── Fill.js
│   │   │   ├── Footer.js
│   │   │   ├── Form.js
│   │   │   ├── GetAvatar.js
│   │   │   ├── Header.js
│   │   │   ├── Input.js
│   │   │   ├── LandingPage.js
│   │   │   ├── Main.js
│   │   │   ├── Palettes.js
│   │   │   ├── PhotoCard.js
│   │   │   ├── Reset.js
│   │   │   ├── Share.js
│   │   │   ├── ShareCreated.js
│   │   │   └── ShareFail.js
│   │   ├── images
│   │   ├── services
│   │   │   ├── api.js
│   │   │   └── localStorage.js
│   │   ├── stylesheets
│   │   │   ├── core
│   │   │   │   ├── _functions.scss
│   │   │   │   ├── _mixins.scss
│   │   │   │   ├── _reset.scss
│   │   │   │   └── _variables.scss
│   │   │   ├── layout
│   │   │   │   ├── _collapsable.scss
│   │   │   │   ├── _designSection.scss
│   │   │   │   ├── _fillSection.scss
│   │   │   │   ├── _footer.scss
│   │   │   │   ├── _formSection.scss
│   │   │   │   ├── _getAvatar.scss
│   │   │   │   ├── _header.scss
│   │   │   │   ├── _mainHome.scss
│   │   │   │   ├── _mainprofile.scss
│   │   │   │   ├── _profile.scss
│   │   │   │   ├── _resetSection.scss
│   │   │   │   └── _shareSection.scss
│   │   │   ├── pages
│   │   │   │   └── index.scss
│   │   │   ├── App.scss
│   │   │   └── index.scss
│   │   └── index.js
│   ├── .gitignore
│   ├── desktop.ini
│   ├── package-lock.json
│   └── package.json
├── .gitignore
├── README.mde
├── desktop.ini
├── package-lock.json
└── package.json
```
 -->
