import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import ContentService from "../../../lib/contentful";
import { IPosts, IPostsFields, ISlider } from "../../../src/@types/contentful";

interface Props {
  post: IPostsFields;
}

export const getStaticProps: GetStaticProps<Props, { slug: string }> = async (
  ctx
) => {
  const { slug } = ctx.params!;
  const post = await ContentService.instance.getPostBySlug(slug);

  if (!post) {
    return { notFound: true };
  }

  return {
    props: {
      post: post.fields,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await ContentService.instance.getEntriesByType<IPostsFields>(
    "posts"
  );

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.fields.slug,
      },
    })),
    fallback: false,
  };
};

const Index: NextPage<Props> = ({ post }) => {
  console.log(post);
  return (
    <div>
      <h1>{post.title}</h1>
    </div>
  );
};

export default Index;
