import { FaBriefcase, FaBuilding } from "react-icons/fa";
import React from 'react';

export const experiences = [
    {
        role: "Software Developer",
        company: "Nandha Engineering College - Erode",
        duration: "Jan 2025 - Present",
        description:
            "Developing and maintaining scalable admission and management web applications with optimized backend systems, REST APIs, and database integration.",
        icon: <FaBuilding className="text-blue-400" />,
        isCurrent: true
    },

    {
        role: "Full Stack Developer (Part-Time)",
        company: "Search First Technologies (P) Ltd., Erode",
        duration: "Jul 2025 - Present",
        description:
            "Designing and developing scalable web and AI-based applications with modern frontend architectures, secure APIs, and optimized database systems.",
        icon: <FaBuilding className="text-blue-400" />,
        isCurrent: true
    },

    {
        role: "Software Testing Intern",
        company: "Crypton Tech (P) Ltd., Erode",
        duration: "3 Months",
        description:
            "Performed manual and automated testing of web applications, identified critical bugs, and improved software quality through test case validation.",
        icon: <FaBriefcase className="text-purple-400" />
    }
];