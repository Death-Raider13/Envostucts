import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CalendarDays, ArrowRight } from "lucide-react"

interface BlogPostCardProps {
  title: string
  date: string
  description: string
  slug: string // Unique identifier for the blog post
}

export function BlogPostCard({ title, date, description, slug }: BlogPostCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
        <CardDescription className="flex items-center text-sm text-gray-500">
          <CalendarDays className="w-4 h-4 mr-2" />
          {date}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 mb-4">{description}</p>
        <Link href={`/blog/${slug}`} passHref>
          <Button variant="link" className="p-0 h-auto text-blue-600 hover:text-blue-700">
            Read More <ArrowRight className="ml-1 w-4 h-4" />
          </Button>
        </Link>
      </CardContent>
    </Card>
  )
}
