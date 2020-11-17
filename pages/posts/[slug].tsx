import { GetStaticPaths, GetStaticProps } from 'next';
import ReactMarkdown from 'react-markdown';
import { getAllPosts, getPostBySlug } from '../../lib/fetchPosts';

interface Props {
  title: string;
  body: string;
  published_at: string;
}

const PostPage: React.FC<Props> = (props) => {
  const { title, body, published_at } = props;
  return (
    <article>
      <h1>{title}</h1>
      <h2>posted on {new Date(published_at).toLocaleDateString()}</h2>
      <ReactMarkdown source={body} />
    </article>
  );
};

export default PostPage;

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: await getPostBySlug(context.params.slug as string),
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
