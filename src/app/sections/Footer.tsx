export default function Footer() {
	return (
		<footer className='py-12 px-6 border-t border-gray-100 bg-gray-50'>
			<div className='max-w-4xl mx-auto text-center'>
				<p className='text-sm sm:text-base lg:text-base text-gray-600'>
					© {new Date().getFullYear()} Mariana Shevchuk.
					<br className='block sm:hidden' /> Designed and built with care.
				</p>
			</div>
		</footer>
	);
}
