import React from 'react';
import "../css/All.css"

function About() {
    return (
        <div className="about" id="about">
            <div className="intro-text">
                <span>
                    Hi, I'm <strong>Tingting Wang</strong> (王婷婷, aka Teresa), an Informatics student at the <span className="text-emph">University of Washington</span> with a focus on <strong>Data Science</strong>. My work sits at the intersection of data, product marketing, and AI-related projects.
                    <br /><br />
                    I love turning trends and data into content ideas and marketing strategies that help businesses connect with users and grow. I’ve worked on building data pipelines, designing ETL workflows, tracking campaign performance, automating manual processes, and driving data-driven decisions.
                </span>

                <div className="callout">I'm open to internship, full-time, research, and collaboration opportunities in data, AI, product, and growth. Please feel free to reach out about any potential opportunities :)</div>
            </div>
        </div>
    );
}

export default About;
