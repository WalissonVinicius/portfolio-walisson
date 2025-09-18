"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  ArrowDown,
  Download,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Code2,
  Sparkles,
  MessageCircle
} from "lucide-react";
import Image from "next/image";
import profileData from "../../data/profile.json";

const skills = [
  "React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Docker"
];

export function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Currículo-walisson.pdf';
    link.download = 'Currículo-Walisson-Vinicius.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openGithub = () => {
    window.open(profileData.github, '_blank');
  };

  const openLinkedin = () => {
    window.open(profileData.linkedin, '_blank');
  };

  const openEmail = () => {
    window.location.href = `mailto:${profileData.email}`;
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Conteúdo Principal */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-2 justify-center lg:justify-start mb-6"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium">Disponível para projetos</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Olá, eu sou{" "}
            <span className="gradient-text">Walisson</span>{" "}
            <span className="gradient-text">Vinicius</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed"
          >
            Desenvolvedor Full Stack especializado em{" "}
            <span className="text-foreground font-semibold">React</span>,{" "}
            <span className="text-foreground font-semibold">Next.js</span> e{" "}
            <span className="text-foreground font-semibold">TypeScript</span>
          </motion.p>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-2 justify-center lg:justify-start mb-8"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Badge variant="secondary" className="px-3 py-1 text-sm">
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
          >
            <Button size="lg" className="gap-2 group">
              <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Entre em Contato
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="gap-2 group"
              onClick={downloadCV}
            >
              <Download className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Download CV
            </Button>
          </motion.div>

          {/* Links Sociais */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex gap-4 justify-center lg:justify-start"
          >
            <Button
              size="icon"
              variant="ghost"
              className="hover:scale-110 transition-transform"
              onClick={openGithub}
            >
              <Github className="w-5 h-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="hover:scale-110 transition-transform"
              onClick={openLinkedin}
            >
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button
              size="icon"
              variant="ghost"
              className="hover:scale-110 transition-transform"
              onClick={openEmail}
            >
              <Mail className="w-5 h-5" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Foto/Avatar */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative">
            {/* Efeitos de fundo */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-2xl scale-110" />
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full animate-bounce delay-1000" />
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-secondary rounded-full animate-bounce delay-2000" />

            {/* Container da foto */}
            <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 glass-morphism">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
              <Image
                src="/walisson.jpg"
                alt="Walisson Vinicius"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Elementos decorativos */}
            <div className="absolute -top-6 -right-6 w-4 h-4 bg-accent rounded-full animate-bounce delay-500" />
            <div className="absolute top-8 -right-8 w-3 h-3 bg-primary/60 rounded-full animate-bounce delay-1500" />
          </div>
        </motion.div>
      </div>

      {/* Indicador de Rolagem */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollToAbout}
          className="animate-bounce hover:scale-110 transition-transform"
        >
          <ArrowDown className="w-5 h-5" />
        </Button>
      </motion.div>
    </section>
  );
}