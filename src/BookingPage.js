import BookingForm from "./BookingForm";

export default function BookingPage({ availableTimes, dispatch }) {
    return(
        <section>
            <h1> Reserve a Table</h1>
            <p> Please Fill out the form below to book a table at Little Lemon</p>

            <BookingForm
                availableTimes={availableTimes}
                dispatch={dispatch}
            />
        </section>
    );
}
