# Foto del CV

El header del CV (`src/components/HeaderCard.tsx`) usa `/images/portrait.jpg` en un marco cuadrado (1:1).

Para cambiar la foto, reemplaza `portrait.jpg` por una imagen cuadrada, idealmente de 640×640 o más, con la cara centrada.

La misma foto se usa en la imagen de vista previa al compartir el sitio (`src/app/[locale]/opengraph-image.tsx`). Si la reemplazas, vuelve a pedir la vista previa en el Post Inspector de LinkedIn y en el Sharing Debugger de Facebook.
