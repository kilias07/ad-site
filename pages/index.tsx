import type { GetStaticProps, NextPage } from "next";
import { IPosts } from "../src/@types/contentful";
import ContentService from "../lib/contentfulClient";
import { motion } from "framer-motion";
import Cta from "../components/MainSite/cta";
import { Statement } from "../components/MainSite/Statement";
import { HeroSection2 } from "../components/MainSite/HeroSection2";
import { HeroSection } from "../components/MainSite/HeroSection";

interface Props {
  posts: IPosts[];
}
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

const Home: NextPage<Props> = ({ posts }) => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <HeroSection2 />
      <Statement />
      <Cta />
      <HeroSection />
    </motion.div>
  );
};

export default Home;
