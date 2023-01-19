import React from 'react'
import { Routes, Route } from "react-router-dom"
import Car from '../components/Car-pages/Car'


const AllRoutes = () => {


    return (
        <div>
            <Routes>
                <Route path="/" element={<Car />}></Route>
                {/* <Route path="/login" element={}></Route>
                <Route path="/" element={}></Route>
                <Route path="/" element={}></Route> */}
            </Routes>


        </div>
    )
}

export default AllRoutes