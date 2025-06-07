import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getArticles, urlFor } from '@/lib/sanity';

export const metadata: Metadata = {
  title: 'Artigos | Meu Guia Pet',
  description: 'Conteúdo de qualidade sobre cuidados com pets, validado por especialistas veterinários.',
};

export const revalidate = 3600; // Revalidate every hour

export default async function ArticlesPage() {
  const articles = await getArticles();
  
  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      });
    } catch (error) {
      console.error('Error formatting date:', error);
      return '';
    }
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Artigos</h1>
        
        <p className="text-lg text-gray-600 mb-12">
          Conteúdo de qualidade sobre cuidados com pets, validado por especialistas veterinários.
        </p>
        
        {articles?.length > 0 ? (
          <div className="grid gap-10">
            {articles.map((article: any) => (
              <article key={article._id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition">
                <Link href={`/artigos/${article.slug?.current}`} className="flex flex-col md:flex-row">
                  {article.mainImage && (
                    <div className="md:w-2/5 relative">
                      <div className="relative w-full h-64 md:h-full">
                        <Image
                          src={urlFor(article.mainImage).width(600).height(400).url()}
                          alt={article.title}
                          fill
                          className="object-cover"
                        />
                        {article.isExpertReviewed && (
                          <div className="absolute top-2 right-2 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                            Validado
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                  
                  <div className="md:w-3/5 p-6">
                    <h2 className="text-xl font-bold mb-2">{article.title}</h2>
                    
                    {article.excerpt && (
                      <p className="text-gray-600 mb-4">{article.excerpt}</p>
                    )}
                    
                    <div className="flex flex-wrap items-center gap-3 mt-4 text-sm">
                      {article.publishedAt && (
                        <span className="text-gray-500">
                          {formatDate(article.publishedAt)}
                        </span>
                      )}
                      
                      {article.category && (
                        <>
                          <span className="text-gray-400">•</span>
                          <Link 
                            href={`/categorias/${article.categorySlug}`} 
                            className="text-blue-600 hover:underline"
                          >
                            {article.category}
                          </Link>
                        </>
                      )}
                    </div>
                    
                    <div className="mt-4">
                      <span className="inline-block text-blue-600 font-medium hover:underline">
                        Ler artigo completo →
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center p-12 bg-gray-50 rounded-lg">
            <h2 className="text-xl font-bold mb-2">Conteúdo em breve</h2>
            <p className="text-gray-600">
              Estamos trabalhando para trazer conteúdo de qualidade para você.
              Volte em breve!
            </p>
          </div>
        )}
      </div>
    </main>
  );
} 