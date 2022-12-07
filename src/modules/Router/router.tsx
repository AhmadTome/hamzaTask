import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import MainPage from "../main/container/main-page";
import Tickets from "../ticket/container/ticket-root";

function Router() {
    return (
        <div>
            <Routes>
                <Route path="/" element="Dashboard" />
                <Route path="/tickets" element={<MainPage titel="Ticket" component={<Tickets/>}/>} />
                <Route path="/overview" element="Overview" />
                <Route path="/ideas" element="Ideas" />
                <Route path="/contact" element="Contact" />
                <Route path="/agents" element="Agents" />
                <Route path="/articles" element="Articles" />
                <Route path="/settings" element="Settings" />
                <Route path="*" element="404 Not Found" />

            </Routes>
        </div>
    );
}

export default Router;