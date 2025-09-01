export default function ExperienceSection() {
	return (
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
						<p className='text-sm sm:text-base lg:text-base text-gray-600 leading-relaxed'>
							Leading design strategy and creating concepts using Lovable AI and Figma. Ensuring design consistency
							across all user journeys as a design system guardian, leading UI refreshes, and co-leading strategic
							workshops with stakeholders.
						</p>
					</div>

					<div className='bg-white p-8 rounded-xl shadow-sm border border-gray-100'>
						<div className='mb-4'>
							<h3 className='text-xl font-medium text-gray-900 mb-2'>Product Designer</h3>
							<p className='text-gray-900 font-medium'>Gumtree, London</p>
							<p className='text-gray-600 text-sm'>Sep 2022 - July 2025</p>
						</div>
						<p className='text-sm sm:text-base lg:text-base text-gray-600 leading-relaxed'>
							Redesigned mobile and web experiences for Listings journey and Services initiative. Established design
							system with design tokens, delivered +31.4% uplift in new listings, +9% replies, and received &quot;Make
							an impact&quot; award.
						</p>
					</div>

					<div className='bg-white p-8 rounded-xl shadow-sm border border-gray-100'>
						<div className='mb-4'>
							<h3 className='text-xl font-medium text-gray-900 mb-2'>UI/UX Designer</h3>
							<p className='text-gray-900 font-medium'>LaSoft, Lviv, Ukraine</p>
							<p className='text-gray-600 text-sm'>Mar 2016 - Sep 2022</p>
						</div>
						<p className='text-sm sm:text-base lg:text-base text-gray-600 leading-relaxed'>
							Delivered MVPs and digital products for international clients across consulting, real estate, telecoms,
							e-commerce, and creative arts. Defined user flows, designed end-to-end experiences, and created
							comprehensive design documentation.
						</p>
					</div>

					<div className='bg-white p-8 rounded-xl shadow-sm border border-gray-100'>
						<div className='mb-4'>
							<h3 className='text-xl font-medium text-gray-900 mb-2'>Graphic Designer</h3>
							<p className='text-gray-900 font-medium'>LaSoft, Lviv, Ukraine</p>
							<p className='text-gray-600 text-sm'>Mar 2015 - Oct 2015</p>
						</div>
						<p className='text-sm sm:text-base lg:text-base text-gray-600 leading-relaxed'>
							Specialized in image vectorization and producing precise, print-ready vector artwork using Adobe
							Illustrator/Photoshop for international clients, contributing to team growth and workflow improvements.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
