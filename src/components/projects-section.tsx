"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Filter } from "lucide-react";
import Image from "next/image";
import profileData from "../../data/profile.json";

const allProjects = profileData.projects;

const categories = ["Todos", "Web", "Mobile", "React", "Next.js", "TypeScript"];

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = selectedCategory === "Todos" 
    ? allProjects 
    : allProjects.filter(project => {
        if (selectedCategory === "Web") {
          return project.tech.some(tech => 
            ["Next.js", "React", "HTML", "CSS", "JavaScript", "TypeScript"].includes(tech)
          );
        }
        if (selectedCategory === "Mobile") {
          return project.tech.some(tech => 
            ["React Native", "Capacitor"].includes(tech)
          );
        }
        return project.tech.includes(selectedCategory);
      });

  return (
    <section id="projects" className="py-20 px-4 bg-background/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            Meus Projetos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Uma seleção dos meus trabalhos mais recentes e projetos que demonstram minhas habilidades técnicas.
          </p>
        </motion.div>

        {/* Filtros */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <div className="flex items-center gap-2 text-muted-foreground mb-2">
            <Filter className="w-4 h-4" />
            <span className="text-sm font-medium">Filtrar por:</span>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="transition-all duration-300"
              >
                {category}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
              style={{ zIndex: hoveredProject === index ? 10 : 1 }}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <Card className="glass-morphism border-border/50 hover:border-primary/50 transition-all duration-300 h-full group overflow-hidden">
                <div className="relative overflow-hidden">
                  <div className="aspect-video relative bg-gradient-to-br from-primary/20 to-secondary/20">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full">
                        <div className="text-6xl opacity-20">🚀</div>
                      </div>
                    )}
                  </div>
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Button 
                      size="sm" 
                      variant="secondary" 
                      className="gap-2"
                      onClick={() => project.liveUrl !== '#' && window.open(project.liveUrl, '_blank')}
                      disabled={project.liveUrl === '#'}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="gap-2"
                      onClick={() => project.githubUrl !== '#' && window.open(project.githubUrl, '_blank')}
                      disabled={project.githubUrl === '#'}
                    >
                      <Github className="w-4 h-4" />
                      Código
                    </Button>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {project.name}
                    </CardTitle>
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.tech.length > 4 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.tech.length - 4}
                      </Badge>
                    )}
                  </div>

                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Status: {project.status}</span>
                    <span>{project.year}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Mensagem quando não há projetos */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">Nenhum projeto encontrado</h3>
            <p className="text-muted-foreground">
              Tente selecionar uma categoria diferente.
            </p>
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Card className="glass-morphism border-border/50 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Interessado em colaborar?</h3>
              <p className="text-muted-foreground mb-6">
                Estou sempre aberto a novos desafios e oportunidades de criar algo incrível juntos.
              </p>
              <Button size="lg" className="gap-2">
                <ExternalLink className="w-4 h-4" />
                Vamos conversar
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}