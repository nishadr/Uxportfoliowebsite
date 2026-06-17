import { Link } from "react-router";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { ArrowRight, Briefcase, Users, Award } from "lucide-react";
import { motion } from "motion/react";
import { projects } from "../data/projects";
import profilePhoto from "../../imports/2.png";

export function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="mb-4" variant="secondary">
                UX Lead • Design Strategist
              </Badge>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
                Creating Delightful
                <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  User Experiences
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                I'm a UX lead with 8+ years of experience designing human-centered digital products
                that solve real problems and drive business impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/projects">
                  <Button size="lg" className="gap-2">
                    View My Work <ArrowRight size={20} />
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button size="lg" variant="outline">
                    Get In Touch
                  </Button>
                </Link>
              </div>
            </motion.div>

            {/* Profile photo */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex justify-center lg:justify-end"
            >
              {/* Light: bordered card. Dark: blended into background */}
              <div className="relative w-full max-w-sm lg:max-w-md dark:bg-transparent rounded-2xl overflow-hidden border-4 border-purple-500 dark:border-transparent">
                <img
                  src={profilePhoto}
                  alt="Profile photo"
                  className="w-full object-cover"
                />
                <div className="absolute inset-0 pointer-events-none dark:block hidden" style={{ background: "linear-gradient(to bottom, var(--background) 0%, transparent 18%, transparent 70%, var(--background) 100%)" }} />
                <div className="absolute inset-0 pointer-events-none dark:block hidden" style={{ background: "linear-gradient(to right, transparent 60%, var(--background) 100%)" }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="p-6 text-center">
                <Briefcase className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="text-4xl font-bold mb-2">50+</h3>
                <p className="text-muted-foreground">Projects Delivered</p>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="p-6 text-center">
                <Users className="w-12 h-12 mx-auto mb-4 text-purple-600" />
                <h3 className="text-4xl font-bold mb-2">10M+</h3>
                <p className="text-muted-foreground">Users Impacted</p>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card className="p-6 text-center">
                <Award className="w-12 h-12 mx-auto mb-4 text-pink-600" />
                <h3 className="text-4xl font-bold mb-2">15+</h3>
                <p className="text-muted-foreground">Industry Awards</p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-xl text-muted-foreground">
              A selection of recent work showcasing my design approach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`/projects/${project.id}`}>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
                    <div className="aspect-video overflow-hidden bg-gray-100">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <Badge variant="secondary" className="mb-2">
                        {project.category}
                      </Badge>
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-muted-foreground mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex items-center text-blue-600 font-medium group-hover:gap-2 transition-all">
                        View Case Study <ArrowRight size={16} className="ml-1" />
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/projects">
              <Button size="lg" variant="outline" className="gap-2">
                View All Projects <ArrowRight size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">My Design Process</h2>
            <p className="text-xl text-muted-foreground">
              A structured approach to creating user-centered solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Research",
                description: "Deep dive into user needs, behaviors, and pain points through interviews and analytics.",
              },
              {
                step: "02",
                title: "Define",
                description: "Synthesize insights and define clear problem statements and success metrics.",
              },
              {
                step: "03",
                title: "Design",
                description: "Iterate on solutions through sketches, wireframes, and high-fidelity prototypes.",
              },
              {
                step: "04",
                title: "Validate",
                description: "Test with real users, gather feedback, and refine based on data.",
              },
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 h-full">
                  <div className="text-5xl font-bold text-blue-500/40 dark:text-blue-400/60 mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                  <p className="text-muted-foreground">{phase.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-xl text-muted-foreground mb-8">
              I'm currently available for freelance projects and full-time opportunities.
              Let's create something amazing together.
            </p>
            <Link to="/contact">
              <Button size="lg" className="gap-2">
                Start a Conversation <ArrowRight size={20} />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
