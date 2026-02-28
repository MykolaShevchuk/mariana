'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import styles from './TokenWorkflowDiagram.module.css';
import diagramStyles from './DesignTokenFlowDiagram.module.css';

// ─── Logo assets ─────────────────────────────────────────────────────────────

const LOGO_SRC: Record<string, string> = {
	'token-owner': '',
	'token-studio': '/token-studio-logo.png',
	figma: '/figma-logo.png',
	'token-json': '/json-logo.png',
	'style-dictionary': '/style-dictionary-logo.png',
	slack: '',
	jira: '',
	'token-tests': '',
	publish: '',
	'ios-team': '/ios-logo.png',
	'android-team': '/android-logo.png',
};

const LOGO_SIZE = 44;
const R = LOGO_SIZE / 2; // 22
const CORNER_RADIUS = 8;

// ─── Position type: (x,y,w,h) + derived coords for paths ─────────────────────

// Bottom of label+sublabel in DiagramNode: logoY + 44 + 18 + 28 = logoY + 90. With badge: extra gap + badge height.
const CONTENT_BOTTOM_OFFSET = 90;
const BADGE_TOP_OFFSET = 58; // logoY + 58 = top of badge (below sublabel with ~12px gap)
const CONTENT_BOTTOM_WITH_BADGE_OFFSET = BADGE_TOP_OFFSET + 22; // 80 = badge bottom

type Pos = {
	x: number;
	y: number;
	w: number;
	h: number;
	cx: number;
	cy: number;
	top: number;
	bottom: number;
	logoX?: number;
	logoY?: number;
	logoLeft?: number;
	logoRight?: number;
	logoTop?: number;
	logoBottom?: number;
	logoCenterX?: number;
	logoCenterY?: number;
	/** Y coordinate below description text (sublabel); used so connectors start below text. */
	contentBottom?: number;
};

function pos(x: number, y: number, w: number, h: number, withLogo = true): Pos {
	const cx = x + w / 2;
	const cy = y + h / 2;
	const base: Pos = { x, y, w, h, cx, cy, top: y, bottom: y + h };
	if (!withLogo) return base;
	const logoX = x + (w - LOGO_SIZE) / 2;
	const logoY = y;
	return {
		...base,
		logoX,
		logoY,
		logoLeft: logoX,
		logoRight: logoX + LOGO_SIZE,
		logoTop: logoY,
		logoBottom: logoY + LOGO_SIZE,
		logoCenterX: logoX + R,
		logoCenterY: logoY + R,
		contentBottom: logoY + CONTENT_BOTTOM_OFFSET,
	};
}

// ─── Path helpers (same as POC: L-shaped, rounded corners) ───────────────────

function pathLDown(sx: number, sy: number, ex: number, ey: number): string {
	return `M ${sx},${sy} H ${ex + CORNER_RADIUS} Q ${ex},${sy}, ${ex},${sy + CORNER_RADIUS} L ${ex},${ey}`;
}
function pathRDown(sx: number, sy: number, ex: number, ey: number): string {
	return `M ${sx},${sy} H ${ex - CORNER_RADIUS} Q ${ex},${sy}, ${ex},${sy + CORNER_RADIUS} L ${ex},${ey}`;
}
function pathDownThenRight(sx: number, sy: number, ex: number, ey: number): string {
	return `M ${sx},${sy} L ${sx},${ey - CORNER_RADIUS} Q ${sx},${ey} ${sx + CORNER_RADIUS},${ey} L ${ex},${ey}`;
}
function pathDownThenLeft(sx: number, sy: number, ex: number, ey: number): string {
	return `M ${sx},${sy} L ${sx},${ey - CORNER_RADIUS} Q ${sx},${ey} ${sx - CORNER_RADIUS},${ey} L ${ex},${ey}`;
}
/** Down from (sx,sy), then right, then down to (ex,ey). Used for iOS → QA. */
function pathDownRightDown(sx: number, sy: number, ex: number, ey: number): string {
	const midY = (sy + ey) / 2;
	const r = CORNER_RADIUS;
	return `M ${sx},${sy} L ${sx},${midY - r} Q ${sx},${midY} ${sx + r},${midY} L ${ex - r},${midY} Q ${ex},${midY} ${ex},${midY + r} L ${ex},${ey}`;
}
/** Down from (sx,sy), then left, then down to (ex,ey). Mirror of pathDownRightDown for Android → QA. */
function pathDownLeftDown(sx: number, sy: number, ex: number, ey: number): string {
	const midY = (sy + ey) / 2;
	const r = CORNER_RADIUS;
	return `M ${sx},${sy} L ${sx},${midY - r} Q ${sx},${midY} ${sx - r},${midY} L ${ex + r},${midY} Q ${ex},${midY} ${ex},${midY + r} L ${ex},${ey}`;
}

