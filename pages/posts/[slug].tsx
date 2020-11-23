/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { GetStaticPaths, GetStaticProps } from 'next';
import ReactMarkdown from 'react-markdown';
import NextLink from 'next/link';
import { getAllPosts, getPostBySlug } from '../../lib/fetchPosts';
import formatPostDate from '../../lib/utils/formatPostDate';
import { useRouter } from 'next/router';
import LayoutAnimated from '../../components/utils/layout-animated';
import { motion } from 'framer-motion';
import Meta from '../../components/utils/meta';

interface Props {
  title: string;
  body: string;
  published_at: string;
  slug: string;
}

const PostPage: React.FC<Props> = (props) => {
  const { title, body, published_at, slug } = props;
  const router = useRouter();
  return (
    <LayoutAnimated>
      <Meta
        ogContentType="article"
        title={`${title} | Uncle Sam Figure Skating Club`}
        canonicalUrl={`https://unclesamfsc.com/posts/${slug}`}
        ogUrl={`https://unclesamfsc.com/posts/${slug}`}
        ogTitle={`${title} | Uncle Sam FSC`}
        desc={body.slice(0, 250)}
      />
      <article
        sx={{
          maxWidth: 900,
          mx: 'auto',
        }}
      >
        <header>
          <h1
            sx={{
              textAlign: 'center',
              variant: 'headings.h1',
              marginBottom: 0,
            }}
          >
            {title}
          </h1>
          <p
            sx={{
              variant: 'text.subtitle',
              textAlign: 'center',
            }}
          >
            {formatPostDate(published_at)}
          </p>
        </header>
        <ReactMarkdown
          source={body}
          sx={{
            variant: 'text.body',
          }}
        />
        <NextLink
          href={router.query.origin ? (router.query.origin as string) : '/news'}
        >
          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            sx={{
              variant: 'text.postPreviewLink',
              marginLeft: 0,
            }}
          >
            &larr; Back
          </motion.a>
        </NextLink>
      </article>
    </LayoutAnimated>
  );
};

export default PostPage;

export const getStaticProps: GetStaticProps = async (context) => {
  const postProps = await getPostBySlug(context.params.slug as string);
  return {
    props: {
      ...postProps,
      slug: context.params.slug,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  let paths = await getAllPosts();
  paths = paths.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths: paths,
    fallback: false,
  };
};
