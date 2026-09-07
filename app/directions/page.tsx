import { Cta } from '../components/Cta';
import { Breadcrumbs, Footer, Header } from '../components/Chrome';
import { directions } from '../lib/content';
export const metadata = { title: 'С чем помогаем — Гармония', description: 'Начните с проблемы, а не с выбора метода терапии. Направления психологической помощи.' };
export default function DirectionsPage() {
  return <><Header /><main id="main" className="inner-main"><Breadcrumbs items={[{ label: 'С чем помогаем' }]} />
    <section className="inner-hero"><span className="section-kicker">Ваша ситуация — точка отсчёта</span><h1>Не нужно знать,<br />как это называется</h1><p>Не обязательно приходить с диагнозом или названием терапии. Выберите ситуацию, которая звучит знакомо, или просто поговорите с нами.</p></section>
    <section className="direction-list">{directions.map(item => <a href={`/directions/${item.slug}/`} className={item.color} key={item.slug}><h2>{item.title}</h2><p>{item.lead}</p><span className="text-link">Об этом запросе <span aria-hidden="true">↗</span></span></a>)}</section><Cta /></main><Footer /></>;
}
