'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './MilestonesTimeline.module.css';

// ─── Types ────────────────────────────────────────────────────────────────

type MilestoneItem = {
	id: string;
	label: string;
	eyebrow?: string;
	body: string;
	note?: string;
	annotation?: {
		text: string;
		rotate?: number;
		top?: string;
		right?: string;
		bottom?: string;
		left?: string;
	};
	isPlaceholder?: boolean;
};

// ─── Data ─────────────────────────────────────────────────────────────────

const MILESTONES: MilestoneItem[] = [
	{
		id: 'foundation',
		label: 'Foundation',
		eyebrow: 'Phase 01',
		body: 'We audited the legacy app, questioned old patterns, and explored how modern design systems scale.',
	},
	{
		id: 'direction',
		label: 'Direction',
		eyebrow: 'Phase 02',
		body: 'I ran usability testing to select a new typeface and explored design tokens. We aligned early with engineering.',
	},
	{
		id: 'system',
		label: 'Design System',
		eyebrow: 'Phase 03',
		body: 'I implemented a token-based design system to support the greenfield rebuild. It became a shared language for design and development.',
	},
	{
		id: 'poc',
		label: 'POC',
		eyebrow: 'Phase 04',
		body: 'We built a proof of concept connecting Figma tokens to iOS and Android. Tokens flowed into the apps, passed tests, and dark mode emerged naturally.',
		note: "Android lead: 'most interesting project in years'",
		annotation: {
			text: 'POC worked ✓',
			rotate: -4,
			top: '36px',
			right: '80px',
		},
	},
	{
		id: 'seller-journeys',
		label: 'Seller Journeys',
		eyebrow: 'Phase 05',
		body: 'I joined the Placing squad, mapped undocumented flows, simplified ad creation and management, and improved revenue-critical paths.',
	},
	{
		id: 'double-diamond',
		label: 'Research',
		eyebrow: 'Phase 05',
		body: '',
		isPlaceholder: true,
	},
	{
		id: 'growth',
		label: 'Growth',
		eyebrow: 'Phase 06',
		body: 'During the redesign, I completed a Mobile Apps Design Advanced course in evenings and weekends. I applied new learnings directly to the product as the rebuild progressed.',
		note: 'Learning in motion',
	},
	{
		id: 'webview-shift',
		label: 'Web-view shift',
		eyebrow: 'Phase 07',
		body: 'As development progressed, parts of the seller flow moved to WebView to meet delivery deadlines. While it meant letting go of our original plan, we focused on what mattered most: shipping a stable solution on time.',
		note: 'Joint effort: app + web teams',
		annotation: {
			text: 'App + web collaboration',
			rotate: 3,
			bottom: '28px',
			right: '60px',
		},
	},
	{
		id: 'validation',
		label: 'Validation',
		eyebrow: 'Phase 08',
		body: 'We ran 6 Android and 6 iOS moderated sessions on staging. Users gave a green light and helped surface issues we fixed before release.',
		annotation: {
			text: 'Manual QA step',
			rotate: -2,
			top: '36px',
			left: '80px',
		},
	},
	{
		id: 'launch',
		label: 'Launch',
		eyebrow: 'Phase 09',
		body: 'The result was a more consistent and scalable mobile experience built on stronger foundations and ready for future growth.',
	},
];

// ─── ContentBlock sub-component ───────────────────────────────────────────

type AnimState = 'ssr' | 'hidden' | 'visible';

function ContentBlock({
	milestone,
	align,
}: {
	milestone: MilestoneItem;
	align: 'left' | 'right';
}) {
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

	const animClass =
		animState === 'hidden'
			? styles.cbHidden
			: animState === 'visible'
				? styles.cbVisible
				: '';

	const alignClass = align === 'left' ? styles.cbLeft : styles.cbRight;

	if (milestone.isPlaceholder) {
		return (
			<div ref={ref} className={`${styles.contentBlock} ${animClass} ${alignClass}`}>
				<div className={styles.placeholderBox}>
					<span className={styles.placeholderText}>
						Double Diamond — coming soon
					</span>
				</div>
			</div>
		);
	}

	return (
		<div ref={ref} className={`${styles.contentBlock} ${animClass} ${alignClass}`}>
			<p className={styles.body}>{milestone.body}</p>
			{milestone.note && (
				<p className={styles.note}>{milestone.note}</p>
			)}
		</div>
	);
}

// ─── Main component ───────────────────────────────────────────────────────

export default function MilestonesTimeline({
	stripeColor = '#5CE00B',
}: {
	stripeColor?: string;
}) {
	return (
		<section className={styles.section}>
			<div className={styles.inner}>
				{/* Section header */}
				<div className={styles.header}>
					<h2 className={styles.title}>Milestones</h2>
					<p className={styles.subtitle}>Long story short</p>
				</div>

				{/* Timeline */}
				<div
					className={styles.timeline}
					style={{ '--stripe-color': stripeColor } as React.CSSProperties}
				>
					{/* Decorative vertical stripe */}
					<div className={styles.stripe} aria-hidden='true' />

					{MILESTONES.map((milestone, index) => {
						// Even indices → content on right; odd → content on left
						const isRight = index % 2 === 0;

						return (
							<div key={milestone.id} className={styles.row}>
								{/* Left column ─ content for LEFT rows, empty otherwise */}
								<div
									className={`${styles.colLeft} ${isRight ? styles.colEmpty : ''}`}
								>
									{!isRight && (
										<ContentBlock milestone={milestone} align='right' />
									)}
								</div>

								{/* Center column ─ label centered on the yellow stripe */}
								<div className={styles.stripeCol}>
									<div className={styles.stripeLabel}>
										<span className={styles.milestoneLabel}>
											{milestone.label}
										</span>
									</div>
								</div>

								{/* Right column ─ content for RIGHT rows, empty otherwise */}
								<div
									className={`${styles.colRight} ${!isRight ? styles.colEmpty : ''}`}
								>
									{isRight && (
										<ContentBlock milestone={milestone} align='left' />
									)}
								</div>

								{/* Floating annotation */}
								{milestone.annotation && (
									<div
										className={styles.annotation}
										aria-hidden='true'
										style={{
											transform: `rotate(${milestone.annotation.rotate ?? 0}deg)`,
											top: milestone.annotation.top,
											right: milestone.annotation.right,
											bottom: milestone.annotation.bottom,
											left: milestone.annotation.left,
										}}
									>
										{milestone.annotation.text}
									</div>
								)}
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
