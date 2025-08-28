"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-semibold text-gray-900">Mariana Shevchuk</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#work" className="text-gray-600 hover:text-gray-900 transition-colors">Work</a>
              <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
              <a href="#process" className="text-gray-600 hover:text-gray-900 transition-colors">Process</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
                <span className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                <span className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <div className="py-4 space-y-4">
              <a href="#work" className="block text-gray-600 hover:text-gray-900 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Work</a>
              <a href="#about" className="block text-gray-600 hover:text-gray-900 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>About</a>
              <a href="#process" className="block text-gray-600 hover:text-gray-900 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Process</a>
              <a href="#contact" className="block text-gray-600 hover:text-gray-900 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-6 leading-tight">
            Crafting digital experiences
            <span className="block text-blue-600">that matter</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            I&apos;m a product designer who believes in the power of thoughtful design to solve real problems and create meaningful connections between people and technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#work" className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              View My Work
            </a>
            <a href="#contact" className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors font-medium">
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">Selected Work</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A collection of projects that showcase my approach to solving complex design challenges
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 - Outsail */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover-lift">
              <div className="h-80 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center relative overflow-hidden">
                <Image
                  src="/outsale.png"
                  alt="Outsail UI - Vendor Selection Platform showing Home dashboard and My Scorecard interface"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-medium text-gray-900 mb-3">Outsail - Vendor Selection Platform</h3>
                <p className="text-gray-600 mb-4">
                  Designed a comprehensive interface for companies to evaluate and select software vendors. The platform streamlines the selection process with clear workflows, demo preparation tools, and team collaboration features.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Design Analysis</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">UI Guidelines</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">Visual Design</span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">Prototyping</span>
                  <span className="px-3 py-1 bg-red-100 text-red-800 text-sm rounded-full">Stakeholder Communication</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover-lift">
              <div className="h-80 bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <div className="text-4xl mb-2">💻</div>
                  <div className="text-sm">Project Screenshot</div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-medium text-gray-900 mb-3">E-commerce Platform</h3>
                <p className="text-gray-600 mb-4">
                  Designed a comprehensive e-commerce experience that increased conversion rates by 35% and improved mobile usability scores.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">User Research</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Information Architecture</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">Visual Design</span>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover-lift">
              <div className="h-80 bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <div className="text-4xl mb-2">🎨</div>
                  <div className="text-sm">Project Screenshot</div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-medium text-gray-900 mb-3">Design System</h3>
                <p className="text-gray-600 mb-4">
                  Built a comprehensive design system that improved design consistency by 80% and reduced development time by 30%.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Design Systems</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Component Library</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">Documentation</span>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover-lift">
              <div className="h-80 bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <div className="text-4xl mb-2">🏥</div>
                  <div className="text-sm">Project Screenshot</div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-medium text-gray-900 mb-3">Healthcare Dashboard</h3>
                <p className="text-gray-600 mb-4">
                  Designed an intuitive dashboard for healthcare professionals, improving data accessibility and reducing decision-making time.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Data Visualization</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Accessibility</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">User Testing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-light text-gray-900 mb-6">About Me</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                With over 8 years of experience in product design, I&apos;ve had the privilege of working with startups and established companies to create products that users love.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                My approach combines deep user research, strategic thinking, and beautiful execution. I believe that great design happens at the intersection of user needs, business goals, and technical constraints.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                When I&apos;m not designing, you&apos;ll find me exploring new technologies, mentoring junior designers, or hiking in the mountains.
              </p>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-medium text-gray-900 mb-3">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">Figma</span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full">Sketch</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full">Adobe Creative Suite</span>
                  <span className="px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full">Prototyping</span>
                  <span className="px-3 py-1 bg-red-100 text-red-800 text-sm rounded-full">User Research</span>
                  <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-sm rounded-full">Design Systems</span>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-medium text-gray-900 mb-3">Experience</h3>
                <div className="space-y-3">
                  <div>
                    <div className="font-medium text-gray-900">Senior Product Designer</div>
                    <div className="text-gray-600">TechCorp • 2021-Present</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Product Designer</div>
                    <div className="text-gray-600">StartupXYZ • 2019-2021</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">UX Designer</div>
                    <div className="text-gray-600">DesignAgency • 2017-2019</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-gray-900 mb-4">My Design Process</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A systematic approach to solving complex design challenges
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-blue-600">🔍</span>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Research</h3>
              <p className="text-gray-600">
                Understanding user needs, business goals, and market context through comprehensive research
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-green-600">💡</span>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Ideate</h3>
              <p className="text-gray-600">
                Generating creative solutions and exploring different approaches to solve the problem
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-purple-600">✏️</span>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Design</h3>
              <p className="text-gray-600">
                Creating detailed designs, prototypes, and design systems that bring ideas to life
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-orange-600">🧪</span>
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">Test</h3>
              <p className="text-gray-600">
                Validating designs through user testing and iterating based on feedback
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-light text-gray-900 mb-6">Let&apos;s Work Together</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            I&apos;m always interested in new opportunities and exciting projects. Whether you have a question or just want to say hi, I&apos;d love to hear from you.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl text-blue-600">📧</span>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">hello@marianashevchuk.com</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl text-green-600">💼</span>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">LinkedIn</h3>
              <p className="text-gray-600">linkedin.com/in/marianashevchuk</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-xl text-purple-600">🐦</span>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Twitter</h3>
              <p className="text-gray-600">@marianashevchuk</p>
            </div>
          </div>
          
          <a 
            href="mailto:hello@marianashevchuk.com" 
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Send Message
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} Mariana Shevchuk. Designed and built with care.
          </p>
        </div>
      </footer>
    </div>
  );
}
