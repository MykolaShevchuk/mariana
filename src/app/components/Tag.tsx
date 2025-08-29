interface TagProps {
	children: React.ReactNode;
	className?: string;
}

export default function Tag({ children, className = '' }: TagProps) {
	return (
		<span className={`px-3 py-1 bg-gray-50 text-gray-700 text-xs sm:text-sm lg:text-base rounded-lg border border-gray-200 ${className}`}>
			{children}
		</span>
	);
}
