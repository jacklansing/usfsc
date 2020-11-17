/** @jsxRuntime classic */
/** @jsx jsx */
import { Divider, jsx } from 'theme-ui';
import React from 'react';
import { Box } from 'theme-ui';
import ReactMarkdown from 'react-markdown';
import NextLink from 'next/link';

const dateFormatOptions = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

interface Props {
  post: {
    title: string;
    body: string;
    published_at: string;
    slug: string;
  };
}

const PostPreview: React.FC<Props> = ({ post }) => {
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
    >
      <Box
        sx={{
          textAlign: 'center',
        }}
      >
        <h2
          sx={{
            fontSize: 5,
          }}
        >
          {title}
        </h2>
        <p
          sx={{
            opacity: 1,
            color: 'gray',
            fontSize: 2,
          }}
        >
          {new Date(published_at).toLocaleDateString(
            undefined,
            dateFormatOptions,
          )}
        </p>
      </Box>
      <ReactMarkdown
        source={preview}
        sx={{
          lineHeight: 1.8,
          opacity: 0.9,
          fontSize: 3,
        }}
      />
      <NextLink href={`/posts/${slug}`}>
        <a
          sx={{
            textDecoration: 'none',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            display: 'block',
            width: 'fit-content',
            marginLeft: 'auto',
            marginRight: 'auto',
            cursor: 'pointer',
            fontWeight: 500,
            fontSize: 3,
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
