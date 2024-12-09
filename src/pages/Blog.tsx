import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      title: "The Future of Business Automation",
      date: "March 15, 2024",
      excerpt: "Discover how AI and automation are transforming the business landscape and what it means for your company's future.",
      author: "EnchantedLogic Team"
    },
    {
      title: "Maximizing Efficiency with Custom Solutions",
      date: "March 10, 2024",
      excerpt: "Learn how custom software solutions can streamline your operations and boost productivity across your organization.",
      author: "EnchantedLogic Team"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid gap-8">
        {blogPosts.map((post, index) => (
          <article key={index} className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
            <div className="text-gray-600 mb-4">
              <span>{post.date}</span> • <span>{post.author}</span>
            </div>
            <p className="text-gray-700 mb-4">{post.excerpt}</p>
            <Link
              to="#"
              className="text-primary hover:text-secondary transition-colors"
            >
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;