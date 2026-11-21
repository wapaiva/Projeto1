import { createFileRoute } from '@tanstack/react-router';
import { Mail, ShieldCheck, Clock3 } from 'lucide-react';
import { PageTop } from '@/components/site/layout';
import { ContactForm } from '@/components/site/contact-form';
import { seo, siteConfig } from '@/lib/site-config';

export const Route = createFileRoute('/contato')({
  head: () =>
    seo(
      'Contato — Solicite Atendimento',
      'Solicite atendimento da RIGORIUM Engenharia. Descreva sua necessidade e nossa equipe analisará o escopo e a viabilidade.'
    ),
  component: Contato,
});

function Contato() {
  return (
    <>
      <PageTop
        title="Solicite um Atendimento"
        description="Conte sua necessidade. Nossa equipe analisará o escopo, os documentos e a viabilidade antes de qualquer proposta."
      />
      <section className="section">
        <div className="site-wrap split">
          <div>
            <ContactForm />
          </div>
          <aside className="service-aside">
            <div className="aside-card">
              <div className="eyebrow">CANAL OFICIAL</div>
              <p className="aside-contact">
                <Mail /> {siteConfig.email}
              </p>
              <p>
                O formulário é o canal recomendado: sua solicitação fica registrada com protocolo
                e pode ser analisada com segurança.
              </p>
            </div>
            <div className="aside-card">
              <div className="eyebrow">COMO FUNCIONA</div>
              <p className="aside-step">
                <ShieldCheck /> Sua solicitação é registrada de forma privada e recebe um protocolo.
              </p>
              <p className="aside-step">
                <Clock3 /> A equipe analisa o escopo e retorna pelos dados informados, conforme a
                disponibilidade do atendimento.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
