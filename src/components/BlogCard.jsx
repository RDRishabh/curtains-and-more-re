// components/BlogCard.jsx
import React from 'react';

const BlogCard = ({ post }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden font-quincy shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative h-64 w-full">
        <img 
          src={post.coverImage} 
          alt={post.title}
          className="object-cover w-full h-full"
          loading="lazy"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center mb-4">
          <span className="text-xs text-gray-500">
            {new Date(post.date).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric'
            })}
          </span>
          <span className="mx-2 text-gray-300">•</span>
          <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
            {post.category}
          </span>
        </div>
        <h3 className="text-xl font-serif font-semibold mb-3 line-clamp-2">
          {post.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
        <a
          href={`/blog/${post.slug}`}
          className="inline-block text-gray-900 font-medium border-b border-gray-900 pb-1 hover:text-gray-700 hover:border-gray-700 transition-colors"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
