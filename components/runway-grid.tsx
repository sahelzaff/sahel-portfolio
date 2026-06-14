type RunwayGridProps = {
  className?: string;
};

export function RunwayGrid({ className = "" }: RunwayGridProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 1200 900"
      preserveAspectRatio="none"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Perspective converging lines from vanishing point at top-center */}
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
        <line
          key={i}
          x1="600"
          y1="0"
          x2={i * 120}
          y2="900"
          stroke="#F5A000"
          strokeWidth="0.6"
        />
      ))}
      {/* Distance marker horizontals */}
      <line x1="240" y1="225" x2="960" y2="225" stroke="#F5A000" strokeWidth="0.4" strokeDasharray="6 10" />
      <line x1="120" y1="450" x2="1080" y2="450" stroke="#F5A000" strokeWidth="0.4" strokeDasharray="6 10" />
      <line x1="20" y1="675" x2="1180" y2="675" stroke="#F5A000" strokeWidth="0.4" strokeDasharray="6 10" />
      {/* Runway centerline dashes */}
      <line x1="600" y1="0" x2="600" y2="900" stroke="#F5A000" strokeWidth="1" strokeDasharray="22 18" />
    </svg>
  );
}
