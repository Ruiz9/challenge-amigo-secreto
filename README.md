# README - Sorteo de Amigos

Este proyecto es una aplicación sencilla en JavaScript que permite a los usuarios agregar nombres de amigos, visualizarlos en una lista y realizar un sorteo aleatorio para elegir a un ganador de entre los amigos listados.

## Características

- **Agregar Amigos**: Los usuarios pueden agregar nombres de amigos a una lista.
- **Mostrar Lista de Amigos**: La lista de amigos añadidos se muestra dinámicamente.
- **Sorteo Aleatorio**: Se puede realizar un sorteo para elegir un amigo aleatorio de la lista.
- **Validación**: Si el campo de nombre está vacío o contiene solo espacios, el sistema muestra una alerta pidiendo que se ingrese un nombre válido.

## Estructura del Código

### HTML
Este código interactúa con un archivo HTML donde se tienen los siguientes elementos:
- Un campo de texto para ingresar el nombre del amigo.
- Un botón para agregar el nombre del amigo a la lista.
- Una lista donde se muestran los amigos agregados.
- Un área donde se muestra el resultado del sorteo aleatorio.

### JavaScript
El archivo JavaScript contiene las siguientes funciones clave:

#### 1. **agregarAmigo()**
   - Recibe el nombre del amigo desde el campo de entrada.
   - Valida si el nombre no está vacío ni contiene solo espacios en blanco.
   - Si el nombre es válido, lo agrega al arreglo `amigos` y actualiza la lista visualmente.
   - Si el nombre es inválido, muestra una alerta pidiendo que se ingrese un nombre válido.
   - Después de agregar un amigo, se limpia el campo de texto.

#### 2. **mostrarListaAmigo()**
   - Muestra la lista de amigos agregados en la interfaz.
   - Recorre el arreglo `amigos` y genera un elemento de lista (`<li>`) para cada amigo.
   - Actualiza el DOM para reflejar los amigos en la lista.

#### 3. **actualizarCampo()**
   - Limpia el campo de texto después de agregar un nombre.

#### 4. **sorteoAmigo()**
   - Realiza un sorteo aleatorio entre los amigos listados en el arreglo `amigos`.
   - Muestra el nombre del amigo ganador en el área de resultado del sorteo.

## Instrucciones de Uso

1. Abre el archivo HTML en tu navegador.
2. En el campo de texto, escribe el nombre de un amigo y presiona el botón para agregarlo.
3. La lista de amigos se actualizará automáticamente.
4. Para realizar un sorteo, presiona el botón de sorteo y verás el nombre del amigo seleccionado aleatoriamente como ganador.

## Requisitos
Este proyecto no tiene dependencias externas y solo requiere un navegador con soporte para JavaScript.

## Contribuciones
Si deseas mejorar o agregar más características al proyecto, no dudes en realizar un *fork* y enviar un *pull request*. ¡Cualquier contribución es bienvenida!

## Licencia
Este proyecto es de código abierto y está bajo la licencia MIT.
