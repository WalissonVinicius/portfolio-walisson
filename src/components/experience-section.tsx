"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building, Award } from "lucide-react";
import profileData from "../../data/profile.json";

const experiences = [
  {
    title: "Desenvolvedor de sistemas",
    company: "Simplex Soluções Tecnológicas",
    location: "Sinop, Mato Grosso, Brasil",
    period: "Jun 2025 - Presente",
    type: "CLT",
    description: "Desenvolvimento de sistemas corporativos e soluções tecnológicas para empresas, focando em escalabilidade e eficiência.",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker"],
    achievements: [
      "Desenvolvimento de sistemas escaláveis",
      "Implementação de soluções corporativas",
      "Otimização de processos tecnológicos",
      "Integração de sistemas empresariais"
    ]
  },
  {
    title: "Analista de TI",
    company: "Vialog Transportes",
    location: "Sinop, Mato Grosso, Brasil",
    period: "Fev 2025 - Mai 2025",
    type: "CLT",
    description: "Análise e desenvolvimento de soluções de TI para o setor de transportes, com foco em otimização de processos e sistemas.",
    technologies: ["JavaScript", "SQL", "Python", "Sistemas ERP"],
    achievements: [
      "Análise de sistemas de transporte",
      "Otimização de processos logísticos",
      "Implementação de soluções de TI",
      "Suporte técnico especializado"
    ]
  },
  {
    title: "Desenvolvedor Full Stack Júnior",
    company: "Noah Entregas",
    location: "Sinop, Mato Grosso, Brasil",
    period: "Set 2024 - Jan 2025",
    type: "PJ",
    description: "Desenvolvedor full stack júnior entusiasmado em criar aplicações web e móveis inovadoras. Desenvolvimento de interfaces interativas e APIs escaláveis com foco na experiência do usuário.",
    technologies: ["React Native", "React", "NestJS", "PostgreSQL", "TypeScript"],
    achievements: [
      "Desenvolvimento de aplicações web e móveis",
      "Criação de APIs escaláveis com NestJS",
      "Interfaces responsivas com React Native",
      "Integração com bancos PostgreSQL"
    ]
  },
  {
    title: "Técnico de TI",
    company: "Kadri #OnLife",
    location: "Sinop, Mato Grosso, Brasil",
    period: "Nov 2023 - Ago 2024",
    type: "CLT",
    description: "Suporte técnico e manutenção de sistemas, com foco em resolver problemas tecnológicos e otimizar infraestrutura de TI.",
    technologies: ["Suporte Técnico", "Redes", "Hardware", "Software"],
    achievements: [
      "Suporte técnico especializado",
      "Manutenção de infraestrutura de TI",
      "Resolução de problemas técnicos",
      "Otimização de sistemas corporativos"
    ]
  }
];

const skills = [
  { name: "React/Next.js", level: 95 },
  { name: "TypeScript", level: 90 },
  { name: "Node.js/Express", level: 85 },
  { name: "PostgreSQL/MongoDB", level: 80 },
  { name: "React Native", level: 75 },
  { name: "Python/Ruby", level: 70 },
  { name: "Docker/Kubernetes", level: 65 },
  { name: "AI/LLM Integration", level: 60 }
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            Experiência Profissional
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Minha jornada no desenvolvimento de software, projetos realizados e habilidades adquiridas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Timeline de Experiências */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass-morphism border-border/50 hover:border-primary/50 transition-all duration-300">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                          <CardTitle className="text-xl mb-2">{exp.title}</CardTitle>
                          <div className="flex items-center gap-4 text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Building className="w-4 h-4" />
                              <span>{exp.company}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <div className="flex items-center gap-1 text-muted-foreground">
                            <Calendar className="w-4 h-4" />
                            <span>{exp.period}</span>
                          </div>
                          <Badge variant={exp.type === "Freelance" ? "default" : "secondary"}>
                            {exp.type}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{exp.description}</p>

                      <div>
                        <h4 className="font-semibold mb-2">Tecnologias:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="glass-morphism border-border/50 sticky top-24">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Habilidades
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {skills.map((skill, index) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-xs text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-secondary/30 rounded-full h-2">
                          <motion.div
                            className="bg-gradient-to-r from-primary to-primary/80 h-2 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            viewport={{ once: true }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}