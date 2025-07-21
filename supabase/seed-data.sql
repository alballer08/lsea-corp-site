-- Website Content Seed Data
-- This file contains all text content from the website for search functionality

-- Clear existing data
DELETE FROM website_content;

-- Home Page Content
INSERT INTO website_content (page_title, page_url, content_type, heading, description, keywords) VALUES
('LSEA | Home', '/', 'page', 'Louisiana State Engineering Associates', 'Professional engineering services, structural design, civil engineering, environmental consulting, project management, quality assurance, innovative solutions, sustainable practices', ARRAY['engineering', 'structural', 'civil', 'environmental', 'consulting', 'Louisiana', 'professional', 'design', 'construction', 'infrastructure']),
('LSEA | Home', '/', 'section', 'Our Services', 'We provide comprehensive engineering solutions including structural design, civil engineering, environmental consulting, and project management services', ARRAY['services', 'structural design', 'civil engineering', 'environmental consulting', 'project management']),
('LSEA | Home', '/', 'section', 'Our Culture', 'Innovation, integrity, and excellence drive our approach to every project. We foster a collaborative environment that encourages creative problem-solving', ARRAY['culture', 'innovation', 'integrity', 'excellence', 'collaboration', 'problem-solving']),
('LSEA | Home', '/', 'section', 'Our Offices', 'Multiple office locations across Louisiana to serve our clients better with local expertise and regional knowledge', ARRAY['offices', 'locations', 'Louisiana', 'local expertise', 'regional knowledge']);

-- About Page Content
INSERT INTO website_content (page_title, page_url, content_type, heading, description, keywords) VALUES
('LSEA | About', '/about', 'page', 'About Louisiana State Engineering Associates', 'Learn about our company history, mission, vision, values, and commitment to engineering excellence in Louisiana', ARRAY['about', 'company', 'history', 'mission', 'vision', 'values', 'engineering excellence']),
('LSEA | About', '/about', 'section', 'Our Mission', 'To provide innovative engineering solutions that enhance communities and protect the environment through professional excellence and ethical practices', ARRAY['mission', 'innovative solutions', 'communities', 'environment', 'professional excellence', 'ethical practices']),
('LSEA | About', '/about', 'section', 'Our Vision', 'To be the leading engineering firm in Louisiana, recognized for our technical expertise, client satisfaction, and positive impact on society', ARRAY['vision', 'leading engineering firm', 'technical expertise', 'client satisfaction', 'positive impact']),
('LSEA | About', '/about', 'section', 'Our Values', 'Integrity, excellence, innovation, sustainability, teamwork, and client focus guide everything we do', ARRAY['values', 'integrity', 'excellence', 'innovation', 'sustainability', 'teamwork', 'client focus']);

-- Services Page Content
INSERT INTO website_content (page_title, page_url, content_type, heading, description, keywords) VALUES
('LSEA | Services', '/services', 'page', 'Engineering Services', 'Comprehensive engineering services including structural design, civil engineering, environmental consulting, and specialized solutions', ARRAY['services', 'engineering', 'structural', 'civil', 'environmental', 'consulting']),
('LSEA | Services', '/services', 'service', 'Structural Engineering', 'Building design, foundation analysis, seismic evaluation, structural assessments, renovation planning, load calculations, steel and concrete design', ARRAY['structural engineering', 'building design', 'foundation', 'seismic', 'renovation', 'load calculations', 'steel', 'concrete']),
('LSEA | Services', '/services', 'service', 'Civil Engineering', 'Site development, roadway design, drainage systems, utility planning, grading, stormwater management, transportation infrastructure', ARRAY['civil engineering', 'site development', 'roadway', 'drainage', 'utilities', 'grading', 'stormwater', 'transportation']),
('LSEA | Services', '/services', 'service', 'Environmental Consulting', 'Environmental impact assessments, permitting, remediation, compliance, sustainability consulting, wetland delineation, air quality monitoring', ARRAY['environmental consulting', 'impact assessment', 'permitting', 'remediation', 'compliance', 'sustainability', 'wetland', 'air quality']),
('LSEA | Services', '/services', 'service', 'Project Management', 'Construction administration, quality control, project scheduling, cost estimation, risk management, team coordination', ARRAY['project management', 'construction administration', 'quality control', 'scheduling', 'cost estimation', 'risk management']),
('LSEA | Services', '/services', 'service', 'Geotechnical Engineering', 'Soil analysis, foundation recommendations, slope stability, earthquake engineering, ground improvement, subsurface investigation', ARRAY['geotechnical', 'soil analysis', 'foundation', 'slope stability', 'earthquake', 'ground improvement', 'subsurface']),
('LSEA | Services', '/services', 'service', 'Water Resources', 'Flood control, water supply systems, wastewater treatment, hydraulic modeling, coastal engineering, levee design', ARRAY['water resources', 'flood control', 'water supply', 'wastewater', 'hydraulic', 'coastal', 'levee']);

