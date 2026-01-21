'use client';

import { useEffect, useRef } from 'react';

interface DataPoint {
	label: string;
	value: number;
}

interface RadarChartProps {
	title?: string;
	mindset?: {
		label: string;
		text: string;
	};
	data: DataPoint[];
	maxValue?: number;
	color?: string;
	legendLabel?: string;
	width?: number;
	height?: number;
}

export default function RadarChart({
	title,
	mindset,
	data,
	maxValue = 5,
	color = '#1e7a8c',
	legendLabel = 'Service Seekers',
	width = 600,
	height = 600,
}: RadarChartProps) {
	const canvasRef = useRef<HTMLCanvasElement>(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		// Set canvas size for retina displays
		const dpr = window.devicePixelRatio || 1;
		canvas.width = width * dpr;
		canvas.height = height * dpr;
		canvas.style.width = `${width}px`;
		canvas.style.height = `${height}px`;
		ctx.scale(dpr, dpr);

		// Clear canvas
		ctx.clearRect(0, 0, width, height);

		const centerX = width / 2;
		const centerY = height / 2;
		const radius = Math.min(width, height) * 0.25;
		const numberOfPoints = data.length;
		const angleStep = (Math.PI * 2) / numberOfPoints;

		// Draw concentric circles
		ctx.strokeStyle = '#e5e7eb';
		ctx.lineWidth = 1;
		for (let i = 1; i <= maxValue; i++) {
			ctx.beginPath();
			ctx.arc(centerX, centerY, (radius / maxValue) * i, 0, Math.PI * 2);
			ctx.stroke();
		}

		// Draw radial lines (labels will be HTML elements)
		ctx.strokeStyle = '#e5e7eb';

		data.forEach((point, index) => {
			const angle = angleStep * index - Math.PI / 2; // Start from top
			const endX = centerX + Math.cos(angle) * radius;
			const endY = centerY + Math.sin(angle) * radius;

			// Draw radial line
			ctx.beginPath();
			ctx.moveTo(centerX, centerY);
			ctx.lineTo(endX, endY);
			ctx.stroke();
		});

		// Draw data polygon
		// Convert hex color to rgba for opacity
		const hexToRgba = (hex: string, alpha: number) => {
			const r = parseInt(hex.slice(1, 3), 16);
			const g = parseInt(hex.slice(3, 5), 16);
			const b = parseInt(hex.slice(5, 7), 16);
			return `rgba(${r}, ${g}, ${b}, ${alpha})`;
		};
		ctx.fillStyle = hexToRgba(color, 0.25); // 25% opacity
		ctx.strokeStyle = color;
		ctx.lineWidth = 2.5;

		ctx.beginPath();
		data.forEach((point, index) => {
			const angle = angleStep * index - Math.PI / 2;
			const distance = (radius / maxValue) * point.value;
			const x = centerX + Math.cos(angle) * distance;
			const y = centerY + Math.sin(angle) * distance;

			if (index === 0) {
				ctx.moveTo(x, y);
			} else {
				ctx.lineTo(x, y);
			}
		});
		ctx.closePath();
		ctx.fill();
		ctx.stroke();

		// Draw data points
		ctx.fillStyle = color;
		data.forEach((point, index) => {
			const angle = angleStep * index - Math.PI / 2;
			const distance = (radius / maxValue) * point.value;
			const x = centerX + Math.cos(angle) * distance;
			const y = centerY + Math.sin(angle) * distance;

			ctx.beginPath();
			ctx.arc(x, y, 5, 0, Math.PI * 2);
			ctx.fill();
		});
	}, [data, maxValue, color, width, height]);

	// Calculate label positions
	const radius = Math.min(width, height) * 0.25;
	const numberOfPoints = data.length;
	const angleStep = (Math.PI * 2) / numberOfPoints;
	const centerX = width / 2;
	const centerY = height / 2;
	const labelDistance = radius + 45;

	const getLabelPosition = (index: number) => {
		const angle = angleStep * index - Math.PI / 2; // Start from top
		const x = centerX + Math.cos(angle) * labelDistance;
		const y = centerY + Math.sin(angle) * labelDistance;
		return { x, y, angle };
	};

	const getValueLabelPosition = (value: number) => {
		const distance = (radius / maxValue) * value;
		return {
			x: centerX,
			y: centerY - distance - 5,
		};
	};

	return (
		<div className='flex flex-col items-center'>
			{/* Mindset Card or Title */}
			{mindset ? (
				<div 
					className='px-6 py-4 mb-1 mt-0 text-left w-full max-w-md'
				>
					<div className='text-[#464040]/70 text-[12px] font-medium mb-1'>
						{mindset.label}
					</div>
					<div className='text-[#464040] text-[20px] sm:text-[24px] font-bold leading-tight'>
						{mindset.text}
					</div>
				</div>
			) : title ? (
				<h3 className="text-black font-['Lora'] text-[24px] sm:text-[28px] lg:text-[32px] font-semibold text-center mb-8 mt-4">
					{title}
				</h3>
			) : null}

		{/* Canvas with overlay labels */}
		<div className='relative inline-block -mt-10' style={{ width: `${width}px`, height: `${height}px` }}>
				<canvas 
					ref={canvasRef} 
					className='max-w-full block'
					style={{ width: `${width}px`, height: `${height}px` }}
				/>

				{/* Value labels on concentric circles */}
				{Array.from({ length: maxValue }, (_, i) => i + 1).map((value) => {
					const pos = getValueLabelPosition(value);
					return (
						<div
							key={value}
							className='absolute text-[#9ca3af] text-[14px] font-["Inter"] pointer-events-none z-10'
							style={{
								left: `${pos.x}px`,
								top: `${pos.y}px`,
								transform: 'translate(-50%, -50%)',
							}}
						>
							{value}
						</div>
					);
				})}

				{/* Data point labels */}
				{data.map((point, index) => {
					const pos = getLabelPosition(index);
					const words = point.label.split(' ');

					return (
						<div
							key={index}
							className='absolute text-[#464040] text-[14px] font-["Inter"] pointer-events-none z-10'
							style={{
								left: `${pos.x}px`,
								top: `${pos.y}px`,
								transform: 'translate(-50%, -50%)',
								textAlign: 'center',
							}}
						>
							{words.length >= 3 ? (
								<div className='leading-[20px]'>
									{words.length === 3 ? (
										<>
											<div>{words[0] + ' ' + words[1]}</div>
											<div>{words[2]}</div>
										</>
									) : words.length === 4 ? (
										<>
											<div>{words[0] + ' ' + words[1]}</div>
											<div>{words[2] + ' ' + words[3]}</div>
										</>
									) : (
										<>
											<div>{words.slice(0, Math.ceil(words.length / 2)).join(' ')}</div>
											<div>{words.slice(Math.ceil(words.length / 2)).join(' ')}</div>
										</>
									)}
								</div>
							) : words.length === 2 ? (
								<div className='leading-[20px]'>
									<div>{words[0]}</div>
									<div>{words[1]}</div>
								</div>
							) : (
								point.label
							)}
						</div>
					);
				})}
			</div>
		</div>
	);
}
