import type { GetStaticProps, NextPage } from "next";
import { IPosts, ISlider } from "../src/@types/contentful";
import ContentService from "../lib/contentfulClient";
import { motion } from "framer-motion";
import Cta from "../components/MainSite/cta";
import { Statement } from "../components/MainSite/Statement";
import { HeroSection2 } from "../components/MainSite/HeroSection2";
import { HeroSection } from "../components/MainSite/HeroSection";

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
      <HeroSection2 />
      <Statement />
      <Cta />
      <HeroSection />
      {/*<Slider slider={slider} />*/}
      {/*<Works posts={posts} />*/}
    </motion.div>
  );
};

export default Home;
