'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Ashutosh Gautam',
  description: 'Explore a collection of web development projects by Ashutosh Gautam, showcasing 3D web experiences, interactive websites, and creative digital solutions.',
};

// Project data
const projects = [
  {
    id: 'immersive-portfolio',
    title: 'Immersive 3D Portfolio',
    category: ['3D', 'Portfolio'],
    description: 'A stunning portfolio website with interactive 3D elements and smooth animations.',
    technologies: ['Three.js', 'React', 'GSAP', 'Tailwind CSS'],
    link: '/projects/immersive-portfolio',
  },
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    category: ['E-Commerce', 'Full Stack'],
    description: 'A modern e-commerce platform with 3D product visualization and smooth checkout experience.',
    technologies: ['Next.js', 'Three.js', 'Stripe', 'MongoDB'],
    link: '/projects/ecommerce-platform',
  },
  {
    id: 'interactive-dashboard',
    title: 'Interactive Dashboard',
    category: ['Dashboard', 'Data Visualization'],
    description: 'A data visualization dashboard with interactive charts and real-time updates.',
    technologies: ['React', 'D3.js', 'Socket.io', 'Node.js'],
    link: '/projects/interactive-dashboard',
  },
  {
    id: 'virtual-showroom',
    title: 'Virtual Showroom',
    category: ['3D', 'E-Commerce'],
    description: 'A virtual showroom experience for a furniture company with interactive 3D models.',
    technologies: ['Three.js', 'React', 'WebGL', 'GSAP'],
    link: '/projects/virtual-showroom',
  },
  {
    id: 'travel-planner',
    title: 'Travel Planner App',
    category: ['Web App', 'Travel'],
    description: 'A travel planning application with interactive maps and personalized recommendations.',
    technologies: ['Next.js', 'Mapbox', 'OpenAI API', 'PostgreSQL'],
    link: '/projects/travel-planner',
  },
  {
    id: 'crypto-dashboard',
    title: 'Cryptocurrency Dashboard',
    category: ['Dashboard', 'Crypto'],
    description: 'A real-time cryptocurrency dashboard with interactive charts and portfolio tracking.',
    technologies: ['React', 'D3.js', 'WebSocket', 'Firebase'],
    link: '/projects/crypto-dashboard',
  },
];

