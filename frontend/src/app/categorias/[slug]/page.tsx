import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getCategoryBySlug, urlFor } from '@/lib/sanity';

export const revalidate = 3600; // Revalidate every hour

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = await getCategoryBySlug(params.slug);
  
  if (!category) {
    return {
      title: 'Categoria não encontrada | Meu Guia Pet',
    };
  }
  
  return {
    title: `${category.title} | Meu Guia Pet`,
    description: category.description || `Artigos sobre ${category.title} para tutores de pets.`,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const category = await getCategoryBySlug(params.slug);
  
  if (!category) {
    notFound();
  }
  
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
        {/* Breadcrumb */}
        <div className="mb-6 text-sm">
          <Link href="/" className="text-blue-600 hover:underline">Home</Link>
          <span className="mx-2">›</span>
          <Link href="/categorias" className="text-blue-600 hover:underline">Categorias</Link>
          <span className="mx-2">›</span>
          <span>{category.title}</span>
        </div>
        
        {/* Category header */}
        <header className="mb-12 text-center">
          {category.icon && (
            <div className="flex justify-center mb-6">
              <Image
                src={urlFor(category.icon).width(120).height(120).url()}
                alt={category.title}
                width={120}
                height={120}
                className="rounded-full"
              />
            </div>
          )}
          
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{category.title}</h1>
          
          {category.description && (
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {category.description}
            </p>
          )}
        </header>
        
        {/* Category articles */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Artigos Nesta Categoria</h2>
          
          {category.articles && category.articles.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2">
              {category.articles.map((article: any) => (
                <Link
                  key={article._id}
                  href={`/artigos/${article.slug?.current}`}
                  className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition flex flex-col"
                >
                  {article.mainImage && (
                    <div className="relative w-full h-48">
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
                  )}
                  
                  <div className="p-5 flex-1 flex flex-col">
                    <h3 className="text-lg font-bold mb-2">{article.title}</h3>
                    
                    {article.excerpt && (
                      <p className="text-gray-600 mb-4 line-clamp-2">{article.excerpt}</p>
                    )}
                    
                    <div className="mt-auto text-sm text-gray-500">
                      {article.publishedAt && formatDate(article.publishedAt)}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center p-12 bg-gray-50 rounded-lg">
              <p className="text-lg text-gray-600">
                Ainda não há artigos nesta categoria. Volte em breve para novos conteúdos!
              </p>
            </div>
          )}
        </section>
      </div>
    </main>
  );
} 