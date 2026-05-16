import { useState } from "react";

function BookingForm({ availableTimes, dispatch }) {
const [date, setDate] = useState("");
const [time, setTime] = useState("");
const [guests, setGuests] = useState(1);
const [occasion, setOccasion] = useState("Birthday");

const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", { date, time, guests, occasion });
    // later: call API or navigate to confirmation page
};

return (
    <form
    onSubmit={handleSubmit}
    style={{ display: "grid", gap: "20px", maxWidth: "200px" }}
    >
    <label htmlFor="res-date">Choose Date</label>
    <input
        type="date"
        id="res-date"
        value={date}
        onChange={(e) => {
        const newDate = e.target.value;
        setDate(newDate);

          // 🚀 FIXED: Changed to uppercase "UPDATE_TIMES" and used "payload"
        dispatch({ type: "UPDATE_TIMES", payload: newDate });
        }}
    />

    <label htmlFor="res-time">Choose time</label>
    <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        >
        {/* Loop through the dynamic available times from the API */}
        {availableTimes.map((t) => (
        <option key={t}>{t}</option>
        ))}
    </select>

    <label htmlFor="guests">Number of guests</label>
    <input
        type="number"
        id="guests"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
    />

    <label htmlFor="occasion">Occasion</label>
    <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
    >
        <option>Birthday</option>
        <option>Anniversary</option>
    </select>

    <button type="submit">Make Your Reservation</button>
    </form>
);
}

export default BookingForm;