-- Portfolio Page Content
INSERT INTO website_content (page_title, page_url, content_type, heading, description, keywords) VALUES
('LSEA | Portfolio', '/portfolio', 'page', 'Our Portfolio', 'Explore our completed projects including commercial buildings, residential developments, infrastructure, and environmental remediation', ARRAY['portfolio', 'projects', 'commercial', 'residential', 'infrastructure', 'environmental']),
('LSEA | Portfolio', '/portfolio', 'project', 'Downtown Office Complex', 'Modern 15-story office building with sustainable design features, LEED certification, and advanced structural systems', ARRAY['office complex', 'sustainable design', 'LEED', 'structural systems', 'downtown', 'commercial']),
('LSEA | Portfolio', '/portfolio', 'project', 'Residential Development', 'Master-planned community with 500 homes, parks, recreational facilities, and integrated stormwater management', ARRAY['residential development', 'master-planned', 'community', 'homes', 'parks', 'recreation', 'stormwater']),
('LSEA | Portfolio', '/portfolio', 'project', 'Bridge Rehabilitation', 'Structural assessment and rehabilitation of historic bridge, preserving architectural character while ensuring safety', ARRAY['bridge rehabilitation', 'structural assessment', 'historic preservation', 'safety', 'infrastructure']),
('LSEA | Portfolio', '/portfolio', 'project', 'Industrial Facility', 'Manufacturing plant design with specialized equipment foundations, environmental controls, and safety systems', ARRAY['industrial facility', 'manufacturing', 'foundations', 'environmental controls', 'safety systems']),
('LSEA | Portfolio', '/portfolio', 'project', 'School Campus', 'K-12 educational facility with modern classrooms, laboratories, gymnasium, and sustainable building practices', ARRAY['school campus', 'educational facility', 'classrooms', 'laboratories', 'gymnasium', 'sustainable']);

-- Partners Page Content
INSERT INTO website_content (page_title, page_url, content_type, heading, description, keywords) VALUES
('LSEA | Partners', '/partners', 'page', 'Our Partners', 'Strategic partnerships with leading firms in architecture, construction, environmental services, and technology', ARRAY['partners', 'partnerships', 'architecture', 'construction', 'environmental services', 'technology']),
('LSEA | Partners', '/partners', 'partner', 'ABC Architecture', 'Collaborative design services for commercial and residential projects, sustainable building practices, innovative architectural solutions', ARRAY['architecture', 'design services', 'commercial', 'residential', 'sustainable building', 'innovative']),
('LSEA | Partners', '/partners', 'partner', 'XYZ Construction', 'General contracting services, project delivery, construction management, quality assurance, safety programs', ARRAY['construction', 'contracting', 'project delivery', 'construction management', 'quality assurance', 'safety']),
('LSEA | Partners', '/partners', 'partner', 'Environmental Solutions Inc', 'Environmental consulting, remediation services, regulatory compliance, sustainability planning, ecological restoration', ARRAY['environmental consulting', 'remediation', 'regulatory compliance', 'sustainability', 'ecological restoration']),
('LSEA | Partners', '/partners', 'partner', 'TechFlow Systems', 'Technology solutions, CAD services, BIM modeling, project management software, digital workflow optimization', ARRAY['technology solutions', 'CAD', 'BIM modeling', 'project management software', 'digital workflow']),
('LSEA | Partners', '/partners', 'partner', 'Coastal Engineering Group', 'Marine engineering, coastal protection, waterfront development, flood mitigation, hurricane resilience', ARRAY['coastal engineering', 'marine engineering', 'coastal protection', 'waterfront', 'flood mitigation', 'hurricane']);

