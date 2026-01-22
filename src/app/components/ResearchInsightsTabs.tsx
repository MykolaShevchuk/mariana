'use client';

import { useState } from 'react';
import Image from 'next/image';
import RadarChart from '@/components/RadarChart';

const tabs = [
	{
		id: 'research-review',
		label: 'Research synthesis',
		description: 'Reviewed existing research, conducted stakeholder interviews, and carried out competitor analysis to identify opportunities and pain points.',
		type: 'radar' as const,
	},
	{
		id: 'stakeholder',
		label: 'Stakeholder interviews & CJM',
		description: 'Interviewed sellers, sales, SEO, and CRM stakeholders to understand user needs and business requirements.',
		type: 'image' as const,
		image: '/case-studies/gumtree-services/CJM.png',
	},
	{
		id: 'workshop',
		label: 'Workshop with partners',
		description: 'Ahead of a workshop with Bark partners, I prepared user flows to guide discussion. Together, we reviewed Gumtree and Bark journeys to align on technical and customer flows and create a more connected experience for sellers and buyers.',
		type: 'image' as const,
		image: '/case-studies/gumtree-services/flows.png',
	},
	// {
	// 	id: 'technical',
	// 	label: 'Technical limitations',
	// 	description: 'Identified and documented technical constraints and platform limitations to inform design decisions and feasibility.',
	// 	type: 'image' as const,
	// 	image: '/case-studies/gumtree-services/CJM.png',
	// },
];

