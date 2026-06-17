import { Link } from "react-router";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { projects } from "../data/projects";

export function Projects() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4">My Projects</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A curated collection of UX design projects across various industries,
            each solving unique user challenges through thoughtful design.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={`/projects/${project.id}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow group h-full flex flex-col">
                  <div className="aspect-video overflow-hidden bg-gray-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">{project.category}</Badge>
                      <span className="text-sm text-muted-foreground">{project.year}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 flex-1 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center text-blue-600 font-medium group-hover:gap-2 transition-all">
                      View Case Study <ArrowRight size={16} className="ml-1" />
                    </div>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
