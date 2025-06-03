
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Coffee, Tag } from 'lucide-react';
import { blogPosts, categories } from '../data/blogData';
import Layout from '../components/Layout';

const Journal = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredPosts = selectedCategory 
    ? blogPosts.filter(post => post.categories.includes(selectedCategory))
    : blogPosts;

  const getCategoryColor = (categoryName: string) => {
    const category = categories.find(cat => cat.name === categoryName);
    return category?.color || 'bg-gray-100 text-gray-800';
  };

  return (
    <Layout>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="animate-fade-in">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="font-grotesk font-bold text-5xl md:text-6xl mb-6">
              <span className="text-gradient">My</span> Journal
            </h1>
            <p className="text-xl text-gray-600">
              Thoughts, stories, and everything in between
            </p>
          </div>

          {/* Category Filter */}
          <div className="bg-white rounded-2xl p-6 card-shadow mb-12">
            <h3 className="font-grotesk font-semibold text-lg mb-4 flex items-center gap-2">
              <Tag className="w-5 h-5 text-navy-600" />
              Filter by Category
            </h3>
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-4 py-2 rounded-full transition-all ${
                  selectedCategory === null
                    ? 'bg-navy-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                All Posts ({blogPosts.length})
              </button>
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`px-4 py-2 rounded-full transition-all ${
                    selectedCategory === category.name
                      ? 'bg-navy-600 text-white'
                      : `${category.color} hover:opacity-80`
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>

          {/* Posts */}
          <div className="space-y-8">
            {filteredPosts.map((post, index) => (
              <article 
                key={post.id}
                className={`bg-white rounded-2xl p-8 card-shadow hover-lift transition-all duration-300 animate-fade-in`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-2 md:mb-0">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric',
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Coffee className="w-4 h-4" />
                      <span>{post.readTime} min read</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {post.categories.map((category) => (
                      <span 
                        key={category}
                        className={`px-3 py-1 text-sm rounded-full ${getCategoryColor(category)}`}
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
                
                <h2 className="font-grotesk font-bold text-2xl md:text-3xl text-gray-800 mb-4 hover:text-navy-700 transition-colors">
                  <Link to={`/journal/${post.id}`}>
                    {post.title}
                  </Link>
                </h2>
                
                <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <Link 
                  to={`/journal/${post.id}`}
                  className="inline-flex items-center text-navy-600 font-semibold hover:text-navy-700 transition-colors"
                >
                  Read full post →
                </Link>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-xl text-gray-500">
                No posts found in this category yet.
              </p>
              <button
                onClick={() => setSelectedCategory(null)}
                className="mt-4 text-navy-600 hover:text-navy-700 font-semibold"
              >
                View all posts
              </button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Journal;
