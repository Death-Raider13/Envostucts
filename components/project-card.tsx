import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, MapPin } from "lucide-react"
import Link from "next/link"

interface ProjectCardProps {
  title: string
  description: string
  value: string
  category: string
  status: string
  location?: string
  year?: string
  slug?: string
  image?: string
}

export function ProjectCard({
  title,
  description,
  value,
  category,
  status,
  location,
  year,
  slug,
  image,
}: ProjectCardProps) {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Hospitality":
        return "bg-purple-100 text-purple-800 border-purple-200"
      case "Educational":
        return "bg-blue-100 text-blue-800 border-blue-200"
      case "Infrastructure":
        return "bg-orange-100 text-orange-800 border-orange-200"
      case "Residential":
        return "bg-green-100 text-green-800 border-green-200"
      default:
        return "bg-gray-100 text-gray-800 border-gray-200"
    }
  }

  return (
    <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
      {image && (
        <div className="relative h-48 overflow-hidden rounded-t-lg">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <CardHeader>
        <div className="flex items-center justify-between mb-2">
          <Badge className={getCategoryColor(category)}>{category}</Badge>
          <Badge variant={status === "Completed" ? "default" : "secondary"}>{status}</Badge>
        </div>
        <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">{title}</CardTitle>
        <p className="text-gray-600 text-sm">{description}</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-blue-600">{value}</span>
          </div>

          {(location || year) && (
            <div className="flex items-center gap-4 text-sm text-gray-500">
              {location && (
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {location}
                </div>
              )}
              {year && (
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {year}
                </div>
              )}
            </div>
          )}

          {slug && (
            <Link href={`/projects/${slug}`}>
              <Button
                variant="outline"
                className="w-full group-hover:bg-blue-600 group-hover:text-white transition-colors bg-transparent"
              >
                View Details
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
