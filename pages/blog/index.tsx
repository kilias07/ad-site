import { GetStaticProps, NextPage } from "next";
import ContentService from "../../lib/contentful";
import { IPosts } from "../../src/@types/contentful";
import BlogCard from "../../components/blog/BlogCard";
import SearchPosts from "../../components/blog/searchPosts";

export const getStaticProps: GetStaticProps = async () => {
  const posts = await ContentService.instance.getEntriesByType<IPosts[]>(
    "posts"
  );

  return {
    props: {
      posts,
    },
  };
};

const Blog: NextPage<{ posts: IPosts[] }> = ({ posts }) => {
  return (
    <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start">
      <SearchPosts />
      <div className="lg:w-3/4">
        {posts.map((post) => (
          <BlogCard post={post} key={post.sys.id} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
