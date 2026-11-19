import { faqs } from '@/lib/services';
export function FAQList({items=faqs}:{items?:string[][]}){return <div className="faq-list">{items.map(([question,answer])=><details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>}
