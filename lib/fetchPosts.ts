export const getPostBySlug = async (slug: string) => {
  return fetch(`${process.env.STRAPI_API_URL}/posts/slug/${slug}`).then((res) =>
    res.json(),
  );
};

export const getAllPosts = async () => {
  return fetch(
    `${process.env.STRAPI_API_URL}/posts/?_sort=published_at:DESC`,
  ).then((res) => res.json());
};
