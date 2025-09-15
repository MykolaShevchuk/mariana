import Image from 'next/image';
import Link from 'next/link';
import Tag from '@/components/Tag';
import Accordion from '@/components/Accordion';
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
			<section className='pt-8 sm:pt-12 pb-6 sm:pb-8 px-4 sm:px-6 lg:px-8'>
				<div className='max-w-6xl mx-auto'>
					<div className='mb-6 sm:mb-8'>
						<h1 className="text-black font-['Lora'] text-[36px] sm:text-[40px] md:text-[50px] lg:text-[65px] font-semibold  mb-4 sm:mb-6 lg:mb-8">
							Services redesign
						</h1>

						<div className='flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-16 items-start'>
							<div className='w-full lg:w-[20%]'>
								<p className='text-[#474747] text-base sm:text-lg md:text-xl lg:text-2xl font-light mb-1 sm:mb-2'>
									Q1 2025
								</p>
								<p className='text-[#474747] text-base sm:text-lg md:text-xl lg:text-2xl font-light mb-1 sm:mb-2'>
									Gumtree.com
								</p>
							</div>

							<div className='flex-1'>
								<p className="text-[#464040] text-[18px] sm:text-[20px] lg:text-[24px] leading-[28px] sm:leading-[32px] lg:leading-[36px] max-w-4xl mb-6 sm:mb-8 font-['Inter']">
									Redesigned the Services experience across multiple journeys as part of a strategic initiative to
									improve engagement and outcomes for service providers. The project delivered consistent growth
									compared to the previous version, achieving a 9% increase in replies and a 15% uplift in service
									leads. Worked closely with stakeholders and cross-functional teams to align on requirements, ensure
									design consistency, and implement improvements that enhanced both usability and business performance.
								</p>
							</div>
						</div>
					</div>

					{/* Hero Image */}
					<div className='mt-6 sm:mt-8 lg:mt-12'>
						<div className='-mx-4 sm:-mx-6 lg:-mx-[200px]'>
							<Image
								src='/gumtree-services.jpg'
								alt='Gumtree Services redesign showing desktop and mobile interfaces with service listings, provider profiles, and user flows'
								width={1600}
								height={800}
								className='w-full h-auto rounded-[12px] sm:rounded-[16px] lg:rounded-[20px]'
								priority
								quality={90}
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Impact Section */}
			<section className='py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[rgba(217,217,217,0.1)]'>
				<div className='max-w-6xl mx-auto'>
					<h2 className="text-black font-['Lora'] text-[32px] sm:text-[40px] lg:text-[45px] font-semibold leading-tight mb-6 sm:mb-8 lg:mb-12">
						Impact
					</h2>
					<div className='flex flex-row items-center justify-between max-w-5xl gap-2 sm:gap-8 lg:gap-16'>
						<div className='flex flex-col items-center gap-1 sm:gap-3 lg:gap-5 flex-1'>
							<div className='text-[#2463eb] text-[24px] sm:text-[48px] lg:text-[64px] font-bold leading-tight'>
								+ 9%
							</div>
							<div className='text-[#464040] text-[12px] sm:text-[16px] lg:text-[20px] text-center leading-[16px] sm:leading-[24px]'>
								replies
							</div>
						</div>
						<div className='flex flex-col items-center gap-1 sm:gap-3 lg:gap-5 flex-1'>
							<div className='text-[#2463eb] text-[24px] sm:text-[48px] lg:text-[64px] font-bold leading-tight'>
								+ 15%
							</div>
							<div className='text-[#464040] text-[12px] sm:text-[16px] lg:text-[20px] text-center leading-[16px] sm:leading-[24px]'>
								Leads
							</div>
						</div>
						<div className='flex flex-col items-center gap-1 sm:gap-3 lg:gap-5 flex-1'>
							<div className='text-[#2463eb] text-[24px] sm:text-[48px] lg:text-[64px] font-bold leading-tight'>
								+ 30K
							</div>
							<div className='text-[#464040] text-[12px] sm:text-[16px] lg:text-[20px] text-center leading-[16px] sm:leading-[24px]'>
								New Ads
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Problem Space */}
			<section className='py-12 sm:py-32 px-4 sm:px-6 lg:px-8'>
				<div className='max-w-6xl mx-auto'>
					<h2 className="text-black font-['Lora'] text-[32px] sm:text-[40px] lg:text-[45px] font-semibold leading-tight mb-4 sm:mb-6 lg:mb-10">
						Problem
					</h2>
					<div className='pl-0 lg:pl-24'>
						<p className="text-[#464040] text-[18px] sm:text-[20px] lg:text-[24px] leading-[28px] sm:leading-[32px] lg:leading-[36px] max-w-4xl mb-6 sm:mb-8 font-['Inter']">
							Services were a small fraction of Gumtree&apos;s traffic and listings but represented a significant share of
							revenue. Despite the market opportunity (£71bn annual household spend on services, with strong demand in
							home improvements), Gumtree&apos;s Services vertical was in decline.
						</p>

						{/* Two column bullet points */}
						<div className='flex flex-col lg:flex-row gap-8 lg:gap-16 max-w-5xl'>
							<div className='flex-1'>
								<div className='flex gap-3 items-start mb-6'>
									<div className='w-6 h-6 flex-shrink-0 flex items-start justify-center'>
										<span className='text-[#464040] text-lg font-bold leading-tight'>→</span>
									</div>
									<div>
										<p className="font-bold text-[#464040] text-[16px] leading-[24px] mb-1 font-['Inter']">
											High churn
										</p>
										<p className="text-[#464040] text-[16px] leading-[24px] font-['Inter']">
											High churn (78%) and declining leads.
										</p>
									</div>
								</div>
								<div className='flex gap-3 items-start mb-6'>
									<div className='w-6 h-6 flex-shrink-0 flex items-start justify-center'>
										<span className='text-[#464040] text-lg font-bold leading-tight'>→</span>
									</div>
									<div>
										<p className="font-bold text-[#464040] text-[16px] leading-[24px] mb-1 font-['Inter']">
											Poor user experience
										</p>
										<p className="text-[#464040] text-[16px] leading-[24px] font-['Inter']">
											Journeys copied from For Sale, not tailored to Services.
										</p>
									</div>
								</div>
								<div className='flex gap-3 items-start'>
									<div className='w-6 h-6 flex-shrink-0 flex items-start justify-center'>
										<span className='text-[#464040] text-lg font-bold leading-tight'>→</span>
									</div>
									<div>
										<p className="font-bold text-[#464040] text-[16px] leading-[24px] mb-1 font-['Inter']">Low trust</p>
										<p className="text-[#464040] text-[16px] leading-[24px] font-['Inter']">
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
										<p className="font-bold text-[#464040] text-[16px] leading-[24px] mb-1 font-['Inter']">
											Limited supply
										</p>
										<p className="text-[#464040] text-[16px] leading-[24px] font-['Inter']">
											84% of listings concentrated in 4 categories.
										</p>
									</div>
								</div>
								<div className='flex gap-3 items-start mb-6'>
									<div className='w-6 h-6 flex-shrink-0 flex items-start justify-center'>
										<span className='text-[#464040] text-lg font-bold leading-tight'>→</span>
									</div>
									<div>
										<p className="font-bold text-[#464040] text-[16px] leading-[24px] mb-1 font-['Inter']">
											Outdated monetisation
										</p>
										<p className="text-[#464040] text-[16px] leading-[24px] font-['Inter']">
											Flat pricing for 2+ years, heavy discounts to retain revenue.
										</p>
									</div>
								</div>
								<div className='flex gap-3 items-start'>
									<div className='w-6 h-6 flex-shrink-0 flex items-start justify-center'>
										<span className='text-[#464040] text-lg font-bold leading-tight'>→</span>
									</div>
									<div>
										<p className="font-bold text-[#464040] text-[16px] leading-[24px] mb-1 font-['Inter']">
											Low awareness
										</p>
										<p className="text-[#464040] text-[16px] leading-[24px] font-['Inter']">
											Gumtree wasn&apos;t top-of-mind for Services; weak SEO and little cross-sell meant users overlooked it
											compared to competitors.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Goals */}
			<section className='py-12 sm:py-16 px-4 sm:px-6 lg:px-8'>
				<div className='max-w-6xl mx-auto'>
					<h2 className="text-black font-['Lora'] text-[32px] sm:text-[40px] lg:text-[45px] font-semibold leading-tight mb-4 sm:mb-6 lg:mb-10">
						Goals
					</h2>
					<div className='pl-0 lg:pl-24'>
						<p className='text-[#464040] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] leading-[24px] sm:leading-[28px] md:leading-[32px] lg:leading-[36px] max-w-xl mb-4 sm:mb-6 lg:mb-8'>
							To reverse decline and capture a share of the growing market, the Services strategy focused on five
							priorities:
						</p>

						{/* Two column goals with checkboxes */}
						<div className='flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-16 max-w-5xl'>
							<div className='flex-1'>
								<div className='flex gap-3 items-start mb-4 sm:mb-6 pr-0 lg:pr-32 pb-2 sm:pb-4'>
									<div className='w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 flex items-start justify-center pt-1'>
										<Shield className='w-5 h-5 sm:w-6 sm:h-6 text-blue-600' />
									</div>
									<div>
										<p className='font-bold text-[#464040] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] leading-[20px] sm:leading-[24px] md:leading-[28px] lg:leading-[32px] mb-1'>
											Trust
										</p>
										<p className='text-[#464040] text-[14px] sm:text-[15px] md:text-[16px] leading-[20px] sm:leading-[22px] md:leading-[24px]'>
											Build confidence through verification, reviews and guarantees.
										</p>
									</div>
								</div>
								<div className='flex gap-3 items-start mb-4 sm:mb-6 pr-0 lg:pr-32 pb-2 sm:pb-4'>
									<div className='w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 flex items-start justify-center pt-1'>
										<Droplets className='w-5 h-5 sm:w-6 sm:h-6 text-blue-500' />
									</div>
									<div>
										<p className='font-bold text-[#464040] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] leading-[20px] sm:leading-[24px] md:leading-[28px] lg:leading-[32px] mb-1'>
											Liquidity
										</p>
										<p className='text-[#464040] text-[14px] sm:text-[15px] md:text-[16px] leading-[20px] sm:leading-[22px] md:leading-[24px]'>
											Expand supply across categories to give buyers real choice.
										</p>
									</div>
								</div>
								<div className='flex gap-3 items-start pr-0 lg:pr-32 pb-2 sm:pb-4'>
									<div className='w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 flex items-start justify-center pt-1'>
										<Megaphone className='w-5 h-5 sm:w-6 sm:h-6 text-blue-500' />
									</div>
									<div>
										<p className='font-bold text-[#464040] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] leading-[20px] sm:leading-[24px] md:leading-[28px] lg:leading-[32px] mb-1'>
											Awareness
										</p>
										<p className='text-[#464040] text-[14px] sm:text-[15px] md:text-[16px] leading-[20px] sm:leading-[22px] md:leading-[24px]'>
											Strengthen Gumtree&apos;s association with Services and drive cross-sell from other verticals.
										</p>
									</div>
								</div>
							</div>

							<div className='flex-1'>
								<div className='flex gap-3 items-start mb-4 sm:mb-6 pr-0 lg:pr-32 pb-2 sm:pb-4'>
									<div className='w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 flex items-start justify-center pt-1'>
										<CheckCircle className='w-5 h-5 sm:w-6 sm:h-6 text-blue-600' />
									</div>
									<div>
										<p className='font-bold text-[#464040] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] leading-[20px] sm:leading-[24px] md:leading-[28px] lg:leading-[32px] mb-1'>
											Job Completion
										</p>
										<p className='text-[#464040] text-[14px] sm:text-[15px] md:text-[16px] leading-[20px] sm:leading-[22px] md:leading-[24px]'>
											Design curated journeys that help users complete tasks successfully.
										</p>
									</div>
								</div>
								<div className='flex gap-3 items-start pr-0 lg:pr-32 pb-2 sm:pb-4'>
									<div className='w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 flex items-start justify-center pt-1'>
										<DollarSign className='w-5 h-5 sm:w-6 sm:h-6 text-blue-500' />
									</div>
									<div>
										<p className='font-bold text-[#464040] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] leading-[20px] sm:leading-[24px] md:leading-[28px] lg:leading-[32px] mb-1'>
											Monetisation
										</p>
										<p className='text-[#464040] text-[14px] sm:text-[15px] md:text-[16px] leading-[20px] sm:leading-[22px] md:leading-[24px]'>
											Evolve pricing to better align with performance and value.
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* My Role */}
			<section className='py-12 sm:py-16 px-4 sm:px-6 lg:px-8'>
				<div className='max-w-6xl mx-auto'>
					<h2 className="text-black font-['Lora'] text-[32px] sm:text-[40px] lg:text-[45px] font-semibold leading-tight mb-4 sm:mb-6 lg:mb-10">
						My role
					</h2>
					<div className='pl-0 lg:pl-24 max-w-4xl'>
						<div className='flex flex-wrap gap-3 mb-6 sm:mb-8 mr-0 lg:mr-64'>
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
						<p className='text-[#464040] text-[18px] sm:text-[20px] lg:text-[24px] leading-[28px] sm:leading-[32px] lg:leading-[36px] max-w-5xl mb-6 sm:mb-8'>
							I was responsible for the Product Design of the Services initiative, focusing on creating better journeys
							for both buyers and sellers while balancing user experience with business requirements. This involved
							close collaboration with cross-functional teams, third-party partners, and stakeholders across Gumtree to
							align on goals, technical constraints, and revenue considerations.
						</p>

						<Accordion items={tasksData} />
					</div>
				</div>
			</section>

			{/* Milestone 1 */}
			<section className='py-12 sm:py-16 px-4 sm:px-6 lg:px-8'>
				<div className='max-w-6xl mx-auto'>
					<div className='mb-6 sm:mb-8'>
						<span className='text-[#2463eb] text-[18px] sm:text-[20px] lg:text-[24px] font-bold uppercase leading-[24px]'>
							Milestone 1
						</span>
						<h2 className="text-black font-['Lora'] text-[28px] sm:text-[36px] lg:text-[45px] font-semibold leading-tight mt-2 sm:mt-4">
							Introducing Seller Skills
						</h2>
					</div>
					<div className='pl-0 lg:pl-24 max-w-3xl'>
						<p className='text-[#464040] text-[18px] sm:text-[20px] lg:text-[24px] leading-[28px] sm:leading-[32px] lg:leading-[36px] mb-6 sm:mb-8'>
							We introduced Seller Skills to highlight provider expertise, improve buyer matching, and strengthen
							Gumtree&apos;s position before integrating with Bark&apos;s richer service profiles.
						</p>

						{/* Problem */}
						<div className='mb-8'>
							<div className='flex gap-3 items-start mb-4'>
								<div className='w-6 h-6 flex-shrink-0 flex items-start justify-center'>
									<span className='text-[#464040] text-lg font-bold'>→</span>
								</div>
								<div>
									<p className="font-bold text-[#464040] text-[16px] leading-[24px] mb-2 font-['Inter']">Problem</p>
									<p className="text-[#464040] text-[16px] leading-[24px] font-['Inter']">
										Buyers struggled to identify the right service providers. Sellers had no easy way to showcase their
										expertise.
									</p>
								</div>
							</div>
						</div>

						{/* Goal */}
						<div className='mb-8'>
							<div className='flex gap-3 items-start mb-4'>
								<div className='w-6 h-6 flex-shrink-0 flex items-start justify-center'>
									<span className='text-[#464040] text-lg font-bold'>→</span>
								</div>
								<div>
									<p className="font-bold text-[#464040] text-[16px] leading-[24px] mb-2 font-['Inter']">Goal</p>
									<p className="text-[#464040] text-[16px] leading-[24px] font-['Inter']">
										Introduce Seller Skills to highlight provider expertise. Help buyers find relevant providers faster.
									</p>
								</div>
							</div>
						</div>

						{/* Strategic Context */}
						<div className='mb-8'>
							<div className='flex gap-3 items-start mb-4'>
								<div className='w-6 h-6 flex-shrink-0 flex items-start justify-center'>
									<span className='text-[#464040] text-lg font-bold'>→</span>
								</div>
								<div>
									<p className="font-bold text-[#464040] text-[16px] leading-[24px] mb-2 font-['Inter']">
										Strategic Context
									</p>
									<p className="text-[#464040] text-[16px] leading-[24px] font-['Inter']">
										Seller Skills were a key step ahead of the strategic partnership with Bark. This ensured Gumtree&apos;s
										listings could match Bark&apos;s richer profiles.
									</p>
								</div>
							</div>
						</div>

						{/* Impact & Measures */}
						<div className='mb-8'>
							<div className='flex gap-3 items-start mb-4'>
								<div className='w-6 h-6 flex-shrink-0 flex items-start justify-center'>
									<span className='text-[#464040] text-lg font-bold'>→</span>
								</div>
								<div>
									<p className="font-bold text-[#464040] text-[16px] leading-[24px] mb-2 font-['Inter']">
										Impact & Measures
									</p>
									<p className="text-[#464040] text-[16px] leading-[24px] font-['Inter']">
										Success was defined by improved SRP→VIP (Search Results Page to View Item Page) conversions. Success
										was also defined by improved VIP→Reply conversions.
									</p>
								</div>
							</div>
						</div>

						{/* Risks & Considerations */}
						<div className='mb-12'>
							<div className='flex gap-3 items-start mb-4'>
								<div className='w-6 h-6 flex-shrink-0 flex items-start justify-center'>
									<span className='text-[#464040] text-lg font-bold'>→</span>
								</div>
								<div>
									<p className="font-bold text-[#464040] text-[16px] leading-[24px] mb-2 font-['Inter']">
										Risks & Considerations
									</p>
									<ul className="text-[#464040] text-[16px] leading-[24px] font-['Inter'] list-disc ml-4 space-y-1">
										<li>Standardisation across 350+ categories.</li>
										<li>Overlap between categories and skills.</li>
										<li>Moderation of custom skills.</li>
										<li>Ensuring existing users update their profiles.</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Seller Journey */}
				<section className='py-12 sm:py-8 px-4 sm:px-6 lg:px-8'>
					<div className='max-w-6xl mx-auto'>
						<div className='pl-0 lg:pl-24'>
							<h3 className="text-black font-['Lora'] text-[24px] sm:text-[28px] lg:text-[32px] font-semibold leading-tight mb-3 sm:mb-4 lg:mb-6">
								Seller journey
							</h3>
						</div>
						<div className='pl-0 lg:pl-24'>
							<p className='text-[#464040] text-[16px] leading-[24px] max-w-3xl '>
								Skills added during listing creation, saved per category, and manageable at account level.
							</p>

							{/* Seller Journey Image */}
							<div className='rounded-[12px] sm:rounded-[16px] lg:rounded-[20px] w-full lg:-ml-24  overflow-visible'>
								<div className='-mx-4 sm:-mx-6 lg:-mx-[200px]'>
									<Image
										src='/case-studies/gumtree-services/seller-journey.png'
										alt='Seller journey flow showing the complete process from listing creation to managing skills'
										width={1200}
										height={600}
										className='w-full h-auto'
									/>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Buyer Journey */}
				<section className='py-12 sm:py-8 px-4 sm:px-6 lg:px-8'>
					<div className='max-w-6xl mx-auto'>
						<div className='pl-0 lg:pl-24'>
							<h3 className="text-black font-['Lora'] text-[24px] sm:text-[28px] lg:text-[32px] font-semibold leading-tight mb-3 sm:mb-4 lg:mb-6">
								Buyer journey
							</h3>
						</div>
						<div className='pl-0 lg:pl-24'>
							<p className='text-[#464040] text-[16px] leading-[24px] max-w-3xl mb-12 sm:mb-16'>
								Skills displayed on VIP (View item) pages and SRP cards, with future plans for filters and search
								integration.
							</p>

							{/* Buyer Journey Image */}
							<div className='bg-gray-50 py-6 pr-6 pb-6 pl-0 rounded-[20px] w-full lg:-ml-24 mb-16'>
								<Image
									src='/case-studies/gumtree-services/buyer-journey.png'
									alt='Buyer journey flow showing the complete process from service discovery to provider selection'
									width={1200}
									height={600}
									className='w-full h-auto max-w-3xl mx-auto rounded-[18px]'
								/>
							</div>
						</div>
						<div className='max-w-6xl mx-auto'>
							<div className='pl-0 lg:pl-24'>
								<h3 className="text-black font-['Lora'] text-[24px] sm:text-[28px] lg:text-[32px] font-semibold leading-tight mb-3 sm:mb-4 lg:mb-6">
									Outcome
								</h3>
								<p className='text-[#464040] text-[16px] leading-[24px] max-w-3xl mb-6 sm:mb-8'>
									100% adoption of Seller skills, 27% change rate (how many sellers edit the suggested skills).
								</p>
							</div>
						</div>
					</div>
				</section>
			</section>

			{/* Milestone 2 */}
			<section className='py-12 sm:py-16 px-4 sm:px-6 lg:px-8'>
				<div className='max-w-6xl mx-auto'>
					<div className='mb-6 sm:mb-8'>
						<span className='text-[#2463eb] text-[18px] sm:text-[20px] lg:text-[24px] font-bold uppercase leading-[24px]'>
							Milestone 2
						</span>
						<h2 className="text-black font-['Lora'] text-[28px] sm:text-[36px] lg:text-[45px] font-semibold leading-tight mt-2 sm:mt-4">
							Improving UI for Gumtree Service professionals
						</h2>
					</div>
					<div className='pl-0 lg:pl-24'>
						<p className='text-[#464040] text-[18px] sm:text-[20px] lg:text-[24px] leading-[28px] sm:leading-[32px] lg:leading-[36px] max-w-3xl mb-16 sm:mb-20'>
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
							<p className='text-[#464040] text-[18px] sm:text-[20px] leading-[28px] sm:leading-[30px] max-w-3xl mb-6 sm:mb-8'>
								I updated the Services SRP to make provider details clearer and more actionable. CTAs (request a quote,
								call) were surfaced on cards, skills and ratings added, image prominence reduced, and edge cases
								addressed for a consistent experience.
							</p>
							<div className='bg-gray-50 py-6 pr-6 pb-6 pl-0 rounded-[20px] w-full lg:-ml-24 mb-16'>
								<Image
									src='/case-studies/gumtree-services/milestone-2-SRP.png'
									alt='View Item Page showing enhanced Bark provider profile with verified skills, ratings, and improved CTAs'
									width={1200}
									height={600}
									className='w-full h-auto max-w-3xl pl-6 mx-auto'
									quality={80}
								/>
							</div>
						</div>

						{/* VIP Redesign */}
						<div className='mb-8 sm:mb-12'>
							<h3 className="text-black font-['Lora'] text-[32px] font-semibold leading-tight mb-4 sm:mb-6">
								View item page redesign
							</h3>
							<p className='text-[#464040] text-[18px] sm:text-[20px] leading-[28px] sm:leading-[30px] max-w-3xl mb-6 sm:mb-8'>
								I restructured the Services VIP page to prioritise key details and improve clarity. Changes included
								highlighting essential information, adding reviews (via the Trust team&apos;s Google Reviews integration),
								enhancing navigation, and improving the Portfolio section to better showcase provider work.
							</p>

							<div className='bg-gray-50 py-6 pr-6 pb-6 pl-0 rounded-[20px] w-full lg:-ml-24 mb-16'>
								<Image
									src='/case-studies/gumtree-services/milestone-2-VIP.png'
									alt='View Item Page showing enhanced Bark provider profile with verified skills, ratings, and improved CTAs'
									width={1200}
									height={600}
									className='w-full h-auto max-w-3xl pl-6 mx-auto'
									quality={80}
								/>
							</div>
						</div>
					</div>
					{/* Outcome */}
					<div className='max-w-6xl mx-auto'>
						<div className='pl-0 lg:pl-24'>
							<h3 className="text-black font-['Lora'] text-[24px] sm:text-[28px] lg:text-[32px] font-semibold leading-tight mb-3 sm:mb-4 lg:mb-6">
								Outcome
							</h3>
							<p className='text-[#464040] text-[16px] leading-[24px] max-w-3xl mb-6 sm:mb-8'>
								+6.4% SRP to VIP, +9% VIP to reply.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Milestone 3 */}
			<section className='py-12 sm:py-16 px-4 sm:px-6 lg:px-8'>
				<div className='max-w-6xl mx-auto'>
					<div className='mb-6 sm:mb-8'>
						<span className='text-[#2463eb] text-[16px] sm:text-[18px] lg:text-[20px] font-bold uppercase leading-[24px]'>
							Milestone 3
						</span>
						<h2 className="text-black font-['Lora'] text-[28px] sm:text-[36px] lg:text-[45px] font-semibold leading-tight mt-2 sm:mt-4">
							Gumtree × Bark Strategic Partnership
						</h2>
					</div>
					<div className='pl-0 lg:pl-24'>
						<p className='text-[#464040] text-[18px] sm:text-[20px] lg:text-[24px] leading-[28px] sm:leading-[32px] lg:leading-[36px] max-w-3xl mb-6 sm:mb-8'>
							Gumtree&apos;s first strategic partnership in the services space connected 10M monthly Gumtree users with 30K+
							trusted Bark professionals across more than 1,000 categories.
						</p>
						<p className='text-[#464040] text-[18px] sm:text-[20px] lg:text-[24px] leading-[28px] sm:leading-[32px] lg:leading-[36px] max-w-3xl mb-6 sm:mb-8'>
							The collaboration expanded the Services vertical fivefold and introduced richer Bark profiles – including
							verified skills, ratings and reviews – directly into Gumtree. To support the integration, the home
							services UX was overhauled, making it easier for users to discover, filter and book trusted providers.
						</p>

						{/* Post a job feature */}
						<div className='mt-16 sm:mt-20 mb-12 sm:mb-16'>
							<h3 className="text-black font-['Lora'] text-[32px] font-semibold leading-tight mb-4 sm:mb-6">
								Post a job feature
							</h3>
							<p className='text-[#464040] text-[18px] sm:text-[20px] leading-[28px] sm:leading-[30px] max-w-3xl mb-1 sm:mb-2'>
								While Request a Quote connects buyers with a single provider, Post a Job lets them submit one job
								description and share it with multiple relevant service providers at once. The form appears at the top
								of category search results and can be enabled or disabled depending on the category.
							</p>

							{/* Post a job feature image */}
							<div className='bg-gray-50 py-4 sm:py-6 px-0 rounded-[12px] sm:rounded-[16px] lg:rounded-[20px] w-full lg:-ml-24 mb-16 sm:mb-24 lg:mb-32 mt-16 sm:mt-24 lg:mt-12 overflow-visible'>
								<div className='-mx-4 sm:-mx-6 lg:-mx-[200px]'>
									<Image
										src='/case-studies/gumtree-services/post-a-job-feature.png'
										alt='Post a job feature user flow showing the complete journey from job posting to provider selection'
										width={1200}
										height={600}
										className='w-full h-auto'
										priority
										quality={80}
									/>
								</div>
							</div>
						</div>

						{/* Request a quote feature */}
						<div className='mb-12 sm:mb-16'>
							<h3 className="text-black font-['Lora'] text-[32px] font-semibold leading-tight mb-4 sm:mb-6">
								Request a quote feature
							</h3>
							<p className='text-[#464040] text-[18px] sm:text-[20px] leading-[28px] sm:leading-[30px] max-w-3xl mb-3 sm:mb-4'>
								We introduced a new flow that lets buyers send job details directly to service providers. It captures
								essential information and makes it easier for users to connect with the right professionals, allowing
								them to message a specific provider directly.
							</p>

							{/* Request a quote feature image */}
							<div className='bg-gray-50 py-4 sm:py-6 px-0 rounded-[12px] sm:rounded-[16px] lg:rounded-[20px] w-full lg:-ml-24 mb-16 sm:mb-24 lg:mb-32 mt-16 sm:mt-24 lg:mt-12 overflow-visible'>
								<div className='-mx-4 sm:-mx-6 lg:-mx-[200px]'>
									<Image
										src='/case-studies/gumtree-services/request-a-quote-feature.png'
										alt='Request a quote feature user flow showing the complete journey from service selection to quote confirmation'
										width={1200}
										height={600}
										className='w-full h-auto'
										priority
										quality={80}
									/>
								</div>
							</div>
						</div>

						{/* SRP */}
						<div className='mb-12 sm:mb-16'>
							<h3 className="text-black font-['Lora'] text-[32px] font-semibold leading-tight mb-4 sm:mb-6">
								Search results page. Bark
							</h3>
							<p className='text-[#464040] text-[18px] sm:text-[20px] leading-[28px] sm:leading-[30px] max-w-3xl mb-6 sm:mb-8'>
								The Search Results Page was redesigned to integrate Bark&apos;s rich provider profiles seamlessly into
								Gumtree&apos;s interface. The new design prioritizes key information like ratings, skills, and availability
								while maintaining Gumtree&apos;s familiar navigation patterns. Enhanced CTAs for &quot;Request a quote&quot; and
								&quot;Request a call back&quot; were prominently featured to drive conversions.
							</p>

							{/* SRP image */}
							<div className='bg-gray-50 py-6 pr-6 pb-6 pl-0 rounded-[20px] w-full lg:-ml-24 mb-32 mt-32'>
								<Image
									src='/case-studies/gumtree-services/milestone-3-SRP.png'
									alt='Search Results Page showing Bark integration with enhanced provider cards, ratings, and improved CTAs'
									width={1200}
									height={600}
									className='w-full h-auto max-w-3xl pl-6 mx-auto -my-[128px]'
									quality={80}
								/>
							</div>
						</div>

						{/* VIP */}
						<div className='mt-16 sm:mt-40 mb-8 sm:mb-12'>
							<h3 className="text-black font-['Lora'] text-[32px] font-semibold leading-tight mb-4 sm:mb-6">
								View item page. Bark
							</h3>
							<p className='text-[#464040] text-[18px] sm:text-[20px] leading-[28px] sm:leading-[30px] max-w-3xl mb-6 sm:mb-8'>
								The View Item Page was restructured to showcase Bark&apos;s comprehensive provider profiles with enhanced
								trust signals. The redesign prioritized key information like verified skills, detailed ratings, and
								portfolio examples while maintaining clear navigation and prominent action buttons for quote requests
								and direct contact.
							</p>

							{/* VIP image */}
							<div className='bg-gray-50 py-6 pr-6 pb-6 pl-0 rounded-[20px] w-full lg:-ml-24 mb-32 mt-32'>
								<Image
									src='/case-studies/gumtree-services/milestone-3-VIP.png'
									alt='View Item Page showing enhanced Bark provider profile with verified skills, ratings, and improved CTAs'
									width={1200}
									height={600}
									className='w-full h-auto max-w-3xl pl-6 mx-auto -my-[128px]'
									quality={80}
								/>
							</div>
						</div>
					</div>
					{/* Outcome */}

					<div className='max-w-6xl mx-auto'>
						<div className='pl-0 lg:pl-24'>
							<h3 className="text-black font-['Lora'] text-[24px] sm:text-[28px] lg:text-[32px] font-semibold leading-tight mb-3 sm:mb-4 lg:mb-6">
								Outcome
							</h3>
							<p className='text-[#464040] text-[16px] leading-[24px] max-w-3xl mb-6 sm:mb-8'>
								+15% new leads, +30K new listings, partnership revenue growth.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Thank You Section */}
			<section className='py-12 sm:py-16 pb-24 sm:pb-32 px-4 sm:px-6 lg:px-8'>
				<div className='max-w-3xl mx-auto text-center'>
					<h2 className="text-black font-['Lora'] text-[28px] sm:text-[36px] lg:text-[45px] font-semibold leading-tight mb-4 sm:mb-6 lg:mb-8">
						Thank you for your time
					</h2>
					<p className='text-[#464040] text-[24px] leading-[36px] max-w-3xl mx-auto'>
						This is only a snapshot of the design work behind the project. I&apos;d love to share more of the process and
						discuss any questions you may have.
					</p>
				</div>
			</section>
		</div>
	);
}
