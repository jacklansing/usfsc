import { GetStaticProps } from 'next';
import Head from 'next/head';
import ReactMarkdown from 'react-markdown';
import { getAllPosts } from '../lib/fetchPosts';

type Post = {
  title: string;
  body: string;
  published_at: string;
};

interface Props {
  bannerPost: Post;
  posts: Post[];
}

const Home: React.FC<Props> = ({ bannerPost, posts }) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h2>{bannerPost.title}</h2>
        <ReactMarkdown source={bannerPost.body} />
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();
  return {
    props: {
      bannerPost: posts[0],
      posts: posts.splice(1),
    },
  };
};

export default Home;
