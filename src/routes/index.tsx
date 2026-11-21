import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowUpRight, ShieldCheck, Compass, FileCheck2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ServicesGrid } from '@/components/site/services-grid';
import { FAQList } from '@/components/site/faq-list';
import { ContactCTA } from '@/components/site/layout';
import { seo } from '@/lib/site-config';
import { faqs } from '@/lib/services';
import logo from '@/assets/rigorium-logo.jpg.asset.json';
import building from '@/assets/engineering-building.webp.asset.json';

export const Route = createFileRoute('/')({
  head: () =>
    seo(
      'Soluções integradas de engenharia, segurança e tecnologia',
      'A RIGORIUM Engenharia atua com segurança contra incêndio, segurança do trabalho, georreferenciamento, avaliações, perícias e regularização de imóveis. Precisão para planejar. Confiança para transformar.'
    ),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="hero">
        <div className="site-wrap hero-inner">
          <div className="hero-copy">
            <img className="hero-logo" src={logo.url} alt="Logotipo oficial RIGORIUM Engenharia" />
            <div className="eyebrow">PRECISÃO • CONFIANÇA • EXCELÊNCIA</div>
            <h1>Soluções integradas de engenharia, segurança e tecnologia.</h1>
            <p>
              A RIGORIUM Engenharia une rigor técnico, transparência e responsabilidade para
              planejar, avaliar e regularizar com segurança. Precisão para planejar. Confiança
              para transformar.
            </p>
            <div className="hero-actions">
              <Button asChild variant="gold" className="h-12">
                <Link to="/contato">
                  Solicitar atendimento <ArrowUpRight />
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-12">
                <Link to="/servicos">Conhecer os serviços</Link>
              </Button>
            </div>
          </div>
          <div className="hero-media">
            <img src={building.url} alt="Edificação corporativa representando a atuação da RIGORIUM Engenharia" />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-wrap">
          <div className="section-head">
            <div className="eyebrow">COMO ATUAMOS</div>
            <h2>Engenharia com método, clareza e responsabilidade.</h2>
          </div>
          <div className="pillars">
            <article>
              <ShieldCheck />
              <h3>Rigor técnico</h3>
              <p>Cada análise segue metodologia, normas aplicáveis e evidências verificáveis.</p>
            </article>
            <article>
              <Compass />
              <h3>Transparência</h3>
              <p>Escopo, limites e responsabilidades são apresentados com clareza desde o início.</p>
            </article>
            <article>
              <FileCheck2 />
              <h3>Responsabilidade</h3>
              <p>Atuação dentro das atribuições profissionais, sem promessas que a técnica não sustenta.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="site-wrap">
          <div className="section-head">
            <div className="eyebrow">SOLUÇÕES DE ENGENHARIA</div>
            <h2>Serviços para proteger, avaliar e regularizar.</h2>
            <p>Oito frentes de atuação integradas para empresas, propriedades rurais e urbanas.</p>
          </div>
          <ServicesGrid featured />
          <div className="section-more">
            <Button asChild variant="outline">
              <Link to="/servicos">
                Ver todos os serviços <ArrowUpRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-wrap split">
          <div>
            <div className="eyebrow">A RIGORIUM</div>
            <h2>Precisão para planejar. Confiança para transformar.</h2>
            <p>
              A RIGORIUM Engenharia nasceu para oferecer soluções técnicas com seriedade e
              compromisso. Atuamos em segurança contra incêndio, segurança do trabalho,
              georreferenciamento, avaliações, perícias, inspeções e regularização de imóveis,
              sempre com ética e responsabilidade técnica.
            </p>
            <Button asChild variant="outline" className="mt-6">
              <Link to="/a-empresa">
                Conheça a empresa <ArrowUpRight />
              </Link>
            </Button>
          </div>
          <div>
            <div className="eyebrow">PERGUNTAS FREQUENTES</div>
            <h2>Dúvidas comuns, respostas diretas.</h2>
            <FAQList items={faqs.slice(0, 4)} />
            <div className="section-more">
              <Link className="text-arrow" to="/perguntas-frequentes">
                Ver todas as perguntas <ArrowUpRight />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
