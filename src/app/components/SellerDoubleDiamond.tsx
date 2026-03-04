'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './SellerDoubleDiamond.module.css';
import PhoneMockup from './PhoneMockup';

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
			className={styles.phaseVideo}
			src={src}
			muted
			playsInline
			loop
			aria-label="User flows: placing"
		/>
	);
}

// ─── Types ────────────────────────────────────────────────────────────────

type PhaseId = 'discover' | 'define' | 'develop' | 'deliver';

type PhaseData = {
	label: string;
	title: string;
	body: string;
};

// ─── Data ─────────────────────────────────────────────────────────────────

const PHASES: Record<PhaseId, PhaseData> = {
	discover: {
		label: 'Discover',
		title: 'Mapping the reality',
		body: 'We mapped app and web listing flows in production and uncovered undocumented logic and inconsistencies.',
	},
	define: {
		label: 'Define',
		title: 'Defining priorities',
		body: 'Using a customer journey map, we identified friction points and focused on simplifying the most critical steps.',
	},
	develop: {
		label: 'Develop',
		title: 'Designing a clearer flow',
		body: 'We redesigned listing creation and management journeys, simplifying structure and reducing friction. The new design system enabled consistent patterns across categories and surfaces.',
	},
	deliver: {
		label: 'Deliver',
		title: 'Validating before release',
		body: 'We tested the updated journeys through moderated usability sessions and refined based on feedback. The goal was confidence before launch, not perfection.',
	},
};

const PHASE_ORDER: PhaseId[] = ['discover', 'define', 'develop', 'deliver'];

// ─── Static class lookups (keeps CSS Modules tree-shakeable) ──────────────

const phasePositionClass: Record<PhaseId, string> = {
	discover: styles.discoverPhase,
	define: styles.definePhase,
	develop: styles.developPhase,
	deliver: styles.deliverPhase,
};

const phaseInnerClass: Record<PhaseId, string> = {
	discover: styles.discoverInner,
	define: styles.defineInner,
	develop: styles.developInner,
	deliver: styles.deliverInner,
};

const phaseConnectorClass: Record<PhaseId, string> = {
	discover: styles.discoverConnector,
	define: styles.defineConnector,
	develop: styles.developConnector,
	deliver: styles.deliverConnector,
};

// ─── SVG coordinate constants (viewBox 0 0 800 920) ──────────────────────
//
//  Outlined diamonds: 5% smaller (half=138), connected at (400,380).
//  Diamond 1 — center (400,242), half=138: top (400,104) right (538,242) bottom (400,380) left (262,242)
//  Diamond 2 — center (400,518), half=138: top (400,380) right (538,518) bottom (400,656) left (262,518)
//  ViewBox is taller than the diamonds (920 vs 760) to give content room below.
//
//  Filled diamonds: inset (half=117), same centers, rendered behind outline.
//  Filled 1: 400,125 517,242 400,359 283,242
//  Filled 2: 400,401 517,518 400,635 283,518
//
//  Connectors — horizontal at text y-level to outline edge:
//    Discover (240,90)→(400,90)  Define (560,290)→(490,290)  Develop (240,470)→(352,470)  Deliver (560,670)→(400,670)

// ─── Component ────────────────────────────────────────────────────────────

// ─── Discover modal (image + video) ─────────────────────────────────────────
function DiscoverModal({
	open,
	onClose,
}: {
	open: boolean;
	onClose: () => void;
}) {
	const videoRef = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		if (open) {
			videoRef.current?.play().catch(() => {});
		} else {
			videoRef.current?.pause();
		}
	}, [open]);

	useEffect(() => {
		if (!open) return;
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onClose();
		};
		window.addEventListener('keydown', handleKeyDown);
		return () => window.removeEventListener('keydown', handleKeyDown);
	}, [open, onClose]);

	if (!open) return null;

	return (
		<div
			className={styles.discoverModalOverlay}
			onClick={(e) => {
				if (e.target === e.currentTarget) onClose();
			}}
			role="dialog"
			aria-modal="true"
			aria-label="Discover: user flows flowchart and video"
		>
			<button
				type="button"
				className={styles.discoverModalClose}
				onClick={onClose}
				aria-label="Close"
			>
				×
			</button>
			<div className={styles.discoverModalContent}>
				<img
					src="/user-flows-placing.png?v=3"
					alt="User flow: Sell flow (login, location selected, draft)"
					className={styles.discoverModalImage}
				/>
				<video
					ref={videoRef}
					src="/https://res.cloudinary.com/dueeimpr6/video/upload/v1772666935/user-flows-placing_w9g1xt.mov"
					className={styles.discoverModalVideo}
					controls
					playsInline
					loop
					muted
					aria-label="User flows: placing"
				/>
			</div>
		</div>
	);
}

