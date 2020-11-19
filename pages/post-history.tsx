/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { GetStaticProps } from 'next';
import React from 'react';
import { Post } from '.';
import { getAllPosts } from '../lib/fetchPosts';
import formatPostDate from '../lib/utils/formatPostDate';
import NextLink from 'next/link';
import Nav from '../components/nav';
import LayoutAnimated from '../components/utils/layout-animated';
import { motion } from 'framer-motion';

interface Props {
  posts: Post[];
}

const PostHistory: React.FC<Props> = ({ posts }) => {
  return (
    <LayoutAnimated>
      <Nav />
      <div
        sx={{
          width: ['320px', '500px', '33%'],
          mx: 'auto',
        }}
      >
        <h1
          sx={{
            variant: 'headings.h1',
            width: '100%',
            mx: 'auto',
          }}
        >
          Post History
        </h1>
        <ul
          sx={{
            listStyle: 'none',
            width: '100%',
            mx: 'auto',
          }}
        >
          {posts.map((post) => (
            <li key={post.published_at}>
              <NextLink
                href={`/posts/${post.slug}?origin=/post-history`}
                as={`/posts/${post.slug}`}
              >
                <motion.a
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
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
                      variant: 'text.subtitle',
                    }}
                  >
                    {formatPostDate(post.published_at)}
                  </p>
                </motion.a>
              </NextLink>
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
