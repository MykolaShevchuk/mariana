'use client';

import { useEffect, useRef, useState } from 'react';

type AnimState = 'ssr' | 'hidden' | 'visible';

interface AnimateOnScrollProps {
	children: React.ReactNode;
	/** Optional delay before animating (seconds). Useful for staggering multiple items. */
	delay?: number;
	className?: string;
}

export default function AnimateOnScroll({
	children,
	delay = 0,
	className = '',
}: AnimateOnScrollProps) {
	const ref = useRef<HTMLDivElement>(null);
	const [animState, setAnimState] = useState<AnimState>('ssr');

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		const prefersReduced = window.matchMedia(
			'(prefers-reduced-motion: reduce)'
		).matches;

		if (prefersReduced) {
			setAnimState('visible');
			return;
		}

		setAnimState('hidden');

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setAnimState('visible');
					observer.unobserve(el);
				}
			},
			{ threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
		);

		observer.observe(el);
		return () => observer.disconnect();
	}, []);

	const stateClass =
		animState === 'hidden'
			? 'is-hidden'
			: animState === 'visible'
				? 'is-visible'
				: '';

	const style =
		delay > 0 && animState === 'visible'
			? { transitionDelay: `${delay}s` }
			: undefined;

	return (
		<div
			ref={ref}
			className={`animate-on-scroll ${stateClass} ${className}`.trim()}
			style={style}
		>
			{children}
		</div>
	);
}
