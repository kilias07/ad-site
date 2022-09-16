import type { GetStaticProps, NextPage } from "next";
import { HeroSection } from "../components/MainSite/hero";
import { Slider } from "../components/MainSite/slider";
import { client } from "../lib/contentful";

export const getStaticProps: GetStaticProps = async () => {
  const { items: slider } = await client.getEntries({
    content_type: "slider",
  });
  return {
    props: { slider },
  };
};

const Home: NextPage = ({ slider }: any) => {
  // console.log(slider);
  return (
    <>
      <HeroSection />
      <Slider slider={slider} />
    </>
  );
};

export default Home;
