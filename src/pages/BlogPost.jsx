// src/pages/BlogPost.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import postsData from '../data/blog-posts.json';

export default function BlogPost() {
  const { slug } = useParams();
  const post = postsData.posts.find(post => post.slug === slug);

  if (!post) {
    return <div className="p-10 text-center">Post not found</div>;
  }

  return (
    <div className="bg-[#FAF9F6] py-10 px-6 md:px-24 text-black">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10">
          <Link to="/" className="text-gray-600 hover:text-gray-900 text-sm flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
            Back to Blog
          </Link>
        </div>

        <div className="mb-10">
          <div className="flex items-center mb-4">
            <span className="text-sm text-gray-500">
              {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </span>
            <span className="mx-2 text-gray-300">•</span>
            <span className="text-sm bg-gray-100 px-3 py-1 rounded-full">{post.category}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">{post.title}</h1>
          <p className="text-gray-600 text-lg">{post.excerpt}</p>
        </div>

        <div className="mb-10">
          <img src={post.coverImage} alt={post.title} className="rounded-lg w-full object-cover h-96" />
        </div>

        <article className="prose prose-lg max-w-none">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>

        {post.author && (
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="flex items-center">
              <img src={post.author.picture} alt={post.author.name} className="h-16 w-16 rounded-full object-cover mr-6" />
              <div>
                <p className="font-medium text-gray-900">{post.author.name}</p>
                <p className="text-sm text-gray-600">{post.author.bio}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
