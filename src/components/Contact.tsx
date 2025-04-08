import React, { useState } from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section className="py-20 bg-indigo-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Get in Touch</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-indigo-900/50 border border-indigo-700 rounded-lg focus:outline-none focus:border-cyan-400 text-white"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-indigo-900/50 border border-indigo-700 rounded-lg focus:outline-none focus:border-cyan-400 text-white"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 bg-indigo-900/50 border border-indigo-700 rounded-lg focus:outline-none focus:border-cyan-400 text-white"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg text-white font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">Connect With Me</h3>
                <div className="space-y-4">
                  <a href="#" className="flex items-center gap-3 text-gray-300 hover:text-cyan-400">
                    <Mail className="w-5 h-5" />
                    hello@example.com
                  </a>
                  <a href="#" className="flex items-center gap-3 text-gray-300 hover:text-cyan-400">
                    <Github className="w-5 h-5" />
                    github.com/username
                  </a>
                  <a href="#" className="flex items-center gap-3 text-gray-300 hover:text-cyan-400">
                    <Linkedin className="w-5 h-5" />
                    linkedin.com/in/username
                  </a>
                  <a href="#" className="flex items-center gap-3 text-gray-300 hover:text-cyan-400">
                    <Twitter className="w-5 h-5" />
                    @username
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}