import { motion } from "framer-motion";
import { GetStaticProps } from "next";
import ContentService from "../../lib/contentful";
import { IPosts } from "../../src/@types/contentful";

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

const Blog = () => {
  return (
    <motion.div
      exit={{ opacity: 0 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium
        aliquid amet consequuntur deleniti dolor, dolore eum magnam
        necessitatibus nulla quasi ullam vel voluptas. Architecto beatae
        consectetur deserunt doloremque, esse quod.
      </h1>
      <p>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
          consectetur cum delectus deleniti dignissimos ea impedit laudantium,
          nobis placeat quibusdam sapiente sed similique voluptatum. Alias
          corporis culpa quasi suscipit tempora!
        </span>
        <span>
          Aut eaque magni neque possimus vel? Consequatur doloribus non optio! A
          pariatur porro quod quos repudiandae rerum totam veritatis! Commodi
          eius et, in iusto quibusdam rem rerum? Assumenda, doloribus molestiae.
        </span>
        <span>
          Aperiam aspernatur at culpa deleniti dicta eius enim eum explicabo,
          facilis fugit in libero molestiae perferendis praesentium provident
          quis repellendus soluta ullam, voluptate voluptatem? Mollitia natus
          necessitatibus nobis quas sed.
        </span>
        <span>
          Cupiditate inventore iste iusto nobis obcaecati odio officia quam
          sequi tempore ut. Ab adipisci aliquam error laudantium porro veritatis
          voluptas! Illum laudantium quod recusandae reprehenderit tempora,
          temporibus unde voluptates? Explicabo?
        </span>
        <span>
          Adipisci, amet delectus dolores eos fuga iusto maiores odio odit
          officiis pariatur quam sequi suscipit vel, velit vero? A amet
          dignissimos fugit nam nesciunt provident quia quis reprehenderit,
          sequi temporibus!
        </span>
        <span>
          Beatae labore maxime numquam perferendis vel voluptate! Cum cumque ea
          est ex nostrum nulla obcaecati provident repudiandae voluptatem. A at
          iusto mollitia nesciunt, nisi nobis quam quis reprehenderit ut
          voluptas!
        </span>
        <span>
          Asperiores autem dignissimos laborum laudantium pariatur placeat
          quaerat quasi, qui tenetur unde? Accusantium eligendi esse et
          expedita, facere laborum molestias nisi obcaecati odio officiis
          pariatur quibusdam saepe sint sunt voluptatem!
        </span>
        <span>
          Iste itaque maxime modi officia provident, quas ut. Ad autem ex
          explicabo ipsa itaque laboriosam officia quae. Aperiam debitis
          dignissimos ex, excepturi minus neque numquam omnis quia reiciendis,
          similique voluptatem.
        </span>
        <span>
          At cumque explicabo facere harum inventore, modi. Animi beatae
          delectus distinctio dolores earum, et fugiat, ipsam nisi nostrum
          obcaecati optio possimus quaerat quasi quia quo quos reiciendis
          voluptatem voluptatum! Iste.
        </span>
        <span>
          Ab adipisci, amet, aut, cum dignissimos doloribus ducimus ea enim
          facilis magni molestias nisi suscipit temporibus tenetur vero voluptas
          voluptate! Consequuntur ducimus ipsam laborum molestias neque numquam
          placeat sunt veniam?
        </span>
      </p>
    </motion.div>
  );
};

export default Blog;