// ─── Desktop layout (viewBox 1060 × 1060) ─────────────────────────────────────
// Two lanes: Token owner 0–520, Development 520–1060. Content shifted down so "TOKEN OWNER" label sits above Change request.

const DESKTOP_TOP_OFFSET = 28;

function desktopLayout() {
	const SEPARATOR_X = 520;
	const t = DESKTOP_TOP_OFFSET;
	// Change request and Token Studio centered on the line between the two lanes
	const tokenOwner = pos(SEPARATOR_X - 190 / 2, 50 + t, 190, 52);
	const tokenStudio = pos(SEPARATOR_X - 155 / 2, 196 + t, 155, 52);
	// Token owner column (left). Figma same level as Token JSON
	const figma = pos(195, 308 + t, 130, 52);
	// Slack and Jira aligned by top; block below moved down with them
	const slackJiraTop = 450 + t;
	const slack = pos(155, slackJiraTop, 210, 52);
	const jira = pos(715, slackJiraTop, 130, 52);
	// Development column
	const tokenJson = pos(680, 308 + t, 200, 52);
	const styleDict = pos(700, 610 + t + 16, 160, 52);
	const ios = pos(625, 690 + t + 16, 110, 52);
	const android = pos(810, 690 + t + 16, 140, 52);
	const tokenTests = pos(702, 780 + t + 32, 155, 52);
	const publish = pos(685, 890 + t + 40, 190, 52);

	const centerX = tokenOwner.cx; // 520
	const pathA = `M ${centerX},${tokenOwner.contentBottom!} L ${centerX},${tokenStudio.logoTop!}`;
	// L-shaped dashed: from left side of Token Studio logo → top center of Figma
	const pathB = pathLDown(tokenStudio.logoLeft!, tokenStudio.logoCenterY!, figma.logoCenterX!, figma.logoTop!);
	// L-shaped dashed: from right side of Token Studio logo → top center of Token JSON
	const pathD = pathRDown(tokenStudio.logoRight!, tokenStudio.logoCenterY!, tokenJson.logoCenterX!, tokenJson.logoTop!);
	const pathD2 = `M ${tokenJson.logoCenterX!},${tokenJson.contentBottom!} L ${jira.logoCenterX!},${jira.logoTop!}`;
	// Start below "Manual sync chosen for QA" label (~48px below badge top)
	const jiraBelowBadge = jira.logoY! + BADGE_TOP_OFFSET + 48;
	const pathD3 = `M ${jira.logoCenterX!},${jiraBelowBadge} L ${styleDict.logoCenterX!},${styleDict.logoTop!}`;
	// From right side of Style Dictionary logo → bottom of iOS / Android logos (no gap)
	const pathH = pathLDown(styleDict.logoRight!, styleDict.logoCenterY!, ios.logoCenterX!, ios.logoBottom!);
	const pathI = pathRDown(styleDict.logoRight!, styleDict.logoCenterY!, android.logoCenterX!, android.logoBottom!);
	// iOS → QA: start from word "iOS" (below logo), down, right, down to top center of QA
	const iosLabelBottom = ios.logoBottom! + 26; // ~bottom of "iOS" label
	const pathJ = pathDownRightDown(ios.logoCenterX!, iosLabelBottom, tokenTests.logoCenterX!, tokenTests.logoTop!);
	// Android → QA: start from word "Android" (below logo), down, left, down to top center of QA (mirror of iOS)
	const androidLabelBottom = android.logoBottom! + 26;
	const pathK = pathDownLeftDown(android.logoCenterX!, androidLabelBottom, tokenTests.logoCenterX!, tokenTests.logoTop!);
	// Start below QA step description: logoBottom + 29 (~11px below sublabel)
	const qaStepBelow = tokenTests.logoBottom! + 29;
	const pathL = `M ${tokenTests.logoCenterX},${qaStepBelow} C ${tokenTests.logoCenterX},${(qaStepBelow + publish.logoTop!) / 2} ${publish.logoCenterX! - 2},${(qaStepBelow + publish.logoTop!) / 2} ${publish.logoCenterX! - 2},${publish.logoTop!}`;
	// pathM removed: no line from Change request to Slack
	const pathN = `M ${figma.logoCenterX!},${figma.contentBottom!} L ${slack.logoCenterX!},${slack.logoTop!}`;

	return {
		positions: {
			tokenOwner, tokenStudio, tokenJson, jira, figma, slack,
			styleDict, ios, android, tokenTests, publish,
		},
		paths: {
			pathA, pathB, pathD, pathD2, pathD3, pathH, pathI, pathJ, pathK, pathL, pathN,
		},
		centerX,
	};
}

// ─── Mobile layout (viewBox 388 × 920) ──────────────────────────────────────
// Three columns as on desktop: Design (left), Token Owner (center at separator), Development (right). Reduced spacing.

