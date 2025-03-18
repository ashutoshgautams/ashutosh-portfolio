'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ThreeBackground from '@/components/3d/ThreeBackground';

// Services data
const services = [
  {
    title: 'Web Development',
    description: 'Modern, responsive websites built with Next.js, React, and TypeScript.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
  },
  {
    title: 'Portfolio Templates',
    description: 'Professional portfolio templates for developers, designers, and creatives.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
        <circle cx="8.5" cy="8.5" r="1.5"></circle>
        <polyline points="21 15 16 10 5 21"></polyline>
      </svg>
    ),
  },
  {
    title: 'Custom Websites',
    description: 'Bespoke website development tailored to your specific business needs.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z"></path>
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
        <path d="M2 2l7.586 7.586"></path>
        <circle cx="11" cy="11" r="2"></circle>
      </svg>
    ),
  },
  {
    title: 'Website Hosting',
    description: 'Fast, reliable, and secure hosting for your portfolio or business website.',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
        <line x1="6" y1="6" x2="6" y2="6"></line>
        <line x1="6" y1="18" x2="6" y2="18"></line>
      </svg>
    ),
  },
];

// Template pricing plans
const pricingPlans = [
  {
    name: 'Basic',
    price: 'Free',
    features: [
      'Portfolio template',
      'ashutoshgautam.com/username URL',
      'Basic customization',
      'Community support',
    ],
    cta: 'Get Started Free',
    ctaLink: '/dashboard/signup',
    popular: false,
  },
  {
    name: 'Premium',
    price: '₹999',
    period: '/year',
    features: [
      'All Basic features',
      '3 Premium templates',
      'Advanced customization',
      'Priority support',
      'Blog functionality',
      'Custom domain (optional)',
    ],
    cta: 'Choose Premium',
    ctaLink: '/dashboard/signup?plan=premium',
    popular: true,
  },
  {
    name: 'Business',
    price: '₹2,999',
    period: '/year',
    features: [
      'All Premium features',
      'All available templates',
      'E-commerce capability',
      'SEO optimization',
      'Analytics integration',
      'Priority phone support',
    ],
    cta: 'Choose Business',
    ctaLink: '/dashboard/signup?plan=business',
    popular: false,
  },
];

