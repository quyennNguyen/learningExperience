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

// const root = ReactDOM.createRoot(document.getElementById("root"));

// function Timer(props) {
//   return (
//     <div>
//       <p>Hello, World!</p>
//       <p>It is {props.date.toLocaleTimeString()}.</p>
//     </div>
//   );
// }

// function Clock() {
//     root.render(<Timer date={new Date()} />);
// }

// setInterval(Clock, 1000);

// -------------------------------------------------------------------

// const root = ReactDOM.createRoot(document.getElementById("root"));

// class Clock extends React.Component {
//   render() {
//     return (
//       <div>
//         <p>Hello, World!</p>
//         <p>It is {this.props.date.toLocaleTimeString()}.</p>
//       </div>
//     );
//   }
// }

// root.render(<Clock date={new Date()} />)

// -------------------------------------------------------------------

// const root = ReactDOM.createRoot(document.getElementById("root"));

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }

//   render() {
//     return (
//       <div>
//         <p>Hello, World!</p>
//         <p>It is {this.state.date.toLocaleTimeString()}.</p>
//       </div>
//     );
//   }
// }

// root.render(<Clock />);

// -------------------------------------------------------------------

// const root = ReactDOM.createRoot(document.getElementById("root"));

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { date: new Date() };
//   }

//   componentDidMount() {
//     this.intervalID = setInterval(() => {
//       this.setState({ date: new Date() });
//     }, 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(intervalID);
//   }

//   render() {
//     return (
//       <div>
//         <p>Hello, World!</p>
//         <p>It is {this.state.date.toLocaleTimeString()}.</p>
//       </div>
//     );
//   }
// }

// root.render(<Clock />);

// You are free to add additional fields to the class manually if you need to store something that doesn’t participate in the data flow.

// -------------------------------------------------------------------

// const root = ReactDOM.createRoot(document.getElementById("root"));

// function GuestGreeting() {
//   return <div>Please sign in!</div>;
// }

// function UserGreeting() {
//   return <div>Welcome!</div>;
// }

// function LoginButton(props) {
//   return (
//     <button type="submit" onSubmit="">
//       Log in
//     </button>
//   );
// }

// function LogoutButton(props) {
//   return (
//     <button type="submit" onSubmit="">
//       Log out
//     </button>
//   );
// }

// function LoginControl(props) {
//   if (props.isLoggedIn) {
//     return (
//       <div>
//         <UserGreeting />
//         <LogoutButton />
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <GuestGreeting />
//         <LoginButton />
//       </div>
//     );
//   }
// }

// root.render(<LoginControl isLoggedIn={true} />);

// -------------------------------------------------------------------

// const root = ReactDOM.createRoot(document.getElementById("root"));

// function GuestGreeting() {
//   return <div>Please sign in!</div>;
// }

// function UserGreeting() {
//   return <div>Welcome!</div>;
// }

// function LoginButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Log in
//     </button>
//   );
// }

// function LogoutButton(props) {
//   return (
//     <button onClick={props.onClick}>
//       Log out
//     </button>
//   );
// }

// class LoginControl extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { isLoggedIn: false };
//     this.handleLogInClick = this.handleLogInClick.bind(this);
//     this.handleLogOutClick = this.handleLogOutClick.bind(this);
//   }

//   handleLogInClick() {
//     this.setState({ isLoggedIn: true });
//   }

//   handleLogOutClick() {
//     this.setState({ isLoggedIn: false });
//   }

//   render() {
//     if (this.state.isLoggedIn) {
//       return (
//         <div>
//           <UserGreeting />
//           <LogoutButton onClick={this.handleLogOutClick} />
//         </div>
//       );
//     } else {
//       return (
//         <div>
//           <GuestGreeting />
//           <LoginButton onClick={this.handleLogInClick} />
//         </div>
//       );
//     }
//   }
// }

// root.render(<LoginControl />);

// -------------------------------------------------------------------

// const root = ReactDOM.createRoot(document.getElementById("root"));

// function Mailbox(props) {
//     let count = props.messages.length;

//     return (
//         <div>
//             <div>Hello,</div>
//             {
//                 count > 0 &&
//                 <div>You have {count} message(s).</div>
//             }
//         </div>
//     );
// }

// root.render(<Mailbox messages={['React', 'Re: React', 'Re:Re: React']} />);

// -------------------------------------------------------------------

// const root = ReactDOM.createRoot(document.getElementById("root"));

// function LoginControl(props) {
//   return <div>You are {props.isLoggedIn ? `currently` : `not`} logged in.</div>;
// }

// root.render(<LoginControl isLoggedIn={false} />);

// -------------------------------------------------------------------

// const root = ReactDOM.createRoot(document.getElementById("root"));
// const posts = [
//   { id: 1, title: "Hello World", content: "Welcome to learning React!" },
//   { id: 2, title: "Installation", content: "You can install React from npm." },
// ];

// function Blog(props) {
//   const list = props.posts.map((element) => (
//     <li>
//       <h3>{element.title}</h3>
//       <p>{element.content}</p>
//     </li>
//   ));

//   return <ul>{list}</ul>;
// }

// root.render(<Blog posts={posts} />);

// Without assigning each list element with a unique key, you might get a warning says "Warning: Each child in a list should have a unique "key" prop.".

// -------------------------------------------------------------------

// const root = ReactDOM.createRoot(document.getElementById("root"));
// const posts = [
//   { id: 1, title: "Hello World", content: "Welcome to learning React!" },
//   { id: 2, title: "Installation", content: "You can install React from npm." },
// ];

// function ListItem(props) {
//   return (
//     <li>
//       <h3>{props.value.title}</h3>
//       <p>{props.value.content}</p>
//     </li>
//   );
// }

// function Blog(props) {
//   const list = props.posts.map((element) => (
//     <ListItem key={element.id} value={element} />
//   ));

//   return <ul>{list}</ul>;
// }

// root.render(<Blog posts={posts} />);

// The list elements inside the main array method call are the ones that need keys.

// -------------------------------------------------------------------

// const root = ReactDOM.createRoot(document.getElementById("root"));
// const posts = [
//   { id: 1, title: "Hello World", content: "Welcome to learning React!" },
//   { id: 2, title: "Installation", content: "You can install React from npm." },
// ];

// function Blog(props) {
//   return (
//     <ul>
//       {props.posts.map((element) => (
//         <li key={element.id}>
//           <h3>{element.title}</h3>
//           <p>{element.content}</p>
//         </li>
//       ))}
//     </ul>
//   );
// }

// root.render(<Blog posts={posts} />);

// JSX allows embedding any expression in curly braces, so another way to solve this is to inline the map() result.
// If the list is too nested, this way is not highly recommended.

// -------------------------------------------------------------------

