import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import ContentService from "../../../lib/contentfulClient";
import { IPostsFields } from "../../../src/@types/contentful";
import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { RICHTEXT_OPTIONS } from "../../../components/contentfulRichText";
import GalleryImage from "../../../components/blog/GalleryImage";
import { PostImages } from "../../../types/PostImages";
import ProgressBar from "../../../components/animations/ProgrsBar";

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
  return (
    <>
      <ProgressBar />
      <article className="container mx-auto h-fit">
        <h1 className="text-9xl text-center leading-poppins-fit my-20">
          {post.title}
        </h1>
        {post.postGallery.length === 1 ? (
          <div className="mx-auto max-w-5xl">
            <Image
              src={post.featuredImage[0].url}
              alt="title"
              priority
              layout="responsive"
              width={post.featuredImage[0].width}
              height={post.featuredImage[0].height}
              objectFit="contain"
            />
          </div>
        ) : (
          <GalleryImage postImages={post.postGallery as PostImages[]} />
        )}
        <div className="w-10/12 mx-auto">
          {documentToReactComponents(post.postText!, RICHTEXT_OPTIONS)}
        </div>
      </article>
    </>
  );
};

export default Index;
