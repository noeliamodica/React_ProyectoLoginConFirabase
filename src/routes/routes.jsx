import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "../components/Login/Login";
import { Home } from "../components/Home/Home";

export function MyRoutes() {
     return (
       <Router>
         <Routes>
           <Route exact path="/" element={<Home />} />
           <Route exact path="/login" element={<Login />} />
           <Route exact path="/signup" element={<Signup />} />
         </Routes>
       </Router>
     );
   }
   