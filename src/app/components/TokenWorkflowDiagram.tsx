'use client';

import React, { useState, useEffect, useMemo } from 'react';
import styles from './TokenWorkflowDiagram.module.css';

// ─── Types ────────────────────────────────────────────────────────────────────

type NodeDef = {
	id: string;
	label: string;
	sublabel?: string;
	lane: 'design' | 'center' | 'dev';
	x: number;
	y: number;
	w: number;
	h: number;
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

// ─── Desktop config (viewBox 0 0 1060 780) ───────────────────────────────────
// Coordinate notes: node center = (x + w/2, y + h/2); edges derived from rect edges.

const NODES: NodeDef[] = [
	{ id: 'token-owner',  label: 'Token Owner',        sublabel: 'Me',                     lane: 'center', x: 455, y: 50,  w: 190, h: 52 },
	{ id: 'token-studio', label: 'Token Studio',       sublabel: 'Design tokens',           lane: 'design', x: 30,  y: 200, w: 155, h: 52 },
	{ id: 'design-libs',  label: 'Design Libraries',   sublabel: 'Published Figma libs',    lane: 'design', x: 30,  y: 340, w: 175, h: 52 },
	{ id: 'figma',        label: 'Figma',              sublabel: 'Design team',             lane: 'design', x: 40,  y: 480, w: 130, h: 52 },
	{ id: 'slack',        label: 'Slack',              sublabel: 'Design System channel',   lane: 'design', x: 225, y: 480, w: 210, h: 52 },
	{ id: 'jira',         label: 'Jira ticket',        sublabel: 'Request to dev',          lane: 'dev',    x: 790, y: 200, w: 130, h: 52 },
	{ id: 'token-json',   label: 'Token JSON',         sublabel: 'Tokens in codebase',      lane: 'dev',    x: 755, y: 340, w: 200, h: 52 },
	{ id: 'ios-team',     label: 'iOS team',           sublabel: undefined,                 lane: 'dev',    x: 715, y: 480, w: 110, h: 52 },
	{ id: 'android-team', label: 'Android team',       sublabel: undefined,                 lane: 'dev',    x: 885, y: 480, w: 140, h: 52 },
	{ id: 'token-tests',  label: 'Run token tests',    sublabel: 'QA step',                 lane: 'dev',    x: 795, y: 590, w: 155, h: 52 },
	{ id: 'publish',      label: 'Publish app update', sublabel: 'Tokens applied',          lane: 'dev',    x: 775, y: 700, w: 190, h: 52 },
];

const EDGES: EdgeDef[] = [
	{ id: 'a', from: 'token-owner',  to: 'token-studio',  label: 'tweak tokens',       labelPos: { x: 258, y: 137 }, style: 'solid',  animated: true,  emphasis: true,  animDur: 2.2, d: 'M 455,76 C 320,76 320,226 185,226' },
	{ id: 'b', from: 'token-studio', to: 'design-libs',   label: 'publish',            labelPos: { x: 50,  y: 295 }, style: 'solid',  animated: true,  emphasis: true,  animDur: 2.0, d: 'M 107,252 C 107,296 117,296 117,340' },
	{ id: 'c', from: 'design-libs',  to: 'figma',                                                                     style: 'solid',  animated: true,                   animDur: 2.4, d: 'M 117,392 C 117,436 105,436 105,480' },
	{ id: 'd', from: 'token-studio', to: 'token-json',    label: 'export JSON',        labelPos: { x: 490, y: 254 }, style: 'solid',  animated: true,  emphasis: true,  animDur: 2.6, d: 'M 185,226 C 470,226 470,366 755,366' },
	{ id: 'e', from: 'token-owner',  to: 'jira',          label: 'ask dev to update',  labelPos: { x: 702, y: 137 }, style: 'solid',  animated: true,                   animDur: 2.0, d: 'M 645,76 C 717,76 717,226 790,226' },
	{ id: 'f', from: 'jira',         to: 'ios-team',                                                                  style: 'solid',  animated: true,                   animDur: 2.2, d: 'M 855,252 C 855,366 770,366 770,480' },
	{ id: 'g', from: 'jira',         to: 'android-team',                                                              style: 'solid',  animated: true,                   animDur: 2.4, d: 'M 855,252 C 855,366 955,366 955,480' },
	{ id: 'h', from: 'token-json',   to: 'ios-team',      label: 'manual update for QA', labelPos: { x: 762, y: 446 }, style: 'dashed', animated: false, badge: 'Manual sync chosen for QA', badgePos: { x: 686, y: 412 }, d: 'M 825,392 C 825,436 770,436 770,480' },
	{ id: 'i', from: 'token-json',   to: 'android-team',  label: 'manual update for QA',                              style: 'dashed', animated: false,                             d: 'M 885,392 C 885,436 955,436 955,480' },
	{ id: 'j', from: 'ios-team',     to: 'token-tests',                                                               style: 'solid',  animated: true,                   animDur: 2.0, d: 'M 770,532 C 770,574 860,574 860,590' },
	{ id: 'k', from: 'android-team', to: 'token-tests',                                                               style: 'solid',  animated: true,                   animDur: 2.2, d: 'M 955,532 C 955,574 884,574 884,590' },
	{ id: 'l', from: 'token-tests',  to: 'publish',                                                                   style: 'solid',  animated: true,  emphasis: true,  animDur: 1.8, d: 'M 872,642 C 872,671 870,671 870,700' },
	{ id: 'm', from: 'token-owner',  to: 'slack',         label: 'inform designers',   labelPos: { x: 500, y: 247 }, style: 'solid',  animated: true,                   animDur: 2.8, d: 'M 550,102 C 550,250 330,250 330,480' },
	{ id: 'n', from: 'slack',        to: 'figma',         label: 'announcement',       labelPos: { x: 166, y: 497 }, style: 'dashed', animated: false,                             d: 'M 225,506 C 198,506 198,506 170,506' },
];

// ─── Mobile config (viewBox 0 0 388 530) ─────────────────────────────────────
// Two-column vertical layout: Design (left, x 0–195) | Dev (right, x 196–388)
// Token Owner spans the full width at the top.
// iOS team and Android team are stacked vertically in the dev column.

const MOBILE_NODES: NodeDef[] = [
	{ id: 'token-owner',  label: 'Token Owner',        sublabel: 'Me',                     lane: 'center', x: 97,  y: 16,  w: 194, h: 46 },
	{ id: 'token-studio', label: 'Token Studio',       sublabel: 'Design tokens',           lane: 'design', x: 10,  y: 108, w: 148, h: 46 },
	{ id: 'design-libs',  label: 'Design Libraries',   sublabel: 'Published Figma libs',    lane: 'design', x: 10,  y: 202, w: 160, h: 46 },
	{ id: 'figma',        label: 'Figma',              sublabel: 'Design team',             lane: 'design', x: 10,  y: 300, w: 118, h: 46 },
	{ id: 'slack',        label: 'Slack',              sublabel: 'Design System channel',   lane: 'design', x: 10,  y: 396, w: 155, h: 46 },
	{ id: 'jira',         label: 'Jira ticket',        sublabel: 'Request to dev',          lane: 'dev',    x: 220, y: 108, w: 152, h: 46 },
	{ id: 'token-json',   label: 'Token JSON',         sublabel: 'Tokens in codebase',      lane: 'dev',    x: 210, y: 202, w: 162, h: 46 },
	{ id: 'ios-team',     label: 'iOS team',           sublabel: undefined,                 lane: 'dev',    x: 213, y: 300, w: 78,  h: 42 },
	{ id: 'android-team', label: 'Android team',       sublabel: undefined,                 lane: 'dev',    x: 213, y: 354, w: 110, h: 42 },
	{ id: 'token-tests',  label: 'Run token tests',    sublabel: 'QA step',                 lane: 'dev',    x: 210, y: 408, w: 162, h: 46 },
	{ id: 'publish',      label: 'Publish app update', sublabel: 'Tokens applied',          lane: 'dev',    x: 210, y: 468, w: 162, h: 46 },
];

// Coordinate references for mobile edges:
//   token-owner:  left(97,39)  right(291,39)  bottom-L(155,62)  bottom-R(225,62)
//   token-studio: right(158,131) bottom(84,154) top(84,108)
//   design-libs:  top(90,202) bottom(90,248)
//   figma:        top(69,300) bottom(69,346)
//   slack:        top(87,396)
//   jira:         left(220,131) top(296,108) bottom(296,154)
//   token-json:   left(210,225) top(291,202) bottom(291,248)  bL(260,248) bR(315,248)
//   ios-team:     top(252,300) bottom(252,342)
//   android-team: top(268,354) bottom(268,396)
//   token-tests:  top(291,408) bottom(291,454)  tL(260,408) tR(315,408)
//   publish:      top(291,468)
const MOBILE_EDGES: EdgeDef[] = [
	{ id: 'a', from: 'token-owner',  to: 'token-studio',  style: 'solid',  animated: true,  emphasis: true,  animDur: 2.2, d: 'M 97,39 C 50,39 50,131 158,131' },
	{ id: 'b', from: 'token-studio', to: 'design-libs',   style: 'solid',  animated: true,  emphasis: true,  animDur: 2.0, d: 'M 84,154 C 84,177 90,177 90,202' },
	{ id: 'c', from: 'design-libs',  to: 'figma',         style: 'solid',  animated: true,                   animDur: 2.4, d: 'M 90,248 C 90,274 69,274 69,300' },
	{ id: 'd', from: 'token-studio', to: 'token-json',    style: 'solid',  animated: true,  emphasis: true,  animDur: 2.6, d: 'M 158,131 C 188,131 188,225 210,225' },
	{ id: 'e', from: 'token-owner',  to: 'jira',          style: 'solid',  animated: true,                   animDur: 2.0, d: 'M 225,62 C 225,85 296,85 296,108' },
	{ id: 'f', from: 'jira',         to: 'ios-team',      style: 'solid',  animated: true,                   animDur: 2.2, d: 'M 296,154 C 296,227 252,227 252,300' },
	{ id: 'g', from: 'jira',         to: 'android-team',  style: 'solid',  animated: true,                   animDur: 2.4, d: 'M 296,154 C 296,254 268,254 268,354' },
	{ id: 'h', from: 'token-json',   to: 'ios-team',      style: 'dashed', animated: false,                             d: 'M 260,248 C 260,274 252,274 252,300' },
	{ id: 'i', from: 'token-json',   to: 'android-team',  style: 'dashed', animated: false,                             d: 'M 315,248 C 315,301 268,301 268,354' },
	{ id: 'j', from: 'ios-team',     to: 'token-tests',   style: 'solid',  animated: true,                   animDur: 2.0, d: 'M 252,342 C 252,375 260,375 260,408' },
	{ id: 'k', from: 'android-team', to: 'token-tests',   style: 'solid',  animated: true,                   animDur: 2.2, d: 'M 268,396 C 268,402 315,402 315,408' },
	{ id: 'l', from: 'token-tests',  to: 'publish',       style: 'solid',  animated: true,  emphasis: true,  animDur: 1.8, d: 'M 291,454 C 291,461 291,461 291,468' },
	{ id: 'm', from: 'token-owner',  to: 'slack',         style: 'solid',  animated: true,                   animDur: 2.8, d: 'M 155,62 C 155,200 87,200 87,396' },
	{ id: 'n', from: 'slack',        to: 'figma',         style: 'dashed', animated: false,                             d: 'M 87,396 C 87,371 69,371 69,346' },
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

function DiagramNode({ node, isHovered, isDimmed, onMouseEnter, onMouseLeave }: {
	node: NodeDef; isHovered: boolean; isDimmed: boolean;
	onMouseEnter: () => void; onMouseLeave: () => void;
}) {
	const ls = LANE_STYLE[node.lane];
	const cx = node.x + node.w / 2;
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
	const strokeWidth = isHighlighted ? 2 : 1.5;
	const dashArray = edge.style === 'dashed' ? '5 6' : undefined;
	const labelW = ((edge.label?.length ?? 0) * 7) + 18;

	return (
		<g onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
			{/* Wide invisible hit area for easier hover */}
			<path d={edge.d} fill='none' stroke='transparent' strokeWidth={18} style={{ cursor: 'crosshair' }} />

			{/* Edge path */}
			<path
				d={edge.d} fill='none' stroke={color} strokeWidth={strokeWidth}
				strokeDasharray={dashArray}
				className={edge.animated && !reducedMotion ? styles.edgeAnimated : undefined}
				markerEnd='url(#arrowhead)'
				style={{ transition: 'stroke 0.18s ease, stroke-width 0.18s ease' }}
			/>

			{/* Pulse dot (emphasis edges only) */}
			{edge.emphasis && !reducedMotion && (
				<circle r={4} fill={isHighlighted ? '#1d4ed8' : '#3b82f6'} className={styles.pulseDot}>
					{/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
					{(React as any).createElement('animateMotion', { dur: `${edge.animDur ?? 2}s`, repeatCount: 'indefinite', path: edge.d })}
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

function SvgDefs() {
	return (
		<defs>
			<marker id='arrowhead' markerWidth={8} markerHeight={6} refX={7} refY={3} orient='auto'>
				<path d='M 0,0 L 8,3 L 0,6 Z' fill='context-stroke' />
			</marker>
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

	function renderNodes(nodes: NodeDef[]) {
		return nodes.map((node) => (
			<DiagramNode
				key={node.id} node={node}
				isHovered={hoveredNode === node.id}
				isDimmed={anyHovered && !connectedNodeIds.has(node.id)}
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
				<svg viewBox='0 0 1060 780' className={styles.svgDesktop}
					role='img' aria-labelledby='wf-title wf-desc'>
					<title id='wf-title'>Token Collaboration Workflow</title>
					<desc id='wf-desc'>
						Workflow showing how the Token Owner coordinates design token updates between
						design (Token Studio, Design Libraries, Figma, Slack) and development
						(Jira, Token JSON, iOS team, Android team, token tests, publishing).
					</desc>

					<SvgDefs />

					{/* Lane backgrounds */}
					<rect x={0}   y={36} width={440} height={736} fill='rgba(248,250,252,0.65)' />
					<rect x={680} y={36} width={380} height={736} fill='rgba(248,250,252,0.65)' />

					{/* Lane separators */}
					<line x1={440} y1={36} x2={440} y2={772} stroke='#e2e8f0' strokeWidth={1} strokeDasharray='4 7' />
					<line x1={680} y1={36} x2={680} y2={772} stroke='#e2e8f0' strokeWidth={1} strokeDasharray='4 7' />

					{/* Lane labels */}
					<text x={220} y={22} textAnchor='middle' fontFamily='Inter,system-ui,sans-serif' fontSize={11} fontWeight={600} letterSpacing={1.5} fill='#94a3b8'>DESIGN</text>
					<text x={560} y={22} textAnchor='middle' fontFamily='Inter,system-ui,sans-serif' fontSize={11} fontWeight={700} letterSpacing={1.5} fill='#3b82f6'>TOKEN OWNER</text>
					<text x={868} y={22} textAnchor='middle' fontFamily='Inter,system-ui,sans-serif' fontSize={11} fontWeight={600} letterSpacing={1.5} fill='#94a3b8'>DEVELOPMENT</text>

					{renderEdges(EDGES)}
					{renderNodes(NODES)}
				</svg>
			</div>

			{/* ── Mobile SVG (<900px, scales to 100% width, no scroll) ── */}
			<svg viewBox='0 0 388 530' className={styles.svgMobile}
				role='img' aria-labelledby='wf-title-m wf-desc-m'>
				<title id='wf-title-m'>Token Collaboration Workflow</title>
				<desc id='wf-desc-m'>
					Two-column workflow: Design (left) and Development (right), coordinated by Token Owner at the top.
				</desc>

				<SvgDefs />

				{/* Lane backgrounds */}
				<rect x={0}   y={68} width={196} height={454} fill='rgba(248,250,252,0.65)' />
				<rect x={196} y={68} width={192} height={454} fill='rgba(248,250,252,0.65)' />

				{/* Lane separator */}
				<line x1={196} y1={68} x2={196} y2={522} stroke='#e2e8f0' strokeWidth={1} strokeDasharray='4 7' />

				{/* Lane labels (above the two columns, below token-owner) */}
				<text x={98}  y={84} textAnchor='middle' fontFamily='Inter,system-ui,sans-serif' fontSize={9}  fontWeight={600} letterSpacing={1.2} fill='#94a3b8'>DESIGN</text>
				<text x={290} y={84} textAnchor='middle' fontFamily='Inter,system-ui,sans-serif' fontSize={9}  fontWeight={600} letterSpacing={1.2} fill='#94a3b8'>DEVELOPMENT</text>

				{renderEdges(MOBILE_EDGES)}
				{renderNodes(MOBILE_NODES)}
			</svg>

			{/* ── Legend ── */}
			<div className={styles.legend}>
				<div className={styles.legendItem}><div className={styles.legendSolid} /><span>Automated propagation</span></div>
				<div className={styles.legendItem}><div className={styles.legendDashed} /><span>Manual sync / announcement</span></div>
				<div className={styles.legendItem}><div className={styles.legendDot} /><span>Active token flow</span></div>
				<div className={styles.legendItem}><span className={styles.legendBadge}>Manual sync chosen intentionally for QA</span></div>
			</div>

			<p className={styles.scrollHint}>← Scroll to explore the full diagram →</p>
		</div>
	);
}
