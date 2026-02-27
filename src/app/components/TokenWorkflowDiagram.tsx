'use client';

import React, { useState, useEffect, useMemo } from 'react';
import styles from './TokenWorkflowDiagram.module.css';
import diagramStyles from './DesignTokenFlowDiagram.module.css';

// ─── Types ────────────────────────────────────────────────────────────────────

const LOGO_SRC: Record<string, string> = {
	'token-owner': '', // placeholder – same style as Slack
	'token-studio': '/token-studio-logo.png',
	figma: '/figma-logo.png',
	'token-json': '/json-logo.png',
	'style-dictionary': '/style-dictionary-logo.png',
	'design-libs': '', // placeholder – replace with logo when provided
	slack: '',
	jira: '',
	'token-tests': '',
	publish: '',
	'ios-team': '/ios-logo.png',
	'android-team': '/android-logo.png',
};

type NodeDef = {
	id: string;
	label: string;
	sublabel?: string;
	/** Optional line under sublabel (e.g. "Manual sync chosen for QA") */
	badge?: string;
	lane: 'design' | 'center' | 'dev';
	x: number;
	y: number;
	w: number;
	h: number;
	logo?: keyof typeof LOGO_SRC;
};

type EdgeDef = {
	id: string;
	from: string;
	to: string;
	label?: string;
	labelPos?: { x: number; y: number };
	style: 'solid' | 'dashed';
	animated: boolean;
	emphasis?: boolean;
	badge?: string;
	badgePos?: { x: number; y: number };
	d: string;
	animDur?: number;
};

// ─── Desktop config (viewBox 0 0 1060 880) ───────────────────────────────────
// Coordinate notes: node center = (x + w/2, y + h/2); edges derived from rect edges.

// Center column: center x = 550. Token Studio, Token JSON, Jira center-aligned (x so that x + w/2 = 550).
const NODES: NodeDef[] = [
	{ id: 'token-owner',  label: 'Change request',      sublabel: 'Request to make changes from design or dev team', lane: 'center', x: 455, y: 50,  w: 190, h: 52, logo: 'token-owner' },
	{ id: 'token-studio', label: 'Token Studio',       sublabel: 'Make changes to Design Tokens', lane: 'center', x: 472, y: 156, w: 155, h: 52, logo: 'token-studio' },
	{ id: 'token-json',   label: 'Token JSON',         sublabel: 'Export Json Token file',  lane: 'center', x: 450, y: 268, w: 200, h: 52, logo: 'token-json' },
	{ id: 'jira',         label: 'Jira ticket',        sublabel: 'Create Jira request for dev team to update the Json in the code', badge: 'Manual sync chosen for QA', lane: 'center', x: 485, y: 380, w: 130, h: 52, logo: 'jira' },
	{ id: 'design-libs',  label: 'Design Libraries',   sublabel: 'Published Figma libs',    lane: 'design', x: 30,  y: 452, w: 175, h: 52, logo: 'design-libs' },
	{ id: 'figma',        label: 'Figma',              sublabel: 'Design team',             lane: 'design', x: 40,  y: 592, w: 130, h: 52, logo: 'figma' },
	{ id: 'slack',        label: 'Slack',              sublabel: 'Design System channel',   lane: 'design', x: 225, y: 592, w: 210, h: 52, logo: 'slack' },
	{ id: 'style-dictionary', label: 'Style Dictionary', sublabel: 'Transform Json to the OS specific code', lane: 'dev',    x: 790, y: 532, w: 160, h: 52, logo: 'style-dictionary' },
	{ id: 'ios-team',     label: 'iOS',                sublabel: undefined,                 lane: 'dev',    x: 715, y: 612, w: 110, h: 52, logo: 'ios-team' },
	{ id: 'android-team', label: 'Android',            sublabel: undefined,                 lane: 'dev',    x: 900, y: 612, w: 140, h: 52, logo: 'android-team' },
	{ id: 'token-tests',  label: 'QA',                 sublabel: 'QA step',                 lane: 'dev',    x: 795, y: 702, w: 155, h: 52, logo: 'token-tests' },
	{ id: 'publish',      label: 'Publish app update', sublabel: 'Tokens applied',          lane: 'dev',    x: 775, y: 812, w: 190, h: 52, logo: 'publish' },
];

