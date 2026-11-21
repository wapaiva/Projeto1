import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { PageTop } from '@/components/site/layout';
import { seo } from '@/lib/site-config';

export const Route = createFileRoute('/aviso-assistente-virtual')({
  head: () =>
    seo(
      'Aviso do Assistente Virtual',
      'Entenda como funciona o Eng. Rafa, assistente virtual da RIGORIUM Engenharia: respostas predefinidas, sem IA generativa.'
    ),
  component: AvisoAssistente,
});

function AvisoAssistente() {
  return (
    <>
      <PageTop
        title="Sobre o Eng. Rafa"
        description="Transparência sobre o nosso assistente virtual."
      />
      <section className="section">
        <div className="site-wrap prose-block">
          <h2>O que é o Eng. Rafa</h2>
          <p>
            O Eng. Rafa é o assistente virtual da RIGORIUM Engenharia. Ele foi criado para ajudar
            você a conhecer nossos serviços e direcionar sua solicitação ao atendimento adequado.
          </p>
          <h2>Como ele funciona</h2>
          <p>
            O Eng. Rafa utiliza respostas predefinidas, escritas pela nossa equipe. Ele não usa
            inteligência artificial generativa e não inventa orientações técnicas. Quando uma dúvida
            exige análise, ele direciona você ao formulário de atendimento.
          </p>
          <h2>O que ele não faz</h2>
          <ul>
            <li>Não emite documentos, laudos ou pareceres.</li>
            <li>Não determina valores de imóveis nem garante aprovações junto a órgãos públicos.</li>
            <li>Não substitui avaliação profissional de engenharia nem assessoria jurídica.</li>
          </ul>
          <div className="section-more">
            <Button asChild variant="gold">
              <Link to="/contato">
                Solicitar atendimento humano <ArrowUpRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
