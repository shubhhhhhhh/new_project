import React,{Component} from "react";
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import './App.css';
import { Auth } from "./constant/Constant";
import Signup from "./auth/Signup";
import Login from "./auth/Login";
import Dashboard from "./component/Dashboard/Dashboard";

export default function App()
{
    return(
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />}/>
                    <Route path="signup" element={<Signup />}/>
                    <Route path="dashboard" element={<Auth><Dashboard /></Auth>}/>
                </Routes>
            </Router>
        </>
    )
}

// import logo from './logo.svg';
// import Home from './components/home';
// import { Newie } from './components/about';
// import { Component } from 'react';
// import Simplilearn from './projects/simplilearn/js/Simplilearn';
// import Home from './projects/Home';
// import Header from './projects/Header';

// import Header from './Project_api/Header';
// import Home from "./Project_api/Home";
// import Login from "./Project_api/Login";
// import Dashboard from "./Project_api/Dashboard";
// import Signup from "./Project_api/Signup";
// import CallApi from "./components/CallApi";
// import Event from "./components/Event";

// export default class App extends Component {
//   render() {
//     return (
//       <>
//           <Router>
//             <Header/>
//             <Routes>
//               <Route path="/" element={<Home/>}/>
//               <Route path="login" element={<Login/>}/>
//               <Route path="signup" element={<Signup/>}/>
//               <Route path="dashboard" element={<Dashboard/>}/>
//               <Route path="callapi" element={<CallApi/>}/>
//               <Route path="event" element={<Event/>}/>
//             </Routes>
//           </Router>
//       </>
//     )
//   }
// }



// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <p>nice to meet yea!</p>
//         <h1>well that sounds interesting!!</h1>
//         <Home/>
//       </header>
//     </div>
//   );
// }



// const App = ()=>{
//   const bool = false;
//   let cp = null;
//   if (bool){
//      cp = <Home/>;
//   }
//   else{
//       cp = <Newie/>
//   }
//   return(
//     <>
//       <h1>hey</h1>
//       {cp}
//     </>
//   )
// }
// export default App;
