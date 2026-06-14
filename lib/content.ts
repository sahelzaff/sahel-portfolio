import type {
  CertItem,
  EducationItem,
  ExperienceItem,
  KvItem,
  NavItem,
  ProjectItem,
  SkillBar,
  SkillPillar,
  StatItem,
  ToolItem,
} from "@/lib/types";

export const navItems: NavItem[] = [
  { href: "#dossier", label: "Dossier" },
  { href: "#record", label: "Record" },
  { href: "#skills", label: "Instruments" },
  { href: "#missions", label: "Missions" },
  { href: "#tools", label: "Loadout" },
  { href: "#contact", label: "Control" },
];

export const contactInfo = {
  email: "sahelzaffarwork@gmail.com",
  cvHref: "/sahel-resume-2026.pdf",
  linkedin: "https://www.linkedin.com/in/sahel-zaffar-880074288/",
  github: "https://github.com/sahelzaff",
};

export const heroStats: StatItem[] = [
  { value: 4, suffix: "+", label: "Years in IT" },
  { value: 4, label: "Countries Operated" },
  { value: 400, suffix: "+", label: "Mailboxes Migrated" },
  { value: 99.9, suffix: "%", decimals: 1, label: "Uptime Maintained" },
];

export const marqueeRows = [
  ["POWERSHELL", "PYTHON", "NODE.JS", "INTUNE", "SCCM", "ACTIVE DIRECTORY", "AZURE AD", "AUTOPILOT"],
  ["IT LEADERSHIP", "CLOUD MIGRATION", "IP TELEPHONY", "GPO", "SCRIPTING", "AUTOMATION", "M365", "MULTI-SITE OPS"],
];

export const aboutFacts: KvItem[] = [
  { label: "Currently", value: "IT Lead — IGM Shipping Pvt. Ltd." },
  { label: "Focus", value: "Infrastructure · Cloud · Multi-Site Ops" },
  { label: "Stack", value: "PowerShell · Python · Azure · M365" },
  { label: "MDM", value: "Intune · SCCM · WDS · MDT · Autopilot" },
  { label: "Identity", value: "Active Directory · Azure AD · Entra ID" },
  { label: "Education", value: "B.Sc Information Technology — Amity University (CGPA 7.8)" },
  { label: "Certs", value: "AZ-305 · AZ-204 · AZ-104 · AZ-900 · MS-102" },
  { label: "Languages", value: "English · Hindi · Marathi" },
  { label: "Location", value: "New Panvel, Maharashtra" },
  { label: "Availability", value: "Employed — Open to Senior Roles" },
];

export const experience: ExperienceItem[] = [
  {
    role: "IT Lead",
    org: "IGM Shipping Pvt. Ltd. (Interglobe Marine)",
    location: "Mumbai · India / UAE / Oman / Malaysia",
    period: "Apr 2026 — Present",
    current: true,
    summary:
      "Sole IT authority for an international shipping group across four countries — infrastructure, networking, security, cloud, telephony, and end-user computing. Reports directly to the MD. Owns email security, multi-site IP telephony rollout, ISP contract negotiation, new-office build-outs, and onboarding automation.",
  },
  {
    role: "Systems Engineer",
    org: "Medpace Clinical Research Organization",
    location: "Navi Mumbai, India",
    period: "Aug 2025 — Apr 2026",
    summary:
      "Enterprise identity and endpoint operations across Active Directory, Entra ID, Intune, and Autopilot in a regulated global CRO. Authored PowerShell automation, ran org-wide patching, and earned a name for root-cause analysis on incidents others couldn't isolate.",
  },
  {
    role: "IT Executive (Sole IT Charge)",
    org: "Goodrich Logistics",
    location: "Mumbai, India",
    period: "Jun 2024 — Aug 2025",
    summary:
      "First single-owner role. Led a zero-downtime migration of 400+ mailboxes and 2TB+ data to Microsoft 365, designed enterprise identity services, deployed site-to-site networks and firewalls, and stood up an Azure-hosted fault-tolerant telephony platform.",
  },
  {
    role: "Technical Support Engineer",
    org: "High Tech Birds",
    location: "Mumbai, India",
    period: "Mar 2023 — Feb 2024",
    summary:
      "Enterprise technical support — directory account operations, hardware lifecycle, and end-user systems — while completing a full-time IT degree. Built the foundation for rapid advancement into infrastructure ownership.",
  },
];

export const education: EducationItem[] = [
  {
    degree: "B.Sc — Information Technology",
    school: "Amity University, Mumbai",
    period: "2021 — 2024",
    meta: "CGPA 7.8 / 10",
    note: "Completed alongside full-time IT roles from the first year of the degree.",
  },
  {
    degree: "Senior Secondary (CBSE)",
    school: "St. Wilfred School, Mumbai",
    period: "2019 — 2021",
    meta: "73%",
  },
];

export const certifications: CertItem[] = [
  { code: "AZ-305", name: "Azure Solutions Architect Expert", issuer: "Microsoft" },
  { code: "MS-102", name: "Microsoft 365 Administrator Expert", issuer: "Microsoft" },
  { code: "AZ-204", name: "Azure Developer Associate", issuer: "Microsoft" },
  { code: "AZ-104", name: "Azure Administrator Associate", issuer: "Microsoft" },
  { code: "AZ-900", name: "Azure Fundamentals", issuer: "Microsoft" },
  { code: "GOOG", name: "IT Support & Automation", issuer: "Google · Coursera" },
];

