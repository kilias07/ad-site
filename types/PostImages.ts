import { IPostsFields } from "../src/@types/contentful";

export interface PostImages extends Omit<IPostsFields, "postGallery"> {
  bytes: number;
  createdAt: string;
  duration: number | null;
  format: string;
  height: number;
  metadata: any[];
  original_secure_url: string;
  original_url: string;
  public_id: string;
  raw_transformation: string;
  resource_type: string;
  secure_url: string;
  tags: any[];
  type: string;
  url: string;
  version: number;
  width: number;
}
