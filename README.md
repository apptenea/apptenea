# Apptenea — Web principal

Web corporativa principal de Apptenea, preparada para publicar con GitHub Pages.

## Estructura

```text
apptenea-web/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── assets/
│   └── favicon.svg
└── README.md
```

## Publicar en GitHub Pages

1. Crea un repositorio en GitHub, por ejemplo: `apptenea-web`.
2. Sube todo el contenido de esta carpeta.
3. En GitHub entra en:
   `Settings → Pages`
4. En "Build and deployment" selecciona:
   - Source: `Deploy from a branch`
   - Branch: `main`
   - Folder: `/ (root)`
5. Guarda y espera a que GitHub Pages publique la web.

## Antes de publicar

En `index.html` cambia:
- `hola@apptenea.com` por tu correo real.
- El enlace de Instagram.
- Los enlaces de cada aplicación cuando tengas sus webs.

La web está hecha solo con HTML, CSS y JavaScript, por lo que no necesita servidor ni base de datos.
