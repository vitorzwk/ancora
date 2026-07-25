import { Link } from 'react-router-dom';
export function Landing() {
  return (
    <div className="min-h-screen bg-paper text-ink font-sans">
      <header className="flex justify-between items-center px-7 py-3.5 border-b border-anchor-100">
        <span className="font-display font-semibold text-[15px] text-ink">
          / âncora <span className="font-mono font-normal text-[11px] text-gray-500">v0.1</span>
        </span>
        <div className="flex gap-2.5 items-center">
          <Link to="/sobre" className="text-xs text-gray-500 hover:text-ink transition-colors">sobre</Link>
          <button className="bg-ink text-paper rounded-md px-3.5 py-1.5 text-xs font-medium">
            <Link
                to="/app"
                className="bg-ink text-paper rounded-md px-3.5 py-1.5 text-xs font-medium"
            >   
            começar
</Link>
          </button>
        </div>
      </header>

      <section className="flex flex-col md:flex-row items-center gap-5 px-7 py-14 md:py-20 max-w-5xl mx-auto">
        <div className="flex-[1.1]">
          <div className="flex items-center gap-1.5 mb-4.5">
            <span className="w-1.5 h-1.5 bg-resist-bar inline-block" />
            <span className="font-mono text-[11px] tracking-wide text-gray-500">
              UM PROJETO PESSOAL
            </span>
          </div>

          <h1 className="font-display font-semibold text-4xl md:text-[42px] leading-tight text-ink mb-5">
            O mais difícil,<br />é começar.
          </h1>

          <p className="text-sm leading-relaxed text-gray-600 max-w-sm mb-7">
            Âncora não conta seus dias como um placar. Cada recaída vira dado,
            não fracasso. A ideia é simples: te dar um lugar firme pra voltar,
            sempre que precisar. Você não está sozinho nessa, e não precisa se sentir 
            constrangido por tentar melhorar.
          </p>

          <p className="text-[13px] text-gray-500">
            Seu,<br />
            <span className="font-display font-semibold text-ink">— Vitor</span>
          </p>
        </div>

        <div className="flex-[0.9] flex justify-center">
          <AnchorIllustration />
        </div>
      </section>
    </div>
  );
}

function AnchorIllustration() {
  return (
    <svg width="150" height="220" viewBox="0 0 150 220" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="75" cy="24" r="12" stroke="#2C4A52" strokeWidth="2.5" />
      <line x1="75" y1="36" x2="75" y2="170" stroke="#2C4A52" strokeWidth="2.5" />
      <line x1="55" y1="70" x2="95" y2="70" stroke="#2C4A52" strokeWidth="2.5" />
      <path d="M75 170C75 170 40 175 30 145C24 128 32 112 32 112" stroke="#2C4A52" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M75 170C75 170 110 175 120 145C126 128 118 112 118 112" stroke="#2C4A52" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M20 195C35 188 45 202 60 195C75 188 85 202 100 195C115 188 125 202 140 195" stroke="#6B8F71" strokeWidth="2" strokeLinecap="round" />
      <path d="M28 208C43 201 53 215 68 208C83 201 93 215 108 208C123 201 133 215 148 208" stroke="#D9A15D" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
    </svg>
  );
}