-- Offices Page Content
INSERT INTO website_content (page_title, page_url, content_type, heading, description, keywords) VALUES
('LSEA | Offices', '/offices', 'page', 'Our Office Locations', 'Multiple office locations across Louisiana providing local expertise and regional knowledge', ARRAY['offices', 'locations', 'Louisiana', 'local expertise', 'regional knowledge']),
('LSEA | Offices', '/offices', 'office', 'New Orleans Office', 'Main headquarters located in downtown New Orleans, serving the greater metropolitan area and southeastern Louisiana', ARRAY['New Orleans', 'headquarters', 'downtown', 'metropolitan', 'southeastern Louisiana']),
('LSEA | Offices', '/offices', 'office', 'Baton Rouge Office', 'Capital city location providing services to central Louisiana, government projects, and industrial facilities', ARRAY['Baton Rouge', 'capital city', 'central Louisiana', 'government projects', 'industrial']),
('LSEA | Offices', '/offices', 'office', 'Lafayette Office', 'Acadiana regional office serving southwestern Louisiana, oil and gas industry, and coastal communities', ARRAY['Lafayette', 'Acadiana', 'southwestern Louisiana', 'oil and gas', 'coastal communities']),
('LSEA | Offices', '/offices', 'office', 'Shreveport Office', 'Northern Louisiana location focusing on municipal projects, healthcare facilities, and educational institutions', ARRAY['Shreveport', 'northern Louisiana', 'municipal projects', 'healthcare', 'educational institutions']),
('LSEA | Offices', '/offices', 'office', 'Lake Charles Office', 'Southwest Louisiana office specializing in petrochemical industry, port facilities, and industrial infrastructure', ARRAY['Lake Charles', 'southwest Louisiana', 'petrochemical', 'port facilities', 'industrial infrastructure']);

-- Careers Page Content
INSERT INTO website_content (page_title, page_url, content_type, heading, description, keywords) VALUES
('LSEA | Careers', '/careers', 'page', 'Career Opportunities', 'Join our team of engineering professionals and build your career with opportunities for growth and development', ARRAY['careers', 'opportunities', 'engineering professionals', 'growth', 'development']),
('LSEA | Careers', '/careers', 'job', 'Senior Structural Engineer', 'Lead structural design projects, mentor junior engineers, client interaction, PE license required, 8+ years experience', ARRAY['senior structural engineer', 'structural design', 'mentor', 'PE license', 'experience']),
('LSEA | Careers', '/careers', 'job', 'Civil Engineer', 'Site development, roadway design, drainage systems, AutoCAD proficiency, bachelor degree required, 3-5 years experience', ARRAY['civil engineer', 'site development', 'roadway design', 'drainage', 'AutoCAD', 'bachelor degree']),
('LSEA | Careers', '/careers', 'job', 'Environmental Scientist', 'Environmental assessments, permitting, field investigations, report writing, environmental science degree, 2+ years experience', ARRAY['environmental scientist', 'assessments', 'permitting', 'field investigations', 'report writing']),
('LSEA | Careers', '/careers', 'job', 'Project Manager', 'Construction administration, project scheduling, budget management, team leadership, PMP certification preferred', ARRAY['project manager', 'construction administration', 'scheduling', 'budget management', 'PMP certification']),
('LSEA | Careers', '/careers', 'job', 'CAD Technician', 'Technical drawings, design support, CAD software proficiency, attention to detail, associate degree preferred', ARRAY['CAD technician', 'technical drawings', 'design support', 'CAD software', 'attention to detail']),
('LSEA | Careers', '/careers', 'benefit', 'Benefits Package', 'Comprehensive health insurance, dental, vision, 401k matching, paid time off, professional development, flexible work arrangements', ARRAY['benefits', 'health insurance', 'dental', 'vision', '401k', 'paid time off', 'professional development', 'flexible work']);

