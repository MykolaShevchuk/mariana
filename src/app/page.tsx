import Navigation from './components/Navigation';
import {
	HeroSection,
	WorkSection,
	AboutSection,
	ExperienceSection,
	ContactSection,
	Footer,
} from './sections';

export default function Home() {
	return (
		<div className='min-h-screen bg-white'>
			<Navigation />
			<HeroSection />
			<WorkSection />
			<AboutSection />
			<ExperienceSection />
			<ContactSection />
			<Footer />
		</div>
	);
}