const MOBILE_TOP_OFFSET = 28;
const MOBILE_ROW_GAP = 20;
const MOBILE_NODE_H = 46;
const MOBILE_ROW_STEP = MOBILE_NODE_H + MOBILE_ROW_GAP;
const MOBILE_SEPARATOR_X = 196; // center column boundary (same as lane split)
const MOBILE_LEFT_COL_X = 16;   // left column (Design: Figma, Slack)
const MOBILE_RIGHT_COL_X = 210; // right column (Development)

function mobileLayout() {
	const t = MOBILE_TOP_OFFSET;
	// Rows 0-3 use uniform step (no issue before jira)
	const y0 = 16 + t;
	const y1 = y0 + MOBILE_ROW_STEP;
	const y2 = y1 + MOBILE_ROW_STEP;
	const y3 = y2 + MOBILE_ROW_STEP;

	// Jira has a badge: badge renders at logoY + LOGO_SIZE + BADGE_TOP_OFFSET (= y3+102), height 22 → badge bottom = y3+124
	// StyleDict must start after badge clears
	const jiraBadgeBottom = y3 + LOGO_SIZE + BADGE_TOP_OFFSET + 22;
	const y4 = jiraBadgeBottom + MOBILE_ROW_GAP; // styleDict

	// iOS and Android stacked in same column; ensure each clears the label of the one above
	const y5 = y4 + MOBILE_NODE_H + MOBILE_ROW_GAP; // ios (height 42)
	const y6 = y5 + 42 + MOBILE_ROW_GAP;             // android (height 42)
	const y7 = y6 + 42 + MOBILE_ROW_GAP;             // tokenTests
	const y8 = y7 + MOBILE_NODE_H + MOBILE_ROW_GAP;  // publish

	// Center column: Change request, Token Studio
	const tokenOwner = pos(MOBILE_SEPARATOR_X - 194 / 2, y0, 194, MOBILE_NODE_H);
	const tokenStudio = pos(MOBILE_SEPARATOR_X - 155 / 2, y1, 155, MOBILE_NODE_H);
	// Left column (Design): Figma, Slack
	const figma = pos(MOBILE_LEFT_COL_X, y2, 118, MOBILE_NODE_H);
	const slack = pos(MOBILE_LEFT_COL_X, y3, 155, MOBILE_NODE_H);
	// Right column (Development)
	const tokenJson = pos(MOBILE_RIGHT_COL_X, y2, 162, MOBILE_NODE_H);
	const jira = pos(MOBILE_RIGHT_COL_X, y3, 152, MOBILE_NODE_H);
	const styleDict = pos(MOBILE_RIGHT_COL_X, y4, 162, MOBILE_NODE_H);
	const ios = pos(MOBILE_RIGHT_COL_X + 3, y5, 78, 42);
	const android = pos(MOBILE_RIGHT_COL_X + 3, y6, 110, 42);
	const tokenTests = pos(MOBILE_RIGHT_COL_X, y7, 162, MOBILE_NODE_H);
	const publish = pos(MOBILE_RIGHT_COL_X, y8, 162, MOBILE_NODE_H);

	const centerX = tokenOwner.cx;
	const pathA = `M ${centerX},${tokenOwner.contentBottom!} L ${centerX},${tokenStudio.logoTop!}`;
	const pathB = pathLDown(tokenStudio.logoLeft!, tokenStudio.logoCenterY!, figma.logoCenterX!, figma.logoTop!);
	const pathD = pathRDown(tokenStudio.logoRight!, tokenStudio.logoCenterY!, tokenJson.logoCenterX!, tokenJson.logoTop!);
	const pathD2 = `M ${tokenJson.logoCenterX!},${tokenJson.contentBottom!} L ${tokenJson.logoCenterX!},${jira.logoTop!}`;
	// Start below "Manual sync chosen for QA" label (~48px below badge top)
	const jiraBelowBadgeM = jira.logoY! + BADGE_TOP_OFFSET + 48;
	const pathD3 = `M ${jira.logoCenterX!},${jiraBelowBadgeM} L ${styleDict.logoCenterX!},${styleDict.logoTop!}`;
	// Mobile: iOS and Android are stacked in same column → simple vertical chains
	const pathH = `M ${styleDict.logoCenterX!},${styleDict.logoBottom!} L ${ios.logoCenterX!},${ios.logoTop!}`;
	const pathI = `M ${ios.logoCenterX!},${ios.logoBottom!} L ${android.logoCenterX!},${android.logoTop!}`;
	const pathJ = `M ${android.logoCenterX!},${android.logoBottom!} L ${tokenTests.logoCenterX!},${tokenTests.logoTop!}`;
	const pathK = pathJ; // unused on mobile but kept for type compatibility
	// Start below QA step description: logoBottom + 29 (~11px below sublabel)
	const qaStepBelowM = tokenTests.logoBottom! + 29;
	const pathL = `M ${tokenTests.logoCenterX},${qaStepBelowM} C ${tokenTests.logoCenterX},${qaStepBelowM + 5} ${tokenTests.logoCenterX},${qaStepBelowM + 5} ${tokenTests.logoCenterX},${publish.logoTop!}`;
	const pathN = `M ${figma.logoCenterX!},${figma.contentBottom!} L ${slack.logoCenterX!},${slack.logoTop!}`;

	return {
		positions: {
			tokenOwner, tokenStudio, tokenJson, jira, figma, slack,
			styleDict, ios, android, tokenTests, publish,
		},
		paths: {
			pathA, pathB, pathD, pathD2, pathD3, pathH, pathI, pathJ, pathK, pathL, pathN,
		},
		centerX,
	};
}

