type IconProps = {
  className?: string;
};

const baseProps = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "square" as const,
  strokeLinejoin: "miter" as const,
  strokeWidth: 1.5,
  viewBox: "0 0 24 24",
};

export function AutomateIcon({ className }: IconProps) {
  return (
    <svg className={className} {...baseProps}>
      <path d="M3 7h18M3 12h12M3 17h9" />
      <path d="M16 10l3 2-3 2" />
    </svg>
  );
}

export function DeployIcon({ className }: IconProps) {
  return (
    <svg className={className} {...baseProps}>
      <rect x="4" y="4" width="16" height="16" />
      <path d="M8 9h8M12 9v8M9 14l3 3 3-3" />
    </svg>
  );
}

export function SecureIcon({ className }: IconProps) {
  return (
    <svg className={className} {...baseProps}>
      <path d="M12 3l7 3v5c0 5-3.2 8.6-7 10-3.8-1.4-7-5-7-10V6l7-3z" />
      <path d="M9.5 12.5l1.7 1.7 3.3-4" />
    </svg>
  );
}

export function ToolIcon({ icon, className }: IconProps & { icon: string }) {
  switch (icon) {
    case "powershell":
      return (
        <svg className={className} {...baseProps}>
          <path d="M5 6h14v12H5z" />
          <path d="M8 10l3 2-3 2M13 15h3" />
        </svg>
      );
    case "python":
      return (
        <svg className={className} {...baseProps}>
          <path d="M8 5h5a3 3 0 013 3v2H9a2 2 0 00-2 2v2H6a2 2 0 01-2-2V9a4 4 0 014-4z" />
          <path d="M16 19h-5a3 3 0 01-3-3v-2h7a2 2 0 002-2v-2h1a2 2 0 012 2v3a4 4 0 01-4 4z" />
        </svg>
      );
    case "vscode":
      return (
        <svg className={className} {...baseProps}>
          <path d="M15 4l4 2v12l-4 2-8-7z" />
          <path d="M7 8l-3 4 3 4" />
        </svg>
      );
    case "node":
      return (
        <svg className={className} {...baseProps}>
          <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z" />
          <path d="M9 10v4l3 2 3-2v-4l-3-2z" />
        </svg>
      );
    case "intune":
      return (
        <svg className={className} {...baseProps}>
          <rect x="5" y="3" width="14" height="18" rx="1" />
          <path d="M9 7h6M9 12h6M9 17h3" />
        </svg>
      );
    case "sccm":
      return (
        <svg className={className} {...baseProps}>
          <path d="M4 6h7v5H4zM13 13h7v5h-7z" />
          <path d="M11 8h2M12 8v5M12 13h1" />
        </svg>
      );
    case "azure":
      return (
        <svg className={className} {...baseProps}>
          <path d="M12 4l7 16H5z" />
          <path d="M12 4l3 7H9z" />
        </svg>
      );
    case "autopilot":
      return (
        <svg className={className} {...baseProps}>
          <circle cx="12" cy="12" r="7" />
          <path d="M12 7v5l4 2" />
        </svg>
      );
    case "defender":
      return (
        <svg className={className} {...baseProps}>
          <path d="M12 3l7 2v6c0 4.6-3 8-7 10-4-2-7-5.4-7-10V5z" />
        </svg>
      );
    case "servicenow":
      return (
        <svg className={className} {...baseProps}>
          <path d="M6 7h12v10H6z" />
          <path d="M9 10h6M9 14h4" />
        </svg>
      );
    case "git":
      return (
        <svg className={className} {...baseProps}>
          <path d="M9 4l6 6-6 6-6-6z" />
          <path d="M9 10h6M12 7v6" />
        </svg>
      );
    default:
      return (
        <svg className={className} {...baseProps}>
          <rect x="4" y="5" width="16" height="14" />
          <path d="M8 9h8M8 13h8M8 17h5" />
        </svg>
      );
  }
}
