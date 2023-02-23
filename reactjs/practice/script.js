// ReactDOM.render(<h1>Hello World</h1>, document.getElementById("root"));

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<h1>Hello World</h1>);

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

// The "element" is created using "document.createElement". As a result, it is returned as an HTML DOM element.

// WITH REACT:

// const element = <h1 className="header">Hello, React!</h1>;
// ReactDOM.render(element, document.getElementById("root"));
// console.log(element)

// The "element" is created by React with JSX. As a result, it is returned as a JavaScript object.
// JSX is as a function that returns a JavaScript object which describes the DOM element. By that, React can interpret "the assignment" to turn it into the DOM element and put it on the HTML page.

// -------------------------------------------------------------------

// const navbar = (
//   <nav>
//     <h1>QQ's Bistro</h1>
//     <ul>
//         <li>Pricing</li>
//         <li>About</li>
//         <li>Contact</li>
//     </ul>
//   </nav>
// );

// document.getElementById("root").append(navbar);

// This results in [object Object] being displayed on the HTML page instead of the actual content.
// The "navbar" is a plain JSX object. The DOM can append it but can't read it. And, the Web browser can't recognize it.

// ReactDOM.render(navbar, document.getElementById("root"));

// You need render the JSX object with React.
// React will take it and turn it into DOM elements which the Web browser can then recognize.

// -------------------------------------------------------------------

// function Header() {
//   return (
//     <header>
//       <nav className="nav">
//         <img src="./react-logo.png" className="nav-logo" />
//         <ul className="nav-items">
//           <li>Pricing</li>
//           <li>About</li>
//           <li>Contact</li>
//         </ul>
//       </nav>
//     </header>
//   );
// }

// function MainContent() {
//   return (
//     <div>
//       <h1>Reasons I'm excited to learn React</h1>
//       <ol>
//         <li>
//           It's a popular library, so I'll be able to fit in with the cool kids!
//         </li>
//         <li>I'm more likely to get a job as a developer if I know React</li>
//       </ol>
//     </div>
//   );
// }

// function Footer() {
//   return (
//     <footer>
//       <small>© 2021 Ziroll development. All rights reserved.</small>
//     </footer>
//   );
// }

// function Page() {
//   return (
//     <div>
//       <Header />
//       <MainContent />
//       <Footer />
//     </div>
//   );
// }

// ReactDOM.render(<Page />, document.getElementById("root"));

// -------------------------------------------------------------------

// const root = ReactDOM.createRoot(document.getElementById("root"));

// function Timer() {
//   const element = (
//     <div>
//       <p>Hello, World!</p>
//       <p>It is {new Date().toLocaleTimeString()}.</p>
//     </div>
//   );

//   root.render(element);
// }

// setInterval(Timer, 1000);

// When inspecting the code, you will see only the text node whose content changes gets updated by ReactDOM.

// -------------------------------------------------------------------