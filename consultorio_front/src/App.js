import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';
import ProtectedRoutes   from "./Components/Protected/ProtectedRoutes";
import Login from './Components/Login/Login';
import MenuMain from "./Components/Dashboard/MenuMain";

const user = {
  'id':1,
  user:'antonio'
}
function App() {
  return (
  <BrowserRouter>
    <Routes>
      
        <Route element={<ProtectedRoutes isAllowed={!!user}/>}>
          <Route path="menu-main" element={<MenuMain/>}/>
          <Route path="login" element={<Login/>}/>
        </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
