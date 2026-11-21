import { createFileRoute } from '@tanstack/react-router';
import { PageTop } from '@/components/site/layout';
import { seo, siteConfig } from '@/lib/site-config';

export const Route = createFileRoute('/termos-de-uso')({
  head: () =>
    seo(
      'Termos de Uso',
      'Condições de uso do site da RIGORIUM Engenharia.'
    ),
  component: TermosDeUso,
});

function TermosDeUso() {
  return (
    <>
      <PageTop title="Termos de Uso" description="Última atualização: novembro de 2026." />
      <section className="section">
        <div className="site-wrap prose-block">
          <h2>1. Conteúdo informativo</h2>
          <p>
            O conteúdo deste site tem caráter informativo e institucional. Ele não constitui
            proposta comercial, laudo, parecer ou orientação técnica individualizada.
          </p>
          <h2>2. Serviços</h2>
          <p>
            A contratação de qualquer serviço depende de análise de escopo, documentação e
            viabilidade, formalizada em proposta própria. Documentos como AVCB e CLCB são emitidos
            exclusivamente pelos órgãos competentes; a RIGORIUM atua com projetos, consultoria e
            assessoria técnica.
          </p>
          <h2>3. Assistente virtual</h2>
          <p>
            O assistente virtual Eng. Rafa utiliza respostas predefinidas e não substitui avaliação
            profissional. Suas respostas não configuram orientação técnica, jurídica ou
            orçamentária.
          </p>
          <h2>4. Propriedade intelectual</h2>
          <p>
            A marca, o logotipo e os conteúdos deste site pertencem à RIGORIUM Engenharia e não
            podem ser reproduzidos sem autorização.
          </p>
          <h2>5. Contato</h2>
          <p>Dúvidas sobre estes termos podem ser enviadas para {siteConfig.email}.</p>
        </div>
      </section>
    </>
  );
}
