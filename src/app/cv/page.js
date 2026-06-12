'use client'

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeftIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';

// Importing data from the about page
import { 
  personalInfo, 
  contactInfo, 
  skillsData, 
  toolsData,
  experienceData, 
  educationData 
} from '../about/page';

export default function CVPage() {
  // Auto-trigger print dialog when Print CV button is clicked
  const handlePrint = () => {
    window.print();
  };

  // Generate PDF download from the current page
  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <>
      {/* Print-only styles */}
      <style jsx global>{`
        @page {
          size: A4;
          margin: 15mm;
        }
        
        @media print {
          html, body {
            width: 210mm;
            height: 297mm;
            margin: 0;
            padding: 0;
            background-color: white !important;
            color: black !important;
            font-size: 12pt;
          }
          
          .print-only { display: block !important; }
          .no-print { display: none !important; }
          
          .cv-container {
            width: 100%;
            background-color: white !important;
            color: black !important;
            border: none !important;
            box-shadow: none !important;
            padding: 0 !important;
            margin: 0 !important;
          }
          
          .cv-header, .cv-section {
            border-color: #ddd !important;
          }
          
          a { color: #3e63dd !important; text-decoration: none !important; }
          
          .skill-bar { background-color: #eee !important; }
          .skill-progress { background-color: #3e63dd !important; }
        }
      `}</style>
      
      <div className="min-h-screen bg-white">
        {/* Navigation Controls - only visible on screen */}
        <div className="fixed top-4 left-4 z-50 no-print flex gap-3">
          <Link
            href="/about"
            className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-800 rounded-md text-sm font-medium shadow-sm hover:bg-gray-300 transition"
          >
            <ArrowLeftIcon className="h-4 w-4" />
            Back to Profile
          </Link>
          
          <button
            onClick={handleDownloadPDF}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium shadow-sm hover:bg-blue-700 transition"
          >
            <ArrowDownTrayIcon className="h-4 w-4" />
            Download PDF
          </button>
          
          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-md text-sm font-medium shadow-sm hover:bg-gray-800 transition"
          >
            <Image 
              src="/print-icon.svg" 
              alt="Print" 
              width={16} 
              height={16}
              className="text-white"
            />
            Print
          </button>
        </div>
        
        {/* CV Content */}
        <div className="cv-container max-w-4xl mx-auto p-8 bg-white shadow-md print:shadow-none">
          {/* Header */}
          <div className="cv-header mb-6 pb-6 border-b border-gray-200">
            <h1 className="text-3xl font-bold mb-1 text-gray-900">{personalInfo.name}</h1>
            <p className="text-xl text-gray-600 mb-3">{personalInfo.title}</p>
            
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center">
                <span className="font-medium">Email: </span>
                <a href={contactInfo.email.href} className="text-blue-600 ml-1">{contactInfo.email.value}</a>
              </div>
              <div className="flex items-center">
                <span className="font-medium">Location: </span>
                <span className="ml-1">{contactInfo.location.value}</span>
              </div>
              <div className="flex items-center">
                <span className="font-medium">LinkedIn: </span>
                <a href={contactInfo.linkedin.href} target="_blank" rel="noopener noreferrer" className="text-blue-600 ml-1">
                  {contactInfo.linkedin.value}
                </a>
              </div>
              <div className="flex items-center">
                <span className="font-medium">GitHub: </span>
                <a href={contactInfo.github.href} target="_blank" rel="noopener noreferrer" className="text-blue-600 ml-1">
                  {contactInfo.github.value}
                </a>
              </div>
            </div>
          </div>
          
          {/* Skills */}
          <div className="cv-section mb-6 pb-6 border-b border-gray-200">
            <h2 className="text-xl font-bold mb-4 text-gray-900">Professional Skills</h2>
            
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-900 mb-3">{skillsData.cloudInfrastructure.title}</h3>
                <div className="space-y-3">
                  {skillsData.cloudInfrastructure.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">{skill.name}</span>
                      </div>
                      <div className="skill-bar h-2 bg-gray-200 rounded-full">
                        <div className="skill-progress h-2 bg-blue-600 rounded-full" style={{width: skill.proficiency}}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-900 mb-3">{skillsData.programmingTools.title}</h3>
                <div className="space-y-3">
                  {skillsData.programmingTools.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">{skill.name}</span>
                      </div>
                      <div className="skill-bar h-2 bg-gray-200 rounded-full">
                        <div className="skill-progress h-2 bg-blue-600 rounded-full" style={{width: skill.proficiency}}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Tools */}
          <div className="cv-section mb-6 pb-6 border-b border-gray-200">
            <h2 className="text-xl font-bold mb-4 text-gray-900">Tools & Technologies</h2>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 print:grid-cols-3">
              {toolsData.map((tool) => (
                <div key={tool.name} className="flex items-center gap-2 p-1">
                  <span className="text-gray-700 text-sm">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Experience */}
          <div className="cv-section mb-6 pb-6 border-b border-gray-200">
            <h2 className="text-xl font-bold mb-4 text-gray-900">Professional Experience</h2>
            
            {experienceData.map((experience, index) => (
              <div key={index} className="mb-5">
                <div className="flex flex-col sm:flex-row justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <img src={experience.logo} alt={`${experience.company} logo`} className="w-5 h-5 object-contain" />
                    <h3 className="font-medium text-gray-900">{experience.title}</h3>
                  </div>
                  <span className="text-gray-600 text-sm">{experience.period}</span>
                </div>
                <p className="text-gray-700 mb-2 ml-7">{experience.company}</p>
                <ul className="list-disc text-gray-700 pl-5 space-y-1 ml-2">
                  {experience.responsibilities.map((responsibility, i) => (
                    <li key={i}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          {/* Education */}
          <div className="cv-section">
            <h2 className="text-xl font-bold mb-4 text-gray-900">Education</h2>
            
            <div className="flex flex-col sm:flex-row justify-between mb-1">
              <h3 className="font-medium text-gray-900">{educationData.degree}</h3>
              <span className="text-gray-600 text-sm">{educationData.period}</span>
            </div>
            <p className="text-gray-700">{educationData.institution}</p>
          </div>
        </div>
      </div>
    </>
  );
} 