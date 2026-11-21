import { createFileRoute, Link, notFound } from '@tanstack/react-router';
import { ArrowUpRight, CheckCircle2, TriangleAlert } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageTop, ContactCTA } from '@/components/site/layout';
import { seo } from '@/lib/site-config';
import { services } from '@/lib/services';

export const Route = createFileRoute('/servicos/$slug')({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) =>
    seo(
      loaderData?.service.title ?? 'Serviço',
      loaderData?.service.description ?? 'Serviço de engenharia da RIGORIUM Engenharia.',
      `/servicos/${loaderData?.service.slug ?? ''}`
    ),
  component: ServicoDetalhe,
});

function ServicoDetalhe() {
  const { service } = Route.useLoaderData();
  return (
    <>
      <PageTop title={service.title} description={service.description} eyebrow={service.category} />
      <section className="section">
        <div className="site-wrap split">
          <div className="prose-block">
            <h2>O que está incluído</h2>
            <ul className="check-list">
              {service.items.map((item) => (
                <li key={item}>
                  <CheckCircle2 /> {item}
                </li>
              ))}
            </ul>
            <h2>Entenda melhor</h2>
            <p>{service.explanation}</p>
            <h2>Benefícios</h2>
            <ul className="check-list">
              {service.benefits.map((b) => (
                <li key={b}>
                  <CheckCircle2 /> {b}
                </li>
              ))}
            </ul>
            <h2>Para quem é</h2>
            <p>{service.applications}</p>
          </div>
          <aside className="service-aside">
            <div className="aside-card">
              <div className="eyebrow">IMPORTANTE</div>
              <p className="aside-warning">
                <TriangleAlert /> {service.warning}
              </p>
            </div>
            <div className="aside-card">
              <div className="eyebrow">SOLICITE ATENDIMENTO</div>
              <p>Descreva sua necessidade e nossa equipe analisará o escopo e a viabilidade.</p>
              <Button asChild variant="gold" className="w-full">
                <Link to="/contato">
                  Solicitar atendimento <ArrowUpRight />
                </Link>
              </Button>
            </div>
          </aside>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
