
import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null);

  useEffect(() => {
    document.title = "LSEA | Project Details";
    setIsVisible(true);
  }, []);

  const projects = [
    {
      id: '1',
      title: 'Overhead Sign Inspections (2016)',
      content: [
        'LSEA provided sign inspection services to the New Jersey Department of Transportation (NJDOT) for 106 state-owned overhead sign structures located along various major routes throughout the state. These inspections were part of a statewide effort to ensure the safety, stability, and longevity of critical roadway signage.',
        'Our team of engineers conducted detailed site visits and prepared comprehensive reports for each sign structure. These reports included observations on overall condition, structural components, and any visible damage or deterioration. As part of the process, LSEA also performed Pontis evaluations to help prioritize maintenance based on condition ratings and structural reliability.',
        'In addition to visual inspections, LSEA performed ultrasonic testing of anchor bolts on all 106 structures. This non-destructive method allowed us to assess the internal integrity of the bolts anchoring each sign to its foundation. These tests added a vital layer of assurance, helping NJDOT make informed decisions regarding maintenance and structural performance.'
      ],
      image: 'https://images.unsplash.com/photo-1433832597046-4f10e10ac764?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '2',
      title: 'Passaic County Bridge Inspections (2012-2013)',
      content: [
        'LSEA performed inspections and calculated load ratings for 55 bridges owned by Passaic County as part of a two-cycle agreement. This effort was aimed at evaluating the structural integrity and safety of the county’s bridge inventory through a standardized and comprehensive process.',
        'For each bridge, our engineers conducted detailed Pontis evaluations, which included assessing structural components, identifying deficiencies, and assigning condition ratings. These evaluations were documented in thorough reports that outlined our findings and provided recommendations for maintenance and repair.',
        'As part of the project, LSEA also coordinated with the North Jersey District Water Supply Commission to inspect the West Brooke Bridge, which spans the Wanaque Reservoir. Due to the sensitive nature of the location, the inspection required careful planning and collaboration to ensure access and compliance with water supply protection protocols.'
      ],
      image: 'https://images.unsplash.com/photo-1497604401993-f2e922e5cb0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '3',
      title: 'Inspection and Rating of On and Off State Bridges (2010-2012)',
      content: [
        'LSEA conducted routine biennial inspections, bridge condition evaluations, and Pontis evaluations for 44 on-system and 2 off-system state bridges. These inspections were carried out in accordance with state and federal standards to assess the structural health and ensure the continued safety of each structure.',
        'Two years after the initial inspections, LSEA performed a second-cycle follow-up to verify the accuracy and consistency of the original findings. This follow-up helped identify any changes in condition, confirmed the effectiveness of recommended maintenance actions, and supported long-term asset management planning.',
        'As part of the overall assessment, our engineers also completed load rating calculations for all 46 bridges. These calculations were essential to determine whether the bridges met required safety thresholds and to establish appropriate load limits for ongoing use.'
      ],
      image: 'https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '4',
      title: 'Cantilever & Overhead Sign Structure Inspection (2011)',
      content: [
        'LSEA evaluated the condition and fatigue stresses of 137 cantilever and overhead sign structures for the New Jersey Department of Transportation (NJDOT). These signs, critical for driver information and roadway safety, required thorough inspection to ensure structural soundness and long-term reliability.',
        'As part of the project, our engineers conducted detailed assessments to determine whether each structure met the core responsibilities of safety inspections. These responsibilities included: (a) maintaining public safety, (b) protecting public investment, (c) supporting the federal inspection program, (d) producing accurate records, and (e) fulfilling legal requirements.',
        'By verifying compliance with these standards, LSEA helped NJDOT maintain a safe and efficient roadway network. Our findings also supported the agency’s asset management efforts by providing accurate, up-to-date documentation of each sign structure’s condition.'
      ],
      image: 'https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '5',
      title: 'Morris County Bridges - Biennial Inspections (2007)',
      content: [
        'LSEA performed biennial inspections of 42 bridges in Morris County for the New Jersey Department of Transportation (NJDOT). These structures included a mix of multi-stringer steel bridges, reinforced concrete beams, prestressed concrete beams, and culverts located under several state highways.',
        'As part of the inspection process, our engineers conducted comprehensive bridge condition evaluations to assess the structural health and identify any deterioration or maintenance needs. Each bridge was carefully examined to ensure compliance with safety standards and to support long-term infrastructure planning.',
        'In addition, Pontis evaluations were completed for all 42 structures. These evaluations provided standardized condition ratings and data-driven insights, enabling NJDOT to prioritize repairs, manage risk, and plan effectively for future rehabilitation efforts.'
      ],
      image: 'https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '6',
      title: 'Special Inspection of 7 FCM Bridges (2007)',
      content: [
        'LSEA assisted the NJDOT Bureau of Structural Evaluation in inspecting seven bridge structures containing Fracture Critical Members (FCMs). These types of structures require detailed inspection due to the potential for critical failure without redundancy in their design.',
        'As part of the project, LSEA provided professional engineering inspection services for all seven bridges. Our work included the preparation of plans, specifications, and cost estimates related to potential bridge replacements, ensuring that any recommended actions were well-documented and ready for implementation.',
        'The scope also involved the development of local and area-wide detour plans to accommodate future construction activities, as well as conducting traffic engineering studies to evaluate the impact on surrounding roadways. This comprehensive approach supported NJDOT’s planning and decision-making for the safe and efficient replacement of the FCM structures.'
      ],
      image: 'https://images.unsplash.com/photo-1473177104440-ffee2f376098?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '7',
      title: 'NJTA – GSP North and South (2005, 2008, 2009, 2017, and 2018)',
      content: [
        'In 2017 and 2018, the New Jersey Turnpike Authority (NJTA) selected LSEA as the prime consultant to inspect over 250 bridges along the Garden State Parkway. This large-scale project involved a comprehensive evaluation of the parkway’s bridge infrastructure to ensure public safety and long-term structural integrity.',
        'LSEA’s team of engineers conducted thorough inspections of each bridge, carefully assessing structural components, identifying any deterioration, and evaluating overall safety. Each inspection was completed with meticulous attention to detail to ensure accurate findings.',
        'Following the inspections, LSEA prepared comprehensive inspection reports for every bridge, documenting conditions, highlighting areas requiring attention, and providing actionable recommendations for maintenance and repairs. These reports helped NJTA prioritize future bridge management and maintenance efforts.'
      ],
      image: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '8',
      title: 'NJTA – Microwave Tower Inspection (2014, 2017)',
      content: [
        'In 2014, LSEA inspected 15 cell towers, followed by an additional 24 towers in 2017. These inspections were conducted to assess the structural integrity and safety of the towers, ensuring they met industry standards.',
        'Our engineers thoroughly evaluated each tower, documenting their findings and identifying any areas of concern. This process included checking for signs of wear, corrosion, or other structural issues that could compromise the towers’ performance and safety.',
        'Following the inspections, LSEA provided detailed reports for each tower, which included a comprehensive outline of the findings and recommendations for necessary repairs. Additionally, we included cost estimates for each repair to help the client prioritize and budget for the required maintenance.'
      ],
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '9',
      title: 'NJTA – GSP Sign Structures and Culverts Inspection (2010)',
      content: [
        'LSEA conducted inspections and Pontis/BMS evaluations for a total of 140 sign structures and 53 culverts. These evaluations were performed to assess the condition and structural integrity of the assets, ensuring they met safety standards.',
        'Our team utilized the InspectTech software to streamline the inspection process and document findings efficiently. This allowed for precise data collection and consistent reporting across all assets.',
        'In addition to the inspections, LSEA assisted in report writing for each asset, providing detailed documentation of the evaluation results. The reports included condition assessments and recommendations for maintenance or repairs, supporting long-term asset management.'
      ],
      image: 'https://images.unsplash.com/photo-1516192518150-0d8fee5425e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '10',
      title: 'NJTA – Part A Inspection (2003 to 2015)',
      content: [
        'LSEA conducted annual and in-depth inspections of 195 bridges across all districts for the New Jersey Turnpike Authority (NJTA). These bridges varied in design, ranging from single-span to multi-span structures, requiring a comprehensive evaluation of each one to ensure their structural integrity.',
        'The inspection process also included seven long-span fracture-critical (FCM) structures, which are particularly sensitive to failure due to the absence of redundancy in their design. Among these were two Laderman Bridge sign structures and several FCM box girder inspections, which required specialized assessment techniques.',
        'Our team meticulously documented the condition of each structure and provided detailed findings in comprehensive reports. These reports included recommendations for repairs, safety improvements, and long-term maintenance strategies to help NJTA prioritize necessary actions.'
      ],
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '11',
      title: 'NJTA - Part B Inspection (2007 to 2012)',
      content: [
        'LSEA conducted inspections of 220 bridges across districts 1 through 8, assessing the condition and structural integrity of each asset. These inspections were part of a comprehensive effort to ensure the safety and longevity of the bridge network.',
        'Our engineers used the InspectTech software to streamline the data collection process, ensuring accurate and consistent documentation of findings across all bridges. This technology helped enhance the efficiency and precision of our inspections.',
        'In addition to the inspections, LSEA assisted in report writing for all 220 assets, providing detailed condition assessments and recommendations for any necessary repairs or maintenance. The reports supported effective decision-making for bridge management and future planning.'
      ],
      image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '12',
      title: 'NJTA – Part C Inspection (2006 to 2012 & 2014)',
      content: [
        'As the prime consultant, LSEA performed inspections of 13 bridges along the I-95 extension, 75 culverts across all districts, and over 430 sign structures for the New Jersey Turnpike Authority (NJTA). These inspections were crucial for assessing the condition and safety of key infrastructure along the route.',
        'Using InspectTech software, LSEA efficiently collected and documented data for each asset, ensuring that all findings were accurately recorded and easily accessible for analysis. This software streamlined the inspection process and enhanced the quality of the data collected.',
        'Following the inspections, LSEA prepared detailed reports for all inspected assets. These reports included comprehensive condition assessments, along with recommendations for repairs and maintenance, providing NJTA with valuable insights for future planning and asset management.'
      ],
      image: 'https://images.unsplash.com/photo-1485518994577-6cd6324ade8e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '13',
      title: 'NJTA - Part D Inspection (2005 and 2009)',
      content: [
        'LSEA conducted thorough inspections of 5 bridges located within the I-95 Extension, as well as 42 culverts across districts 4, 5, and 8. The inspections were aimed at assessing the overall condition, structural integrity, and safety of these vital assets, ensuring they met current standards and identifying any potential maintenance needs.',
        'Our engineers carefully examined each bridge and culvert, looking for signs of wear, deterioration, or any structural issues that could affect their performance. Detailed assessments were made for each structure to prioritize necessary repairs or improvements. This process provided essential data for effective asset management and long-term infrastructure planning.'
      ],
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '14',
      title: 'DRPA/PATCO Threat & Vulnerability Assessment (2016)',
      content: [
        'LSEA conducted a comprehensive threat and vulnerability assessment for the properties owned and operated by the Delaware River Port Authority (DRPA) - PATCO. The project employed scenario-based approaches to evaluate the potential risks and expected losses from a range of hazard events, including natural disasters, human-initiated incidents, and technological or infrastructure failures.',
        'Our team meticulously analyzed each scenario, considering the likelihood and impact of each event, and identified vulnerabilities within the DRPA-PATCO system. This assessment helped to determine critical areas where mitigation strategies could be implemented to minimize damage, protect assets, and ensure the continued safety and operation of the authority’s facilities.'
      ],
      image: 'https://images.unsplash.com/photo-1504016343244-4b17a2b0b0a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '15',
      title: 'Structural Hardening Countermeasures (2004 - 2006)',
      content: [
        'As a sub-consultant, LSEA performed a structural hardening assessment on the Benjamin Franklin Bridge and the Walt Whitman Bridge. Our engineers conducted detailed field inspections using a variety of access methods, including free climbing, man lifts, bucket trucks, and MPT (Mobile Platform Technology) vehicles, to thoroughly examine all structural components and assess potential vulnerabilities.',
        'The project’s primary goal was to develop and recommend effective protective measures for the Benjamin Franklin, Walt Whitman, and Commodore Barry Bridges. In addition to the inspections, LSEA provided the final design for the necessary structural hardening improvements, ensuring that these critical bridges would be better equipped to withstand external threats and environmental stressors, thereby enhancing their long-term durability and safety.'
      ],
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '16',
      title: 'DRPA/PATCO Facility Replacement Study (2011 – 2012)',
      content: [
        'As a sub-consultant, LSEA assisted the Delaware River Port Authority (DRPA) in conducting asset value studies to estimate potential replacement costs for critical infrastructure in the event of catastrophic incidents. Our role involved evaluating the current value of key assets and determining the financial impact of various hazard scenarios, such as natural disasters or unforeseen failures. ',
        'This analysis provided DRPA with a clearer understanding of the potential costs involved in replacing or repairing essential assets, allowing for more informed decision-making regarding risk management, insurance coverage, and emergency preparedness. The findings from these studies helped DRPA plan for the long-term financial sustainability and resilience of its infrastructure portfolio.'
      ],
      image: 'https://images.unsplash.com/photo-1565191999001-551c187427bb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '17',
      title: 'PATCO Bridges Biennial Inspection (2010 & 2014)',
      content: [
        'As a sub-consultant, LSEA conducted the biennial inspection of the PATCO line bridges that span between Philadelphia, PA and Camden, NJ. Our engineers performed detailed assessments of the structural integrity and overall condition of each bridge along the line, examining key components for signs of wear, deterioration, or potential safety hazards.',
        'The inspections were carried out in accordance with industry standards to ensure the bridges continued to meet safety requirements and function efficiently. The findings from these inspections helped inform maintenance planning, providing valuable insights for any necessary repairs or upgrades to sustain the reliability and safety of the PATCO transit system.'
      ],
      image: 'https://images.unsplash.com/photo-1519227355453-8f982e425321?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '18',
      title: 'PATCO Safety Review (2003)',
      content: [
        'As a sub-consultant, LSEA provided safety review services for the State Oversight Agency by performing an on-site review of the implementation of the System Safety Program. The primary objective was to assess whether the System Safety & Security programs were being effectively executed to meet both Federal and State Safety Standards.',
        'Our team conducted a thorough evaluation of safety protocols, identifying any gaps or areas for improvement in the system’s implementation. This review helped ensure that all safety measures were not only in place but functioning as intended, ultimately supporting compliance with regulatory requirements and enhancing overall safety within the system.'
      ],
      image: 'https://images.unsplash.com/photo-1548610325-7c2e2056b6c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '19',
      title: 'Walt Whitman Bridge Biennial Inspection (2008, 2010 and 2012)',
      content: [
        'As a sub-consultant, LSEA conducted a biennial inspection of the Walt Whitman Bridge to assess its structural integrity and ensure its continued safety. The inspection focused on critical areas of the bridge, particularly fracture-critical members, which are essential for the bridge\'s stability, as well as collision-damaged members and pin hanger connections that are crucial to the overall load-bearing capacity of the structure.',
        'Our team performed non-destructive testing (NDT) on these key components to identify any hidden cracks, fatigue, or other issues that could affect the bridge’s safety. This approach allowed us to assess the structural health without causing any damage to the materials. The results of the inspection and testing were carefully documented and used to inform necessary maintenance and repair actions to prolong the life of the bridge and ensure its safe operation.'
      ],
      image: 'https://images.unsplash.com/photo-1470197713549-4b0c11b7e78a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '20',
      title: 'Benjamin Franklin Bridge Biennial Inspection (2004, 2006, 2008 & 2010)',
      content: [
        'As a sub-consultant, LSEA conducted a biennial inspection of the Benjamin Franklin Bridge, a critical structure that supports a high-speed PATCO rail line running along each fascia. This iconic bridge is one of four major bridges owned, operated, and maintained by the Delaware River Port Authority (DRPA), serving as a vital transportation link between Philadelphia, PA and Camden, NJ.',
        'The inspection focused on assessing the overall structural integrity of the bridge, including the rail line components and fascia areas, to ensure safety and operational efficiency. The findings from the inspection were documented and provided valuable insights for maintaining the bridge’s long-term performance and safety, supporting DRPA’s ongoing efforts to manage and preserve its infrastructure assets.'
      ],
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '21',
      title: 'JFK Condition Survey of WTC Memorial (2017)',
      content: [
        'LSEA conducted condition survey inspections of the World Trade Center (WTC) memorial site, encompassing both of the iconic reflection pools, the WTC Memorial Building, and the tunnels beneath the site. These inspections were integral to assessing the overall structural and environmental conditions of the site’s key components, ensuring that each element met the highest standards for safety and preservation.',
        'Our engineers worked closely with the Port Authority of New York and New Jersey (PANYNJ) throughout the process to ensure thoroughness and accuracy in the condition survey reports. This collaboration allowed us to address specific concerns and verify that the findings were aligned with PANYNJ’s requirements, helping to inform any necessary repairs, ongoing maintenance, and long-term preservation strategies for this historically significant site.'
      ],
      image: 'https://images.unsplash.com/photo-1580836165012-e2f0f02c4e11?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '22',
      title: 'Condition Survey of Buildings at Elizabeth Marine Terminal (2015)',
      content: [
        'LSEA conducted condition inspections of 4 buildings owned by the Port Authority of New York and New Jersey (PANYNJ) in Port Ivory, Staten Island. The inspections were comprehensive, covering all aspects of the buildings, including exterior elevations, interior floor structural framings and walls, and roof conditions, to ensure the structural integrity and safety of the facilities.',
        'During the inspections, LSEA’s engineers identified and documented any deficiencies or potential hazards. Detailed reports were generated, and recommendations for immediate action were made to address any unsafe conditions found during the evaluation. These recommendations helped prioritize repairs and maintenance, ensuring the buildings’ continued safe operation and longevity.'
      ],
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '23',
      title: 'GWB Building and Miscellaneous Structures Condition Survey (2014)',
      content: [
        'LSEA conducted condition inspections of 14 buildings owned by the Port Authority of New York and New Jersey (PANYNJ) near the George Washington Bridge (GWB). These buildings included a variety of facilities such as the administrative building, upper and lower toll booths, PIP toll booths, paint storage building, salt dome, ticket center, hopper room, and the PIP police building.'
      ],
      image: 'https://images.unsplash.com/photo-1555664824-0d4b0c6d6c1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '24',
      title: 'Howland Hook/Port Ivory Buildings Condition Survey (2013)',
      content: [
        'LSEA conducted condition inspections of several buildings owned by the Port Authority of New York and New Jersey (PANYNJ) in Port Ivory, Staten Island. The comprehensive inspections covered all aspects of each building, including the exterior elevations, interior floor structural framings and walls, and roof conditions, ensuring a thorough evaluation of the structures.',
        'Following the inspections, all findings were meticulously documented, and recommendations for immediate action were provided to address any unsafe conditions identified. These recommendations were aimed at mitigating potential risks and ensuring the buildings\' safety, guiding the necessary repairs or improvements for long-term structural integrity.',
      ],
      image: 'https://images.unsplash.com/photo-1519365842728-3ae8c5cbe6c1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '25',
      title: 'Essex County Resources Recovery facility Condition Survey (2012)',
      content: [
        'LSEA provided the structural building condition survey for the Essex County Resource Recovery facility. LSEA reviewed previous inspection reports of the site, and compared them with the current field conditions. LSEA presented the field findings and wrote detailed reports in accordance with the format and structure requirements set by PANYNJ.'
      ],
      image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '26',
      title: 'Condition Survey of Buildings in Brooklyn Pier, Brooklyn, New York (2011)',
      content: [
        'LSEA provided structural building condition surveys for 5 warehouse buildings located in Brooklyn Pier owned by Port Authority of NY & NJ. The scope of work of these thorough building inspections included: all exterior elevations, interior floor structural framings and walls, and roof conditions. All inspection information was reported and recommendations of immediate action for unsafe conditions were made.'
      ],
      image: 'https://images.unsplash.com/photo-1481437156560-3205f6a55735?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '27',
      title: 'Teterboro Airport Condition Inspection (2011)',
      content: [
        'Designated as a "reliever" airport, Teterboro’s focus is on removing the smaller and slower aircraft from the regional air traffic that would cause major congestion at the Port Authority\'s commercial airports. LSEA performed condition inspection on 7 buildings within Teterboro Airport, including office buildings, hangers, the tower, and the museum.'
      ],
      image: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '28',
      title: 'Undergrade Bridge Inspection, Groups: B, E and F (2015-2016)',
      content: [
        'LSEA provided a team of three engineers for in-depth, hands-on underground bridge inspections across three separate projects. The team conducted thorough assessments, inspecting all structural components and identifying any potential issues that could affect the integrity of the bridges.',
        'In addition to the physical inspections, our engineers performed live load capacity calculations and load ratings based on the AREMA and NJ TRANSIT specifications and standards. These calculations were critical for determining the bridges\' ability to safely accommodate traffic and ensure compliance with established safety regulations. The findings and recommendations from the inspections were crucial in guiding maintenance and repair efforts to preserve the bridges\' long-term safety and functionality.'
      ],
      image: 'https://images.unsplash.com/photo-1473091534298-04dcbce3278c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '29',
      title: 'Rehabilitation of Raritan Drawbridge (2015)',
      content: [
        'LSEA was involved in the rehabilitation of the Raritan Drawbridge, which was severely damaged during Hurricane Sandy. The bridge is located at the North Jersey Coastal Line between Perth Amboy and South Amboy. This project involved the upgrade of the mechanical, electrical, and structural systems of the swing span.'
      ],
      image: 'https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '30',
      title: 'Undergrade Bridge Inspection (2012-2013)',
      content: [
        'LSEA, as the Prime Consultant, performed inspections and structural rating analyses of 61 bridges carrying New Jersey Transit rail lines. The inspections and ratings were performed in accordance with the A.R.E.A. Manual of Railway Engineering and the specific requirements of N.J. Transit.'
      ],
      image: 'https://images.unsplash.com/photo-1519167758481-83f29c04446c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '31',
      title: 'Aberdeen-Matawan Park & Ride Parking Study (2007)',
      content: [
        'LSEA was involved in the planning and study of the parking lot for the Aberdeen-Matawan station for NJ TRANSIT. The focus of the study was to assess the current capacity and determine how much additional parking-generated traffic could be accommodated in the station area.',
        'Our team evaluated the existing and planned roadway systems surrounding the station to determine their ability to handle increased traffic from additional parking. The study provided crucial insights into potential traffic flow improvements and helped inform decisions regarding infrastructure upgrades, ensuring that the station\'s capacity aligns with future commuter needs and minimizing congestion in the area.'
      ],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '32',
      title: 'Undergrade Bridge Inspection (2009)',
      content: [
        'LSEA provided a team of 3 engineers, which performed inspections and structural rating analyses of two sets of bridges. These sets contained a total of 85 undergrade bridges. Our engineers also calculated live load capacities and ratings based on the AREMA and NJ TRANSIT specifications and standards.'
      ],
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    },
    {
      id: '33',
      title: 'NJ TRANSIT Newark Subway & PATCO Line Safety Review (2003)',
      content: [
        'LSEA, as a sub-consultant, provided safety review services for the State Oversight Agency, through performing an on-site review of the implementation of the System Safety Program. The purpose was to verify the successful implementation of the System Safety & Security programs, inorder to complying with Federal and State Safety Standards.'
      ],
      image: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'
    }
  ];

  const project = projects.find(p => p.id === id) || projects[0];
  const currentIndex = projects.findIndex(p => p.id === id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : projects[projects.length - 1];
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : projects[0];

  const handleNavigation = (projectId: string, direction: 'left' | 'right') => {
    setSlideDirection(direction);
    setIsTransitioning(true);
    setTimeout(() => {
      navigate(`/portfolio/${projectId}`);
      window.scrollTo(0, 0);
      setTimeout(() => {
        setIsTransitioning(false);
        setSlideDirection(null);
      }, 100);
    }, 300);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[65vh] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className={`w-full h-full object-cover transition-all duration-500 ${
            slideDirection === 'left' 
              ? '-translate-x-full opacity-0' 
              : slideDirection === 'right' 
                ? 'translate-x-full opacity-0' 
                : 'translate-x-0 opacity-100'
          }`}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="absolute bottom-10 left-10">
          <h1 className={`font-montserrat text-4xl md:text-6xl font-bold text-white transition-all duration-1000 ${
            isVisible && !isTransitioning ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {project.title}
          </h1>
        </div>
        
        {/* Navigation Arrows */}
        <button
          onClick={() => handleNavigation(prevProject.id, 'left')}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg group"
        >
          <ChevronLeft className="w-6 h-6 transition-all duration-300 group-hover:-translate-x-1 group-active:scale-90" />
        </button>
        <button
          onClick={() => handleNavigation(nextProject.id, 'right')}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg group"
        >
          <ChevronRight className="w-6 h-6 transition-all duration-300 group-hover:translate-x-1 group-active:scale-90" />
        </button>
      </section>

      {/* Project Details */}
      <section className={`py-16 bg-white transition-all duration-1000 ${isVisible ? 'opacity-100 animate-fade-in' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-montserrat text-3xl font-bold text-gray-900">
                Project Overview
              </h2>
              <div className="space-y-4">
                {project.content.map((paragraph, index) => (
                  <p key={index} className="font-arial text-lg text-gray-600 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              <Link
                to="/contact"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-arial font-semibold hover:bg-blue-700 transition-all duration-500"
              >
                Start Your Project
              </Link>
            </div>
            <div className="relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
