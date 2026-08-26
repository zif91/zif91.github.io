import { Cta } from '../components/Cta';
import { Breadcrumbs, Footer, Header } from '../components/Chrome';
import { specialists } from '../lib/content';

export const metadata = { title: 'Специалисты — Гармония', description: 'Психологи клиники Гармония: направления, опыт, стоимость и форматы работы.' };

export default function SpecialistsPage() {
  return <><Header /><main className="inner-main"><Breadcrumbs items={[{ label: 'Специалисты' }]} /><section className="inner-hero"><span className="section-kicker">Команда</span><h1>Специалисты,<br /><em>которым можно доверять</em></h1><p>Проверяем образование и опыт, проводим интервью и поддерживаем регулярную супервизию.</p></section><div className="catalog-toolbar"><span>3 специалиста</span><div><button className="active">Все</button><button>Индивидуально</button><button>Для пары</button><button>Зависимость</button></div></div><section className="specialist-grid inner-grid">{specialists.map((doctor) => <article className="specialist-card" key={doctor.slug}><a href={`/specialists/${doctor.slug}`} className={`doctor-portrait ${doctor.tone}`}><span>{doctor.initials}</span><i /></a><div className="availability"><span /> Ближайшее окно завтра</div><h3>{doctor.name}</h3><p className="role">{doctor.role}</p><div className="tag-row">{doctor.tags.map(tag => <span key={tag}>{tag}</span>)}</div><div className="card-meta"><span>{doctor.experience} опыта</span><b>от {doctor.price}</b></div><a href={`/specialists/${doctor.slug}`}>Посмотреть профиль <span>↗</span></a></article>)}</section><Cta /></main><Footer /></>;
}
