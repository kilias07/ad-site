import { createClient } from "contentful";
import { config } from "dotenv";
import { IPostsFields } from "../src/@types/contentful";

// export const client = createClient({
//   space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string,
//   accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY as string,
// });

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_CONTENTFUL_SPACE_ID: string;
      NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY: string;
    }
  }
}

config();

export default class ContentService {
  static get instance() {
    return new ContentService();
  }

  client = createClient({
    space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_KEY,
  });

  async getEntriesByType<T>(type: string) {
    return (
      await this.client.getEntries<T>({
        content_type: type,
      })
    ).items;
  }

  async getPostBySlug(slug: string) {
    return (
      await this.client.getEntries<IPostsFields>({
        content_type: "posts",
        "fields.slug": slug,
      })
    ).items[0];
  }
}
