import { Routes , Route } from "react-router-dom";
import Accound from "./components/Accound/Accound";
import Register from "./components/Register/Register";
import Home from "./pages/Home/Home";


function App() {


   
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Accound/>} />
        <Route path="/accounts/emailsignup" element={<Register/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </div>
  );
}

export default App;
