"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, User, Briefcase, Mail, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  { href: "/", label: "Início", icon: Home },
  { href: "/sobre", label: "Sobre", icon: User },
  { href: "/projetos", label: "Projetos", icon: Briefcase },
  { href: "/contato", label: "Contato", icon: Mail },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-morphism backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <a href="#home" className="text-2xl font-bold gradient-text">
              WV
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-foreground/80 hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-accent/50"
            >
              Início
            </a>
            <a
              href="#about"
              className="text-foreground/80 hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-accent/50"
            >
              Sobre
            </a>
            <a
              href="#experience"
              className="text-foreground/80 hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-accent/50"
            >
              Experiência
            </a>
            <a
              href="#projects"
              className="text-foreground/80 hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-accent/50"
            >
              Projetos
            </a>
            <a
              href="#contact"
              className="text-foreground/80 hover:text-foreground px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 hover:bg-accent/50"
            >
              Contato
            </a>
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="flex items-center space-x-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              <ThemeToggle />
            </motion.div>

            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
                className="h-9 w-9"
              >
                {isOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-morphism backdrop-blur-md"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#home"
                className="text-foreground/80 hover:text-foreground flex items-center px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 hover:bg-accent/50"
              >
                <Home className="mr-3 h-4 w-4" />
                Início
              </a>
              <a
                href="#about"
                className="text-foreground/80 hover:text-foreground flex items-center px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 hover:bg-accent/50"
              >
                <User className="mr-3 h-4 w-4" />
                Sobre
              </a>
              <a
                href="#experience"
                className="text-foreground/80 hover:text-foreground flex items-center px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 hover:bg-accent/50"
              >
                <Briefcase className="mr-3 h-4 w-4" />
                Experiência
              </a>
              <a
                  href="#projects"
                  className="text-foreground/80 hover:text-foreground flex items-center px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 hover:bg-accent/50"
                >
                  <Code className="mr-3 h-4 w-4" />
                  Projetos
                </a>
              <a
                href="#contact"
                className="text-foreground/80 hover:text-foreground flex items-center px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 hover:bg-accent/50"
              >
                <Mail className="mr-3 h-4 w-4" />
                Contato
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}