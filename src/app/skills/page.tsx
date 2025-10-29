"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const skillCategories = [
    {
      id: "frontend",
      name: "Frontend Development",
      icon: "🎨",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: "backend",
      name: "Backend Development",
      icon: "⚙️",
      color: "from-purple-500 to-pink-500"
    },
    {
      id: "database",
      name: "Databases & Cloud",
      icon: "🗄️",
      color: "from-green-500 to-emerald-500"
    },
    {
      id: "tools",
      name: "Tools & DevOps",
      icon: "🛠️",
      color: "from-orange-500 to-red-500"
    }
  ];

  const skills = {
    frontend: [
      { name: "React", level: 70, icon: "⚛️" },
      { name: "Next.js", level: 70, icon: "⚡" },
      { name: "TypeScript", level: 70, icon: "📘" },
      { name: "JavaScript", level: 76, icon: "🟨" },
      { name: "HTML5", level: 80, icon: "🌐" },
      { name: "CSS3/SCSS", level: 80, icon: "🎨" },
      { name: "Tailwind CSS", level: 80, icon: "🎯" },
    ],
    backend: [
      { name: "Node.js", level: 88, icon: "🟢" },
      { name: "Python", level: 85, icon: "🐍" },
      { name: "Express.js", level: 90, icon: "🚀" },
      { name: "FastAPI", level: 75, icon: "⚡" },
      { name: "GraphQL", level: 80, icon: "🔷" },
      { name: "REST APIs", level: 92, icon: "🔌" },
      { name: "Spring Boot", level: 70, icon: "🔥" },
      { name: "Java", level: 70, icon: "🔥" },
      { name: "JUnit testing", level: 70, icon: "🔥" },
      { name: "Gradle", level: 70, icon: "🔥" },
    ],
    database: [
      { name: "MongoDB", level: 85, icon: "🍃" },
      { name: "PostgreSQL", level: 80, icon: "🐘" },
      { name: "Redis", level: 60, icon: "🔴" },
      { name: "AWS", level: 70, icon: "☁️" },
      { name: "Firebase", level: 85, icon: "🔥" },
      { name: "Docker", level: 75, icon: "🐳" },
      { name: "Jenkins", level: 70, icon: "🔥" },
    ],
    tools: [
      { name: "Git", level: 90, icon: "📚" },
      { name: "Figma", level: 70, icon: "🎨" },
      { name: "Jira", level: 80, icon: "📋" },
      { name: "Confluence", level: 70, icon: "📋" },
      { name: "Slack", level: 70, icon: "📋" },
      { name: "Microsoft Excel", level: 70, icon: "📋" }
    ]
  };

  const getSkillColor = (level: number) => {
    if (level >= 90) return "from-green-500 to-emerald-500";
    if (level >= 80) return "from-blue-500 to-cyan-500";
    if (level >= 70) return "from-yellow-500 to-orange-500";
    return "from-gray-400 to-gray-500";
  };

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical skills and proficiency levels
          </p>
        </motion.div>

        {/* Skill Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700"
              }`}
            >
              <div className="text-4xl mb-3">{category.icon}</div>
              <h3 className="font-semibold text-sm">{category.name}</h3>
            </button>
          ))}
        </motion.div>

        {/* Skills Display */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              {skillCategories.find(c => c.id === activeCategory)?.name}
            </h2>
            <div className={`w-24 h-1 bg-gradient-to-r ${skillCategories.find(c => c.id === activeCategory)?.color} mx-auto rounded-full`}></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills[activeCategory as keyof typeof skills].map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{skill.icon}</span>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      {skill.name}
                    </h3>
                  </div>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {skill.level}%
                  </span>
                </div>
                
                <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className={`h-full bg-gradient-to-r ${getSkillColor(skill.level)} rounded-full`}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-8 text-center">
            Additional Skills
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Agile/Scrum", "CI/CD", "Testing", "Performance Optimization",
              "Responsive Design", "Accessibility", "SEO", "Security Best Practices",
              "API Design", "Microservices", "Serverless", "Mobile Development",
              "UI/UX Design", "Data Visualization", "Machine Learning"
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-slate-700 dark:to-slate-600 rounded-xl p-4 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">
                  {skill}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Learning Journey */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-8 text-center">
            Currently Learning
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                skill: "Quantitative Finance",
                description: "Quantitative Finance",
                progress: 30,
                icon: "🦀"
              },
              {
                skill: "AWS Certfication Associate",
                description: "AWS Certfication Associate",
                progress: 45,
                icon: "🔥"
              }
            ].map((item, index) => (
              <motion.div
                key={item.skill}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                  {item.skill}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  {item.description}
                </p>
                <div className="w-full bg-gray-200 dark:bg-slate-700 rounded-full h-2 mb-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.progress}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                  ></motion.div>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {item.progress}% Complete
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to collaborate?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's work together to bring your ideas to life using these skills and technologies.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 