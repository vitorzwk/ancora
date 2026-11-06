// components/FarolIllustration.tsx
export function FarolIllustration({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 240"
      className={`w-40 md:w-44 h-auto text-ink ${className}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-label="Farol sobre o mar"
    >
      {/* topo da lanterna */}
      <circle cx="80" cy="46" r="3" />
      <path d="M65 70 L80 55 L95 70 Z" />

      {/* sala da luz */}
      <rect x="70" y="70" width="20" height="18" />
      <line x1="80" y1="70" x2="80" y2="88" strokeWidth="1.5" />

      {/* galeria */}
      <line x1="62" y1="90" x2="98" y2="90" />

      {/* torre */}
      <path d="M68 90 L62 192" />
      <path d="M92 90 L98 192" />
      <line x1="56" y1="192" x2="104" y2="192" />

      {/* faixas */}
      <line x1="66.5" y1="120" x2="93.5" y2="120" />
      <line x1="64.8" y1="150" x2="95.2" y2="150" />

      {/* porta */}
      <path d="M75 192 V181 a5 5 0 0 1 10 0 V192" />

      {/* raios de luz */}
      <g strokeWidth="2">
        <line x1="62" y1="74" x2="44" y2="66" />
        <line x1="60" y1="80" x2="38" y2="80" />
        <line x1="62" y1="86" x2="44" y2="94" />
        <line x1="98" y1="74" x2="116" y2="66" />
        <line x1="100" y1="80" x2="122" y2="80" />
        <line x1="98" y1="86" x2="116" y2="94" />
      </g>

      {/* ondas */}
      <path
        d="M10 208 q10 -9 20 0 t20 0 t20 0 t20 0 t20 0 t20 0 t20 0"
        className="text-resist-bar"
        stroke="currentColor"
      />
      <path
        d="M20 220 q8 -6 16 0 t16 0 t16 0 t16 0 t16 0 t16 0"
        stroke="#E8B87A"
        strokeWidth="2"
      />
    </svg>
  );
}