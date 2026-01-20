import Image from 'next/image';
import Link from 'next/link';
import Tag from '@/components/Tag';
import Accordion from '@/components/Accordion';

export default function GumtreeAppsPage() {
	return (
		<div className='min-h-screen bg-white'>
			{/* Navigation */}
			<nav className='py-6 px-6 sm:px-8'>
				<div className='max-w-6xl mx-auto'>
					<Link
						href='/'
						className='text-blue-600 hover:text-blue-700 underline transition-colors outline-none focus:outline-none'
					>
						← Back
					</Link>
				</div>
			</nav>

			{/* Hero Section */}
			<section className='pt-8 sm:pt-12 pb-4 sm:pb-8 px-4 sm:px-6 lg:px-8'>
				<div className='max-w-6xl mx-auto'>
					<div className='mb-6 sm:mb-8'>
						<h1 className="text-black font-['Lora'] text-[36px] sm:text-[40px] md:text-[50px] lg:text-[65px] font-semibold  mb-4 sm:mb-6 lg:mb-8">
							App redesign
						</h1>

						<div className='flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-16 items-start'>
							<div className='w-full lg:w-[20%]'>
								<p className='text-[#474747] text-base sm:text-lg md:text-xl lg:text-2xl font-light mb-1 sm:mb-2'>
									H1 2025
								</p>
								<p className='text-[#474747] text-base sm:text-lg md:text-xl lg:text-2xl font-light mb-1 sm:mb-2'>
									Gumtree.com
								</p>
							</div>

							<div className='flex-1'>
								<p className="text-[#464040] text-[18px] sm:text-[20px] lg:text-[24px] leading-[28px] sm:leading-[32px] lg:leading-[36px] max-w-4xl mb-6 sm:mb-8 font-['Inter'] text-pretty">
									During the Gumtree iOS and Android app redesign, I owned the sellers' journeys, including Ad creation, management, and partner integrations. I introduced a design system with design tokens (pre-Figma variable times) and cross-platform guidelines to ensure consistency. I also worked with engineers to solve complex multi-category challenges and validated solutions through usability testing.
								</p>
							</div>
						</div>
					</div>

					{/* Hero Image */}
					<div className=' sm:mt-8 lg:mt-12'>
						<div className='-mx-4 sm:-mx-6 lg:-mx-[200px] overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-thumb-gray-400/50 scrollbar-track-transparent hover:scrollbar-thumb-gray-400/70 scrollbar-thumb-rounded-full'>
							{/* Mobile Image */}
							<Image
								src='/gumtree-app-mobile.jpg'
								alt='Gumtree App redesign'
								width={800}
								height={600}
								className='w-full h-auto rounded-[12px] sm:rounded-[16px] lg:rounded-[20px] min-h-[400px] sm:min-h-auto object-contain sm:hidden'
								priority
								quality={90}
							/>
							{/* Desktop Image */}
							<Image
								src='/gumtree-app.png'
								alt='Gumtree App redesign'
								width={1600}
								height={800}
								className='w-full h-auto rounded-[12px] sm:rounded-[16px] lg:rounded-[20px] min-w-[1200px] min-h-[400px] sm:min-h-auto object-contain hidden sm:block'
								priority
								quality={90}
							/>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
