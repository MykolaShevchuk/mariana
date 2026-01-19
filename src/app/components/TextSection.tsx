import { ReactNode } from 'react';

interface TextSectionProps {
	title?: string;
	preTitle?: string;
	subTitle?: string;
	children: ReactNode;
}

export default function TextSection({ title, preTitle, subTitle, children }: TextSectionProps) {
	return (
		<section className='py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8'>
			<div className='max-w-[800px] mx-auto text-left'>
				{preTitle && (
					<span className='text-[#2463eb] text-[18px] sm:text-[20px] lg:text-[24px] font-bold uppercase leading-[24px] block mb-2 sm:mb-4'>
						{preTitle}
					</span>
				)}
				{title && (
					<h2 className="text-black font-['Lora'] text-[28px] sm:text-[32px] lg:text-[40px] font-semibold mb-4 sm:mb-6">
						{title}
					</h2>
				)}
				{subTitle && (
					<h3 className="text-black font-['Lora'] text-[24px] sm:text-[28px] lg:text-[32px] font-semibold leading-tight mb-3 sm:mb-4 lg:mb-6">
						{subTitle}
					</h3>
				)}
				<div className="text-[#464040] text-[16px] sm:text-[18px] lg:text-[20px] leading-[26px] sm:leading-[30px] lg:leading-[32px] font-['Inter']">
					{children}
				</div>
			</div>
		</section>
	);
}
