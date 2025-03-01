import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 to-base-200">
      {/* Navigation */}
      <nav className="navbar bg-base-100/80 backdrop-blur-md fixed top-0 z-50 shadow-sm px-4 lg:px-8">
        <div className="navbar-start">
          <Link 
            href="/" 
            className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            UpWork Scraper
          </Link>
        </div>
        <div className="navbar-end gap-3">
          <Link 
            href="/login" 
            className="btn btn-ghost btn-sm normal-case text-base hover:bg-base-200/50"
          >
            Login
          </Link>
          <Link 
            href="/signup" 
            className="btn btn-primary btn-sm normal-case text-base shadow-md hover:shadow-lg transition-shadow"
          >
            Sign Up
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 lg:px-8 pt-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 backdrop-blur-3xl"></div>
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient">
            Apply to Upwork Jobs 10x Faster
          </h1>
          <p className="text-lg md:text-xl mb-12 text-base-content/80 max-w-3xl mx-auto leading-relaxed">
            Stop refreshing Upwork manually. Our smart scraper finds the perfect jobs for you and lets you apply with just one click. Save time, apply more, earn more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/signup" 
              className="btn btn-primary btn-lg normal-case text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 px-8"
            >
              Start Scraping Free
            </Link>
            <Link 
              href="#features" 
              className="btn btn-ghost btn-lg normal-case text-lg hover:bg-base-200/50"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-base-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Why Use Our Job Scraper?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="card bg-base-200/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-base-300">
              <div className="card-body">
                <h3 className="card-title text-xl font-bold text-primary mb-4">Real-time Job Alerts</h3>
                <p className="text-base-content/80 leading-relaxed">Get notified instantly when new jobs matching your skills are posted. Never miss an opportunity again.</p>
              </div>
            </div>
            <div className="card bg-base-200/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-base-300">
              <div className="card-body">
                <h3 className="card-title text-xl font-bold text-secondary mb-4">One-Click Apply</h3>
                <p className="text-base-content/80 leading-relaxed">Save time with instant access to job URLs. Apply to more jobs in less time and increase your chances of success.</p>
              </div>
            </div>
            <div className="card bg-base-200/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 border border-base-300">
              <div className="card-body">
                <h3 className="card-title text-xl font-bold text-accent mb-4">Smart Filtering</h3>
                <p className="text-base-content/80 leading-relaxed">Our AI helps you find the most relevant jobs based on your skills and preferences. Focus on what matters.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center px-4 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Ready to Supercharge Your Job Search?
          </h2>
          <p className="text-lg md:text-xl mb-12 text-base-content/80 max-w-3xl mx-auto leading-relaxed">
            Join thousands of freelancers who are already using our tool to find and apply to the best Upwork jobs faster.
          </p>
          <Link 
            href="/signup" 
            className="btn btn-primary btn-lg normal-case text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5 px-12"
          >
            Get Started Free
          </Link>
        </div>
      </section>
    </div>
  );
}
