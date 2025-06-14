import { A as a } from "app/components/mdx/a";
import { P as p } from "app/components/mdx/p";
import { H1 as h1 } from "app/components/mdx/h1";
import { H2 as h2 } from "app/components/mdx/h2";
import { H3 as h3 } from "app/components/mdx/h3";
import { OL as ol } from "app/components/mdx/ol";
import { UL as ul } from "app/components/mdx/ul";
import { LI as li } from "app/components/mdx/li";
import { HR as hr } from "app/components/mdx/hr";
import { Code as code } from "app/components/mdx/code";
import { Tweet } from "app/components/mdx/tweet";
import { Image } from "app/components/mdx/image";
import { Figure } from "app/components/mdx/figure";
import { Snippet } from "app/components/mdx/snippet";
import { Caption } from "app/components/mdx/caption";
import { Callout } from "app/components/mdx/callout";
import { YouTube } from "app/components/mdx/youtube";
import { Ref, FootNotes, FootNote } from "app/components/mdx/footnotes";
import { Blockquote as blockquote } from "app/components/mdx/blockquote";

export function useMDXComponents(components: {
  [component: string]: React.ComponentType;
}) {
  return {
    ...components,
    a,
    h1,
    h2,
    h3,
    p,
    ol,
    ul,
    li,
    hr,
    code,
    pre: Snippet,
    img: Image,
    blockquote,
    Tweet,
    Image,
    Figure,
    Snippet,
    Caption,
    Callout,
    YouTube,
    Ref,
    FootNotes,
    FootNote,
  };
}
