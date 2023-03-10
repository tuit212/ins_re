import { Routes , Route } from "react-router-dom";
import Accound from "./components/Accound/Accound";
import Register from "./components/Register/Register";
import Create from "./pages/Create/Create";
import Home from "./pages/Home/Home";
import Messages from "./pages/Messages/Messages";
import Notifications from "./pages/Notifications/Notifications";
import Profile from "./pages/Profile/Profile";


function App() {


   
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Accound/>} />
        <Route path="/accounts/emailsignup" element={<Register/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/create" element={<Create/>} />
        <Route path="/notifications" element={<Notifications/>} />
        <Route path="/messages"  element={<Messages/>} />
        <Route path='/profile' element={<Profile/>} />
      </Routes>
    </div>
  );
}

export default App;
