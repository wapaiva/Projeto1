import { createFileRoute } from '@tanstack/react-router';
import { PageTop } from '@/components/site/layout';
import { seo } from '@/lib/site-config';

export const Route = createFileRoute('/politica-de-cookies')({
  head: () =>
    seo(
      'Política de Cookies',
      'Entenda como a RIGORIUM Engenharia utiliza cookies e como gerenciar suas preferências.'
    ),
  component: PoliticaCookies,
});

function PoliticaCookies() {
  return (
    <>
      <PageTop title="Política de Cookies" description="Última atualização: novembro de 2026." />
      <section className="section">
        <div className="site-wrap prose-block">
          <h2>1. O que são cookies</h2>
          <p>
            Cookies são pequenos arquivos ou registros armazenados no seu navegador que permitem o
            funcionamento de recursos do site e a memorização de preferências.
          </p>
          <h2>2. O que utilizamos</h2>
          <p>
            Atualmente utilizamos apenas recursos estritamente necessários ao funcionamento do
            site, incluindo o registro da sua escolha de preferências de privacidade. Nenhuma
            ferramenta analítica ou de marketing está ativa.
          </p>
          <h2>3. Categorias</h2>
          <ul>
            <li>
              <strong>Estritamente necessários:</strong> indispensáveis ao funcionamento do site e
              sempre ativos.
            </li>
            <li>
              <strong>Preferências:</strong> memorizam escolhas de uso. Inativos por padrão.
            </li>
            <li>
              <strong>Analíticos:</strong> medição de audiência. Inativos por padrão.
            </li>
            <li>
              <strong>Marketing:</strong> personalização de anúncios. Inativos por padrão.
            </li>
          </ul>
          <h2>4. Como gerenciar</h2>
          <p>
            Você pode alterar suas escolhas a qualquer momento pela opção "Preferências de cookies"
            no rodapé do site, ou apagar os dados do site nas configurações do seu navegador.
          </p>
        </div>
      </section>
    </>
  );
}
