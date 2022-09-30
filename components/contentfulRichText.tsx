import { Options } from "@contentful/rich-text-react-renderer";
import { BLOCKS, MARKS } from "@contentful/rich-text-types";
import { ReactNode } from "react";

export const RICHTEXT_OPTIONS: Options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <p className="md:text-lg my-4">{children}</p>;
    },
    [BLOCKS.HEADING_2]: (node, children) => {
      return <h2 className="text-6xl my-10">{children}</h2>;
    },
    [BLOCKS.HEADING_3]: (node, children) => {
      return <h3 className="text-5xl my-10">{children}</h3>;
    },
    [BLOCKS.HEADING_4]: (node, children) => {
      return <h3 className="text-4xl my-10">{children}</h3>;
    },
    [BLOCKS.HEADING_5]: (node, children) => {
      return <h3 className="text-3xl my-10">{children}</h3>;
    },
    [BLOCKS.HEADING_6]: (node, children) => {
      return <h3 className="text-2xl my-10">{children}</h3>;
    },
    [BLOCKS.OL_LIST]: (node, children) => {
      return <ol className="list-decimal">{children}</ol>;
    },
    [BLOCKS.UL_LIST]: (node, children) => {
      return <ul className="list-disc">{children}</ul>;
    },
    [BLOCKS.HR]: () => <hr className="my-8 h-px border-1 border-gray-200" />,
  },
  renderMark: {
    [MARKS.BOLD]: (text) => {
      return <strong className="font-medium">{text}</strong>;
    },
  },
  renderText: (text) => {
    return text
      .split("\n")
      .reduce((children: ReactNode[], textSegment: string, index: number) => {
        return [...children, index > 0 && <br key={index} />, textSegment];
      }, []);
  },
};

export class RICHTEXT_OPTIONS2 {
  private options: Options;

  constructor() {
    this.options = {
      renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children) => {
          return <p className="md:text-lg my-4">{children}</p>;
        },
        [BLOCKS.HEADING_2]: (node, children) => {
          return <h2 className="text-6xl my-10">{children}</h2>;
        },
        [BLOCKS.HEADING_3]: (node, children) => {
          return <h3 className="text-5xl my-10">{children}</h3>;
        },
        [BLOCKS.HEADING_4]: (node, children) => {
          return <h3 className="text-4xl my-10">{children}</h3>;
        },
        [BLOCKS.HEADING_5]: (node, children) => {
          return <h3 className="text-3xl my-10">{children}</h3>;
        },
        [BLOCKS.HEADING_6]: (node, children) => {
          return <h3 className="text-2xl my-10">{children}</h3>;
        },
        [BLOCKS.OL_LIST]: (node, children) => {
          return <ol className="list-decimal">{children}</ol>;
        },
        [BLOCKS.UL_LIST]: (node, children) => {
          return <ul className="list-disc">{children}</ul>;
        },
        [BLOCKS.HR]: () => (
          <hr className="my-8 h-px border-1 border-gray-200" />
        ),
      },
      renderMark: {
        [MARKS.BOLD]: (text) => {
          return <strong className="font-medium">{text}</strong>;
        },
      },
      renderText: (text) => {
        return text
          .split("\n")
          .reduce(
            (children: ReactNode[], textSegment: string, index: number) => {
              return [
                ...children,
                index > 0 && <br key={index} />,
                textSegment,
              ];
            },
            []
          );
      },
    };
  }

  //Tu chciałbym zrobić metodę która będzie updateować opcje w zależności od podancyh parametrów

  // update({property}): void {
  // }
}

//new RICHTEXT_OPTIONS2().update({renderNode?, renderText?, })
//Przykład działania metody update
// const test = new RICHTEXT_OPTIONS2();
// przykład 1
// test.update({
//   renderNode: {
//     [BLOCKS.HEADING_4]: (node, children) => {
//       return <h3 className="text-4xl my-10">{children}</h3>;
//     },
//   },
// });
// // przykład 2
// test.update({
//   renderNode: {
//     [BLOCKS.HEADING_4]: (node, children) => {
//       return <h3 className="text-4xl my-10">{children}</h3>;
//     },
//   },
//   renderMark: {
//     [MARKS.BOLD]: (text) => {
//       return <strong className="font-medium">{text}</strong>;
//     },
//   },
// });
