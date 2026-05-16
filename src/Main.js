// Main.js
import React, { useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import BookingForm from "./BookingForm";
import { initializeTimes, updateTimes } from "./bookingReducer";

function Main() {
  // 🚀 El hook useReducer maneja los estados de los horarios de forma limpia
const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes,
);

return (
    <main>
    <Routes>
        {/* Ruta para la página principal si está vacía */}
        <Route
        path="/"
        element={<h1>Welcome to Little Lemon! Go to /booking to reserve.</h1>}
        />

        {/* Ruta oficial para el formulario de reservas */}
        <Route
        path="/booking"
        element={
            <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
        }
        />
    </Routes>
    </main>
);
}

export default Main;
