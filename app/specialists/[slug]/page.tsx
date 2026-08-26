import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Cta } from '../../components/Cta';
import { Breadcrumbs, Footer, Header } from '../../components/Chrome';
import { specialists } from '../../lib/content';

export function generateStaticParams() { return specialists.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const doctor = specialists.find(item => item.slug === slug); if (!doctor) return {}; return { title: `${doctor.name} — Гармония`, description: `${doctor.role}. ${doctor.experience} опыта. ${doctor.formats}.`, openGraph: { title: `${doctor.name} — Гармония`, description: doctor.quote, images: [] }, twitter: { images: [] } }; }

export default async function SpecialistPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const doctor = specialists.find(item => item.slug === slug); if (!doctor) notFound();
  return <><Header /><main className="inner-main"><Breadcrumbs items={[{ label: 'Специалисты', href: '/specialists' }, { label: doctor.name }]} /><section className="profile-hero"><div className={`doctor-portrait profile-photo ${doctor.tone}`}><span>{doctor.initials}</span><i /></div><div className="profile-copy"><span className="section-kicker">{doctor.role}</span><h1>{doctor.name}</h1><blockquote>«{doctor.quote}»</blockquote><div className="profile-facts"><span><small>Опыт</small>{doctor.experience}</span><span><small>Сессия</small>{doctor.price}</span><span><small>Формат</small>{doctor.formats}</span></div><a className="primary-button" href="/booking">Записаться на знакомство <span>→</span></a></div></section><section className="profile-content"><div><span className="section-kicker">С чем работает</span><h2>Запросы</h2></div><div className="large-tags">{doctor.tags.map(tag => <a href="/directions" key={tag}>{tag}<span>↗</span></a>)}</div><div><span className="section-kicker">Подход</span><h2>Как проходят встречи</h2><p>{doctor.approach}</p></div><div><span className="section-kicker">Образование</span><ol>{doctor.education.map(item => <li key={item}>{item}</li>)}</ol></div></section><Cta title={`Познакомиться с ${doctor.name.split(' ')[0]}`} /></main><Footer /></>;
}
