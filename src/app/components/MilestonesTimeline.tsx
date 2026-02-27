'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './MilestonesTimeline.module.css';
import SellerDoubleDiamond from './SellerDoubleDiamond';
import DesignTokenFlowDiagram from './DesignTokenFlowDiagram';

// ─── Autoplay video when in viewport ───────────────────────────────────────

function AutoplayInViewVideo({ src }: { src: string }) {
	const videoRef = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		const video = videoRef.current;
		if (!video) return;

		video.playbackRate = 0.5;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					video.playbackRate = 0.5;
					video.play().catch(() => {});
				} else {
					video.pause();
				}
			},
			{ threshold: 0.25, rootMargin: '0px 0px -10% 0px' }
		);

		observer.observe(video);
		return () => observer.disconnect();
	}, []);

	return (
		<video
			ref={videoRef}
			className={styles.foundationVideo}
			src={src}
			muted
			playsInline
			loop
			aria-label="Foundations phase overview"
		/>
	);
}

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
		body: 'I audited the legacy app, questioned old patterns, and explored how modern design systems scale.',
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
		body: '', // content rendered by SellerDoubleDiamond below this row
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
	stripeColor = '#B0F4AC',
}: {
	stripeColor?: string;
}) {
	return (
		<section className={styles.section}>
			<div className={styles.inner}>
				{/* Section header */}
				<div className={styles.header}>
					<h2 className={styles.title}>Long story short</h2>
					<p className={styles.subtitle}>Milestones</p>
				</div>

				{/* Timeline */}
				<div
					className={styles.timeline}
					style={{ '--stripe-color': stripeColor } as React.CSSProperties}
				>
					{/* Decorative vertical stripe (desktop only) */}
					<div className={styles.stripe} aria-hidden='true' />

					{/* Top: Foundation → POC. Mobile: stripe after POC content only; turn-right at bottom. */}
					<div className={styles.timelineSectionTop}>
						<div className={styles.stripeSegmentMobile} data-segment='top' aria-hidden='true' />
						<div className={styles.stripeSegmentMobile} data-segment='turn-right' aria-hidden='true' />
						{/* Foundation: first block (I audited...) on the right, second block (I questioned...) on the left */}
						{(() => {
							const milestone = MILESTONES[0];
							return (
								<>
									{/* Row 1: Foundation label, first block on the right */}
									<div key={`${milestone.id}-1`} className={styles.row}>
										<div className={`${styles.colLeft} ${styles.colEmpty}`} />
										<div className={styles.stripeCol}>
											<div className={styles.stripeLabel}>
												<h3 className={styles.milestoneLabel}>{milestone.label}</h3>
											</div>
										</div>
										<div className={styles.colRight}>
											<div className={styles.foundationContent}>
												<div className={styles.foundationBlock}>
													<p className={styles.body}>I audited the legacy app.</p>
													<img
														src="/legacy-app.png"
														alt="Legacy Gumtree app screens showing mattress and car listings"
														className={styles.foundationImage}
													/>
												</div>
											</div>
										</div>
									</div>
									{/* Row 2: second block on the left, stripe continues (no label) */}
									<div key={`${milestone.id}-2`} className={styles.row}>
										<div className={styles.colLeft}>
											<div className={`${styles.foundationContent} ${styles.foundationContentLeft}`}>
												<div className={styles.foundationBlock}>
													<p className={styles.body}>
														I questioned old patterns, and explored how modern design systems scale.
													</p>
													<AutoplayInViewVideo src="/foundations.mov" />
												</div>
											</div>
										</div>
										<div className={styles.stripeCol}>
											<div className={styles.stripeLabel} aria-hidden="true" />
										</div>
										<div className={`${styles.colRight} ${styles.colEmpty}`} />
									</div>
								</>
							);
						})()}
						{MILESTONES.slice(1, 4).map((milestone, index) => {
							const isRight = index % 2 === 0;
							const hasContent = Boolean(
								(milestone.body && milestone.body.trim()) ||
									milestone.note ||
									milestone.isPlaceholder
							);
							const isDesignSystem = milestone.id === 'system';
							const isPoc = milestone.id === 'poc';
							const hasMedia = isDesignSystem || isPoc;
							return (
								<div key={milestone.id} className={styles.row}>
									<div
										className={`${styles.colLeft} ${isRight || !hasContent ? styles.colEmpty : ''}`}
									>
										{!isRight && hasContent && (
											<div className={hasMedia ? styles.milestoneWithMedia : undefined}>
												<ContentBlock milestone={milestone} align='right' />
												{isDesignSystem && (
													<img
														src="/tokens-studio-design-system.png"
														alt="Design system documentation: Tokens Studio for Figma with colour tokens, plus typography and border radius specs"
														className={styles.tokensStudioImage}
													/>
												)}
											</div>
										)}
									</div>
									<div className={styles.stripeCol}>
										<div className={styles.stripeLabel}>
											<h3 className={styles.milestoneLabel}>{milestone.label}</h3>
										</div>
									</div>
									<div
										className={`${styles.colRight} ${!isRight || !hasContent ? styles.colEmpty : ''}`}
									>
										{isRight && hasContent && (
											<div className={hasMedia ? styles.milestoneWithMedia : undefined}>
												<ContentBlock milestone={milestone} align='left' />
												{isPoc && <DesignTokenFlowDiagram />}
											</div>
										)}
									</div>
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

					{/* Middle: Seller Journeys + Double Diamond. Mobile: center line behind diamonds; turn-left before Growth. */}
					<div className={styles.timelineSectionMiddle}>
						<div className={styles.stripeSegmentMobile} data-segment='down-d1' aria-hidden='true' />
						<div className={styles.stripeSegmentMobile} data-segment='down-d2' aria-hidden='true' />
						<div className={styles.stripeSegmentMobile} data-segment='turn-left' aria-hidden='true' />
						<div className={styles.timelineMiddleContent}>
							<div className={`${styles.row} ${styles.rowSellerJourneys}`}>
								<div className={`${styles.colLeft} ${styles.colEmpty}`} />
								<div className={styles.stripeCol}>
									<div className={styles.stripeLabel}>
										<h3 className={styles.milestoneLabel}>Seller Journeys</h3>
									</div>
								</div>
								<div className={`${styles.colRight} ${styles.colEmpty}`} />
							</div>
							<div className={styles.rowFull}>
								<SellerDoubleDiamond />
							</div>
						</div>
					</div>

					{/* Bottom: Growth → Launch. Mobile: stripe from top of section (no cross over text). */}
					<div className={styles.timelineSectionBottom}>
						<div className={styles.stripeSegmentMobile} data-segment='bottom' aria-hidden='true' />
						{MILESTONES.slice(5).map((milestone, index) => {
							const globalIndex = index + 5;
							const isRight = globalIndex % 2 === 0;
							const hasContent = Boolean(
								(milestone.body && milestone.body.trim()) ||
									milestone.note ||
									milestone.isPlaceholder
							);
							const isGrowth = milestone.id === 'growth';
							const isValidation = milestone.id === 'validation';
							const hasMedia = isGrowth || isValidation;
							return (
								<div key={milestone.id} className={styles.row}>
									<div
										className={`${styles.colLeft} ${isRight || !hasContent ? styles.colEmpty : ''}`}
									>
										{!isRight && hasContent && (
											<div className={hasMedia ? styles.milestoneWithMedia : undefined}>
												<ContentBlock milestone={milestone} align='right' />
												{isGrowth && (
													<img
														src="/certificate-mobile-interfaces.png"
														alt="Mobile Interfaces Advanced Course certificate from Creative & Tech Online Institute"
														className={styles.certificateImage}
													/>
												)}
												{isValidation && (
													<img
														src="/validation-usability-testing.png"
														alt="Usability testing: Sell Your Item promote ad screen with participant video"
														className={styles.timelineImage}
													/>
												)}
											</div>
										)}
									</div>
									<div className={styles.stripeCol}>
										<div className={styles.stripeLabel}>
											<h3 className={styles.milestoneLabel}>{milestone.label}</h3>
										</div>
									</div>
									<div
										className={`${styles.colRight} ${!isRight || !hasContent ? styles.colEmpty : ''}`}
									>
										{isRight && hasContent && (
											<ContentBlock milestone={milestone} align='left' />
										)}
									</div>
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
			</div>
		</section>
	);
}