// ─── Node/edge types for rendering (built from layout) ───────────────────────

type NodeDef = {
	id: string;
	label: string;
	sublabel?: string;
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
	d: string;
	animDur?: number;
	/** Delay in seconds before the pulse dot starts (e.g. wait for another edge’s dot to arrive). */
	animBegin?: number | string;
	repeatCount?: string;
};

const LANE_STYLE: Record<string, { fill: string; stroke: string; labelColor: string }> = {
	design: { fill: '#ffffff', stroke: '#cbd5e1', labelColor: '#1e293b' },
	center: { fill: '#eff6ff', stroke: '#bfdbfe', labelColor: '#1d4ed8' },
	dev: { fill: '#ffffff', stroke: '#cbd5e1', labelColor: '#1e293b' },
};

// Static content (labels, lanes). Positions come from layout.
const NODE_CONTENT: Omit<NodeDef, 'x' | 'y' | 'w' | 'h'>[] = [
	{ id: 'token-owner',  label: 'Change request',      sublabel: 'Request to make changes from design or dev team', lane: 'center', logo: 'token-owner' },
	{ id: 'token-studio', label: 'Token Studio',       sublabel: 'Make changes to Design Tokens', lane: 'center', logo: 'token-studio' },
	{ id: 'token-json',   label: 'Token JSON',         sublabel: 'Export Json Token file',  lane: 'dev', logo: 'token-json' },
	{ id: 'jira',         label: 'Jira ticket',        sublabel: 'Create Jira request for dev team to update the Json in the code', badge: 'Manual sync chosen for QA', lane: 'dev', logo: 'jira' },
	{ id: 'figma',        label: 'Figma',              sublabel: 'Publish changes to design libraries', lane: 'center', logo: 'figma' },
	{ id: 'slack',        label: 'Slack',              sublabel: 'Design System channel',   lane: 'center', logo: 'slack' },
	{ id: 'style-dictionary', label: 'Style Dictionary', sublabel: 'Transform Json to the OS specific code', lane: 'dev', logo: 'style-dictionary' },
	{ id: 'ios-team',     label: 'iOS',                lane: 'dev', logo: 'ios-team' },
	{ id: 'android-team', label: 'Android',            lane: 'dev', logo: 'android-team' },
	{ id: 'token-tests',  label: 'QA',                 sublabel: 'QA step',                 lane: 'dev', logo: 'token-tests' },
	{ id: 'publish',      label: 'Publish app update', sublabel: 'Tokens applied',          lane: 'dev', logo: 'publish' },
];

const POSITION_KEYS: (keyof ReturnType<typeof desktopLayout>['positions'])[] = [
	'tokenOwner', 'tokenStudio', 'tokenJson', 'jira', 'figma', 'slack',
	'styleDict', 'ios', 'android', 'tokenTests', 'publish',
];

function buildNodes(positions: ReturnType<typeof desktopLayout>['positions']): NodeDef[] {
	return NODE_CONTENT.map((content, i) => {
		const key = POSITION_KEYS[i];
		const p = positions[key];
		return { ...content, x: p.x, y: p.y, w: p.w, h: p.h } as NodeDef;
	});
}

// Time-based stagger (SMIL event begin like "a.end" not reliable in Chrome). Circles loop with staggered start.
const circleDur = (animDur: number) => (animDur * 4) / 1.5;
const T_A = circleDur(2.2);
const T_B = circleDur(2.0);
const T_D = circleDur(2.0);
const T_N = circleDur(2.0);
const T_D2 = circleDur(1.8);
const T_D3 = circleDur(2.0);
const T_HI = circleDur(1.5);
const T_J = circleDur(2.0);
const T_K = circleDur(2.2);
const T_L = circleDur(1.8);
const BEGIN_A = 0;
const BEGIN_B = T_A;
const BEGIN_D = T_A;
const BEGIN_N = T_A + T_B;
const BEGIN_D2 = T_A + T_D;
const BEGIN_D3 = T_A + T_D + T_D2;
const BEGIN_HI = T_A + T_D + T_D2 + T_D3;
const BEGIN_J = BEGIN_HI + T_HI;
const BEGIN_K = BEGIN_HI + T_HI;
const BEGIN_L = BEGIN_HI + T_HI + Math.max(T_J, T_K);

