"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Database,
  Globe,
  Smartphone,
  Server,
  GitBranch,
  Palette,
  Zap
} from "lucide-react";
import { TechIcon } from "@/components/tech-icons";

const techStacks = [
  {
    category: "Frontend",
    icon: <Globe className="w-6 h-6" />,
    technologies: [
      { name: "React" },
      { name: "Next.js" },
      { name: "Vue.js" },
      { name: "Nuxt.js" },
      { name: "TypeScript" },
      { name: "React Native" },
      { name: "JavaScript" },
      { name: "Tailwind CSS" }
    ]
  },
  {
    category: "Backend",
    icon: <Server className="w-6 h-6" />,
    technologies: [
      { name: "TypeScript" },
      { name: "Ruby" },
      { name: "Python" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "REST APIs" },
      { name: "GraphQL" }
    ]
  },
  {
    category: "Database",
    icon: <Database className="w-6 h-6" />,
    technologies: [
      { name: "PostgreSQL" },
      { name: "MySQL" },
      { name: "MongoDB" },
      { name: "Redis" }
    ]
  },
  {
    category: "DevOps & Cloud",
    icon: <GitBranch className="w-6 h-6" />,
    technologies: [
      { name: "Docker" },
      { name: "Kubernetes" },
      { name: "GitHub Actions" },
      { name: "GitLab CI" }
    ]
  },
  {
    category: "AI & Innovation",
    icon: <Zap className="w-6 h-6" />,
    technologies: [
      { name: "OpenAI" },
      { name: "LLM" },
      { name: "Prompt Engineering" }
    ]
  }
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 bg-background/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            Sobre Mim
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Desenvolvedor Full Stack apaixonado por criar soluções inovadoras e experiências digitais excepcionais.
            Com expertise em tecnologias modernas, transformo ideias em realidade através do código.
          </p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <Card className="glass-morphism border-border/50">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Code2 className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold">Formação Acadêmica</h3>
                </div>
                <p className="text-muted-foreground">
                  <strong>Tecnólogo em Análise e Desenvolvimento de Sistemas (ADS)</strong><br/>
                  FACULDADE FASIPE • Jan 2022 - Jun 2025
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techStacks.map((stack, index) => (
            <motion.div
              key={stack.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass-morphism border-border/50 hover:border-primary/50 transition-all duration-300 h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      {stack.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{stack.category}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {stack.technologies.map((tech) => (
                      <motion.div
                        key={tech.name}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Badge
                          variant="secondary"
                          className="flex items-center gap-2 px-3 py-1 bg-secondary/50 hover:bg-secondary/80 transition-colors cursor-pointer"
                        >
                          <TechIcon name={tech.name} size={16} />
                          <span>{tech.name}</span>
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <Card className="glass-morphism border-border/50 max-w-4xl mx-auto">
            <CardContent className="p-8">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Code2 className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-bold">Minha Filosofia</h3>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Acredito que a tecnologia deve ser uma ponte entre problemas complexos e soluções elegantes.
                Cada linha de código é uma oportunidade de criar algo que impacte positivamente a vida das pessoas.
                Estou sempre em busca de aprender novas tecnologias e aprimorar minhas habilidades para entregar
                produtos de alta qualidade.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}