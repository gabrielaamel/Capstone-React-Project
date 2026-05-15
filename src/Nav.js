import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <nav>
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                {/* Notice this matches the path we put in Main.js */}
                <li><Link to="/booking">Reservation</Link></li>
                <li><Link to="/order">Order</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    );
}