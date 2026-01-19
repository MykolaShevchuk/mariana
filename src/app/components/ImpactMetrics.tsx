interface Metric {
	value: string;
	label: string;
}

interface ImpactMetricsProps {
	title?: string;
	subtitle?: string;
	description?: string;
	metrics: Metric[];
	className?: string;
}

function MetricCard({ value, label }: Metric) {
	return (
		<div className='flex flex-col items-start gap-2 sm:gap-3 lg:gap-4 flex-1 p-3 sm:p-4 lg:p-6 border-2 border-gray-500 rounded-xl'>
			<div className="text-white font-['Lora'] text-[32px] sm:text-[48px] lg:text-[64px] font-normal leading-none">
				{value}
			</div>
			<div className='text-gray-300 text-[14px] sm:text-[16px] lg:text-[20px] leading-[20px] sm:leading-[24px] lg:leading-[28px]'>
				{label}
			</div>
		</div>
	);
}

export default function ImpactMetrics({
	title = 'Impact',
	subtitle,
	description,
	metrics,
	className = '',
}: ImpactMetricsProps) {
	return (
		<section
			className={`py-12 sm:py-16 px-4 sm:px-6 lg:px-8 ${className}`}
			style={{ backgroundColor: '#132431' }}
		>
			<div className='max-w-6xl mx-auto'>
				{title && (
					<h2 className="text-white font-['Lora'] text-[32px] sm:text-[40px] lg:text-[45px] font-semibold leading-tight mb-8 sm:mb-10 lg:mb-12 text-center">
						{title}
					</h2>
				)}
				{subtitle && (
					<div className='max-w-[800px] mx-auto text-left mb-8 sm:mb-10 lg:mb-12'>
						<h3 className="text-white font-['Lora'] text-[24px] sm:text-[28px] lg:text-[32px] font-semibold leading-tight mb-3 sm:mb-4 lg:mb-6">
							{subtitle}
						</h3>
						{description && (
							<p className="text-white/90 text-[16px] sm:text-[18px] lg:text-[20px] leading-[26px] sm:leading-[30px] lg:leading-[32px] font-['Inter']">
								{description}
							</p>
						)}
					</div>
				)}
				<div className='grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 max-w-5xl mx-auto'>
					{metrics.map((metric, index) => (
						<MetricCard key={index} value={metric.value} label={metric.label} />
					))}
				</div>
			</div>
		</section>
	);
}
