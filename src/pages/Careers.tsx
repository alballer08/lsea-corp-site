
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Careers = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const jobListings = [
    {
      id: 1,
      title: 'Construction Inspectors',
      location: 'Montville, NJ',
      type: 'Full-time',
      requirements: [
        '3+ years experience',
        'NICET Levels I - IV Certified',
        'ACI concrete technician',
        'SAT asphalt pavement construction certification',
        'NJDOT/NYSDOT/NJTA experience preferred'
      ]
    },
    {
      id: 2,
      title: 'CADD Technician',
      location: 'Montville, NJ',
      type: 'Full-time',
      requirements: [
        'Experience in MicroStation and AutoCAD',
        'NJDOT/NYSDOT/NJTA experience preferred'
      ]
    },
    {
      id: 3,
      title: 'Building & Bridge Engineer ',
      location: 'NJ/NY',
      type: 'Full-time',
      requirements: [
        'BSCE',
        '5+ years of experience in Bridge or Building Design and Rehab',
        'Familiarity with AASHTO, ACI & Steel manual',
        'NJDOT/NYSDOT/PANYNJ/NJTA experience preferred',
        'P.E. in the State of NY/NJ/PA preferred'
      ]
    },
    {
      id: 4,
      title: 'Bridge Inspection Team Leaders & Assistant Team Leaders',
      location: 'NJ/NY',
      type: 'Full-time',
      requirements: [
        'BSc in Civil Engineering',
        'P. E. in the State of NY/NJ/PA/CT Preferred',
        '5+ years of NYDOT/NJDOT/PANYNJ Bridge Inspection experience preferred',
        'NHI/NYSDOT Training certificates are Preferred (130055, 130053, 130087, and 130078)',
        'New Graduate will be considered for the Assistant Team Leader Positions'
      ]
    },
    {
      id: 5,
      title: 'Structural Engineer',
      location: 'Montville, NJ',
      type: 'Full-time',
      requirements: [
        'BSc in Structural Engineering or Civil Engineering (Required)',
        '3+ years of NJDOT/PANYNJ Bridge Inspection experience preferred',
        'Analysis for innovative material implementation on civil engineering structures',
        'Guideline development for self-healing concrete application',
        'Effect of self-healing concrete study on structures ability',
        'Test protocol development, and load rate analysis for new material in structures',
        'Bridge inspection, load rate analysis and technical report writing'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px]">
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80"
          alt="Careers at LSEA"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute bottom-10 left-10">
          <h1 className={`font-montserrat text-4xl md:text-6xl font-bold text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Careers
          </h1>
        </div>
      </section>

      {/* Careers Content */}
      <section className={`py-16 bg-white transition-all duration-1000 ${isVisible ? 'opacity-100 animate-fade-in' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Join Our Team
            </h2>
            <p className="font-arial text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
              At LSEA Corporation, we're always looking for talented professionals who share our commitment to excellence. Join a team where your expertise is valued, your growth is supported, and your contributions make a meaningful impact on communities worldwide.
            </p>
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            {jobListings.map((job, index) => (
              <div
                key={job.id}
                className={`bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 ${index < 3 ? 'animate-fade-in' : 'animate-fade-in-delay'}`}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="flex-1">
                    <h3 className="font-montserrat text-xl font-semibold text-gray-900 mb-2">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-gray-600 mb-2">
                      <span className="font-arial">📍 {job.location}</span>
                      <span className="font-arial">💼 {job.type}</span>
                    </div>
                    <div className="font-arial text-gray-600">
                      <strong>Requirements:</strong>
                      <ul className="mt-2 ml-4 space-y-1">
                        {job.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start">
                            <span className="text-gray-900 mr-2">•</span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6">
                    <Button asChild>
                      <Link to="/contact" className="font-arial">
                        Contact Us
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
