import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { getCategories, urlFor } from '@/lib/sanity';

export const metadata: Metadata = {
  title: 'Categorias | Meu Guia Pet',
  description: 'Explore todas as categorias de conteúdo sobre cuidados com pets.',
};

export const revalidate = 3600; // Revalidate every hour

export default async function CategoriesPage() {
  const categories = await getCategories();
  
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Categorias</h1>
        
        <p className="text-lg text-gray-600 mb-8">
          Explore nosso conteúdo organizado por categorias para encontrar informações 
          específicas sobre o cuidado com o seu pet.
        </p>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories?.length > 0 ? (
            categories.map((category: any) => (
              <Link
                key={category._id}
                href={`/categorias/${category.slug?.current}`}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition"
              >
                <div className="p-5">
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
                  <h2 className="text-xl font-bold text-center mb-2">{category.title}</h2>
                  {category.description && (
                    <p className="text-gray-600 text-center">{category.description}</p>
                  )}
                </div>
              </Link>
            ))
          ) : (
            <div className="col-span-full text-center p-12 bg-gray-50 rounded-lg">
              <h2 className="text-xl font-bold mb-2">Categorias em breve</h2>
              <p className="text-gray-600">
                Estamos trabalhando para trazer categorias de conteúdo organizadas para você.
                Volte em breve!
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
} 