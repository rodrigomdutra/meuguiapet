import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getSpecialistBySlug, urlFor } from '@/lib/sanity';
import RichText from '@/components/RichText';

export const revalidate = 3600; // Revalidate every hour

interface SpecialistPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: SpecialistPageProps): Promise<Metadata> {
  const specialist = await getSpecialistBySlug(params.slug);
  
  if (!specialist) {
    return {
      title: 'Especialista não encontrado | Meu Guia Pet',
    };
  }
  
  return {
    title: `${specialist.name} | Especialistas | Meu Guia Pet`,
    description: specialist.bio ? specialist.bio.substring(0, 160) : `${specialist.name}, especialista em pets.`,
  };
}

export default async function SpecialistPage({ params }: SpecialistPageProps) {
  const specialist = await getSpecialistBySlug(params.slug);
  
  if (!specialist) {
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
          <Link href="/especialistas" className="text-blue-600 hover:underline">Especialistas</Link>
          <span className="mx-2">›</span>
          <span>{specialist.name}</span>
        </div>
        
        {/* Specialist header */}
        <header className="mb-12">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {specialist.image && (
              <div className="flex-shrink-0">
                <Image
                  src={urlFor(specialist.image).width(200).height(200).url()}
                  alt={specialist.name}
                  width={200}
                  height={200}
                  className="rounded-full"
                />
              </div>
            )}
            
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{specialist.name}</h1>
              
              {specialist.speciality && (
                <p className="text-xl text-blue-600 mb-4">{specialist.speciality}</p>
              )}
              
              <div className="flex flex-wrap gap-4 mb-4">
                {specialist.crmv && (
                  <div className="text-sm bg-gray-100 px-3 py-1 rounded-full">
                    CRMV: {specialist.crmv}
                  </div>
                )}
                
                {specialist.education && (
                  <div className="text-sm bg-gray-100 px-3 py-1 rounded-full">
                    {specialist.education}
                  </div>
                )}
              </div>
              
              {specialist.bio && (
                <p className="text-gray-600">
                  {specialist.bio}
                </p>
              )}
            </div>
          </div>
        </header>
        
        {/* Specialist content */}
        {specialist.biographyRaw && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Sobre {specialist.name}</h2>
            <div className="prose max-w-none">
              <RichText content={specialist.biographyRaw} />
            </div>
          </section>
        )}
        
        {/* Articles validated by the specialist */}
        {specialist.articles && specialist.articles.length > 0 && (
          <section>
            <h2 className="text-2xl font-bold mb-6">Artigos Validados por {specialist.name}</h2>
            
            <div className="grid gap-8 md:grid-cols-2">
              {specialist.articles.map((article: any) => (
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
                      <div className="absolute top-2 right-2 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                        Validado
                      </div>
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
          </section>
        )}
      </div>
    </main>
  );
} 