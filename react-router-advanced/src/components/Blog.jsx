import { Link } from 'react-router-dom';

const posts = [
  { id: 1, title: "React Basics" },
  { id: 2, title: "Understanding Hooks" },
  { id: 3, title: "React Router Guide" },
];

export default function Blog() {
  return (
    <div>
      <h1>📰 Blog</h1>
      {posts.map(post => (
        <div key={post.id}>
          <Link to={`/blog/${post.id}`}>{post.title}</Link>
        </div>
      ))}
    </div>
  );
}
