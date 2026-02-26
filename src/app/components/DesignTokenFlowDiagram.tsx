'use client';

import React from 'react';
import styles from './DesignTokenFlowDiagram.module.css';

// ─── Simple logo/icon SVGs (inline, recognizable) ───────────────────────────

// ─── Diagram layout (Stripe-style: dotted bg, animated flow) ─────────────────
// Flow: Token Studio (top) → Figma (left) + Export JSON (right) → Style Dictionary (from JSON) → iOS (left) + Android (right)

const NODE_SIZE = 44;

export default function DesignTokenFlowDiagram() {
	const width = 320;
	const height = 310;

	// Node positions (center x, center y)
	const tokenStudio = { x: width / 2, y: 36 };
	const figma = { x: 88, y: 108 };
	const exportJson = { x: width - 88, y: 108 };
	const styleDict = { x: width / 2, y: 180 };
	const ios = { x: 88, y: 252 };
	const android = { x: width - 88, y: 252 };

	const r = NODE_SIZE / 2;
	const cornerRadius = 8;

	// L-shaped paths: Token Studio → Figma (left), Token Studio → JSON (right). Horizontal first, then vertical; rounded corner at turn. No arrowheads.
	// Token Studio → Figma: start left side of Token Studio (138, 36), go left to above Figma, round corner, down to top of Figma (88, 86)
	const pathTokenToFigma = `M ${tokenStudio.x - r} ${tokenStudio.y} H ${figma.x + cornerRadius} Q ${figma.x} ${tokenStudio.y}, ${figma.x} ${tokenStudio.y + cornerRadius} L ${figma.x} ${figma.y - r}`;
	// Token Studio → JSON: start right side of Token Studio (182, 36), go right to above JSON, round corner, down to top of JSON (232, 86)
	const pathTokenToJson = `M ${tokenStudio.x + r} ${tokenStudio.y} H ${exportJson.x - cornerRadius} Q ${exportJson.x} ${tokenStudio.y}, ${exportJson.x} ${tokenStudio.y + cornerRadius} L ${exportJson.x} ${exportJson.y - r}`;

	// L-shaped path: JSON → Style Dictionary. Start left side of JSON, horizontal left, round corner, vertical down to top of Style Dict. No arrowheads.
	const pathJsonToStyle = `M ${exportJson.x - r} ${exportJson.y} H ${styleDict.x + cornerRadius} Q ${styleDict.x} ${exportJson.y}, ${styleDict.x} ${exportJson.y + cornerRadius} L ${styleDict.x} ${styleDict.y - r}`;

	// L-shaped paths: Style Dictionary → iOS (left), Style Dictionary → Android (right). Horizontal first, then vertical; rounded corner at turn. No arrowheads.
	const pathStyleToIos = `M ${styleDict.x - r} ${styleDict.y} H ${ios.x + cornerRadius} Q ${ios.x} ${styleDict.y}, ${ios.x} ${styleDict.y + cornerRadius} L ${ios.x} ${ios.y - r}`;
	const pathStyleToAndroid = `M ${styleDict.x + r} ${styleDict.y} H ${android.x - cornerRadius} Q ${android.x} ${styleDict.y}, ${android.x} ${styleDict.y + cornerRadius} L ${android.x} ${android.y - r}`;

	return (
		<div className={styles.wrapper} role="img" aria-label="Design token flow: Token Studio to Figma and JSON, Style Dictionary, then iOS and Android">
			<svg viewBox={`0 0 ${width} ${height}`} className={styles.svg}>
				<defs>
					{/* Dotted pattern for Stripe-style background */}
					<pattern id="dots" width="12" height="12" patternUnits="userSpaceOnUse">
						<circle cx="1.5" cy="1.5" r="1" fill="#e2e8f0" />
					</pattern>
					<marker id="arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
						<path d="M0 0 L8 3 L0 6 Z" fill="#94a3b8" />
					</marker>
					{/* Rounded rect clip for node logos (fill full 44x44, rounded corners) */}
					<clipPath id="nodeClip">
						<rect x="0" y="0" width={NODE_SIZE} height={NODE_SIZE} rx="10" ry="10" />
					</clipPath>
				</defs>

				{/* Dotted background */}
				<rect width={width} height={height} fill="url(#dots)" className={styles.bgRect} />

				{/* Animated connection paths */}
				<path d={pathTokenToFigma} fill="none" stroke="#94a3b8" className={styles.connectorL} />
				<path d={pathTokenToJson} fill="none" stroke="#94a3b8" className={styles.connectorL} />
				<path d={pathJsonToStyle} fill="none" stroke="#94a3b8" className={styles.connectorL} />
				<path d={pathStyleToIos} fill="none" stroke="#94a3b8" className={styles.connectorL} />
				<path d={pathStyleToAndroid} fill="none" stroke="#94a3b8" className={styles.connectorL} />

				{/* Nodes: each group is translate(cx-r, cy-r), so rect at 0,0 and text at (r, NODE_SIZE+14) */}
				<g className={styles.node} transform={`translate(${tokenStudio.x - r}, ${tokenStudio.y - r})`}>
					<rect width={NODE_SIZE} height={NODE_SIZE} rx="10" fill="#fff" stroke="#e2e8f0" strokeWidth="1.5" />
					<image href="/token-studio-logo.png" x="0" y="0" width={NODE_SIZE} height={NODE_SIZE} preserveAspectRatio="xMidYMid slice" clipPath="url(#nodeClip)" />
					<text x={r} y={NODE_SIZE + 14} textAnchor="middle" className={styles.nodeLabel}>Token Studio</text>
				</g>
				<g className={styles.node} transform={`translate(${figma.x - r}, ${figma.y - r})`}>
					<rect width={NODE_SIZE} height={NODE_SIZE} rx="10" fill="#fff" stroke="#e2e8f0" strokeWidth="1.5" />
					<image href="/figma-logo.png" x="0" y="0" width={NODE_SIZE} height={NODE_SIZE} preserveAspectRatio="xMidYMid slice" clipPath="url(#nodeClip)" />
					<text x={r} y={NODE_SIZE + 14} textAnchor="middle" className={styles.nodeLabel}>Figma</text>
				</g>
				<g className={styles.node} transform={`translate(${exportJson.x - r}, ${exportJson.y - r})`}>
					<rect width={NODE_SIZE} height={NODE_SIZE} rx="10" fill="#fff" stroke="#e2e8f0" strokeWidth="1.5" />
					<image href="/json-logo.png" x="0" y="0" width={NODE_SIZE} height={NODE_SIZE} preserveAspectRatio="xMidYMid slice" clipPath="url(#nodeClip)" />
					<text x={r} y={NODE_SIZE + 14} textAnchor="middle" className={styles.nodeLabel}>Export JSON</text>
				</g>
				<g className={styles.node} transform={`translate(${styleDict.x - r}, ${styleDict.y - r})`}>
					<rect width={NODE_SIZE} height={NODE_SIZE} rx="10" fill="#fff" stroke="#e2e8f0" strokeWidth="1.5" />
					<image href="/style-dictionary-logo.png" x="0" y="0" width={NODE_SIZE} height={NODE_SIZE} preserveAspectRatio="xMidYMid slice" clipPath="url(#nodeClip)" />
					<text x={r} y={NODE_SIZE + 14} textAnchor="middle" className={styles.nodeLabel}>Style Dictionary</text>
				</g>
				<g className={styles.node} transform={`translate(${ios.x - r}, ${ios.y - r})`}>
					<rect width={NODE_SIZE} height={NODE_SIZE} rx="10" fill="#fff" stroke="#e2e8f0" strokeWidth="1.5" />
					<image href="/ios-logo.png" x="0" y="0" width={NODE_SIZE} height={NODE_SIZE} preserveAspectRatio="xMidYMid slice" clipPath="url(#nodeClip)" />
					<text x={r} y={NODE_SIZE + 14} textAnchor="middle" className={styles.nodeLabel}>iOS</text>
				</g>
				<g className={styles.node} transform={`translate(${android.x - r}, ${android.y - r})`}>
					<rect width={NODE_SIZE} height={NODE_SIZE} rx="10" fill="#fff" stroke="#e2e8f0" strokeWidth="1.5" />
					<image href="/android-logo.png" x="0" y="0" width={NODE_SIZE} height={NODE_SIZE} preserveAspectRatio="xMidYMid slice" clipPath="url(#nodeClip)" />
					<text x={r} y={NODE_SIZE + 14} textAnchor="middle" className={styles.nodeLabel}>Android</text>
				</g>
			</svg>
		</div>
	);
}
