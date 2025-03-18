'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Ashutosh Gautam',
  description: 'Learn more about Ashutosh Gautam, a web developer specializing in 3D web experiences using Three.js, Next.js, and TypeScript.',
};

const About = () => {
  // Skills data
  const skills = [
    { name: 'Next.js', level: 90 },
    { name: 'React', level: 95 },
    { name: 'TypeScript', level: 85 },
    { name: 'Three.js', level: 80 },
    { name: 'Node.js', level: 75 },
    { name: 'UI/UX Design', level: 70 },
    { name: 'MongoDB', level: 65 },
    { name: 'GraphQL', level: 60 },
  ];

  // Experience data
  const experience = [
    {
      title: 'Senior Web Developer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Present',
      description: 'Lead developer for multiple client projects, specializing in creating immersive 3D web experiences using Three.js and Next.js.',
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Creations',
      period: '2020 - 2022',
      description: 'Developed responsive web applications using React and TypeScript, focusing on performance optimization and user experience.',
    },
    {
      title: 'Web Developer',
      company: 'StartUp Innovation',
      period: '2018 - 2020',
      description: 'Built interactive websites and web applications for various clients, implementing modern frontend technologies and best practices.',
    },
  ];

  // Education data
  const education = [
    {
      degree: 'Master of Computer Applications',
      institution: 'Delhi University',
      period: '2016 - 2018',
      description: 'Specialized in web technologies and software development. Graduated with honors.',
    },
    {
      degree: 'Bachelor of Computer Science',
      institution: 'University of Delhi',
      period: '2013 - 2016',
      description: 'Studied computer science fundamentals, algorithms, and programming languages.',
    },
  ];

  return (
    <div className="pt-28 pb-20">
      <div className="container-custom">
        {/* Hero Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="heading-1 mb-6">About Me</h1>
              <p className="text-light/70 text-lg mb-6">
                Hello! I'm Ashutosh Gautam, a passionate web developer specializing in creating immersive digital experiences using Three.js, Next.js, and TypeScript.
              </p>
              <p className="text-light/70 text-lg mb-6">
                With over 5 years of experience in web development, I've had the opportunity to work on diverse projects, from interactive portfolios to complex e-commerce platforms. My goal is to build websites that not only look beautiful but also provide exceptional user experiences.
              </p>
              <p className="text-light/70 text-lg mb-8">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through blog posts and tutorials.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="button-primary">
                  Get in Touch
                </Link>
                <Link href="/projects" className="button-outline">
                  View My Work
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="relative h-96 rounded-lg overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-secondary-500/20 rounded-lg z-10"></div>
              <div className="absolute inset-0 rounded-lg border border-gray-800 z-20"></div>
              {/* Placeholder for profile image - replace with your actual image */}
              <div className="absolute inset-0 flex items-center justify-center bg-dark/50 text-light/30 text-lg">
                Profile Image Placeholder
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Skills Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="heading-2 mb-4">My Skills</h2>
            <p className="text-light/70 max-w-2xl mx-auto">
              Here are some of the technologies and tools I work with regularly.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="mb-2 flex justify-between items-center">
                  <h3 className="font-semibold">{skill.name}</h3>
                  <span className="text-light/50">{skill.level}%</span>
                </div>
                <div className="h-3 bg-dark/80 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary-500 to-secondary-500"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
        
        {/* Experience & Education Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="heading-2 mb-4">Experience & Education</h2>
            <p className="text-light/70 max-w-2xl mx-auto">
              My professional journey and educational background.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Experience */}
            <div>
              <h3 className="text-2xl font-display font-semibold mb-6 text-primary-400">Professional Experience</h3>
              <div className="space-y-8">
                {experience.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative pl-8 border-l border-gray-700"
                  >
                    <div className="absolute left-0 top-0 w-3 h-3 -ml-1.5 rounded-full bg-primary-500"></div>
                    <h4 className="text-xl font-semibold mb-1">{item.title}</h4>
                    <div className="flex items-center mb-2 text-light/70">
                      <span>{item.company}</span>
                      <span className="mx-2">•</span>
                      <span>{item.period}</span>
                    </div>
                    <p className="text-light/70">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Education */}
            <div>
              <h3 className="text-2xl font-display font-semibold mb-6 text-secondary-400">Education</h3>
              <div className="space-y-8">
                {education.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="relative pl-8 border-l border-gray-700"
                  >
                    <div className="absolute left-0 top-0 w-3 h-3 -ml-1.5 rounded-full bg-secondary-500"></div>
                    <h4 className="text-xl font-semibold mb-1">{item.degree}</h4>
                    <div className="flex items-center mb-2 text-light/70">
                      <span>{item.institution}</span>
                      <span className="mx-2">•</span>
                      <span>{item.period}</span>
                    </div>
                    <p className="text-light/70">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-dark/50 backdrop-blur-lg p-12 rounded-lg border border-gray-800 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-display font-bold mb-4">Interested in Working Together?</h2>
            <p className="text-light/70 max-w-2xl mx-auto mb-8">
              I'm currently available for freelance projects and open to new opportunities. Let's create something amazing together!
            </p>
            <Link href="/contact" className="button-primary">
              Get in Touch
            </Link>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default About;
