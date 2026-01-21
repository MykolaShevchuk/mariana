import TextSection from './TextSection';
import BeforeAfterSlider from './BeforeAfterSlider';

interface BeforeAfterSectionProps {
	title?: string;
	description?: string;
	beforeImage: string;
	afterImage: string;
	beforeAlt: string;
	afterAlt: string;
	aspectRatio?: string;
	imageCaption?: string;
}

export default function BeforeAfterSection({
	title = 'Before and After',
	description,
	beforeImage,
	afterImage,
	beforeAlt,
	afterAlt,
	aspectRatio,
	imageCaption,
}: BeforeAfterSectionProps) {
	return (
		<>
			{description && (
				<TextSection subTitle={title} noBottomPadding>
					<p className='mb-6 sm:mb-8'>{description}</p>
				</TextSection>
			)}

			<section className='pt-12 pb-0 sm:py-8 px-4 sm:px-6 lg:px-8'>
				<div className='max-w-6xl mx-auto'>
					<div className='sm:bg-[#DCDBCE] sm:py-6 sm:pr-6 sm:pb-6 sm:pl-0 sm:rounded-[20px] w-screen sm:w-full overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-thumb-gray-400/50 scrollbar-track-transparent hover:scrollbar-thumb-gray-400/70 scrollbar-thumb-rounded-full -mx-4 sm:mx-auto mb-0 sm:mb-4'>
						<div className='sm:pl-6'>
							<BeforeAfterSlider
								beforeImage={beforeImage}
								afterImage={afterImage}
								beforeAlt={beforeAlt}
								afterAlt={afterAlt}
								aspectRatio={aspectRatio}
							/>
						</div>
					</div>
					{imageCaption && (
						<p className='text-[#464040] text-[14px] sm:text-[16px] leading-[22px] sm:leading-[26px] text-center mb-4 sm:mb-16'>
							{imageCaption}
						</p>
					)}
					{!imageCaption && <div className='mb-4 sm:mb-16' />}
				</div>
			</section>
		</>
	);
}
