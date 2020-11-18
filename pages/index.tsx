/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { getAllPosts } from '../lib/fetchPosts';
import Nav from '../components/nav';
import PostPreview from '../components/post-preview';
import FloatingLogo from '../components/floating-logo';

type Post = {
  title: string;
  body: string;
  published_at: string;
  slug: string;
};

interface Props {
  posts: Post[];
}

const Home: React.FC<Props> = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FloatingLogo />
      <main>
        <h1 sx={{ textAlign: 'center', marginTop: 5, variant: 'headings.h1' }}>
          Uncle Sam Figure Skating Club
        </h1>
        <Nav />
        {posts.map((post) => (
          <PostPreview post={post} key={post.published_at} />
        ))}
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();
  return {
    props: {
      posts: posts,
    },
  };
};

export default Home;
