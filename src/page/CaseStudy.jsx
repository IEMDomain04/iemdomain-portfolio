import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, ArrowRight, User, Calendar, Award, Brain, Palette, Rocket, MessageCircle } from 'lucide-react'

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1.0], // Custom cubic bezier for smoother animation
    },
  }),
}

// Gradient text component
const GradientText = ({ children, className = "" }) => (
  <span className={`bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-500 ${className}`}>
    {children}
  </span>
)

// Section component with improved styling
const Section = ({ children, index, className = "" }) => (
  <motion.section
    className={`rounded-2xl p-8 bg-slate-800 shadow-sm border border-gray-100 ${className}`}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    variants={fadeIn}
    custom={index}
  >
    {children}
  </motion.section>
)

// Badge component
const Badge = ({ children }) => (
  <span className="inline-block bg-blue-50 text-blue-700 text-xs font-medium px-2.5 py-1 rounded-full">
    {children}
  </span>
)

const CaseStudy = () => {
  return (
    <div className="bg-gray-50 min-h-screen mt-20">
      {/* Hero section with improved background */}
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-500 to-slate-800">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full"></div>
          <div className="absolute top-20 -left-20 w-60 h-60 bg-indigo-200 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-300 rounded-full"></div>
        </div>
        
        <div className="relative px-6 md:px-10 lg:px-20 py-32 max-w-5xl mx-auto">
          <motion.div
            className="space-y-6"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <Badge>UX Case Study</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
              <GradientText>RAPID</GradientText> Promotional<br />Website
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
              Designing a clean, modern, and responsive website for RAPID — a real-time collaborative IDE startup.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main content with card-based layout */}
      <div className="px-6 md:px-10 lg:px-20 py-20 max-w-5xl mx-auto space-y-8">
        {/* Project Overview */}
        <Section index={1}>
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-4">
              <div className="p-3 bg-blue-100 rounded-xl">
                <Calendar className="w-6 h-6 text-blue-700" />
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900">Project Overview</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <div>
                    <span className="block text-sm font-medium text-gray-500 text-amber-300">Website</span>
                    <span className="text-gray-800">Promotional site for RAPID — an IDE startup enabling real-time collaboration across languages.</span>
                  </div>
                  <div>
                    <span className="block text-sm font-medium text-gray-500 text-amber-300">Duration</span>
                    <span className="text-gray-800">1 Week (December 16 – December 22, 2024)</span>
                  </div>
                </div>
                <div>
                  <span className="block text-sm font-medium text-gray-500 text-amber-300">Goal</span>
                  <span className="text-gray-800">Create a professional and appealing website to support the RAPID business proposal and showcase the concept.</span>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* My Role */}
        <Section index={2}>
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-4">
              <div className="p-3 bg-blue-100 rounded-xl">
                <User className="w-6 h-6 text-blue-700" />
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900">My Role</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-3 text-amber-300">Position</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Team Lead</Badge>
                    <Badge>UI/UX Designer</Badge>
                    <Badge>Front-End Developer</Badge>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-3 text-amber-300">Responsibilities</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="inline-block w-1 h-1 rounded-full bg-blue-500 mr-2"></span>
                      Outlined the business plan and strategy
                    </li>
                    <li className="flex items-center">
                      <span className="inline-block w-1 h-1 rounded-full bg-blue-500 mr-2"></span>
                      Designed the user interface for the website
                    </li>
                    <li className="flex items-center">
                      <span className="inline-block w-1 h-1 rounded-full bg-blue-500 mr-2"></span>
                      Developed the front-end using modern web practices
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Understanding the User */}
        <Section index={3}>
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-4">
              <div className="p-3 bg-blue-100 rounded-xl">
                <Brain className="w-6 h-6 text-blue-700" />
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-gray-900">Understanding the User</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <h3 className="text-lg font-medium text-gray-800 text-amber-300">User Research Summary</h3>
                  <p className="text-gray-700">
                    Our primary user was our professor in "The Entrepreneurial Mind." We aimed to design a professional and minimal site. Inspired by top-tier tech websites, we focused on simplicity and structure.
                  </p>
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg font-medium text-gray-800 text-amber-300">Pain Points</h3>
                  <div className="space-y-3">
                    <div className="p-4 bg-red-50 rounded-lg border border-red-100">
                      <p className="font-medium text-red-800">Confusing structure</p>
                      <p className="text-red-700 text-sm">Many tech websites have overwhelming layouts.</p>
                    </div>
                    <div className="p-4 bg-red-50 rounded-lg border border-red-100">
                      <p className="font-medium text-red-800">Excessive buttons</p>
                      <p className="text-red-700 text-sm">Too many CTAs lead to user confusion and poor UX.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Design Process */}
        <Section index={4}>
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-4">
              <div className="p-3 bg-blue-100 rounded-xl">
                <Palette className="w-6 h-6 text-blue-700" />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900">Design Process</h2>
              
              {/* Sitemap */}
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                <h3 className="text-lg font-medium text-gray-800 mb-3 text-amber-300">Sitemap</h3>
                <p className="text-gray-700 mb-4">A minimalist sitemap kept the user journey intuitive and easy to navigate.</p>
                <div className="bg-gray-200 h-40 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500 text-sm">Sitemap image placeholder</p>
                </div>
              </div>
              
              {/* Mockups */}
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                <h3 className="text-lg font-medium text-gray-800 mb-3 text-amber-300">Mockups</h3>
                <p className="text-gray-700 mb-4">We referenced Framer's clean layout as inspiration and adapted it to our branding.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-gray-200 h-32 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500 text-sm">Mockup 1</p>
                  </div>
                  <div className="bg-gray-200 h-32 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500 text-sm">Mockup 2</p>
                  </div>
                </div>
              </div>
              
              {/* High-Fidelity Prototype */}
              <div className="p-6 bg-gray-50 rounded-xl border border-gray-100">
                <h3 className="text-lg font-medium text-gray-800 mb-3 text-amber-300">High-Fidelity Prototype</h3>
                <p className="text-gray-700 mb-4">The interactive prototype was reviewed by my team and is being refined for our final presentation.</p>
                <a
                  href="https://your-prototype-link.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  View Prototype
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </Section>

        {/* Outcome & Reflection */}
        <Section index={5}>
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-4">
              <div className="p-3 bg-blue-100 rounded-xl">
                <Rocket className="w-6 h-6 text-blue-700" />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-gray-900">Outcome & Reflection</h2>
              
              {/* Impact */}
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-3 text-amber-300">Impact</h3>
                <div className="p-6 bg-indigo-50 rounded-xl relative">
                  <div className="absolute -top-3 -left-3 text-4xl">"</div>
                  <blockquote className="text-indigo-800 italic relative z-10 pl-4">
                    Tinesting ko rin sa phone ko, responsive yan siya pati ang clean tingnan.
                  </blockquote>
                </div>
                <p className="mt-4 text-gray-700">The feedback emphasized the importance of responsiveness and modern visuals.</p>
              </div>
              
              {/* Grid for key learnings and next steps */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="text-lg font-medium text-gray-800 text-amber-300">Key Learnings</h3>
                  <ul className="space-y-2">
                    <li className="flex">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-2">
                        <span className="text-green-700 text-xs">✓</span>
                      </div>
                      <span className="text-gray-700">Simple, clean design aids usability and development.</span>
                    </li>
                    <li className="flex">
                      <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-2">
                        <span className="text-green-700 text-xs">✓</span>
                      </div>
                      <span className="text-gray-700">Responsive design is essential for a mobile-first world.</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h3 className="text-lg font-medium text-gray-800 text-amber-300">Next Steps</h3>
                  <ul className="space-y-2">
                    <li className="flex">
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                        <span className="text-blue-700 text-xs">→</span>
                      </div>
                      <span className="text-gray-700">Finish development with a focus on mobile UX.</span>
                    </li>
                    <li className="flex">
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-2">
                        <span className="text-blue-700 text-xs">→</span>
                      </div>
                      <span className="text-gray-700">Start progress toward building the actual RAPID IDE platform.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* Call to Action */}
        <motion.div
          className="text-center py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          custom={6}
        >
          <div className="inline-flex justify-center items-center mb-6">
            <div className="p-3 bg-blue-100 rounded-xl">
              <MessageCircle className="w-6 h-6 text-blue-700" />
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-4">Let's Connect</h2>
          <p className="text-gray-700 max-w-xl mx-auto mb-8">
            I'm always open to feedback, collaboration, and new projects. Let's build something great together.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Start a conversation
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default CaseStudy