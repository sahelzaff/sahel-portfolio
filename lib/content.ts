import type {
  KvItem,
  NavItem,
  ProjectItem,
  SkillBar,
  SkillPillar,
  StatItem,
  ToolItem,
} from "@/lib/types";

export const navItems: NavItem[] = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work" },
  { href: "#tools", label: "Tools" },
  { href: "#contact", label: "Contact" },
];

export const contactInfo = {
  email: "sahelzaffar2@gmail.com",
  cvHref: "/sahel-resume-2026.pdf",
  linkedin: "https://www.linkedin.com/in/sahel-zaffar-880074288/",
  github: "https://github.com/sahelzaff",
};

export const heroStats: StatItem[] = [
  { value: 4, suffix: "+", label: "Years in IT Support" },
  { value: 500, suffix: "+", label: "Endpoints Managed" },
  { value: 30, suffix: "+", label: "Scripts Deployed" },
  { value: 99.9, suffix: "%", decimals: 1, label: "Uptime Maintained" },
];

export const marqueeRows = [
  ["POWERSHELL", "PYTHON", "NODE.JS", "INTUNE", "SCCM", "ACTIVE DIRECTORY", "AZURE AD", "AUTOPILOT"],
  ["DESKTOP ENGINEERING", "ENDPOINT MANAGEMENT", "GPO", "WSUS", "SCRIPTING", "AUTOMATION", "M365"],
];

export const aboutFacts: KvItem[] = [
  { label: "Currently", value: "IT Support Engineer" },
  { label: "Targeting", value: "Desktop / Systems Engineer" },
  { label: "Stack", value: "PowerShell · Python · Node.js" },
  { label: "MDM", value: "Intune · SCCM · WDS · MDT" },
  { label: "Identity", value: "Active Directory · Azure AD · Entra ID" },
  { label: "Location", value: "Mumbai, Maharashtra" },
  { label: "Availability", value: "Open — Actively Looking" },
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
  { label: "PowerShell", value: 92 },
  { label: "Microsoft Intune / SCCM", value: 88 },
  { label: "Active Directory / Entra ID", value: 85 },
  { label: "Python", value: 78 },
  { label: "Windows Server / GPO", value: 82 },
  { label: "Node.js / Tooling", value: 70 },
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
  { name: "PowerShell 7", category: "Automation", icon: "powershell", tall: true },
  { name: "Python 3", category: "Scripting", icon: "python" },
  { name: "VS Code", category: "Editor", icon: "vscode" },
  { name: "Node.js", category: "Backend / CLI", icon: "node" },
  { name: "Intune", category: "MDM", icon: "intune" },
  { name: "SCCM", category: "Deployment", icon: "sccm", tall: true },
  { name: "Azure AD", category: "Identity", icon: "azure" },
  { name: "Autopilot", category: "Zero-Touch", icon: "autopilot" },
  { name: "Defender", category: "Security", icon: "defender" },
  { name: "ServiceNow", category: "ITSM", icon: "servicenow" },
  { name: "Git", category: "Version Control", icon: "git" },
  { name: "Windows Server", category: "Infrastructure", icon: "windows", tall: true },
];
