import { createFileRoute } from '@tanstack/react-router';
import { PageTop, ContactCTA } from '@/components/site/layout';
import { FAQList } from '@/components/site/faq-list';
import { seo } from '@/lib/site-config';

export const Route = createFileRoute('/perguntas-frequentes')({
  head: () =>
    seo(
      'Perguntas Frequentes',
      'Respostas diretas sobre AVCB, CLCB, PGR, LTCAT, georreferenciamento, avaliações e atendimento da RIGORIUM Engenharia.'
    ),
  component: PerguntasFrequentes,
});

function PerguntasFrequentes() {
  return (
    <>
      <PageTop
        title="Perguntas Frequentes"
        description="Respostas claras e honestas sobre nossos serviços e limites de atuação."
      />
      <section className="section">
        <div className="site-wrap prose-block">
          <FAQList />
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
