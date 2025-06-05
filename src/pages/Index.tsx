
import { Link } from 'react-router-dom';
import { ArrowRight, Coffee } from 'lucide-react';
import { blogPosts } from '../data/blogData';
import Layout from '../components/Layout';

const Index = () => {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-screen py-20 relative overflow-hidden flex items-center justify-center bg-cream-100 bg-paper">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 text-navy-800">
              honestly, harshita
            </h1>
            
            <p className="text-xl md:text-2xl font-body text-navy-800 leading-relaxed mb-12 max-w-3xl mx-auto">
              welcome to my corner of the internet where i share thoughts, stories, and my journey of figuring life out as a young girl in a big world
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/journal" 
                className="inline-flex items-center px-6 py-3 bg-navy-800 text-cream-50 font-mono font-medium text-base rounded-xl hover:bg-navy-900 transition-all duration-300 shadow-md hover:-translate-y-1"
              >
                Start Reading
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link 
                to="/about" 
                className="inline-flex items-center px-6 py-3 bg-cream-300 text-navy-800 font-mono font-medium text-base rounded-xl hover:bg-cream-400 transition-all duration-300 shadow-md hover:-translate-y-1"
              >
                Get to Know Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section className="py-20 relative bg-cream-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-800 mb-4">
              Latest Thoughts
            </h2>
            <p className="text-lg text-navy-800 font-body">fresh from my journal</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.map((post, index) => (
              <article 
                key={post.id}
                className="bg-white p-6 rounded-lg shadow-md animate-fade-in hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center gap-2 text-sm text-navy-800 mb-4 font-sans">
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
                  {post.categories.slice(0, 2).map((category) => (
                    <span 
                      key={category}
                      className="px-3 py-1 bg-sage-100 text-navy-700 text-sm rounded-lg font-mono border border-sage-200"
                    >
                      {category}
                    </span>
                  ))}
                </div>
                
                <Link 
                  to={`/journal/${post.id}`} 
                  className="inline-flex items-center text-navy-800 font-mono font-medium hover:text-navy-900 transition-all duration-300"
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
              className="inline-flex items-center px-6 py-3 text-navy-800 font-mono font-medium hover:text-navy-900 transition-colors bg-sage-100 rounded-lg hover:bg-sage-200"
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
