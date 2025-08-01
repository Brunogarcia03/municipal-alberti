"use client";

import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Image from "next/image";

export default function NewsContentRenderer({ content }) {
  return (
    <BlocksRenderer
      content={content}
      blocks={{
        paragraph: ({ children }) => <p className="max-w-prose">{children}</p>,
        heading: ({ children, level }) => {
          const Tag = `h${level}`;
          return <Tag className="font-bold mb-2">{children}</Tag>;
        },
        link: ({ children, url }) => (
          <a
            href={url}
            className="text-blue underline hover:text-blue-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            {children}
          </a>
        ),
        image: ({ children, image }) => (
          <Image
            src={image.url}
            width={image.width}
            height={image.height}
            alt={image.caption || image.hash}
            className="max-w-[500px] h-auto rounded-md"
          />
        ),
      }}
      modifiers={{
        bold: ({ children }) => <strong>{children}</strong>,
        italic: ({ children }) => <span className="italic">{children}</span>,
        underline: ({ children }) => (
          <span className="underline">{children}</span>
        ),
      }}
    />
  );
}
