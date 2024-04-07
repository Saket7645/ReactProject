import Jsx, { Greet } from "./containers/Jsx";
import DataBinding from "./containers/Databinding";
import Users from "./containers/Users";
import { Routes, NavLink, Route } from "react-router-dom";

function App() {
  return (
    <div>
      {/* <Jsx />
         {
           Greet()
         }
         <DataBinding/>
         <Users /> */}
         <nav className="navbar navbar-expand navbar-light bg-light">
             <ul className="nav navbar-nav">
                 <li className="nav-item">
                     <NavLink className="nav-link" to="/">Jsx</NavLink>
                 </li>
                 <li className="nav-item">
                     <NavLink className="nav-link" to="/binding">DataBinding</NavLink>
                 </li>
                 <li className="nav-item">
                     <NavLink className="nav-link" to="/users">Users</NavLink>
                 </li>
             </ul>
         </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<Jsx />}></Route>
          <Route path="/binding" element={<DataBinding />}></Route>
          <Route path="/users" element={<Users />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
