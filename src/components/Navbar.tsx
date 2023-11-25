import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"

export const Navbar = () => {
    return(
        <nav>
            <Link to="/" className="title">Home</Link>
            <ul>
                <li><NavLink to="/learning">Learning</NavLink></li>
                <li><NavLink to="/roadmap">Roadmap</NavLink></li>
                <li><NavLink to="/settings">Settings</NavLink></li>
            </ul>
        </nav>
    )
}