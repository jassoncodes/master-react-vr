## React
Is a Javascript library only responsible for the view layer of an application. It would only handle the rendering of the user interface and its updates when it changes.

>In short: Is a Javascript library for building user interfaces

When learning React (or any other frontend library), it would seem overcomplicated or over-engineered. It is normal to feel that way because the benefit of these libraries is primarily visible when you build medium-sized or large web applications with several team members. So keep that in mind when learning and remember that the goal is to write maintainable and efficient code.

React itself is not a UI Library as in it does not give you beautifully designed buttons or cards.

You could use Web Components to develop a Web Application; you don't necessarily need React.

To create a component, it should be created with a dash symbol on its name to avoid collition with browser's defined components.

**Setup React**
```
npm install react
```

**Create React App (Old Way)**
```
npm create-react-app
```
### Sintaxis Básica de un Componente React
```Javascript
import React from 'react'

export const MiComponente = () => {
  return (
    <div>MiComponente</div>
  )
}

```

### Propiedades de Componentes
Se usan para obtener informacion externa del componente

### Estados 
Son las reacciones o cambios que sufre un componente o subcomponente causados por otro componente o subcomponente. Si los cambios pueden ser reconstruidos (o reflejados) en funcion de otra información que ya este disponible en la aplicacion (otros estados) eso no es parte del estado.

#### Donde almacenar el estado?
Por cada pieza de estado
1. Identifica cada componente que renderiza algo basado en ese estado.
2. Encuentra su componente padre común más cercano, un componente que esté encima de todos en la jerarquía.


>**¿Cómo saber dónde debe residir el estado?**
>1. A menudo, puedes poner el estado directamente en su padre común.
>2. También puedes poner el estado en algún componente encima de su padre común.
>3. Si no puedes encontrar un componente donde tiene sentido poseer el estado, crea un nuevo componente solo para almacenar ese estado y añádelo en algún lugar de la jerarquía encima del componente padre común.

### React Hooks
Es una funcion que se utiliza para enganchar el estado de react y trabajar con el ciclo de vida de un componente.

> In short: Es una funcion que se usa para que cuando pase algo, se haga algo (accion -> reaccion)

#### Most commonly used React Hooks
**useState**<br>
Allows you to use state in a functional component. You would use useState() when you need to manage state in your components, such as managing form input or toggling a component’s visibility.

**useEffect**<br>
Allows you to perform side effects in a functional component, such as fetching data from an API or updating the document title. You would use useEffect() when you need to fetch data from an API, manipulate the DOM, or perform other side effects in your components.

Cuando se define el segundo parametro useEffect solo se ejecutará cuando el componente o la lista de componentes pasados como parametros haya cambiado si se deja vacio, solo se ejecutará una vez.

**useContext**<br>
Allows you to access data from a parent component in your child components without having to pass it down through props. You would use useContext() when you need to access global data, such as a user’s authentication status or theme settings.

**useReducer**<br>
Allows you to manage state in a more complex way than useState(). You would use useReducer() when you need to manage state that involves multiple actions, such as managing a shopping cart or a game state. You would use useReducer() when you need to manage state that involves multiple actions, such as managing a shopping cart or a game state.

**useCallback**<br>
Allows you to memoize a function so that it only changes when its dependencies change so that it’s not recreated on every render.

**useMemo**<br>
Allows you to memoize a value so that it only changes when its dependencies change so that it’s not recomputed on every render.

**useRef**<br>
Allows you to create a mutable ref object that persists for the lifetime of the component (across re-renders). You would use useRef() when you need to access a value in a callback function or when you need to access a DOM node or a mounted component.

**useLayoutEffect()**<br>
Similar to useEffect, but fires before the browser repaints the screen.

**useInsertionEffect()**<br>
Similar to useEffect, but fires before React makes changes to the DOM.

**useImperativeHandle()**<br>
Allows you to expose certain methods or properties of a child component to its parent component.

**useDebugValue()**<br>
Allows you to display a label for custom hooks in the React DevTools.

**useTransition()**<br>
Allows you to mark a state transition as non-blocking and allow other updates to interrupt it.

**useDeferredValue()**<br>
Allows you to defer updating a non-critical part of the UI and let other parts update first.

**useId()**<br>
Lets a component associate a unique ID with itself. Typically used with accessibility APIs.

**useSyncExternalStore()**<br>
Lets a component subscribe to an external store.

#### Best practices for using React Hooks:
* Only use React Hooks at the top level of a functional component or custom hook.
  
* Use the useEffect hook to manage side effects, such as fetching data from an API or updating the document title.
  
* Use the useCallback hook to memoize functions that are passed as props to child components.
  
* Use the useMemo hook to memoize values that are expensive to compute.
  
* Use the useContext hook to pass data down the component tree without having to pass props through every level.
  
* Use the useReducer hook to manage complex state that can't be managed with the useState hook.

>**Pro Tip**<br>
>Los Hooks se deben crear antes de las funciones propias del componente

## Peticiones Ajax de manera nativa (sin librerias como Axios)
Se pueden hacer de 2 maneras:
* Mediante promesas 
* De manera asincrona con async y await 


### Proceso de creación de una app React
1. Maquetacion HTML+CSS 
2. Adaptacion de maqueta a proyecto react: Definir layout del app con el HTML base maquetado y vincular archivos css
3. Componetización, se puede hacer de dos maneras dependiendo del proyecto:
		* Por entidades para cada componentes o conjunto de componentes
    	* Directamente un archivo por componente
4. Programacion de funcionalidades

>**Pro Tip**<br>
>*Helpers* (en React) o *Servicios* (en Angular) son funciones utilitarias que se crean para ser usadas en toda la aplicacion.

### React Router
Libreria para definir rutas en una aplicacion SPA.

**Setup**
```
npm install react-router-dom
```

**Configuracion**

Se debe crear como un componente cualquiera pero debe importar los subcomponentes que serviran para configurar las rutas y los componentes de la aplicacion que va a renderizar para cada ruta configurada:
```Javascript
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import { MyComponente } from "../components/MyComponente"
```

Dentro del cuerpo del componente funcional se retorna la configuracion de las rutas:
```html
<BrowserRouter> 
<!--define la plantilla de componentes principales de la aplicacion-->
	<Routes>
		<Route path="/ruta/navegador" element={componente a renderizar}></Route>
		<!-- rutas -->
	</Routes>
</BrowserRouter>
```