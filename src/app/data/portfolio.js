export const profile = {
  name: "Mustafa Mujahid",
  initials: "MM",
  title: "Senior Site Reliability Engineer",
  location: "Nürnberg, Germany",
  email: "mustafa.mujahid@outlook.com",
  github: "https://github.com/mustafa89",
  githubLabel: "github.com/mustafa89",
  linkedin: "https://linkedin.com/in/mustafamujahid",
  linkedinLabel: "linkedin.com/in/mustafamujahid",
  summary:
    "I build reliable cloud platforms, observability systems, and automation loops that let product teams move fast without turning production into a haunted house.",
  positioning:
    "Infrastructure generalist with an SRE bias: Terraform, Kubernetes, AWS, monitoring, CI/CD, incident response, and enough product empathy to make platform work feel invisible.",
};

export const metrics = [
  { value: "9+", label: "Years Operating Production Systems" },
  { value: "3", label: "Clouds Across Hands-On Work" },
  { value: "24/7", label: "Reliability Mindset" },
  { value: "∞", label: "Automation Appetite" },
];

export const capabilities = [
  {
    eyebrow: "Platform Foundations",
    title: "Cloud Infrastructure That Survives Real Traffic",
    description:
      "Designing AWS-first systems with clean network boundaries, repeatable Terraform, pragmatic Kubernetes, and sensible rollback paths.",
    proof: ["AWS", "Kubernetes", "Terraform", "Terragrunt", "ECS", "RDS"],
  },
  {
    eyebrow: "Reliability Loops",
    title: "Observability Before Guesswork",
    description:
      "Turning logs, metrics, traces, and alerts into operating signals that make incidents shorter and quieter.",
    proof: ["Prometheus", "Grafana", "OpenTelemetry", "Alertmanager", "OpenSearch"],
  },
  {
    eyebrow: "Delivery Systems",
    title: "Automation That Removes Human Toil",
    description:
      "Building CI/CD, deployment workflows, and internal tools that encode the boring path and keep engineers focused on judgment calls.",
    proof: ["GitLab CI", "GitHub Actions", "Python", "Bash", "Docker", "Argo CD"],
  },
];

export const projects = [
  {
    title: "Agentic Infrastructure Console",
    type: "AI + DevEx",
    impact: "Multi-agent OpenCode setup with specialist agents, persistent memory, Slack/GitLab/Jira/Grafana integrations, and strict routing rules.",
    description:
      "A personal operations cockpit for infrastructure work: primary agents reason, subagents handle API round-trips, and memory keeps long-running context alive across sessions.",
    stack: ["OpenCode", "MCP", "Grafana", "GitLab", "Jira", "Slack"],
  },
  {
    title: "AWS Cloud Mapper",
    type: "Cloud Visibility",
    impact: "Maps cloud relationships into a graph-backed UI for faster inventory, debugging, and architecture reviews.",
    description:
      "A Next.js and Python system that discovers AWS resources, persists relationships in Neo4j, and renders infrastructure as an explorable graph.",
    stack: ["Next.js", "Python", "Boto3", "Neo4j", "Docker", "AWS"],
  },
  {
    title: "Cloud Spend Reporting",
    type: "FinOps Automation",
    impact: "Semi-automated vendor spend reports for AI subscriptions, normalizing browser exports and provider APIs into a single workbook.",
    description:
      "A Node.js CLI that coordinates provider-specific collection flows, normalizes usage, converts currencies, and prepares Google Sheets-ready outputs.",
    stack: ["Node.js", "AWS Secrets Manager", "CSV", "GitHub API", "Browser Automation"],
  },
  {
    title: "AI Reviewer Supply-Chain Hardening",
    type: "Security Engineering",
    impact: "Hash-verified Python dependency locking and container install hardening for an MR review assistant.",
    description:
      "Pinned dependency workflows with SHA-256 hashes, Docker build protections, and explicit documentation after real-world package compromise risk.",
    stack: ["Python", "Docker", "pip-tools", "GitLab CI", "Security"],
  },
  {
    title: "SRE Alerting & Triage Patterns",
    type: "Operations",
    impact: "Reusable alert investigation playbooks and routing patterns that reduce first-response ambiguity.",
    description:
      "Codifying how to approach incidents: match alert signals to service ownership, compare against baselines, and preserve the useful investigation path.",
    stack: ["Coralogix", "PromQL", "Grafana", "Terraform", "Runbooks"],
  },
  {
    title: "Infrastructure Deployment Patterns",
    type: "IaC Architecture",
    impact: "Reusable service deployment patterns that favor inventory-first changes, existing load balancers, and explicit security boundaries.",
    description:
      "A practical IaC style centered on reuse, low operational overhead, peer-reviewed changes, and clear safety constraints.",
    stack: ["Terraform", "Terragrunt", "AWS ALB", "Cognito", "Atlantis", "GitLab"],
  },
];

