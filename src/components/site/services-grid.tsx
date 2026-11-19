import { Link } from '@tanstack/react-router';
import { ArrowUpRight } from 'lucide-react';
import { services } from '@/lib/services';
export function ServicesGrid({featured=false}:{featured?:boolean}){const list=featured?[services[0],services[1],services[2],services[5],services[7],services[4]]:services;return <div className="services-grid">{list.map((s,i)=>s&&<article className="service-card" key={s.slug}><div className="service-card-top"><s.icon/><span>0{i+1}</span></div><h3>{s.short}</h3><p>{s.description}</p><Link className="text-arrow" to="/servicos/$slug" params={{slug:s.slug}}>Conheça o serviço <ArrowUpRight/></Link></article>)}</div>}
