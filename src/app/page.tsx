import Link from "next/link";
import { Button } from "@/components/ui/button";

const ArrowRight = () => (
  <svg className="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="9 18 15 12 9 6"></polyline>
  </svg>
);

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Documentation Portal
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive guides, API references, and examples to help you get started with our platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3" asChild>
                <Link href="/en/docs/v1/getting-started">
                  Get Started
                  <ArrowRight />
                </Link>
              </Button>
              <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3" asChild>
                <Link href="/en/docs/v1/api-reference">
                  View API Reference
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Side - Navigation */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 sticky top-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Navigation</h3>
                <nav className="space-y-2">
                  <Link href="/en/docs/v1/getting-started" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-md transition-colors">
                    Getting Started
                  </Link>
                  <Link href="/en/docs/v1/installation" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-md transition-colors">
                    Installation
                  </Link>
                  <Link href="/en/docs/v1/api-reference" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-md transition-colors">
                    API Reference
                  </Link>
                  <Link href="/en/docs/v1/examples" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700 rounded-md transition-colors">
                    Examples
                  </Link>
                </nav>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Getting Started */}
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Getting Started</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Learn the basics and get up and running quickly with our comprehensive introduction.
                </p>
                <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50" asChild>
                  <Link href="/en/docs/v1/getting-started">
                    Learn more
                    <ArrowRight />
                  </Link>
                </Button>
              </div>

              {/* Installation */}
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Installation</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Step-by-step instructions to install and configure the platform on your system.
                </p>
                <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50" asChild>
                  <Link href="/en/docs/v1/installation">
                    Install now
                    <ArrowRight />
                  </Link>
                </Button>
              </div>

              {/* API Reference */}
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">API Reference</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Complete API documentation with endpoints, parameters, and response examples.
                </p>
                <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50" asChild>
                  <Link href="/en/docs/v1/api-reference">
                    Explore API
                    <ArrowRight />
                  </Link>
                </Button>
              </div>

              {/* Examples */}
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Examples</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Real-world examples and code samples to help you implement features faster.
                </p>
                <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50" asChild>
                  <Link href="/en/docs/v1/examples">
                    View examples
                    <ArrowRight />
                  </Link>
                </Button>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Key Features</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Everything you need to build amazing applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Easy to Use</h3>
              <p className="text-gray-600 dark:text-gray-300">Simple interface and comprehensive documentation.</p>
            </div>

            <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Comprehensive</h3>
              <p className="text-gray-600 dark:text-gray-300">Complete coverage with detailed explanations.</p>
            </div>

            <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Performance</h3>
              <p className="text-gray-600 dark:text-gray-300">Optimized for speed and efficiency.</p>
            </div>

            <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Community</h3>
              <p className="text-gray-600 dark:text-gray-300">Active support and regular updates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to get started?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of developers building amazing things with our platform.
          </p>
          <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3" asChild>
            <Link href="/en/docs/v1/getting-started">
              Start Building
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
