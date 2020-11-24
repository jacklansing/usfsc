/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { GetStaticProps } from 'next';
import React from 'react';
import { Post } from './news';
import { getAllPosts } from '../lib/fetchPosts';
import formatPostDate from '../lib/utils/formatPostDate';
import Nav from '../components/nav';
import LayoutAnimated from '../components/utils/layout-animated';
import { motion } from 'framer-motion';
import Meta from '../components/utils/meta';
import AnimatedLink from '../components/utils/animated-link';

interface Props {
  posts: Post[];
}

const PostHistory: React.FC<Props> = ({ posts }) => {
  return (
    <LayoutAnimated>
      <Meta
        title="Post History | Uncle Sam Figure Skating Club"
        canonicalUrl="https://unclesamfsc.com/post-history"
        ogUrl="https://unclesamfsc.com/post-history"
        desc="History of news updates made by Uncle Sam Figure Skating Club."
      />
      <div
        sx={{
          width: ['320px', '500px', '50%'],
          mx: 'auto',
        }}
      >
        <motion.h1
          initial={{ y: 64, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          sx={{ textAlign: 'center', marginTop: 5, variant: 'headings.h1' }}
        >
          Post History
        </motion.h1>
        <Nav />
        <ul
          sx={{
            listStyle: 'none',
            width: '100%',
            mx: 'auto',
          }}
        >
          {posts.map((post) => (
            <li key={post.published_at}>
              <AnimatedLink
                href={`/posts/${post.slug}?origin=/post-history`}
                hrefAsProp={`/posts/${post.slug}`}
                variant="none"
                sx={{
                  textDecoration: 'none',
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  cursor: 'pointer',
                }}
              >
                <h2
                  sx={{
                    variant: 'headings.h3',
                    pr: 4,
                  }}
                >
                  {post.title}
                </h2>
                <p
                  sx={{
                    opacity: 0.8,
                  }}
                >
                  {formatPostDate(post.published_at)}
                </p>
              </AnimatedLink>
            </li>
          ))}
        </ul>
      </div>
    </LayoutAnimated>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts();
  return {
    props: {
      // It's unlikely we'll have this many posts for a long time.
      // But just in case let's not show any that are ancient.
      // May revisit this in the future.
      posts: posts.slice(0, 20),
    },
  };
};

export default PostHistory;
