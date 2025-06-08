import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { client, urlFor, categoriesQuery, featuredArticlesQuery } from '@/lib/sanity';
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import FeaturedArticle from "@/components/home/featured-article"
import CategoryCard from "@/components/home/category-card"

// Define interfaces for type safety
interface Category {
  _id: string;
  title: string;
  description?: string;
  image?: any;
  slug: { current: string };
}

interface Article {
  _id: string;
  title: string;
  excerpt?: string;
  mainImage?: any;
  categories?: { title: string }[];
  slug: { current: string };
  expertValidated?: boolean;
  expert?: { name?: string; role?: string };
}

export const metadata: Metadata = {
  title: 'Meu Guia Pet - Conteúdo de qualidade sobre cuidados com pets',
  description: 'Conteúdo de qualidade sobre cuidados com pets, validado por especialistas veterinários.',
};

export const revalidate = 3600; // Revalidate every hour

async function getCategories() {
  return await client.fetch(categoriesQuery)
}

async function getFeaturedArticles() {
  return await client.fetch(featuredArticlesQuery)
}

export default async function Home() {
  const categories = await getCategories()
  const featuredArticles = await getFeaturedArticles()

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
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-green to-primary-blue text-white">
        <div className="container-custom py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <Badge variant="yellow" className="mb-4">A melhor plataforma pet do Brasil</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Conteúdo pet brasileiro com validação científica
              </h1>
              <p className="text-lg opacity-90 mb-8">
                A primeira plataforma de conteúdo pet genuinamente brasileira, com validação científica e contextualização local.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="yellow" size="lg">
                  Explorar Conteúdos
                </Button>
                <Button variant="outline" size="lg" className="bg-white/10 border-white/20 hover:bg-white/20">
                  Sobre o Projeto
                </Button>
              </div>
            </div>
            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden">
              <Image
                src="/hero-image.jpg"
                alt="Família com cachorro"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Categorias</h2>
              <p className="text-gray-600 mt-2">
                Explore nosso conteúdo organizado por temas
              </p>
            </div>
            <Link href="/categorias">
              <Button variant="outline">Ver todas</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.slice(0, 6).map((category: Category) => (
              <CategoryCard
                key={category._id}
                title={category.title}
                description={category.description || ""}
                image={category.image ? urlFor(category.image).url() : "/placeholder.svg"}
                href={`/categoria/${category.slug.current}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="flex justify-between items-center mb-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Artigos em Destaque</h2>
              <p className="text-gray-600 mt-2">
                Conteúdo selecionado por nossos especialistas
              </p>
            </div>
            <Link href="/artigos">
              <Button variant="outline">Ver todos</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredArticles.map((article: Article) => (
              <FeaturedArticle
                key={article._id}
                title={article.title}
                excerpt={article.excerpt || ""}
                image={article.mainImage ? urlFor(article.mainImage).url() : "/placeholder.svg"}
                category={article.categories?.[0]?.title || "Geral"}
                href={`/artigos/${article.slug.current}`}
                expertValidated={article.expertValidated || false}
                expertName={article.expert?.name}
                expertRole={article.expert?.role}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-primary-blue text-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Fique por dentro das novidades</h2>
            <p className="opacity-90 mb-8">
              Assine nossa newsletter e receba conteúdo exclusivo sobre cuidados com pets diretamente no seu email.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu melhor email"
                className="px-4 py-3 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 flex-1"
                required
              />
              <Button className="bg-secondary-yellow hover:bg-secondary-yellow/90 text-neutral-900">
                Assinar
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
} 