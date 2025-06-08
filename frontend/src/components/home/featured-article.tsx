import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle } from "lucide-react"

interface FeaturedArticleProps {
  title: string
  excerpt: string
  image: string
  category: string
  href: string
  expertValidated: boolean
  expertName?: string
  expertRole?: string
}

export default function FeaturedArticle({
  title,
  excerpt,
  image,
  category,
  href,
  expertValidated,
  expertName,
  expertRole,
}: FeaturedArticleProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col hover:shadow-md transition-shadow duration-200">
      <div className="relative h-48">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute top-3 left-3">
          <Badge variant="green">{category}</Badge>
        </div>
      </div>
      <CardContent className="p-5 flex-1 flex flex-col">
        <Link href={href}>
          <h3 className="font-bold text-lg mb-2 hover:text-primary-green transition-colors duration-200">
            {title}
          </h3>
        </Link>
        <p className="text-neutral-600 text-sm mb-4 line-clamp-3">{excerpt}</p>
        
        {expertValidated && expertName && (
          <div className="mt-auto pt-4 border-t flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-primary-green" />
            <div className="text-xs">
              <span className="font-semibold text-primary-green">Validado por:</span>
              <p className="text-neutral-600">
                {expertName} {expertRole ? `• ${expertRole}` : ""}
              </p>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
} 