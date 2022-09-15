import type { GetStaticProps, NextPage } from "next";
import { HeroSection } from "../components/MainSite/hero";
import { LOAD_POSTS, LOAD_SLIDER } from "../GraphQL/Queries";
import { client } from "../lib/apolloClient";
import { Slider } from "../components/MainSite/slider";

export const getStaticProps: GetStaticProps = async () => {
  const { data: slider } = await client.query({
    query: LOAD_SLIDER,
  });

  return {
    props: { slider },
  };
};

const Home: NextPage = ({ slider }: any) => {
  return (
    <>
      <HeroSection />
      <Slider slider={slider} />
    </>
  );
};

export default Home;
