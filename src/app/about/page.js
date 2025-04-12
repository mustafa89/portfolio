'use client'

import { useState } from 'react';
import Navbar from "../components/navbar";
import { Button } from '@headlessui/react';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import Image from 'next/image';

// Since we don't have a real PDF file yet, let's provide a link to a dummy/sample CV
const CV_LINK = 'https://www.resumeviking.com/wp-content/uploads/2019/10/DevOps-Engineer-PDF.pdf';

// Personal Information
export const personalInfo = {
  name: "Mustafa Mujahid",
  title: "Site Reliability Engineer",
};

// Contact Information
export const contactInfo = {
  email: {
    label: "Email",
    value: "mustafa.mujahid@outlook.com",
    href: "mailto:mustafa.mujahid@outlook.com",
    logo: "https://www.svgrepo.com/show/485253/email-opened.svg"
  },
  location: {
    label: "Location",
    value: "Nürnberg, Germany",
    logo: "https://cdn.simpleicons.org/googlemaps"
  },
  linkedin: {
    label: "LinkedIn",
    value: "linkedin.com/in/mustafamujahid",
    href: "https://linkedin.com/in/mustafamujahid",
    logo: "https://www.svgrepo.com/show/448234/linkedin.svg"
  },
  github: {
    label: "GitHub",
    value: "github.com/mustafa89",
    href: "https://github.com/mustafa89",
    logo: "https://www.svgrepo.com/show/353783/github-octocat.svg"
  },
};

// Skills Data
export const skillsData = {
  cloudInfrastructure: {
    title: "Cloud & Infrastructure",
    skills: [
      { 
        name: "AWS", 
        proficiency: "100%",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
      },
      { 
        name: "Kubernetes", 
        proficiency: "90%",
        logo: "https://cdn.simpleicons.org/kubernetes"
      },
      { 
        name: "Docker", 
        proficiency: "90%",
        logo: "https://cdn.simpleicons.org/docker"
      },
      { 
        name: "Terraform", 
        proficiency: "100%",
        logo: "https://cdn.simpleicons.org/terraform"
      },
      { 
        name: "IaC", 
        proficiency: "90%",
        logo: "https://cdn.simpleicons.org/terraform"
      },
      { 
        name: "observability", 
        proficiency: "100%",
        logo: "https://cdn.simpleicons.org/jenkins"
      },
    ],
  },
  programmingTools: {
    title: "Programming & Tools",
    skills: [
      { 
        name: "Python", 
        proficiency: "85%",
        logo: "https://www.vectorlogo.zone/logos/python/python-icon.svg"
      },
      { 
        name: "Shell", 
        proficiency: "90%",
        logo: "https://cdn.simpleicons.org/gnubash"
      },
      { 
        name: "JavaScript", 
        proficiency: "55%",
        logo: "https://cdn.simpleicons.org/javascript"
      },
      { 
        name: "CI/CD", 
        proficiency: "100%",
        logo: "https://cdn.simpleicons.org/githubactions"
      },
      { 
        name: "Monitoring", 
        proficiency: "100%",
        logo: "https://cdn.simpleicons.org/prometheus"
      },
      { 
        name: "Automation", 
        proficiency: "90%",
        logo: "https://cdn.simpleicons.org/ansible"
      },
    ],
  },
};

