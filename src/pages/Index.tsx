import { Link } from 'react-router-dom';
import { ArrowRight, Coffee } from 'lucide-react';
import { blogPosts } from '../data/blogData';
import Layout from '../components/Layout';
const Index = () => {
  const latestPosts = blogPosts.slice(0, 3);
  return <Layout>
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="font-serif text-6xl md:text-7xl font-bold text-navy-800 mb-6">
              honestly, harshita
            </h1>
            
            <p className="text-xl md:text-2xl font-body text-navy-600 leading-relaxed mb-12 max-w-3xl mx-auto">welcome to my corner of the internet where i share thoughts, stories, and my messy journey of figuring life out</p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/journal" className="inline-flex items-center px-8 py-4 bg-navy-700 text-white font-sans font-medium text-lg rounded-xl hover:bg-navy-800 transition-all duration-300 shadow-lg">
                Read My Journal
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/about" className="inline-flex items-center px-8 py-4 bg-cream-200 text-navy-800 font-sans font-medium text-lg rounded-xl hover:bg-cream-300 transition-all duration-300 shadow-lg">
                Get to Know Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section className="py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-800 mb-4">
              Latest Thoughts
            </h2>
            <p className="text-lg text-navy-600 font-body">fresh from my journal</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.map((post, index) => <article key={post.id} className="scrapbook-card animate-fade-in hover-lift" style={{
            animationDelay: `${index * 0.2}s`
          }}>
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
                  {post.categories.slice(0, 2).map(category => <span key={category} className="px-3 py-1 bg-cream-200 text-navy-700 text-sm rounded-lg font-sans border border-navy-200">
                      {category}
                    </span>)}
                </div>
                
                <Link to={`/journal/${post.id}`} className="inline-flex items-center text-navy-600 font-sans font-medium hover:text-navy-800 transition-all duration-300">
                  Read more
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </article>)}
          </div>

          <div className="text-center mt-16">
            <Link to="/journal" className="inline-flex items-center px-6 py-3 text-navy-600 font-sans font-medium hover:text-navy-800 transition-colors bg-sage-100 rounded-lg hover:bg-sage-200">
              View All Posts
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Index;