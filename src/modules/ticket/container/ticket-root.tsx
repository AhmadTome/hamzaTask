import React from 'react';
import TicketTable from "../component/ticket-table";

function Tickets() {

   return (
        <div className="ticketContainer" data-testid="TicketTestId">
            <div className="w-full">
                <TicketTable />
            </div>
        </div>
    );
}

export default Tickets;
