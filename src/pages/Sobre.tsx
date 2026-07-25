// pages/Sobre.tsx
import { Link } from 'react-router-dom';
import { AnchorIllustration } from '../components/AnchorIllustration';

export function Sobre() {
  return (
    <div className="min-h-screen bg-paper text-ink font-sans">
      <header className="flex justify-between items-center px-7 py-3.5 border-b border-anchor-100">
        <span className="font-display font-semibold text-[15px] text-ink">
          / âncora <span className="font-mono font-normal text-[11px] text-gray-500">v0.1</span>
        </span>
        <nav className="flex gap-5 items-center">
          <Link to="/app" className="text-xs text-gray-500 hover:text-ink transition-colors">painel</Link>
          <Link to="/sobre" className="text-xs font-medium text-ink">sobre</Link>
        </nav>
      </header>

      <section className="flex flex-col md:flex-row items-center gap-10 px-7 py-14 md:py-20 max-w-5xl mx-auto">
        <div className="flex-[1.1]">
          <div className="flex items-center gap-1.5 mb-4.5">
            <span className="w-1.5 h-1.5 bg-resist-bar inline-block" />
            <span className="font-mono text-[11px] tracking-wide text-gray-500">
              POR QUE O ÂNCORA EXISTE
            </span>
          </div>

          <h1 className="font-display font-semibold text-4xl md:text-[42px] leading-tight text-ink mb-6">
            Disciplina é liberdade.<br />Vício é prisão.
          </h1>

          <div className="space-y-4 text-sm leading-relaxed text-gray-600 max-w-md">
            <p>
              O mais difícil não é resistir — é admitir que a gente se afasta do que
              realmente importa por alguns minutos de satisfação barata. E que o vazio
              que sobra depois é sempre maior do que qualquer uma dessas "felicidades".
            </p>
            <p>
              O Âncora nasceu daí. Não é só um projeto pra praticar e estudar
              desenvolvimento — embora seja isso também. É uma forma de lidar com uma
              ideia que carrego comigo: a verdadeira liberdade está na disciplina, e o
              vício é uma prisão gigante, construída aos poucos, sem que a gente perceba.
            </p>
            <p>
              Não tenho todas as respostas prontas. Só senti que precisava fazer alguma
              coisa com essa inquietação — e o Âncora foi a forma que encontrei.
            </p>
          </div>

          <p className="text-[13px] text-gray-500 mt-8">
            Seu,<br />
            <span className="font-display font-semibold text-ink">— Vitor Paixão</span>
          </p>
        </div>

        <div className="flex-[0.9] flex justify-center">
          <AnchorIllustration />
        </div>
      </section>
    </div>
  );
}