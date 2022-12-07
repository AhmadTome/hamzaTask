import React from 'react';
import Items from "../constant/dashboard-item";
import DashboardItem from "../component/dashboard-item";
import {Link} from "react-router-dom";


function Dashboard() {

    const items = Items.map((item) => {
        return <DashboardItem itemInfo={item}></DashboardItem>
    });

    return (
        <div className="dashboardContainer">
            <aside className="w-full" aria-label="Sidebar">
                <div className=" dashboard py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
                    <Link to="/" className="flex pl-2.5 mb-5 mt-10">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-7"
                             alt="Flowbite Logo"/>
                        <span className="item text-xl text-white">Dashboard Kit</span>
                    </Link>
                    <ul className="space-y-2 mt-10">
                        {items.length ? items : ''}
                    </ul>
                </div>
            </aside>

        </div>
    );
}

export default Dashboard;