export default function ResearchInsightsTabs() {
	const [activeTab, setActiveTab] = useState('research-review');
	const [selectedView, setSelectedView] = useState<'buyers' | 'sellers'>('buyers');

	const activeTabData = tabs.find(tab => tab.id === activeTab) || tabs[0];

	return (
		<section className='pt-0 pb-8 sm:pb-12 lg:pb-16 px-4 sm:px-6 lg:px-8'>
			<div className='max-w-6xl mx-auto'>
				<div className='sm:bg-gray-50 sm:p-8 sm:rounded-[20px] w-screen sm:w-full mb-16 -mx-4 sm:mx-auto sm:border sm:border-gray-100'>
					<div className='flex flex-col lg:flex-row gap-6 lg:gap-8'>
						{/* Accordion on the left - hidden on mobile, shown on desktop */}
						<div className='hidden lg:block flex-shrink-0 lg:w-96 px-4 sm:px-0'>
							<div className='space-y-2'>
								{tabs.map(tab => (
									<div key={tab.id}>
										<div className='flex items-center'>
											<button
												onClick={() => setActiveTab(tab.id)}
												className='flex items-center text-left p-2 focus:outline-none w-full'
											>
												<svg
													className={`w-4 h-4 text-[#464040] mr-3 transition-transform duration-200 flex-shrink-0 ${
														activeTab === tab.id ? 'rotate-90' : ''
													}`}
													fill='none'
													stroke='currentColor'
													viewBox='0 0 24 24'
												>
													<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
												</svg>
												<h4 className='font-bold text-[#464040] text-[18px] leading-[24px]'>{tab.label}</h4>
											</button>
										</div>
										{activeTab === tab.id && (
											<p className='text-[#464040] text-[16px] leading-[24px] ml-7 p-2'>{tab.description}</p>
										)}
									</div>
								))}
							</div>
						</div>

						{/* Mobile accordion with interleaved content */}
						<div className='lg:hidden flex-1 px-4'>
							<div className='space-y-2'>
								{tabs.map((tab, index) => (
									<div key={tab.id}>
										<div className='flex items-center'>
											<button
												onClick={() => setActiveTab(tab.id)}
												className='flex items-center text-left p-2 focus:outline-none w-full'
											>
												<svg
													className={`w-4 h-4 text-[#464040] mr-3 transition-transform duration-200 flex-shrink-0 ${
														activeTab === tab.id ? 'rotate-90' : ''
													}`}
													fill='none'
													stroke='currentColor'
													viewBox='0 0 24 24'
												>
													<path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
												</svg>
												<h4 className='font-bold text-[#464040] text-[18px] leading-[24px]'>{tab.label}</h4>
											</button>
										</div>
										{activeTab === tab.id && (
											<>
												<p className='text-[#464040] text-[16px] leading-[24px] ml-7 p-2 mb-4'>{tab.description}</p>
												{/* Content underneath expanded item on mobile */}
												<div className='mb-4'>
													{tab.type === 'radar' ? (
														<>
															<div className='bg-white rounded-lg pt-6 pb-0 px-6 relative'>
																<div className='flex flex-col items-center gap-4 mb-4'>
																	<div className='inline-flex bg-white rounded-lg p-0.5 border border-gray-200 shadow-sm'>
																		<button
																			onClick={() => setSelectedView('buyers')}
																			className={`px-4 py-1.5 text-[12px] font-medium rounded-md transition-all duration-200 ${
																				selectedView === 'buyers'
																					? 'text-white shadow-sm'
																					: 'text-[#464040] hover:bg-gray-50'
																			}`}
																			style={selectedView === 'buyers' ? { backgroundColor: '#132431' } : {}}
																		>
																			Buyers
																		</button>
																		<button
																			onClick={() => setSelectedView('sellers')}
																			className={`px-4 py-1.5 text-[12px] font-medium rounded-md transition-all duration-200 ${
																				selectedView === 'sellers'
																					? 'text-white shadow-sm'
																					: 'text-[#464040] hover:bg-gray-50'
																			}`}
																			style={selectedView === 'sellers' ? { backgroundColor: '#132431' } : {}}
																		>
																			Sellers
																		</button>
																	</div>
																	<div 
																		className='rounded-lg px-6 py-4 text-center'
																		style={{ backgroundColor: selectedView === 'buyers' ? '#1e7a8c' : '#e87444' }}
																	>
																		<div className='text-white/70 text-[12px] font-medium mb-1'>
																			{selectedView === 'buyers' ? 'Buyer Mindset' : 'Seller Mindset'}
																		</div>
																		<div className='text-white text-[20px] sm:text-[24px] font-bold leading-tight'>
																			{selectedView === 'buyers' ? 'Needing a service delivered' : 'Getting leads for a service'}
																		</div>
																	</div>
																</div>
																{selectedView === 'buyers' ? (
																	<RadarChart
																		data={[
																			{ label: 'Purchasing Readiness', value: 4.5 },
																			{ label: 'Search Specificity', value: 4 },
																			{ label: 'Information Needs', value: 4 },
																			{ label: 'Transaction Efficiency', value: 3 },
																			{ label: 'Trust & Safety Concerns', value: 3 },
																		]}
																		maxValue={5}
																		color='#1e7a8c'
																		legendLabel='Service Seekers'
																		width={550}
																		height={550}
																	/>
																) : (
																	<RadarChart
																		data={[
																			{ label: 'Category Experience', value: 4 },
																			{ label: 'Listing Speed', value: 2 },
																			{ label: 'Income Drive', value: 3 },
																			{ label: 'Transaction Efficiency', value: 1.5 },
																			{ label: 'Trust & Safety Concerns', value: 1.5 },
																		]}
																		maxValue={5}
																		color='#e87444'
																		legendLabel='Professional Service Sellers'
																		width={550}
																		height={550}
																	/>
																)}
															</div>
															<div className='flex justify-center mt-4'>
																<span 
																	className="text-[#464040] text-[14px] font-medium uppercase tracking-wider"
																	style={{ fontFamily: 'var(--font-cutive-mono), monospace' }}
																>
																	User Mindsets Framework
																</span>
															</div>
														</>
													) : (
														<div className={activeTab === 'workshop' ? '-mr-16 sm:-mr-32 overflow-x-hidden overflow-y-visible' : activeTab === 'stakeholder' ? '-mr-8 overflow-x-hidden overflow-y-visible' : ''}>
															<Image
																src={tab.image || ''}
																alt={`${tab.label} - Customer journey map showing user flows and pain points`}
																width={1400}
																height={800}
																className={
																	activeTab === 'workshop' 
																		? 'w-full h-auto sm:min-w-[800px] rounded-l-lg'
																		: activeTab === 'stakeholder'
																		? 'w-full h-auto sm:min-w-[800px] scale-[1.3] origin-top-left rounded-lg'
																		: 'w-full h-auto rounded-lg sm:min-w-[800px]'
																}
																quality={90}
															/>
														</div>
													)}
												</div>
											</>
										)}
									</div>
								))}
							</div>
						</div>

						{/* Content on the right - only shown on desktop */}
						<div className='hidden lg:block flex-1 overflow-x-hidden overflow-y-visible'>
							{activeTabData.type === 'radar' ? (
								<>
									{/* Radar charts for Research review */}
									<div className='bg-white rounded-lg pt-6 pb-0 px-6 sm:pt-8 sm:pb-0 sm:px-8 relative'>
									{/* Segmented Button and Mindset Card centered */}
									<div className='flex flex-col items-center gap-4 mb-4'>
										{/* Segmented Button */}
										<div className='inline-flex bg-white rounded-lg p-0.5 border border-gray-200 shadow-sm'>
											<button
												onClick={() => setSelectedView('buyers')}
												className={`px-4 py-1.5 text-[12px] font-medium rounded-md transition-all duration-200 ${
													selectedView === 'buyers'
														? 'text-white shadow-sm'
														: 'text-[#464040] hover:bg-gray-50'
												}`}
												style={selectedView === 'buyers' ? { backgroundColor: '#132431' } : {}}
											>
												Buyers
											</button>
											<button
												onClick={() => setSelectedView('sellers')}
												className={`px-4 py-1.5 text-[12px] font-medium rounded-md transition-all duration-200 ${
													selectedView === 'sellers'
														? 'text-white shadow-sm'
														: 'text-[#464040] hover:bg-gray-50'
												}`}
												style={selectedView === 'sellers' ? { backgroundColor: '#132431' } : {}}
											>
												Sellers
											</button>
										</div>
										{/* Mindset Card */}
										<div 
											className='rounded-lg px-6 py-4 text-center'
											style={{ backgroundColor: selectedView === 'buyers' ? '#1e7a8c' : '#e87444' }}
										>
											<div className='text-white/70 text-[12px] font-medium mb-1'>
												{selectedView === 'buyers' ? 'Buyer Mindset' : 'Seller Mindset'}
											</div>
											<div className='text-white text-[20px] sm:text-[24px] font-bold leading-tight'>
												{selectedView === 'buyers' ? 'Needing a service delivered' : 'Getting leads for a service'}
											</div>
										</div>
									</div>

									{/* Chart based on selection */}
									{selectedView === 'buyers' ? (
										<RadarChart
											data={[
												{ label: 'Purchasing Readiness', value: 4.5 },
												{ label: 'Search Specificity', value: 4 },
												{ label: 'Information Needs', value: 4 },
												{ label: 'Transaction Efficiency', value: 3 },
												{ label: 'Trust & Safety Concerns', value: 3 },
											]}
											maxValue={5}
											color='#1e7a8c'
											legendLabel='Service Seekers'
											width={550}
											height={550}
										/>
									) : (
										<RadarChart
											data={[
												{ label: 'Category Experience', value: 4 },
												{ label: 'Listing Speed', value: 2 },
												{ label: 'Income Drive', value: 3 },
												{ label: 'Transaction Efficiency', value: 1.5 },
												{ label: 'Trust & Safety Concerns', value: 1.5 },
											]}
											maxValue={5}
											color='#e87444'
											legendLabel='Professional Service Sellers'
											width={550}
											height={550}
										/>
									)}
								</div>
								
									{/* Framework label - centered below white card */}
									<div className='flex justify-center mt-4'>
										<span 
											className="text-[#464040] text-[14px] font-medium uppercase tracking-wider"
											style={{ fontFamily: 'var(--font-cutive-mono), monospace' }}
										>
											User Mindsets Framework
										</span>
									</div>
								</>
							) : (
								// Image for other tabs
								<div className={activeTab === 'workshop' ? '-mr-16 sm:-mr-32 pr-0 overflow-x-hidden overflow-y-visible' : activeTab === 'stakeholder' ? '-mr-8 sm:-mr-16 overflow-x-hidden overflow-y-visible' : ''}>
									<Image
										src={activeTabData.image || ''}
										alt={`${activeTabData.label} - Customer journey map showing user flows and pain points`}
										width={1400}
										height={800}
										className={
											activeTab === 'workshop' 
												? 'w-full h-auto sm:min-w-[800px] rounded-l-lg'
												: activeTab === 'stakeholder'
												? 'w-full h-auto sm:min-w-[800px] scale-[1.3] origin-top-left rounded-lg'
												: 'w-full h-auto rounded-lg sm:min-w-[800px]'
										}
										quality={90}
									/>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
