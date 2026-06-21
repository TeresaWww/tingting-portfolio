import React, { useState } from "react";
import "../css/Publications.css";

import flow_img from "../assets/paper_image/flow.png";
import capace_img from "../assets/paper_image/capace.png";
import fashion_supply_chain_img from "../assets/paper_image/fashion-supply-chain.png";
import sephora_analysis_img from "../assets/paper_image/sephora-analysis.png";
import tuntun_img from "../assets/paper_image/tuntun.png";
import carbon_img from "../assets/paper_image/carbon.png";
import lifeeling_img from "../assets/paper_image/lifeeling.png";

const MY_NAME = "Tingting Wang";

const publications = [
    {
        id: "flysmart",
        title: "FlySmart: Data-Driven Airport Planning Web App",
        abstract:
            "Developed with course stakeholders around analytics, modeling, and product framing; supporting documentation available on request.",
        authors: [{ name: "Stakeholders" }],
        venues: [{ name: "Capstone", type: "workshop" }],
        links: { msg: "Stakeholders — materials on request." },
        image: flow_img,
        tags: [
            "Data Analytics",
            "Machine Learning",
            "Predictive Modeling",
            "Python",
            "Data Cleaning",
            "Feature Engineering",
            "Product Design",
        ],
    },
    {
        id: "myplan-builder",
        title:
            "MyPlan Builder: Course Planning Chrome Extension Prototype for UW Course Registration",
        abstract:
            "Stakeholder-informed UI/UX exploration covering research, wireframing, and usability evaluation; details available on request.",
        authors: [{ name: "Stakeholders" }],
        venues: [{ name: "UI/UX Design", type: "workshop" }],
        links: { msg: "Stakeholders — materials on request." },
        image: capace_img,
        tags: [
            "Product Design",
            "User Research",
            "Wireframing",
            "Prototyping",
            "Figma",
            "Information Architecture",
            "Usability Testing",
        ],
    },
    {
        id: "fashion-supply-chain",
        title: "Fashion Supply Chain Traceability Platform",
        abstract:
            "Cross-functional work with stakeholders on analytics, process optimization, and business-facing reporting; artifacts on request.",
        authors: [{ name: "Stakeholders" }],
        venues: [{ name: "Product Management", type: "workshop" }],
        links: { msg: "Stakeholders — materials on request." },
        image: fashion_supply_chain_img,
        tags: [
            "Project Management",
            "Supply Chain Analytics",
            "Process Optimization",
            "Stakeholder Management",
            "Business Analysis",
        ],
    },
    {
        id: "sephora-review-analysis",
        title: "Sephora Products and Review Analysis",
        abstract:
            "Built with stakeholders to connect SQL/Mongo pipelines, cleaning, and analytics views; schema and dashboards on request.",
        authors: [{ name: "Stakeholders" }],
        venues: [{ name: "Data Engineering", type: "workshop" }],
        links: { msg: "Stakeholders — materials on request." },
        image: sephora_analysis_img,
        tags: [
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
    },
    {
        id: "spotify-optimization",
        title: "Spotify Recommendation System Optimization",
        abstract:
            "Stakeholder-scoped ML prototype using KNN-style content signals, preprocessing, and API integration; code samples on request.",
        authors: [{ name: "Stakeholders" }],
        venues: [{ name: "Machine Learning", type: "workshop" }],
        links: { msg: "Stakeholders — materials on request." },
        image: tuntun_img,
        tags: [
            "Machine Learning",
            "Recommendation System",
            "KNN",
            "Content-based Filtering",
            "Feature Engineering",
            "Data Preprocessing",
            "Python",
            "API Integration",
        ],
    },
    {
        id: "tiktok-regulations-data",
        title: "U.S. Regulations on TikTok, What's Behind the Data?",
        abstract:
            "Stakeholder-driven dashboards and storytelling from cleaned engagement data; sample visuals on request.",
        authors: [{ name: "Stakeholders" }],
        venues: [{ name: "Data Analytics", type: "workshop" }],
        links: { msg: "Stakeholders — materials on request." },
        image: carbon_img,
        tags: [
            "Data Visualization",
            "Data Cleaning",
            "Marketing Analytics",
            "Dashboarding",
            "Engagement Metrics",
            "Data Storytelling",
        ],
    },
    {
        id: "mood-dairy-web-app",
        title: "Mood Dairy: Full-Stack Mood Tracking Web App",
        abstract:
            "Built with stakeholders end-to-end (React, Node, persistence, auth); deployment notes and demo on request.",
        authors: [{ name: "Stakeholders" }],
        venues: [{ name: "Full-stack", type: "workshop" }],
        links: { msg: "Stakeholders — materials on request." },
        image: lifeeling_img,
        tags: [
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
    },
];


const tagColors = {
    conference: "conference",
    journal: "journal",
    workshop: "workshop",
    wip:"wip",
    thesis:"thesis",
    exhibition: "exhibition",
};

const tagStyleMap = {
    "API Integration": "#6B7EAE",
    "Backend Development": "#6B7EAE",
    "Business Analysis": "#6B7EAE",
    "CRUD Operations": "#6B7EAE",
    "Content-based Filtering": "#6B7EAE",
    "Dashboarding": "#6B7EAE",
    "Data Analytics": "#6B7EAE",
    "Data Cleaning": "#6B7EAE",
    "Data Modeling": "#6B7EAE",
    "Data Pipeline": "#6B7EAE",
    "Data Preprocessing": "#6B7EAE",
    "Data Storytelling": "#6B7EAE",
    "Data Visualization": "#6B7EAE",
    "Database Design": "#6B7EAE",
    "Database Management": "#6B7EAE",
    "ETL": "#6B7EAE",
    "Engagement Metrics": "#6B7EAE",
    "Feature Engineering": "#6B7EAE",
    "Figma": "#6B7EAE",
    "Frontend Development": "#6B7EAE",
    "Full-stack Development": "#6B7EAE",
    "Information Architecture": "#6B7EAE",
    "KNN": "#6B7EAE",
    "Machine Learning": "#6B7EAE",
    "Marketing Analytics": "#6B7EAE",
    "MongoDB": "#6B7EAE",
    "NoSQL": "#6B7EAE",
    "Node.js": "#6B7EAE",
    "Predictive Modeling": "#6B7EAE",
    "Process Optimization": "#6B7EAE",
    "Product Analytics": "#6B7EAE",
    "Project Management": "#6B7EAE",
    "Prototyping": "#6B7EAE",
    "Python": "#6B7EAE",
    "React": "#6B7EAE",
    "Recommendation System": "#6B7EAE",
    "SQL": "#6B7EAE",
    "Stakeholder Management": "#6B7EAE",
    "Supply Chain Analytics": "#6B7EAE",
    "UI/UX Design": "#6B7EAE",
    "Usability Testing": "#6B7EAE",
    "User Authentication": "#6B7EAE",
    "User Research": "#6B7EAE",
    "User-centered Product Design": "#6B7EAE",
    "Wellness Tech": "#6B7EAE",
    "Wireframing": "#6B7EAE",
};

export default function Publications() {
    const [selectedTag, setSelectedTag] = useState("");

    const filteredPublications = selectedTag
        ? publications.filter((p) => p.tags.includes(selectedTag))
        : publications;

    const handleTagClick = (tag) => {
        setSelectedTag(selectedTag === tag ? "" : tag);
    };
    const handleSelectChange = (event) => {
        const newTag = event.target.value;
        handleTagClick(newTag);
    };

    return (
        <div className="publications" id="projects" style={{marginTop:"1rem"}}>
            <div className="publications-select">
                <div className="card-title">
                    Projects
                </div>

                <select
                    className="tag-select-filter"
                    value={selectedTag}
                    onChange={handleSelectChange}
                >
                    <option value="">All</option>
                    {Object.keys(tagStyleMap).map((tag) => (
                        <option key={tag} value={tag}>
                            {tag}
                        </option>
                    ))}

                </select>
            </div>

            {/*<div className="tag-filter">*/}
            {/*    <span*/}
            {/*        className={`${selectedTag === "Selected" ? "active" : ""} rainbow-tag`}*/}
            {/*        style={{color: tagStyleMap["Selected"]}}*/}
            {/*        onClick={() => handleTagClick("Selected")}*/}
            {/*    >*/}
            {/*            #Selected*/}
            {/*        </span>*/}
            {/*    <span*/}
            {/*        key={"In Submission"}*/}
            {/*        className={`${selectedTag === "In Submission" ? "active" : ""} submission-tag`}*/}
            {/*        onClick={() => handleTagClick("In Submission")}*/}
            {/*    >*/}
            {/*            #In Submission*/}
            {/*        </span>*/}
                {/*{Object.keys(tagStyleMap).map((tag) => {*/}
                {/*        if (tag === "Selected") {*/}
                {/*            return (<span*/}
                {/*                key={tag}*/}
                {/*                className={`${selectedTag === tag ? "active" : ""} rainbow-tag`}*/}
                {/*                style={{color: tagStyleMap[tag]}}*/}
                {/*                onClick={() => handleTagClick(tag)}*/}
                {/*            >*/}
                {/*        #{tag}*/}
                {/*    </span>)*/}
                {/*        } else if (tag === "In Submission") {*/}
                {/*            return (<span*/}
                {/*                key={tag}*/}
                {/*                className={`${selectedTag === tag ? "active" : ""} submission-tag`}*/}
                {/*                onClick={() => handleTagClick(tag)}*/}
                {/*            >*/}
                {/*        #{tag}*/}
                {/*    </span>)*/}
                {/*        }*/}
                {/*        // else return (<span*/}
                {/*        //     key={tag}*/}
                {/*        //     className={`filter-tag ${selectedTag === tag ? "active" : ""}`}*/}
                {/*        //     style={{color: tagStyleMap[tag]}}*/}
                {/*        //     onClick={() => handleTagClick(tag)}*/}
                {/*        // >*/}
                {/*        //     #{tag}*/}
                {/*        // </span>)*/}
                {/*    }*/}
                {/*)}*/}
            {/*</div>*/}

            <div className="publications-info">
                {/*My publications reflect my ongoing exploration of human–AI interaction and creativity support.*/}
                {/*You can click on the tags below to filter papers by topic or research area.*/}
                <div className="publications-info-small">
                    Use the filter to narrow projects by skill or tool.
                </div>
            </div>


            <div className="publications-list">
                {filteredPublications.map((paper, index) => (
                    <div key={index} className="publication-card" id={paper.id}>
                        <img
                            src={paper.image}
                            alt={paper.title}
                            className="publication-image"
                        />

                        <div className="publication-content">

                            <div className="publication-venue">
                                {paper.venues.map((v, vi) => (
                                    <span
                                        key={vi}
                                        className={`venue-tag ${tagColors[v.type]}`}
                                    >
                    {v.name}
                  </span>
                                ))}
                            </div>

                            {/* title + hover abstract */}
                            <div className="publication-title-wrapper">
                                <div className="publication-title">{paper.title}</div>
                                <div className="abstract-popup">{paper.abstract}</div>
                            </div>

                            <div className="publication-authors">
                                {paper.authors.map((author, i) => {
                                    let symbol = "";
                                    if (author.role === "first") symbol = "*";
                                    if (author.role === "second") symbol = "**";
                                    if (author.role === "advisor") symbol = "†";

                                    const isMe = author.name === MY_NAME;
                                    const authorName = isMe ? (
                                        <strong
                                            style={{color: "#000080", fontWeight: 900}}
                                        >
                                            {author.name + symbol}
                                        </strong>
                                    ) : (
                                        author.name + symbol
                                    );

                                    return (
                                        <span key={i}>
                      {author.link ? (
                          <a
                              href={author.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="author-link"
                          >
                              {authorName}
                          </a>
                      ) : (
                          authorName
                      )}
                                            {i < paper.authors.length - 1 && ", "}
                    </span>
                                    );
                                })}
                            </div>

                            <div className="publication-tags">
                                {paper.tags.map((tag, i) => {
                                        if (tag === "Selected") {
                                            return (
                                                <span
                                                    key={i}
                                                    className="tag-item-show rainbow-tag-all"
                                                    // onClick={() => handleTagClick(tag)}
                                                >
                                            #{tag}
                                        </span>
                                            )
                                        } else if (tag === "In Submission") {
                                            return (
                                                <span
                                                    key={i}
                                                    className="tag-item-show submission-tag-all"
                                                    // onClick={() => handleTagClick(tag)}
                                                >
                                            #{tag}
                                        </span>
                                            )
                                        } else return (
                                            <span
                                                key={i}
                                                className="tag-item-show"
                                                // style={{color: tagStyleMap[tag]}}
                                                style={{color: "#888"}}
                                                // onClick={() => handleTagClick(tag)}
                                            >
                                            #{tag}
                                        </span>
                                        );
                                    }
                                )}
                            </div>

                            <div className="publication-links">
                                {paper.links.pdf && (
                                    <a href={paper.links.pdf} target="_blank" rel="noopener noreferrer">
                                        PDF
                                    </a>
                                )}
                                {paper.links.thesis && (
                                    <a href={paper.links.thesis} target="_blank" rel="noopener noreferrer">
                                        Master Thesis
                                    </a>
                                )}
                                {paper.links.acm && (
                                    <a href={paper.links.acm} target="_blank" rel="noopener noreferrer">
                                        DOI
                                    </a>
                                )}
                                {paper.links.arxiv && (
                                    <a href={paper.links.arxiv} target="_blank" rel="noopener noreferrer">
                                        arXiv
                                    </a>
                                )}
                                {paper.links.slide && (
                                    <a href={paper.links.slide} target="_blank" rel="noopener noreferrer">
                                        Slide
                                    </a>
                                )}
                                {paper.links.github && (
                                    <a href={paper.links.github} target="_blank" rel="noopener noreferrer">
                                        Github
                                    </a>
                                )}
                                {paper.links.web && (
                                    <a href={paper.links.web} target="_blank" rel="noopener noreferrer">
                                        Website
                                    </a>
                                )}
                                {paper.links.poster && (
                                    <a href={paper.links.poster} target="_blank" rel="noopener noreferrer">
                                        Poster
                                    </a>
                                )}
                                {paper.links.code && (
                                    <a href={paper.links.code} target="_blank" rel="noopener noreferrer">
                                        Code
                                    </a>
                                )}
                                {paper.links.demo && (
                                    <a href={paper.links.demo} target="_blank" rel="noopener noreferrer">
                                        Demo
                                    </a>
                                )}
                                {paper.links.short && (
                                    <a href={paper.links.short} target="_blank" rel="noopener noreferrer">
                                        Quick View
                                    </a>
                                )}
                                {paper.links.page && (
                                    <a href={paper.links.page} target="_blank" rel="noopener noreferrer">
                                        Page
                                    </a>
                                )}
                                {paper.links.video && (
                                    <a href={paper.links.video} target="_blank" rel="noopener noreferrer">
                                        Presentation
                                    </a>
                                )}
                                {paper.links.msg && (
                                    <div className={"publications-msg"}>{paper.links.msg}</div>
                                )}
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
