import React from 'react';
import Dashboard from "./modules/dashboard/container/dashboard-root";
import {BrowserRouter} from "react-router-dom";
import Router from "./modules/Router/router";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <div className="grid grid-cols-12">
                    <div className="col-span-2">
                        <Dashboard/>
                    </div>
                    <div className="main-container col-span-10 p-10">
                        <div className="card">
                            <Router />
                        </div>
                    </div>
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
