import type { GetStaticProps, NextPage } from "next";
import { IPosts, ISlider } from "../src/@types/contentful";
import { HeroSection } from "../components/MainSite/hero";
import { Slider } from "../components/MainSite/slider";
import Works from "../components/MainSite/Works/Works";
import ContentService from "../lib/contentful";
import { motion } from "framer-motion";

interface Props {
  slider: ISlider[];
  posts: IPosts[];
}
export const getStaticProps: GetStaticProps = async () => {
  const slider = await ContentService.instance.getEntriesByType<ISlider[]>(
    "slider"
  );
  const posts = await ContentService.instance.getEntriesByType<IPosts[]>(
    "posts"
  );

  return {
    props: {
      slider,
      posts,
    },
  };
};

const Home: NextPage<Props> = ({ slider, posts }) => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <HeroSection />
      <Slider slider={slider} />
      <Works posts={posts} /> 3
    </motion.div>
  );
};

export default Home;