// Tools Data
export const toolsData = [
  { 
    name: "Terraform", 
    logo: "https://cdn.simpleicons.org/terraform"
  },
  { 
    name: "Terragrunt", 
    logo: "https://cdn.simpleicons.org/terraform"
  },
  { 
    name: "ECS Fargate", 
    logo: "https://icon.icepanel.io/AWS/svg/Compute/Fargate.svg"
  },
  { 
    name: "EKS", 
    logo: "https://cdn.simpleicons.org/amazoneks"
  },
  { 
    name: "Ubuntu", 
    logo: "https://cdn.simpleicons.org/ubuntu"
  },
  { 
    name: "CentOS", 
    logo: "https://cdn.simpleicons.org/centos"
  },
  { 
    name: "Bash", 
    logo: "https://cdn.simpleicons.org/gnubash"
  },
  { 
    name: "RDS", 
    logo: "https://cdn.simpleicons.org/amazonrds"
  },
  { 
    name: "PostgreSQL", 
    logo: "https://cdn.simpleicons.org/postgresql"
  },
  { 
    name: "MySQL", 
    logo: "https://cdn.simpleicons.org/mysql"
  },
  { 
    name: "DynamoDB", 
    logo: "https://cdn.simpleicons.org/amazondynamodb"
  },
  { 
    name: "Prometheus", 
    logo: "https://cdn.simpleicons.org/prometheus"
  },
  { 
    name: "Alert Manager", 
    logo: "https://cdn.simpleicons.org/prometheus"
  },
  { 
    name: "Grafana", 
    logo: "https://cdn.simpleicons.org/grafana"
  },
  { 
    name: "Kibana", 
    logo: "https://cdn.simpleicons.org/kibana"
  },
  { 
    name: "OpenSearch", 
    logo: "https://cdn.simpleicons.org/opensearch"
  },
  { 
    name: "OpenTelemetry", 
    logo: "https://icon.icepanel.io/Technology/svg/OpenTelemetry.svg"
  },
  { 
    name: "Python", 
    logo: "https://www.vectorlogo.zone/logos/python/python-icon.svg"
  },
  { 
    name: "JavaScript", 
    logo: "https://cdn.simpleicons.org/javascript"
  },
  { 
    name: "GitLab CI", 
    logo: "https://cdn.simpleicons.org/gitlab"
  },
  { 
    name: "Jenkins", 
    logo: "https://cdn.simpleicons.org/jenkins"
  },
  { 
    name: "Docker", 
    logo: "https://cdn.simpleicons.org/docker"
  },
  { 
    name: "Istio", 
    logo: "https://cdn.simpleicons.org/istio"
  },
  { 
    name: "ArgoCD", 
    logo: "https://cdn.simpleicons.org/argo"
  },
  { 
    name: "Git", 
    logo: "https://cdn.simpleicons.org/git"
  },
  { 
    name: "HAProxy", 
    logo: "https://www.vectorlogo.zone/logos/haproxy/haproxy-icon.svg"
  },
  { 
    name: "PgBouncer", 
    logo: "https://cdn.simpleicons.org/postgresql"
  }
];

// Experience Data
export const experienceData = [
  {
    title: "Sr. Site Reliability Engineer",
    company: "Codility GmbH",
    period: "Dec 2021 - Present",
    logo: "https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_9a5381fe5eb65b99f6e151a7a30f9cf2/codility.png",
    responsibilities: [
      "Leading cloud infrastructure and reliability initiatives",
      "Implementing and managing Kubernetes environments",
      "Designing and maintaining monitoring and observability solutions",
      "Automating deployment pipelines and infrastructure provisioning",
      "Ensuring high availability and scalability of production systems"
    ],
  },
  {
    title: "Sr. DevOps Engineer",
    company: "Tradebyte Software GmbH",
    period: "Jan 2019 - Nov 2021",
    logo: "https://www.tradebyte.com/wp-content/uploads/2023/08/2204_TB_Picture_Mark_Colour_black_RGB_1000x1000_150dpi-01.png",
    responsibilities: [
      "Designed and implemented CI/CD pipelines for microservice architectures",
      "Managed container orchestration using Kubernetes in cloud environments",
      "Implemented infrastructure as code using Terraform and other IaC tools",
      "Established monitoring and alerting systems with Prometheus and Grafana",
      "Optimized cloud resource utilization and reduced operational costs"
    ],
  },
  {
    title: "Member Technical Team",
    company: "Cloud9 Networks FZE",
    period: "Mar 2018 - Oct 2018",
    logo: "https://www.svgrepo.com/show/1328/cloud.svg",
    responsibilities: [
      "Deployed Icinga2 and Icinga2 Web with Elastic Search and Grafana",
      "Implemented multi-tier Icinga2 HA cluster for global distributed monitoring",
      "Designed monitoring solutions for complex infrastructure environments",
      "Integrated monitoring with alerting and visualization tools"
    ],
  },
  {
    title: "Senior Systems Engineer",
    company: "Nayatel Pvt. Ltd",
    period: "Jan 2018 - Mar 2018",
    logo: "https://cdn.brandfetch.io/idS4mN03eM/theme/dark/logo.svg",
    responsibilities: [
      "Completed financial revaluation of department tariffs for VPS, Cloud and Storage",
      "Deployed Nayatel Public Cloud with vendor companies",
      "Evaluated infrastructure costs and optimized resource allocation",
      "Managed cloud service offerings and infrastructure planning"
    ],
  },
  {
    title: "Systems Engineer",
    company: "Nayatel Pvt. Ltd",
    period: "Apr 2017 - Jan 2018",
    logo: "https://cdn.brandfetch.io/idS4mN03eM/theme/dark/logo.svg",
    responsibilities: [
      "Integrated CoprHD with Openstack Kilo",
      "Configured FreeRadius 3.x for 802.1x authentication, EAPOL, and Virtual Server setup",
      "Managed EMC SAN storage commissioning, orchestration and management",
      "Deployed various services including SAMBA, NFS, FreeIPA, OpenLDAP, and MariaDB",
      "Coordinated with vendors for technology deployment and cloud infrastructure improvements"
    ],
  },
  {
    title: "Operations Engineer",
    company: "Nayatel Pvt. Ltd",
    period: "May 2016 - Apr 2017",
    logo: "https://cdn.brandfetch.io/idS4mN03eM/theme/dark/logo.svg",
    responsibilities: [
      "Administered DHCP, DNS, Web Hosting and Mail servers",
      "Implemented MySQL Server replication and performance optimization",
      "Managed primary and secondary Data Center administration",
      "Provided virtualization solutions through virtual private servers",
      "Deployed and administered Canonical OpenStack with Plumgrid ONS SDN plugin"
    ],
  }
];

