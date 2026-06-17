import { useParams, Link, useNavigate } from "react-router";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import { projects } from "../data/projects";

export function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="py-20 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <Link to="/projects">
          <Button>Back to Projects</Button>
        </Link>
      </div>
    );
  }

  const currentIndex = projects.findIndex((p) => p.id === id);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Button
              variant="ghost"
              className="mb-6 gap-2"
              onClick={() => navigate("/projects")}
            >
              <ArrowLeft size={20} /> Back to Projects
            </Button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4" variant="secondary">
                  {project.category}
                </Badge>
                <h1 className="text-5xl font-bold mb-4">{project.title}</h1>
                <p className="text-xl text-muted-foreground mb-6">
                  {project.description}
                </p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div>
                    <p className="text-sm text-muted-foreground">Role</p>
                    <p className="font-semibold">{project.role}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Duration</p>
                    <p className="font-semibold">{project.duration}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Year</p>
                    <p className="font-semibold">{project.year}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              {project.challenge}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">The Solution</h2>
            <p className="text-lg text-foreground/80 leading-relaxed">
              {project.solution}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8">Design Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.processes.map((process, index) => (
                <Card key={index} className="p-4 flex items-center gap-3">
                  <CheckCircle2 className="text-green-600 flex-shrink-0" size={20} />
                  <span>{process}</span>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8">Impact & Results</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.impact.map((item, index) => (
                <Card key={index} className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
                  <CheckCircle2 className="mb-3" size={24} />
                  <p className="text-lg">{item}</p>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Next Project */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Next Project</h2>
          <Link to={`/projects/${nextProject.id}`}>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="aspect-video md:aspect-auto overflow-hidden bg-gray-100">
                  <img
                    src={nextProject.image}
                    alt={nextProject.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <Badge variant="secondary" className="mb-2 w-fit">
                    {nextProject.category}
                  </Badge>
                  <h3 className="text-3xl font-bold mb-4">{nextProject.title}</h3>
                  <p className="text-muted-foreground mb-6">{nextProject.description}</p>
                  <div className="flex items-center text-blue-600 font-medium group-hover:gap-2 transition-all">
                    View Case Study <ArrowRight size={20} className="ml-1" />
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        </div>
      </section>
    </div>
  );
}
