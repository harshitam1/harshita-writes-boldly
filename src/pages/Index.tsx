import { Link } from 'react-router-dom';
import { ArrowRight, Coffee } from 'lucide-react';
import { blogPosts } from '../data/blogData';
import Layout from '../components/Layout';
const Index = () => {
  const latestPosts = blogPosts.slice(0, 3);
  return <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-sky-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center animate-fade-in">
            <h1 className="font-grotesk font-bold text-5xl md:text-7xl mb-6">
              <span className="text-gradient text-slate-400">honestly,</span>
              <br />
              <span className="text-zinc-950">harshita</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed font-grotesk text-slate-50">welcome to my corner of the internet where i share thoughts, stories, and the messy journey of figuring life out</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/journal" className="inline-flex items-center px-8 py-4 bg-navy-600 text-white font-semibold rounded-full hover:bg-navy-700 transition-all duration-200 hover-lift card-shadow">
                Read My Journal
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link to="/about" className="inline-flex items-center px-8 py-4 border-2 border-navy-600 text-navy-700 font-semibold rounded-full hover:bg-navy-50 transition-all duration-200 hover-lift">
                Get to Know Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section className="py-20 bg-white/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-grotesk font-bold text-4xl text-gray-800 mb-4">
              Latest Thoughts
            </h2>
            <p className="text-lg text-gray-600">fresh from my journal</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.map((post, index) => <article key={post.id} className={`bg-white rounded-2xl p-6 card-shadow hover-lift transition-all duration-300 animate-fade-in`} style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Coffee className="w-4 h-4" />
                  <span>{post.readTime} min read</span>
                  <span>•</span>
                  <span>{new Date(post.date).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric'
                })}</span>
                </div>
                
                <h3 className="font-grotesk font-semibold text-xl text-gray-800 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.categories.slice(0, 2).map(category => <span key={category} className="px-3 py-1 bg-navy-100 text-navy-700 text-sm rounded-full">
                      {category}
                    </span>)}
                </div>
                
                <Link to={`/journal/${post.id}`} className="inline-flex items-center text-navy-600 font-medium hover:text-navy-700 transition-colors">
                  Read more
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </article>)}
          </div>

          <div className="text-center mt-12">
            <Link to="/journal" className="inline-flex items-center px-6 py-3 text-navy-600 font-semibold hover:text-navy-700 transition-colors">
              View All Posts
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>;
};
export default Index;