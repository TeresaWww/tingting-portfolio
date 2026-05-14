import React from "react";
import "../css/All.css";

const projects = [
    {
        title: "FlySmart — Capstone",
        description:
            "Data analytics, machine learning, and user-centered product design for predictive airport planning.",
        skills: [
            "Data Analytics",
            "Machine Learning",
            "Predictive Modeling",
            "Python",
            "Data Cleaning",
            "Feature Engineering",
            "User-centered Product Design",
        ],
        type: "Capstone",
        year: "",
    },
    {
        title: "MyPlan Builder",
        description:
            "UI/UX design from research through wireframes, Figma prototypes, and usability testing.",
        skills: [
            "UI/UX Design",
            "User Research",
            "Wireframing",
            "Prototyping",
            "Figma",
            "Information Architecture",
            "Usability Testing",
        ],
        type: "UX",
        year: "",
    },
    {
        title: "Supply Chain Optimization",
        description:
            "Project management and analytics with stakeholders to improve processes and reporting.",
        skills: [
            "Project Management",
            "Supply Chain Analytics",
            "Process Optimization",
            "Stakeholder Management",
            "Business Analysis",
        ],
        type: "Analytics",
        year: "",
    },
    {
        title: "Sephora Database Project",
        description:
            "ETL, SQL/MongoDB modeling, and product analytics for a data pipeline and reporting layer.",
        skills: [
            "Database Management",
            "ETL",
            "SQL",
            "MongoDB",
            "Data Modeling",
            "Data Cleaning",
            "Product Analytics",
            "NoSQL",
            "Data Pipeline",
        ],
        type: "Data",
        year: "",
    },
    {
        title: "Spotify Recommendation System",
        description:
            "Content-based recommendations with KNN, feature engineering, preprocessing, and API integration.",
        skills: [
            "Machine Learning",
            "Recommendation System",
            "KNN",
            "Content-based Filtering",
            "Feature Engineering",
            "Data Preprocessing",
            "Python",
            "API Integration",
        ],
        type: "ML",
        year: "",
    },
    {
        title: "TikTok / Social Media Analytics",
        description:
            "Marketing analytics dashboards and data storytelling from cleaned engagement metrics.",
        skills: [
            "Data Visualization",
            "Data Cleaning",
            "Marketing Analytics",
            "Dashboarding",
            "Engagement Metrics",
            "Data Storytelling",
        ],
        type: "Analytics",
        year: "",
    },
    {
        title: "Daily Mood App",
        description:
            "Full-stack wellness app with React, Node.js, auth, and CRUD journaling flows.",
        skills: [
            "Full-stack Development",
            "Frontend Development",
            "Backend Development",
            "React",
            "Node.js",
            "Database Design",
            "User Authentication",
            "CRUD Operations",
            "Wellness Tech",
        ],
        type: "Full-stack",
        year: "",
    },
];

function News() {
    return (
        <section className="projects-archive" id="projects" aria-labelledby="projects-heading">
            <h2 className="card-title" id="projects-heading">
                Projects
            </h2>
            <div className="projects-archive__scroll">
                <ul className="projects-archive__list">
                    {projects.map((p) => {
                        const meta = [p.type, p.year].filter(Boolean).join(" · ");

                        return (
                            <li key={p.title}>
                                <article className="project-card">
                                    <div className="project-card__lead">
                                        <h3 className="project-card__title">{p.title}</h3>
                                        {meta ? (
                                            <span className="project-card__meta">{meta}</span>
                                        ) : null}
                                    </div>
                                    <p className="project-card__desc">{p.description}</p>
                                    <ul className="project-card__tags" aria-label="Skills and tools">
                                        {p.skills.map((s) => (
                                            <li key={s}>{s}</li>
                                        ))}
                                    </ul>
                                </article>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
}

export default News;
