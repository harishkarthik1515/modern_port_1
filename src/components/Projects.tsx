import React from 'react';
import { Github, Globe, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "AI-Powered Analytics Platform",
    description: "Real-time data analysis using machine learning algorithms",
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a",
    tags: ["React", "Python", "TensorFlow"],
    github: "#",
    demo: "#"
  },
  {
    title: "Cloud Infrastructure Manager",
    description: "Automated cloud resource optimization system",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    tags: ["AWS", "Node.js", "Docker"],
    github: "#",
    demo: "#"
  },
  {
    title: "Blockchain Supply Chain",
    description: "Decentralized supply chain tracking solution",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
    tags: ["Solidity", "React", "Web3"],
    github: "#",
    demo: "#"
  }
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => (
  <div className="bg-indigo-900/20 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
    <img 
      src={project.image} 
      alt={project.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
      <p className="text-gray-400 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, index) => (
          <span 
            key={index}
            className="px-3 py-1 bg-indigo-900/40 rounded-full text-sm text-cyan-400"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        <a href={project.github} className="flex items-center gap-2 text-gray-300 hover:text-cyan-400">
          <Github className="w-5 h-5" />
          Code
        </a>
        <a href={project.demo} className="flex items-center gap-2 text-gray-300 hover:text-cyan-400">
          <ExternalLink className="w-5 h-5" />
          Demo
        </a>
      </div>
    </div>
  </div>
);

export default function Projects() {
  return (
    <section className="py-20 bg-indigo-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}