import { useRouter } from 'next/router';
import { useEffect } from 'react';

export const userPrivateRoute = () => {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('usfsc-auth');
    if (!token) {
      router.push('/news');
    }
  }, [router.pathname]);
};
