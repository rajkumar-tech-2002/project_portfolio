import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaDatabase, FaGitAlt, FaGithub, FaBootstrap } from "react-icons/fa";
import { SiTailwindcss, SiMysql } from "react-icons/si";
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
        title: "Database & Backend",
        description: "Managing and optimizing data structures and APIs.",
        skills: [
            { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
            { name: "SQL", icon: <FaDatabase className="text-indigo-400" /> },
        ],
        span: "md:col-span-1",
        bg: "bg-purple-50/50",
        border: "border-purple-100"
    },
    {
        title: "Tools & Workflow",
        description: "Version control and development efficiency.",
        skills: [
            { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
            { name: "GitHub", icon: <FaGithub className="text-white" /> },
        ],
        span: "md:col-span-1",
        bg: "bg-slate-50",
        border: "border-slate-100"
    },
];
