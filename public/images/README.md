# Foto del CV

El header del CV usa `/images/portrait.svg`.

Para usar la foto real (la del traje formal con pulgares arriba funciona muy bien para un CV):

1. Copia tu foto como `portrait.jpg` en esta carpeta.
2. En `src/components/HeaderCard.tsx` cambia `src="/images/portrait.svg"` por `src="/images/portrait.jpg"`.
3. Quita el prop `unoptimized` del `<Image>` para que Next.js optimice la imagen.

Aspecto recomendado: cuadrado (1:1), mínimo 256×256, idealmente 512×512.