export default function SellerDoubleDiamond() {
	const wrapperRef = useRef<HTMLDivElement>(null);
	const [revealed, setRevealed] = useState(false);
	const [hoveredPhase, setHoveredPhase] = useState<PhaseId | null>(null);
	const [hoveredDiamond, setHoveredDiamond] = useState<'top' | 'bottom' | null>(null);
	const [discoverModalOpen, setDiscoverModalOpen] = useState(false);

	useEffect(() => {
		const el = wrapperRef.current;
		if (!el) return;

		const prefersReduced = window.matchMedia(
			'(prefers-reduced-motion: reduce)'
		).matches;

		if (prefersReduced) {
			setRevealed(true);
			return;
		}

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setRevealed(true);
					observer.disconnect();
				}
			},
			{ threshold: 0.1 }
		);

		observer.observe(el);
		return () => observer.disconnect();
	}, []);

	// Connector / diamond highlight logic
	const isConnectorHighlighted = (phase: PhaseId): boolean =>
		hoveredPhase === phase ||
		(hoveredDiamond === 'top' &&
			(phase === 'discover' || phase === 'define')) ||
		(hoveredDiamond === 'bottom' &&
			(phase === 'develop' || phase === 'deliver'));

	const topDiamondHighlighted =
		hoveredPhase === 'discover' ||
		hoveredPhase === 'define' ||
		hoveredDiamond === 'top';

	const bottomDiamondHighlighted =
		hoveredPhase === 'develop' ||
		hoveredPhase === 'deliver' ||
		hoveredDiamond === 'bottom';

	const wrapperClass = `${styles.wrapper} ${revealed ? styles.revealed : ''}`;

	return (
		<div
			ref={wrapperRef}
			className={wrapperClass}
			role='img'
			aria-label='Double Diamond seller journeys process: Discover, Define, Develop, Deliver'
		>
			{/* ── Desktop: SVG + absolutely-positioned phase blocks; mobile: diagram on stripe, phases right ─────────── */}
			<div className={styles.desktopLayout}>
				<div className={styles.diagramColumn}>
			<svg
				className={styles.svg}
				viewBox='0 0 800 920'
				xmlns='http://www.w3.org/2000/svg'
				aria-hidden='true'
			>
			<defs>
				{/* Spark glow: soft #B0F4AC halo around a bright white centre */}
				<filter id='sparkGlow' x='-200%' y='-200%' width='500%' height='500%'>
					<feGaussianBlur in='SourceGraphic' stdDeviation='7' result='blur' />
					<feColorMatrix
						in='blur'
						type='matrix'
						values='0 0 0 0 0.69  0 0 0 0 0.96  0 0 0 0 0.67  0 0 0 1.4 0'
						result='coloredBlur'
					/>
					<feMerge>
						<feMergeNode in='coloredBlur' />
						<feMergeNode in='SourceGraphic' />
					</feMerge>
				</filter>
			</defs>
			<g className={styles.diamondsGroup}>
			{/* Filled diamonds — connection at (400,520), between Discover/Define and Develop/Deliver */}
			<polygon
				points='400,265 517,382 400,499 283,382'
				className={styles.diamondFilled}
				aria-hidden='true'
			/>
			<polygon
				points='400,541 517,658 400,775 283,658'
				className={styles.diamondFilled}
				aria-hidden='true'
			/>

			{/* Diamond 1 — outlined, connection at (400,520) */}
			<polygon
				points='400,244 538,382 400,520 262,382'
				className={`${styles.diamond} ${topDiamondHighlighted ? styles.diamondHighlighted : ''}`}
				onMouseEnter={() => setHoveredDiamond('top')}
				onMouseLeave={() => setHoveredDiamond(null)}
			/>
			<line
				x1='262' y1='382' x2='538' y2='382'
				className={styles.diamondDivider}
			/>

			{/* Diamond 2 — outlined, connection at (400,520) */}
			<polygon
				points='400,520 538,658 400,796 262,658'
				className={`${styles.diamond} ${bottomDiamondHighlighted ? styles.diamondHighlighted : ''}`}
				onMouseEnter={() => setHoveredDiamond('bottom')}
				onMouseLeave={() => setHoveredDiamond(null)}
			/>
			<line
				x1='262' y1='658' x2='538' y2='658'
				className={styles.diamondDivider}
			/>

			{/* Animated spark — travels the full diamond outline */}
			<g className={styles.sparkGroup} aria-hidden='true' filter='url(#sparkGlow)'>
				<circle r='3' className={styles.spark}>
					<animateMotion
						dur='18s'
						repeatCount='indefinite'
						calcMode='linear'
						path='M 400,244 L 538,382 L 400,520 L 538,658 L 400,796 L 262,658 L 400,520 L 262,382 Z'
					/>
				</circle>
			</g>
			</g>
			</svg>
				</div>

				{/* Phase text blocks */}
				{PHASE_ORDER.map((id) => {
					const phase = PHASES[id];
					return (
						<div
							key={id}
							className={`${styles.phase} ${phasePositionClass[id]}`}
							onMouseEnter={() => setHoveredPhase(id)}
							onMouseLeave={() => setHoveredPhase(null)}
						>
							<div className={`${styles.phaseInner} ${phaseInnerClass[id]}`}>
								<div className={styles.phaseText}>
									<span className={styles.phaseLabel}>{phase.label}</span>
									<h3 className={styles.phaseTitle}>{phase.title}</h3>
									<p className={styles.phaseBody}>{phase.body}</p>
								</div>
								{id === 'discover' && (
									<button
										type="button"
										className={styles.phaseImageButton}
										onClick={() => setDiscoverModalOpen(true)}
										aria-label="Enlarge: user flows flowchart and video"
									>
										<img
											src="/user-flows-placing.png?v=3"
											alt="User flow: Sell flow (login, location selected, draft)"
											className={styles.phaseImage}
										/>
									</button>
								)}
								{id === 'define' && (
									<img
										src="/cjm-sellers.png?v=2"
										alt="Seller apps customer journey map: Create Account and Sign In flows, emotions, JTBD, pain points and conversion funnels"
										className={styles.phaseImage}
									/>
								)}
								{id === 'develop' && (
									<PhoneMockup src="https://res.cloudinary.com/dueeimpr6/video/upload/v1772666928/post-ad-flow_ck6f9r.mov" type="video" alt="Post ad flow walkthrough" />
								)}
								{id === 'deliver' && (
									<div className={styles.validationImages}>
										<img src="/validation-testing-grid.png" alt="User feedback from validation testing: participant quotes and video thumbnails by platform" className={styles.validationImage} />
									</div>
								)}
							</div>
						</div>
					);
				})}
			</div>

			{/* ── Mobile: simple stacked list ───────────────────────────────── */}
			<div className={styles.mobileLayout} aria-hidden='false'>
				{PHASE_ORDER.map((id) => {
					const phase = PHASES[id];
					return (
						<div key={`m-${id}`} className={styles.mobilePhase}>
							<div className={styles.phaseText}>
								<span className={styles.phaseLabel}>{phase.label}</span>
								<h3 className={styles.phaseTitle}>{phase.title}</h3>
								<p className={styles.phaseBody}>{phase.body}</p>
							</div>
							{id === 'discover' && (
								<button
									type="button"
									className={styles.phaseImageButton}
									onClick={() => setDiscoverModalOpen(true)}
									aria-label="Enlarge: user flows flowchart and video"
								>
									<img
										src="/user-flows-placing.png?v=3"
										alt="User flow: Sell flow (login, location selected, draft)"
										className={styles.phaseImage}
									/>
								</button>
							)}
							{id === 'define' && (
								<img
									src="/cjm-sellers.png?v=2"
									alt="Seller apps customer journey map: Create Account and Sign In flows, emotions, JTBD, pain points and conversion funnels"
									className={styles.phaseImage}
								/>
							)}
						{id === 'develop' && (
							<PhoneMockup src="https://res.cloudinary.com/dueeimpr6/video/upload/v1772666928/post-ad-flow_ck6f9r.mov" type="video" alt="Post ad flow walkthrough" />
						)}
						{id === 'deliver' && (
							<div className={styles.validationImages}>
								<img src="/validation-testing-grid.png" alt="User feedback from validation testing: participant quotes and video thumbnails by platform" className={styles.validationImage} />
							</div>
						)}
						</div>
					);
				})}
			</div>

			<DiscoverModal
				open={discoverModalOpen}
				onClose={() => setDiscoverModalOpen(false)}
			/>
		</div>
	);
}
