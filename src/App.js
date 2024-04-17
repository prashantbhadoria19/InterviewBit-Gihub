import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Repoinfo from './Pages/Repoinfo';
import Dashboard from './components/Dashboard';
import UserSearch from './components/UserSearch';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<UserSearch />} />
        <Route path='/repoinfo' element={<Repoinfo />} />
      </Routes>
    </BrowserRouter>
  );
};

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
//       </header>
//     </div>
//   );
// }

export default App;
