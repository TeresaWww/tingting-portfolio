import React from 'react';
import face from '../assets/face.png';
import "../css/Hero.css"
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaSquareXTwitter } from "react-icons/fa6";
import cv from "../assets/longling_cv.pdf"

function Hero() {
    const links = [
        { icon: <MdEmail />, url: "mailto:lucyling0224@gmail.com" },
        { icon: <FaGithub />, url: "https://github.com/LucyLing24" },
        { icon: <FaSquareXTwitter />, url: "https://x.com/LucyLing24" },
        { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/twang85/" },
    ];

    return (
        <div className="hero-grid">
            <div className="hero-left">
                <img
                    src={face}
                    alt="Profile"
                    className="profile-pic"
                />
                <div className="hero-meta">
                    <div className="meta-name">Tingting Wang 王婷婷</div>
                    Bachelor of Informatics
                    <div className="meta-description">
                        <div>🚀 Data & Growth Analyst</div>
                        <div>👩🏻‍💻 AI/Product Builder</div>
                        <div>🏸 Badminton Player</div>
                    </div>
                    <div className="meta-link">
                        <a className="meta-linkitem"
                           href="https://www.linkedin.com/in/twang85/"
                           target="_blank"
                           rel="noopener noreferrer"
                        >LinkedIn</a>
                        <a
                            className="meta-linkitem"
                            href={cv}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            CV
                        </a>
                    </div>
                    <div className="contact-small">
                        {links.map((item, index) => (
                            <a
                                key={index}
                                href={item.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="icon-link"
                            >
                                {item.icon}
                            </a>
                        ))}
                    </div>
                    <div className="small-text">Last Updated Date: 2026/03/20</div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
