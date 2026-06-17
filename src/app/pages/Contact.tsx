import { Card } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { Mail, Linkedin, Github, Twitter } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the form data to a backend
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2"
          >
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    rows={6}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full md:w-auto">
                  Send Message
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Direct Contact */}
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Direct Contact</h3>
              <div className="space-y-4">
                <a
                  href="mailto:hello@portfolio.com"
                  className="flex items-center gap-3 text-foreground/80 hover:text-blue-600 transition-colors"
                >
                  <Mail size={20} />
                  <span>hello@portfolio.com</span>
                </a>
              </div>
            </Card>

            {/* Social Links */}
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Follow Me</h3>
              <div className="space-y-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground/80 hover:text-blue-600 transition-colors"
                >
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground/80 hover:text-blue-600 transition-colors"
                >
                  <Github size={20} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-foreground/80 hover:text-blue-600 transition-colors"
                >
                  <Twitter size={20} />
                  <span>Twitter</span>
                </a>
              </div>
            </Card>

            {/* Availability */}
            <Card className="p-6 bg-gradient-to-br from-blue-50 to-purple-50">
              <h3 className="text-xl font-bold mb-2">Availability</h3>
              <p className="text-foreground/80">
                I'm currently available for freelance projects and full-time
                opportunities starting in July 2026.
              </p>
            </Card>
          </motion.div>
        </div>

        {/* Location & Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Let's Create Something Amazing</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Whether you have a project in mind or just want to chat about design,
              I'd love to hear from you. I typically respond within 24 hours.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div>📍 Based in San Francisco, CA</div>
              <div>🌍 Open to remote work</div>
              <div>⏰ PST Timezone (UTC-8)</div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