function buildDesktopEdges(layout: ReturnType<typeof desktopLayout>): EdgeDef[] {
	const { paths, positions } = layout;
	const { tokenOwner, tokenStudio, figma, tokenJson, jira, slack, styleDict, ios, tokenTests } = positions;
	const cx = tokenOwner.cx;
	return [
		{ id: 'a', from: 'token-owner',  to: 'token-studio',  label: 'tweak tokens',       labelPos: { x: cx, y: (tokenOwner.contentBottom! + tokenStudio.logoTop!) / 2 }, style: 'solid',  animated: true,  emphasis: true,  animDur: 2.2, animBegin: BEGIN_A, d: paths.pathA },
		{ id: 'b', from: 'token-studio', to: 'figma',        label: 'publish',            labelPos: { x: (tokenStudio.logoLeft! + figma.logoCenterX!) / 2, y: (tokenStudio.logoCenterY! + figma.logoTop!) / 2 }, style: 'dashed', animated: true,  emphasis: true,  animDur: 2.0, animBegin: BEGIN_B, d: paths.pathB },
		{ id: 'd', from: 'token-studio', to: 'token-json',    label: 'export JSON',        labelPos: { x: (tokenStudio.logoRight! + tokenJson.logoCenterX!) / 2, y: (tokenStudio.logoCenterY! + tokenJson.logoTop!) / 2 }, style: 'dashed', animated: true,  emphasis: true,  animDur: 2.0, animBegin: BEGIN_D, d: paths.pathD },
		{ id: 'n', from: 'figma',        to: 'slack',         label: 'announcement',       labelPos: { x: (figma.logoCenterX! + slack.logoCenterX!) / 2, y: (figma.contentBottom! + slack.logoTop!) / 2 }, style: 'dashed', animated: true,  emphasis: true,  animDur: 2.0, animBegin: BEGIN_N, d: paths.pathN },
		{ id: 'd2', from: 'token-json',   to: 'jira',             label: 'create Jira ticket', labelPos: { x: tokenJson.logoCenterX!, y: (tokenJson.contentBottom! + jira.logoTop!) / 2 }, style: 'dashed', animated: true,  emphasis: true,  animDur: 1.8, animBegin: BEGIN_D2, d: paths.pathD2 },
		{ id: 'd3', from: 'jira',         to: 'style-dictionary', label: 'transform',         labelPos: { x: (jira.logoRight! + styleDict.logoCenterX!) / 2, y: (jira.logoY! + BADGE_TOP_OFFSET + 48 + styleDict.logoTop!) / 2 }, style: 'dashed', animated: true,  emphasis: true,  animDur: 2.0, animBegin: BEGIN_D3, d: paths.pathD3 },
		{ id: 'h', from: 'style-dictionary', to: 'ios-team',      label: 'manual update for QA', labelPos: { x: (styleDict.logoRight! + ios.logoCenterX!) / 2, y: (styleDict.logoBottom! + ios.logoTop!) / 2 }, style: 'dashed', animated: true,  emphasis: true,  animDur: 1.5, animBegin: BEGIN_HI, d: paths.pathH },
		{ id: 'i', from: 'style-dictionary', to: 'android-team',  label: 'manual update for QA',                              style: 'dashed', animated: true,  emphasis: true,  animDur: 1.5, animBegin: BEGIN_HI, d: paths.pathI },
		{ id: 'j', from: 'ios-team',     to: 'token-tests',                                                               style: 'solid',  animated: true,                   animDur: 2.0, animBegin: BEGIN_J, d: paths.pathJ },
		{ id: 'k', from: 'android-team', to: 'token-tests',                                                               style: 'solid',  animated: true,                   animDur: 2.2, animBegin: BEGIN_K, d: paths.pathK },
		{ id: 'l', from: 'token-tests',  to: 'publish',                                                                   style: 'solid',  animated: true,  emphasis: true,  animDur: 1.8, animBegin: BEGIN_L, d: paths.pathL },
	];
}

