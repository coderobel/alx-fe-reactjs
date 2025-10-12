import { useParams } from 'react-router-dom';

export default function BlogPost() {
  const { id } = useParams(); // Extract dynamic route parameter
  return (
    <div>
      <h2>Blog Post ID: {id}</h2>
      <p>This is the content for blog post #{id}.</p>
    </div>
  );
}
