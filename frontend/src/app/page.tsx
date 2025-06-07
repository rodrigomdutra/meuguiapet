import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getFeaturedContent, urlFor } from '@/lib/sanity';

export const metadata: Metadata = {
  title: 'Meu Guia Pet - Conteúdo de qualidade sobre cuidados com pets',
  description: 'Conteúdo de qualidade sobre cuidados com pets, validado por especialistas veterinários.',
};

export const revalidate = 3600; // Revalidate every hour

export default async function Home() {
  const { featuredArticles, categories, specialists } = await getFeaturedContent();
  
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
    <main>
      {/* Hero section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-blue">
              Conteúdo de qualidade sobre cuidados com pets
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Informações confiáveis, revisadas por especialistas veterinários,
              para ajudar você a cuidar melhor do seu pet.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/artigos" 
                className="btn-primary"
              >
                Explorar Artigos
              </Link>
              <Link 
                href="/categorias" 
                className="btn-secondary"
              >
                Ver Categorias
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured articles section */}
      {featuredArticles?.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-3xl font-bold">Artigos Recentes</h2>
              <Link 
                href="/artigos" 
                className="link"
              >
                Ver todos →
              </Link>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {featuredArticles.map((article: any) => (
                <Link 
                  key={article._id}
                  href={`/artigos/${article.slug?.current}`}
                  className="card flex flex-col"
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
                        <div className="absolute top-2 right-2 badge badge-green">
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
                    
                    <div className="mt-auto flex flex-wrap items-center gap-3 text-sm">
                      {article.publishedAt && (
                        <span className="text-gray-500">
                          {formatDate(article.publishedAt)}
                        </span>
                      )}
                      
                      {article.category && (
                        <>
                          <span className="text-gray-400">•</span>
                          <span className="text-blue-600">
                            {article.category}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* Categories section */}
      {categories?.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-3xl font-bold">Categorias</h2>
              <Link 
                href="/categorias" 
                className="link"
              >
                Ver todas →
              </Link>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {categories.map((category: any) => (
                <Link
                  key={category._id}
                  href={`/categorias/${category.slug?.current}`}
                  className="card"
                >
                  <div className="p-6 text-center">
                    {category.icon && (
                      <div className="flex justify-center mb-4">
                        <Image
                          src={urlFor(category.icon).width(80).height(80).url()}
                          alt={category.title}
                          width={80}
                          height={80}
                          className="rounded-full"
                        />
                      </div>
                    )}
                    <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                    {category.description && (
                      <p className="text-gray-600 line-clamp-2 mb-3">{category.description}</p>
                    )}
                    {category.articleCount > 0 && (
                      <div className="badge badge-blue">
                        {category.articleCount} {category.articleCount === 1 ? 'artigo' : 'artigos'}
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* Specialists section */}
      {specialists?.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-3xl font-bold">Especialistas</h2>
              <Link 
                href="/especialistas" 
                className="link"
              >
                Ver todos →
              </Link>
            </div>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {specialists.map((specialist: any) => (
                <Link 
                  key={specialist._id}
                  href={`/especialistas/${specialist.slug?.current}`}
                  className="card"
                >
                  <div className="p-6 text-center">
                    {specialist.image && (
                      <div className="flex justify-center mb-4">
                        <Image
                          src={urlFor(specialist.image).width(120).height(120).url()}
                          alt={specialist.name}
                          width={120}
                          height={120}
                          className="rounded-full"
                        />
                      </div>
                    )}
                    
                    <h3 className="text-xl font-bold mb-1">{specialist.name}</h3>
                    
                    {specialist.speciality && (
                      <p className="text-blue-600">{specialist.speciality}</p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      
      {/* CTA section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Encontre o que precisa para cuidar melhor do seu pet
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Explore nosso conteúdo organizado por categorias ou busque informações
              específicas sobre saúde, alimentação, comportamento e muito mais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/artigos" 
                className="btn-primary"
              >
                Explorar Artigos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 