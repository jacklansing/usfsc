/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { getAllPosts, getPostBySlug } from '../../lib/fetchPosts';
import formatPostDate from '../../lib/utils/formatPostDate';
import { useRouter } from 'next/router';
import LayoutAnimated from '../../components/utils/layout-animated';
import Meta from '../../components/utils/meta';
import AnimatedLink from '../../components/utils/animated-link';

interface Props {
  title: string;
  body: string;
  published_at: string;
  slug: string;
  main_img: any;
}

const PostPage: React.FC<Props> = (props) => {
  const { title, body, published_at, slug } = props;
  // Depending on the original size of the image, strapi will
  // transform it to have a large, medium, or small size.
  // We'll take the best quality first, since next/image will take the reins from there
  const main_img =
    props.main_img[0]?.formats.large ||
    props.main_img[0]?.formats.medium ||
    props.main_img[0]?.formats.small;
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
          mb: [4],
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
        {main_img && (
          <Image
            src={process.env.NEXT_PUBLIC_STRAPI_API_URL + main_img.url}
            alt="article main"
            sx={{ mx: 'auto', display: 'block', borderRadius: 2 }}
            height={main_img.height}
            width={main_img.width}
            layout="responsive"
          />
        )}
        <ReactMarkdown
          source={body}
          sx={{
            variant: 'text.body',
          }}
        />
        <AnimatedLink
          href={router.query.origin ? (router.query.origin as string) : '/news'}
          sx={{ marginLeft: 0 }}
        >
          &larr; Back
        </AnimatedLink>
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
