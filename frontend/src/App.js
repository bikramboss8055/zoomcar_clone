import { Text } from "@chakra-ui/react";
import "./App.css";
import Admin from "./pages/Admin";
// import HomePage from "./pages/HomePage";
import MyAccount from "./pages/MyAccount";

import DatePicker from "./components/DatePicker";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Location from "./components/Location";

import AllRoutes from "./routes/AllRoutes";
import Footer from "./components/Footer";

import CheckoutPage from "./components/CheckoutPage";


function App() {
  return (
    <div>


    
    <Navbar/>
    <AllRoutes/>
    <Footer/>
    
    {/* <SignUp/> */}
    {/* <Login/> */}
    {/* <Location/> */}
    {/* <DatePicker/> */}
    {/* <HomePage/> */}
    {/* <Checkout/> */}
    {/* <CheckoutPage/> */}




    </div>
  );
}

export default App;
