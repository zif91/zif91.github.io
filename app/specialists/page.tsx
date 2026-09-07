import { Cta } from '../components/Cta';
import { Breadcrumbs, Footer, Header } from '../components/Chrome';
import { SpecialistCatalog } from '../components/SpecialistCatalog';

export const metadata = { title: 'Специалисты — Гармония', description: 'Знакомство с командой: направления, подходы и форматы работы психологов.' };
export default function SpecialistsPage() {
  return <><Header /><main id="main" className="inner-main"><Breadcrumbs items={[{ label: 'Специалисты' }]} />
    <section className="inner-hero"><span className="section-kicker">Люди, которые рядом</span><h1>Встреча начинается<br />с доверия</h1><p>Познакомьтесь с подходами специалистов. А если выбирать непросто — расскажите о своей ситуации, и мы поможем.</p></section>
    <section className="catalog-section"><SpecialistCatalog /></section><Cta /></main><Footer /></>;
}
