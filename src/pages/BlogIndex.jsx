// src/pages/BlogIndex.jsx
import React, { useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import BlogCard from '../components/BlogCard';
import postsData from '../data/blog-posts.json';

export default function BlogIndex() {
  const { category } = useParams(); // For category filtering from URL
  const [selectedCategories, setSelectedCategories] = useState(category ? [category] : []);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(postsData.posts.sort((a, b) => new Date(b.date) - new Date(a.date)));
  }, []);

  // Get all unique categories
  const allCategories = useMemo(() => {
    const categorySet = new Set();
    posts.forEach(post => {
      const postCategories = post.categories || [post.category];
      postCategories.filter(Boolean).forEach(cat => categorySet.add(cat));
    });
    return Array.from(categorySet).sort();
  }, [posts]);

  // Filter posts based on selected categories
  const filteredPosts = useMemo(() => {
    if (selectedCategories.length === 0) {
      return posts;
    }
    return posts.filter(post => {
      const postCategories = post.categories || [post.category];
      return selectedCategories.some(selectedCat => 
        postCategories.includes(selectedCat)
      );
    });
  }, [selectedCategories, posts]);

  // Toggle category selection
  const toggleCategory = (categoryName) => {
    setSelectedCategories(prev => {
      if (prev.includes(categoryName)) {
        return prev.filter(cat => cat !== categoryName);
      } else {
        return [...prev, categoryName];
      }
    });
  };

  // Clear all filters
  const clearFilters = () => {
    setSelectedCategories([]);
  };

  return (
    <div className="bg-[#FAF9F6] py-20 px-6 md:px-24 text-black font-quincy">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-quincy font-bold text-gray-900 mb-4">Blogs</h1>
          <p className="text-gray-600 max-w-2xl mx-auto font-lovato">
            Dive into the world of windows with the latest trends, practical advice, and brilliant ideas to help you choose the perfect curtains, blinds, and shutters for your home.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-10 flex justify-center font-lovato">
          <div className="inline-flex flex-wrap gap-2 justify-center">
            {allCategories.map((category) => (
              <button
                key={category}
                onClick={() => toggleCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategories.includes(category)
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ')}
              </button>
            ))}
            {selectedCategories.length > 0 && (
              <button
                onClick={clearFilters}
                className="px-4 py-2 rounded-full text-sm font-medium bg-red-100 text-red-800 hover:bg-red-200 transition-colors"
              >
                Clear All
              </button>
            )}
          </div>
        </div>

        {/* Show filter status */}
        {selectedCategories.length > 0 && (
          <div className="text-center mb-6 font-lovato">
            <span className="text-sm text-gray-600">
              Showing {filteredPosts.length} post{filteredPosts.length !== 1 ? 's' : ''} 
              {selectedCategories.length > 0 && (
                <> in {selectedCategories.map(cat => cat.replace('-', ' ')).join(', ')}</>
              )}
            </span>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-xl font-medium text-gray-600 mb-4">No posts found in selected categories.</h3>
            <button
              onClick={clearFilters}
              className="bg-gray-900 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors font-lovato"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}