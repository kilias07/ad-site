// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";

export interface IBlogHeroSFields {
  /** Title */
  title: string;

  /** Image */
  image: Record<string, any>;

  /** Description */
  description: string;
}

/** Główny obraz do podstrony blog */

export interface IBlogHeroS extends Entry<IBlogHeroSFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "blogHeroS";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IBlogPostsFields {
  /** Title */
  title: string;

  /** Slug */
  slug: string;

  /** Post Text */
  postText?: Document | undefined;

  /** Featured Image */
  featuredImage: Record<string, any>;

  /** Post Gallery */
  postGallery: Record<string, any>;

  /** Description */
  description: string;

  /** FeaturedPosts */
  featuredPosts: boolean;

  /** Tag */
  tag?:
    | (
        | "Rzeźba"
        | "Rysunek"
        | "Abstrakcja"
        | "Figuracja"
        | "Plener"
        | "Wydarzenia"
      )[]
    | undefined;
}

/** Here you can add some new posts to Blog page */

export interface IBlogPosts extends Entry<IBlogPostsFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "blogPosts";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface IPostsFields {
  /** Title */
  title: string;

  /** Slug */
  slug: string;

  /** Post Text */
  postText?: Document | undefined;

  /** Featured Image */
  featuredImage: Record<string, any>;

  /** Post Gallery */
  postGallery: Record<string, any>;

  /** Description */
  description: string;

  /** FeaturedPosts */
  featuredPosts: boolean;

  /** Tag */
  tag: ("Rzeźba" | "Rysunek" | "Abstrakcja" | "Figuracja" | "Plener")[];
}

/** Here you can simple add new posts in your blog site */

export interface IPosts extends Entry<IPostsFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "posts";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export interface ISliderFields {
  /** Title */
  title: string;

  /** Image */
  image: Record<string, any>;

  /** Description */
  description: string;
}

export interface ISlider extends Entry<ISliderFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: "slider";
        linkType: "ContentType";
        type: "Link";
      };
    };
  };
}

export type CONTENT_TYPE = "blogHeroS" | "blogPosts" | "posts" | "slider";

export type LOCALE_CODE = "pl";

export type CONTENTFUL_DEFAULT_LOCALE_CODE = "pl";
