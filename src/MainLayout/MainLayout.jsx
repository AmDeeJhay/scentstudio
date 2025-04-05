import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from './../components/Navbar/Navbar';
import Home from "../pages/Home/Home";
import Auth from "../pages/Auth/Auth";
import Login from "../pages/Auth/Login/Login";
import Register from "../pages/Auth/Register/Register";
import NotFound from "../pages/NotFound/NotFound";
import AuthCheck from "../AuthCheck/AuthCheck";
// import Footer from "./../components/Footer/Footer";

const MainLayout = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={
                    <AuthCheck>
                        <Home />
                    </AuthCheck>
                    } />
                <Route path="auth" element={<Auth />}>
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Route>
                
                <Route path="*" element={<NotFound />} />
            </Routes>
           {/* <Footer />          */}
        </BrowserRouter>
    );
};

export default MainLayout;