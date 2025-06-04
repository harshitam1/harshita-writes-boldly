
import { Link } from 'react-router-dom';
import { ArrowRight, Coffee, Heart, Sparkles } from 'lucide-react';
import { blogPosts } from '../data/blogData';
import Layout from '../components/Layout';

const Index = () => {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <Layout>
      {/* Hero Section - Full Screen */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <div className="mb-8">
              <Sparkles className="w-12 h-12 text-navy-400 mx-auto mb-4 animate-float" />
            </div>
            
            <h1 className="font-serif text-6xl md:text-8xl font-bold text-navy-800 mb-8">
              honestly, harshita
            </h1>
            
            <div className="max-w-3xl mx-auto mb-12">
              <p className="text-2xl md:text-3xl font-body text-navy-600 leading-relaxed mb-6">
                welcome to my messy, beautiful corner of the internet
              </p>
              <p className="text-lg md:text-xl font-body text-navy-500 leading-relaxed">
                where i spill my thoughts like coffee on a monday morning, share stories that make me laugh-cry, 
                and document this wild ride called life. grab a cup of something warm and stay awhile ✨
              </p>
            </div>

            <div className="flex flex-col items-center gap-8 mb-12">
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link 
                  to="/journal" 
                  className="inline-flex items-center px-10 py-5 bg-navy-700 text-white font-sans font-medium text-xl rounded-xl hover:bg-navy-800 transition-all duration-300 shadow-lg hover-lift"
                >
                  dive into my journal
                  <Heart className="ml-3 w-6 h-6" />
                </Link>
                <Link 
                  to="/about" 
                  className="inline-flex items-center px-10 py-5 bg-cream-200 text-navy-800 font-sans font-medium text-xl rounded-xl hover:bg-cream-300 transition-all duration-300 shadow-lg hover-lift"
                >
                  get to know me
                  <Sparkles className="ml-3 w-6 h-6" />
                </Link>
              </div>
              
              <div className="text-center">
                <p className="text-navy-400 font-body text-lg mb-4">
                  currently vibing to: indie folk, overthinking everything, and way too much matcha
                </p>
                <div className="flex items-center justify-center gap-4 text-navy-300">
                  <span className="w-2 h-2 bg-navy-300 rounded-full animate-pulse"></span>
                  <span className="font-body">writing from my cozy corner</span>
                  <span className="w-2 h-2 bg-navy-300 rounded-full animate-pulse" style={{animationDelay: '1s'}}></span>
                </div>
              </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="flex flex-col items-center text-navy-400">
                <span className="font-body text-sm mb-2">scroll for more</span>
                <ArrowRight className="w-6 h-6 rotate-90" />
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-6 h-6 bg-sage-200 rounded-full opacity-60 animate-float-1"></div>
        <div className="absolute top-40 right-20 w-4 h-4 bg-cream-300 rounded-full opacity-80 animate-float-2"></div>
        <div className="absolute bottom-40 left-20 w-8 h-8 bg-navy-200 rounded-full opacity-40 animate-float-3"></div>
        <div className="absolute bottom-20 right-10 w-5 h-5 bg-sage-300 rounded-full opacity-70 animate-float-1"></div>
      </section>

      {/* Latest Posts Section */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-800 mb-4">
              Latest Thoughts
            </h2>
            <p className="text-lg text-navy-600 font-body">fresh from my journal</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.map((post, index) => (
              <article 
                key={post.id} 
                className="scrapbook-card animate-fade-in hover-lift" 
                style={{animationDelay: `${index * 0.2}s`}}
              >
                <div className="flex items-center gap-2 text-sm text-navy-500 mb-4 font-sans">
                  <Coffee className="w-4 h-4" />
                  <span>{post.readTime} min read</span>
                  <span>•</span>
                  <span>{new Date(post.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric'
                  })}</span>
                </div>
                
                <h3 className="font-serif text-2xl font-bold text-navy-800 mb-4 leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-navy-700 mb-6 leading-relaxed font-body">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.categories.slice(0, 2).map(category => (
                    <span 
                      key={category} 
                      className="px-3 py-1 bg-cream-200 text-navy-700 text-sm rounded-lg font-sans border border-navy-200"
                    >
                      {category}
                    </span>
                  ))}
                </div>
                
                <Link 
                  to={`/journal/${post.id}`} 
                  className="inline-flex items-center text-navy-600 font-sans font-medium hover:text-navy-800 transition-all duration-300"
                >
                  Read more
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </article>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link 
              to="/journal" 
              className="inline-flex items-center px-6 py-3 text-navy-600 font-sans font-medium hover:text-navy-800 transition-colors bg-sage-100 rounded-lg hover:bg-sage-200"
            >
              View All Posts
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
