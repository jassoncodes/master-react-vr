# React
This are my react-notes while learning React with Victor Robles's course on Udemy and online material from many sources.

## Content
 - [Basic definitions](#Basic-definitions)
 - [Creating a react app](#Create-a-react-app)
 - [Components](#Components)
 - [React State](#React-State)
 - [React Hooks](#React-Hooks)
 - [Best practices](#Best-practices-for-using-React-Hooks)
 - [Native Ajax Request](#Native-Ajax-Request)
 - [Developing a React Project](#Developing-a-React-Project)
 - [React Router](#React-Router)

## Basic definitions
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
## Create a react app
### Create React App (Old Way)
```
npm create-react-app
```
#### Sintaxis Básica de un Componente React
```Javascript
import React from 'react'

export const MiComponente = () => {
  return (
    <div>MiComponente</div>
  )
}
```

### Setup React App from scratch

#### Step 1: Install React App Dependencies
#### &nbsp;&nbsp;1. Webpack + Webpack CLI + Webpack Server
```
npm install --save-dev webpack webpack-cli webpack-dev-server
```
&nbsp;&nbsp;&nbsp;&nbsp;**Webpack**<br>
&nbsp;&nbsp;&nbsp;&nbsp;It bundles all the app code into a final build

&nbsp;&nbsp;&nbsp;&nbsp;**Webpack CLI**<br>
&nbsp;&nbsp;&nbsp;&nbsp;Provides a set of commands to help setting up a custom webpack project.

&nbsp;&nbsp;&nbsp;&nbsp;**Webpack Server**<br>
&nbsp;&nbsp;&nbsp;&nbsp;It will help to create a localhost dev environment using a mini NodeJS+ExpressJS server.

#### &nbsp;&nbsp;2. React 
```
npm install react react-dom
```
&nbsp;&nbsp;&nbsp;&nbsp;**react**<br>
&nbsp;&nbsp;&nbsp;&nbsp;React library
&nbsp;&nbsp;&nbsp;&nbsp;**react-dom**<br>
&nbsp;&nbsp;&nbsp;&nbsp;It give us the methods needed to manage DOM elements.

#### &nbsp;&nbsp;3. Babel Dependencies
```
npm i --save-dev babel-loader @babel/preset-env @babel/core 
@babel/plugin-transform-runtime 
@babel/preset-react 
@babel/eslint-parser 
@babel/runtime
@babel/cli
```
&nbsp;&nbsp;&nbsp;&nbsp;**babel-loader**<br>
&nbsp;&nbsp;&nbsp;&nbsp;Allows transpiling JavaScript files using babel and webpack. exposes a loader-builder utility that allows users to add custom handling of Babel’s configuration for each file that it processes.

&nbsp;&nbsp;&nbsp;&nbsp;**babel/preset-env**<br>
&nbsp;&nbsp;&nbsp;&nbsp;Allows you to use the latest JavaScript without needing to micromanage which syntax transforms (and optionally, browser polyfills) are needed by your target environment(s). This both makes your life easier and JavaScript bundles smaller!

&nbsp;&nbsp;&nbsp;&nbsp;**babel-core**<br>
&nbsp;&nbsp;&nbsp;&nbsp;Core package

&nbsp;&nbsp;&nbsp;&nbsp;**babel/plugin-transform-runtime**<br>
&nbsp;&nbsp;&nbsp;&nbsp;A plugin that enables the re-use of Babel’s injected helper code to save on codesize

&nbsp;&nbsp;&nbsp;&nbsp;**babel/preset-react**<br>
&nbsp;&nbsp;&nbsp;&nbsp;Use react preset when we are using Reactjs. Helps in converting html files to react based file

&nbsp;&nbsp;&nbsp;&nbsp;**babel-eslint**<br>
&nbsp;&nbsp;&nbsp;&nbsp;Parser that allows ESLint to run on source code that is transformed by Babel

&nbsp;&nbsp;&nbsp;&nbsp;**babel/runtime**<br>
&nbsp;&nbsp;&nbsp;&nbsp;Package that contains a polyfill and many other things that Babel can reference.

&nbsp;&nbsp;&nbsp;&nbsp;**babel/cli**<br>
&nbsp;&nbsp;&nbsp;&nbsp;Command line interface to use babel

### Step 2: Configuration Files
#### &nbsp;&nbsp;1. Configuration file for babel
```
touch .babelrc
```
>```json
>{
>    "presets": ["@babel/preset-env", "@babel/preset-react"],
>    "plugins": ["@babel/plugin-transform-runtime"]
>}
>```

#### &nbsp;&nbsp;2. Configuration file for webpack
&nbsp;&nbsp;&nbsp;&nbsp;One of the most important files , it configures the runtime for the development process.
```
touch .webpack.config.js
```
&nbsp;&nbsp;&nbsp;&nbsp;File content:
>```javascript
>const path = require("path");
>
>/*We are basically telling webpack to take index.js from entry. Then check for all file extensions in resolve. 
>After that apply all the rules in module.rules and produce the output and place it in main.js in the public folder.*/
>
>module.exports={
>    /** "mode"
>     * the environment - development, production, none. tells webpack 
>     * to use its built-in optimizations accordingly. default is production 
>     */
>    mode: "development", 
>    /** "entry"
>     * the entry point 
>     */
>    entry: "./index.js", 
>    output: {
>        /** "path"
>         * the folder path of the output file 
>         */
>        path: path.resolve(__dirname, "public"),
>        /** "filename"
>         * the name of the output file 
>         */
>        filename: "main.js"
>    },
>    /** "target"
>     * setting "node" as target app (server side), and setting it as "web" is 
>     * for browser (client side). Default is "web"
>     */
>    target: "web",
>    devServer: {
>        /** "port" 
>         * port of dev server (3000 most common or default)
>        */
>        port: "3000",
>        /** "static" 
>         * This property tells Webpack what static file it should serve
>        */
>        static: ["./public"],
>        /** "open" 
>         * opens the browser after server is successfully started
>        */
>        open: true,
>        /** "hot"
>         * enabling and disabling HMR. takes "true", "false" and "only". 
>         * "only" is used if enable Hot Module Replacement without page 
>         * refresh as a fallback in case of build failures
>         */
>        hot: true ,
>        /** "liveReload"
>         * disable live reload on the browser. "hot" must be set to false for this to work
>        */
>        liveReload: true
>    },
>    resolve: {
>        /** "extensions" 
>         * If multiple files share the same name but have different extensions, webpack will 
>         * resolve the one with the extension listed first in the array and skip the rest. 
>         * This is what enables users to leave off the extension when importing
>         */
>        extensions: ['.js','.jsx',".ts",'.json'] 
>    },
>    module:{
>        /** "rules"
>         * This says - "Hey webpack compiler, when you come across a path that resolves to a '.js or .jsx' 
>         * file inside of a require()/import statement, use the babel-loader to transform it before you 
>         * add it to the bundle. And in this process, kindly make sure to exclude node_modules folder from 
>         * being searched"
>         */
>        rules: [
>            {
>                test: /\.(js|jsx)$/,    //kind of file extension this rule should look for and apply in test
>                exclude: /node_modules/, //folder to be excluded
>                use:  'babel-loader' //loader which we are going to use
>            }
>        ]
>    }
>}
>```

### Step 3: Configurate Scripts
&nbsp;&nbsp;&nbsp;&nbsp;Setup the scripts in ```package.json``` file.
>```json
>{
>    //setup npm start command
>    "start": "webpack-dev-server .",
>   //setup npm build
>   "build": "webpack ."
>}
>```

### Step 4: Setup App Structure
&nbsp;&nbsp;&nbsp;&nbsp;Create app files and folers needed
```
├───public
│       index.html
└───src
        index.js
        App.js
```
```index.html``` file basic content:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>React App</title>
  </head>
  <body>
    <div id="root"></div>
    <!-- It reference the javascript bundle file generated by Webpack -->
    <script src="main.js"></script>
  </body>
</html>
```

```index.js``` file basic content:

```javascript
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

```App.js``` file basic content:

```javascript
import React from 'react'

export const App = () => {
  return (
    <div>React App made from scratch!</div>
  )
}
```

Update the ```main``` property on ```package.json``` file by specifing the actual  point for the app:
```json
{
  "main": "./src/index.js",
}
```
## Components

### Propiedades de Componentes
Se usan para obtener informacion externa del componente

## Estado (React State)
Son las reacciones o cambios que sufre un componente o subcomponente causados por otro componente o subcomponente. Si los cambios pueden ser reconstruidos (o reflejados) en funcion de otra información que ya este disponible en la aplicacion (otros estados) eso no es parte del estado.

#### Donde almacenar el estado?
Por cada pieza de estado
1. Identifica cada componente que renderiza algo basado en ese estado.
2. Encuentra su componente padre común más cercano, un componente que esté encima de todos en la jerarquía.


>**¿Cómo saber dónde debe residir el estado?**
>1. A menudo, puedes poner el estado directamente en su padre común.
>2. También puedes poner el estado en algún componente encima de su padre común.
>3. Si no puedes encontrar un componente donde tiene sentido poseer el estado, crea un nuevo componente solo para almacenar ese estado y añádelo en algún lugar de la jerarquía encima del componente padre común.

## React Hooks
Es una funcion que se utiliza para enganchar el estado de react y trabajar con el ciclo de vida de un componente.

> In short: Es una funcion que se usa para que cuando pase algo, se haga algo (accion -> reaccion)

### Most commonly used React Hooks
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

## Best practices for using React Hooks
* Only use React Hooks at the top level of a functional component or custom hook.
  
* Use the useEffect hook to manage side effects, such as fetching data from an API or updating the document title.
  
* Use the useCallback hook to memoize functions that are passed as props to child components.
  
* Use the useMemo hook to memoize values that are expensive to compute.
  
* Use the useContext hook to pass data down the component tree without having to pass props through every level.
  
* Use the useReducer hook to manage complex state that can't be managed with the useState hook.

>**Pro Tip**<br>
>Los Hooks se deben crear antes de las funciones propias del componente

## Native Ajax Request
Se pueden hacer peticiones de manera nativa a través de 2 formas (sin librerias como Axios):
* Mediante promesas 
* De manera asincrona con async y await 


## Developing a React Project
1. Maquetacion HTML+CSS 
2. Adaptacion de maqueta a proyecto react: Definir layout del app con el HTML base maquetado y vincular archivos css
3. Componetización, se puede hacer de dos maneras dependiendo del proyecto:
		* Por entidades para cada componentes o conjunto de componentes
    	* Directamente un archivo por componente
4. Programacion de funcionalidades

>**Pro Tip**<br>
>*Helpers* (en React) o *Servicios* (en Angular) son funciones utilitarias que se crean para ser usadas en toda la aplicacion.

## React Router
Libreria para definir rutas en una aplicacion SPA.

### Setup
```
npm install react-router-dom
```

### Configuracion

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

