interface Metric {
	value: string;
	label: string;
}

interface ImpactMetricsProps {
	title?: string;
	metrics: Metric[];
	className?: string;
}

export default function ImpactMetrics({
	title = 'Impact',
	metrics,
	className = '',
}: ImpactMetricsProps) {
	return (
		<section
			className={`py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[rgba(217,217,217,0.1)] ${className}`}
		>
			<div className='max-w-6xl mx-auto'>
				<h2 className="text-black font-['Lora'] text-[32px] sm:text-[40px] lg:text-[45px] font-semibold leading-tight mb-6 sm:mb-8 lg:mb-12 pl-0 lg:pl-24">
					{title}
				</h2>
				<div className='flex flex-row items-center justify-between max-w-5xl gap-2 sm:gap-8 lg:gap-16 pl-0 lg:pl-24'>
					{metrics.map((metric, index) => (
						<div
							key={index}
							className='flex flex-col items-center gap-1 sm:gap-3 lg:gap-5 flex-1'
						>
							<div className='text-[#2463eb] text-[24px] sm:text-[48px] lg:text-[64px] font-bold leading-tight'>
								{metric.value}
							</div>
							<div className='text-[#464040] text-[12px] sm:text-[16px] lg:text-[20px] text-center leading-[16px] sm:leading-[24px]'>
								{metric.label}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
