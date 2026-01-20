import Image from 'next/image';
import Link from 'next/link';
import Tag from '@/components/Tag';
import Accordion from '@/components/Accordion';
import CaseStudyHero from '@/components/CaseStudyHero';
import ImpactMetrics from '@/components/ImpactMetrics';
import TextSection from '@/components/TextSection';
import { Shield, Droplets, Megaphone, CheckCircle, DollarSign } from 'lucide-react';

export default function GumtreeServicesPage() {
	const tasksData = [
		{
			title: 'Customer Insights & Research',
			content:
				'Reviewed existing research, conducted stakeholder interviews (sellers, sales, CRM), and carried out competitor analysis to identify opportunities and pain points in Services.',
		},
		{
			title: 'Balancing UX & Revenue',
			content:
				'Partnered with the third-party ads team to re-position advertising, ensuring revenue was protected while improving the user experience.',
		},
		{
			title: 'Cross-Functional Collaboration',
			content:
				'Worked with CRM and marketing teams on communication strategies (email and push notifications), and aligned with JPS and sales teams on B2C seller needs.',
		},
		{
			title: 'Design & UX Delivery',
			content:
				'Defined buyer and seller journeys, advocating for user needs across technical and business discussions, and ensuring solutions worked for both Gumtree sellers and Bark partners.',
		},
		{
			title: 'Strategy & Vision',
			content:
				'Contributed to shaping the broader Services strategy, ensuring Gumtree could remain competitive ahead of the Bark integration by enriching seller profiles with skills and service details.',
		},
	];

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
			<CaseStudyHero
				title='Services redesign'
				metadata={{
					period: 'H1 2025',
					client: 'Gumtree.com',
				}}
				description='Redesigned the Services experience across multiple journeys as part of a strategic initiative to improve engagement and outcomes for service providers. The project delivered consistent growth compared to the previous version, achieving a 9% increase in replies, a 20% uplift in NPS and drove 60K new listings to the platform. Worked closely with stakeholders and cross-functional teams to align on requirements, ensure design consistency, and implement improvements that enhanced both usability and business performance.'
				heroImage={{
					mobile: '/gumtree-services-mobile.jpg',
					desktop: '/gumtree-services.png',
					mobileAlt:
						'Gumtree Services redesign showing mobile interfaces with service listings, provider profiles, and user flows',
					desktopAlt:
						'Gumtree Services redesign showing desktop interfaces with service listings, provider profiles, and user flows',
				}}
			/>

			{/* Impact Section */}
			<ImpactMetrics
				title=''
				subtitle='Outcome'
				description="Before we dive into the project details, here's a snapshot of the impact we delivered."
				metrics={[
					{ value: '↑ 9%', label: 'Replies' },
					{ value: '+ 60K', label: 'new listings' },
					{ value: '↑ 20%', label: 'NPS' },
					{ value: '↑ Leads', label: 'New revenue stream' },
					{ value: '↑ 6.4%', label: 'SRP to VIP' },
					{ value: '3PA', label: 'no negative impact' },
				]}
				className='mt-8 sm:mt-16 mb-16 sm:mb-32'
			/>

			{/* Problem Space */}
			<TextSection title='Problem'>
				<p className='mb-6 sm:mb-8'>
					Services were a small fraction of Gumtree&apos;s traffic and listings but represented a significant share of
					revenue. Despite the market opportunity (£71bn annual household spend on services, with strong demand in
					home improvements), Gumtree&apos;s Services vertical was in decline.
				</p>

				{/* Two column bullet points */}
				<div className='flex flex-col lg:flex-row gap-8 lg:gap-16'>
					<div className='flex-1'>
						<div className='flex gap-3 items-start mb-6'>
							<div className='w-6 h-6 flex-shrink-0 flex items-start justify-center'>
								<span className='text-[#464040] text-lg font-bold leading-tight'>→</span>
							</div>
							<div>
								<h4 className='font-bold text-[#464040] text-[18px] leading-[24px] mb-1'>High churn</h4>
								<p className='text-[16px] leading-[24px]'>High churn (78%) and declining leads.</p>
							</div>
						</div>
						<div className='flex gap-3 items-start mb-6'>
							<div className='w-6 h-6 flex-shrink-0 flex items-start justify-center'>
								<span className='text-[#464040] text-lg font-bold leading-tight'>→</span>
							</div>
							<div>
								<h4 className='font-bold text-[#464040] text-[18px] leading-[24px] mb-1'>Poor user experience</h4>
								<p className='text-[16px] leading-[24px]'>Journeys copied from For Sale, not tailored to Services.</p>
							</div>
						</div>
						<div className='flex gap-3 items-start'>
							<div className='w-6 h-6 flex-shrink-0 flex items-start justify-center'>
								<span className='text-[#464040] text-lg font-bold leading-tight'>→</span>
							</div>
							<div>
								<h4 className='font-bold text-[#464040] text-[18px] leading-[24px] mb-1'>Low trust</h4>
								<p className='text-[16px] leading-[24px]'>
									Lowest rated provider on trust (3.9/10), with no ID verification, vetting, reviews or guarantees.
									This limited buyer confidence and drove churn.
								</p>
							</div>
						</div>
					</div>

					<div className='flex-1'>
						<div className='flex gap-3 items-start mb-6'>
							<div className='w-6 h-6 flex-shrink-0 flex items-start justify-center'>
								<span className='text-[#464040] text-lg font-bold leading-tight'>→</span>
							</div>
							<div>
								<h4 className='font-bold text-[#464040] text-[18px] leading-[24px] mb-1'>Limited supply</h4>
								<p className='text-[16px] leading-[24px]'>84% of listings concentrated in 4 categories.</p>
							</div>
						</div>
						<div className='flex gap-3 items-start mb-6'>
							<div className='w-6 h-6 flex-shrink-0 flex items-start justify-center'>
								<span className='text-[#464040] text-lg font-bold leading-tight'>→</span>
							</div>
							<div>
								<h4 className='font-bold text-[#464040] text-[18px] leading-[24px] mb-1'>Outdated monetisation</h4>
								<p className='text-[16px] leading-[24px]'>Flat pricing for 2+ years, heavy discounts to retain revenue.</p>
							</div>
						</div>
						<div className='flex gap-3 items-start'>
							<div className='w-6 h-6 flex-shrink-0 flex items-start justify-center'>
								<span className='text-[#464040] text-lg font-bold leading-tight'>→</span>
							</div>
							<div>
								<h4 className='font-bold text-[#464040] text-[18px] leading-[24px] mb-1'>Low awareness</h4>
								<p className='text-[16px] leading-[24px]'>
									Gumtree wasn&apos;t top-of-mind for Services; weak SEO and little cross-sell meant users overlooked it
									compared to competitors.
								</p>
							</div>
						</div>
					</div>
				</div>
			</TextSection>

			{/* Goals */}
			<TextSection title='Goals'>
				<p className='mb-4 sm:mb-6 lg:mb-8'>
					To reverse decline and capture a share of the growing market, the Services strategy focused on five
					priorities:
				</p>

				{/* Two column goals with icons */}
				<div className='flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-16'>
					<div className='flex-1'>
						<div className='flex gap-3 items-start mb-6'>
							<div className='w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 flex items-start justify-center pt-1'>
								<Shield className='w-5 h-5 sm:w-6 sm:h-6 text-blue-600' />
							</div>
							<div>
								<h4 className='font-bold text-[#464040] text-[18px] leading-[24px] mb-1'>Trust</h4>
								<p className='text-[14px] sm:text-[15px] md:text-[16px] leading-[20px] sm:leading-[22px] md:leading-[24px]'>
									Build confidence through verification, reviews and guarantees.
								</p>
							</div>
						</div>
						<div className='flex gap-3 items-start mb-6'>
							<div className='w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 flex items-start justify-center pt-1'>
								<Droplets className='w-5 h-5 sm:w-6 sm:h-6 text-blue-500' />
							</div>
							<div>
								<h4 className='font-bold text-[#464040] text-[18px] leading-[24px] mb-1'>Liquidity</h4>
								<p className='text-[14px] sm:text-[15px] md:text-[16px] leading-[20px] sm:leading-[22px] md:leading-[24px]'>
									Expand supply across categories to give buyers real choice.
								</p>
							</div>
						</div>
						<div className='flex gap-3 items-start'>
							<div className='w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 flex items-start justify-center pt-1'>
								<Megaphone className='w-5 h-5 sm:w-6 sm:h-6 text-blue-500' />
							</div>
							<div>
								<h4 className='font-bold text-[#464040] text-[18px] leading-[24px] mb-1'>Awareness</h4>
								<p className='text-[14px] sm:text-[15px] md:text-[16px] leading-[20px] sm:leading-[22px] md:leading-[24px]'>
									Strengthen Gumtree&apos;s association with Services and drive cross-sell from other verticals.
								</p>
							</div>
						</div>
					</div>

					<div className='flex-1'>
						<div className='flex gap-3 items-start mb-6'>
							<div className='w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 flex items-start justify-center pt-1'>
								<CheckCircle className='w-5 h-5 sm:w-6 sm:h-6 text-blue-600' />
							</div>
							<div>
								<h4 className='font-bold text-[#464040] text-[18px] leading-[24px] mb-1'>Job Completion</h4>
								<p className='text-[14px] sm:text-[15px] md:text-[16px] leading-[20px] sm:leading-[22px] md:leading-[24px]'>
									Design curated journeys that help users complete tasks successfully.
								</p>
							</div>
						</div>
						<div className='flex gap-3 items-start'>
							<div className='w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 flex items-start justify-center pt-1'>
								<DollarSign className='w-5 h-5 sm:w-6 sm:h-6 text-blue-500' />
							</div>
							<div>
								<h4 className='font-bold text-[#464040] text-[18px] leading-[24px] mb-1'>Monetisation</h4>
								<p className='text-[14px] sm:text-[15px] md:text-[16px] leading-[20px] sm:leading-[22px] md:leading-[24px]'>
									Evolve pricing to better align with performance and value.
								</p>
							</div>
						</div>
					</div>
				</div>
			</TextSection>

			{/* My Role */}
			<TextSection title='My role'>
				<div className='flex flex-wrap gap-3 mb-6 sm:mb-8'>
					{[
						'UX Design',
						'UI Design',
						'App design',
						'Responsive',
						'3PA',
						'Partnerships',
						'SEO',
						'Stakeholder management',
						'Competitor analysis',
						'Cross-functional collaboration',
					].map((skill, index) => (
						<Tag key={index}>{skill}</Tag>
					))}
				</div>
				<p className='mb-6 sm:mb-8'>
					I was responsible for the Product Design of the Services initiative, focusing on creating better journeys
					for both buyers and sellers while balancing user experience with business requirements. This involved
					close collaboration with cross-functional teams, third-party partners, and stakeholders across Gumtree to
					align on goals, technical constraints, and revenue considerations.
				</p>

				<Accordion items={tasksData} />
			</TextSection>

			{/* Milestone 1 */}
			<TextSection preTitle='Milestone 1' title='Introducing Seller Skills' noBottomPadding>
				<p className='mb-6 sm:mb-8'>
					We introduced Seller Skills to highlight provider expertise, improve buyer matching, and strengthen
					Gumtree&apos;s position before integrating with Bark&apos;s richer service profiles.
				</p>

				{/* Two column bullet points */}
				<div className='flex flex-col lg:flex-row gap-8 lg:gap-16 mb-6 sm:mb-8'>
					<div className='flex-1'>
						{/* Problem */}
						<div className='flex gap-3 items-start mb-6'>
							<div className='w-6 h-6 flex-shrink-0 flex items-start justify-center'>
								<span className='text-[#464040] text-lg font-bold leading-tight'>→</span>
							</div>
							<div>
								<h4 className='font-bold text-[#464040] text-[18px] leading-[24px] mb-1'>Problem</h4>
								<p className='text-[16px] leading-[24px]'>
									Buyers struggled to identify the right service providers. Sellers had no easy way to showcase their
									expertise.
								</p>
							</div>
						</div>

						{/* Goal */}
						<div className='flex gap-3 items-start mb-6'>
							<div className='w-6 h-6 flex-shrink-0 flex items-start justify-center'>
								<span className='text-[#464040] text-lg font-bold leading-tight'>→</span>
							</div>
							<div>
								<h4 className='font-bold text-[#464040] text-[18px] leading-[24px] mb-1'>Goal</h4>
								<p className='text-[16px] leading-[24px]'>
									Introduce Seller Skills to highlight provider expertise. Help buyers find relevant providers faster.
								</p>
							</div>
						</div>

						{/* Strategic Context */}
						<div className='flex gap-3 items-start'>
							<div className='w-6 h-6 flex-shrink-0 flex items-start justify-center'>
								<span className='text-[#464040] text-lg font-bold leading-tight'>→</span>
							</div>
							<div>
								<h4 className='font-bold text-[#464040] text-[18px] leading-[24px] mb-1'>Strategic Context</h4>
								<p className='text-[16px] leading-[24px]'>
									Seller Skills were a key step ahead of the strategic partnership with Bark. This ensured Gumtree&apos;s
									listings could match Bark&apos;s richer profiles.
								</p>
							</div>
						</div>
					</div>

					<div className='flex-1'>
						{/* Impact & Measures */}
						<div className='flex gap-3 items-start mb-6'>
							<div className='w-6 h-6 flex-shrink-0 flex items-start justify-center'>
								<span className='text-[#464040] text-lg font-bold leading-tight'>→</span>
							</div>
							<div>
								<h4 className='font-bold text-[#464040] text-[18px] leading-[24px] mb-1'>Impact & Measures</h4>
								<p className='text-[16px] leading-[24px]'>
									Success was defined by improved SRP→VIP (Search Results Page to View Item Page) conversions. Success
									was also defined by improved VIP→Reply conversions.
								</p>
							</div>
						</div>

						{/* Risks & Considerations */}
						<div className='flex gap-3 items-start'>
							<div className='w-6 h-6 flex-shrink-0 flex items-start justify-center'>
								<span className='text-[#464040] text-lg font-bold leading-tight'>→</span>
							</div>
							<div>
								<h4 className='font-bold text-[#464040] text-[18px] leading-[24px] mb-1'>Risks & Considerations</h4>
								<ul className='text-[16px] leading-[24px] list-disc ml-4 space-y-1'>
									<li>Standardisation across 350+ categories.</li>
									<li>Overlap between categories and skills.</li>
									<li>Moderation of custom skills.</li>
									<li>Ensuring existing users update their profiles.</li>
								</ul>
							</div>
						</div>
					</div>
				</div>

				{/* Seller Journey */}
				<div className='mt-8 sm:mt-12'>
					<h3 className="text-black font-['Lora'] text-[24px] sm:text-[28px] lg:text-[32px] font-semibold leading-tight mb-3 sm:mb-4 lg:mb-6">
						Seller journey
					</h3>
					<p>
						Skills added during listing creation, saved per category, and manageable at account level.
					</p>
				</div>
			</TextSection>

			{/* Seller Journey Images */}
			<section className='py-12 sm:py-8 px-4 sm:px-6 lg:px-8'>
				<div className='max-w-6xl mx-auto'>
					{/* Seller Journey Image - Mobile */}
					<div className='w-full overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-thumb-gray-400/50 scrollbar-track-transparent hover:scrollbar-thumb-gray-400/70 scrollbar-thumb-rounded-full lg:hidden pl-0 lg:pl-24'>
						<div className='-mx-4 sm:-mx-6'>
							<Image
								src='/case-studies/gumtree-services/seller-journey.png'
								alt='Seller journey flow showing the complete process from listing creation to managing skills'
								width={1200}
								height={600}
								className='w-4/5 h-auto min-w-[800px] object-contain mx-auto'
							/>
						</div>
					</div>
				</div>

				{/* Seller Journey Image - Desktop */}
				<div className='hidden lg:block -mx-4 sm:-mx-6 lg:-mx-[200px] overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-thumb-gray-400/50 scrollbar-track-transparent hover:scrollbar-thumb-gray-400/70 scrollbar-thumb-rounded-full'>
					<Image
						src='/case-studies/gumtree-services/seller-journey.png'
						alt='Seller journey flow showing the complete process from listing creation to managing skills'
						width={1200}
						height={600}
						className='w-full h-auto max-w-7xl mx-auto rounded-[12px] sm:rounded-[16px] lg:rounded-[20px] min-w-[1200px] object-contain'
					/>
				</div>
			</section>

				{/* Buyer Journey */}
				<TextSection subTitle='Buyer journey' noBottomPadding>
					<p className='mb-12 sm:mb-16'>
						Skills displayed on VIP (View item) pages and SRP cards, with future plans for filters and search
						integration.
					</p>
				</TextSection>

				{/* Buyer Journey Image */}
				<section className='py-12 sm:py-8 px-4 sm:px-6 lg:px-8'>
					<div className='max-w-6xl mx-auto'>
						<div className='sm:bg-[#DCDBCE] sm:py-6 sm:pr-6 sm:pb-6 sm:pl-0 sm:rounded-[20px] w-screen sm:w-full mx-auto mb-16 overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-thumb-gray-400/50 scrollbar-track-transparent hover:scrollbar-thumb-gray-400/70 scrollbar-thumb-rounded-full -mx-4 sm:mx-auto'>
							<Image
								src='/case-studies/gumtree-services/buyer-journey.png'
								alt='Buyer journey flow showing the complete process from service discovery to provider selection'
								width={1200}
								height={600}
								className='w-full h-auto sm:max-w-3xl sm:pl-6 sm:mx-auto sm:rounded-[18px] min-w-[300px] sm:min-w-auto object-contain'
							/>
						</div>
					</div>
				</section>

				{/* Outcome */}
				<TextSection subTitle='Outcome'>
					<p>
						100% adoption of Seller skills, 27% change rate (how many sellers edit the suggested skills).
					</p>
				</TextSection>

			{/* Milestone 2 */}
			<TextSection preTitle='Milestone 2' title='Improving UI for Gumtree Service professionals' noBottomPadding>
				<p className='mb-16 sm:mb-20'>
					Gumtree&apos;s Services pages were inherited from &apos;For Sale&apos; and did not meet the expectations of service
					providers or buyers. Competitors offered optimised and structured profiles, while Gumtree did not. With
					the Bark integration on the horizon we needed to improve Gumtree&apos;s UI to ensure consistency, enhance the
					user experience and avoid negative sentiment among sellers.
				</p>

				{/* SRP Redesign */}
				<div className='mb-12 sm:mb-16'>
					<h3 className="text-black font-['Lora'] text-[32px] font-semibold leading-tight mb-4 sm:mb-6">
						Search results page redesign
					</h3>
					<p className='mb-6 sm:mb-8'>
						I updated the Services SRP to make provider details clearer and more actionable. CTAs (request a quote,
						call) were surfaced on cards, skills and ratings added, image prominence reduced, and edge cases
						addressed for a consistent experience.
					</p>
				</div>
			</TextSection>

			{/* SRP Image */}
			<section className='py-12 sm:py-8 px-4 sm:px-6 lg:px-8'>
				<div className='max-w-6xl mx-auto'>
					<div className='sm:bg-[#DCDBCE] sm:py-6 sm:pr-6 sm:pb-6 sm:pl-0 sm:rounded-[20px] w-screen sm:w-full mx-auto mb-16 -mx-4 sm:mx-auto'>
						<Image
							src='/case-studies/gumtree-services/milestone-2-SRP.png'
							alt='View Item Page showing enhanced Bark provider profile with verified skills, ratings, and improved CTAs'
							width={1200}
							height={600}
							className='w-full h-auto sm:max-w-3xl sm:pl-6 sm:mx-auto min-w-[300px] sm:min-w-auto object-contain'
							quality={80}
						/>
					</div>
				</div>
			</section>

			{/* SRP Image 2 */}
			<section className='py-12 sm:py-8 px-4 sm:px-6 lg:px-8'>
				<div className='max-w-6xl mx-auto'>
					<div className='sm:bg-[#DCDBCE] sm:py-6 sm:pr-6 sm:pb-0 sm:pl-0 sm:rounded-[20px] w-screen sm:w-full mx-auto mb-16 -mx-4 sm:mx-auto'>
						<Image
							src='/case-studies/gumtree-services/milestone-2-SRP-2.png'
							alt='Search results page showing Bark provider listings with enhanced filtering and sorting'
							width={1200}
							height={600}
							className='w-full h-auto sm:max-w-full sm:pl-6 sm:pr-6 sm:mx-auto min-w-[300px] sm:min-w-auto object-contain'
							quality={80}
						/>
					</div>
				</div>
			</section>

			{/* VIP Redesign */}
			<TextSection subTitle='View item page redesign' noBottomPadding>
				<p className='mb-6 sm:mb-8'>
					I restructured the Services VIP page to prioritise key details and improve clarity. Changes included
					highlighting essential information, adding reviews (via the Trust team&apos;s Google Reviews integration),
					enhancing navigation, and improving the Portfolio section to better showcase provider work.
				</p>
			</TextSection>

			{/* VIP Image */}
			<section className='py-12 sm:py-8 px-4 sm:px-6 lg:px-8'>
				<div className='max-w-6xl mx-auto'>
					<div className='sm:bg-[#DCDBCE] sm:py-6 sm:pr-6 sm:pb-6 sm:pl-0 sm:rounded-[20px] w-screen sm:w-full mx-auto mb-16 -mx-4 sm:mx-auto'>
						<Image
							src='/case-studies/gumtree-services/milestone-2-VIP.png'
							alt='View Item Page showing enhanced Bark provider profile with verified skills, ratings, and improved CTAs'
							width={1200}
							height={600}
							className='w-full h-auto sm:max-w-3xl sm:pl-6 sm:mx-auto min-w-[300px] sm:min-w-auto object-contain'
							quality={80}
						/>
					</div>
				</div>
			</section>

			{/* Outcome */}
			<TextSection subTitle='Outcome'>
				<p>
					+6.4% SRP to VIP, +9% VIP to reply.
				</p>
			</TextSection>

			{/* Milestone 3 */}
			<TextSection preTitle='Milestone 3' title='Gumtree × Bark Strategic Partnership' noBottomPadding>
				<p className='mb-6 sm:mb-8'>
					Gumtree&apos;s first strategic partnership in the services space connected 10M monthly Gumtree users with 30K+
					trusted Bark professionals across more than 1,000 categories.
				</p>
				<p className='mb-6 sm:mb-8'>
					The collaboration expanded the Services vertical fivefold and introduced richer Bark profiles – including
					verified skills, ratings and reviews – directly into Gumtree. To support the integration, the home
					services UX was overhauled, making it easier for users to discover, filter and book trusted providers.
				</p>

				{/* Post a job feature */}
				<div className='mt-16 sm:mt-20 mb-12 sm:mb-16'>
					<h3 className="text-black font-['Lora'] text-[32px] font-semibold leading-tight mb-4 sm:mb-6">
						Post a job feature
					</h3>
					<p className='mb-1 sm:mb-2'>
						While Request a Quote connects buyers with a single provider, Post a Job lets them submit one job
						description and share it with multiple relevant service providers at once. The form appears at the top
						of category search results and can be enabled or disabled depending on the category.
					</p>
				</div>
			</TextSection>

			{/* Post a job feature images */}
			<section className='py-12 sm:py-8 px-4 sm:px-6 lg:px-8'>
				<div className='max-w-6xl mx-auto'>
					{/* Post a job feature image - Mobile */}
					<div className='w-full overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-thumb-gray-400/50 scrollbar-track-transparent hover:scrollbar-thumb-gray-400/70 scrollbar-thumb-rounded-full lg:hidden mb-12 sm:mb-16'>
						<div className='-mx-4 sm:-mx-6'>
							<Image
								src='/case-studies/gumtree-services/post-a-job-feature.png'
								alt='Post a job feature user flow showing the complete journey from job posting to provider selection'
								width={1200}
								height={600}
								className='w-full h-auto min-w-[1000px] object-contain'
								priority
								quality={80}
							/>
						</div>
					</div>
				</div>

				{/* Post a job feature image - Desktop */}
				<div className='hidden lg:block mx-auto overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-thumb-gray-400/50 scrollbar-track-transparent hover:scrollbar-thumb-gray-400/70 scrollbar-thumb-rounded-full mb-12 sm:mb-16'>
					<Image
						src='/case-studies/gumtree-services/post-a-job-feature.png'
						alt='Post a job feature user flow showing the complete journey from job posting to provider selection'
						width={1200}
						height={600}
						className='w-full h-auto rounded-[12px] sm:rounded-[16px] lg:rounded-[20px] min-w-[1200px] object-contain'
						priority
						quality={80}
					/>
				</div>
			</section>

			{/* Request a quote feature */}
			<TextSection subTitle='Request a quote feature' noBottomPadding>
				<p className='mb-3 sm:mb-4'>
					We introduced a new flow that lets buyers send job details directly to service providers. It captures
					essential information and makes it easier for users to connect with the right professionals, allowing
					them to message a specific provider directly.
				</p>
			</TextSection>

			{/* Request a quote feature images */}
			<section className='py-12 sm:py-8 px-4 sm:px-6 lg:px-8'>
				<div className='max-w-6xl mx-auto'>
					{/* Request a quote feature image - Mobile */}
					<div className='w-full overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-thumb-gray-400/50 scrollbar-track-transparent hover:scrollbar-thumb-gray-400/70 scrollbar-thumb-rounded-full lg:hidden mb-12 sm:mb-16'>
						<div className='-mx-4 sm:-mx-6'>
							<Image
								src='/case-studies/gumtree-services/request-a-quote-feature.png'
								alt='Request a quote feature user flow showing the complete journey from service selection to quote confirmation'
								width={1200}
								height={600}
								className='w-full h-auto min-w-[1000px] object-contain'
								priority
								quality={80}
							/>
						</div>
					</div>
				</div>

				{/* Request a quote feature image - Desktop */}
				<div className='hidden lg:block mx-auto overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-thumb-gray-400/50 scrollbar-track-transparent hover:scrollbar-thumb-gray-400/70 scrollbar-thumb-rounded-full mb-12 sm:mb-16'>
					<Image
						src='/case-studies/gumtree-services/request-a-quote-feature.png'
						alt='Request a quote feature user flow showing the complete journey from service selection to quote confirmation'
						width={1200}
						height={600}
						className='w-full h-auto rounded-[12px] sm:rounded-[16px] lg:rounded-[20px] min-w-[1200px] object-contain'
						priority
						quality={80}
					/>
				</div>
			</section>

			{/* SRP */}
			<TextSection subTitle='Search results page. Bark' noBottomPadding>
				<p className='mb-6 sm:mb-8'>
					The Search Results Page was redesigned to integrate Bark&apos;s rich provider profiles seamlessly into
					Gumtree&apos;s interface. The new design prioritizes key information like ratings, skills, and availability
					while maintaining Gumtree&apos;s familiar navigation patterns. Enhanced CTAs for &quot;Request a quote&quot; and
					&quot;Request a call back&quot; were prominently featured to drive conversions.
				</p>
			</TextSection>

			{/* SRP image */}
			<section className='py-12 sm:py-8 px-4 sm:px-6 lg:px-8'>
				<div className='max-w-6xl mx-auto'>
					<div className='sm:bg-[#DCDBCE] sm:py-6 sm:pr-6 sm:pb-6 sm:pl-0 sm:rounded-[20px] w-screen sm:w-full mx-auto mb-16 sm:mb-32 mt-8 sm:mt-32 -mx-4 sm:mx-auto'>
						<Image
							src='/case-studies/gumtree-services/milestone-3-SRP.png'
							alt='Search Results Page showing Bark integration with enhanced provider cards, ratings, and improved CTAs'
							width={1200}
							height={600}
							className='w-full h-auto sm:max-w-3xl sm:pl-6 sm:mx-auto sm:-my-[128px] min-w-[300px] sm:min-w-auto object-contain'
							quality={80}
						/>
					</div>
				</div>
			</section>

			{/* VIP */}
			<TextSection subTitle='View item page. Bark' noBottomPadding>
				<p className='mb-6 sm:mb-8'>
					The View Item Page was restructured to showcase Bark&apos;s comprehensive provider profiles with enhanced
					trust signals. The redesign prioritized key information like verified skills, detailed ratings, and
					portfolio examples while maintaining clear navigation and prominent action buttons for quote requests
					and direct contact.
				</p>
			</TextSection>

			{/* VIP image */}
			<section className='py-12 sm:py-8 px-4 sm:px-6 lg:px-8'>
				<div className='max-w-6xl mx-auto'>
					<div className='sm:bg-[#DCDBCE] sm:py-6 sm:pr-6 sm:pb-6 sm:pl-0 sm:rounded-[20px] w-screen sm:w-full mx-auto mb-16 sm:mb-32 mt-8 sm:mt-32 -mx-4 sm:mx-auto'>
						<Image
							src='/case-studies/gumtree-services/milestone-3-VIP.png'
							alt='View Item Page showing enhanced Bark provider profile with verified skills, ratings, and improved CTAs'
							width={1200}
							height={600}
							className='w-full h-auto sm:max-w-3xl sm:pl-6 sm:mx-auto sm:-my-[128px] min-w-[300px] sm:min-w-auto object-contain'
							quality={80}
						/>
					</div>
				</div>
			</section>

			{/* Outcome & Impact Metrics */}
			<ImpactMetrics
				title=''
				subtitle='Outcome'
				description='This work enabled the successful launch of the Bark partnership, connecting 10 million Gumtree users with over 30 000 verified professionals. By improving UX and balancing user needs with business and revenue goals, we created a more competitive, future-ready platform for growth and new partnerships.'
				metrics={[
					{ value: '↑ 9%', label: 'Replies' },
					{ value: '+ 60K', label: 'new listings' },
					{ value: '↑ 20%', label: 'NPS' },
					{ value: '↑ Leads', label: 'New revenue stream' },
					{ value: '↑ 6.4%', label: 'SRP to VIP' },
					{ value: '3PA', label: 'no negative impact' },
				]}
				className='mt-8 sm:mt-16 mb-16 sm:mb-32'
			/>

			{/* Thank You Section */}
			<section className='py-12 sm:py-16 pb-24 sm:pb-32 px-4 sm:px-6 lg:px-8'>
				<div className='max-w-6xl mx-auto text-center'>
					<div className='max-w-[38.4rem] mx-auto'>
						<h2 className="text-black font-['Lora'] text-[28px] sm:text-[36px] lg:text-[45px] font-semibold leading-tight mb-4 sm:mb-6 lg:mb-8">
							Thank you for your time
						</h2>
						<p className='text-[#464040] text-[18px] sm:text-[24px] leading-[28px] sm:leading-[36px]'>
							This is only a snapshot of the design work behind the project. I&apos;d love to share more of the process and
							discuss any questions you may have.
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}
