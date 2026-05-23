import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaGitAlt,
    FaGithub,
    FaBootstrap,
    FaNodeJs,
    FaDocker
} from "react-icons/fa";

import {
    SiTailwindcss,
    SiMysql,
    SiExpress,
    SiJsonwebtokens
} from "react-icons/si";

import React from 'react';

export const skillCategories = [
    {
        title: "Frontend Development",
        description: "Building fast, interactive and modern user interfaces.",
        skills: [
            { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
            { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
            { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
            { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
            { name: "React JS", icon: <FaReact className="text-cyan-400" /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
        ],
        span: "md:col-span-2",
        bg: "bg-blue-50/50",
        border: "border-blue-100"
    },
    {
        title: "Backend & Database",
        description: "Building scalable backend systems and APIs.",
        skills: [
            { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
            { name: "Express.js", icon: <SiExpress className="text-gray-700" /> },
            { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
            { name: "REST API", icon: <FaJs className="text-yellow-500" /> },
            { name: "JWT", icon: <SiJsonwebtokens className="text-pink-500" /> },
        ],
        span: "md:col-span-1",
        bg: "bg-purple-50/50",
        border: "border-purple-100"
    },
    {
        title: "Tools & Workflow",
        description: "Version control, deployment, and development workflow.",
        skills: [
            { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
            { name: "GitHub", icon: <FaGithub className="text-slate-800" /> },
            { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
        ],
        span: "md:col-span-1",
        bg: "bg-slate-50",
        border: "border-slate-100"
    },
];