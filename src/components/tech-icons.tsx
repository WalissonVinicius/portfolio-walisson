"use client";

import {
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiNuxtdotjs,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiNodedotjs,
  SiRuby,
  SiPython,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiKubernetes,
  SiGithubactions,
  SiGitlab,
  SiOpenai
} from 'react-icons/si';
import { FaBrain, FaRobot } from 'react-icons/fa';
import { MdApi } from 'react-icons/md';
import { TbBrandGraphql } from 'react-icons/tb';

interface TechIconProps {
  name: string;
  size?: number;
  className?: string;
}

const iconMap: Record<string, React.ComponentType<any>> = {
  // Frontend
  'React': SiReact,
  'Next.js': SiNextdotjs,
  'Vue.js': SiVuedotjs,
  'Nuxt.js': SiNuxtdotjs,
  'TypeScript': SiTypescript,
  'JavaScript': SiJavascript,
  'HTML5': SiHtml5,
  'CSS3': SiCss3,
  'Tailwind CSS': SiTailwindcss,
  'React Native': SiReact,
  
  // Backend
  'Node.js': SiNodedotjs,
  'Ruby': SiRuby,
  'Python': SiPython,
  'Express.js': SiExpress,
  'REST APIs': MdApi,
  'GraphQL': TbBrandGraphql,
  
  // Database
  'PostgreSQL': SiPostgresql,
  'MySQL': SiMysql,
  'MongoDB': SiMongodb,
  'Redis': SiRedis,
  
  // DevOps
  'Docker': SiDocker,
  'Kubernetes': SiKubernetes,
  'GitHub Actions': SiGithubactions,
  'GitLab CI': SiGitlab,
  
  // AI
  'OpenAI': SiOpenai,
  'LLM': FaBrain,
  'Prompt Engineering': FaRobot
};

const colorMap: Record<string, string> = {
  // Frontend
  'React': '#61DAFB',
  'Next.js': '#000000',
  'Vue.js': '#4FC08D',
  'Nuxt.js': '#00DC82',
  'TypeScript': '#3178C6',
  'JavaScript': '#F7DF1E',
  'HTML5': '#E34F26',
  'CSS3': '#1572B6',
  'Tailwind CSS': '#06B6D4',
  'React Native': '#61DAFB',
  
  // Backend
  'Node.js': '#339933',
  'Ruby': '#CC342D',
  'Python': '#3776AB',
  'Express.js': '#000000',
  'REST APIs': '#FF6B35',
  'GraphQL': '#E10098',
  
  // Database
  'PostgreSQL': '#336791',
  'MySQL': '#4479A1',
  'MongoDB': '#47A248',
  'Redis': '#DC382D',
  
  // DevOps
  'Docker': '#2496ED',
  'Kubernetes': '#326CE5',
  'GitHub Actions': '#2088FF',
  'GitLab CI': '#FC6D26',
  
  // AI
  'OpenAI': '#412991',
  'LLM': '#8B5CF6',
  'Prompt Engineering': '#F59E0B'
};

export function TechIcon({ name, size = 24, className = '' }: TechIconProps) {
  const IconComponent = iconMap[name];
  const color = colorMap[name];
  
  if (!IconComponent) {
    return <span className={`text-${size === 24 ? 'xl' : 'lg'} ${className}`}>🔧</span>;
  }
  
  return (
    <IconComponent 
      size={size} 
      color={color}
      className={className}
      title={name}
    />
  );
}

export function getTechIconColor(name: string): string {
  return colorMap[name] || '#6B7280';
}

export function hasTechIcon(name: string): boolean {
  return name in iconMap;
}