import { useState } from "react";
import { cn } from "@/lib/utils";

import {
  FaHtml5,
  FaJs,
  FaReact,
  FaGithub,
  FaFigma,
  FaSwift,
  FaJava,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMysql,
  SiC,
  SiCplusplus,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";

const skillIcons = {
  "HTML/CSS": <FaHtml5 className="text-orange-600" />,
  JavaScript: <FaJs className="text-yellow-500" />,
  React: <FaReact className="text-cyan-400" />,
  "Tailwind CSS": <SiTailwindcss className="text-teal-400" />,
  MySQL: <SiMysql className="text-blue-600" />,
  C: <SiC className="text-blue-800" />,
  "C++": <SiCplusplus className="text-blue-500" />,
  Java: <FaJava className="text-red-600" />,
  "Git/GitHub": <FaGithub />,
  Figma: <FaFigma className="text-pink-600" />,
  "VS Code": <VscCode className="text-blue-400" />,
  Swift: <FaSwift className="text-orange-500" />,
};

const skills = [
  { name: "HTML/CSS", category: "frontend" },
  { name: "JavaScript", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },

  { name: "MySQL", category: "backend" },
  { name: "C", category: "backend" },
  { name: "C++", category: "backend" },
  { name: "Java", category: "backend" },

  { name: "Git/GitHub", category: "tools" },
  { name: "Figma", category: "tools" },
  { name: "VS Code", category: "tools" },
  { name: "Swift", category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-4 rounded-lg shadow-xs card-hover flex flex-col items-center justify-center text-center space-y-2 animate-float"
              style={{
                animationDelay: `${Math.random() * 2}s`,
              }}
            >
              <div className="text-4xl text-primary">
                {skillIcons[skill.name] || <span>🚀</span>}
              </div>
              <h3 className="font-semibold text-lg">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};