-- Contact Page Content
INSERT INTO website_content (page_title, page_url, content_type, heading, description, keywords) VALUES
('LSEA | Contact', '/contact', 'page', 'Contact Us', 'Get in touch with our team for engineering services, project inquiries, or general information', ARRAY['contact', 'engineering services', 'project inquiries', 'information']),
('LSEA | Contact', '/contact', 'contact', 'Phone Numbers', 'Main office: (504) 555-0123, Baton Rouge: (225) 555-0456, Lafayette: (337) 555-0789, Shreveport: (318) 555-0012', ARRAY['phone', 'numbers', 'main office', 'Baton Rouge', 'Lafayette', 'Shreveport', '504', '225', '337', '318']),
('LSEA | Contact', '/contact', 'contact', 'Email Addresses', 'General inquiries: info@lsea.com, Projects: projects@lsea.com, Careers: careers@lsea.com, Support: support@lsea.com', ARRAY['email', 'addresses', 'inquiries', 'projects', 'careers', 'support', 'info@lsea.com', 'projects@lsea.com', 'careers@lsea.com']),
('LSEA | Contact', '/contact', 'contact', 'Main Address', '123 Canal Street, Suite 500, New Orleans, LA 70130, United States', ARRAY['address', 'Canal Street', 'New Orleans', 'LA', '70130', 'United States', 'main office']),
('LSEA | Contact', '/contact', 'contact', 'Business Hours', 'Monday-Friday: 8:00 AM - 5:00 PM, Saturday: 9:00 AM - 1:00 PM, Sunday: Closed, Emergency services available 24/7', ARRAY['business hours', 'Monday', 'Friday', 'Saturday', 'Sunday', 'emergency services', '24/7']),
('LSEA | Contact', '/contact', 'form', 'Contact Form', 'Name, email, phone, subject, message fields for inquiries and project discussions', ARRAY['contact form', 'name', 'email', 'phone', 'subject', 'message', 'inquiries']);

-- Clients Page Content
INSERT INTO website_content (page_title, page_url, content_type, heading, description, keywords) VALUES
('LSEA | Clients', '/clients', 'page', 'Our Clients', 'Trusted by leading organizations across various industries including healthcare, education, government, and private sector', ARRAY['clients', 'organizations', 'healthcare', 'education', 'government', 'private sector']),
('LSEA | Clients', '/clients', 'client', 'Louisiana Department of Transportation', 'Highway infrastructure, bridge design, traffic engineering, transportation planning, safety improvements', ARRAY['Louisiana Department Transportation', 'highway', 'bridge design', 'traffic engineering', 'transportation planning', 'safety']),
('LSEA | Clients', '/clients', 'client', 'Ochsner Health System', 'Hospital design, medical facility planning, healthcare infrastructure, patient care environments, specialized equipment support', ARRAY['Ochsner Health', 'hospital design', 'medical facility', 'healthcare infrastructure', 'patient care', 'specialized equipment']),
('LSEA | Clients', '/clients', 'client', 'Louisiana State University', 'Campus development, academic buildings, research facilities, student housing, athletic facilities', ARRAY['Louisiana State University', 'LSU', 'campus development', 'academic buildings', 'research facilities', 'student housing', 'athletic']),
('LSEA | Clients', '/clients', 'client', 'City of New Orleans', 'Municipal projects, public infrastructure, flood protection, parks and recreation, emergency services facilities', ARRAY['City of New Orleans', 'municipal projects', 'public infrastructure', 'flood protection', 'parks', 'recreation', 'emergency services']),
('LSEA | Clients', '/clients', 'client', 'Shell Oil Company', 'Petrochemical facilities, refinery infrastructure, environmental compliance, safety systems, industrial engineering', ARRAY['Shell Oil', 'petrochemical', 'refinery', 'environmental compliance', 'safety systems', 'industrial engineering']),
('LSEA | Clients', '/clients', 'client', 'Entergy Corporation', 'Power generation facilities, transmission infrastructure, substation design, renewable energy projects, grid modernization', ARRAY['Entergy', 'power generation', 'transmission', 'substation', 'renewable energy', 'grid modernization']);

