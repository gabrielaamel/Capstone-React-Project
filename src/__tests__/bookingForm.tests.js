import { render, screen } from "@testing-library/react";
import BookingForm from "../BookingForm";

test("renders the BookingForm date label", () => {
render(<BookingForm availableTimes={[]} dispatch={() => {}} />);
const labelElement = screen.getByText(/choose date/i);
expect(labelElement).toBeInTheDocument();
});
