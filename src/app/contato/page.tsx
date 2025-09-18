"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Navigation } from "@/components/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Github, 
  Linkedin, 
  MapPin, 
  Send,
  CheckCircle,
  AlertCircle,
  Instagram
} from "lucide-react";
import profileData from "../../../data/profile.json";

const socialLinks = [
  {
    name: "Email",
    icon: Mail,
    href: `mailto:${profileData.email}`,
    label: profileData.email,
    color: "from-red-500 to-pink-500"
  },
  {
    name: "GitHub",
    icon: Github,
    href: profileData.github,
    label: "@WalissonVinicius",
    color: "from-gray-700 to-gray-900"
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: profileData.linkedin,
    label: "Walisson Vinicius",
    color: "from-blue-600 to-blue-800"
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: profileData.instagram,
    label: "@wv.sccp",
    color: "from-pink-500 to-purple-500"
  }
];

export default function ContatoPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

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
                Entre em <span className="gradient-text">Contato</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Vamos conversar sobre seu próximo projeto ou oportunidade de colaboração
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div variants={itemVariants}>
                <Card className="glass-morphism border-0 shadow-2xl">
                  <CardHeader>
                    <CardTitle className="text-2xl">Envie uma Mensagem</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-2">
                            Nome
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 glass-morphism rounded-lg border-0 focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                            placeholder="Seu nome"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            className="w-full px-4 py-3 glass-morphism rounded-lg border-0 focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                            placeholder="seu@email.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-2">
                          Assunto
                        </label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 glass-morphism rounded-lg border-0 focus:ring-2 focus:ring-purple-500 transition-all duration-300"
                          placeholder="Assunto da mensagem"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">
                          Mensagem
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={6}
                          className="w-full px-4 py-3 glass-morphism rounded-lg border-0 focus:ring-2 focus:ring-purple-500 transition-all duration-300 resize-none"
                          placeholder="Sua mensagem..."
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 disabled:opacity-50"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center">
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                            Enviando...
                          </div>
                        ) : (
                          <div className="flex items-center">
                            <Send className="h-4 w-4 mr-2" />
                            Enviar Mensagem
                          </div>
                        )}
                      </Button>

                      {/* Status Messages */}
                      {submitStatus === "success" && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-center space-x-2 text-green-600 bg-green-100 dark:bg-green-900/20 p-3 rounded-lg"
                        >
                          <CheckCircle className="h-5 w-5" />
                          <span>Mensagem enviada com sucesso!</span>
                        </motion.div>
                      )}

                      {submitStatus === "error" && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex items-center space-x-2 text-red-600 bg-red-100 dark:bg-red-900/20 p-3 rounded-lg"
                        >
                          <AlertCircle className="h-5 w-5" />
                          <span>Erro ao enviar mensagem. Tente novamente.</span>
                        </motion.div>
                      )}
                    </form>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Contact Info & Social Links */}
              <motion.div variants={itemVariants} className="space-y-8">
                {/* Location */}
                <Card className="glass-morphism border-0 shadow-xl">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Localização</h3>
                        <p className="text-muted-foreground">{profileData.location}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Social Links */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Conecte-se Comigo</h3>
                  {socialLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Card className="glass-morphism border-0 shadow-lg hover:neon-glow transition-all duration-300 cursor-pointer">
                          <CardContent className="p-4">
                            <a
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center space-x-4"
                            >
                              <div className={`p-3 bg-gradient-to-r ${link.color} rounded-full`}>
                                <Icon className="h-5 w-5 text-white" />
                              </div>
                              <div>
                                <h4 className="font-semibold">{link.name}</h4>
                                <p className="text-sm text-muted-foreground">
                                  {link.label}
                                </p>
                              </div>
                            </a>
                          </CardContent>
                        </Card>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Quick Response */}
                <Card className="glass-morphism border-0 shadow-xl">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2">Resposta Rápida</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Normalmente respondo em até 24 horas. Para projetos urgentes, 
                      entre em contato diretamente pelo WhatsApp ou email.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}