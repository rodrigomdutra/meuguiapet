import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

interface CategoryCardProps {
  title: string
  description: string
  image: string
  href: string
}

export default function CategoryCard({ title, description, image, href }: CategoryCardProps) {
  return (
    <Link href={href} className="block">
      <Card className="overflow-hidden transition-all duration-200 hover:shadow-lg">
        <div className="relative h-40">
          <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
        </div>
        <CardContent className="p-5">
          <h3 className="font-bold text-xl mb-2 text-primary-green">{title}</h3>
          <p className="text-neutral-600 text-sm line-clamp-2">{description}</p>
        </CardContent>
      </Card>
    </Link>
  )
} 