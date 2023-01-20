import { Text } from "@chakra-ui/react";
import "./App.css";

import DatePicker from "./components/DatePicker";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Location from "./components/Location";
// import Location from "./components/Location";

function App() {
  return (
    <div>
    
    <Navbar/>
    {/* <SignUp/> */}
    {/* <Login/> */}
    {/* <Location/> */}
    {/* <DatePicker/> */}
    <HomePage/>


    </div>
  );
}

export default App;
