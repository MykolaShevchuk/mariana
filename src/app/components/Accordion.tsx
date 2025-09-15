'use client';

import { useState } from 'react';

interface AccordionItem {
	content: string;
  title: string;
}

interface AccordionProps {
	items: AccordionItem[];
	className?: string;
}

export default function Accordion({ items, className = '' }: AccordionProps) {
	const [openItems, setOpenItems] = useState<number[]>([]);

	const toggleItem = (index: number) => {
		setOpenItems((prev) => (prev.includes(index) ? prev.filter((item) => item !== index) : [...prev, index]));
	};

	return (
		<div className={`max-w-2xl ${className}`}>
			<div className='space-y-2'>
				{items.map((item, index) => (
					<div key={index}>
						<div className='flex items-center'>
							<button onClick={() => toggleItem(index)} className='flex items-center text-left p-2 focus:outline-none'>
								<svg
									className={`w-4 h-4 text-[#464040] mr-3 transition-transform duration-200 ${
										openItems.includes(index) ? 'rotate-90' : ''
									}`}
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
								>
									<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
								</svg>
								<h4 className='font-bold text-[#464040] text-[18px] leading-[24px]'>{item.title}</h4>
							</button>
						</div>
						{openItems.includes(index) && (
							<p className='text-[#464040] text-[16px] leading-[24px] ml-7 p-2'>{item.content}</p>
						)}
					</div>
				))}
			</div>
		</div>
	);
}
