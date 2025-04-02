import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Code, Globe, Database, Cloud, Star, Briefcase, GraduationCap } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="min-h-screen relative flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
        <div className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in">
            Yeison Ordoñez
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-gray-200">
            Full Stack Developer & UI/UX Designer
          </p>
          <div className="flex justify-center space-x-6">
            <a href="https://github.com" className="hover:text-gray-300 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" className="hover:text-gray-300 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:contact@example.com" className="hover:text-gray-300 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} />
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-8 text-center">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 mb-6">
              I'm a passionate developer with 5 years of experience building modern web applications.
              My expertise includes React, Node.js, and cloud technologies.
            </p>
            <p className="text-lg text-gray-600">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source
              projects, or sharing knowledge through technical writing.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="text-indigo-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Frontend Development</h3>
              <p className="text-gray-600">React, Vue.js, TypeScript, Tailwind CSS</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="text-indigo-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Backend Development</h3>
              <p className="text-gray-600">Node.js, Python, PostgreSQL, MongoDB</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cloud className="text-indigo-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Cloud Services</h3>
              <p className="text-gray-600">AWS, Google Cloud, Docker, Kubernetes</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="text-indigo-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Web Performance</h3>
              <p className="text-gray-600">SEO, Analytics, Performance Optimization</p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Professional Experience</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex items-start">
              <div className="bg-indigo-100 p-3 rounded-full mr-4">
                <Briefcase className="text-indigo-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold">Patient Appointment Coordinator</h3>
                <p className="text-indigo-600 mb-2">MedFlorida Medical Center • Tampa, Florida • Dec 2023 - Jan 2025</p>
                <ul className="text-gray-600 list-disc ml-4 space-y-2">
                  <li>Managed patient outreach for scheduling annual physical examinations and healthcare appointments.</li>
                  <li>Facilitated efficient communication between patients and medical staff to optimize scheduling.</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-indigo-100 p-3 rounded-full mr-4">
                <Briefcase className="text-indigo-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold">Sales and Customer Relations Representative</h3>
                <p className="text-indigo-600 mb-2">Invista Home LLC • Los Angeles, California • Jun 2023 - Dec 2023</p>
                <ul className="text-gray-600 list-disc ml-4 space-y-2">
                  <li>Engaged with potential customers to promote and sell roofing services.</li>
                  <li>Identified customer needs, addressed concerns, and guided clients through the sales process.</li>
                  <li>Developed strong client relationships to improve retention and conversion rates.</li>
                  <li>Utilized persuasive copywriting techniques to craft compelling sales pitches and marketing materials.</li>
                  <li>Created engaging content for customer communications to enhance brand messaging and sales effectiveness.</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-indigo-100 p-3 rounded-full mr-4">
                <Briefcase className="text-indigo-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold">Customer Support Specialist</h3>
                <p className="text-indigo-600 mb-2">Amazon.com, Inc. • Seattle, Washington • Nov 2022 - Jun 2023</p>
                <ul className="text-gray-600 list-disc ml-4 space-y-2">
                  <li>Managed high volumes of inbound inquiries, ensuring prompt and effective resolution.</li>
                  <li>Provided end-to-end customer support, including order tracking, refund processing, and dispute resolution.</li>
                  <li>Verified shipping details and coordinated follow-ups to enhance customer satisfaction.</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-indigo-100 p-3 rounded-full mr-4">
                <Briefcase className="text-indigo-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold">Patient Support Representative</h3>
                <p className="text-indigo-600 mb-2">Sanitas Medical Center • Florida • Aug 2021 - Oct 2022</p>
                <ul className="text-gray-600 list-disc ml-4 space-y-2">
                  <li>Assisted patients with prescription queries, referrals, insurance claims, and healthcare services.</li>
                  <li>Scheduled and coordinated medical appointments for new and returning patients.</li>
                  <li>Maintained patient records with confidentiality and accuracy.</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-indigo-100 p-3 rounded-full mr-4">
                <Briefcase className="text-indigo-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold">Merchant Support Specialist</h3>
                <p className="text-indigo-600 mb-2">Stripe, Inc. • San Francisco, California • Mar 2020 - Dec 2021</p>
                <ul className="text-gray-600 list-disc ml-4 space-y-2">
                  <li>Assisted merchants via email, chat, and phone with account-related inquiries.</li>
                  <li>Verified financial and legal documentation, including bank accounts, tax information, and business registrations.</li>
                  <li>Processed payments, refunds, and payouts while ensuring compliance with financial regulations.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Education</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex items-start">
              <div className="bg-indigo-100 p-3 rounded-full mr-4">
                <GraduationCap className="text-indigo-600" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold">Industrial Technical Bachelor</h3>
                <p className="text-indigo-600 mb-2">Ana Josefa Morales Duque • Santander de Quilichao, Cauca, Colombia • Jan 2015 - 2019</p>
                <ul className="text-gray-600 list-disc ml-4 space-y-2">
                  <li>Strong foundation in industrial technologies, technical drawing, and engineering principles.</li>
                  <li>Hands-on experience with machinery and automation systems.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((project) => (
              <div key={project} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img
                  src={`https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800`}
                  alt="Project Preview"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Project {project}</h3>
                  <p className="text-gray-600 mb-4">
                    A brief description of the project and the technologies used in its development.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-500"
                  >
                    View Project <ExternalLink size={16} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((testimonial) => (
              <div key={testimonial} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <img
                    src={`https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100`}
                    alt="Client"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-bold">Client Name</h3>
                    <p className="text-gray-600">CEO, Company Name</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-yellow-400" size={16} />
                  ))}
                </div>
                <p className="text-gray-600">
                  "Working with Yeison was an excellent experience. Their expertise and dedication to the project were invaluable."
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center">Get in Touch</h2>
          <div className="max-w-lg mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-500 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} Yeison Ordoñez. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;