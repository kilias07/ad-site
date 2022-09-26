import { motion } from "framer-motion";
import Image from "next/image";
import { IPosts } from "../../src/@types/contentful";
import { Button } from "../Button";

interface Post {
  post: IPosts;
}

const BlogCard = ({ post }: Post) => {
  return (
    <div className="max-w-[24rem] lg:max-w-[90%] m-8 rounded-xl h-fit shadow-2xl overflow-hidden lg:flex lg:flex-1 dark:bg-grayLighter dark:text-primaryColorGray">
      <Image
        alt={post.fields.title}
        src={post.fields.featuredImage[0].url}
        width="384"
        height="288"
        objectFit="cover"
        objectPosition="center"
      />
      <div className="lg:basis-3/4 p-5">
        <h1 className="font-bold text-xl my-3 h-20">{post.fields.title}</h1>
        <p className="h-24">{post.fields.description}</p>
        <Button link={`blog/${post.fields.slug}`} />
      </div>
    </div>
  );
};

export default BlogCard;
