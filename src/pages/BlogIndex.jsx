// src/pages/BlogIndex.jsx
import React, { useState, useEffect } from 'react';
import BlogCard from '../components/BlogCard';
import postsData from '../data/blog-posts.json';

export default function BlogIndex() {
  const [filter, setFilter] = useState('all');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(postsData.posts.sort((a, b) => new Date(b.date) - new Date(a.date)));
  }, []);

  const categories = ['all', ...new Set(posts.map(post => post.category))];

  const filteredPosts = filter === 'all'
    ? posts
    : posts.filter(post => post.category === filter);

  return (
    <div className="bg-[#FAF9F6] py-20 px-6 md:px-24 text-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-4">Our Journal</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our latest trends, tips and inspiration for your home decor journey.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-10 flex justify-center">
          <div className="inline-flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  filter === category
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-xl font-medium text-gray-600">No posts found in this category.</h3>
          </div>
        )}
      </div>
    </div>
  );
}
