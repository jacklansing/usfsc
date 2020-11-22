/** @jsxRuntime classic */
/** @jsx jsx */
import { Box, jsx } from 'theme-ui';
import { GetStaticProps } from 'next';
import NextLink from 'next/link';
import Head from 'next/head';
import { getAllPosts } from '../lib/fetchPosts';
import Nav from '../components/nav';
import PostPreview from '../components/post-preview';
import LayoutAnimated from '../components/utils/layout-animated';
import { motion } from 'framer-motion';

export type Post = {
  title: string;
  body: string;
  published_at: string;
  slug: string;
};

interface Props {
  posts: Post[];
}

const News: React.FC<Props> = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>News | Uncle Sam Figure Skating Club</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LayoutAnimated>
        <Box
          sx={{
            position: 'relative',
          }}
        >
          <motion.h1
            initial={{ y: 64, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            sx={{ textAlign: 'center', marginTop: 5, variant: 'headings.h1' }}
          >
            Uncle Sam FSC News
          </motion.h1>
        </Box>
        <Nav />
        {posts.map((post, idx) => (
          <PostPreview post={post} idx={idx} key={post.published_at} />
        ))}
        <NextLink href={`/post-history`}>
          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            sx={{
              variant: 'text.postPreviewLink',
              textAlign: 'center',
              p: 5,
            }}
          >
            Older Posts &rarr;
          </motion.a>
        </NextLink>
      </LayoutAnimated>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();
  return {
    props: {
      // We only show 3 posts on the home page, max.
      posts: posts.slice(0, 3),
    },
  };
};

export default News;
