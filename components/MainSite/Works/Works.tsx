import HeaderCard from "./HeaderCard";
// import { Posts } from "../../../types/posts";

const Works = ({ posts }: any) => {
  // console.log(posts);
  //get Unique Tag Values
  const allTag: string[] = [];
  // posts.forEach((post) => {
  //   post.fields.tag && post.fields.tag.forEach((el) => allTag.push(el));
  // });
  // const uniqueValue = [...new Set(allTag)];
  //
  // const [activeLink, setActiveLink] = useState(uniqueValue[0]);
  // const filteredPosts = posts.filter(
  //   (post) =>
  //     post.fields.featuredPosts &&
  //     post.fields.tag.some((tag) => tag === activeLink)
  // );
  return <HeaderCard />;
};

export default Works;
