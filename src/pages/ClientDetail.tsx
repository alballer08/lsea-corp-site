import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, TrendingUp, Users, Target, CheckCircle } from 'lucide-react';

// This would typically come from a database or API
const clientDetails = {
  'global-manufacturing': {
    name: 'Global Manufacturing Corp',
    industry: 'Manufacturing',
    description: 'Leading manufacturer with operations across 15 countries, specializing in automotive components and industrial equipment.',
    logo: '/placeholder.svg',
    heroImage: '/placeholder.svg',
    projectType: 'Digital Transformation',
    results: '40% efficiency increase',
    year: '2023',
    duration: '18 months',
    teamSize: '12 professionals',
    challenge: 'Global Manufacturing Corp faced significant challenges with their legacy systems causing production bottlenecks, manual processes leading to errors, and lack of real-time visibility across their 15 international facilities.',
    solution: 'We implemented a comprehensive digital transformation strategy including IoT sensors for real-time monitoring, automated workflow systems, and a centralized dashboard for global operations visibility.',
    outcomes: [
      '40% increase in overall operational efficiency',
      '65% reduction in manual errors',
      '25% decrease in production downtime',
      'Real-time visibility across all 15 facilities',
      '$2.3M annual cost savings'
    ],
    technologies: ['IoT Sensors', 'Cloud Infrastructure', 'AI Analytics', 'Mobile Applications'],
    testimonial: {
      quote: "LSEA Corporation transformed our operations beyond our expectations. The digital transformation has given us unprecedented visibility and control over our global manufacturing processes.",
      author: "Sarah Mitchell",
      title: "Chief Operations Officer"
    }
  },
  'metropolitan-healthcare': {
    name: 'Metropolitan Healthcare',
    industry: 'Healthcare',
    description: 'Regional healthcare network serving over 2 million patients with comprehensive medical services and facilities.',
    logo: '/placeholder.svg',
    heroImage: '/placeholder.svg',
    projectType: 'System Integration',
    results: '60% faster patient processing',
    year: '2023',
    duration: '12 months',
    teamSize: '8 professionals',
    challenge: 'Metropolitan Healthcare struggled with fragmented systems across their network, leading to delayed patient care, duplicate records, and inefficient resource allocation.',
    solution: 'We designed and implemented an integrated healthcare management system that unified patient records, streamlined appointment scheduling, and optimized resource allocation across all facilities.',
    outcomes: [
      '60% faster patient processing times',
      '90% reduction in duplicate records',
      '35% improvement in resource utilization',
      'Unified patient experience across all facilities',
      'Enhanced data security and compliance'
    ],
    technologies: ['Healthcare APIs', 'Cloud Security', 'Data Integration', 'Mobile Health Apps'],
    testimonial: {
      quote: "The system integration project has revolutionized how we serve our patients. The efficiency gains have allowed us to focus more on patient care rather than administrative tasks.",
      author: "Dr. James Rodriguez",
      title: "Chief Medical Officer"
    }
  }
  // Add more client details as needed
};

const ClientDetail = () => {
  const { id } = useParams();
  const client = clientDetails[id as keyof typeof clientDetails];

  if (!client) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Client not found</h1>
          <Link to="/clients" className="text-blue-600 hover:text-blue-800">
            Return to Clients
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/clients"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Clients
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    className="w-12 h-12 object-contain"
                  />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 font-montserrat">
                    {client.name}
                  </h1>
                  <p className="text-lg text-gray-600">{client.industry}</p>
                </div>
              </div>
              
              <p className="text-lg text-gray-700 mb-8 font-arial">
                {client.description}
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 text-blue-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Project Year</p>
                    <p className="font-semibold">{client.year}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="w-5 h-5 text-green-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Key Result</p>
                    <p className="font-semibold text-green-600">{client.results}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-purple-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Team Size</p>
                    <p className="font-semibold">{client.teamSize}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Target className="w-5 h-5 text-orange-600 mr-3" />
                  <div>
                    <p className="text-sm text-gray-500">Duration</p>
                    <p className="font-semibold">{client.duration}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <img
                src={client.heroImage}
                alt={`${client.name} project`}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-red-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-montserrat">
                The Challenge
              </h2>
              <p className="text-gray-700 font-arial">
                {client.challenge}
              </p>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 font-montserrat">
                Our Solution
              </h2>
              <p className="text-gray-700 font-arial">
                {client.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center font-montserrat">
            Project Outcomes
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {client.outcomes.map((outcome, index) => (
              <div key={index} className="flex items-start p-4 bg-green-50 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                <p className="text-gray-700 font-arial">{outcome}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center font-montserrat">
            Technologies Used
          </h2>
          
          <div className="flex flex-wrap justify-center gap-4">
            {client.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <blockquote className="text-xl md:text-2xl font-medium mb-8 font-arial">
            "{client.testimonial.quote}"
          </blockquote>
          <div>
            <p className="font-semibold text-lg">{client.testimonial.author}</p>
            <p className="text-gray-300">{client.testimonial.title}</p>
            <p className="text-gray-400">{client.name}</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4 font-montserrat">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss how we can help you achieve similar results.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ClientDetail;