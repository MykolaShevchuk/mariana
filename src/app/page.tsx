'use client';

import { useState } from 'react';
import ProjectCard from './components/ProjectCard';
import Tag from './components/Tag';

export default function Home() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	
	// Calculate years of experience from 2015
	const yearsOfExperience = new Date().getFullYear() - 2017;

	return (
		<div className='min-h-screen bg-white'>
			{/* Navigation */}
			<nav className='w-full bg-gray-50/80 backdrop-blur-md z-50'>
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
							<a href='#experience' className='text-gray-600 hover:text-gray-900 transition-colors'>
								Experience
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
								href='#experience'
								className='block text-gray-600 hover:text-gray-900 transition-colors'
								onClick={() => setIsMobileMenuOpen(false)}
							>
								Experience
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
			<section className='pt-12 pb-20 px-6 min-h-screen flex items-center bg-gray-50'>
				<div className='max-w-6xl mx-auto'>
					<div className='text-left'>
						<h1 className='text-5xl md:text-7xl lg:text-8xl font-medium text-gray-900 mb-8 leading-none tracking-tight' style={{ fontFamily: 'var(--font-lora)' }}>
							<span className='block'>Mariana Shevchuk</span>
							<span className='block text-blue-600'>Product Designer</span>
						</h1>
						<p className='text-xl md:text-2xl text-gray-600 mb-16 max-w-3xl leading-relaxed font-light'>
							I am a UK-based Product Designer with over {yearsOfExperience}+ years of experience in mobile and web, specialising in creating user-centred, consistent, and impactful experiences.
						</p>
						<div className='flex flex-col sm:flex-row gap-6'>
							<a
								href='#work'
								className='bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-base'
							>
								View My Work
							</a>
							<a
								href='#contact'
								className='border border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors font-medium text-base'
							>
								Get In Touch
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* Work Section */}
			<section id='work' className='py-20 px-6 bg-white'>
				<div className='max-w-6xl mx-auto'>

					<div className='space-y-16'>
						<ProjectCard
							title='Outsail'
							subtitle='Vendor Selection Platform'
							year='2020'
							description='Designed a comprehensive interface for companies to evaluate and select software vendors. The platform streamlines the selection process with clear workflows, demo preparation tools, and team collaboration features.'
							skills={['Design Analysis', 'UI Guidelines', 'Visual Design', 'Prototyping', 'Stakeholder Communication']}
							imageSrc='/outsale.png'
							imageAlt='Outsail UI - Vendor Selection Platform showing Home dashboard and My Scorecard interface'
							priority={true}
						/>

						<ProjectCard
							title='Ann Verner'
							subtitle='Artist Portfolio'
							year='2019'
							description='Designed a unique and inspirational portfolio website for Ann Verner, a collage artist based in Ukraine. The project focused on showcasing her conceptual art work inspired by French artists, creating an engaging digital experience that highlights her distinctive collage style and artistic vision.'
							skills={['UI Guidelines', 'Visual Design', 'Prototyping', 'Communication with stakeholders']}
							imageSrc='/ann-verner.png'
							imageAlt='Ann Verner Artist Portfolio showing Ukrainian collage artist website with navigation in Ukrainian and English, featuring conceptual art pieces from 2019'
						/>

						<ProjectCard
							title='Varia'
							subtitle='Real Estate Platform'
							year='2018'
							description='Designed a comprehensive real estate platform that untangles the ropes in today&apos;s realtor-centric world by using innovative technology to show properties and bring new user experience. The platform brings transparency into the real estate world and creates more informed decisions for customers while saving time in the process.'
							skills={['Wireframing', 'UI Guidelines', 'Visual Design', 'Prototyping', 'Communication with stakeholders']}
							imageSrc='/varia.png'
							imageAlt='Varia Real Estate Platform showing homepage search interface and property details page with 360° virtual tour capabilities'
						/>




					</div>
				</div>
			</section>

			{/* About Section */}
			<section id='about' className='py-20 px-6'>
				<div className='max-w-6xl mx-auto'>
					<div className='flex flex-col md:flex-row gap-16'>
						<div className='md:w-1/2'>
							<div>
								<h2 className='text-4xl font-light text-gray-900 mb-6'>About Me</h2>
															<p className='text-lg text-gray-600 mb-6 leading-relaxed'>
								Product Designer with {yearsOfExperience}+ years&apos; experience creating user-centred digital products across mobile and web. Highly skilled in Figma and an advocate for design systems, having developed one from the ground up using design tokens.
							</p>
							<p className='text-lg text-gray-600 mb-6 leading-relaxed'>
								Collaborative and outcome-focused, with a track record of improving key user journeys and driving measurable impact through close partnership with stakeholders and cross-functional teams. Value the role of research and user insights in informing design decisions.
							</p>
							<p className='text-lg text-gray-600 leading-relaxed'>
								Committed to continuous learning, completing at least one professional course each year to expand expertise.
							</p>
							</div>
						</div>
						<div className='md:w-1/2 space-y-6'>
							<div className='bg-gray-50 p-6 rounded-xl'>
								<h3 className='text-xl font-medium text-gray-900 mb-3'>Skills</h3>
								<div className='space-y-8'>
									<div>
										<h4 className='font-medium text-gray-800 mb-2'>Design & UX</h4>
										<div className='flex flex-wrap gap-2'>
											<Tag>UI Design</Tag>
											<Tag>UX Design</Tag>
											<Tag>Interaction Design</Tag>
											<Tag>Visual Design</Tag>
											<Tag>Prototyping</Tag>
											<Tag>Wireframing</Tag>
										</div>
									</div>
									
									<div>
										<h4 className='font-medium text-gray-800 mb-2'>Design Systems</h4>
										<div className='flex flex-wrap gap-2'>
											<Tag>Design Systems</Tag>
											<Tag>Component Libraries</Tag>
											<Tag>Design Tokens</Tag>
										</div>
									</div>
									
									<div>
										<h4 className='font-medium text-gray-800 mb-2'>Research & Validation</h4>
										<div className='flex flex-wrap gap-2'>
											<Tag>User Research</Tag>
											<Tag>Usability Testing</Tag>
											<Tag>Competitor Analysis</Tag>
											<Tag>A/B Testing</Tag>
										</div>
									</div>
									
									<div>
										<h4 className='font-medium text-gray-800 mb-2'>Tools</h4>
										<div className='flex flex-wrap gap-2'>
											<Tag>Figma (Advanced)</Tag>
											<Tag>FigmaJam</Tag>
											<Tag>Miro</Tag>
											<Tag>Lovable AI</Tag>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Experience Section */}
			<section id='experience' className='py-20 bg-gray-50 w-full'>
				<div className='max-w-6xl mx-auto px-6'>
					<div className='text-center mb-16'>
						<h2 className='text-4xl font-light text-gray-900 mb-4'>Professional Experience</h2>
					</div>

					<div className='grid md:grid-cols-2 gap-8'>
						<div className='bg-white p-8 rounded-xl shadow-sm border border-gray-100'>
							<div className='mb-4'>
								<h3 className='text-xl font-medium text-gray-900 mb-2'>Customer Experience Design Lead</h3>
								<p className='text-gray-900 font-medium'>Gumtree, London</p>
								<p className='text-gray-600 text-sm'>July 2025 - Present</p>
							</div>
							<p className='text-gray-600 leading-relaxed'>
								Leading design strategy and creating concepts using Lovable AI and Figma. Ensuring design consistency across all user journeys as a design system guardian, leading UI refreshes, and co-leading strategic workshops with stakeholders.
							</p>
						</div>

						<div className='bg-white p-8 rounded-xl shadow-sm border border-gray-100'>
							<div className='mb-4'>
								<h3 className='text-xl font-medium text-gray-900 mb-2'>Product Designer</h3>
								<p className='text-gray-900 font-medium'>Gumtree, London</p>
								<p className='text-gray-600 text-sm'>Sep 2022 - July 2025</p>
							</div>
							<p className='text-gray-600 leading-relaxed'>
								Redesigned mobile and web experiences for Listings journey and Services initiative. Established design system with design tokens, delivered +31.4% uplift in new listings, +9% replies, and received &quot;Make an impact&quot; award.
							</p>
						</div>

						<div className='bg-white p-8 rounded-xl shadow-sm border border-gray-100'>
							<div className='mb-4'>
								<h3 className='text-xl font-medium text-gray-900 mb-2'>UI/UX Designer</h3>
								<p className='text-gray-900 font-medium'>LaSoft, Lviv, Ukraine</p>
								<p className='text-gray-600 text-sm'>Mar 2016 - Sep 2022</p>
							</div>
							<p className='text-gray-600 leading-relaxed'>
								Delivered MVPs and digital products for international clients across consulting, real estate, telecoms, e-commerce, and creative arts. Defined user flows, designed end-to-end experiences, and created comprehensive design documentation.
							</p>
						</div>

						<div className='bg-white p-8 rounded-xl shadow-sm border border-gray-100'>
							<div className='mb-4'>
								<h3 className='text-xl font-medium text-gray-900 mb-2'>Graphic Designer</h3>
								<p className='text-gray-900 font-medium'>LaSoft, Lviv, Ukraine</p>
								<p className='text-gray-600 text-sm'>Mar 2015 - Oct 2015</p>
							</div>
							<p className='text-gray-600 leading-relaxed'>
								Specialized in image vectorization and producing precise, print-ready vector artwork using Adobe Illustrator/Photoshop for international clients, contributing to team growth and workflow improvements.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Contact Section */}
			<section id='contact' className='py-20 px-6'>
				<div className='max-w-4xl mx-auto text-center'>
					<h2 className='text-4xl font-bold text-gray-900 mb-6'>Let&apos;s Connect</h2>
					<p className='text-xl text-gray-900 mb-8 max-w-2xl mx-auto'>
						Feel free to reach out for collaborations or just a friendly hello 😊
					</p>

					<div>
						<a href='mailto:marjanka.j@gmail.com' className='text-blue-600 text-xl font-medium hover:text-blue-700 transition-colors'>
							marjanka.j@gmail.com
						</a>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className='py-12 px-6 border-t border-gray-100 bg-gray-50'>
				<div className='max-w-4xl mx-auto text-center'>
					<p className='text-gray-600'>© {new Date().getFullYear()} Mariana Shevchuk. Designed and built with care.</p>
				</div>
			</footer>
		</div>
	);
}