function buildMobileEdges(layout: ReturnType<typeof mobileLayout>): EdgeDef[] {
	const { paths } = layout;
	return [
		{ id: 'a',  from: 'token-owner',      to: 'token-studio',     style: 'solid',  animated: true,  emphasis: true, animDur: 2.2, animBegin: BEGIN_A,  d: paths.pathA },
		{ id: 'b',  from: 'token-studio',     to: 'figma',            style: 'dashed', animated: true,  emphasis: true, animDur: 2.0, animBegin: BEGIN_B,  d: paths.pathB },
		{ id: 'd',  from: 'token-studio',     to: 'token-json',       style: 'dashed', animated: true,  emphasis: true, animDur: 2.0, animBegin: BEGIN_D,  d: paths.pathD },
		{ id: 'n',  from: 'figma',            to: 'slack',            style: 'dashed', animated: true,  emphasis: true, animDur: 2.0, animBegin: BEGIN_N,  d: paths.pathN },
		{ id: 'd2', from: 'token-json',       to: 'jira',             style: 'dashed', animated: true,  emphasis: true, animDur: 1.8, animBegin: BEGIN_D2, d: paths.pathD2 },
		{ id: 'd3', from: 'jira',             to: 'style-dictionary', style: 'dashed', animated: true,  emphasis: true, animDur: 2.0, animBegin: BEGIN_D3, d: paths.pathD3 },
		{ id: 'h',  from: 'style-dictionary', to: 'ios-team',         style: 'dashed', animated: true,  emphasis: true, animDur: 1.5, animBegin: BEGIN_HI, d: paths.pathH },
		{ id: 'i',  from: 'ios-team',         to: 'android-team',     style: 'dashed', animated: true,  emphasis: true, animDur: 1.5, animBegin: BEGIN_HI, d: paths.pathI },
		{ id: 'j',  from: 'android-team',     to: 'token-tests',      style: 'solid',  animated: true,                 animDur: 2.0, animBegin: BEGIN_J,  d: paths.pathJ },
		{ id: 'l',  from: 'token-tests',      to: 'publish',          style: 'solid',  animated: true,  emphasis: true, animDur: 1.8, animBegin: BEGIN_L,  d: paths.pathL },
	];
}

// ─── Hooks ───────────────────────────────────────────────────────────────────

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

// ─── Diagram node (logo box + label/sublabel/badge) ───────────────────────────

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
		const logoX = node.x + (node.w - LOGO_SIZE) / 2;
		const logoY = node.y;
		return (
			<g
				onMouseEnter={onMouseEnter}
				onMouseLeave={onMouseLeave}
				style={{ opacity: isDimmed ? 0.2 : 1, transition: 'opacity 0.18s ease', cursor: 'default' }}
			>
				<rect x={node.x} y={node.y} width={node.w} height={node.h} fill="transparent" />
				<g transform={`translate(${logoX}, ${logoY})`}>
					<rect width={LOGO_SIZE} height={LOGO_SIZE} rx={10} ry={10} className={diagramStyles.logoBox} />
					{hasLogoImage ? (
						<image href={logoHref} x={0} y={0} width={LOGO_SIZE} height={LOGO_SIZE} preserveAspectRatio="xMidYMid slice" clipPath={`url(#${logoClipPathId})`} />
					) : (
						<rect x={4} y={4} width={36} height={36} rx={8} fill="#f1f5f9" stroke="#e2e8f0" strokeWidth={1} clipPath={`url(#${logoClipPathId})`} />
					)}
					<text x={LOGO_SIZE / 2} y={LOGO_SIZE + 14} textAnchor="middle" className={styles.logoNodeLabel}>{node.label}</text>
					{node.sublabel && (
						<foreignObject x={LOGO_SIZE / 2 - LOGO_SIZE} y={LOGO_SIZE + 18} width={LOGO_SIZE * 2} height={28} className={styles.logoNodeSublabelForeign}>
							<div className={styles.logoNodeSublabelWrap} xmlns="http://www.w3.org/1999/xhtml">{node.sublabel}</div>
						</foreignObject>
					)}
					{node.badge && (
						<foreignObject x={LOGO_SIZE / 2 - LOGO_SIZE} y={LOGO_SIZE + BADGE_TOP_OFFSET} width={LOGO_SIZE * 2} height={22} className={styles.logoNodeSublabelForeign}>
							<div className={styles.logoNodeBadge} xmlns="http://www.w3.org/1999/xhtml">{node.badge}</div>
						</foreignObject>
					)}
				</g>
			</g>
		);
	}

	const labelY = node.sublabel ? node.y + 19 : node.y + node.h / 2 + 5;
	return (
		<g onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} style={{ opacity: isDimmed ? 0.2 : 1, transition: 'opacity 0.18s ease', cursor: 'default' }}>
			<rect x={node.x + 1} y={node.y + 2} width={node.w} height={node.h} rx={9} fill="rgba(0,0,0,0.04)" />
			<rect x={node.x} y={node.y} width={node.w} height={node.h} rx={9} fill={ls.fill} stroke={isHovered ? '#3b82f6' : ls.stroke} strokeWidth={isHovered ? 1.5 : 1} style={{ transition: 'stroke 0.15s ease' }} />
			<text x={cx} y={labelY} textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" fontSize={12} fontWeight={600} fill={ls.labelColor}>{node.label}</text>
			{node.sublabel && <text x={cx} y={node.y + 33} textAnchor="middle" fontFamily="Inter, system-ui, sans-serif" fontSize={9.5} fill="#64748b">{node.sublabel}</text>}
		</g>
	);
}

