'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	return (
		<nav className='w-full bg-gray-50 backdrop-blur-md z-50'>
			<div className='max-w-6xl mx-auto px-6 py-4'>
				<div className='flex items-center justify-end'>
					{/* Desktop Navigation */}
					<div className='hidden md:flex space-x-8'>
						<a href='#work' className='text-gray-600 hover:text-gray-900 transition-colors'>
							Work
						</a>
						<a href='#about' className='text-gray-600 hover:text-gray-900 transition-colors'>
							About
						</a>
						<a href='#experience' className='text-gray-600 hover:text-gray-900 transition-colors'>
							Experience
						</a>
						<a href='#contact' className='text-gray-600 hover:text-gray-900 transition-colors'>
							Contact
						</a>
					</div>

					{/* Mobile Menu Button */}
					<button
						className='md:hidden p-2'
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						aria-label='Toggle mobile menu'
					>
						<div className='w-6 h-6 flex items-center justify-center'>
							{isMobileMenuOpen ? (
								<X className='w-5 h-5 text-gray-600' />
							) : (
								<Menu className='w-5 h-5 text-gray-600' />
							)}
						</div>
					</button>
				</div>

				{/* Mobile Navigation */}
				<div
					className={`md:hidden transition-all duration-300 ease-in-out ${
						isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
					}`}
				>
					<div className='py-4 space-y-4'>
						<a
							href='#work'
							className='block text-gray-600 hover:text-gray-900 transition-colors'
							onClick={() => setIsMobileMenuOpen(false)}
						>
							Work
						</a>
						<a
							href='#about'
							className='block text-gray-600 hover:text-gray-900 transition-colors'
							onClick={() => setIsMobileMenuOpen(false)}
						>
							About
						</a>
						<a
							href='#experience'
							className='block text-gray-600 hover:text-gray-900 transition-colors'
							onClick={() => setIsMobileMenuOpen(false)}
						>
							Experience
						</a>
						<a
							href='#contact'
							className='block text-gray-600 hover:text-gray-900 transition-colors'
							onClick={() => setIsMobileMenuOpen(false)}
						>
							Contact
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
}