const ProjectsPage = () => {
  // Filter state
  const [filter, setFilter] = useState('All');
  
  // Get all unique categories
  const categories = ['All', ...new Set(projects.flatMap(project => project.category))];
  
  // Filter projects based on selected category
  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(project => project.category.includes(filter));

  return (
    <div className="pt-28 pb-20">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="group bg-dark/50 backdrop-blur-lg rounded-lg overflow-hidden border border-gray-800 hover:border-primary-500 transition-all duration-300"
            >
              <div className="h-56 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-secondary-500/20 group-hover:opacity-70 transition-opacity duration-300 z-10"></div>
                <div className="absolute inset-0 flex items-center justify-center bg-dark/50 text-light/30 text-lg">
                  Project Image Placeholder
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.category.map((cat) => (
                    <span
                      key={cat}
                      className="text-xs px-2 py-1 bg-dark/80 text-primary-400 rounded-full"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
                
                <h2 className="text-xl font-display font-semibold mb-3 group-hover:text-primary-400 transition-colors duration-300">
                  {project.title}
                </h2>
                
                <p className="text-light/70 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-dark/80 text-light/50 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <Link
                  href={project.link}
                  className="text-primary-400 hover:text-primary-300 font-medium inline-flex items-center transition-colors duration-300"
                >
                  View Details
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 p-12 bg-dark/50 backdrop-blur-lg rounded-lg border border-gray-800 text-center"
        >
          <h2 className="text-3xl font-display font-bold mb-4">Have a Project in Mind?</h2>
          <p className="text-light/70 max-w-2xl mx-auto mb-8">
            Let's collaborate and create something amazing together. Whether you need a portfolio, business website, or an interactive 3D experience, I'm here to help.
          </p>
          <Link href="/contact" className="button-primary">
            Get in Touch
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsPage;={{ duration: 0.6 }}
            className="heading-1 mb-4"
          >
            My Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-light/70 max-w-2xl mx-auto"
          >
            Explore a selection of my recent work, showcasing interactive 3D experiences, web applications, and creative digital solutions.
          </motion.p>
        </div>
        
        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-5 py-2 rounded-full text-sm transition-colors duration-300 ${
                filter === category
                  ? 'bg-primary-600 text-white'
                  : 'bg-dark/50 text-light/70 hover:bg-dark/80 border border-gray-800'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
        
        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="group bg-dark/50 backdrop-blur-lg rounded-lg overflow-hidden border border-gray-800 hover:border-primary-500 transition-all duration-300"
            >
              <div className="h-56 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-secondary-500/20 group-hover:opacity-70 transition-opacity duration-300 z-10"></div>
                <div className="absolute inset-0 flex items-center justify-center bg-dark/50 text-light/30 text-lg">
                  Project Image Placeholder
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.category.map((cat) => (
                    <span
                      key={cat}
                      className="text-xs px-2 py-1 bg-dark/80 text-primary-400 rounded-full"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
                
                <h2 className="text-xl font-display font-semibold mb-3 group-hover:text-primary-400 transition-colors duration-300">
                  {project.title}
                </h2>
                
                <p className="text-light/70 mb-4">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs px-2 py-1 bg-dark/80 text-light/50 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <Link
                  href={project.link}
                  className="text-primary-400 hover:text-primary-300 font-medium inline-flex items-center transition-colors duration-300"
                >
                  View Details
                  <svg
                              xmlns="http://www.w3.org/200
Compare this snippet from src/app/projects/%5Bslug%5D/page.tsx:
// Project data
const projects = [
  {
    id: 'immersive-portfolio',
    title: 'Immersive 3D Portfolio',
    category: ['3D', 'Portfolio'],
    description: 'A stunning portfolio website with interactive 3D elements and smooth animations.',
    technologies: ['Three.js', 'React', 'GSAP', 'Tailwind CSS'],
    link: '/projects/immersive-portfolio',
  },
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    category: ['E-Commerce', 'Full Stack'],
    description: 'A modern e-commerce platform with 3D product visualization and smooth checkout experience.',
    technologies: ['Next.js', 'Three.js', 'Stripe', 'MongoDB'],
    link: '/projects/ecommerce-platform',
  },
  {
    id: 'interactive-dashboard',
    title: 'Interactive Dashboard',
    category: ['Dashboard', 'Data Visualization'],
    description: 'A data visualization dashboard with interactive charts and real-time updates.',
    technologies: ['React', 'D3.js', 'Socket.io', 'Node.js'],
    link: '/projects/interactive-dashboard',
  },
  {
    id: 'virtual-showroom',
    title: 'Virtual Showroom',
    category: ['3D', 'E-Commerce'],
    description: 'A virtual showroom experience for a furniture company with interactive 3D models.',
    technologies: ['Three.js', 'React', 'WebGL', 'GSAP'],
    link: '/projects/virtual-showroom',
  },
  {
    id: 'travel-planner',
    title: 'Travel Planner App',
    category: ['Web App', 'Travel'],
    description: 'A travel planning application with interactive maps and personalized recommendations.',
    technologies: ['Next.js', 'Mapbox', 'OpenAI API', 'PostgreSQL'],
    link: '/projects/travel-planner',
  },
  {
    id: 'crypto-dashboard',
    title: 'Cryptocurrency Dashboard',
    category: ['Dashboard', 'Crypto'],
    description: 'A real-time cryptocurrency dashboard with interactive charts and portfolio tracking.',
    technologies: ['React', 'D3.js', 'WebSocket', 'Firebase'],
    link: '/projects/crypto-dashboard',
  },
];

