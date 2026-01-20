export default function ContactSection() {
	return (
		<section id='contact' className='py-20 px-6'>
			<div className='max-w-4xl mx-auto text-center'>
				<h3 className="text-black font-['Lora'] text-[24px] sm:text-[28px] lg:text-[32px] font-semibold leading-tight mb-3 sm:mb-4 lg:mb-6">Let&apos;s Connect</h3>
				<p className="text-[16px] sm:text-[18px] lg:text-[20px] text-[#464040] mb-8 max-w-2xl mx-auto leading-[26px] sm:leading-[30px] lg:leading-[32px] font-['Inter'] text-pretty">
					Feel free to reach out for collaborations or just a friendly hello 😊
				</p>

				<div>
					<a
						href='mailto:marjanka.j@gmail.com'
						className='text-blue-600 text-sm sm:text-base lg:text-base font-medium hover:text-blue-700 transition-colors'
					>
						marjanka.j@gmail.com
					</a>
				</div>
			</div>
		</section>
	);
}