// ─── Diagram edge ────────────────────────────────────────────────────────────

function DiagramEdge({ edge, isHighlighted, isDimmed, reducedMotion, onMouseEnter, onMouseLeave }: {
	edge: EdgeDef; isHighlighted: boolean; isDimmed: boolean; reducedMotion: boolean;
	onMouseEnter: () => void; onMouseLeave: () => void;
}) {
	const color = isDimmed ? '#e8edf2' : isHighlighted ? '#3b82f6' : '#94a3b8';
	const labelW = ((edge.label?.length ?? 0) * 7) + 18;
	const pulseRef = useRef<SVGGElement>(null);
	const beginSec = edge.animBegin != null && typeof edge.animBegin === 'number' ? edge.animBegin : null;
	useEffect(() => {
		const motion = pulseRef.current?.querySelector('animateMotion');
		if (motion && beginSec != null) {
			motion.setAttribute('begin', `${beginSec}s`);
		}
	}, [beginSec]);
	const durSec = ((edge.animDur ?? 2) * 4) / 1.5;
	return (
		<g onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
			<path d={edge.d} fill="none" stroke="transparent" strokeWidth={18} style={{ cursor: 'crosshair' }} />
			<path d={edge.d} fill="none" stroke={color} strokeWidth={1} className={edge.animated && !reducedMotion ? styles.connectorL : styles.connectorLStatic} style={{ transition: 'stroke 0.18s ease' }} />
			{edge.emphasis && !reducedMotion && (
				<g ref={pulseRef}>
					<circle r={4} fill={isHighlighted ? '#1d4ed8' : '#3b82f6'} className={styles.pulseDot}>
						{/* React may not pass begin to animateMotion; set via ref in useEffect */}
						{(React as any).createElement('animateMotion', {
							dur: `${durSec}s`,
							repeatCount: 'indefinite',
							path: edge.d,
							...(beginSec != null && { begin: `${beginSec}s` }),
						})}
					</circle>
				</g>
			)}
			{edge.label && edge.labelPos && isHighlighted && (
				<g style={{ pointerEvents: 'none' }}>
					<rect x={edge.labelPos.x - 5} y={edge.labelPos.y - 12} width={labelW} height={18} rx={4} fill="white" stroke="#e2e8f0" strokeWidth={1} />
					<text x={edge.labelPos.x} y={edge.labelPos.y} fontFamily="Inter, system-ui, sans-serif" fontSize={10} fill="#475569">{edge.label}</text>
				</g>
			)}
		</g>
	);
}

// ─── Main component ─────────────────────────────────────────────────────────

