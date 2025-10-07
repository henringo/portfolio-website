"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function About() {
  const experiences = [
    {
      year: "2020",
      title: "Student",
      company: "Taylors College.",
      description: "Foundation Program for Univesity of Sydney",
      skills: ["Accounting", "Information Technology - Python,C#","Economics","Financial Maths"]
    },
    {
      year: "2021 - 2025",
      title: "Dalyell Student - Bachelor of Advanced Computing (Honours)",
      company: "University of Sydney.",
      description: "Academic Honours - WAM:74",
      skills: ["Next.js", "Python", "PostgreSQL", "Java","R","C#","C++","SQL","NoSQL","Docker","Kubernetes","Git","Jenkins","GitLab CI","Azure","AWS","Machine Learning","AI","Data Science"]
    },
    {
      year: "October 2023 - February 2024",
      title: "Data Analytics Intern",
      company: "Maxport Limited Vietnam",
      description: "Improved data analysis and reporting efficiency by 30% using Power BI and Python.",
      skills: ["Power BI", "Python", "SQL","Data Visualization","Data Cleaning and Preprocessing","Data Pipeline","Data Privacy","Data Reporting","Data Dashboards","Data Security"]
    }
  ];

  const education = [
    {
      year: "2015 - 2019",
      degree: "Bachelor of Computer Science",
      school: "University of Technology",
      description: "Specialized in software engineering and web development"
    }
  ];

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
              About Me
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A passionate developer who believes in the power of technology to solve real-world problems
          </p>
        </motion.div>

        {/* Personal Story */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
        >
          <div>
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-6">
              My Journey
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                Hello! I'm Henry, a full-stack developer with a passion for creating beautiful, 
                functional, and user-centered digital experiences. My journey in web development 
                began 5 years ago when I built my first website, and I've been hooked ever since.
              </p>
              <p>
                I believe that great software is built through collaboration, creativity, and 
                attention to detail. Whether I'm working on a new feature, debugging an issue, 
                or collaborating with fellow developers, I bring my commitment to design excellence 
                and technical rigor to every project I touch.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-slate-700 dark:to-slate-600 rounded-2xl flex items-center justify-center overflow-hidden">
              <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl">
                <Image
                  src="/prof_pic.jpeg"
                  alt="Henry Ngo - Profile Picture"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-80 animate-bounce"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-400 rounded-full opacity-80 animate-bounce animation-delay-1000"></div>
          </div>
        </motion.div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-12 text-center">
             Education and Experience
          </h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>
            
            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative flex items-start"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white dark:border-slate-800"></div>
                  
                  <div className="ml-16 flex-1">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                          {exp.title}
                        </h3>
                        <span className="text-sm text-blue-600 dark:text-blue-400 font-medium bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full">
                          {exp.year}
                        </span>
                      </div>
                      <p className="text-lg text-purple-600 dark:text-purple-400 font-medium mb-3">
                        {exp.company}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-3 py-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 text-sm rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
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
              Ready to work together?
            </h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can bring your ideas to life with cutting-edge technology and creative solutions.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Get In Touch
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 