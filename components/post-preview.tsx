/** @jsxRuntime classic */
/** @jsx jsx */
import { Divider, jsx } from 'theme-ui';
import React from 'react';
import { Box } from 'theme-ui';
import ReactMarkdown from 'react-markdown';
import NextLink from 'next/link';
import formatPostDate from '../lib/utils/formatPostDate';

interface Props {
  post: {
    title: string;
    body: string;
    published_at: string;
    slug: string;
  };
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
      <NextLink href={`/posts/${slug}`}>
        <a
          sx={{
            variant: 'text.postPreviewLink',
          }}
        >
          Read More
        </a>
      </NextLink>
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
