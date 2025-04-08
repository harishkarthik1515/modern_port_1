import React from 'react';
import { Code, Database, Layout, Server, Smartphone, Terminal } from 'lucide-react';

const SkillCategory = ({ title, skills, icon: Icon }: {
  title: string;
  skills: string[];
  icon: React.ComponentType<any>;
}) => (
  <div className="bg-indigo-900/20 backdrop-blur-sm rounded-lg p-6 hover:bg-indigo-900/30 transition-all">
    <div className="flex items-center gap-3 mb-4">
      <Icon className="w-6 h-6 text-cyan-400" />
      <h3 className="text-xl font-semibold text-white">{title}</h3>
    </div>
    <div className="space-y-3">
      {skills.map((skill, index) => (
        <div key={index} className="relative">
          <div className="h-2 bg-indigo-900/50 rounded-full">
            <div 
              className="h-full bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"
              style={{ width: `${Math.random() * 30 + 70}%` }}
            ></div>
          </div>
          <span className="text-sm text-gray-300 mt-1 block">{skill}</span>
        </div>
      ))}
    </div>
  </div>
);

export default function Skills() {
  return (
    <section className="py-20 bg-indigo-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Technical Expertise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <SkillCategory
            title="Frontend Development"
            skills={["React", "TypeScript", "Tailwind CSS", "Next.js"]}
            icon={Layout}
          />
          <SkillCategory
            title="Backend Development"
            skills={["Node.js", "Python", "Java", "GraphQL"]}
            icon={Server}
          />
          <SkillCategory
            title="Database"
            skills={["PostgreSQL", "MongoDB", "Redis", "Firebase"]}
            icon={Database}
          />
          <SkillCategory
            title="Mobile Development"
            skills={["React Native", "Flutter", "iOS", "Android"]}
            icon={Smartphone}
          />
          <SkillCategory
            title="DevOps"
            skills={["Docker", "Kubernetes", "AWS", "CI/CD"]}
            icon={Terminal}
          />
          <SkillCategory
            title="Programming Languages"
            skills={["JavaScript", "Python", "Java", "Go"]}
            icon={Code}
          />
        </div>
      </div>
    </section>
  );
}