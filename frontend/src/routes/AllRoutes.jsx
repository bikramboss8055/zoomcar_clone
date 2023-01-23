import React from "react";
import { Routes, Route } from "react-router-dom";
import Car from "../components/Car-pages/Car";
import Singlecar from "../components/Car-pages/Singlecar";
import CheckoutPage from "../components/CheckoutPage";
import DatePicker from "../components/DatePicker";
import Login from "../components/Login";
import PrivateRoute from "../components/PrivateRoute";
import SignUp from "../components/SignUp";
import Admin from "../pages/Admin";
import HomePage from "../pages/HomePage";
import MyAccount from "../pages/MyAccount";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/car" element={<Car />}></Route>
        <Route
          path="/car/:car_id"
          element={
            <PrivateRoute>
              <Singlecar />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/datepicker/:car_id"
          element={
            <PrivateRoute>
              <DatePicker />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/checkout/:car_id"
          element={
            <PrivateRoute>
              <CheckoutPage />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/myaccount"
          element={
            <PrivateRoute>
              <MyAccount />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/admin" element={<Admin />}></Route>
      </Routes>
    </div>
  );
};

export default AllRoutes;
