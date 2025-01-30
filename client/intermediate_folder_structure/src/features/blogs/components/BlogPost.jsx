import React from "react";
import MetaTags from "./seo/MetaTags";

const BlogPost = ({ post }) => {
  // Example blog post data (could be fetched from an API)
  const postData = {
    title: "10 Tips for Better React Development",
    description:
      "Learn 10 best practices for writing clean and efficient React code.",
    keywords: "React, JavaScript, Web Development",
    image: "https://example.com/images/react-tips.jpg",
    url: "https://example.com/blog/10-react-tips",
  };

  return (
    <div>
      {/* Add MetaTags for SEO */}
      <MetaTags
        title={postData.title}
        description={postData.description}
        keywords={postData.keywords}
        image={postData.image}
        url={postData.url}
      />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: postData.title,
          description: postData.description,
          image: postData.image,
          author: {
            "@type": "Person",
            name: "John Doe",
          },
        })}
      </script>
      {/* Blog post content */}
      <h1>{postData.title}</h1>
      <p>{postData.description}</p>
      <img src={postData.image} alt={postData.title} />
      <article>
        <p>This is the full content of the blog post...</p>
      </article>
    </div>
  );
};

export default BlogPost;
