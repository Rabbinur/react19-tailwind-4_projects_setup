export const getBlogPosts = async () => {
  const response = await fetch(`${API_URL}/posts`);
  if (!response.ok) throw new Error("Failed to fetch blog posts");
  return response.json();
};
