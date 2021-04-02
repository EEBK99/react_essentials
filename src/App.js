import "./App.css";
import classes from "./App.module.css";
import Navbar from "./navbar";

function App() {
  return (
    <div className={classes.App}>
      <Navbar />
      <h2>Welcome to ReactJS Home Page</h2>
      <p>
        {" "}
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not{" "}
      </p>
    </div>
  );
}

// class MyApp extends component {
//   render() {
//     const imgAlt = "logo";
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt={imgAlt} />
//           <p>Hi, I am Haseeb</p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

export default App;
// export default MyApp;
