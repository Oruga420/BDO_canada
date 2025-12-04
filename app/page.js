'use client';

import { useCallback } from 'react';

const resume = {
  name: 'Alejandro De La Mora',
  role: 'AI Solutions Architect & Engineer',
  contact: [
    { label: 'Phone', value: '+1 437 243 3693', href: 'tel:+14372433693' },
    { label: 'Email', value: 'alex@seshwithfriends.org', href: 'mailto:alex@seshwithfriends.org' },
    { label: 'LinkedIn', value: 'linkedin.com/in/amorac', href: 'https://www.linkedin.com/in/amorac/' },
    { label: 'Website', value: 'eloruga.com', href: 'http://www.eloruga.com' },
    { label: 'GitHub', value: 'github.com/Oruga420', href: 'https://github.com/Oruga420' },
  ],
  summary:
    'AI Solutions Architect and Engineer specializing in agentic workflows, GenAI platform engineering, and automation. Proven record designing production-grade architectures with Python, MCP, and cloud (AWS, GCP, Vercel). Drove AI adoption from 47% to 97% and delivered $1M+ in savings by replacing manual hours with scalable automations. Focused on secure, real-world AI microservices.',
  expertise: [
    'Agentic Workflows',
    'GenAI Platform Engineering',
    'Automation & Orchestration',
    'MCP (Model Context Protocol)',
    'Python',
    'Cloud: AWS / GCP / Vercel',
    'RAG & LLM Integrations',
    'CI/CD & Containers',
  ],
  experience: [
    {
      company: 'Assent',
      title: 'AI Solutions Architect',
      location: 'Canada',
      period: 'Feb 2025 – Present',
      highlights: [
        'Architected secure GenAI agentic workflows with custom MCP servers to expose internal data and tools safely.',
        'Built live RAG connections and internal AI tools saving 20,000+ man-hours in a year and lifting AI adoption to 97%.',
        'Created governance patterns to move prototypes to production without compromising security.',
        'Stack: Python, GenAI stack (OpenAI, Anthropic), Salesforce, Zapier.',
      ],
    },
    {
      company: 'Sesh | Ai Solutions',
      title: 'AI Solutions Architect',
      location: 'Toronto, Ontario',
      period: 'Nov 2021 – Present',
      highlights: [
        'Designed architecture for 120+ GenAI apps and 90+ chatbots in production across 30+ clients.',
        'Delivered $1M+ in savings by replacing manual work with agentic workflows and automations.',
        'Built AI-ready websites and landing pages wired into chatbots and data capture backends with AWS, Vercel, and Next.js.',
        'Led a 100+ person community with tutorials and demos on applying AI to daily work.',
      ],
    },
    {
      company: 'Online Business Systems',
      title: 'Salesforce Consultant',
      location: 'Toronto, Ontario',
      period: 'Jun 2024 – Nov 2024',
      highlights: [
        'Configured Agentforce and copilot experiences with safe data wiring for AI assistants.',
        'Integrated AI agents into existing sales and service workflows for seamless adoption.',
      ],
    },
    {
      company: 'Globalization Partners',
      title: 'Salesforce Manager & AI Lead',
      location: 'Ontario, Canada',
      period: 'Nov 2018 – Nov 2023',
      highlights: [
        'Managed a 1,000+ user Salesforce org and led the first internal GenAI development stream.',
        'Built “GIA”, an internal chatbot, and deployed GenAI workflows for Jira handling under strict compliance.',
        'Used Python and LLMs to support vibe coding patterns with governance in place.',
      ],
    },
  ],
  education: {
    school: 'Universidad Marista de MAcrida',
    degree: 'B.S. Systems Engineering (Ingenieria en Sistemas)',
    period: '2004 – 2007',
    extras: [],
    certifications: ['Salesforce Certified AI Associate', 'Salesforce Certified Administrator (SCA)'],
  },
};

export default function Home() {
  const handlePrint = useCallback(() => {
    window.print();
  }, []);

  return (
    <main className="page">
      <div className="floating-bubble bubble-a" />
      <div className="floating-bubble bubble-b" />
      <div className="floating-bubble bubble-c" />

      <div className="paper">
        <div className="toolbar">
          <div className="title">
            <p className="role">{resume.role}</p>
            <h1>{resume.name}</h1>
          </div>
          <button className="print-button" onClick={handlePrint}>
            Download PDF
          </button>
        </div>

        <section className="intro">
          <div className="summary">
            <h2>Professional Summary</h2>
            <p>{resume.summary}</p>
          </div>
          <div className="contact">
            <h3>Contact</h3>
            <div className="contact-grid">
              {resume.contact.map((item) => (
                <a key={item.label} className="contact-item" href={item.href}>
                  <span className="contact-label">{item.label}</span>
                  <span className="contact-value">{item.value}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="expertise">
          <h2>Areas of Expertise</h2>
          <div className="tag-cloud">
            {resume.expertise.map((skill) => (
              <span key={skill} className="tag">
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section className="experience">
          <h2>Work Experience</h2>
          <div className="timeline">
            {resume.experience.map((role) => (
              <article key={role.company} className="timeline-card">
                <div className="timeline-meta">
                  <div className="dot" />
                  <div>
                    <p className="period">{role.period}</p>
                    <p className="location">{role.location}</p>
                  </div>
                </div>
                <div className="timeline-body">
                  <h3>
                    {role.title} <span className="light">| {role.company}</span>
                  </h3>
                  <ul>
                    {role.highlights.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="education">
          <h2>Education</h2>
          <div className="edu-card">
            <div>
              <h3>{resume.education.degree}</h3>
              <p className="light">{resume.education.school}</p>
            </div>
            <p className="period">{resume.education.period}</p>
          </div>
          <ul className="edu-notes">
            {resume.education.extras.map((item) => (
              <li key={item}>{item}</li>
            ))}
            {resume.education.certifications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
    </main>
  );
}
