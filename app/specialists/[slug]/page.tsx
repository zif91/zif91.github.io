import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Cta } from '../../components/Cta';
import { Breadcrumbs, Footer, Header } from '../../components/Chrome';
import { Photo } from '../../components/Photo';
import { specialists } from '../../lib/content';
import { portraitSrc, siteOrigin } from '../../lib/media';

export function generateStaticParams() { return specialists.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const doctor = specialists.find(item => item.slug === slug); if (!doctor) return {};
  const image = { url: siteOrigin + portraitSrc(slug), alt: 'AI-портрет для демонстрационного профиля' };
  return { title: `${doctor.name} — Гармония`, description: `Демонстрационный профиль. ${doctor.role}. ${doctor.formats}.`,
    openGraph: { title: `${doctor.name} — Гармония`, description: 'Демонстрационный профиль специалиста', images: [image] },
    twitter: { title: `${doctor.name} — Гармония`, description: 'Демонстрационный профиль специалиста', images: [image.url] } };
}

const tagLinks: Record<string, string> = { 'Тревога': 'anxiety', 'Выгорание': 'burnout', 'Панические атаки': 'panic', 'Отношения': 'couples', 'Кризис пары': 'couples', 'Зависимость': 'addiction', 'Поддержка близких': 'addiction' };
export default async function SpecialistPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const doctor = specialists.find(item => item.slug === slug); if (!doctor) notFound();
  return <><Header /><main id="main" className="inner-main"><Breadcrumbs items={[{ label: 'Специалисты', href: '/specialists/' }, { label: doctor.name }]} />
    <section className="profile-hero"><div className="doctor-portrait profile-photo"><Photo src={portraitSrc(slug)} alt={`Вымышленный образ: ${doctor.name}`} priority /><span className="portrait-label">AI-портрет для макета</span></div>
      <div className="profile-copy"><span className="section-kicker">{doctor.role}</span><h1>{doctor.name}</h1><blockquote>«{doctor.quote}»</blockquote>
        <div className="profile-facts"><span><small>Опыт</small>{doctor.experience}</span><span><small>Сессия</small>{doctor.price}</span><span><small>Формат</small>{doctor.formats}</span></div>
        <p className="profile-demo">Демонстрационный профиль. Имя, квалификация, образование и стоимость условные; фото сгенерировано для дизайна.</p>
        <a className="primary-button" href="/booking/">Обсудить запись <span aria-hidden="true">↗</span></a>
      </div>
    </section>
    <section className="profile-content"><div><span className="section-kicker">С чем работает</span><h2>Можно прийти<br />с этим</h2></div><div className="large-tags">{doctor.tags.map(tag => <a href={`/directions/${tagLinks[tag]}/`} key={tag}>{tag}</a>)}</div>
      <div><span className="section-kicker">Подход</span><h2>Как проходят встречи</h2><p>{doctor.approach}</p></div>
      <div><span className="section-kicker">Образование · образец заполнения</span><ol>{doctor.education.map(item => <li key={item}>{item}</li>)}</ol></div>
    </section><Cta title="Важно почувствовать, что это ваш человек" /></main><Footer /></>;
}
