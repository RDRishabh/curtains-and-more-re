// src/lib/api.js
import postsData from '../data/blog-posts.json';

export function getAllPosts() {
  return postsData.posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getPostBySlug(slug) {
  return postsData.posts.find(post => post.slug === slug);
}
