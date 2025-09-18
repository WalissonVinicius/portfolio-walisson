"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Instagram,
  MessageCircle
} from "lucide-react";
import profileData from "../../data/profile.json";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Criar link mailto com os dados do formulário
    const subject = encodeURIComponent(formData.subject || 'Contato via Portfólio');
    const body = encodeURIComponent(
      `Nome: ${formData.name}\n\nEmail: ${formData.email}\n\nMensagem:\n${formData.message}`
    );
    
    const mailtoLink = `mailto:walissonvinicius10654@gmail.com?subject=${subject}&body=${body}`;
    
    // Abrir cliente de email
    window.location.href = mailtoLink;
    
    // Limpar formulário após envio
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">
            Vamos Conversar
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tem um projeto em mente? Quer colaborar ou apenas bater um papo sobre tecnologia?
            Estou sempre aberto a novas oportunidades e conexões.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulário de Contato */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="glass-morphism border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Envie uma Mensagem
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Nome
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Seu nome"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Assunto
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Sobre o que você gostaria de falar?"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Mensagem
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Conte-me mais sobre seu projeto ou ideia..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full gap-2">
                    <Send className="w-4 h-4" />
                    Enviar Mensagem
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Informações de Contato */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Informações Diretas */}
            <Card className="glass-morphism border-border/50">
              <CardHeader>
                <CardTitle>Informações de Contato</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-medium">{profileData.email}</p>
                    <p className="text-sm text-muted-foreground">Email principal</p>
                  </div>
                </div>

                <div
                  className="flex items-center gap-3 cursor-pointer hover:bg-accent/50 rounded-lg transition-colors"
                  onClick={() => window.open('https://wa.me/5566996822686', '_blank')}
                >
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-medium">+55 (66) 9996822686</p>
                    <p className="text-sm text-muted-foreground">Clique para abrir WhatsApp</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="font-medium">{profileData.location}</p>
                    <p className="text-sm text-muted-foreground">Trabalho remoto</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Redes Sociais */}
            <Card className="glass-morphism border-border/50">
              <CardHeader>
                <CardTitle>Redes Sociais</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-3">
                  <Button
                    variant="outline"
                    className="justify-start gap-3 h-12"
                    onClick={() => window.open(profileData.github, '_blank')}
                  >
                    <Github className="w-5 h-5" />
                    <div className="text-left">
                      <p className="font-medium">GitHub</p>
                      <p className="text-xs text-muted-foreground">Veja meus projetos</p>
                    </div>
                  </Button>

                  <Button
                    variant="outline"
                    className="justify-start gap-3 h-12"
                    onClick={() => window.open(profileData.linkedin, '_blank')}
                  >
                    <Linkedin className="w-5 h-5" />
                    <div className="text-left">
                      <p className="font-medium">LinkedIn</p>
                      <p className="text-xs text-muted-foreground">Conecte-se comigo</p>
                    </div>
                  </Button>

                  <Button
                    variant="outline"
                    className="justify-start gap-3 h-12"
                    onClick={() => window.open(profileData.instagram, '_blank')}
                  >
                    <Instagram className="w-5 h-5" />
                    <div className="text-left">
                      <p className="font-medium">Instagram</p>
                      <p className="text-xs text-muted-foreground">Siga-me no Instagram</p>
                    </div>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Resposta Rápida */}
            <Card className="glass-morphism border-border/50">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="text-4xl mb-3">⚡</div>
                  <h3 className="font-semibold mb-2">Resposta Rápida</h3>
                  <p className="text-sm text-muted-foreground">
                    Geralmente respondo em até 24 horas. Para projetos urgentes,
                    entre em contato via WhatsApp.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}