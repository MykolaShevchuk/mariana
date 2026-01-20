import Image from 'next/image';
import Link from 'next/link';
import Tag from '../../components/Tag';

export default function GumtreeAppPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="py-6 px-6 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <Link href="/" className="text-blue-600 hover:text-blue-700 underline transition-colors outline-none focus:outline-none">
            ← Back
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-8 px-6 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 mb-2 font-serif">
              Gumtree
            </h1>
            <h2 className="text-lg sm:text-xl lg:text-2xl text-gray-600 mb-2 font-medium">
              App redesign
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6">2024</p>
            <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed">
              As part of the Gumtree app redesign for iOS and Android, I owned the Listings journey, covering listing creation, management and partner integrations.
            </p>
          </div>

          {/* Main Image */}
          <div className="flex items-center justify-center -ml-[80px] -mr-[80px] mb-16">
            <Image
              src="/gumtree-app-mobile.jpg"
              alt="Gumtree App redesign showing improved user experience and engagement metrics"
              width={800}
              height={600}
              sizes="100%"
              className="w-full object-contain md:hidden"
              priority
              quality={80}
            />
            <Image
              src="/gumtree-app.png"
              alt="Gumtree App redesign showing improved user experience and engagement metrics"
              width={800}
              height={600}
              sizes="100%"
              className="w-full object-contain hidden md:block"
              priority
              quality={80}
            />
          </div>
        </div>
      </section>

      {/* Case Study Content */}
      <section className="py-8 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid gap-12">
            {/* Overview */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">Overview</h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                The Gumtree app redesign was a major initiative to modernize the mobile experience across iOS and Android platforms. I was responsible for the complete Listings journey, from creation to management, including complex partner integrations and multi-categorization features.
              </p>
            </div>

            {/* Challenge */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">Challenge</h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                The existing app had outdated UI patterns, inconsistent user flows, and technical limitations that hindered the listing creation process. The multi-categorization feature was particularly complex, requiring careful consideration of both native and web-view approaches while maintaining a seamless user experience.
              </p>
            </div>

            {/* Solution */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">Solution</h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                I redesigned the entire Listings journey with a focus on usability and consistency. I introduced a comprehensive design system with tokens and cross-platform guidelines, ensuring consistency across teams. For the multi-categorization challenge, I worked with both native and web-view approaches, validating design decisions through moderated usability testing.
              </p>
            </div>

            {/* Results */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">Results</h3>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                The redesigned app significantly improved user engagement and listing creation success rates. The new design system provided consistency across teams and reduced development time for future features. The multi-categorization solution was successfully implemented and tested with positive user feedback.
              </p>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-4">Skills & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'UX Design',
                  'UI Design',
                  'App',
                  'Stakeholder management',
                  'Cross-functional collaboration',
                ].map((skill, index) => (
                  <Tag key={index}>
                    {skill}
                  </Tag>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 sm:px-8 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <Link 
            href="/" 
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors outline-none focus:outline-none"
          >
            View all projects
          </Link>
        </div>
      </footer>
    </div>
  );
}
