import React, { useState } from "react";
import "../css/Header.css";
import logo from "../assets/logo.png";

const NAV = [
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "internship", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "more", label: "More" },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleClick = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        setMenuOpen(false);
    };

    return (
        <header className={`header-wrapper ${menuOpen ? "menu-open" : ""}`}>
            <div className="header-container">
                <div className="header-name">
                    <img src={logo} alt="logo" style={{ width: "36px", marginRight: 12 }} />
                    <div className="name-main">Tingting W<span className="fancy-i">a</span>ng</div>
                </div>

                {/* 汉堡按钮 */}
                <button
                    className={`hamburger ${menuOpen ? "open" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                >
                    <span className="bar bar1" />
                    <span className="bar bar2" />
                    <span className="bar bar3" />
                </button>

                {/* 导航栏 */}
                <nav className={`header-nav ${menuOpen ? "show" : ""}`}>
                    {NAV.map((item) => (
                        <button
                            key={item.id}
                            className="nav-item"
                            onClick={() => handleClick(item.id)}
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>
            </div>
        </header>
    );
}