// Education Data
export const educationData = {
  degree: "Bachelor of Electrical Engineering",
  institution: "Air University, Islamabad",
  period: "2011 - 2015",
};

export default function AboutPage() {
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  
  const downloadCV = () => {
    try {
      // Navigate to the CV page
      window.open('/cv', '_blank');
      
      // Show success toast
      setToastMessage('CV opened in a new tab');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    } catch (error) {
      // Show error toast
      setToastMessage('Could not open CV. Please try again later.');
      setShowToast(true);
      setTimeout(() => setShowToast(false), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] relative overflow-hidden">
      {/* Toast notification */}
      {showToast && (
        <div className="fixed top-24 right-4 z-50 animate-fade-in">
          <div className="bg-[#5E6AD2] text-white px-4 py-3 rounded-md shadow-lg flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>{toastMessage}</span>
          </div>
        </div>
      )}
      
      {/* Background gradient effect */}
      <div className="absolute top-[-30%] right-[-10%] w-[60%] h-[80%] bg-[#5E6AD2] opacity-[0.03] blur-[150px] rounded-full z-0"></div>
      <div className="absolute bottom-[-40%] left-[-5%] w-[50%] h-[80%] bg-[#8A94E5] opacity-[0.03] blur-[150px] rounded-full z-0"></div>
      
      <Navbar />
      <main className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4 animate-fade-in">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#ededed] tracking-tight mb-2">{personalInfo.name}</h1>
              <p className="text-[#a9a9a9]">{personalInfo.title}</p>
            </div>
            <div className="flex gap-2">
              <Button
                className="flex items-center gap-2 px-4 py-2 linear-button rounded-md text-sm font-medium button-press"
                onClick={downloadCV}
              >
                <ArrowDownTrayIcon className="h-5 w-5" />
                Download CV
              </Button>
              <Button
                as={Link}
                href="/cv"
                className="flex items-center gap-2 px-4 py-2 linear-button-secondary rounded-md text-sm font-medium button-press"
              >
                <Image 
                  src="https://www.svgrepo.com/show/474950/print.svg" 
                  alt="Print CV" 
                  width={20} 
                  height={20}
                  className="text-current"
                />
                Print CV
              </Button>
            </div>
          </div>
          
          <div className="glass-card rounded-lg overflow-hidden mb-8 animate-fade-in" style={{animationDelay: "0.1s"}}>
            <div className="border-b border-[#232323] px-6 py-4">
              <h2 className="text-lg font-semibold text-[#ededed]">Contact Information</h2>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="mb-3">
                  <div className="flex items-center gap-2 skill-logo-container">
                    <img src={contactInfo.email.logo} alt="Email logo" className="skill-logo" />
                    <span className="font-medium text-[#ededed]">{contactInfo.email.label}:</span> 
                    <a href={contactInfo.email.href} className="text-[#5E6AD2] hover:text-[#6c77d8] transition-colors">{contactInfo.email.value}</a>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="flex items-center gap-2 skill-logo-container">
                    <img src={contactInfo.location.logo} alt="Location logo" className="skill-logo" />
                    <span className="font-medium text-[#ededed]">{contactInfo.location.label}:</span> 
                    <span className="text-[#a9a9a9]">{contactInfo.location.value}</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="mb-3">
                  <div className="flex items-center gap-2 skill-logo-container">
                    <img src={contactInfo.linkedin.logo} alt="LinkedIn logo" className="skill-logo" />
                    <span className="font-medium text-[#ededed]">{contactInfo.linkedin.label}:</span> 
                    <a href={contactInfo.linkedin.href} target="_blank" rel="noopener noreferrer" className="text-[#5E6AD2] hover:text-[#6c77d8] transition-colors">{contactInfo.linkedin.value}</a>
                  </div>
                </div>
                <div className="mb-3">
                  <div className="flex items-center gap-2 skill-logo-container">
                    <img src={contactInfo.github.logo} alt="GitHub logo" className="skill-logo" />
                    <span className="font-medium text-[#ededed]">{contactInfo.github.label}:</span> 
                    <a href={contactInfo.github.href} target="_blank" rel="noopener noreferrer" className="text-[#5E6AD2] hover:text-[#6c77d8] transition-colors">{contactInfo.github.value}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
            
          <div className="glass-card rounded-lg overflow-hidden mb-8 animate-fade-in" style={{animationDelay: "0.2s"}}>
            <div className="border-b border-[#232323] px-6 py-4">
              <h2 className="text-lg font-semibold text-[#ededed]">Skills</h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-medium text-[#ededed] mb-4">{skillsData.cloudInfrastructure.title}</h3>
                  <div className="space-y-4">
                    {skillsData.cloudInfrastructure.skills.map((skill, i) => (
                      <div key={skill.name} className="space-y-1 skill-item">
                        <div className="flex justify-between items-center mb-1">
                          <div className="flex items-center gap-2 skill-logo-container">
                            <img src={skill.logo} alt={`${skill.name} logo`} className="skill-logo" />
                            <span className="text-[#a9a9a9] text-sm">{skill.name}</span>
                          </div>
                        </div>
                        <div className="skill-bar">
                          <div className="skill-progress" style={{width: skill.proficiency, animationDelay: `${0.3 + (i * 0.1)}s`}}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-[#ededed] mb-4">{skillsData.programmingTools.title}</h3>
                  <div className="space-y-4">
                    {skillsData.programmingTools.skills.map((skill, i) => (
                      <div key={skill.name} className="space-y-1 skill-item">
                        <div className="flex justify-between items-center mb-1">
                          <div className="flex items-center gap-2 skill-logo-container">
                            <img src={skill.logo} alt={`${skill.name} logo`} className="skill-logo" />
                            <span className="text-[#a9a9a9] text-sm">{skill.name}</span>
                          </div>
                        </div>
                        <div className="skill-bar">
                          <div className="skill-progress" style={{width: skill.proficiency, animationDelay: `${0.3 + (i * 0.1)}s`}}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
            
          <div className="glass-card rounded-lg overflow-hidden mb-8 animate-fade-in" style={{animationDelay: "0.3s"}}>
            <div className="border-b border-[#232323] px-6 py-4">
              <h2 className="text-lg font-semibold text-[#ededed]">Tools</h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {toolsData.map((tool, i) => (
                  <div key={tool.name} className="skill-item">
                    <div className="flex items-center gap-2 skill-logo-container">
                      <img src={tool.logo} alt={`${tool.name} logo`} className="skill-logo" />
                      <span className="text-[#a9a9a9] text-sm">{tool.name}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
            
          <div className="glass-card rounded-lg overflow-hidden mb-8 animate-fade-in" style={{animationDelay: "0.3s"}}>
            <div className="border-b border-[#232323] px-6 py-4">
              <h2 className="text-lg font-semibold text-[#ededed]">Experience</h2>
            </div>
            <div className="divide-y divide-[#232323]">
              {experienceData.map((experience, index) => (
                <div key={index} className="p-6">
                  <div className="flex flex-col md:flex-row justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <img src={experience.logo} alt={`${experience.company} logo`} className="w-8 h-8 object-contain" />
                      <div>
                        <h3 className="font-medium text-[#ededed]">{experience.title}</h3>
                        <p className="text-[#a9a9a9]">{experience.company}</p>
                      </div>
                    </div>
                    <span className="text-[#a9a9a9] text-sm mt-2 md:mt-0">{experience.period}</span>
                  </div>
                  <ul className="list-disc list-outside text-[#a9a9a9] ml-5 space-y-1 mt-3">
                    {experience.responsibilities.map((responsibility, i) => (
                      <li key={i}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
            
          <div className="glass-card rounded-lg overflow-hidden animate-fade-in" style={{animationDelay: "0.4s"}}>
            <div className="border-b border-[#232323] px-6 py-4">
              <h2 className="text-lg font-semibold text-[#ededed]">Education</h2>
            </div>
            <div className="p-6">
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="font-medium text-[#ededed]">{educationData.degree}</h3>
                <span className="text-[#a9a9a9] text-sm">{educationData.period}</span>
              </div>
              <p className="text-[#a9a9a9]">{educationData.institution}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 