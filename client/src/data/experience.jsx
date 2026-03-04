import { FaBriefcase, FaBuilding } from "react-icons/fa";
import React from 'react';

export const experiences = [
    {
        role: "Software Engineer",
        company: "Nandha Engineering College - Erode",
        duration: "Present",
        description: "Working on various real-time projects including School and College ERP systems and other real-time applications. Focusing on scalability, performance, and modern user interfaces.",
        icon: <FaBuilding className="text-blue-400" />,
        isCurrent: true
    },
    {
        role: "Software Architect (Part-Time)",
        company: "Search First Technolgies (P) Ltd., Erode",
        duration: "Present",
        description: "Leading architecture design and technical strategy for scalable ERP systems. Defining system structure, ensuring performance optimization, and guiding development teams to deliver secure, high-quality real-time applications with modern user experiences.",
        icon: <FaBuilding className="text-blue-400" />,
        isCurrent: true
    },
    {
        role: "Software Testing Intern",
        company: "Crypton Tech (P) Ltd., Erode",
        duration: "3 Months",
        description: "Assisted in manual and automated testing of web applications. Identified and reported critical bugs, ensuring high-quality software delivery.",
        icon: <FaBriefcase className="text-purple-400" />
    }
];
