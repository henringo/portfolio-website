"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "Space Invaders Game",
      description: "Utilized Gradle for building, executing, and testing programs, based on OOP principles and adhered to SOLID and GRASP principles to ensure robust and maintainable code architecture. Applied design patterns, including Builder, Factory, State, Strategy, Façade, Observer, to enhance coding practices and improve software architecture.",
      image: "🚀",
      category: "games",
      technologies: [ "Gradle", "Java", "JUnit testing"],
      liveUrl: "#",
      githubUrl: "https://github.com/henringo/Space-Invader-Game",
      featured: false,
      detailedDescription: "This Space Invaders game demonstrates advanced software engineering principles and design patterns. The project utilizes Gradle as the build automation tool for managing dependencies, compiling code, running tests, and packaging the application. The architecture follows Object-Oriented Programming (OOP) principles with proper encapsulation, inheritance, and polymorphism. The codebase adheres to SOLID principles (Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion) and GRASP principles (General Responsibility Assignment Software Patterns) to ensure maintainable and extensible code. Multiple design patterns are implemented including Builder for complex object creation, Factory for object instantiation, State for managing game states, Strategy for different enemy behaviors, Façade for simplifying complex subsystems, and Observer for event handling. The game features smooth gameplay mechanics, collision detection, scoring system, and progressive difficulty levels, all built with clean, well-structured code that serves as an excellent example of professional software development practices."
    },
    {
      id: 2,
      title: "CUSP AI",
      description: `CUSP AI is a comprehensive academic planning assistant for University of Sydney students. The platform integrates transcript parsing, WAM forecasting, schedule management, and AI-powered features including unit recommendations and automated assignment marking with rubric-based feedback.

Built as a group project with a modern full-stack architecture (Next.js frontend, Spring Boot backend, PostgreSQL database), the application addresses the challenge of navigating complex degree requirements and scattered academic information by consolidating planning tools into a unified experience.

My contributions focused on backend API development, authentication systems, Units of Study (UoS) management, resume functionality, and the AI marking pipeline that processes PDF/DOCX submissions using GPT-4 for intelligent feedback generation.`,
      image: "📋",
      category: "web",
      technologies: ["Next.js", "TypeScript", "Firebase", "Framer Motion", "Spring Boot", "Java", "PostgreSQL", "OpenAI", "Google Calendar API"],
      liveUrl: "#",
      githubUrl: "https://github.com/henringo/USYD-AI-for-SydneyCourse-Unit-of-Study-Portal",
      featured: false,
      detailedDescription: `CUSP AI – USYD Planning & Study Assistant

A full-stack web application inspired by the University of Sydney's official CUSP platform, designed to help students navigate degree planning, academic progress tracking, and study management through intelligent automation and AI assistance.

Problem Statement:
Students struggle to translate USYD's complex rules—prerequisites, credit point requirements, progression pathways—into actionable study plans. Academic information is scattered across official portals, unit handbooks, and personal documents like transcripts, making it difficult to maintain a clear view of progress and plan future semesters effectively.

Solution:
CUSP AI consolidates these needs into a single, intuitive platform that automates transcript parsing, provides WAM forecasting with target setting, manages schedules and assignments, and offers AI-powered unit recommendations based on academic history and preferences.

Key Features:
• Transcript Processing: Upload PDF transcripts with automatic parsing to build structured academic records
• WAM Forecasting: Calculate current WAM, set target goals, and visualize trends with interactive charts
• Unit Recommendations: AI-powered suggestions based on transcript analysis and student preferences
• Smart Scheduling: Calendar integration with Google Calendar for holidays, plus AI-generated study schedules from assignment due dates
• Assignment Marking Assistant: Automated rubric extraction and GPT-4-powered feedback on submissions (PDF, DOCX, images with OCR)
• Study Bot: Socratic tutoring chatbot for course guidance and academic support
• Course Reviews: Community-driven unit reviews with compatibility scoring

Technical Stack:
• Frontend: Next.js (App Router), React, TypeScript, Tailwind CSS
• Backend: Spring Boot (Java), RESTful APIs, JWT authentication
• Database: PostgreSQL (Docker)
• AI Services: OpenAI GPT-3.5/GPT-4 for recommendations, marking, and chat
• External Integrations: Google Calendar API for holiday overlays

My Contributions (Group Project):
As part of the development team, I was responsible for:
• Backend API architecture and REST endpoint development
• Authentication system (JWT-based login/signup flow)
• Units of Study (UoS) management features (CRUD operations)
• Resume builder functionality
• Marking system implementation including file ingestion (PDF/DOCX/OCR), rubric extraction via GPT-3.5, and chunk-based GPT-4 marking pipeline with annotation generation

The project demonstrates full-stack development skills, API design, authentication best practices, integration with AI services, and collaborative software development in an academic context.
`
    },
    {
      id: 3,
      title: "Capstone Project - Merry Lightshowpi Project ",
      description: "An intelligent chatbot powered by machine learning that provides customer support and answers queries in real-time.",
      image: "🤖",
      category: "ai",
      technologies: ["Python", "Raspberry Pi", "Arduino", "PostgreSQL", "Unity", "C#"],
      liveUrl: "#",
      githubUrl: "https://www.linkedin.com/pulse/capstone-2023-merry-lightshow-christmas-ug-cian-byrne-bic0c/?trackingId=p1VPR%2BucRkaIT%2BiiW3tENQ%3D%3D",
      referenceUrl: "/5. Henry_Ngo_Capstone_Reference.pdf",
      featured: false,
      detailedDescription: "The Merry Lightshowpi Project is a capstone project that demonstrates the use of Raspberry Pi, Arduino, and Unity to create a lightshowpi. The project is a simulation of a lightshowpi that is used to control the lights of a Christmas tree. The project is built using Python, Raspberry Pi, Arduino, and Unity. The project is a simulation of a lightshowpi that is used to control the lights of a Christmas tree. The project is built using Python, Raspberry Pi, Arduino, and Unity."
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with Next.js and Tailwind CSS, featuring smooth animations and interactive elements.",
      image: "🎨",
      category: "web",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      detailedDescription: "A modern, fully responsive portfolio website showcasing professional work and skills through an elegant, interactive design. Built with Next.js and TypeScript for optimal performance, SEO, and type safety, the website features server-side rendering and static generation for fast loading times. Tailwind CSS provides utility-first styling with a custom design system that ensures consistency and maintainability across all components. Framer Motion integration delivers smooth, engaging animations and micro-interactions that enhance user experience and create a memorable browsing experience. The website includes multiple sections for project showcases, skills demonstration, about information, and contact forms. Key features include responsive design for all device sizes, dark/light theme toggle, smooth page transitions, interactive project galleries, contact form with validation, and optimized performance with lazy loading and image optimization. The clean, professional design effectively communicates technical expertise while maintaining excellent usability and accessibility standards."
    },
    {
      id: 5,
      title: "Honours Thesis - Detection and Identification of Context Switch events through privacy-preserving historical behavioural PC Users data",
      description: "Developed and evaluated machine learning pipelines for detecting user context switches using privacy-assured behavioural datasets (BEHACOM). Designed and implemented multiple modelling approaches — including clustering-based (K-Means) and sequential models (LSTM, Hidden Markov Models) — to identify application-level transitions from one-minute aggregated user interaction data. Conducted feature engineering across 12,000+ behavioural metrics (keyboard, mouse, system usage) and performed cross-user evaluations using gradient boosting, random forest, and ensemble classifiers. Achieved strong precision and recall with sequence-based methods, contributing insights into adaptive systems that anticipate user workflow shifts.",
      image: "🌤️",
      category: "research",
      technologies: ["Python", "K-Means", "LSTM", "Hidden Markov Models", "Gradient Boosting", "Random Forest", "Ensemble Classifiers"],
      liveUrl: "#",
      githubUrl: "https://colab.research.google.com/drive/1O2vd7TYSUjYZOfCDnE623tYi4mavnFRb?usp=sharing",
      pdfUrl: "/7. Thesis_510064233_Henry_Ngo.pdf",
      referenceUrl: "/6. Henry_Thesis_Reference.pdf",
      featured: false,
      detailedDescription: "A comprehensive weather dashboard application built with Vue.js that provides real-time weather data and detailed meteorological analytics. The application integrates with the OpenWeather API to fetch current weather conditions, hourly forecasts, and extended weather predictions for any location worldwide. Interactive maps powered by Leaflet.js allow users to explore weather patterns across different regions with zoom and pan functionality. Chart.js integration provides beautiful, responsive data visualizations for temperature trends, precipitation patterns, wind speed analysis, and humidity levels over time. Key features include location-based weather detection using geolocation services, customizable dashboard widgets, weather alerts and notifications, historical weather data analysis, multi-location tracking, and detailed weather statistics. The responsive design ensures optimal viewing experience across desktop and mobile devices, while the intuitive interface makes complex weather data accessible and easy to understand for users of all technical levels."
    },
    {
      id: 6,
      title: "Handwritten Digit/Word Recognition",
      description: "A handwritten digit/word recognition system using machine learning and computer vision. Features CNN architecture trained on EMNIST dataset with 95%+ accuracy.",
      image: "🔍",
      category: "ai",
      technologies: ["Python", "TensorFlow", "Keras", "OpenCV","CNN"],
      liveUrl: "#",
      githubUrl: "https://github.com/henringo/CNN-EMNIST-handwriting-recognition",
      featured: false,
      detailedDescription: "This project implements a Convolutional Neural Network (CNN) for recognizing handwritten digits and words using the EMNIST dataset. The model achieves 95%+ accuracy through careful data preprocessing, augmentation, and architecture optimization. Key features include real-time prediction, batch processing capabilities, and support for both digits (0-9) and letters (A-Z). The system uses OpenCV for image preprocessing and TensorFlow/Keras for model training and inference. Perfect for applications in document digitization, automated form processing, and educational tools."
    },
      {
      id: 7,
      title: "OldPhoneDeals Marketplace",
      description: "A modern full‑stack marketplace to buy and sell pre‑owned smartphones, featuring a slick React UI, secure JWT authentication, and real‑time listing management.",
      image: "📱",
      category: "web",
      technologies: ["React", "TypeScript", "Tailwind CSS", "JWT", "MongoDB", "Express", "Nodemailer"],
      liveUrl: "#",
      githubUrl: "https://github.com/henringo/2ND-HAND-Mobile-Phone-Store-Webpage",
      featured: false,
      detailedDescription: "OldPhoneDeals is a full‑stack web app for trading used smartphones. The React frontend (with MUI) delivers a clean, responsive experience for browsing, searching, and reviewing listings. The Node/Express API with MongoDB powers secure JWT authentication, email verification, and password resets, while Multer handles safe image uploads for seller listings. Authenticated users can create and manage their own listings, carts, and wishlists; admins moderate users and inventory with role‑based access and inactivity safeguards. Axios interceptors streamline client‑server communication and gracefully handle session and error states. Built for clarity, maintainability, and a smooth developer experience."
    },
  ];

  const categories = [
    { id: "all", name: "All Projects", count: projects.length },
    { id: "web", name: "Web Apps", count: projects.filter(p => p.category === "web").length },
    { id: "research", name: "Research", count: projects.filter(p => p.category === "research").length },
    { id: "ai", name: "AI/ML", count: projects.filter(p => p.category === "ai").length },
    { id: "games", name: "Games", count: projects.filter(p => p.category === "games").length }
  ];

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              My Projects
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Explore a collection of my work, from web applications to mobile apps and AI solutions
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700"
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </motion.div>

        {/* All Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-8 text-center">
            {selectedCategory === "all" ? "All Projects" : `${categories.find(c => c.id === selectedCategory)?.name}`}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-slate-700">
                    <div className="text-5xl mb-4">{project.image}</div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm">
                      {project.description.length > 100 
                        ? `${project.description.substring(0, 100)}...` 
                        : project.description
                      }
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <button
                        className="px-4 py-2 bg-blue-600 text-white text-sm rounded-full hover:bg-blue-700 transition-colors duration-300"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(project);
                        }}
                      >
                        {project.videoUrl ? "View Demo" : "View Details"}
                      </button>
                      {/* Intentionally show only View Details on the card */}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Have a project in mind?
            </h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Let's collaborate to bring your ideas to life with innovative technology solutions.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-purple-600 font-semibold rounded-full hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Start a Project
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-slate-800 rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
                  {selectedProject.title}
                </h2>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <div className="text-8xl mb-6 text-center">{selectedProject.image}</div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed text-lg">
                {selectedProject.description}
              </p>

              {/* Video Demo Section */}
              {selectedProject.videoUrl && (
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                    Video Demo
                  </h3>
                  <div className="relative w-full h-64 bg-gray-100 dark:bg-slate-700 rounded-lg overflow-hidden">
                    <iframe
                      src={selectedProject.videoUrl.replace('watch?v=', 'embed/')}
                      title={`${selectedProject.title} Demo`}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              )}

              {/* Detailed Description */}
              {selectedProject.detailedDescription && (
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                    Project Details
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {selectedProject.detailedDescription}
                  </p>
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                  Technologies Used
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-4">
                {selectedProject.notebookUrl && (
                  <a
                    href={selectedProject.notebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-50 dark:hover:bg-slate-700 transition-all duration-300"
                  >
                    View Notebook
                  </a>
                )}
                {selectedProject.referenceUrl && (
                  <a
                    href={selectedProject.referenceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-50 dark:hover:bg-slate-700 transition-all duration-300"
                  >
                    View Reference
                  </a>
                )}
                {selectedProject.pdfUrl && (
                  <a
                    href={selectedProject.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-50 dark:hover:bg-slate-700 transition-all duration-300"
                  >
                    View PDF
                  </a>
                )}
                {selectedProject.githubUrl && selectedProject.githubUrl !== "#" && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                  >
                    View Code
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  videoUrl?: string;
  notebookUrl?: string;
  pdfUrl?: string;
  referenceUrl?: string;
  detailedDescription?: string;
} 