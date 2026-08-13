import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <header className="site-header">
            <nav
                className="navbar"
                aria-label="Primary navigation"
            >
                <NavLink
                    to="/"
                    className="brand"
                >
                    Can I Afford This?
                </NavLink>

                <div className="nav-links">
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            isActive ? "active" : ""
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/calculator"
                        className={({ isActive }) =>
                            isActive ? "active" : ""
                        }
                    >
                        Calculator
                    </NavLink>

                    <NavLink
                        to="/faq"
                        className={({ isActive }) =>
                            isActive ? "active" : ""
                        }
                    >
                        FAQ
                    </NavLink>

                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive ? "active" : ""
                        }
                    >
                        About
                    </NavLink>

                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            isActive ? "active" : ""
                        }
                    >
                        Contact
                    </NavLink>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;