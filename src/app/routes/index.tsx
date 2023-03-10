import { Navigate } from "react-router-dom";
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Dashboard, Login } from "../pages";

export const Routes1 = () => {
    return (
        <Router>
            <Routes>
                <Route path="/pagina-inicial" element={<Dashboard/>} />
                <Route path="/entrar" element={<Login/>} />

                <Route path="*" element={<Navigate to="/pagina-inicial"/>} />
            </Routes>
        </Router>
    );
}