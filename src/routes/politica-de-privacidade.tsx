import { createFileRoute } from '@tanstack/react-router';
import { PageTop } from '@/components/site/layout';
import { seo, siteConfig } from '@/lib/site-config';

export const Route = createFileRoute('/politica-de-privacidade')({
  head: () =>
    seo(
      'Política de Privacidade',
      'Como a RIGORIUM Engenharia coleta, utiliza e protege os dados pessoais informados em seu site.'
    ),
  component: PoliticaPrivacidade,
});

function PoliticaPrivacidade() {
  return (
    <>
      <PageTop title="Política de Privacidade" description="Última atualização: novembro de 2026." />
      <section className="section">
        <div className="site-wrap prose-block">
          <h2>1. Dados coletados</h2>
          <p>
            Coletamos os dados informados por você no formulário de atendimento: nome, e-mail,
            telefone, cidade, estado, serviço desejado e descrição da necessidade. Não solicitamos
            documentos pessoais nem informações sensíveis pelo formulário.
          </p>
          <h2>2. Finalidade</h2>
          <p>
            Os dados são utilizados exclusivamente para analisar e responder à sua solicitação de
            atendimento. Não utilizamos essas informações para marketing nem as compartilhamos com
            terceiros para fins comerciais.
          </p>
          <h2>3. Armazenamento e segurança</h2>
          <p>
            As solicitações são armazenadas de forma privada em infraestrutura segura, com acesso
            restrito à equipe responsável pelo atendimento.
          </p>
          <h2>4. Seus direitos</h2>
          <p>
            Nos termos da Lei Geral de Proteção de Dados (Lei nº 13.709/2018), você pode solicitar
            a confirmação, o acesso, a correção ou a exclusão dos seus dados pessoais a qualquer
            momento pelo e-mail {siteConfig.email}.
          </p>
          <h2>5. Cookies</h2>
          <p>
            O site utiliza apenas recursos estritamente necessários ao seu funcionamento. Consulte
            a Política de Cookies para detalhes e para gerenciar suas preferências.
          </p>
          <h2>6. Contato</h2>
          <p>Dúvidas sobre esta política podem ser enviadas para {siteConfig.email}.</p>
        </div>
      </section>
    </>
  );
}
