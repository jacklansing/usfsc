/** @jsxRuntime classic */
/** @jsx jsx */
import { Box, jsx } from 'theme-ui';
import { GetStaticProps } from 'next';
import { getAllPosts } from '../lib/fetchPosts';
import Nav from '../components/nav';
import PostPreview from '../components/post-preview';
import LayoutAnimated from '../components/utils/layout-animated';
import Meta from '../components/utils/meta';
import AnimatedLink from '../components/utils/animated-link';
import AnimatedHeading from '../components/utils/animated-heading';

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
      <Meta
        title="News | Uncle Sam Figure Skating Club"
        canonicalUrl="https://unclesamfsc.com/news"
        ogUrl="https://unclesamfsc.com/news"
        ogTitle="Uncle Sam Figure Skating Club News"
        desc="Latest news from the Uncle Sam Figure Skating Club."
      />
      <LayoutAnimated>
        <Box
          sx={{
            position: 'relative',
          }}
        >
          <AnimatedHeading>Uncle Sam FSC News</AnimatedHeading>
        </Box>
        <Nav />
        {posts.map((post, idx) => (
          <PostPreview post={post} idx={idx} key={post.published_at} />
        ))}
        <AnimatedLink
          href="/post-history"
          sx={{
            textAlign: 'center',
            p: 5,
          }}
        >
          Older Posts &rarr;
        </AnimatedLink>
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
