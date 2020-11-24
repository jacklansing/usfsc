export const getMembershipApps = async () => {
  const token = localStorage.getItem('usfsc-auth');
  return fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/membership-applications?_sort=created_at:DESC`,
    {
      method: 'GET',
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  ).then((res) => res.json());
};

export const getMembershipAppById = async (id: number | string) => {
  const token = localStorage.getItem('usfsc-auth');
  return fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/membership-applications/${id}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
    },
  ).then((res) => res.json());
};

export const markMembershipAppReviewed = async (id: number | string) => {
  const token = localStorage.getItem('usfsc-auth');
  return fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/membership-applications/${id}`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        application_reviewed: true,
      }),
    },
  ).then((res) => res.json());
};
