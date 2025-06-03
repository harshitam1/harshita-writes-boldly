
import { Link } from 'react-router-dom';
import { ArrowRight, Coffee } from 'lucide-react';
import { blogPosts } from '../data/blogData';
import Layout from '../components/Layout';

const Index = () => {
  const latestPosts = blogPosts.slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-navy-800 via-navy-700 to-navy-900">
        <div className="absolute inset-0 bg-dots opacity-20"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative">
          <div className="text-center animate-fade-in">
            <div className="mb-8 flex justify-center">
              <div className="bg-cream-100 p-8 rounded-organic shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-500 border-4 border-dashed border-navy-300">
                <h1 className="font-handwriting font-bold text-6xl md:text-8xl mb-4">
                  <span className="text-cream-200 block transform -rotate-2">honestly,</span>
                  <span className="text-white block transform rotate-1">harshita</span>
                </h1>
              </div>
            </div>
            
            <div className="bg-white/90 p-8 rounded-blob shadow-xl border-4 border-navy-200 max-w-3xl mx-auto mb-12 transform -rotate-1 hover:rotate-0 transition-all duration-500 tape-effect">
              <p className="text-xl md:text-2xl font-playful text-navy-800 leading-relaxed">
                welcome to my corner of the internet where i share thoughts, stories, and the messy journey of figuring life out
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/journal" 
                className="inline-flex items-center px-8 py-4 bg-navy-600 text-white font-playful font-bold text-lg rounded-organic hover:bg-navy-700 transition-all duration-300 transform hover:scale-105 hover:rotate-2 shadow-lg border-3 border-navy-800"
              >
                Read My Journal
                <ArrowRight className="ml-2 w-5 h-5 animate-bounce-gentle" />
              </Link>
              <Link 
                to="/about" 
                className="inline-flex items-center px-8 py-4 bg-cream-200 text-navy-800 font-playful font-bold text-lg rounded-wavy hover:bg-cream-300 transition-all duration-300 transform hover:scale-105 hover:-rotate-2 shadow-lg border-3 border-navy-200"
              >
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
            <div className="inline-block bg-white p-6 rounded-blob shadow-lg border-4 border-dashed border-navy-300 transform rotate-2 hover:rotate-0 transition-all duration-500">
              <h2 className="font-handwriting font-bold text-5xl text-navy-800 mb-2">
                Latest Thoughts
              </h2>
              <p className="text-lg text-navy-600 font-playful">fresh from my journal</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.map((post, index) => (
              <article 
                key={post.id}
                className={`scrapbook-card animate-fade-in hover-lift`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center gap-2 text-sm text-navy-500 mb-4 font-casual">
                  <Coffee className="w-4 h-4" />
                  <span>{post.readTime} min read</span>
                  <span>•</span>
                  <span>{new Date(post.date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric'
                  })}</span>
                </div>
                
                <h3 className="font-handwriting font-bold text-2xl text-navy-800 mb-4 leading-tight">
                  {post.title}
                </h3>
                
                <p className="text-navy-700 mb-6 leading-relaxed font-playful">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.categories.slice(0, 2).map((category) => (
                    <span 
                      key={category}
                      className="px-3 py-1 bg-cream-200 text-navy-700 text-sm rounded-organic font-casual border-2 border-navy-200"
                    >
                      {category}
                    </span>
                  ))}
                </div>
                
                <Link 
                  to={`/journal/${post.id}`} 
                  className="inline-flex items-center text-navy-600 font-playful font-bold hover:text-navy-800 transition-all duration-300 transform hover:scale-105"
                >
                  Read more
                  <ArrowRight className="ml-1 w-4 h-4 animate-wiggle" />
                </Link>
              </article>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="inline-block bg-sage-100 p-4 rounded-wavy shadow-lg border-3 border-sage-300 transform -rotate-1 hover:rotate-0 transition-all duration-300">
              <Link 
                to="/journal" 
                className="inline-flex items-center px-6 py-3 text-navy-600 font-playful font-bold hover:text-navy-800 transition-colors"
              >
                View All Posts
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
