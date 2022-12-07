import React from 'react';
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import TicketRoot from "../modulea/ticket/container/ticket-root";

test('Ticket Component should be rendered', () => {
   const { container } = render(<TicketRoot />);
   expect(container).toBeInTheDocument();
   expect(container).toHaveTextContent('All tickets');
});