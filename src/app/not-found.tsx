'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-9xl font-display font-bold text-primary-500"
        >
          404
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mt-4 mb-6">
            Page Not Found
          </h2>
          
          <p className="text-xl text-light/70 max-w-md mx-auto mb-10">
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          <Link href="/" className="button-primary">
            Return Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
