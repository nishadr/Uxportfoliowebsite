import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { motion } from "motion/react";

export function About() {
  const skills = [
    "User Research",
    "User Interviews",
    "Usability Testing",
    "Persona Development",
    "Journey Mapping",
    "Information Architecture",
    "Wireframing",
    "Prototyping",
    "Interaction Design",
    "Visual Design",
    "Design Systems",
    "Accessibility (WCAG)",
    "A/B Testing",
    "Analytics",
    "Workshop Facilitation",
    "Stakeholder Management",
  ];

  const tools = [
    "Figma",
    "Adobe XD",
    "Sketch",
    "InVision",
    "Miro",
    "FigJam",
    "Axure",
    "Principle",
    "After Effects",
    "Google Analytics",
    "Hotjar",
    "UserTesting",
  ];

  const experience = [
    {
      title: "Senior UX Lead",
      company: "Tech Innovation Co.",
      period: "2022 - Present",
      description:
        "Leading a team of 6 designers on enterprise B2B products. Established design systems and research practices across the organization.",
    },
    {
      title: "UX Designer",
      company: "Digital Solutions Inc.",
      period: "2019 - 2022",
      description:
        "Designed mobile and web experiences for fintech and healthcare clients. Led end-to-end design process from research to delivery.",
    },
    {
      title: "Junior UX Designer",
      company: "Creative Agency",
      period: "2017 - 2019",
      description:
        "Worked on diverse projects across e-commerce, travel, and entertainment sectors. Focused on user research and usability testing.",
    },
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4">About Me</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate UX designer dedicated to creating meaningful and accessible
            digital experiences that make a positive impact.
          </p>
        </motion.div>

        {/* Bio Section */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h2 className="text-3xl font-bold mb-6">My Story</h2>
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  With over 8 years of experience in UX design, I've had the privilege of
                  working with startups, agencies, and Fortune 500 companies to create
                  digital products that users love.
                </p>
                <p>
                  My journey into UX began with a background in psychology, which gave me
                  a deep appreciation for understanding human behavior and motivation. This
                  foundation continues to inform my design decisions today.
                </p>
                <p>
                  I believe great design is invisible—it solves problems so elegantly that
                  users don't even notice it's there. My approach combines rigorous user
                  research with creative problem-solving to deliver solutions that are both
                  beautiful and functional.
                </p>
                <p>
                  When I'm not designing, you can find me mentoring aspiring designers,
                  speaking at design conferences, or exploring new cities for inspiration.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Card className="p-6">
                <h3 className="text-xl font-bold mb-4">Quick Facts</h3>
                <ul className="space-y-3 text-foreground/80">
                  <li>
                    <strong>Location:</strong> San Francisco, CA
                  </li>
                  <li>
                    <strong>Experience:</strong> 8+ Years
                  </li>
                  <li>
                    <strong>Education:</strong> M.A. in HCI
                  </li>
                  <li>
                    <strong>Certifications:</strong> CPUX-F, Nielsen Norman Group UX
                  </li>
                  <li>
                    <strong>Languages:</strong> English, Spanish
                  </li>
                </ul>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8">Experience</h2>
            <div className="space-y-6">
              {experience.map((job, index) => (
                <Card key={index} className="p-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold">{job.title}</h3>
                      <p className="text-blue-600">{job.company}</p>
                    </div>
                    <Badge variant="secondary">{job.period}</Badge>
                  </div>
                  <p className="text-foreground/80">{job.description}</p>
                </Card>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Skills */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8">Skills & Expertise</h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-base py-2 px-4">
                  {skill}
                </Badge>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Tools */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8">Tools & Software</h2>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool) => (
                <Badge key={tool} variant="outline" className="text-base py-2 px-4">
                  {tool}
                </Badge>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Awards */}
        <section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-8">Awards & Recognition</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  award: "Best Mobile App Design",
                  event: "Awwwards",
                  year: "2025",
                },
                {
                  award: "UX Design Excellence",
                  event: "IxDA Awards",
                  year: "2024",
                },
                {
                  award: "Innovation in Healthcare Design",
                  event: "Design Week",
                  year: "2024",
                },
                {
                  award: "Honorable Mention",
                  event: "Fast Company Innovation by Design",
                  year: "2023",
                },
              ].map((item, index) => (
                <Card key={index} className="p-6">
                  <h3 className="font-bold text-lg mb-1">{item.award}</h3>
                  <p className="text-muted-foreground">
                    {item.event} • {item.year}
                  </p>
                </Card>
              ))}
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
