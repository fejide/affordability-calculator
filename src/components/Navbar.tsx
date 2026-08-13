import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    function closeMenu() {
        setMenuOpen(false);
    }

    return (
        <header className="site-header">
            <nav
                className="navbar"
                aria-label="Primary navigation"
            >
                <NavLink
                    to="/"
                    className="brand"
                    onClick={closeMenu}
                >
                    Can I Afford This?
                </NavLink>

                <button
                    className="mobile-menu-button"
                    type="button"
                    aria-label="Toggle navigation menu"
                    aria-expanded={menuOpen}
                    aria-controls="primary-navigation-links"
                    onClick={() =>
                        setMenuOpen(
                            (currentState) =>
                                !currentState
                        )
                    }
                >
                    <span />
                    <span />
                    <span />
                </button>

                <div
                    id="primary-navigation-links"
                    className={`nav-links ${
                        menuOpen ? "nav-links-open" : ""
                    }`}
                >
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            isActive ? "active" : ""
                        }
                        onClick={closeMenu}
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to="/calculator"
                        className={({ isActive }) =>
                            isActive ? "active" : ""
                        }
                        onClick={closeMenu}
                    >
                        Calculator
                    </NavLink>

                    <NavLink
                        to="/faq"
                        className={({ isActive }) =>
                            isActive ? "active" : ""
                        }
                        onClick={closeMenu}
                    >
                        FAQ
                    </NavLink>

                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            isActive ? "active" : ""
                        }
                        onClick={closeMenu}
                    >
                        About
                    </NavLink>

                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            isActive ? "active" : ""
                        }
                        onClick={closeMenu}
                    >
                        Contact
                    </NavLink>
                </div>
            </nav>
        </header>
    );
}

export default Navbar;