// L-shaped path helper: start (sx,sy), horizontal left, then 90° turn with radius r, then vertical to (ex, ey). Same corner radius as POC (DesignTokenFlowDiagram).
const CORNER_RADIUS = 8;
function pathLDown(sx: number, sy: number, ex: number, ey: number): string {
	return `M ${sx},${sy} H ${ex + CORNER_RADIUS} Q ${ex},${sy}, ${ex},${sy + CORNER_RADIUS} L ${ex},${ey}`;
}
// Mirrored: horizontal right, then 90° turn, then vertical down to (ex, ey).
function pathRDown(sx: number, sy: number, ex: number, ey: number): string {
	return `M ${sx},${sy} H ${ex - CORNER_RADIUS} Q ${ex},${sy}, ${ex},${sy + CORNER_RADIUS} L ${ex},${ey}`;
}
// Down then right: vertical from (sx,sy), then 90° turn, then horizontal to (ex, ey). For iOS/Android → QA.
function pathDownThenRight(sx: number, sy: number, ex: number, ey: number): string {
	return `M ${sx},${sy} L ${sx},${ey - CORNER_RADIUS} Q ${sx},${ey} ${sx + CORNER_RADIUS},${ey} L ${ex},${ey}`;
}
// Down then left: vertical from (sx,sy), then 90° turn, then horizontal to (ex, ey).
function pathDownThenLeft(sx: number, sy: number, ex: number, ey: number): string {
	return `M ${sx},${sy} L ${sx},${ey - CORNER_RADIUS} Q ${sx},${ey} ${sx - CORNER_RADIUS},${ey} L ${ex},${ey}`;
}

const EDGES: EdgeDef[] = [
	{ id: 'a', from: 'token-owner',  to: 'token-studio',  label: 'tweak tokens',       labelPos: { x: 258, y: 132 }, style: 'solid',  animated: true,  emphasis: true,  animDur: 2.2, d: 'M 550,102 L 550,156' },
	{ id: 'b', from: 'token-studio', to: 'design-libs',   label: 'publish',            labelPos: { x: 295, y: 318 }, style: 'solid',  animated: true,  emphasis: true,  animDur: 2.0, d: pathLDown(472, 208, 117.5, 452) },
	{ id: 'c', from: 'design-libs',  to: 'figma',                                                                     style: 'solid',  animated: true,                   animDur: 2.4, d: 'M 117,504 C 117,548 105,548 105,592' },
	{ id: 'd', from: 'token-studio', to: 'token-json',    label: 'export JSON',        labelPos: { x: 538, y: 218 }, style: 'dashed', animated: false, d: 'M 550,208 L 550,268' },
	{ id: 'd2', from: 'token-json',   to: 'jira',             label: 'create Jira ticket', labelPos: { x: 538, y: 328 }, style: 'dashed', animated: false, d: 'M 550,320 L 550,380' },
	{ id: 'd3', from: 'jira',         to: 'style-dictionary', label: 'transform',         labelPos: { x: 720, y: 462 }, style: 'dashed', animated: false, d: pathRDown(572, 406, 870, 532) },
	{ id: 'h', from: 'style-dictionary', to: 'ios-team',      label: 'manual update for QA', labelPos: { x: 762, y: 574 }, style: 'dashed', animated: false, d: pathLDown(892, 554, 770, 612) },
	{ id: 'i', from: 'style-dictionary', to: 'android-team',  label: 'manual update for QA',                              style: 'dashed', animated: false,                             d: pathRDown(892, 554, 970, 612) },
	{ id: 'j', from: 'ios-team',     to: 'token-tests',                                                               style: 'solid',  animated: true,                   animDur: 2.0, d: pathDownThenRight(770, 664, 872, 702) },
	{ id: 'k', from: 'android-team', to: 'token-tests',                                                               style: 'solid',  animated: true,                   animDur: 2.2, d: pathDownThenLeft(970, 664, 872, 702) },
	{ id: 'l', from: 'token-tests',  to: 'publish',                                                                   style: 'solid',  animated: true,  emphasis: true,  animDur: 1.8, d: 'M 872,754 C 872,783 870,783 870,812' },
	{ id: 'm', from: 'token-owner',  to: 'slack',         label: 'inform designers',   labelPos: { x: 500, y: 346 }, style: 'solid',  animated: true,                   animDur: 2.8, d: 'M 550,102 C 550,358 330,358 330,592' },
	{ id: 'n', from: 'slack',        to: 'figma',         label: 'announcement',       labelPos: { x: 166, y: 609 }, style: 'dashed', animated: false,                             d: 'M 225,618 C 198,618 198,618 170,618' },
];

