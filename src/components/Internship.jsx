import React from "react";
import "../css/Internship.css";
import bd from "../assets/logo/ByteDance.png"
import leewow from "../assets/logo/leewow.png"
import hasvide from "../assets/logo/hasvide.png"
import utokyo from "../assets/logo/utokyo.png"

export default function Internship() {
    const experiences = [
        {
            organization: {
                name: "ByteDance / Douyin",
                link: "https://www.bytedance.com/en/",
                logo: bd
            },
            period: "2025.06 - 2026.09",
            role: "Content Operations Intern - Livestream",
            location: "Beijing, China",
            details: [
                <span><span className="inline-name">Highlight:</span> Built Python and SQL pipelines to clean, merge, and analyze large-scale livestream campaign data, supporting data-driven decisions for content operations and campaign performance.</span>,
                <span>Tracked key metrics including ad exposure, ACU revenue, fan growth, user retention, creator performance, and audience growth to help operations teams adjust campaign strategy.</span>,
                <span>Automated streamer screening workflows with Python ETL, helping identify 100+ qualified creator leads per day and reducing manual review workload.</span>,
                <span><span className="inline-name">Tools:</span> Python, SQL, internal dashboards, Tableau, campaign analytics, data visualization.</span>,
            ]
        },
        {
            organization: {
                name: "Leewow",
                link: "https://leewow.com",
                logo: leewow
            },
            period: "2026.04 - Present",
            role: "Product Marketing & Growth Intern",
            location: "Remote",
            details: [
                <span><span className="inline-name">Highlight:</span> Supported product marketing and social media growth strategy for an AI-powered custom merch platform.</span>,
                <span>Researched viral trends, competitor positioning, creator-style content, and platform-specific user behavior across TikTok, Instagram, and Threads.</span>,
                <span>Created short-form video concepts, hooks, captions, product storytelling angles, and AI visual prompts to promote customized merch use cases.</span>,
                <span><span className="inline-name">Focus:</span> Content strategy, user growth, product marketing, social media analytics, AI-generated merch promotion.</span>,
            ]
        },
        {
            organization: {
                name: "Beijing Qiantai Dexin Technology",
                link: "#",
                logo: hasvide
            },
            period: "2024.07 - 2024.09",
            role: "UI Development Intern",
            location: "Beijing, China",
            details: [
                <span><span className="inline-name">Highlight:</span> Developed and refined web interfaces using JavaScript, HTML, and CSS, integrating front-end pages with Java backend APIs.</span>,
                <span>Improved page structure, data flow, and front-end performance, reducing average page load time by around 20%.</span>,
                <span>Worked closely with product managers and engineers in an agile team, participated in code reviews, and supported WeChat Mini Program feature updates.</span>,
                <span><span className="inline-name">Tools:</span> JavaScript, HTML, CSS, Java APIs, WeChat Mini Program, agile development.</span>,
            ]
        },
        {
            organization: {
                name: "University of Tokyo",
                link: "https://www.u-tokyo.ac.jp/en/",
                logo: utokyo
            },
            period: "2024.06 - 2024.09",
            role: "Research Assistant - ECG / HRV Analysis",
            location: "Tokyo, Japan",
            details: [
                <span><span className="inline-name">Highlight:</span> Supported research on computational modeling and analysis of human heart rate signals related to emotional states and neurodiversity.</span>,
                <span>Processed ECG and HRV data, extracted physiological features, improved data quality through filtering and preprocessing, and helped prepare research reports.</span>,
                <span>Worked with AI and machine learning models including PV-RNN to simulate heart rate variability patterns and analyze emotional state classification.</span>,
                <span><span className="inline-name">Tools:</span> Python, NeuroKit2, pyHRV, PV-RNN, Matplotlib, signal preprocessing, time-series analysis.</span>,
            ]
        }
    ];

    return (
        <div className="card" id="internship" style={{marginTop:"1rem"}}>
            <div className="card-title">Experience</div>
            <div className="timeline-container">
            {experiences.map((exp, index) => (
                    <div key={index} className="timeline-item">
                        <div className="timeline-label">
                            <div className="timeline-period-label">{exp.period.replace(' - ', '\n–\n')}</div>
                        </div>

                        <div className="timeline-content">

                            <div className="org-logo-container">
                                <img src={exp.organization.logo} alt={`${exp.organization.name} Logo`}
                                     className="org-logo"/>
                            </div>

                            <div className="exp-container">
                                    <div className="timeline-header">
                                        <div className="exp-organization">
                                            <a
                                                className="exp-organization-name"
                                                href={exp.organization.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >{exp.organization.name}</a>
                                            <div className="exp-role">{exp.role}</div>
                                        </div>

                                        <div className="exp-period">
                                            <div>{exp.period}</div>
                                            <div className="exp-location">{exp.location}</div>
                                        </div>
                                    </div>


                                {exp.details && (
                                    <ul className="exp-details">
                                        {exp.details.map((detail, i) => (
                                            <li key={i}>{detail}</li>
                                        ))}
                                    </ul>
                                )}

                                {exp.projects && (
                                    <ul className="exp-projects">
                                        {exp.projects.map((proj, i) => (
                                            <li key={i}>

                                                <div className="project-roles">
                                                    {proj.name}
                                                    {proj.roles.map((role, idx) => (
                                                        <span key={idx} className="role-tag">
                                                            {role}
                                                        </span>
                                                    ))}
                                                    {proj?.link?.map((link, linkIndex) => (
                                                        <span key={linkIndex} className="role-link">{link}</span>
                                                    ))}
                                                </div>

                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                            </div>
                        </div>
                        ))}
            </div>
        </div>
    );
}
