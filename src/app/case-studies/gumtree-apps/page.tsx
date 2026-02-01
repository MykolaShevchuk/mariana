import Image from 'next/image';
import Link from 'next/link';
import Tag from '@/components/Tag';
import Accordion from '@/components/Accordion';
import TextSection from '@/components/TextSection';

export default function GumtreeAppsPage() {
	return (
		<div className='min-h-screen bg-white'>
			{/* Navigation */}
			<nav className='py-6 px-6 sm:px-8'>
				<div className='max-w-6xl mx-auto'>
					<Link
						href='/'
						className='text-blue-600 hover:text-blue-700 underline transition-colors outline-none focus:outline-none'
					>
						← Back
					</Link>
				</div>
			</nav>

			{/* Hero Section */}
			<section className='pt-8 sm:pt-12 pb-4 sm:pb-8 px-4 sm:px-6 lg:px-8'>
				<div className='max-w-6xl mx-auto'>
					<div className='mb-6 sm:mb-8'>
						<h1 className="text-black font-['Lora'] text-[36px] sm:text-[40px] md:text-[50px] lg:text-[65px] font-semibold  mb-4 sm:mb-6 lg:mb-8">
							App redesign
						</h1>

						<div className='flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-16 items-start'>
							<div className='w-full lg:w-[20%]'>
								<p className='text-[#474747] text-base sm:text-lg md:text-xl lg:text-2xl font-light mb-1 sm:mb-2'>
									H1 2025
								</p>
								<p className='text-[#474747] text-base sm:text-lg md:text-xl lg:text-2xl font-light mb-1 sm:mb-2'>
									Gumtree.com
								</p>
							</div>

							<div className='flex-1 max-w-4xl'>
								<p className="text-[#464040] text-[18px] sm:text-[20px] lg:text-[24px] leading-[28px] sm:leading-[32px] lg:leading-[36px] mb-6 sm:mb-8 font-['Inter'] text-pretty">
									During the Gumtree iOS and Android app redesign, I led the redesign of seller journeys, including ad creation, management, and partner integrations. I established the foundations of a cross-platform design system using design tokens (prior to Figma Variables) to ensure consistency and scalability. Working closely with engineers, I tackled complex multi-category constraints and validated key decisions through usability testing.
								</p>

								<dl className="grid gap-4 sm:gap-5 text-[#464040] font-['Inter']">
									<div>
										<dt className='text-[14px] sm:text-[15px] font-semibold text-[#2d2d2d] mb-1'>Role</dt>
										<dd className='text-[15px] sm:text-[16px] lg:text-[17px] leading-relaxed'>
											Senior Product Designer (App Redesign, Design System → Seller Journeys)
										</dd>
									</div>
									<div>
										<dt className='text-[14px] sm:text-[15px] font-semibold text-[#2d2d2d] mb-1'>Team</dt>
										<dd className='text-[15px] sm:text-[16px] lg:text-[17px] leading-relaxed'>
											3 Product Designers, Product, Engineering
										</dd>
									</div>
									<div>
										<dt className='text-[14px] sm:text-[15px] font-semibold text-[#2d2d2d] mb-1'>Scope</dt>
										<dd className='text-[15px] sm:text-[16px] lg:text-[17px] leading-relaxed'>
											Greenfield app redesign, design system foundations, seller listing & management flows
										</dd>
									</div>
									<div>
										<dt className='text-[14px] sm:text-[15px] font-semibold text-[#2d2d2d] mb-1'>Impact</dt>
										<dd className='text-[15px] sm:text-[16px] lg:text-[17px] leading-relaxed'>
											Unblocked app rebuild, enabled light/dark mode, reduced UX debt, improved listing creation and revenue stability
										</dd>
									</div>
									<div>
										<dt className='text-[14px] sm:text-[15px] font-semibold text-[#2d2d2d] mb-1'>Constraints</dt>
										<dd className='text-[15px] sm:text-[16px] lg:text-[17px] leading-relaxed'>
											Legacy codebase, WebView pivot, payment limitations, tight delivery deadlines
										</dd>
									</div>
								</dl>
							</div>
						</div>
					</div>

					{/* Hero Image */}
					<div className=' sm:mt-8 lg:mt-12'>
						<div className='-mx-4 sm:-mx-6 lg:-mx-[200px] overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-thumb-gray-400/50 scrollbar-track-transparent hover:scrollbar-thumb-gray-400/70 scrollbar-thumb-rounded-full'>
							{/* Mobile Image */}
							<Image
								src='/gumtree-app-mobile.jpg'
								alt='Gumtree App redesign'
								width={800}
								height={600}
								className='w-full h-auto rounded-[12px] sm:rounded-[16px] lg:rounded-[20px] min-h-[400px] sm:min-h-auto object-contain sm:hidden'
								priority
								quality={90}
							/>
							{/* Desktop Image */}
							<Image
								src='/gumtree-app.png'
								alt='Gumtree App redesign'
								width={1600}
								height={800}
								className='w-full h-auto rounded-[12px] sm:rounded-[16px] lg:rounded-[20px] min-w-[1200px] min-h-[400px] sm:min-h-auto object-contain hidden sm:block'
								priority
								quality={90}
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Context & Constraints */}
			<TextSection title="Context & Constraints">
				<p className="mb-6 sm:mb-8">
					Gumtree is a UK marketplace operating within a previously centralised global app platform managed by eBay. Over time, this resulted in a legacy iOS and Android app with outdated architecture, slow iteration cycles, and increasing user dissatisfaction driven by bugs, performance issues, and inconsistent UX.
				</p>
				<p className="mb-6 sm:mb-8">
					As the global platform was decentralised, Gumtree took ownership of its app experience and made a strategic decision to rebuild the app as a greenfield product. The challenge was to modernise the experience while operating under significant technical constraints, tight delivery timelines, and parallel streams of work.
				</p>
				<p>
					The redesign ran across two tracks in parallel: establishing a scalable design system to support long-term development, while redesigning core user journeys to deliver immediate business impact.
				</p>
			</TextSection>

			<TextSection title="Business Problem">
				<p className="mb-6 sm:mb-8">
					The Gumtree mobile app was built on a shared global platform that limited Gumtree&apos;s ability to iterate and respond to local user needs. Over time, this resulted in significant technical and UX debt, making core journeys slow, complex, and difficult to evolve.
				</p>
				<p>
					Performance issues and fragile seller flows increasingly impacted user satisfaction and revenue-critical behaviour. Following the decentralisation of the global platform, Gumtree needed to modernise the app while maintaining engagement and revenue, and establish foundations for faster, more reliable product development.
				</p>
			</TextSection>

			<TextSection title="Objectives & Success Metrics">
				<h4 className="font-bold text-[#464040] text-[18px] leading-[24px] mb-1">Objective</h4>
				<p className="mb-6 sm:mb-8">
					Deliver a greenfield iOS and Android app that modernises the seller experience while maintaining existing engagement and revenue, and establishes a scalable foundation for rapid iteration and future growth.
				</p>
				<h4 className="font-bold text-[#464040] text-[18px] leading-[24px] mb-1">Success Metrics</h4>
				<p>
					The primary objective was to launch a greenfield mobile app that modernised the seller experience while preserving existing engagement and revenue. Success was measured by maintaining platform retention (~45%), increasing replies to seller listings, and keeping ad-related revenue stable or improving compared to the legacy app.
				</p>
			</TextSection>

			<TextSection title="Strategy & Approach">
				<p className="mb-6 sm:mb-8">
					To avoid repeating the problems of the legacy app, we started by putting strong foundations in place. I focused on creating a scalable, token based design system that allowed teams to design and build consistently across iOS and Android, and made later product work faster.
				</p>
				<p className="mb-6 sm:mb-8">
					Once the system was ready, we concentrated on seller journeys with the biggest business impact. We mapped existing app and web flows to understand how things worked, where they broke down, and where features were missing. Based on this, we redesigned the key native journeys to make them clearer and easier to use.
				</p>
				<p>
					Later, technical constraints required parts of the seller flow to move from native to WebView. We adjusted the designs to keep the experience feeling connected and tested the most sensitive steps with users to make sure the changes did not negatively affect payments or revenue.
				</p>
			</TextSection>

			<TextSection preTitle="Phase 1" title="Design System as an Enabler" noBottomPadding>
				<p className="mb-6 sm:mb-8">
					Creating a shared foundation to support a greenfield app rebuild and faster product delivery.
				</p>
				<h3 className="text-black font-['Lora'] text-[24px] sm:text-[28px] lg:text-[32px] font-semibold leading-tight mb-3 sm:mb-4 lg:mb-6">Problem</h3>
				<p className="mb-6 sm:mb-8">
					The legacy mobile app had no scalable UI foundation. App and web patterns were inconsistent, designers worked in silos, and engineers faced frequent UI changes, which made even small updates slow and risky.
				</p>
				<h3 className="text-black font-['Lora'] text-[24px] sm:text-[28px] lg:text-[32px] font-semibold leading-tight mb-3 sm:mb-4 lg:mb-6">Strategic Decision</h3>
				<p className="mb-6 sm:mb-8">
					To avoid recreating legacy UX and technical debt in the greenfield app, we deliberately invested in a design system before redesigning core journeys.
				</p>
				<h3 className="text-black font-['Lora'] text-[24px] sm:text-[28px] lg:text-[32px] font-semibold leading-tight mb-3 sm:mb-4 lg:mb-6">Discovery & Research</h3>
				<p className="mb-6 sm:mb-8">
					I reviewed established design systems to understand how they structure components and scale across products. A recurring pattern was the use of design tokens to separate design decisions from implementation.
				</p>
				<p className="mb-6 sm:mb-8">
					In parallel, I ran unmoderated usability testing to reassess the app&apos;s typeface. I compared the existing font, Inter, with Nunito Sans and Readex Pro. Readex Pro performed strongest in side by side comparisons, scoring highest for trust, friendliness, and modernity while remaining professional and easy to read on mobile. Based on this, it was selected as the new app typeface.
				</p>
				<p className="mb-6 sm:mb-8">
					Alongside these visual decisions, I carried out a focused design token discovery. As the app was being rebuilt from scratch across multiple platforms, design tokens provided a clear way to maintain consistency and create a reliable path from design to code. While dark mode was not part of the original scope, the token based setup made it possible to support it with minimal additional effort.
				</p>
				<h3 className="text-black font-['Lora'] text-[24px] sm:text-[28px] lg:text-[32px] font-semibold leading-tight mb-3 sm:mb-4 lg:mb-6">Solution</h3>
				<p className="mb-6 sm:mb-8">
					I built a token based design system using Token Studio, before Figma Variables were available. It was designed app first, with web specific needs scoped for a later phase to keep delivery focused.
				</p>
				<h3 className="text-black font-['Lora'] text-[24px] sm:text-[28px] lg:text-[32px] font-semibold leading-tight mb-3 sm:mb-4 lg:mb-6">Collaboration Model</h3>
				<p className="mb-6 sm:mb-8">
					To scale beyond a single owner, I set up a clear contribution model so multiple designers could create and update components safely, with shared rules for ownership, review, and consistency.
				</p>
				<h3 className="text-black font-['Lora'] text-[24px] sm:text-[28px] lg:text-[32px] font-semibold leading-tight mb-3 sm:mb-4 lg:mb-6">Outcome</h3>
				<p>
					The design system reduced rework, improved collaboration with engineers, and made journey design faster and more consistent. It provided a strong foundation for the greenfield app launch and future product development.
				</p>
			</TextSection>
		</div>
	);
}
