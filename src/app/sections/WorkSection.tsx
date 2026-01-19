import ProjectCard from '../components/ProjectCard';

export default function WorkSection() {
	return (
		<section id='work' className='py-8 px-0 sm:px-6 bg-white'>
			<div className='max-w-6xl mx-auto'>
				<div>
					<ProjectCard
						title='Gumtree'
						subtitle='Services'
						year='2025'
						description='Redesigned the Services experience across multiple journeys as part of a strategic initiative to improve engagement and outcomes for service providers. The project delivered consistent growth compared to the previous version, achieving a 9% increase in replies, a 20% uplift in NPS and drove 60K new listings to the platform. Worked closely with stakeholders and cross-functional teams to align on requirements, ensure design consistency, and implement improvements that enhanced both usability and business performance.'
						link='/case-studies/gumtree-services'
						skills={[
							'UX Design',
							'UI Design',
							'App',
							'Responsive',
							'3PA',
							'Partnerships',
							'SEO',
							'Stakeholder management',
							'Cross-functional collaboration',
						]}
						imageSrc='/gumtree-services.png'
						imageSrcMobile='/gumtree-services-mobile.jpg'
						imageAlt='Gumtree Services redesign showing improved user experience and engagement metrics'
						priority={true}
						featured={true}
					/>

					<ProjectCard
						title='Gumtree'
						subtitle='App redesign'
						year='2024'
						description='As part of the Gumtree app redesign for iOS and Android, I owned the Listings journey, covering listing creation, management and partner integrations. I also introduced a design system with tokens and cross-platform guidelines, ensuring consistency across teams. One of the more complex problems was handling multi-categorisation within technical constraints — where I worked with both native and web-view approaches and validated design decisions through moderated usability testing.'
						// link='/case-studies/gumtree-app'
						skills={[
							'UX Design',
							'UI Design',
							'App',
							'Stakeholder management',
							'Cross-functional collaboration',
						]}
						imageSrc='/gumtree-app.jpg'
						imageSrcMobile='/gumtree-app-mobile.jpg'
						imageAlt='Gumtree App redesign showing improved user experience and engagement metrics'
						priority={true}
						featured={true}
						additionalImageOffset='-ml-[80px] -mr-[80px]'
					/>

					<ProjectCard
						title='Outsail'
						subtitle='Vendor Selection Platform'
						year='2020'
						description='Designed a comprehensive interface for companies to evaluate and select software vendors. The platform streamlines the selection process with clear workflows, demo preparation tools, and team collaboration features.'
						skills={['Design analysis', 'UI guidelines', 'Visual design', 'Prototyping', 'Stakeholder communication']}
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
						skills={['UI guidelines', 'Visual design', 'Prototyping', 'Communication with stakeholders']}
						imageSrc='/ann-verner.png'
						imageSrcMobile='/ann-verner-mobile.jpg'
						imageAlt='Ann Verner Artist Portfolio showing Ukrainian collage artist website with navigation in Ukrainian and English, featuring conceptual art pieces from 2019'
					/>

					<ProjectCard
						title='Varia'
						subtitle='Real Estate Platform'
						year='2018'
						description="Designed a comprehensive real estate platform that untangles the ropes in today's realtor-centric world by using innovative technology to show properties and bring new user experience. The platform brings transparency into the real estate world and creates more informed decisions for customers while saving time in the process."
						skills={[
							'Wireframing',
							'UI guidelines',
							'Visual design',
							'Prototyping',
							'Communication with stakeholders',
						]}
						imageSrc='/varia.png'
						imageSrcMobile='/varia-mobile.jpg'
						imageAlt='Varia Real Estate Platform showing homepage search interface and property details page with 360° virtual tour capabilities'
					/>
				</div>
			</div>
		</section>
	);
}
