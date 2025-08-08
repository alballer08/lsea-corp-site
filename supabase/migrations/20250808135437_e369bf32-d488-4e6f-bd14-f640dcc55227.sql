-- Update website_content page_url to deep-link to specific Portfolio projects and Service detail pages
-- This ensures search results navigate to the exact page instead of the overview

BEGIN;

-- Services deep links
UPDATE public.website_content SET page_url = '/services/1' WHERE page_title = 'Services' AND heading = 'Bridge Inspection';
UPDATE public.website_content SET page_url = '/services/2' WHERE page_title = 'Services' AND heading = 'Bridge Design and Rehabilitation';
UPDATE public.website_content SET page_url = '/services/3' WHERE page_title = 'Services' AND heading = 'Building Assessment';
UPDATE public.website_content SET page_url = '/services/4' WHERE page_title = 'Services' AND heading = 'Building Design and Rehabilitation';
UPDATE public.website_content SET page_url = '/services/5' WHERE page_title = 'Services' AND heading = 'Architecture';
UPDATE public.website_content SET page_url = '/services/6' WHERE page_title = 'Services' AND heading = 'MEP Engineering';
UPDATE public.website_content SET page_url = '/services/7' WHERE page_title = 'Services' AND heading = 'Site and Highway Engineering';
UPDATE public.website_content SET page_url = '/services/8' WHERE page_title = 'Services' AND heading = 'Land Surveying';
UPDATE public.website_content SET page_url = '/services/9' WHERE page_title = 'Services' AND heading = 'Structural Assessment and Design';
UPDATE public.website_content SET page_url = '/services/10' WHERE page_title = 'Services' AND heading = 'Traffic Engineering';

