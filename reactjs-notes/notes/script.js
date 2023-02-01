/*
SOURCE: https://youtu.be/bMknfKXIFA8

WHAT IS REACT?
    React, or ReactJs, is a JavaScript library for building user interfaces and developing web applications.
    React allows you to write composable and reusable code.   
    React is declarative.
    React components can add interactivity to an exisiting HTML page.

    declarative vs. imperative

WHAT IS JSX?
    JSX, stands for JavaScript XML, is a React extension to the JavaScript syntax.
    There are 2 ways to add JSX to an HTML page:
        Method 1:
            - add <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
            - add <script src="script.js" type="text/babel"></script>

            This method may slow down your Website and isn't suitable for production.
        Method 2:
            - download Node.js
            - run npm init -y
            - run npm install babel-cli@6 babel-preset-react-app@3
            - create a "src" folder where the "script.js" file will locate
            - run npx babel --watch src --out-dir . --presets react-app/prod
            
            This method is the setup for a production-ready JSX preprocessor to convert all "script" tags automatically.
*/

// ReactDOM is a global variable from the ReactDOM library pulled from CDN.

// ReactDOM.render(<h1>Hello World</h1>, document.getElementById("root"));

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<h1>Hello World</h1>);
// root.render(
//   <ul>
//     <li>1</li>
//     <li>2</li>
//     <li>3</li>
//   </ul>
// );

// -------------------------------------------------------------------

// function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       <a className="navbar-brand" href="#">
//         Navbar
//       </a>
//       <button
//         className="navbar-toggler"
//         type="button"
//         data-toggle="collapse"
//         data-target="#navbarSupportedContent"
//         aria-controls="navbarSupportedContent"
//         aria-expanded="false"
//         aria-label="Toggle navigation"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>

//       <div className="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul className="navbar-nav mr-auto">
//           <li className="nav-item active">
//             <a className="nav-link" href="#">
//               Home <span className="sr-only">(current)</span>
//             </a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#">
//               Link
//             </a>
//           </li>
//           <li className="nav-item dropdown">
//             <a
//               className="nav-link dropdown-toggle"
//               href="#"
//               id="navbarDropdown"
//               role="button"
//               data-toggle="dropdown"
//               aria-haspopup="true"
//               aria-expanded="false"
//             >
//               Dropdown
//             </a>
//             <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//               <a className="dropdown-item" href="#">
//                 Action
//               </a>
//               <a className="dropdown-item" href="#">
//                 Another action
//               </a>
//               <div className="dropdown-divider"></div>
//               <a className="dropdown-item" href="#">
//                 Something else here
//               </a>
//             </div>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link disabled" href="#">
//               Disabled
//             </a>
//           </li>
//         </ul>
//         <form className="form-inline my-2 my-lg-0">
//           <input
//             className="form-control mr-sm-2"
//             type="search"
//             placeholder="Search"
//             aria-label="Search"
//           />
//           <button
//             className="btn btn-outline-success my-2 my-sm-0"
//             type="submit"
//           >
//             Search
//           </button>
//         </form>
//       </div>
//     </nav>
//   );
// }

// function MainContent() {
//   return <h1>I'm learning React!</h1>;
// }

// ReactDOM.render(
//   <div>
//     <Navbar />
//     <MainContent />
//   </div>,
//   document.getElementById("root")
// );

// -------------------------------------------------------------------

// WITH VANILLA JAVASCRIPT:

// const element = document.createElement("h1");
// const content = document.createTextNode("Hello, React!");
// element.appendChild(content);

// const element = document.createElement("h1");
// element.textContent ="Hello, React!";
// element.className = "header";

// document.getElementById("root").appendChild(element);

// console.log(element)

// The DOM element is created using DOM. As a result, the element is returned as an HTML element.

// WITH REACT:

// const element = <h1 className="header">Hello, React!</h1>;
// ReactDOM.render(element, document.getElementById("root"));

// console.log(element)

// The element is created by React with JSX. As a result, the element is returned as a vanilla JavaScript object which describes the DOM element that you want React to put in the HTML page.
// JSX is as a function that returns a JavaScript object that React can interpret and use to put the DOM element on the HTML page.

// -------------------------------------------------------------------

const navbar = (
  <nav>
    <h1>Instant Ramen</h1>
    <ul>
        <li>Pricing</li>
        <li>About</li>
        <li>Contact</li>
    </ul>
  </nav>
);

ReactDOM.render(navbar, document.getElementById("root"));
