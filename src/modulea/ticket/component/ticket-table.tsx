import React from 'react';
import CustomersInfo from "../constant/customers-info";
import Priority from "../constant/priority";
import TableHeader from "../constant/table-header";

function TicketTable() {

    const customers = CustomersInfo.map((customer) => {

        return <tr className="bg-gray-100 border-b">
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap grid grid-cols-12">
                <div className="col-span-2">
                    <img src={customer.ticket_details.icon} className="rounded-full w-12"/>
                </div>
                <div className="col-span-6">
                    <span>{customer.ticket_details.details}</span>
                    <br/>
                    <small className="text-gray-400">{customer.ticket_details.date}</small>
                </div>
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <div>
                    <span>{customer.customer_name.name}</span>
                    <br/>
                    <small className="text-gray-400">{customer.customer_name.date}</small>
                </div>
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <div>
                    <span>{customer.date.date}</span><br/>
                    <small className="text-gray-400">{customer.date.time}</small>
                </div>
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <span
                    className={Priority[customer.priority] + " text-white p-3 rounded-full"}>{customer.priority}</span>
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <i className="fa fa-ellipsis-v text-gray-400 text-xl	 cursor-pointer"></i>
            </td>
        </tr>
    });

    const headers = TableHeader.map((headerItem) => {
       return <th scope="col" key={headerItem.name} className="text-lg font-medium text-gray-400 px-6 py-4 text-left">
           {headerItem.title}
        </th>;
    })

    return (
        <div className="flex flex-col">

            <div className="block p-2 rounded-lg shadow-lg bg-white">

                <div className="grid grid-cols-12">
                    <div className="col-span-2">
                        <h1 className="text-3xl p-5">All tickets</h1>
                    </div>

                    <div className="col-span-10 text-right p-5">

                        <span className="mr-3 text-gray-700 float-right">
                            Filter
                         </span>
                        <span className="float-right mr-3 cursor-pointer">
                        <li className="fa fa-filter"></li>
                    </span>
                        <span className="mr-3 text-gray-700 float-right">
                            Sort
                         </span>
                        <span className="float-right mr-3 cursor-pointer">
                        <li className="fa fa-sort-amount-desc"></li>
                    </span>
                    </div>

                </div>


                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full">
                                <thead className="bg-white border-b ">
                                  {headers.length ? headers : ''}
                                </thead>
                                <tbody>
                                    {customers.length ? customers : ''}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default TicketTable;