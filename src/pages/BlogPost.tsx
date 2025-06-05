
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, Coffee, ArrowLeft, Tag } from 'lucide-react';
import { blogPosts, categories } from '../data/blogData';
import Layout from '../components/Layout';

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return <Navigate to="/journal" replace />;
  }

  const getCategoryColor = (categoryName: string) => {
    const category = categories.find(cat => cat.name === categoryName);
    return category?.color || 'bg-gray-100 text-gray-800';
  };

  return (
    <Layout>
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="animate-fade-in">
          {/* Back Link */}
          <Link 
            to="/journal"
            className="inline-flex items-center text-navy-600 hover:text-navy-700 transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Journal
          </Link>

          {/* Header */}
          <header className="mb-12">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-6">
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

            <h1 className="font-grotesk font-bold text-4xl md:text-5xl text-gray-800 mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-3">
              <Tag className="w-4 h-4 text-gray-400" />
              {post.categories.map((category) => (
                <Link
                  key={category}
                  to={`/categories?category=${encodeURIComponent(category)}`}
                  className={`px-3 py-1 text-sm rounded-full transition-all hover:opacity-80 ${getCategoryColor(category)}`}
                >
                  {category}
                </Link>
              ))}
            </div>
          </header>

          {/* Content */}
          <div className="bg-white rounded-3xl p-8 md:p-12 card-shadow">
            <div className="prose prose-lg max-w-none">
              {post.content.split('\n\n').map((paragraph, index) => {
                // Special formatting for Prologue, Becoming, and Epilogue
                let formattedText = paragraph.replace(/\*\*Prologue\*\*/g, '<strong class="text-2xl font-black text-navy-800">Prologue</strong>');
                formattedText = formattedText.replace(/\*\*Body \(Becoming\)\*\*/g, '<strong class="text-2xl font-black text-navy-800">Body (Becoming)</strong>');
                formattedText = formattedText.replace(/\*\*Epilogue\*\*/g, '<strong class="text-2xl font-black text-navy-800">Epilogue</strong>');
                
                // Replace remaining **text** with <strong>text</strong>
                formattedText = formattedText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                
                return (
                  <p 
                    key={index} 
                    className="text-lg text-gray-700 leading-relaxed mb-6"
                    dangerouslySetInnerHTML={{ __html: formattedText }}
                  />
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-12 flex justify-between items-center">
            <Link 
              to="/journal"
              className="inline-flex items-center px-6 py-3 bg-navy-600 text-white font-semibold rounded-full hover:bg-navy-700 transition-all duration-200 hover-lift"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Journal
            </Link>
            
            <Link 
              to="/contact"
              className="text-navy-600 hover:text-navy-700 font-semibold transition-colors"
            >
              Share your thoughts →
            </Link>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
