import{Routes,Route } from 'react-router-dom';
import  HomePage  from './HomePage';
import BookingPage from './BookingPage';


export default function Main(){
    return (
        <main>
            <Routes>
        {/* This handles the logic of which page to show */}
            <Route path ="/" element={<HomePage />}/>
            <Route path ="/Booking" element={<BookingPage/>}/>

            </Routes>
        </main>

    );
}