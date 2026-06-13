import Link from "next/link";
import Navbar from "../components/navbar";
import SafeIcon from "../components/SafeIcon";
import {
  capabilities,
  contactChannels,
  education,
  experience,
  locationChannel,
  profile,
  toolsData,
  visualSkillGroups,
} from "../data/portfolio";

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
  logo: "https://www.svgrepo.com/show/277495/graduate-mortarboard.svg"
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
      <main id="main-content" className="mx-auto max-w-7xl px-5 pb-24 pt-14 lg:px-8">
        <section className="grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-start" aria-labelledby="about-title">
          <div className="content-card lg:sticky lg:top-28">
            <p className="kicker">About</p>
            <h1 id="about-title" className="mt-4 text-5xl font-black tracking-[-0.07em] text-emerald-50 sm:text-6xl">
              Builder of boring foundations for ambitious systems.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">{profile.positioning}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/cv" className="button-primary focus-ring">
                Open CV
              </Link>
              <Link href="/projects" className="button-secondary focus-ring">
                View Projects
              </Link>
            </div>
            <div className="mt-8 space-y-3 text-sm text-slate-300">
              {[...contactChannels, locationChannel].map((channel) => (
                <a key={channel.label} href={channel.href} className="group flex min-w-0 items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 no-underline transition-colors hover:border-emerald-300/40 hover:bg-emerald-300/[0.06] focus-ring">
                  <span className="flex min-w-0 items-center gap-3">
                    <SafeIcon src={channel.logo} label={channel.label} />
                    <span className="min-w-0">
                    <span className="block font-bold text-emerald-50">{channel.label}</span>
                    <span className="block truncate text-slate-400">{channel.value}</span>
                    </span>
                  </span>
                  {channel.href ? <span aria-hidden="true" className="text-emerald-300 transition-transform group-hover:translate-x-1">→</span> : null}
                </a>
              ))}
            </div>
          </div>
            
          <div className="glass-card rounded-lg overflow-hidden animate-fade-in" style={{animationDelay: "0.4s"}}>
            <div className="border-b border-[#232323] px-6 py-4">
              <h2 className="text-lg font-semibold text-[#ededed]">Education</h2>
            </div>
            <div className="p-6 skill-item">
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <div className="flex items-center gap-3 skill-logo-container">
                  <img src={educationData.logo} alt="Education logo" className="skill-logo" />
                  <h3 className="font-medium text-[#ededed]">{educationData.degree}</h3>
                </div>
                <span className="text-[#a9a9a9] text-sm">{educationData.period}</span>
              </div>
            </section>

            <section className="content-card" aria-labelledby="skills-title">
              <p className="kicker">Skill Map</p>
              <h2 id="skills-title" className="mt-3 text-3xl font-black tracking-[-0.05em] text-emerald-50">Visual toolbelt, restored.</h2>
              <div className="mt-8 grid gap-7 md:grid-cols-2">
                {visualSkillGroups.map((group) => (
                  <article key={group.title} className="rounded-2xl border border-white/10 bg-black/15 p-5">
                    <h3 className="font-bold text-emerald-50">{group.title}</h3>
                    <div className="mt-5 space-y-4">
                      {group.skills.map((skill) => (
                        <div key={skill.name} className="skill-item">
                          <div className="mb-2 flex items-center justify-between gap-4">
                            <span className="flex min-w-0 items-center gap-2">
                              <SafeIcon src={skill.logo} label={skill.name} />
                              <span className="truncate text-sm font-semibold text-slate-200">{skill.name}</span>
                            </span>
                            <span className="font-mono text-xs text-emerald-200/75">{skill.proficiency}%</span>
                          </div>
                          <div className="skill-bar" aria-label={`${skill.name} proficiency ${skill.proficiency}%`}>
                            <div className="skill-progress" style={{ width: `${skill.proficiency}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="content-card" aria-labelledby="tools-title">
              <p className="kicker">Tools</p>
              <h2 id="tools-title" className="mt-3 text-3xl font-black tracking-[-0.05em] text-emerald-50">The icon wall belongs here.</h2>
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                {toolsData.map((tool) => (
                  <div key={tool.name} className="tool-tile">
                    <SafeIcon src={tool.logo} label={tool.name} />
                    <span className="truncate text-sm font-semibold text-slate-300">{tool.name}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="content-card" aria-labelledby="experience-title">
              <p className="kicker">Experience</p>
              <h2 id="experience-title" className="mt-3 text-3xl font-black tracking-[-0.05em] text-emerald-50">Production scars, progressively refined.</h2>
              <div className="mt-8 space-y-10">
                {experience.map((item) => (
                  <article key={`${item.company}-${item.role}`} className="timeline-item">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                      <h3 className="text-xl font-bold text-emerald-50">{item.role}</h3>
                      <p className="font-mono text-sm text-emerald-200/75">{item.period}</p>
                    </div>
                    <p className="mt-1 font-semibold text-slate-300">{item.company}</p>
                    <ul className="mt-4 space-y-2 text-slate-300">
                      {item.focus.map((point) => (
                        <li key={point} className="leading-7">{point}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <section className="content-card" aria-labelledby="education-title">
              <p className="kicker">Education</p>
              <h2 id="education-title" className="mt-3 text-3xl font-black tracking-[-0.05em] text-emerald-50">{education.degree}</h2>
              <p className="mt-3 text-slate-300">{education.institution}</p>
              <p className="mt-1 font-mono text-sm text-emerald-200/75">{education.period}</p>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
} 