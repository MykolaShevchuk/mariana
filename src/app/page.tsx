'use client';

import { useState } from 'react';
import ProjectCard from './components/ProjectCard';

export default function Home() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	
	// Calculate years of experience from 2015
	const yearsOfExperience = new Date().getFullYear() - 2017;

	return (
		<div className='min-h-screen bg-white'>
			{/* Navigation */}
			<nav className='w-full bg-white/80 backdrop-blur-md z-50'>
				<div className='max-w-6xl mx-auto px-6 py-4'>
					<div className='flex items-center justify-end'>
						{/* Desktop Navigation */}
						<div className='hidden md:flex space-x-8'>
							<a href='#work' className='text-gray-600 hover:text-gray-900 transition-colors'>
								Work
							</a>
							<a href='#about' className='text-gray-600 hover:text-gray-900 transition-colors'>
								About
							</a>
							<a href='#process' className='text-gray-600 hover:text-gray-900 transition-colors'>
								Process
							</a>
							<a href='#contact' className='text-gray-600 hover:text-gray-900 transition-colors'>
								Contact
							</a>
						</div>

						{/* Mobile Menu Button */}
						<button
							className='md:hidden p-2'
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							aria-label='Toggle mobile menu'
						>
							<div className='w-6 h-6 flex flex-col justify-center items-center'>
								<span
									className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 ${
										isMobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
									}`}
								></span>
								<span
									className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 ${
										isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
									}`}
								></span>
								<span
									className={`block w-5 h-0.5 bg-gray-600 transition-all duration-300 ${
										isMobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
									}`}
								></span>
							</div>
						</button>
					</div>

					{/* Mobile Navigation */}
					<div
						className={`md:hidden transition-all duration-300 ease-in-out ${
							isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
						}`}
					>
						<div className='py-4 space-y-4'>
							<a
								href='#work'
								className='block text-gray-600 hover:text-gray-900 transition-colors'
								onClick={() => setIsMobileMenuOpen(false)}
							>
								Work
							</a>
							<a
								href='#about'
								className='block text-gray-600 hover:text-gray-900 transition-colors'
								onClick={() => setIsMobileMenuOpen(false)}
							>
								About
							</a>
							<a
								href='#process'
								className='block text-gray-600 hover:text-gray-900 transition-colors'
								onClick={() => setIsMobileMenuOpen(false)}
							>
								Process
							</a>
							<a
								href='#contact'
								className='block text-gray-600 hover:text-gray-900 transition-colors'
								onClick={() => setIsMobileMenuOpen(false)}
							>
								Contact
							</a>
						</div>
					</div>
				</div>
			</nav>

			{/* Hero Section */}
			<section className='pt-12 pb-20 px-6 min-h-screen flex items-center'>
				<div className='max-w-7xl mx-auto'>
					<h1 className='text-5xl md:text-7xl lg:text-8xl font-black text-gray-900 mb-8 leading-none tracking-tight'>
						<span className='block'>Mariana Shevchuk</span>
						<span className='block text-blue-600'>Product Designer</span>
					</h1>
					<p className='text-xl md:text-2xl text-gray-600 mb-16 max-w-3xl leading-relaxed font-light'>
						I am a UK-based Product Designer with over {yearsOfExperience}+ years of experience in mobile and web, specialising in creating user-centred, consistent, and impactful experiences.
					</p>
					<div className='flex flex-col sm:flex-row gap-6'>
						<a
							href='#work'
							className='bg-blue-600 text-white px-10 py-5 rounded-lg hover:bg-blue-700 transition-colors font-medium text-lg'
						>
							View My Work
						</a>
						<a
							href='#contact'
							className='border border-gray-300 text-gray-700 px-10 py-5 rounded-lg hover:bg-gray-50 transition-colors font-medium text-lg'
						>
							Get In Touch
						</a>
					</div>
				</div>
			</section>

			{/* Work Section */}
			<section id='work' className='py-20 px-6 bg-white'>
				<div className='max-w-6xl mx-auto'>
					<div className='mb-16'>
						<h2 className='text-4xl font-light text-gray-900 mb-4'>Selected Work</h2>
					</div>

					<div className='space-y-16'>
						<ProjectCard
							title='Outsail'
							subtitle='Vendor Selection Platform'
							description='Designed a comprehensive interface for companies to evaluate and select software vendors. The platform streamlines the selection process with clear workflows, demo preparation tools, and team collaboration features.'
							skills={['Design Analysis', 'UI Guidelines', 'Visual Design', 'Prototyping', 'Stakeholder Communication']}
							imageSrc='/outsale.png'
							imageAlt='Outsail UI - Vendor Selection Platform showing Home dashboard and My Scorecard interface'
							priority={true}
						/>

						<ProjectCard
							title='E-commerce'
							subtitle='Platform Redesign'
							description='Designed a comprehensive e-commerce experience that increased conversion rates by 35% and improved mobile usability scores.'
							skills={['User Research', 'Information Architecture', 'Visual Design']}
							imageSrc='/outsale.png'
							imageAlt='E-commerce Platform UI showing modern shopping interface'
						/>

						<ProjectCard
							title='Design System'
							subtitle='Component Library'
							description='Built a comprehensive design system that improved design consistency by 80% and reduced development time by 30%.'
							skills={['Design Systems', 'Component Library', 'Documentation']}
							imageSrc='/outsale.png'
							imageAlt='Design System showing component library and guidelines'
						/>

						<ProjectCard
							title='Healthcare'
							subtitle='Dashboard Design'
							description='Designed an intuitive dashboard for healthcare professionals, improving data accessibility and reducing decision-making time.'
							skills={['Data Visualization', 'Accessibility', 'User Testing']}
							imageSrc='/outsale.png'
							imageAlt='Healthcare Dashboard showing data visualization interface'
						/>
					</div>
				</div>
			</section>

			{/* About Section */}
			<section id='about' className='py-20 px-6'>
				<div className='max-w-4xl mx-auto'>
					<div className='grid md:grid-cols-2 gap-16 items-center'>
						<div>
							<h2 className='text-4xl font-light text-gray-900 mb-6'>About Me</h2>
							<p className='text-lg text-gray-600 mb-6 leading-relaxed'>
								With over {yearsOfExperience} years of experience in product design, I&apos;ve had the privilege of working with startups
								and established companies to create products that users love.
							</p>
							<p className='text-lg text-gray-600 mb-6 leading-relaxed'>
								My approach combines deep user research, strategic thinking, and beautiful execution. I believe that
								great design happens at the intersection of user needs, business goals, and technical constraints.
							</p>
							<p className='text-lg text-gray-600 leading-relaxed'>
								When I&apos;m not designing, you&apos;ll find me exploring new technologies, mentoring junior designers,
								or hiking in the mountains.
							</p>
						</div>
						<div className='space-y-6'>
							<div className='bg-gray-50 p-6 rounded-xl'>
								<h3 className='text-xl font-medium text-gray-900 mb-3'>Skills</h3>
								<div className='flex flex-wrap gap-2'>
									<span className='px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full'>Figma</span>
									<span className='px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full'>Sketch</span>
									<span className='px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full'>
										Adobe Creative Suite
									</span>
									<span className='px-3 py-1 bg-orange-100 text-orange-800 text-sm rounded-full'>Prototyping</span>
									<span className='px-3 py-1 bg-red-100 text-red-800 text-sm rounded-full'>User Research</span>
									<span className='px-3 py-1 bg-indigo-100 text-indigo-800 text-sm rounded-full'>Design Systems</span>
								</div>
							</div>

							<div className='bg-gray-50 p-6 rounded-xl'>
								<h3 className='text-xl font-medium text-gray-900 mb-3'>Experience</h3>
								<div className='space-y-3'>
									<div>
										<div className='font-medium text-gray-900'>Senior Product Designer</div>
										<div className='text-gray-600'>TechCorp • 2021-Present</div>
									</div>
									<div>
										<div className='font-medium text-gray-900'>Product Designer</div>
										<div className='text-gray-600'>StartupXYZ • 2019-2021</div>
									</div>
									<div>
										<div className='font-medium text-gray-900'>UX Designer</div>
										<div className='text-gray-600'>DesignAgency • 2017-2019</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section id='contact' className='py-20 px-6'>
				<div className='max-w-4xl mx-auto text-center'>
					<h2 className='text-4xl font-light text-gray-900 mb-6'>Let&apos;s Work Together</h2>
					<p className='text-xl text-gray-600 mb-12 max-w-2xl mx-auto'>
						I&apos;m always interested in new opportunities and exciting projects. Whether you have a question or just
						want to say hi, I&apos;d love to hear from you.
					</p>

					<div className='grid md:grid-cols-3 gap-8 mb-12'>
						<div className='text-center'>
							<div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4'>
								<span className='text-xl text-blue-600'>📧</span>
							</div>
							<h3 className='text-lg font-medium text-gray-900 mb-2'>Email</h3>
							<p className='text-gray-600'>hello@marianashevchuk.com</p>
						</div>

						<div className='text-center'>
							<div className='w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
								<span className='text-xl text-green-600'>💼</span>
							</div>
							<h3 className='text-lg font-medium text-gray-900 mb-2'>LinkedIn</h3>
							<p className='text-gray-600'>linkedin.com/in/marianashevchuk</p>
						</div>

						<div className='text-center'>
							<div className='w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4'>
								<span className='text-xl text-purple-600'>🐦</span>
							</div>
							<h3 className='text-lg font-medium text-gray-900 mb-2'>Twitter</h3>
							<p className='text-gray-600'>@marianashevchuk</p>
						</div>
					</div>

					<a
						href='mailto:hello@marianashevchuk.com'
						className='inline-block bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium'
					>
						Send Message
					</a>
				</div>
			</section>

			{/* Footer */}
			<footer className='py-12 px-6 border-t border-gray-100'>
				<div className='max-w-4xl mx-auto text-center'>
					<p className='text-gray-600'>© {new Date().getFullYear()} Mariana Shevchuk. Designed and built with care.</p>
				</div>
			</footer>
		</div>
	);
}
