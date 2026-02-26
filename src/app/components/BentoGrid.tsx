import AnimateOnScroll from './AnimateOnScroll';

export default function BentoGrid() {
	return (
		<section className='py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8'>
			<AnimateOnScroll className='max-w-6xl mx-auto'>
				<div className='grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4'>
					{/* Row 1: 2x wide on left, 1x on right */}
					<div className='sm:col-span-2 bg-gray-200 rounded-[16px] sm:rounded-[20px] aspect-video sm:aspect-auto sm:h-[400px] lg:h-[480px]' />
					<div className='bg-gray-200 rounded-[16px] sm:rounded-[20px] aspect-video sm:aspect-auto sm:h-[400px] lg:h-[480px]' />

					{/* Row 2: Three equal placeholders */}
					<div className='bg-gray-200 rounded-[16px] sm:rounded-[20px] aspect-square sm:aspect-auto sm:h-[400px] lg:h-[480px]' />
					<div className='bg-gray-200 rounded-[16px] sm:rounded-[20px] aspect-square sm:aspect-auto sm:h-[400px] lg:h-[480px]' />
					<div className='bg-gray-200 rounded-[16px] sm:rounded-[20px] aspect-square sm:aspect-auto sm:h-[400px] lg:h-[480px]' />
				</div>
			</AnimateOnScroll>
		</section>
	);
}
