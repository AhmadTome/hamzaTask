import React from 'react';
import {NavLink} from 'react-router-dom';

function DashboardItem(props: any) {

    return (
        <div>
            <NavLink to={props.itemInfo.link} className="flex itemContainer p-3 text-base font-normal text-gray-900 rounded-lg">
                <span className={props.itemInfo.icon + " text-2xl w-6 h-6 item"}></span>
                <span className="ml-3 item pl-0.5">{props.itemInfo.title}</span>
            </NavLink>
        </div>
    );
}

export default DashboardItem;