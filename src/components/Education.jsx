import React from 'react';
import "../css/All.css"; // 确保你的 CSS 路径正确
import uw from "../assets/logo/uw.jpg";
import uchicago from "../assets/logo/uchicago.png";

export default function Education() {
    const education = [
        {
            university: "University of Washington",
            logo: uw,
            degree: "Bachelor of Science in Informatics - Data Science",
            college: null,
            gpa: "3.82/4.00",
            period: "2022.09 - 2026.06",
            location: "Seattle, WA",
            courses: [
                { name: "Database Systems", grade: null },
                { name: "Machine Learning", grade: null },
                { name: "Web Development", grade: null },
                { name: "Information Architecture", grade: null },
                { name: "Product Management", grade: null }
            ]
        },
        {
            university: "University of Chicago",
            logo: uchicago,
            degree: "Master of Science in Applied Data Science",
            college: "Incoming Graduate Student",
            gpa: null,
            period: "2026.09 - Expected 2027",
            location: "Chicago, IL",
            courses: []
        }
    ];

    return (
        <div className="card" id="education" style={{marginTop:"1rem"}}>
            <div className="card-title">Education</div>
            <div className="education-list">
                {education.map((edu, index) => (
                    <div
                        key={index}
                        className="education-item"
                        style={{ "--bg-logo": `url(${edu.logo})` }}
                    >
                        <div className="education-watermark" aria-hidden="true" />
                        <div className="education-fade" aria-hidden="true" />
                        <div className="education-inner">

                        <div className="education-header">
                            <h3 className="education-university">{edu.university}</h3>
                            <div className="education-period">
                                {edu.period}
                                <div className="education-location">{edu.location}</div>
                            </div>
                        </div>

                        <div className="education-details">
                            <p className="education-degree">
                                {edu.degree}
                                {edu.college && `, ${edu.college}`}
                                {edu.gpa && <span className="education-gpa">, GPA: <strong>{edu.gpa}.</strong></span>}
                            </p>
                        </div>

                        {edu.courses && edu.courses.length > 0 && (
                            <div className="education-courses">
                                <div>Courses:</div>
                                <ul>
                                    {edu.courses.map((course, i) => (
                                        <li key={i}>
                                            {course.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
