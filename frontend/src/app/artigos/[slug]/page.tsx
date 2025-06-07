import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getArticleBySlug, urlFor } from '@/lib/sanity';
import RichText from '@/components/RichText';

export const revalidate = 3600; // Revalidar a cada hora

interface ArticlePageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug);
  
  if (!article) {
    return {
      title: 'Artigo não encontrado | Meu Guia Pet',
    };
  }
  
  return {
    title: `${article.title} | Meu Guia Pet`,
    description: article.excerpt || undefined,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const article = await getArticleBySlug(params.slug);
  
  if (!article) {
    notFound();
  }
  
  const formatDate = (dateString: string) => {
    if (!dateString) return 'Data não disponível';
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      });
    } catch (error) {
      console.error('Error formatting date:', error);
      return 'Data não disponível';
    }
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm">
          <Link href="/" className="text-blue-600 hover:underline">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/categorias" className="text-blue-600 hover:underline">Categorias</Link>
          {article.category && (
            <>
              <span className="mx-2">›</span>
              <Link 
                href={`/categorias/${article.category?.slug?.current || '#'}`} 
                className="text-blue-600 hover:underline"
              >
                {article.category.title}
              </Link>
            </>
          )}
        </div>
        
        {/* Article header */}
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{article.title}</h1>
          
          <div className="flex flex-wrap items-center gap-4 mb-6">
            {article.publishedAt && (
              <span className="text-gray-600">
                Publicado em {formatDate(article.publishedAt)}
              </span>
            )}
            
            {article.isExpertReviewed && (
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Validado por especialista
              </span>
            )}
          </div>
          
          {article.mainImage && (
            <div className="relative aspect-[16/9] mb-6">
              <Image
                src={urlFor(article.mainImage).width(1200).height(675).url()}
                alt={article.title}
                fill
                className="object-cover rounded-lg"
                priority
              />
            </div>
          )}
          
          {article.excerpt && (
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500 mb-6">
              <p className="text-lg text-gray-700 italic">{article.excerpt}</p>
            </div>
          )}
        </header>
        
        {/* Article content */}
        <article className="prose prose-lg max-w-none mb-12">
          {article.body ? (
            <RichText content={article.body} />
          ) : (
            <p className="text-gray-600">
              O conteúdo deste artigo está sendo preparado. Volte em breve para mais informações!
            </p>
          )}
        </article>
        
        {/* Expert reviewers */}
        {article.isExpertReviewed && article.reviewedBy && article.reviewedBy.length > 0 && (
          <section className="bg-green-50 rounded-lg p-6 my-8">
            <h2 className="text-xl font-bold mb-4">Conteúdo revisado por:</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {article.reviewedBy.map((expert: any) => (
                <Link
                  href={`/especialistas/${expert.slug?.current || '#'}`}
                  key={expert._id}
                  className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm hover:shadow transition"
                >
                  {expert.image ? (
                    <Image
                      src={urlFor(expert.image).width(100).height(100).url()}
                      alt={expert.name}
                      width={64}
                      height={64}
                      className="rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-gray-500">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                  )}
                  <div>
                    <h3 className="font-medium">{expert.name}</h3>
                    <p className="text-sm text-gray-600">CRMV: {expert.crmv || 'N/A'}</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
} 