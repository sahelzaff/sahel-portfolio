import type { ReactNode } from "react";

export type NavItem = {
  href: `#${string}`;
  label: string;
};

export type StatItem = {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

export type ProjectDetail = {
  problem: string;
  build: string;
  outcome: string;
};

export type ProjectItem = {
  number: string;
  title: string;
  tags: string[];
  detail: ProjectDetail;
};

export type SkillPillar = {
  title: string;
  icon: "automate" | "deploy" | "secure";
  items: string[];
};

export type SkillBar = {
  label: string;
  value: number;
};

export type ToolItem = {
  name: string;
  category: string;
  icon:
    | "powershell"
    | "python"
    | "vscode"
    | "node"
    | "intune"
    | "sccm"
    | "azure"
    | "autopilot"
    | "defender"
    | "servicenow"
    | "git"
    | "windows";
  tall?: boolean;
  featured?: boolean;
  wide?: boolean;
};

export type KvItem = {
  label: string;
  value: string;
};

export type ExperienceItem = {
  role: string;
  org: string;
  location: string;
  period: string;
  current?: boolean;
  summary: string;
};

export type EducationItem = {
  degree: string;
  school: string;
  period: string;
  meta: string;
  note?: string;
};

export type CertItem = {
  code: string;
  name: string;
  issuer: string;
};

export type SectionHeading = {
  number: string;
  label: string;
  title: ReactNode;
};
