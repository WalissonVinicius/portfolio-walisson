"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  ExternalLink, 
  Github, 
  Filter,
  Star,
  Code,
  Smartphone,
  Globe
} from "lucide-react";
import profileData from "../../../data/profile.json";

const allTechs = Array.from(
  new Set(profileData.projects.flatMap(project => project.tech))
);

export default function ProjetosPage() {
  const [selectedTech, setSelectedTech] = useState<string | null>(null);
  const [filteredProjects, setFilteredProjects] = useState(profileData.projects);
  
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  useEffect(() => {
    if (selectedTech) {
      setFilteredProjects(
        profileData.projects.filter(project => 
          project.tech.includes(selectedTech)
        )
      );
    } else {
      setFilteredProjects(profileData.projects);
    }
  }, [selectedTech]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const getProjectIcon = (tech: string[]) => {
    if (tech.includes("React Native") || tech.includes("Capacitor")) {
      return Smartphone;
    }
    if (tech.includes("Next.js") || tech.includes("React")) {
      return Globe;
    }
    return Code;
  };

  return (
    <main className="relative">
      <Navigation />
      
      <section className="pt-24 pb-16 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="space-y-16"
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Meus <span className="gradient-text">Projetos</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Uma seleção dos meus trabalhos mais recentes e projetos em destaque
              </p>
            </motion.div>

            {/* Filter Section */}
            <motion.div variants={itemVariants}>
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                <Button
                  variant={selectedTech === null ? "default" : "outline"}
                  onClick={() => setSelectedTech(null)}
                  className="glass-morphism"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  Todos
                </Button>
                {allTechs.map((tech) => (
                  <Button
                    key={tech}
                    variant={selectedTech === tech ? "default" : "outline"}
                    onClick={() => setSelectedTech(tech)}
                    className="glass-morphism"
                  >
                    {tech}
                  </Button>
                ))}
              </div>
            </motion.div>

            {/* Projects Grid */}
            <motion.div
              variants={containerVariants}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => {
                const Icon = getProjectIcon(project.tech);
                return (
                  <motion.div
                    key={project.id}
                    variants={cardVariants}
                    whileHover={{ 
                      y: -10,
                      transition: { duration: 0.3 }
                    }}
                    className="group"
                  >
                    <Card className="glass-morphism border-0 shadow-xl h-full hover:neon-glow transition-all duration-500 overflow-hidden">
                      <CardHeader className="relative">
                        <div className="flex items-start justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="p-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg">
                              <Icon className="h-6 w-6 text-white" />
                            </div>
                            {project.featured && (
                              <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                                <Star className="h-3 w-3 mr-1" />
                                Destaque
                              </Badge>
                            )}
                          </div>
                        </div>
                        <CardTitle className="text-xl group-hover:gradient-text transition-all duration-300">
                          {project.name}
                        </CardTitle>
                      </CardHeader>

                      <CardContent className="space-y-4">
                        <p className="text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>

                        {/* Tech Stack */}
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech) => (
                            <Badge
                              key={tech}
                              variant="outline"
                              className="text-xs hover:bg-accent/50 transition-colors"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex space-x-3 pt-4">
                          {project.liveUrl !== "#" && (
                            <Button
                              size="sm"
                              className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                              asChild
                            >
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ExternalLink className="h-4 w-4 mr-2" />
                                Ver Live
                              </a>
                            </Button>
                          )}

                          {project.githubUrl !== "#" && (
                            <Button
                              size="sm"
                              variant="outline"
                              className="flex-1 glass-morphism"
                              asChild
                            >
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Github className="h-4 w-4 mr-2" />
                                Código
                              </a>
                            </Button>
                          )}
                        </div>
                      </CardContent>

                      {/* Hover Effect Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Empty State */}
            {filteredProjects.length === 0 && (
              <motion.div
                variants={itemVariants}
                className="text-center py-16"
              >
                <Code className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="text-xl font-semibold mb-2">
                  Nenhum projeto encontrado
                </h3>
                <p className="text-muted-foreground">
                  Tente selecionar uma tecnologia diferente ou remover os filtros.
                </p>
              </motion.div>
            )}

            {/* CTA Section */}
            <motion.div variants={itemVariants} className="text-center">
              <Card className="glass-morphism border-0 shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-4">
                    Gostou do que viu?
                  </h2>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Estou sempre trabalhando em novos projetos e adoraria 
                    colaborar em algo incrível com você.
                  </p>
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-full font-semibold"
                    asChild
                  >
                    <a href="/contato">
                      Vamos Conversar
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}