// ─── Mobile config (viewBox 0 0 388 710) ─────────────────────────────────────
// Token Owner block at top (full width), then Design (left) | Dev (right) columns
// Token Owner spans the full width at the top.
// iOS team and Android team are stacked vertically in the dev column.

// Mobile: center column center x = 194. Token Studio, Token JSON, Jira center-aligned (x + w/2 = 194).
const MOBILE_NODES: NodeDef[] = [
	{ id: 'token-owner',  label: 'Change request',      sublabel: 'Request to make changes from design or dev team', lane: 'center', x: 97,  y: 16,  w: 194, h: 46, logo: 'token-owner' },
	{ id: 'token-studio', label: 'Token Studio',       sublabel: 'Make changes to Design Tokens', lane: 'center', x: 117, y: 92,  w: 155, h: 46, logo: 'token-studio' },
	{ id: 'token-json',   label: 'Token JSON',         sublabel: 'Export Json Token file',  lane: 'center', x: 113, y: 184, w: 162, h: 46, logo: 'token-json' },
	{ id: 'jira',         label: 'Jira ticket',        sublabel: 'Create Jira request for dev team to update the Json in the code', badge: 'Manual sync chosen for QA', lane: 'center', x: 118, y: 276, w: 152, h: 46, logo: 'jira' },
	{ id: 'design-libs',  label: 'Design Libraries',   sublabel: 'Published Figma libs',    lane: 'design', x: 10,  y: 342, w: 160, h: 46, logo: 'design-libs' },
	{ id: 'figma',        label: 'Figma',              sublabel: 'Design team',             lane: 'design', x: 10,  y: 440, w: 118, h: 46, logo: 'figma' },
	{ id: 'slack',        label: 'Slack',              sublabel: 'Design System channel',   lane: 'design', x: 10,  y: 536, w: 155, h: 46, logo: 'slack' },
	{ id: 'style-dictionary', label: 'Style Dictionary', sublabel: 'Transform Json to the OS specific code', lane: 'dev',    x: 210, y: 452, w: 162, h: 46, logo: 'style-dictionary' },
	{ id: 'ios-team',     label: 'iOS',                sublabel: undefined,                 lane: 'dev',    x: 213, y: 508, w: 78,  h: 42, logo: 'ios-team' },
	{ id: 'android-team', label: 'Android',            sublabel: undefined,                 lane: 'dev',    x: 213, y: 562, w: 110, h: 42, logo: 'android-team' },
	{ id: 'token-tests',  label: 'QA',                 sublabel: 'QA step',                 lane: 'dev',    x: 210, y: 616, w: 162, h: 46, logo: 'token-tests' },
	{ id: 'publish',      label: 'Publish app update', sublabel: 'Tokens applied',          lane: 'dev',    x: 210, y: 672, w: 162, h: 46, logo: 'publish' },
];

