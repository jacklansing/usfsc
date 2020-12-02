export const getLandingPageData = async () => {
  return fetch(`${process.env.STRAPI_API_URL}/landing-page`).then((res) =>
    res.json(),
  );
};
