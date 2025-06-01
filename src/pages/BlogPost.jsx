// src/pages/BlogPost.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import postsData from '../data/blog-posts.json';

export default function BlogPost() {
  const { slug } = useParams();
  const post = postsData.posts.find(post => post.slug === slug);

  if (!post) {
    return (
      <div className="bg-[#FAF9F6] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Post not found</h1>
          <Link to="/blog" className="text-blue-600 hover:text-blue-800">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  // Safe date parsing
  const formatDate = (dateString) => {
    try {
      const date = new Date(dateString.replace(/\//g, '-'));
      return date.toLocaleDateString('en-US', { 
        month: 'long', 
        day: 'numeric', 
        year: 'numeric' 
      });
    } catch (error) {
      return dateString;
    }
  };

  // Category colors for visual distinction
  const getCategoryColor = (category) => {
    const colors = {
      'guides': 'bg-blue-100 text-blue-800',
      'trends': 'bg-green-100 text-green-800',
      'home-decor': 'bg-purple-100 text-purple-800',
      'window-treatments': 'bg-orange-100 text-orange-800',
      'interior-design': 'bg-pink-100 text-pink-800',
      'curtains': 'bg-indigo-100 text-indigo-800',
      'blinds': 'bg-yellow-100 text-yellow-800',
      'shutters': 'bg-red-100 text-red-800',
      'room-design': 'bg-teal-100 text-teal-800',
      'installation': 'bg-gray-100 text-gray-800',
      'custom-design': 'bg-emerald-100 text-emerald-800'
    };
    return colors[category] || 'bg-gray-100 text-gray-800';
  };
  
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-[#FAF9F6] min-h-screen py-10 px-6 md:px-24 text-black">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <div className="mb-10">
          <Link 
            to="/blog" 
            className="text-gray-600 hover:text-gray-900 text-sm flex items-center transition-colors duration-200"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            Back to Blog
          </Link>
        </div>

        {/* Post Header */}
        <div className="mb-10">
          <div className="flex flex-wrap items-center mb-4 gap-2">
            <span className="text-sm text-gray-500">
              {formatDate(post.date)}
            </span>
            <span className="text-gray-300">•</span>
            
            {/* Multiple Categories Display */}
            <div className="flex flex-wrap gap-2">
              {(post.categories || [post.category]).filter(Boolean).map((category, index) => (
                <Link
                  key={index}
                  to={`/blog/category/${category}`}
                  className={`text-xs px-3 py-1 rounded-full capitalize transition-all duration-200 hover:shadow-md ${getCategoryColor(category)}`}
                >
                  {category.replace('-', ' ')}
                </Link>
              ))}
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4 leading-tight">
            {post.title}
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">{post.excerpt}</p>
        </div>

        {/* Cover Image */}
        <div className="mb-10">
          <img 
            src={post.coverImage} 
            alt={post.title} 
            className="rounded-lg w-full object-cover h-96 shadow-lg"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/800x400/f0f0f0/666666?text=Image+Not+Found';
            }}
          />
        </div>

        {/* Article Content */}
        <article className="prose-content max-w-none">
          <div 
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="
              [&>p]:mb-6 [&>p]:text-gray-700 [&>p]:leading-relaxed [&>p]:text-base
              [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-gray-900 [&>h2]:mt-12 [&>h2]:mb-6 [&>h2]:border-b [&>h2]:border-gray-200 [&>h2]:pb-2
              [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-gray-900 [&>h3]:mt-8 [&>h3]:mb-4
              [&>ul]:mb-6 [&>ul]:pl-6
              [&>ul>li]:mb-3 [&>ul>li]:text-gray-700 [&>ul>li]:list-disc [&>ul>li]:leading-relaxed
              [&>ul>li>strong]:font-semibold [&>ul>li>strong]:text-gray-900
              [&>blockquote]:border-l-4 [&>blockquote]:border-gray-300 [&>blockquote]:pl-6 [&>blockquote]:italic [&>blockquote]:text-gray-600
            "
          />
        </article>

        {/* Categories Section */}
        <div className="mt-12 pt-6 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Filed Under:</h3>
          <div className="flex flex-wrap gap-2">
            {(post.categories || [post.category]).filter(Boolean).map((category, index) => (
              <Link
                key={index}
                to={`/blog/category/${category}`}
                className={`text-sm px-4 py-2 rounded-lg capitalize transition-all duration-200 hover:shadow-md hover:scale-105 ${getCategoryColor(category)}`}
              >
                {category.replace('-', ' ')}
              </Link>
            ))}
          </div>
        </div>

        {/* Author Section */}
        {/* {post.author && (
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex items-center">
              <img 
                src={post.author.picture} 
                alt={post.author.name} 
                className="h-16 w-16 rounded-full object-cover mr-6 shadow-md"
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/64x64/f0f0f0/666666?text=Author';
                }}
              />
              <div>
                <p className="font-medium text-gray-900 text-lg">{post.author.name}</p>
                <p className="text-sm text-gray-600 mt-1">{post.author.bio}</p>
              </div>
            </div>
          </div>
        )} */}

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Link 
            to="/blog" 
            onClick={handleClick}
            className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors duration-200"
          >
            Read More Articles
          </Link>
        </div>
      </div>
    </div>
  );
}