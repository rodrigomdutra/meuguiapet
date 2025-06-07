'use client';

import { PortableText, PortableTextComponents } from '@portabletext/react';
import Link from 'next/link';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity';

interface RichTextProps {
  content: any;
}

export default function RichText({ content }: RichTextProps) {
  const components: PortableTextComponents = {
    types: {
      image: ({ value }) => {
        return (
          <div className="relative w-full h-96 my-8">
            <Image
              className="object-contain"
              src={urlFor(value).url()}
              alt={value.alt || 'Imagem do artigo'}
              fill
            />
            {value.caption && (
              <div className="text-center text-sm text-gray-500 mt-2">
                {value.caption}
              </div>
            )}
          </div>
        );
      },
    },
    marks: {
      link: ({ children, value }) => {
        const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
        const href = value.href;
        
        if (href.startsWith('/')) {
          return (
            <Link 
              href={href} 
              className="text-blue-600 hover:underline"
            >
              {children}
            </Link>
          );
        }
        
        return (
          <a 
            href={href} 
            target="_blank" 
            rel={rel} 
            className="text-blue-600 hover:underline"
          >
            {children}
          </a>
        );
      },
      internalLink: ({ children, value }) => {
        return (
          <Link
            href={value.slug ? `/${value.type}/${value.slug}` : '/'}
            className="text-blue-600 hover:underline"
          >
            {children}
          </Link>
        );
      },
    },
    block: {
      h1: ({ children }) => (
        <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>
      ),
      h2: ({ children }) => (
        <h2 className="text-2xl font-bold mt-8 mb-4">{children}</h2>
      ),
      h3: ({ children }) => (
        <h3 className="text-xl font-bold mt-6 mb-4">{children}</h3>
      ),
      h4: ({ children }) => (
        <h4 className="text-lg font-bold mt-6 mb-4">{children}</h4>
      ),
      normal: ({ children }) => (
        <p className="mb-4 leading-relaxed">{children}</p>
      ),
      blockquote: ({ children }) => (
        <blockquote className="border-l-4 border-blue-500 pl-4 py-2 my-6 text-gray-700 italic">
          {children}
        </blockquote>
      ),
    },
    list: {
      bullet: ({ children }) => (
        <ul className="list-disc pl-6 mb-6 space-y-2">{children}</ul>
      ),
      number: ({ children }) => (
        <ol className="list-decimal pl-6 mb-6 space-y-2">{children}</ol>
      ),
    },
    listItem: {
      bullet: ({ children }) => <li>{children}</li>,
      number: ({ children }) => <li>{children}</li>,
    },
  };

  return (
    <div className="prose prose-blue max-w-none">
      <PortableText value={content} components={components} />
    </div>
  );
} 