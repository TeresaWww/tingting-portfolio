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
                name: "Leewow",
                link: "https://leewow.com",
                logo: leewow
            },
            period: "2026.04 - Present",
            role: "Product Marketing & Growth Intern",
            location: "Remote",
            details: [
                <span>
                    Supported <strong>product marketing and growth strategy</strong> for an AI-powered custom merch platform across <strong>3 social media channels</strong>. Researched viral trends, competitors, and platform-specific user behavior to design content strategies. Tested <strong>10+ AI tools</strong> to create video concepts, hooks, captions, and visual prompts that promoted custom merch use cases.
                </span>,
                <span><span className="inline-name">Focus:</span> Content strategy, user growth, product marketing, social media analytics.</span>,
            ]
        },
        {
            organization: {
                name: "ByteDance",
                link: "https://www.bytedance.com/en/",
                logo: bd
            },
            period: "2025.06 - 2026.09",
            role: "Content Operations Intern - Douyin Livestream",
            location: "Beijing, China",
            details: [
                <span>
                    Supported <strong>livestream campaign strategies</strong> by building <strong>data dashboards</strong>, tracking performance, and identifying growth opportunities. <strong>Automated streamer screening</strong> to generate 100+ qualified creator leads daily and reduced manual review time by 50%. Helped livestreamers improve fan growth, revenue, and ACU, including a <strong>240% increase</strong> in peak concurrent viewers.
                </span>,
                <span><span className="inline-name">Tools:</span> Python, SQL, Tableau, campaign analytics, data visualization.</span>,
            ]
        },
        {
            organization: {
                name: "Hasvide System Engineering Technology",
                link: "#",
                logo: hasvide
            },
            period: "2024.07 - 2024.09",
            role: "UI Development Intern",
            location: "Beijing, China",
            details: [
                <span>
                    Developed and refined <strong>web interfaces</strong> using JavaScript, HTML, and CSS, integrating front-end pages with <strong>Java backend APIs</strong>. Improved page structure and performance, reducing average load time by <strong>20%</strong>. Collaborated with <strong>cross-functional teams</strong> to support code reviews and WeChat Mini Program updates.
                </span>,
                <span><span className="inline-name">Tools:</span> JavaScript, HTML, CSS, Java APIs.</span>,
            ]
        },
        {
            organization: {
                name: "University of Tokyo",
                link: "https://developmental-robotics.jp/en/home/",
                logo: utokyo
            },
            period: "2024.06 - 2024.07",
            role: "Research Assistant - Simulator of Atypical Perception in ASD",
            location: "Tokyo, Japan",
            details: [
                <span>
                    Supported research on <strong>ECG/HRV analysis</strong> by processing heart rate signals, extracting physiological features, and improving data quality through filtering and preprocessing. Worked with <strong>machine learning and PV-RNN models</strong> to analyze emotional state patterns and helped prepare research reports.
                </span>,
                <span><span className="inline-name">Focus:</span> Healthcare AI, machine learning, hyperparameter tuning, literature review, Python, Matplotlib.</span>,
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
