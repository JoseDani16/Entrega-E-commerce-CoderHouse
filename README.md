# Guía de lectura

1. Descripción General
2. Estado del proyecto
3. Funcionamiento (Firestore Api)
4. Librerías usadas
5. Bugs sin solución (Por ahora)

# 1

## Descripción General

Este proyecto se desarrolló por motivos de aprendizaje en **_REACT_**. Se trata de un **e-commerce** muy sencillo capaz de obtener productos desde una base de datos, y una operación de compra básica con actualización de stock, sin autentificación ni datos reales.

# 2

## Estado del proyecto

Actualmente cuenta con algunos desperfectos que no afectan al funcionamiento.
Cuenta con

- Las funciones para llamar a una base de datos y obtener los productos
- Los filtra segun su categoría
- Muestra detalles
- Añade a un Carrito con funciones para eliminar eliminar items y cerrar la compra actualizando el stock

# 3

## Funcionamiento (Firestore Api)

El uso de esta api no es muy complicado. La base de datos tiene una colección para el almacenamiento de productos y otra para almacenamiento de ordenes de compra. El código incluye las keys para la utilización su contenido.
[Para más información](https://firebase.google.com/products/firestore "información sobre Firestore")

# 4

## Librerías usadas

- Styled Components

```
  npm i styled-components
```

- React Icons

```
  npm i react-icons
```

- React Router Dom

```
  npm i react-router-dom
```

- react-bootstrap

```
  npm i react-bootstrap bootstrap
```

- Sweet Alert 2

```
npm i sweetalert2
```

# 5

## Bugs sin solución (Por ahora)

No estaba en la idea original que:

1. Al momento de confirmar la compra y actualizar el stock en la base de datos, se guarda una propiedad en el objeto del producto llamada 'id'. Innecesaria ya que el objeto ya conlleva una misma id asociada en la colección.
2. No logré que, aunque la página no fuera tan extensa (Altura), el footer quede pegado a la parte inferior de la pantalla

## Instalación

```
$ git clone https://example.com
$ cd ../ubicacion/del/archivo
$ npm install
$ npm start

```

Deberas agregar las librerías por tu cuenta
![e-Shop - Google Chrome 2022-10-19 22-29-43](https://user-images.githubusercontent.com/102182321/196835753-9fcc6dd7-c8d5-4733-9314-860ad5070701.gif)
Saludos!!
