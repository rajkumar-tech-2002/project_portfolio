import { FaBriefcase, FaBuilding } from "react-icons/fa";
import React from 'react';

export const experiences = [
    {
        role: "Software Engineer",
        company: "Nandha Engineering College",
        duration: "Present",
        description: "Working on various real-time projects including School and College ERP systems. Focusing on scalability, performance, and modern user interfaces.",
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
