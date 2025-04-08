import React from 'react';
import { BookOpen, Briefcase, GraduationCap } from 'lucide-react';

const TimelineItem = ({ year, title, description, icon: Icon }: {
  year: string;
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}) => (
  <div className="flex gap-4 mb-8">
    <div className="flex-shrink-0 w-12 h-12 bg-indigo-900/50 rounded-lg flex items-center justify-center">
      <Icon className="w-6 h-6 text-cyan-400" />
    </div>
    <div>
      <div className="text-sm text-cyan-400">{year}</div>
      <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  </div>
);

export default function About() {
  return (
    <section className="py-20 bg-indigo-950">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-white">About Me</h2>
            <div className="prose prose-invert">
              <p className="text-gray-300 mb-6">
                Passionate about technology and innovation, I specialize in creating elegant solutions 
                to complex problems. With a background in computer science and years of hands-on 
                experience, I bring ideas to life through code.
              </p>
              <img
                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c"
                alt="Profile"
                className="rounded-lg shadow-2xl mb-6"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-8">Journey</h3>
            <TimelineItem
              year="2023"
              title="Senior Developer"
              description="Leading innovative projects and mentoring team members"
              icon={Briefcase}
            />
            <TimelineItem
              year="2021"
              title="Master's in Computer Science"
              description="Specialized in Artificial Intelligence and Machine Learning"
              icon={GraduationCap}
            />
            <TimelineItem
              year="2019"
              title="Published Research"
              description="Contributed to breakthrough developments in cloud computing"
              icon={BookOpen}
            />
          </div>
        </div>
      </div>
    </section>
  );
}