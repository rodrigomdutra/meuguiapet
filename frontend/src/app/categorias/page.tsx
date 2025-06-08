import { Metadata } from 'next';
import { client, urlFor, categoriesQuery } from '@/lib/sanity';
import CategoryCard from '@/components/home/category-card';

export const metadata: Metadata = {
  title: 'Categorias',
  description: 'Explore nosso conteúdo organizado por temas como alimentação, saúde, comportamento e muito mais.',
};

async function getCategories() {
  return await client.fetch(categoriesQuery);
}

export default async function CategoriesPage() {
  const categories = await getCategories();
  
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary-green py-16">
        <div className="container-custom text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Categorias</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Explore nosso conteúdo organizado por temas como alimentação, saúde,
            comportamento e muito mais.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <CategoryCard
                key={category._id}
                title={category.title}
                description={category.description}
                image={category.image ? urlFor(category.image).url() : "/placeholder.svg"}
                href={`/categoria/${category.slug.current}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 