// Mobile: center column (194). Token Owner → Token Studio → Token JSON → Jira (vertical). Then branches to design/dev.
const MOBILE_EDGES: EdgeDef[] = [
	{ id: 'a', from: 'token-owner',  to: 'token-studio',  style: 'solid',  animated: true,  emphasis: true,  animDur: 2.2, d: 'M 194,62 L 194,92' },
	{ id: 'b', from: 'token-studio', to: 'design-libs',   style: 'solid',  animated: true,  emphasis: true,  animDur: 2.0, d: pathLDown(117, 138, 90, 342) },
	{ id: 'c', from: 'design-libs',  to: 'figma',         style: 'solid',  animated: true,                   animDur: 2.4, d: 'M 90,388 C 90,414 69,414 69,440' },
	{ id: 'd', from: 'token-studio', to: 'token-json',    style: 'dashed', animated: false, d: 'M 194,138 L 194,184' },
	{ id: 'd2', from: 'token-json',   to: 'jira',             style: 'dashed', animated: false, d: 'M 194,230 L 194,276' },
	{ id: 'd3', from: 'jira',         to: 'style-dictionary', style: 'dashed', animated: false, d: pathRDown(216, 299, 291, 452) },
	{ id: 'h', from: 'style-dictionary', to: 'ios-team',      style: 'dashed', animated: false, d: pathLDown(313, 474, 252, 508) },
	{ id: 'i', from: 'style-dictionary', to: 'android-team',  style: 'dashed', animated: false, d: pathRDown(313, 474, 268, 562) },
	{ id: 'j', from: 'ios-team',     to: 'token-tests',   style: 'solid',  animated: true,                   animDur: 2.0, d: pathDownThenRight(252, 552, 291, 616) },
	{ id: 'k', from: 'android-team', to: 'token-tests',   style: 'solid',  animated: true,                   animDur: 2.2, d: pathDownThenLeft(268, 606, 291, 616) },
	{ id: 'l', from: 'token-tests',  to: 'publish',       style: 'solid',  animated: true,  emphasis: true,  animDur: 1.8, d: 'M 291,662 C 291,667 291,667 291,672' },
	{ id: 'm', from: 'token-owner',  to: 'slack',         style: 'solid',  animated: true,                   animDur: 2.8, d: 'M 155,62 C 155,309 87,309 87,536' },
	{ id: 'n', from: 'slack',        to: 'figma',         style: 'dashed', animated: false,                             d: 'M 87,536 C 87,511 69,511 69,486' },
];

// ─── Lane visual config ───────────────────────────────────────────────────────

const LANE_STYLE: Record<string, { fill: string; stroke: string; labelColor: string }> = {
	design: { fill: '#ffffff', stroke: '#cbd5e1', labelColor: '#1e293b' },
	center: { fill: '#eff6ff', stroke: '#bfdbfe', labelColor: '#1d4ed8' },
	dev:    { fill: '#ffffff', stroke: '#cbd5e1', labelColor: '#1e293b' },
};

// ─── Hook ─────────────────────────────────────────────────────────────────────

function useReducedMotion(): boolean {
	const [reduced, setReduced] = useState(false);
	useEffect(() => {
		const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
		setReduced(mq.matches);
		const handler = () => setReduced(mq.matches);
		mq.addEventListener('change', handler);
		return () => mq.removeEventListener('change', handler);
	}, []);
	return reduced;
}

// ─── Sub-components ───────────────────────────────────────────────────────────

const LOGO_SIZE = 44;

