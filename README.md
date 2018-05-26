# Página de noticias: Documentación.


## Link de Rawgit:
https://rawgit.com/Bernat77/news/master/index.html

---

## Registro de versiones.
---
**v0.4**
* Página de la segunda noticia creada con las mismas características que la primera.
* Completadas las etiquetas de open graph.
* Corregidos algunos fallos de adaptabilidad del diseño en dispositivos tablet.
* RSS completado y validado.
---
**v0.3**
* Página de la segunda noticia creada y enlazada a index.html con la notica escrita, la imagen grande y un vídeo responsive.
* Cambios de ajuste de diseño realizados y sugerencias del profesor llevadas a cabo.
* Anuncios cambiados, pasan de ser una imagen gif a un iframe.
* Arreglada la carga múltiple de json's con autoscroll.
---
**v0.2**
La versión 0.2 añade la funcionalidad de cargar los ficheros Json y toda la codificación.

* Añadidos menús en la nav bar (Dropdown de categorías, dropdown de Login).
* Añadido botón funcional para activar y desactivar el autoscroll.
* Añadida codificación de la carga de Jsons al hacer scroll hacia abajo del todo.
* Añadido botón funcional para cargar más noticias, que en cuanto no hay más lo indica en su propio texto.
* Completada la maquetación general y aplicado el diseño.
* Completados los json con imágenes.
---
**v0.1:**

* La versión 0.1 es el diseño de la página, con las noticias precargadas, los anuncios colocados y poco más. Todavía necesita toda la codificación.

---
## Especificaciones y requisitos:

* El cliente encarga una página web codificada capaz de leer ficheros json desde servidor para cargar noticias, esta función se llevará a cabo a través al realizar scroll hacia abajo y con un botón de carga. Se utilizará bootstrap y jquery para la codificación.
* La página deberá tener publicidad, por lo que la versión escritorio deberá tener un espacio de 336px mínimo de espacio para publicidad, mientras que la versión móvil deberá contar con la capacidad para mostrar publicidad de 100px de alto.
* El diseño es de libre elección pero la adaptabilidad deberá ser total para cualquier dispositivo.
* Deberá realizarse un archivo rss para acelerar la publicación de la página en redes y el registro de nuestras últimas noticias por Google.

---
## Idea principal

La idea original y la que se ha acabado realizando consiste en una página dividida entre un banner con el logo de la página, una barra de navegación, la publicidad, el contenedor de las noticias y un pie de página.

* La barra de navegación estará fija arriba en todo momento y contendrá accesos rápidos de enlaces de interes, así como la sección de registro/ingreso.
* El banner será decorativo: Contará con un fondo grande y el logo de la página, este capaz de adaptarse a cualquier dispositivo.
* La publicidad de PC estará a la derecha de las primeras noticias fija y será de 300x600 píxeles, mientras que la de móvil será de 320x100px, estará centrada y fija entre el banner y el contenedor de noticias.
* El contenedor de noticias estará situado a la izquierda de la publicidad de pcy en la versión móvil ocupará todo el ancho de la ventana. La vista de noticias será en filas de dos noticias por cada una mientras que en móvil la visualización será en cascada.
* El pie de página contendrá un espacio en negro para fijar datos empresariales en caso de que se necesiten.

En la página de la noticia individual no habrá javascript y el diseño será casi idéntico al diseño de la página principal, se utilizará solo un contenedor para mostrar la noticia completa junto con las imágenes y/o videos que esta contendrá.
