import Tag from '../components/Tag';

export default function AboutSection() {
	// Calculate years of experience from 2015
	const yearsOfExperience = new Date().getFullYear() - 2017;

	return (
		<section id='about' className='py-12 px-0 md:px-6'>
			<div className='max-w-6xl mx-auto'>
				<div className='flex flex-col md:flex-row gap-16'>
					<div className='md:w-1/2 px-6 md:px-0'>
						<div>
							<h3 className="text-black font-['Lora'] text-[24px] sm:text-[28px] lg:text-[32px] font-semibold leading-tight mb-3 sm:mb-4 lg:mb-6">About Me</h3>
							<p className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#464040] mb-6 leading-[26px] sm:leading-[30px] lg:leading-[32px] font-['Inter'] text-pretty">
								Product Designer with {yearsOfExperience}+ years&apos; experience creating user-centred digital
								products across mobile and web. Highly skilled in Figma and an advocate for design systems, having
								developed one from the ground up using design tokens.
							</p>
							<p className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#464040] mb-6 leading-[26px] sm:leading-[30px] lg:leading-[32px] font-['Inter'] text-pretty">
								Collaborative and outcome-focused, with a track record of improving key user journeys and driving
								measurable impact through close partnership with stakeholders and cross-functional teams. Value the
								role of research and user insights in informing design decisions.
							</p>
							<p className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#464040] leading-[26px] sm:leading-[30px] lg:leading-[32px] font-['Inter'] text-pretty">
								Committed to continuous learning, completing at least one professional course each year to expand
								expertise.
							</p>
						</div>
					</div>
					<div className='md:w-1/2 space-y-6'>
						<div className='bg-gray-50 p-6 rounded-none md:rounded-xl'>
							<h3 className='text-xl font-medium text-gray-900 mb-3'>Skills</h3>
							<div className='space-y-8'>
								<div>
									<h4 className='font-medium text-gray-800 mb-2'>Design & UX</h4>
									<div className='flex flex-wrap gap-2'>
										<Tag className='bg-white/50'>UI design</Tag>
										<Tag className='bg-white/50'>UX design</Tag>
										<Tag className='bg-white/50'>Interaction design</Tag>
										<Tag className='bg-white/50'>Visual design</Tag>
										<Tag className='bg-white/50'>Prototyping</Tag>
										<Tag className='bg-white/50'>Wireframing</Tag>
									</div>
								</div>

								<div>
									<h4 className='font-medium text-gray-800 mb-2'>Design Systems</h4>
									<div className='flex flex-wrap gap-2'>
										<Tag className='bg-white/50'>Design systems</Tag>
										<Tag className='bg-white/50'>Component libraries</Tag>
										<Tag className='bg-white/50'>Design tokens</Tag>
									</div>
								</div>

								<div>
									<h4 className='font-medium text-gray-800 mb-2'>Research & Validation</h4>
									<div className='flex flex-wrap gap-2'>
										<Tag className='bg-white/50'>User research</Tag>
										<Tag className='bg-white/50'>Usability testing</Tag>
										<Tag className='bg-white/50'>Competitor analysis</Tag>
										<Tag className='bg-white/50'>A/B testing</Tag>
									</div>
								</div>

								<div>
									<h4 className='font-medium text-gray-800 mb-2'>Tools</h4>
									<div className='flex flex-wrap gap-2'>
										<Tag className='bg-white/50'>Figma</Tag>
										<Tag className='bg-white/50'>FigJam</Tag>
										<Tag className='bg-white/50'>Miro</Tag>
										<Tag className='bg-white/50'>Lovable AI</Tag>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
