'use client'

import Navbar from "./components/navbar";
import { Button } from '@headlessui/react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute top-[-50%] left-[-10%] w-[70%] h-[100%] bg-[#5E6AD2] opacity-[0.03] blur-[150px] rounded-full z-0"></div>
      <div className="absolute bottom-[-30%] right-[-5%] w-[50%] h-[80%] bg-[#8A94E5] opacity-[0.03] blur-[150px] rounded-full z-0"></div>
      
      <Navbar />
      <main className="container mx-auto px-4 py-24 md:py-32 flex flex-col items-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold text-[#ededed] mb-8 tracking-tight text-center max-w-3xl animate-fade-in">
          <span className="linear-gradient-text">Site Reliability Engineer</span> passionate about infrastructure
        </h1>
        <p className="text-xl text-[#a9a9a9] max-w-2xl text-center mb-12 leading-relaxed animate-fade-in" style={{animationDelay: "0.1s"}}>
          I&apos;m a Site Reliability Engineer passionate about all things cloud and infrastructure. 
          Feel free to explore my profile, projects and CV.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{animationDelay: "0.2s"}}>
          <Button
            as={Link}
            href="/about"
            className="px-6 py-3 linear-button rounded-md text-sm font-medium button-press"
          >
            View My CV
          </Button>
          <Button
            as={Link}
            href="/projects"
            className="px-6 py-3 linear-button-secondary rounded-md text-sm font-medium button-press"
          >
            Browse Projects
          </Button>
        </div>
        
        <div className="mt-32 w-full max-w-5xl">
          <div className="text-center mb-12 animate-fade-in" style={{animationDelay: "0.3s"}}>
            <h2 className="text-3xl font-bold mb-2 tracking-tight text-[#ededed]">Featured Skills</h2>
            <p className="text-[#a9a9a9]">Areas where I excel and technologies I&apos;m proficient with</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6 rounded-lg stagger-item animate-slide-up opacity-0 transform transition-all duration-500 ease-out hover:translate-y-[-8px] hover:shadow-[0_12px_30px_rgba(0,0,0,0.25)] hover:bg-[#151515]/80 hover:border-[#232323] relative overflow-hidden group">
              <div className="card-shimmer"></div>
              <h3 className="text-lg font-semibold mb-3 text-[#ededed] relative z-10 transition-all duration-300 group-hover:text-white">Cloud Infrastructure</h3>
              <p className="text-[#a9a9a9] relative z-10 transition-all duration-300 group-hover:text-[#d1d1d1]">Expertise in AWS, GCP, and Azure with deep knowledge of cloud architecture patterns and best practices.</p>
            </div>
            
            <div className="glass-card p-6 rounded-lg stagger-item animate-slide-up opacity-0 transform transition-all duration-500 ease-out hover:translate-y-[-8px] hover:shadow-[0_12px_30px_rgba(0,0,0,0.25)] hover:bg-[#151515]/80 hover:border-[#232323] relative overflow-hidden group">
              <div className="card-shimmer" style={{animationDelay: "0.1s"}}></div>
              <h3 className="text-lg font-semibold mb-3 text-[#ededed] relative z-10 transition-all duration-300 group-hover:text-white">DevOps & Automation</h3>
              <p className="text-[#a9a9a9] relative z-10 transition-all duration-300 group-hover:text-[#d1d1d1]">Building CI/CD pipelines, infrastructure as code, and automation solutions that enable teams to ship faster.</p>
            </div>
            
            <div className="glass-card p-6 rounded-lg stagger-item animate-slide-up opacity-0 transform transition-all duration-500 ease-out hover:translate-y-[-8px] hover:shadow-[0_12px_30px_rgba(0,0,0,0.25)] hover:bg-[#151515]/80 hover:border-[#232323] relative overflow-hidden group">
              <div className="card-shimmer" style={{animationDelay: "0.2s"}}></div>
              <h3 className="text-lg font-semibold mb-3 text-[#ededed] relative z-10 transition-all duration-300 group-hover:text-white">Monitoring & Observability</h3>
              <p className="text-[#a9a9a9] relative z-10 transition-all duration-300 group-hover:text-[#d1d1d1]">Implementing robust monitoring solutions with tools like Prometheus, Grafana, and distributed tracing systems.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
