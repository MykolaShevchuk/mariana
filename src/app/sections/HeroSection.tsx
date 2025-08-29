export default function HeroSection() {
	// Calculate years of experience from 2015
	const yearsOfExperience = new Date().getFullYear() - 2017;

	return (
		<section className='pt-12 pb-20 px-6  min-h-[calc(100vh-72px)] flex items-center bg-gray-50'>
			<div className='max-w-6xl mx-auto'>
				<div className='text-left'>
					<h1
						className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-gray-900 mb-8 leading-none tracking-tight'
						style={{ fontFamily: 'var(--font-lora)' }}
					>
						<span className='block text-[64px] mb-3 sm:mb-0 sm:text-5xl md:text-6xl lg:text-7xl'>
							Mariana Shevchuk
						</span>
						<span className='block text-blue-600'>Product Designer</span>
					</h1>
					<p className='text-base sm:text-lg md:text-2xl text-gray-600 mb-16 max-w-3xl leading-relaxed font-light'>
						I am a UK-based Product Designer with {yearsOfExperience}+ years of experience in mobile and web,
						specialising in creating user-centred, consistent, and impactful experiences.
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
	);
}
