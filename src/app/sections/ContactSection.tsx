export default function ContactSection() {
	return (
		<section id='contact' className='py-20 px-6'>
			<div className='max-w-4xl mx-auto text-center'>
				<h2 className='text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6'>Let&apos;s Connect</h2>
				<p className='text-sm sm:text-base md:text-lg text-gray-900 mb-8 max-w-2xl mx-auto'>
					Feel free to reach out for collaborations or just a friendly hello 😊
				</p>

				<div>
					<a
						href='mailto:marjanka.j@gmail.com'
						className='text-blue-600 text-sm sm:text-base md:text-lg font-medium hover:text-blue-700 transition-colors'
					>
						marjanka.j@gmail.com
					</a>
				</div>
			</div>
		</section>
	);
}
