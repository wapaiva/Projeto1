import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageTop, ContactCTA } from '@/components/site/layout';
import { seo } from '@/lib/site-config';
import { values } from '@/lib/services';

export const Route = createFileRoute('/a-empresa')({
  head: () =>
    seo(
      'A Empresa',
      'Conheça a RIGORIUM Engenharia: soluções integradas de engenharia, segurança e tecnologia com rigor técnico, ética e transparência.'
    ),
  component: AEmpresa,
});

function AEmpresa() {
  return (
    <>
      <PageTop
        title="A RIGORIUM Engenharia"
        description="Soluções integradas de engenharia, segurança e tecnologia."
      />
      <section className="section">
        <div className="site-wrap prose-block">
          <h2>Quem somos</h2>
          <p>
            A RIGORIUM Engenharia é uma empresa de soluções integradas de engenharia, segurança e
            tecnologia. Nosso trabalho é orientado por três princípios que resumem nossa identidade:
            precisão, confiança e excelência.
          </p>
          <p>
            Atuamos em oito frentes: segurança contra incêndio e pânico, segurança do trabalho,
            georreferenciamento de imóveis rurais, desmembramento e remembramento, assistência
            técnica judicial e extrajudicial, avaliações e perícias, inspeções e vistorias, e
            regularização de imóveis e edificações.
          </p>
          <h2>Nosso compromisso</h2>
          <p>
            Não prometemos resultados que dependem de órgãos públicos, nem emitimos documentos que
            são de competência de outras instituições. Nosso compromisso é com a qualidade técnica,
            a clareza das informações e o respeito às atribuições profissionais.
          </p>
          <h2>Nossos valores</h2>
          <ul className="values-list">
            {values.map((v) => (
              <li key={v}>{v}</li>
            ))}
          </ul>
          <div className="section-more">
            <Button asChild variant="gold">
              <Link to="/missao-visao-valores">
                Missão, visão e valores <ArrowUpRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