-- Portfolio deep links (match by heading/title)
UPDATE public.website_content SET page_url = '/portfolio/1' WHERE page_title = 'Portfolio' AND heading = 'Overhead Sign Inspections (2016)';
UPDATE public.website_content SET page_url = '/portfolio/2' WHERE page_title = 'Portfolio' AND heading = 'Passaic County Bridge Inspections (2012-2013)';
UPDATE public.website_content SET page_url = '/portfolio/3' WHERE page_title = 'Portfolio' AND heading = 'Inspection and Rating of On and Off State Bridges (2010-2012)';
UPDATE public.website_content SET page_url = '/portfolio/4' WHERE page_title = 'Portfolio' AND heading = 'Cantilever & Overhead Sign Structure Inspection (2011)';
UPDATE public.website_content SET page_url = '/portfolio/5' WHERE page_title = 'Portfolio' AND heading = 'Morris County Bridges - Biennial Inspections (2007)';
UPDATE public.website_content SET page_url = '/portfolio/6' WHERE page_title = 'Portfolio' AND heading = 'Special Inspection of 7 FCM Bridges (2007)';
UPDATE public.website_content SET page_url = '/portfolio/7' WHERE page_title = 'Portfolio' AND heading = 'NJTA – GSP North and South (2005, 2008, 2009, 2017, and 2018)';
UPDATE public.website_content SET page_url = '/portfolio/8' WHERE page_title = 'Portfolio' AND heading = 'NJTA – Microwave Tower Inspection (2014 and 2017)';
UPDATE public.website_content SET page_url = '/portfolio/9' WHERE page_title = 'Portfolio' AND heading = 'NJTA – GSP Sign Structures and Culverts Inspection (2010)';
UPDATE public.website_content SET page_url = '/portfolio/10' WHERE page_title = 'Portfolio' AND heading = 'NJTA – Part A Inspection (2003 to 2015)';
UPDATE public.website_content SET page_url = '/portfolio/11' WHERE page_title = 'Portfolio' AND heading = 'NJTA - Part B Inspection (2007 to 2012)';
UPDATE public.website_content SET page_url = '/portfolio/12' WHERE page_title = 'Portfolio' AND heading = 'NJTA – Part C Inspection (2006 to 2012 & 2014)';
UPDATE public.website_content SET page_url = '/portfolio/13' WHERE page_title = 'Portfolio' AND heading = 'NJTA - Part D Inspection (2005 and 2009)';
UPDATE public.website_content SET page_url = '/portfolio/14' WHERE page_title = 'Portfolio' AND heading = 'DRPA/PATCO Threat & Vulnerability Assessment (2016)';
UPDATE public.website_content SET page_url = '/portfolio/15' WHERE page_title = 'Portfolio' AND heading = 'Structural Hardening Countermeasures (2004 - 2006)';
UPDATE public.website_content SET page_url = '/portfolio/16' WHERE page_title = 'Portfolio' AND heading = 'DRPA/PATCO Facility Replacement Study (2011 – 2012)';
UPDATE public.website_content SET page_url = '/portfolio/17' WHERE page_title = 'Portfolio' AND heading = 'PATCO Bridges Biennial Inspection (2010 & 2014)';
UPDATE public.website_content SET page_url = '/portfolio/18' WHERE page_title = 'Portfolio' AND heading = 'PATCO Safety Review (2003)';
UPDATE public.website_content SET page_url = '/portfolio/19' WHERE page_title = 'Portfolio' AND heading = 'Walt Whitman Bridge Biennial Inspection (2008, 2010 and 2012)';
UPDATE public.website_content SET page_url = '/portfolio/20' WHERE page_title = 'Portfolio' AND heading = 'Benjamin Franklin Bridge Biennial Inspection (2004, 2006, 2008 & 2010)';
UPDATE public.website_content SET page_url = '/portfolio/21' WHERE page_title = 'Portfolio' AND heading = 'JFK Condition Survey of WTC Memorial (2017)';
UPDATE public.website_content SET page_url = '/portfolio/22' WHERE page_title = 'Portfolio' AND heading = 'Condition Survey of Buildings at Elizabeth Marine Terminal (2015)';
UPDATE public.website_content SET page_url = '/portfolio/23' WHERE page_title = 'Portfolio' AND heading = 'GWB Building and Miscellaneous Structures Condition Survey (2014)';
UPDATE public.website_content SET page_url = '/portfolio/24' WHERE page_title = 'Portfolio' AND heading = 'Howland Hook/Port Ivory Buildings Condition Survey (2013)';
UPDATE public.website_content SET page_url = '/portfolio/25' WHERE page_title = 'Portfolio' AND heading = 'Essex County Resources Recovery facility Condition Survey (2012)';
UPDATE public.website_content SET page_url = '/portfolio/26' WHERE page_title = 'Portfolio' AND heading = 'Condition Survey of Buildings in Brooklyn Pier, Brooklyn, New York (2011)';
UPDATE public.website_content SET page_url = '/portfolio/27' WHERE page_title = 'Portfolio' AND heading = 'Teterboro Airport Condition Inspection (2011)';
UPDATE public.website_content SET page_url = '/portfolio/28' WHERE page_title = 'Portfolio' AND heading = 'Undergrade Bridge Inspection, Groups: B, E and F (2015-2016)';
UPDATE public.website_content SET page_url = '/portfolio/29' WHERE page_title = 'Portfolio' AND heading = 'Rehabilitation of Raritan Drawbridge (2015)';
UPDATE public.website_content SET page_url = '/portfolio/30' WHERE page_title = 'Portfolio' AND heading = 'Undergrade Bridge Inspection (2012-2013)';
UPDATE public.website_content SET page_url = '/portfolio/31' WHERE page_title = 'Portfolio' AND heading = 'Aberdeen-Matawan Park & Ride Parking Study (2007)';
UPDATE public.website_content SET page_url = '/portfolio/32' WHERE page_title = 'Portfolio' AND heading = 'Undergrade Bridge Inspection (2009)';
UPDATE public.website_content SET page_url = '/portfolio/33' WHERE page_title = 'Portfolio' AND heading = 'NJ TRANSIT Newark Subway & PATCO Line Safety Review (2003)';

COMMIT;