export const skillPillars: SkillPillar[] = [
  {
    title: "Automate",
    icon: "automate",
    items: ["PowerShell", "Python", "Node.js", "Batch Scripting", "Task Scheduler", "Regex", "REST APIs", "Graph API"],
  },
  {
    title: "Deploy",
    icon: "deploy",
    items: ["Microsoft Intune", "SCCM / MECM", "Windows Autopilot", "WDS / MDT", "WSUS", "Chocolatey", "Winget", "MSI / MSIX Packaging"],
  },
  {
    title: "Secure & Manage",
    icon: "secure",
    items: ["Active Directory", "Azure AD / Entra ID", "Group Policy (GPO)", "Conditional Access", "MFA", "Defender for Endpoint", "M365 Admin", "Exchange Online"],
  },
];

export const skillBars: SkillBar[] = [
  { label: "PowerShell", value: 82 },
  { label: "Microsoft Intune / SCCM", value: 90 },
  { label: "Active Directory / Entra ID", value: 88 },
  { label: "Microsoft 365 / Azure Cloud", value: 85 },
  { label: "Windows Server / GPO", value: 90 },
  { label: "Python", value: 78 },
];

export const projects: ProjectItem[] = [
  {
    number: "01",
    title: "Automated Onboarding Pipeline",
    tags: ["PowerShell", "AD", "Intune", "Graph API"],
    detail: {
      problem: "User onboarding was manual, inconsistent, and too dependent on ticket-by-ticket execution.",
      build: "I built a scripted onboarding flow that provisions identities, applies group memberships, configures device enrollment, and kicks off baseline app deployment. The pipeline ties AD and Intune steps together so handoffs stop leaking time.",
      outcome: "New starters reach a ready-to-work state faster, with fewer missed steps and far less technician time per hire.",
    },
  },
  {
    number: "02",
    title: "SCCM App Packaging Framework",
    tags: ["SCCM", "PowerShell", "MSI / MSIX"],
    detail: {
      problem: "Application packaging was repetitive and quality varied depending on who built the deployment.",
      build: "I created a repeatable packaging framework for install, uninstall, detection, logging, and rollback patterns across common software types. It standardized how packages were authored and tested before release.",
      outcome: "Packaging became faster to produce, easier to maintain, and much safer to deploy across the fleet.",
    },
  },
  {
    number: "03",
    title: "Zero-Touch Autopilot Deployment",
    tags: ["Autopilot", "Intune", "Azure AD"],
    detail: {
      problem: "Device setup still required too much technician touch for a modern endpoint lifecycle.",
      build: "I designed a zero-touch deployment path around Autopilot profiles, enrollment status configuration, policy targeting, and app sequencing. The goal was to turn a boxed device into a working endpoint with almost no manual handling.",
      outcome: "Provisioning became more consistent, more scalable, and better aligned with remote-first device delivery.",
    },
  },
  {
    number: "04",
    title: "IT Helpdesk Automation Bot",
    tags: ["Node.js", "Teams Webhook", "ServiceNow"],
    detail: {
      problem: "Common helpdesk workflows were buried in manual lookups and repetitive status updates.",
      build: "I built a Node.js bot that surfaces ticket context, pushes operational notifications into Teams, and automates small but frequent support actions through service integrations. It was designed to reduce friction, not add another dashboard.",
      outcome: "The support loop tightened and the team spent less time on status churn and more time solving real issues.",
    },
  },
  {
    number: "05",
    title: "Python Asset Inventory Tool",
    tags: ["Python", "WMI", "CIM", "Excel Export"],
    detail: {
      problem: "Asset visibility was fragmented, making audits and lifecycle decisions slower than they should be.",
      build: "I wrote a Python-based inventory and audit tool that collects hardware and software state through Windows management interfaces and exports decision-ready reports. It was built to be schedulable and easy to adapt as the environment changed.",
      outcome: "Reporting became faster, audits became cleaner, and endpoint decisions had real data behind them.",
    },
  },
  {
    number: "06",
    title: "Defender Hardening Script",
    tags: ["PowerShell", "M365 Defender", "CIS"],
    detail: {
      problem: "Security baseline drift made endpoint posture inconsistent and harder to trust.",
      build: "I created a PowerShell hardening workflow aligned to baseline controls, Defender settings, and repeatable remediation logic. It focused on translating policy intent into enforceable endpoint configuration.",
      outcome: "Security posture became more uniform and easier to audit across managed systems.",
    },
  },
];

export const tools: ToolItem[] = [
  { name: "PowerShell 7", category: "Automation", icon: "powershell", tall: true, featured: true },
  { name: "Python 3", category: "Scripting", icon: "python", wide: true },
  { name: "VS Code", category: "Editor", icon: "vscode" },
  { name: "Node.js", category: "Backend / CLI", icon: "node" },
  { name: "Intune", category: "MDM", icon: "intune", featured: true },
  { name: "SCCM", category: "Deployment", icon: "sccm", tall: true },
  { name: "Azure AD", category: "Identity", icon: "azure" },
  { name: "Autopilot", category: "Zero-Touch", icon: "autopilot", wide: true },
  { name: "Defender", category: "Security", icon: "defender", featured: true },
  { name: "ServiceNow", category: "ITSM", icon: "servicenow" },
  { name: "Git", category: "Version Control", icon: "git" },
  { name: "Windows Server", category: "Infrastructure", icon: "windows", tall: true },
];
