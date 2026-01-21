'use client';

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

interface BeforeAfterSliderProps {
	beforeImage: string;
	afterImage: string;
	beforeAlt: string;
	afterAlt: string;
	aspectRatio?: string;
}

export default function BeforeAfterSlider({
	beforeImage,
	afterImage,
	beforeAlt,
	afterAlt,
	aspectRatio = '16/9',
}: BeforeAfterSliderProps) {
	const [sliderPosition, setSliderPosition] = useState(50);
	const [isDragging, setIsDragging] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);

	const handleMove = (clientX: number) => {
		if (!containerRef.current) return;

		const rect = containerRef.current.getBoundingClientRect();
		const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
		const percent = (x / rect.width) * 100;

		setSliderPosition(percent);
	};

	const handleMouseDown = () => setIsDragging(true);
	const handleEnd = () => setIsDragging(false);

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			handleMove(e.clientX);
		};

		const handleTouchMove = (e: TouchEvent) => {
			handleMove(e.touches[0].clientX);
		};

		if (isDragging) {
			window.addEventListener('mousemove', handleMouseMove);
			window.addEventListener('mouseup', handleEnd);
			window.addEventListener('touchmove', handleTouchMove);
			window.addEventListener('touchend', handleEnd);

			return () => {
				window.removeEventListener('mousemove', handleMouseMove);
				window.removeEventListener('mouseup', handleEnd);
				window.removeEventListener('touchmove', handleTouchMove);
				window.removeEventListener('touchend', handleEnd);
			};
		}
	}, [isDragging]);

	return (
		<div
			ref={containerRef}
			className='relative w-full sm:min-h-[500px] select-none overflow-hidden sm:rounded-[20px]'
			style={{ aspectRatio: aspectRatio }}
		>
			{/* Before Image (full width) */}
			<div className='absolute inset-0'>
				<div className='absolute top-4 left-4 bg-white/90 px-3 py-1.5 rounded-md text-sm font-medium text-gray-800 z-10 border border-[#132431] sm:border-0'>
					BEFORE
				</div>
				<Image
					src={beforeImage}
					alt={beforeAlt}
					fill
					className='object-contain'
					quality={90}
					priority
				/>
			</div>

			{/* After Image (clipped) */}
			<div
				className='absolute inset-0 overflow-hidden'
				style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
			>
				<div className='absolute top-4 right-4 bg-white/90 px-3 py-1.5 rounded-md text-sm font-medium text-gray-800 z-10 border border-[#132431] sm:border-0'>
					AFTER
				</div>
				<Image
					src={afterImage}
					alt={afterAlt}
					fill
					className='object-contain'
					quality={90}
					priority
				/>
			</div>

			{/* Slider Line and Handle */}
			<div
				className='absolute top-0 bottom-0 w-1 bg-black cursor-ew-resize'
				style={{ left: `${sliderPosition}%` }}
				onMouseDown={handleMouseDown}
				onTouchStart={handleMouseDown}
			>
				{/* Slider Handle */}
				<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center cursor-ew-resize border-2 border-black'>
					<div className='flex items-center gap-0.5 text-black'>
						<svg
							width='10'
							height='16'
							viewBox='0 0 10 16'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M8 2L2 8L8 14'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
						<svg
							width='10'
							height='16'
							viewBox='0 0 10 16'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M2 2L8 8L2 14'
								stroke='currentColor'
								strokeWidth='2'
								strokeLinecap='round'
								strokeLinejoin='round'
							/>
						</svg>
					</div>
				</div>
			</div>
		</div>
	);
}