export default function TokenWorkflowDiagram() {
	const [hoveredNode, setHoveredNode] = useState<string | null>(null);
	const [hoveredEdge, setHoveredEdge] = useState<string | null>(null);
	const reducedMotion = useReducedMotion();

	const desktop = useMemo(() => desktopLayout(), []);
	const mobile = useMemo(() => mobileLayout(), []);
	const desktopNodes = useMemo(() => buildNodes(desktop.positions), [desktop.positions]);
	const desktopEdges = useMemo(() => buildDesktopEdges(desktop), [desktop]);
	const mobileNodes = useMemo(() => buildNodes(mobile.positions), [mobile.positions]);
	const mobileEdges = useMemo(() => buildMobileEdges(mobile), [mobile]);

	const { connectedEdgeIds, connectedNodeIds } = useMemo(() => {
		const edgeIds = new Set<string>();
		const nodeIds = new Set<string>();
		const allEdges = [...desktopEdges, ...mobileEdges];
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
			const e = allEdges.find((x) => x.id === hoveredEdge);
			if (e) { nodeIds.add(e.from); nodeIds.add(e.to); }
		}
		return { connectedEdgeIds: edgeIds, connectedNodeIds: nodeIds };
	}, [hoveredNode, hoveredEdge, desktopEdges, mobileEdges]);

	const anyHovered = hoveredNode !== null || hoveredEdge !== null;
	const edgeHandlers = (id: string) => ({
		onMouseEnter: () => { setHoveredEdge(id); setHoveredNode(null); },
		onMouseLeave: () => setHoveredEdge(null),
	});
	const nodeHandlers = (id: string) => ({
		onMouseEnter: () => { setHoveredNode(id); setHoveredEdge(null); },
		onMouseLeave: () => setHoveredNode(null),
	});

	return (
		<div className={styles.container}>
			<div className={styles.desktopWrapper} role="region" aria-label="Token collaboration workflow — scroll horizontally on narrow screens">
				<svg viewBox="0 0 1060 1060" className={styles.svgDesktop} role="img" aria-labelledby="wf-title wf-desc">
					<title id="wf-title">Token Collaboration Workflow</title>
					<desc id="wf-desc">Workflow showing Token Owner (change request, Token Studio, Jira, Figma, Slack) and Development (Style Dictionary, iOS, Android, QA, Publish).</desc>
					<defs>
						<clipPath id="logoNodeClipDesktop">
							<rect x={0} y={0} width={44} height={44} rx={10} ry={10} />
						</clipPath>
					</defs>
					<rect x={0} y={0} width={520} height={1060} fill="rgba(239,246,255,0.4)" />
					<rect x={520} y={0} width={540} height={1060} fill="rgba(248,250,252,0.4)" />
					<line x1={520} y1={0} x2={520} y2={1060} stroke="#e2e8f0" strokeWidth={1} strokeOpacity={0.5} />
					<text x={260} y={desktop.positions.tokenOwner.y - 16} textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize={11} fontWeight={600} letterSpacing={1.5} fill="#94a3b8">DESIGN</text>
					<text x={desktop.positions.tokenOwner.cx} y={desktop.positions.tokenOwner.y - 16} textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize={11} fontWeight={700} letterSpacing={1.5} fill="#3b82f6">TOKEN OWNER</text>
					<text x={desktop.positions.tokenJson.cx} y={desktop.positions.tokenOwner.y - 16} textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize={11} fontWeight={600} letterSpacing={1.5} fill="#94a3b8">DEVELOPMENT</text>
					{desktopEdges.map((edge) => (
						<DiagramEdge
							key={edge.id}
							edge={edge}
							isHighlighted={connectedEdgeIds.has(edge.id)}
							isDimmed={anyHovered && !connectedEdgeIds.has(edge.id)}
							reducedMotion={reducedMotion}
							{...edgeHandlers(edge.id)}
						/>
					))}
					{desktopNodes.map((node) => (
						<DiagramNode
							key={node.id}
							node={node}
							isHovered={hoveredNode === node.id}
							isDimmed={anyHovered && !connectedNodeIds.has(node.id)}
							logoClipPathId="logoNodeClipDesktop"
							{...nodeHandlers(node.id)}
						/>
					))}
				</svg>
			</div>

			<svg viewBox="0 0 388 920" className={styles.svgMobile} role="img" aria-labelledby="wf-title-m wf-desc-m">
				<title id="wf-title-m">Token Collaboration Workflow</title>
				<desc id="wf-desc-m">Three-column workflow: Design (left), Token Owner (center), Development (right).</desc>
				<defs>
					<clipPath id="logoNodeClipMobile">
						<rect x={0} y={0} width={44} height={44} rx={10} ry={10} />
					</clipPath>
				</defs>
				<rect x={0} y={0} width={196} height={920} fill="rgba(239,246,255,0.4)" />
				<rect x={196} y={0} width={192} height={920} fill="rgba(248,250,252,0.4)" />
				<line x1={196} y1={0} x2={196} y2={920} stroke="#e2e8f0" strokeWidth={1} strokeOpacity={0.5} />
				<text x={98} y={mobile.positions.tokenOwner.y - 22} textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize={9} fontWeight={600} letterSpacing={1.2} fill="#94a3b8">DESIGN</text>
				<text x={MOBILE_SEPARATOR_X} y={mobile.positions.tokenOwner.y - 10} textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize={9} fontWeight={700} letterSpacing={1.2} fill="#3b82f6">TOKEN OWNER</text>
				<text x={292} y={mobile.positions.tokenOwner.y - 16} textAnchor="middle" fontFamily="Inter,system-ui,sans-serif" fontSize={9} fontWeight={600} letterSpacing={1.2} fill="#94a3b8">DEVELOPMENT</text>
				{mobileEdges.map((edge) => (
					<DiagramEdge
						key={edge.id}
						edge={edge}
						isHighlighted={connectedEdgeIds.has(edge.id)}
						isDimmed={anyHovered && !connectedEdgeIds.has(edge.id)}
						reducedMotion={reducedMotion}
						{...edgeHandlers(edge.id)}
					/>
				))}
				{mobileNodes.map((node) => (
					<DiagramNode
						key={node.id}
						node={node}
						isHovered={hoveredNode === node.id}
						isDimmed={anyHovered && !connectedNodeIds.has(node.id)}
						logoClipPathId="logoNodeClipMobile"
						{...nodeHandlers(node.id)}
					/>
				))}
			</svg>

			<p className={styles.scrollHint}>← Scroll to explore the full diagram →</p>
		</div>
	);
}
