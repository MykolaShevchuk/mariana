import ProjectCard from './components/ProjectCard';
import Tag from './components/Tag';
import Navigation from './components/Navigation';

export default function Home() {
	// Calculate years of experience from 2015
	const yearsOfExperience = new Date().getFullYear() - 2017;

	return (
		<div className='min-h-screen bg-white'>
			<Navigation />

			{/* Hero Section */}
			<section className='pt-12 pb-20 px-6 min-h-screen flex items-center bg-gray-50'>
				<div className='max-w-6xl mx-auto'>
					<div className='text-left'>
						<h1 className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-gray-900 mb-8 leading-none tracking-tight' style={{ fontFamily: 'var(--font-lora)' }}>
							<span className='block text-[64px] mb-3 sm:mb-0 sm:text-5xl md:text-6xl lg:text-7xl'>Mariana Shevchuk</span>
							<span className='block text-blue-600'>Product Designer</span>
						</h1>
						<p className='text-base sm:text-lg md:text-2xl text-gray-600 mb-16 max-w-3xl leading-relaxed font-light'>
							I am a UK-based Product Designer with {yearsOfExperience}+ years of experience in mobile and web, specialising in creating user-centred, consistent, and impactful experiences.
						</p>
						<div className='flex flex-col sm:flex-row gap-6'>
							<a
								href='#contact'
								className='bg-blue-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm sm:text-base w-fit'
							>
								Get in touch
							</a>
						</div>
					</div>
				</div>
			</section>

			{/* Work Section */}
			<section id='work' className='py-12 sm:py-20 px-0 sm:px-6 bg-white'>
				<div className='max-w-6xl mx-auto'>

					<div className='space-y-8'>
						<ProjectCard
							title='Gumtree'
							subtitle='Services'
							year='2025'
							description='Redesigned the Services experience across multiple journeys as part of a strategic initiative to improve engagement and outcomes for service providers. The project delivered consistent growth compared to the previous version, achieving a 9% increase in replies and a 15% uplift in service leads. Worked closely with stakeholders and cross-functional teams to align on requirements, ensure design consistency, and implement improvements that enhanced both usability and business performance.'
							skills={['Design Strategy', 'UX Design', 'Design Systems', 'Stakeholder Management', 'Cross-functional Collaboration', 'Performance Metrics']}
							imageSrc='/gumtree-services.png'
							imageSrcMobile='/gumtree-services-mobile.jpg'
							imageAlt='Gumtree Services redesign showing improved user experience and engagement metrics'
							priority={true}
						/>

						<ProjectCard
							title='Outsail'
							subtitle='Vendor Selection Platform'
							year='2020'
							description='Designed a comprehensive interface for companies to evaluate and select software vendors. The platform streamlines the selection process with clear workflows, demo preparation tools, and team collaboration features.'
							skills={['Design Analysis', 'UI Guidelines', 'Visual Design', 'Prototyping', 'Stakeholder Communication']}
							imageSrc='/outsail.png'
							imageSrcMobile='/outsail-mobile.jpg'
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
							imageSrcMobile='/ann-verner-mobile.jpg'
							imageAlt='Ann Verner Artist Portfolio showing Ukrainian collage artist website with navigation in Ukrainian and English, featuring conceptual art pieces from 2019'
						/>

						<ProjectCard
							title='Varia'
							subtitle='Real Estate Platform'
							year='2018'
							description='Designed a comprehensive real estate platform that untangles the ropes in today&apos;s realtor-centric world by using innovative technology to show properties and bring new user experience. The platform brings transparency into the real estate world and creates more informed decisions for customers while saving time in the process.'
							skills={['Wireframing', 'UI Guidelines', 'Visual Design', 'Prototyping', 'Communication with stakeholders']}
							imageSrc='/varia.png'
							imageSrcMobile='/varia-mobile.jpg'
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
								<h2 className='text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-6'>About Me</h2>
															<p className='text-sm sm:text-base md:text-lg text-gray-600 mb-6 leading-relaxed'>
								Product Designer with {yearsOfExperience}+ years&apos; experience creating user-centred digital products across mobile and web. Highly skilled in Figma and an advocate for design systems, having developed one from the ground up using design tokens.
							</p>
							<p className='text-sm sm:text-base md:text-lg text-gray-600 mb-6 leading-relaxed'>
								Collaborative and outcome-focused, with a track record of improving key user journeys and driving measurable impact through close partnership with stakeholders and cross-functional teams. Value the role of research and user insights in informing design decisions.
							</p>
							<p className='text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed'>
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
						<h2 className='text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-4'>Professional Experience</h2>
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
					<h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6'>Let&apos;s Connect</h2>
					<p className='text-base sm:text-lg md:text-xl text-gray-900 mb-8 max-w-2xl mx-auto'>
						Feel free to reach out for collaborations or just a friendly hello 😊
					</p>

					<div>
						<a href='mailto:marjanka.j@gmail.com' className='text-blue-600 text-base sm:text-lg md:text-xl font-medium hover:text-blue-700 transition-colors'>
							marjanka.j@gmail.com
						</a>
					</div>
				</div>
			</section>

			{/* Footer */}
			<footer className='py-12 px-6 border-t border-gray-100 bg-gray-50'>
				<div className='max-w-4xl mx-auto text-center'>
					<p className='text-gray-600'>© {new Date().getFullYear()} Mariana Shevchuk.<br className='block sm:hidden' /> Designed and built with care.</p>
				</div>
			</footer>
		</div>
	);
}
