import { createFileRoute } from '@tanstack/react-router';
import { PageTop, ContactCTA } from '@/components/site/layout';
import { seo } from '@/lib/site-config';
import { values } from '@/lib/services';

export const Route = createFileRoute('/missao-visao-valores')({
  head: () =>
    seo(
      'Missão, Visão e Valores',
      'Missão, visão e valores da RIGORIUM Engenharia: rigor técnico, ética, qualidade e compromisso com o cliente.'
    ),
  component: MissaoVisaoValores,
});

function MissaoVisaoValores() {
  return (
    <>
      <PageTop
        title="Missão, Visão e Valores"
        description="Os princípios que orientam cada projeto da RIGORIUM Engenharia."
      />
      <section className="section">
        <div className="site-wrap">
          <div className="pillars">
            <article>
              <h3>Missão</h3>
              <p>
                Oferecer soluções de engenharia, segurança e tecnologia com rigor técnico,
                transparência e responsabilidade, contribuindo para a proteção de pessoas e
                patrimônios.
              </p>
            </article>
            <article>
              <h3>Visão</h3>
              <p>
                Ser referência em soluções integradas de engenharia, reconhecida pela precisão
                técnica, pela ética e pela confiança construída com cada cliente.
              </p>
            </article>
            <article>
              <h3>Compromisso</h3>
              <p>
                Atuar dentro das atribuições profissionais, com clareza sobre escopo, limites e
                responsabilidades de cada serviço.
              </p>
            </article>
          </div>
          <div className="prose-block mt-12">
            <h2>Valores</h2>
            <ul className="values-list">
              {values.map((v) => (
                <li key={v}>{v}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
