import React from 'react';
import Dashboard from "../../dashboard/container/dashboard-root";


function MainPage(props: any) {
    return (
        <div>
            <div className="grid grid-cols-12">
                <div className="col-span-2">
                    <h1 className="text-5xl p-5">{props.titel}</h1>
                </div>

                <div className="col-span-10 text-right p-5">
                    <span className="mr-3">
                        <img className="rounded-full w-12 float-right"
                             src="https://mdbootstrap.com/img/new/avatars/8.jpg"/>
                    </span>
                    <span className="mr-3 text-gray-700 float-right">
                        Jones Ferdinand
                    </span>
                    <span className="float-right mr-3">
                        |
                    </span>
                    <span className="float-right mr-3 cursor-pointer">
                        <li className="fa fa-bell"></li>
                    </span>
                    <span className="float-right mr-3 cursor-pointer">
                        <li className="fa fa-search"></li>
                    </span>
                </div>

            </div>

            <div className="">
                {props.component}
            </div>

        </div>
    );
}

export default MainPage;