function DiagramNode({ node, isHovered, isDimmed, logoClipPathId, onMouseEnter, onMouseLeave }: {
	node: NodeDef; isHovered: boolean; isDimmed: boolean; logoClipPathId: string;
	onMouseEnter: () => void; onMouseLeave: () => void;
}) {
	const ls = LANE_STYLE[node.lane];
	const cx = node.x + node.w / 2;
	const useLogoUI = node.logo !== undefined;
	const logoHref = node.logo ? LOGO_SRC[node.logo] : '';
	const hasLogoImage = Boolean(logoHref);

	if (useLogoUI) {
		// Same UI as logo nodes: 44×44 box (white, #e2e8f0 border), image or placeholder, label/sublabel underneath
		const logoX = node.x + (node.w - LOGO_SIZE) / 2;
		const logoY = node.y;
		return (
			<g
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
				style={{ opacity: isDimmed ? 0.2 : 1, transition: 'opacity 0.18s ease', cursor: 'default' }}
			>
				{/* Invisible hit area for hover (keep same node bounds) */}
				<rect x={node.x} y={node.y} width={node.w} height={node.h} fill="transparent" />
				<g transform={`translate(${logoX}, ${logoY})`}>
					<rect width={LOGO_SIZE} height={LOGO_SIZE} rx={10} ry={10} className={diagramStyles.logoBox} />
					{hasLogoImage ? (
						<image
							href={logoHref}
							x={0} y={0} width={LOGO_SIZE} height={LOGO_SIZE}
							preserveAspectRatio="xMidYMid slice"
							clipPath={`url(#${logoClipPathId})`}
						/>
					) : (
						<rect x={4} y={4} width={36} height={36} rx={8} fill="#f1f5f9" stroke="#e2e8f0" strokeWidth={1} clipPath={`url(#${logoClipPathId})`} />
					)}
					<text x={LOGO_SIZE / 2} y={LOGO_SIZE + 14} textAnchor="middle" className={styles.logoNodeLabel}>
						{node.label}
					</text>
					{node.sublabel && (
						<foreignObject
							x={LOGO_SIZE / 2 - LOGO_SIZE}
							y={LOGO_SIZE + 18}
							width={LOGO_SIZE * 2}
							height={28}
							className={styles.logoNodeSublabelForeign}
						>
							<div className={styles.logoNodeSublabelWrap} xmlns="http://www.w3.org/1999/xhtml">
								{node.sublabel}
							</div>
						</foreignObject>
					)}
					{node.badge && (
						<foreignObject
							x={LOGO_SIZE / 2 - LOGO_SIZE}
							y={LOGO_SIZE + 50}
							width={LOGO_SIZE * 2}
							height={22}
							className={styles.logoNodeSublabelForeign}
						>
							<div className={styles.logoNodeBadge} xmlns="http://www.w3.org/1999/xhtml">
								{node.badge}
							</div>
						</foreignObject>
					)}
				</g>
			</g>
		);
	}

	const labelY = node.sublabel ? node.y + 19 : node.y + node.h / 2 + 5;
	return (
		<g
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			style={{ opacity: isDimmed ? 0.2 : 1, transition: 'opacity 0.18s ease', cursor: 'default' }}
		>
			<rect x={node.x + 1} y={node.y + 2} width={node.w} height={node.h} rx={9} fill='rgba(0,0,0,0.04)' />
			<rect
				x={node.x} y={node.y} width={node.w} height={node.h} rx={9}
				fill={ls.fill} stroke={isHovered ? '#3b82f6' : ls.stroke}
				strokeWidth={isHovered ? 1.5 : 1}
				style={{ transition: 'stroke 0.15s ease' }}
			/>
			<text x={cx} y={labelY} textAnchor='middle'
				fontFamily='Inter, system-ui, sans-serif' fontSize={12} fontWeight={600} fill={ls.labelColor}>
				{node.label}
			</text>
			{node.sublabel && (
				<text x={cx} y={node.y + 33} textAnchor='middle'
					fontFamily='Inter, system-ui, sans-serif' fontSize={9.5} fill='#94a3b8'>
					{node.sublabel}
				</text>
			)}
		</g>
	);
}