export const experience = [
  {
    role: "Senior Site Reliability Engineer",
    company: "Codility GmbH",
    period: "Dec 2021 — Present",
    focus: [
      "Leading reliability and infrastructure initiatives for production systems.",
      "Managing cloud, Kubernetes, CI/CD, and observability foundations.",
      "Automating platform operations and improving incident response signals.",
    ],
  },
  {
    role: "Senior DevOps Engineer",
    company: "Tradebyte Software GmbH",
    period: "Jan 2019 — Nov 2021",
    focus: [
      "Built CI/CD pipelines and cloud-native delivery workflows for microservices.",
      "Operated Kubernetes environments and infrastructure-as-code stacks.",
      "Improved monitoring, alerting, and cloud resource efficiency.",
    ],
  },
  {
    role: "Member Technical Team",
    company: "Cloud9 Networks FZE",
    period: "Mar 2018 — Oct 2018",
    focus: [
      "Deployed distributed monitoring with Icinga, Elasticsearch, and Grafana.",
      "Designed highly available monitoring topologies for global infrastructure.",
    ],
  },
  {
    role: "Systems & Operations Engineer",
    company: "Nayatel Pvt. Ltd",
    period: "May 2016 — Mar 2018",
    focus: [
      "Administered Linux, storage, virtualization, databases, DNS, mail, and hosting systems.",
      "Supported cloud infrastructure planning, vendor integrations, and service operations.",
    ],
  },
];

export const skillGroups = [
  {
    title: "Infrastructure",
    items: ["AWS", "Kubernetes", "Docker", "Terraform", "Terragrunt", "ECS", "EKS", "RDS", "DynamoDB"],
  },
  {
    title: "Observability",
    items: ["Prometheus", "Grafana", "Alertmanager", "OpenTelemetry", "OpenSearch", "Kibana", "Icinga"],
  },
  {
    title: "Automation",
    items: ["Python", "Bash", "JavaScript", "GitLab CI", "GitHub Actions", "Jenkins", "Argo CD", "Ansible"],
  },
  {
    title: "Systems",
    items: ["Linux", "PostgreSQL", "MySQL", "HAProxy", "PgBouncer", "FreeIPA", "OpenLDAP", "OpenStack"],
  },
];

export const principles = [
  "Question the constraint before automating around it.",
  "Reuse boring infrastructure unless isolation clearly demands new parts.",
  "Make the safe path the easiest path.",
  "Prefer useful signals over noisy dashboards.",
  "Document the why, not just the command sequence.",
];

export const education = {
  degree: "Bachelor of Electrical Engineering",
  institution: "Air University, Islamabad",
  period: "2011 — 2015",
};

export const contactChannels = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}?subject=Hello%20Mustafa`,
    note: "Best for direct opportunities, collaboration, and thoughtful async notes.",
  },
  {
    label: "GitHub",
    value: profile.githubLabel,
    href: profile.github,
    note: "Code, experiments, and whatever rabbit hole currently has my attention.",
  },
  {
    label: "LinkedIn",
    value: profile.linkedinLabel,
    href: profile.linkedin,
    note: "Professional timeline and low-volume networking.",
  },
];
