"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  GraduationCap, 
  Briefcase, 
  MapPin, 
  Code, 
  Database, 
  Smartphone,
  Globe,
  Server,
  Cloud,
  Bot,
  Zap
} from "lucide-react";
import profileData from "../../../data/profile.json";
import { TechIcon } from "@/components/tech-icons";

const skillCategories = [
  {
    title: "Frontend",
    icon: Globe,
    skills: profileData.skills.frontend,
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "Backend",
    icon: Server,
    skills: profileData.skills.backend,
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "Database",
    icon: Database,
    skills: profileData.skills.database,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "DevOps",
    icon: Cloud,
    skills: profileData.skills.devops,
    color: "from-orange-500 to-red-500"
  },
  {
    title: "AI & LLMs",
    icon: Bot,
    skills: profileData.skills.ai,
    color: "from-indigo-500 to-purple-500"
  }
];

export default function SobrePage() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
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
                Sobre <span className="gradient-text">Mim</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Conheça mais sobre minha jornada, experiências e paixão por tecnologia
              </p>
            </motion.div>

            {/* Bio Section */}
            <motion.div variants={itemVariants}>
              <Card className="glass-morphism border-0 shadow-2xl">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h2 className="text-3xl font-bold mb-4">
                        {profileData.name}
                      </h2>
                      <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                        {profileData.bio}
                      </p>
                      
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <MapPin className="h-5 w-5 text-muted-foreground" />
                          <span>{profileData.location}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <GraduationCap className="h-5 w-5 text-muted-foreground" />
                          <span>{profileData.education}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Briefcase className="h-5 w-5 text-muted-foreground" />
                          <span>{profileData.experience}</span>
                        </div>
                      </div>
                    </div>

                    <div className="relative">
                      <div className="w-80 h-80 mx-auto relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" />
                        <div className="relative w-full h-full glass-morphism rounded-full flex items-center justify-center">
                          <Code className="h-32 w-32 text-muted-foreground" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <Separator className="my-16" />

            {/* Skills Section */}
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-center mb-12">
                Minhas <span className="gradient-text">Habilidades</span>
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {skillCategories.map((category, categoryIndex) => {
                  const Icon = category.icon;
                  return (
                    <motion.div
                      key={category.title}
                      variants={itemVariants}
                      className="space-y-6"
                    >
                      <Card className="glass-morphism border-0 shadow-xl">
                        <CardContent className="p-6">
                          <div className="flex items-center space-x-3 mb-6">
                            <div className={`p-3 rounded-full bg-gradient-to-r ${category.color}`}>
                              <Icon className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="text-2xl font-bold">{category.title}</h3>
                          </div>

                          <div className="grid gap-4">
                            {category.skills.map((skill, skillIndex) => (
                              <motion.div
                                key={skill.name}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ 
                                  delay: 0.8 + categoryIndex * 0.2 + skillIndex * 0.1 
                                }}
                                className="flex items-center justify-between p-4 glass-morphism rounded-lg hover:neon-glow transition-all duration-300"
                              >
                                <div className="flex items-center gap-3">
                                  <TechIcon name={skill.name} size={24} />
                                  <div>
                                    <h4 className="font-semibold">{skill.name}</h4>
                                    <p className="text-sm text-muted-foreground">
                                      {skill.description}
                                    </p>
                                  </div>
                                </div>
                                <Badge variant="outline" className="ml-4 flex items-center gap-2">
                                  <TechIcon name={skill.name} size={16} />
                                  {skill.name}
                                </Badge>
                              </motion.div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Experience Timeline */}
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl font-bold text-center mb-12">
                Minha <span className="gradient-text">Jornada</span>
              </h2>

              <div className="max-w-4xl mx-auto">
                <Card className="glass-morphism border-0 shadow-xl">
                  <CardContent className="p-8">
                    <div className="space-y-8">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                            <Code className="h-6 w-6 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2">
                            Desenvolvedor Full Stack
                          </h3>
                          <p className="text-muted-foreground mb-4">
                            Atualmente • {profileData.location}
                          </p>
                          <p className="leading-relaxed">
                            Focado em criar soluções web modernas e eficientes, 
                            utilizando as melhores práticas de desenvolvimento e 
                            tecnologias de ponta como React, Next.js, TypeScript e Node.js.
                          </p>
                        </div>
                      </div>

                      <Separator />

                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                            <GraduationCap className="h-6 w-6 text-white" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2">
                            Análise e Desenvolvimento de Sistemas
                          </h3>
                          <p className="text-muted-foreground mb-4">
                            Em andamento • Formação Acadêmica
                          </p>
                          <p className="leading-relaxed">
                            Aprofundando conhecimentos em arquitetura de software, 
                            metodologias ágeis, banco de dados e desenvolvimento 
                            de sistemas robustos e escaláveis.
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}