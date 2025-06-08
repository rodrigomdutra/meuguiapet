import { Metadata } from "next"
import Image from "next/image"
import { notFound } from "next/navigation"
import Link from "next/link"
import { client, urlFor, categoryBySlugQuery, articlesByCategory } from "@/lib/sanity"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import FeaturedArticle from "@/components/home/featured-article"

interface CategoryPageProps {
  params: {
    slug: string
  }
}

// Define Article interface
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

async function getCategory(slug: string) {
  return await client.fetch(categoryBySlugQuery, { slug })
}

async function getCategoryArticles(categoryId: string) {
  return await client.fetch(articlesByCategory, { categoryId })
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = await getCategory(params.slug)
  
  if (!category) {
    return {
      title: "Categoria não encontrada",
      description: "A categoria que você está procurando não existe.",
    }
  }

  return {
    title: category.title,
    description: category.description || `Explore artigos sobre ${category.title} no meuguia.pet`,
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const category = await getCategory(params.slug)
  
  if (!category) {
    notFound()
  }
  
  const articles = await getCategoryArticles(category._id)

  return (
    <div>
      {/* Category Hero */}
      <section className="bg-neutral-50 py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <Badge variant="green" className="mb-4">Categoria</Badge>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{category.title}</h1>
              {category.description && (
                <p className="text-gray-600 text-lg">{category.description}</p>
              )}
            </div>
            {category.image && (
              <div className="relative h-64 rounded-lg overflow-hidden">
                <Image
                  src={urlFor(category.image).url()}
                  alt={category.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-2xl font-bold mb-8">
            {articles.length > 0
              ? `Artigos sobre ${category.title}`
              : `Não há artigos sobre ${category.title} ainda`}
          </h2>

          {articles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article: Article) => (
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
          ) : (
            <Card>
              <CardContent className="flex flex-col items-center justify-center p-10 text-center">
                <p className="text-gray-500 mb-4">
                  Estamos trabalhando para adicionar mais conteúdo sobre {category.title}.
                </p>
                <Link href="/categorias" className="text-primary-blue hover:underline">
                  Explorar outras categorias
                </Link>
              </CardContent>
            </Card>
          )}
        </div>
      </section>
    </div>
  )
} 