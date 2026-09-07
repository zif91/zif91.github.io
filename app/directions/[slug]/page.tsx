import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Cta } from '../../components/Cta';
import { Breadcrumbs, Footer, Header } from '../../components/Chrome';
import { Photo } from '../../components/Photo';
import { directions, specialists } from '../../lib/content';
import { portraitSrc } from '../../lib/media';
export function generateStaticParams() { return directions.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const item = directions.find(x => x.slug === slug); if (!item) return {};
  return { title: `${item.title} — Гармония`, description: item.lead, openGraph: { title: `${item.title} — Гармония`, description: item.lead, images: [] }, twitter: { title: `${item.title} — Гармония`, description: item.lead, images: [] } };
}
const matching: Record<string, readonly string[]> = { anxiety: ['maria-sokolova', 'elena-romanova'], burnout: ['maria-sokolova', 'anton-vlasov'], couples: ['anton-vlasov'], addiction: ['elena-romanova'], panic: ['maria-sokolova'], sleep: ['maria-sokolova'] };
export default async function DirectionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const item = directions.find(x => x.slug === slug); if (!item) notFound();
  return <><Header /><main id="main" className="inner-main"><Breadcrumbs items={[{ label: 'С чем помогаем', href: '/directions/' }, { label: item.title }]} />
    <section className={`direction-hero ${item.color}`}><span className="section-kicker">Начать можно с разговора</span><h1>{item.title}</h1><p>{item.lead}</p><a className="primary-button" href="/booking/">Обсудить ситуацию <span aria-hidden="true">↗</span></a></section>
    <section className="direction-body"><div><span className="section-kicker">Возможно, вам знакомо</span><h2>Когда стоит обратиться</h2></div><ul>{item.signs.map(sign => <li key={sign}>{sign}</li>)}</ul><div><span className="section-kicker">Что будет на встречах</span><h2>Без оценок<br />и готовых рецептов</h2></div><p>{item.process}</p></section>
    <section className="related-doctors"><span className="section-kicker">Специалисты по запросу · демонстрационные профили</span><div>{specialists.filter(doctor => matching[slug]?.includes(doctor.slug)).map(doctor => <a href={`/specialists/${doctor.slug}/`} key={doctor.slug}><span className="mini-avatar"><Photo src={portraitSrc(doctor.slug)} alt="" /></span><span><b>{doctor.name}</b><small>{doctor.role}</small></span><i aria-hidden="true">↗</i></a>)}</div></section><Cta /></main><Footer /></>;
}