function DiagramEdge({ edge, isHighlighted, isDimmed, reducedMotion, onMouseEnter, onMouseLeave }: {
	edge: EdgeDef; isHighlighted: boolean; isDimmed: boolean; reducedMotion: boolean;
	onMouseEnter: () => void; onMouseLeave: () => void;
}) {
	const color = isDimmed ? '#e8edf2' : isHighlighted ? '#3b82f6' : '#94a3b8';
	const labelW = ((edge.label?.length ?? 0) * 7) + 18;

	return (
		<g onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
			{/* Wide invisible hit area for easier hover */}
			<path d={edge.d} fill='none' stroke='transparent' strokeWidth={18} style={{ cursor: 'crosshair' }} />

			{/* Edge path — match DesignTokenFlowDiagram: thin dashed lines, no arrowheads */}
			<path
				d={edge.d} fill='none' stroke={color} strokeWidth={1}
				className={edge.animated && !reducedMotion ? styles.connectorL : styles.connectorLStatic}
				style={{ transition: 'stroke 0.18s ease' }}
			/>

			{/* Pulse dot (emphasis edges only) — 4× slower for visibility */}
			{edge.emphasis && !reducedMotion && (
				<circle r={4} fill={isHighlighted ? '#1d4ed8' : '#3b82f6'} className={styles.pulseDot}>
					{/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
					{(React as any).createElement('animateMotion', { dur: `${((edge.animDur ?? 2) * 4)}s`, repeatCount: 'indefinite', path: edge.d })}
				</circle>
			)}

			{/* Tooltip label — appears on hover */}
			{edge.label && edge.labelPos && isHighlighted && (
				<g style={{ pointerEvents: 'none' }}>
					<rect x={edge.labelPos.x - 5} y={edge.labelPos.y - 12} width={labelW} height={18}
						rx={4} fill='white' stroke='#e2e8f0' strokeWidth={1} />
					<text x={edge.labelPos.x} y={edge.labelPos.y}
						fontFamily='Inter, system-ui, sans-serif' fontSize={10} fill='#475569'>
						{edge.label}
					</text>
				</g>
			)}

			{/* Manual-QA badge — always visible (desktop only, has badgePos) */}
			{edge.badge && edge.badgePos && (
				<g style={{ pointerEvents: 'none' }}>
					<rect x={edge.badgePos.x} y={edge.badgePos.y} width={148} height={22}
						rx={5} fill='#fff7ed' stroke='#fed7aa' strokeWidth={1} />
					<text x={edge.badgePos.x + 7} y={edge.badgePos.y + 14}
						fontFamily='Inter, system-ui, sans-serif' fontSize={9.5} fill='#c2410c'>
						Manual sync chosen for QA
					</text>
				</g>
			)}
		</g>
	);
}

// ─── Shared SVG chrome helpers ────────────────────────────────────────────────

function SvgDefs({ clipPathId }: { clipPathId: string }) {
	return (
		<defs>
			<clipPath id={clipPathId}>
				<rect x={0} y={0} width={44} height={44} rx={10} ry={10} />
			</clipPath>
		</defs>
	);
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function TokenWorkflowDiagram() {
	const [hoveredNode, setHoveredNode] = useState<string | null>(null);
	const [hoveredEdge, setHoveredEdge] = useState<string | null>(null);
	const reducedMotion = useReducedMotion();

	// Connectivity is computed from the full EDGES list (same node IDs for both layouts)
	const { connectedEdgeIds, connectedNodeIds } = useMemo(() => {
		const edgeIds = new Set<string>();
		const nodeIds = new Set<string>();
		const allEdges = [...EDGES, ...MOBILE_EDGES.filter(me => !EDGES.find(e => e.id === me.id))];

		if (hoveredNode) {
			nodeIds.add(hoveredNode);
			allEdges.forEach((e) => {
				if (e.from === hoveredNode || e.to === hoveredNode) {
					edgeIds.add(e.id); nodeIds.add(e.from); nodeIds.add(e.to);
				}
			});
		}
		if (hoveredEdge) {
			edgeIds.add(hoveredEdge);
			const e = allEdges.find((e) => e.id === hoveredEdge);
			if (e) { nodeIds.add(e.from); nodeIds.add(e.to); }
		}
		return { connectedEdgeIds: edgeIds, connectedNodeIds: nodeIds };
	}, [hoveredNode, hoveredEdge]);

	const anyHovered = hoveredNode !== null || hoveredEdge !== null;

	function edgeHandlers(id: string) {
		return {
			onMouseEnter: () => { setHoveredEdge(id); setHoveredNode(null); },
			onMouseLeave: () => setHoveredEdge(null),
		};
	}
	function nodeHandlers(id: string) {
		return {
			onMouseEnter: () => { setHoveredNode(id); setHoveredEdge(null); },
			onMouseLeave: () => setHoveredNode(null),
		};
	}

	function renderEdges(edges: EdgeDef[]) {
		return edges.map((edge) => (
			<DiagramEdge
				key={edge.id} edge={edge}
				isHighlighted={connectedEdgeIds.has(edge.id)}
				isDimmed={anyHovered && !connectedEdgeIds.has(edge.id)}
				reducedMotion={reducedMotion}
				{...edgeHandlers(edge.id)}
			/>
		));
	}

	function renderNodes(nodes: NodeDef[], logoClipPathId: string) {
		return nodes.map((node) => (
			<DiagramNode
				key={node.id} node={node}
				isHovered={hoveredNode === node.id}
				isDimmed={anyHovered && !connectedNodeIds.has(node.id)}
				logoClipPathId={logoClipPathId}
				{...nodeHandlers(node.id)}
			/>
		));
	}

	return (
		<div className={styles.container}>

			{/* ── Desktop SVG (≥900px, scrollable if <1060px) ── */}
			<div
				className={styles.desktopWrapper}
				role='region'
				aria-label='Token collaboration workflow — scroll horizontally on narrow screens'
			>
				<svg viewBox='0 0 1060 880' className={styles.svgDesktop}
					role='img' aria-labelledby='wf-title wf-desc'>
					<title id='wf-title'>Token Collaboration Workflow</title>
					<desc id='wf-desc'>
						Workflow showing how the Token Owner coordinates design token updates between
						design (Token Studio, Design Libraries, Figma, Slack) and development
						(Jira, Token JSON, iOS team, Android team, token tests, publishing).
					</desc>

					<SvgDefs clipPathId="logoNodeClipDesktop" />

					{/* Lane backgrounds */}
					<rect x={0}   y={36} width={440} height={828} fill='rgba(248,250,252,0.65)' />
					<rect x={680} y={36} width={380} height={828} fill='rgba(248,250,252,0.65)' />

					{/* Lane separators */}
					<line x1={440} y1={36} x2={440} y2={864} stroke='#e2e8f0' strokeWidth={1} strokeDasharray='4 7' />
					<line x1={680} y1={36} x2={680} y2={864} stroke='#e2e8f0' strokeWidth={1} strokeDasharray='4 7' />

					{/* Lane labels */}
					<text x={220} y={22} textAnchor='middle' fontFamily='Inter,system-ui,sans-serif' fontSize={11} fontWeight={600} letterSpacing={1.5} fill='#94a3b8'>DESIGN</text>
					<text x={560} y={22} textAnchor='middle' fontFamily='Inter,system-ui,sans-serif' fontSize={11} fontWeight={700} letterSpacing={1.5} fill='#3b82f6'>TOKEN OWNER</text>
					<text x={868} y={22} textAnchor='middle' fontFamily='Inter,system-ui,sans-serif' fontSize={11} fontWeight={600} letterSpacing={1.5} fill='#94a3b8'>DEVELOPMENT</text>

					{renderEdges(EDGES)}
					{renderNodes(NODES, 'logoNodeClipDesktop')}
				</svg>
			</div>

			{/* ── Mobile SVG (<900px, scales to 100% width, no scroll) ── */}
			<svg viewBox='0 0 388 710' className={styles.svgMobile}
				role='img' aria-labelledby='wf-title-m wf-desc-m'>
				<title id='wf-title-m'>Token Collaboration Workflow</title>
				<desc id='wf-desc-m'>
					Two-column workflow: Design (left) and Development (right), coordinated by Token Owner at the top.
				</desc>

				<SvgDefs clipPathId="logoNodeClipMobile" />

				{/* Lane backgrounds */}
				<rect x={0}   y={68} width={196} height={454} fill='rgba(248,250,252,0.65)' />
				<rect x={196} y={68} width={192} height={454} fill='rgba(248,250,252,0.65)' />

				{/* Lane separator */}
				<line x1={196} y1={68} x2={196} y2={522} stroke='#e2e8f0' strokeWidth={1} strokeDasharray='4 7' />

				{/* Lane labels (above the two columns, below token-owner) */}
				<text x={98}  y={84} textAnchor='middle' fontFamily='Inter,system-ui,sans-serif' fontSize={9}  fontWeight={600} letterSpacing={1.2} fill='#94a3b8'>DESIGN</text>
				<text x={290} y={84} textAnchor='middle' fontFamily='Inter,system-ui,sans-serif' fontSize={9}  fontWeight={600} letterSpacing={1.2} fill='#94a3b8'>DEVELOPMENT</text>

				{renderEdges(MOBILE_EDGES)}
				{renderNodes(MOBILE_NODES, 'logoNodeClipMobile')}
			</svg>

			<p className={styles.scrollHint}>← Scroll to explore the full diagram →</p>
		</div>
	);
}
