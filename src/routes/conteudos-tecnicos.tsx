import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowUpRight } from 'lucide-react';
import { PageTop, ContactCTA } from '@/components/site/layout';
import { seo } from '@/lib/site-config';
import { services } from '@/lib/services';

export const Route = createFileRoute('/conteudos-tecnicos')({
  head: () =>
    seo(
      'Conteúdos Técnicos',
      'Central de conhecimento da RIGORIUM Engenharia: entenda AVCB, CLCB, PGR, LTCAT, georreferenciamento, avaliações e regularização de imóveis.'
    ),
  component: ConteudosTecnicos,
});

function ConteudosTecnicos() {
  return (
    <>
      <PageTop
        title="Central de Conhecimento"
        description="Explicações técnicas claras sobre os temas que mais geram dúvidas."
      />
      <section className="section">
        <div className="site-wrap">
          <div className="services-grid">
            {services.map((s) => (
              <article className="service-card" key={s.slug}>
                <div className="service-card-top">
                  <s.icon />
                </div>
                <h3>{s.short}</h3>
                <p>{s.explanation}</p>
                <Link className="text-arrow" to="/servicos/$slug" params={{ slug: s.slug }}>
                  Ver o serviço <ArrowUpRight />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
