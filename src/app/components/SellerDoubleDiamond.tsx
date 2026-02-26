'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './SellerDoubleDiamond.module.css';

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
		body: 'We mapped existing app and web listing flows to understand how they worked in production. This revealed undocumented logic, inconsistencies, and feature parity gaps across categories.',
	},
	define: {
		label: 'Define',
		title: 'Focusing on what matters',
		body: 'We identified revenue-critical moments in ad creation and management and clarified where clarity, speed, and trust mattered most. Scope was narrowed to what would deliver measurable impact.',
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

// ─── SVG coordinate constants (viewBox 0 0 800 760) ──────────────────────
//
//  Outlined diamonds: 5% smaller (half=138), connected at (400, 380).
//  Diamond 1 — center (400,242), half=138: top (400,104) right (538,242) bottom (400,380) left (262,242)
//  Diamond 2 — center (400,518), half=138: top (400,380) right (538,518) bottom (400,656) left (262,518)
//
//  Filled diamonds: inset (half=117), same centers, rendered behind outline.
//  Filled 1: 400,125 517,242 400,359 283,242
//  Filled 2: 400,401 517,518 400,635 283,518
//
//  Connectors — horizontal at text y-level to outline edge:
//    Discover (240,90)→(400,90)  Define (560,290)→(490,290)  Develop (240,470)→(352,470)  Deliver (560,670)→(400,670)

// ─── Component ────────────────────────────────────────────────────────────

export default function SellerDoubleDiamond() {
	const wrapperRef = useRef<HTMLDivElement>(null);
	const [revealed, setRevealed] = useState(false);
	const [hoveredPhase, setHoveredPhase] = useState<PhaseId | null>(null);
	const [hoveredDiamond, setHoveredDiamond] = useState<'top' | 'bottom' | null>(null);

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
					viewBox='0 0 800 760'
					xmlns='http://www.w3.org/2000/svg'
					aria-hidden='true'
				>
				{/* Connector lines — horizontal at each text's y-level to the diamond edge */}
				{/* Discover → top vertex of diamond 1 (left, y=90) */}
				<line
					x1='240'
					y1='90'
					x2='400'
					y2='90'
					className={`${styles.connector} ${phaseConnectorClass.discover} ${isConnectorHighlighted('discover') ? styles.highlighted : ''}`}
				/>
				{/* Define → right edge of diamond 1 at y=290 (center y=235, offset=55 → x=490) */}
				<line
					x1='560'
					y1='290'
					x2='490'
					y2='290'
					className={`${styles.connector} ${phaseConnectorClass.define} ${isConnectorHighlighted('define') ? styles.highlighted : ''}`}
				/>
				{/* Develop → left edge of diamond 2 at y=470 (half=138 → x=352) */}
				<line
					x1='240'
					y1='470'
					x2='352'
					y2='470'
					className={`${styles.connector} ${phaseConnectorClass.develop} ${isConnectorHighlighted('develop') ? styles.highlighted : ''}`}
				/>
				{/* Deliver → bottom vertex of diamond 2 (right, y=670) */}
				<line
					x1='560'
					y1='670'
					x2='400'
					y2='670'
					className={`${styles.connector} ${phaseConnectorClass.deliver} ${isConnectorHighlighted('deliver') ? styles.highlighted : ''}`}
				/>

				{/* Filled diamonds — inset inside outline (half=117), behind the outlined ones */}
				<polygon
					points='400,125 517,242 400,359 283,242'
					className={styles.diamondFilled}
					aria-hidden='true'
				/>
				<polygon
					points='400,401 517,518 400,635 283,518'
					className={styles.diamondFilled}
					aria-hidden='true'
				/>

				{/* Diamond 1 — outlined, 5% smaller (half=138), connected at (400,380) */}
				<polygon
					points='400,104 538,242 400,380 262,242'
					className={`${styles.diamond} ${topDiamondHighlighted ? styles.diamondHighlighted : ''}`}
					onMouseEnter={() => setHoveredDiamond('top')}
					onMouseLeave={() => setHoveredDiamond(null)}
				/>
				{/* Horizontal divider — diamond 1 midpoint */}
				<line
					x1='262' y1='242' x2='538' y2='242'
					className={styles.diamondDivider}
				/>

				{/* Diamond 2 — outlined, 5% smaller (half=138), connected at (400,380) */}
				<polygon
					points='400,380 538,518 400,656 262,518'
					className={`${styles.diamond} ${bottomDiamondHighlighted ? styles.diamondHighlighted : ''}`}
					onMouseEnter={() => setHoveredDiamond('bottom')}
					onMouseLeave={() => setHoveredDiamond(null)}
				/>
				{/* Horizontal divider — diamond 2 midpoint */}
				<line
					x1='262' y1='518' x2='538' y2='518'
					className={styles.diamondDivider}
				/>
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
								<span className={styles.phaseLabel}>{phase.label}</span>
								<h3 className={styles.phaseTitle}>{phase.title}</h3>
								<p className={styles.phaseBody}>{phase.body}</p>
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
							<span className={styles.phaseLabel}>{phase.label}</span>
							<h3 className={styles.phaseTitle}>{phase.title}</h3>
							<p className={styles.phaseBody}>{phase.body}</p>
						</div>
					);
				})}
			</div>
		</div>
	);
}
