import { createFileRoute } from '@tanstack/react-router';
import { Building2, Factory, Hotel, Home, Tractor, Store, Landmark, Warehouse } from 'lucide-react';
import { PageTop, ContactCTA } from '@/components/site/layout';
import { seo } from '@/lib/site-config';

export const Route = createFileRoute('/areas-de-atuacao')({
  head: () =>
    seo(
      'Áreas de Atuação',
      'A RIGORIUM Engenharia atende empresas, comércios, indústrias, hotéis, condomínios, propriedades rurais e imóveis urbanos.'
    ),
  component: AreasDeAtuacao,
});

const areas = [
  { icon: Factory, title: 'Indústrias', text: 'Segurança do trabalho, segurança contra incêndio e inspeções técnicas.' },
  { icon: Store, title: 'Comércios e empresas', text: 'Regularização, AVCB/CLCB e gestão de riscos ocupacionais.' },
  { icon: Hotel, title: 'Hotéis e hospedagem', text: 'Adequação de segurança e documentação técnica.' },
  { icon: Building2, title: 'Condomínios', text: 'Inspeções prediais, vistorias e laudos de conservação.' },
  { icon: Tractor, title: 'Propriedades rurais', text: 'Georreferenciamento, levantamentos e regularização rural.' },
  { icon: Home, title: 'Imóveis urbanos', text: 'Avaliações, regularização e vistorias de entrega e recebimento.' },
  { icon: Landmark, title: 'Demandas judiciais', text: 'Assistência técnica, perícias e pareceres para advogados e partes.' },
  { icon: Warehouse, title: 'Galpões e logística', text: 'Projetos de segurança e adequação de edificações.' },
];

function AreasDeAtuacao() {
  return (
    <>
      <PageTop
        title="Áreas de Atuação"
        description="Atendemos diferentes segmentos com soluções técnicas adequadas a cada realidade."
      />
      <section className="section">
        <div className="site-wrap">
          <div className="services-grid">
            {areas.map((a) => (
              <article className="service-card" key={a.title}>
                <div className="service-card-top">
                  <a.icon />
                </div>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
