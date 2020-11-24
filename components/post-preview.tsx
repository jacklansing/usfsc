/** @jsxRuntime classic */
/** @jsx jsx */
import { Divider, jsx } from 'theme-ui';
import React from 'react';
import { Box } from 'theme-ui';
import ReactMarkdown from 'react-markdown';
import formatPostDate from '../lib/utils/formatPostDate';
import { Post } from '../pages/news';
import AnimatedLink from './utils/animated-link';

interface Props {
  post: Post;
  idx: number;
}

const PostPreview: React.FC<Props> = ({ post, idx }) => {
  const { title, published_at, body, slug } = post;
  const preview = body.slice(0, 250) + '...';

  return (
    <Box
      mx="auto"
      sx={{
        maxWidth: '90ch',
        overflow: 'hidden',
        marginBottom: 3,
        textAlign: ['center', null, 'start'],
      }}
      mt={idx === 0 ? 4 : ''}
    >
      <Box
        sx={{
          textAlign: 'center',
        }}
      >
        <h2
          sx={{
            variant: 'headings.h2',
          }}
        >
          {title}
        </h2>
        <p
          sx={{
            variant: 'text.subtitle',
          }}
        >
          {formatPostDate(published_at)}
        </p>
      </Box>
      <ReactMarkdown
        source={preview}
        sx={{
          variant: 'text.postPreview',
        }}
      />
      <AnimatedLink href={`/posts/${slug}`}>Read More</AnimatedLink>
      <Divider
        sx={{
          marginTop: 4,
          opacity: 0.1,
        }}
      />
    </Box>
  );
};

export default PostPreview;
