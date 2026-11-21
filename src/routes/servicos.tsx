import { createFileRoute } from '@tanstack/react-router';
import { PageTop, ContactCTA } from '@/components/site/layout';
import { ServicesGrid } from '@/components/site/services-grid';
import { seo } from '@/lib/site-config';

export const Route = createFileRoute('/servicos')({
  head: () =>
    seo(
      'Serviços de Engenharia',
      'Conheça os oito serviços da RIGORIUM Engenharia: segurança contra incêndio, segurança do trabalho, georreferenciamento, avaliações, perícias, inspeções e regularização de imóveis.'
    ),
  component: Servicos,
});

function Servicos() {
  return (
    <>
      <PageTop
        title="Serviços de Engenharia"
        description="Oito frentes de atuação integradas para proteger, avaliar e regularizar."
      />
      <section className="section">
        <div className="site-wrap">
          <ServicesGrid />
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
