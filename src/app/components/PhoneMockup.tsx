'use client';

import { useEffect, useRef } from 'react';
import styles from './PhoneMockup.module.css';

type PhoneMockupProps = {
	src: string;
	type: 'video' | 'image';
	alt?: string;
	className?: string;
};

export default function PhoneMockup({ src, type, alt = '', className }: PhoneMockupProps) {
	const videoRef = useRef<HTMLVideoElement>(null);

	useEffect(() => {
		if (type !== 'video') return;
		const video = videoRef.current;
		if (!video) return;

		video.playbackRate = 0.75;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					video.playbackRate = 0.75;
					video.play().catch(() => {});
				} else {
					video.pause();
				}
			},
			{ threshold: 0.25 }
		);

		observer.observe(video);
		return () => observer.disconnect();
	}, [type]);

	return (
		<div className={`${styles.phone} ${className ?? ''}`}>
			{/* Side buttons */}
			<div className={styles.buttonVolUp} aria-hidden='true' />
			<div className={styles.buttonVolDown} aria-hidden='true' />
			<div className={styles.buttonPower} aria-hidden='true' />

			{/* Screen */}
			<div className={styles.screen}>
				{/* Content */}
				<div className={styles.content}>
					{type === 'video' ? (
						<video
							ref={videoRef}
							src={src}
							className={styles.media}
							muted
							playsInline
							loop
							aria-label={alt || 'Phone screen video'}
						/>
					) : (
						<img
							src={src}
							alt={alt}
							className={styles.media}
						/>
					)}
				</div>
			</div>
		</div>
	);
}
