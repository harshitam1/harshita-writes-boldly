
import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Tag, Calendar, Coffee } from 'lucide-react';
import { blogPosts, categories } from '../data/blogData';
import Layout from '../components/Layout';

const Categories = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(
    searchParams.get('category')
  );

  useEffect(() => {
    if (selectedCategory) {
      setSearchParams({ category: selectedCategory });
    } else {
      setSearchParams({});
    }
  }, [selectedCategory, setSearchParams]);

  const filteredPosts = selectedCategory 
    ? blogPosts.filter(post => post.categories.includes(selectedCategory))
    : [];

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
            <h1 className="font-poppins font-bold text-5xl md:text-6xl mb-6">
              <span className="text-gradient">Categories</span>
            </h1>
            <p className="text-xl text-gray-600">
              Explore posts by topic
            </p>
          </div>

          {/* Category Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {categories.map((category, index) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`bg-white rounded-2xl p-6 card-shadow hover-lift transition-all duration-300 text-left animate-fade-in ${
                  selectedCategory === category.name ? 'ring-2 ring-coral-500' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <Tag className="w-6 h-6 text-coral-500" />
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${category.color}`}>
                    {category.count} {category.count === 1 ? 'post' : 'posts'}
                  </span>
                </div>
                
                <h3 className="font-poppins font-semibold text-xl text-gray-800 mb-2 capitalize">
                  {category.name}
                </h3>
                
                <p className="text-gray-600">
                  {category.name === 'personal' && 'Stories from my life and personal experiences'}
                  {category.name === 'thoughts' && 'Random musings and observations about life'}
                  {category.name === 'life lessons' && 'Insights learned along the way'}
                  {category.name === 'personal growth' && 'Journey of self-improvement and discovery'}
                  {category.name === 'confidence' && 'Building self-assurance and taking up space'}
                  {category.name === 'self-reflection' && 'Deep dives into thoughts and feelings'}
                </p>
              </button>
            ))}
          </div>

          {/* Selected Category Posts */}
          {selectedCategory && (
            <div className="mb-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-poppins font-bold text-3xl text-gray-800">
                  Posts in "{selectedCategory}"
                </h2>
                <button
                  onClick={() => setSelectedCategory(null)}
                  className="text-coral-600 hover:text-coral-700 font-semibold transition-colors"
                >
                  Clear filter
                </button>
              </div>

              <div className="space-y-6">
                {filteredPosts.map((post, index) => (
                  <article 
                    key={post.id}
                    className={`bg-white rounded-2xl p-6 card-shadow hover-lift transition-all duration-300 animate-fade-in`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-2 md:mb-0">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(post.date).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric',
                            year: 'numeric'
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
                    
                    <h3 className="font-poppins font-bold text-xl text-gray-800 mb-3 hover:text-coral-600 transition-colors">
                      <Link to={`/journal/${post.id}`}>
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-gray-600 mb-4">
                      {post.excerpt}
                    </p>
                    
                    <Link 
                      to={`/journal/${post.id}`}
                      className="inline-flex items-center text-coral-600 font-semibold hover:text-coral-700 transition-colors"
                    >
                      Read more →
                    </Link>
                  </article>
                ))}
              </div>

              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-lg text-gray-500">
                    No posts found in this category yet.
                  </p>
                </div>
              )}
            </div>
          )}

          {!selectedCategory && (
            <div className="text-center bg-coral-50 rounded-2xl p-8">
              <Tag className="w-12 h-12 text-coral-500 mx-auto mb-4" />
              <h3 className="font-poppins font-semibold text-xl text-gray-800 mb-2">
                Choose a Category
              </h3>
              <p className="text-gray-600">
                Click on any category above to see related posts
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