-- Additional Service Details
INSERT INTO website_content (page_title, page_url, content_type, heading, description, keywords) VALUES
('LSEA | Services', '/services', 'capability', 'Design Software', 'AutoCAD, Revit, Civil 3D, STAAD Pro, SAP2000, ETABS, HEC-RAS, ANSYS, MicroStation, Bentley software suite', ARRAY['design software', 'AutoCAD', 'Revit', 'Civil 3D', 'STAAD Pro', 'SAP2000', 'ETABS', 'HEC-RAS', 'ANSYS', 'MicroStation', 'Bentley']),
('LSEA | Services', '/services', 'capability', 'Certifications', 'Professional Engineer licenses, LEED accreditation, OSHA safety training, quality management systems, continuing education', ARRAY['certifications', 'Professional Engineer', 'PE license', 'LEED', 'OSHA', 'safety training', 'quality management', 'continuing education']),
('LSEA | Services', '/services', 'capability', 'Industry Experience', 'Commercial, residential, industrial, institutional, infrastructure, healthcare, education, government, energy, petrochemical', ARRAY['industry experience', 'commercial', 'residential', 'industrial', 'institutional', 'infrastructure', 'healthcare', 'education', 'government', 'energy', 'petrochemical']);

-- Privacy Policy and Terms
INSERT INTO website_content (page_title, page_url, content_type, heading, description, keywords) VALUES
('LSEA | Privacy Policy', '/privacy', 'page', 'Privacy Policy', 'Information about data collection, use, protection, and privacy rights for website visitors and clients', ARRAY['privacy policy', 'data collection', 'data protection', 'privacy rights', 'information security']),
('LSEA | Terms of Use', '/terms', 'page', 'Terms of Use', 'Website terms of use, conditions, user responsibilities, intellectual property, and legal disclaimers', ARRAY['terms of use', 'conditions', 'user responsibilities', 'intellectual property', 'legal disclaimers']);

-- Sitemap
INSERT INTO website_content (page_title, page_url, content_type, heading, description, keywords) VALUES
('LSEA | Sitemap', '/sitemap', 'page', 'Site Map', 'Complete navigation structure of the website including all pages, services, and resources', ARRAY['sitemap', 'navigation', 'website structure', 'pages', 'services', 'resources']);

-- Dashboard and Employee Access
INSERT INTO website_content (page_title, page_url, content_type, heading, description, keywords) VALUES
('LSEA | Dashboard', '/dashboard', 'page', 'Employee Dashboard', 'Internal employee portal for project management, file sharing, and administrative functions', ARRAY['dashboard', 'employee portal', 'project management', 'file sharing', 'administrative']),
('LSEA | Employee Access', '/employee-access', 'page', 'Employee Access', 'Secure login portal for employees to access internal systems and resources', ARRAY['employee access', 'secure login', 'internal systems', 'employee resources']);

-- Common search terms and phrases
INSERT INTO website_content (page_title, page_url, content_type, heading, description, keywords) VALUES
('LSEA | Search Content', '/', 'search', 'Common Terms', 'engineer, engineering, structural, civil, environmental, consulting, design, construction, Louisiana, New Orleans, Baton Rouge, Lafayette', ARRAY['engineer', 'engineering', 'structural', 'civil', 'environmental', 'consulting', 'design', 'construction', 'Louisiana', 'New Orleans', 'Baton Rouge', 'Lafayette']),
('LSEA | Search Content', '/', 'search', 'Services Keywords', 'building, foundation, seismic, drainage, utilities, permitting, remediation, project management, quality control, soil analysis', ARRAY['building', 'foundation', 'seismic', 'drainage', 'utilities', 'permitting', 'remediation', 'project management', 'quality control', 'soil analysis']),
('LSEA | Search Content', '/', 'search', 'Contact Keywords', 'phone, email, address, contact, location, office, hours, emergency, support, information', ARRAY['phone', 'email', 'address', 'contact', 'location', 'office', 'hours', 'emergency', 'support', 'information']),
('LSEA | Search Content', '/', 'search', 'Industry Keywords', 'commercial, residential, industrial, infrastructure, healthcare, education, government, energy, petrochemical, transportation', ARRAY['commercial', 'residential', 'industrial', 'infrastructure', 'healthcare', 'education', 'government', 'energy', 'petrochemical', 'transportation']);