export default function Home() {
  return (
    <>
      <ThreeBackground />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 lg:py-36 overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="heading-1 mb-6">
                Create Your Professional<br />
                <span className="bg-gradient-to-r from-primary-400 to-secondary-400 text-transparent bg-clip-text">
                  Web Presence
                </span>
              </h1>
              
              <p className="text-xl text-light/80 mb-8">
                Premium templates and custom web development solutions 
                to showcase your work, grow your business, and stand out online.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/templates" className="button-primary">
                  Browse Templates
                </Link>
                <Link href="/services" className="button-outline">
                  Custom Development
                </Link>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-800">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div 
                        key={i} 
                        className="w-10 h-10 rounded-full bg-primary-600/30 border-2 border-primary-500 flex items-center justify-center text-xs"
                      >
                        AG
                      </div>
                    ))}
                  </div>
                  <div className="text-light/70">
                    <strong className="text-light">500+</strong> professionals trust our templates
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl border border-gray-800">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-secondary-600/20 z-10"></div>
                {/* Replace with your actual hero image */}
                <div className="absolute inset-0 flex items-center justify-center bg-dark/80 text-light/30 text-lg">
                  Professional Hero Image
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary-500/10 backdrop-blur-xl rounded-lg border border-primary-500/20 z-20"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary-500/10 backdrop-blur-xl rounded-lg border border-secondary-500/20 z-20"></div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Featured Templates Section */}
      <section className="py-20 bg-dark/80 backdrop-blur-lg relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 mb-4">Featured Templates</h2>
            <p className="text-light/70 max-w-2xl mx-auto">
              Professional, responsive templates ready for you to customize and make your own.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Template Cards */}
            {['Portfolio', 'Blog', 'Business'].map((template, index) => (
              <motion.div
                key={template}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="template-card group"
              >
                <div className="template-card-image">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-secondary-500/20 group-hover:opacity-70 transition-opacity duration-300 z-10"></div>
                  {/* Replace with actual template previews */}
                  <div className="absolute inset-0 flex items-center justify-center bg-dark/50 text-light/30 text-lg">
                    {template} Template Preview
                  </div>
                </div>
                <div className="template-card-content">
                  <h3 className="template-card-title">
                    {template} Template
                  </h3>
                  <p className="text-light/70 mb-4">
                    Professional {template.toLowerCase()} template with modern design and customization options.
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-primary-400 font-semibold">
                      {index === 0 ? 'Free' : index === 1 ? '₹499' : '₹999'}
                    </span>
                    <Link 
                      href={`/templates/${template.toLowerCase()}`} 
                      className="px-4 py-2 bg-primary-600 hover:bg-primary-700 rounded-md text-white transition-colors duration-300"
                    >
                      View Template
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center">
            <Link href="/templates" className="button-primary">
              View All Templates
            </Link>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 mb-4">Our Services</h2>
            <p className="text-light/70 max-w-2xl mx-auto">
              From ready-to-use templates to fully custom web development, we've got you covered.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-dark/50 backdrop-blur-lg p-8 rounded-lg border border-gray-800 hover:border-primary-500 transition-colors duration-300"
              >
                <div className="text-primary-400 mb-4">{service.icon}</div>
                <h3 className="text-xl font-display font-semibold mb-3">{service.title}</h3>
                <p className="text-light/70">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Pricing Section */}
      <section className="py-20 bg-dark/80 backdrop-blur-lg relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-light/70 max-w-2xl mx-auto">
              Choose the plan that fits your needs. No hidden fees, cancel anytime.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={plan.popular ? 'pricing-card-featured relative z-10 scale-105' : 'pricing-card'}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 -translate-y-1/2 text-center">
                    <span className="bg-primary-600 text-white text-sm px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <h3 className="text-xl font-display font-semibold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-light/50">{plan.period}</span>
                  )}
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-5 w-5 text-primary-400 mr-2 mt-0.5" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path 
                          fillRule="evenodd" 
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                          clipRule="evenodd" 
                        />
                      </svg>
                      <span className="text-light/70">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  href={plan.ctaLink} 
                  className={plan.popular ? 'button-primary w-full text-center' : 'button-outline w-full text-center'}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="heading-2 mb-4">What Our Clients Say</h2>
            <p className="text-light/70 max-w-2xl mx-auto">
              Don't take our word for it. Here's what professionals using our templates have to say.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="bg-dark/50 backdrop-blur-lg p-8 rounded-lg border border-gray-800"
              >
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-yellow-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                      />
                    </svg>
                  ))}
                </div>
                
                <p className="text-light/70 mb-6">
                  "The templates are not only beautiful but also incredibly easy to customize. I had my portfolio up and running in under an hour. Highly recommended!"
                </p>
                
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary-600/30 border-2 border-primary-500 flex items-center justify-center text-xs mr-3">
                    {['JD', 'SK', 'AR'][i-1]}
                  </div>
                  <div>
                    <h4 className="font-semibold">{['John Doe', 'Sarah Kim', 'Alex Rodriguez'][i-1]}</h4>
                    <p className="text-sm text-light/50">{['Web Developer', 'UI Designer', 'Photographer'][i-1]}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-dark/80 backdrop-blur-lg relative">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="heading-2 mb-6"
            >
              Ready to Start Your Professional Journey?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-light/80 mb-8"
            >
              Choose from our premium templates or get a custom website built just for you.
              Either way, we're here to help you succeed online.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/templates" className="button-primary">
                Browse Templates
              </Link>
              <Link href="/contact" className="button-outline">
                Contact for Custom Work
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
