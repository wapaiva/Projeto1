export const siteConfig = {
 name: 'RIGORIUM ENGENHARIA', signature: 'PRECISÃO • CONFIANÇA • EXCELÊNCIA',
 whatsapp: '5500000000000', whatsappEnabled: false, // Número ilustrativo: substituir e ativar somente com número oficial.
 email: 'rigoriumengenharia@gmail.com' as string | null, address: null as string | null, hours: null as string | null,
 cnpj: null as string | null, legalName: null as string | null, crea: null as string | null,
 technicalManager: null as string | null, professionalRegistration: null as string | null,
 canonicalOrigin: null as string | null,
};
export function whatsappUrl(service = 'serviços de engenharia') {
 if (!siteConfig.whatsappEnabled) return null;
 return `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(`Olá! Conheci a RIGORIUM Engenharia pelo site e gostaria de informações sobre ${service}.`)}`;
}
export function seo(title: string, description: string, path = '/') {
 return { meta: [{ title: `${title} | RIGORIUM Engenharia` }, { name: 'description', content: description }, { property: 'og:title', content: `${title} | RIGORIUM Engenharia` }, { property: 'og:description', content: description }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' }], ...(siteConfig.canonicalOrigin ? { links: [{rel:'canonical',href:siteConfig.canonicalOrigin+path}] } : {}) };
}
