import { Breadcrumbs, Footer, Header } from '../components/Chrome';
import { Cta } from '../components/Cta';
import { ArticleCards } from '../components/ArticleCard';
export const metadata = { title: 'Статьи — Гармония', description: 'Понятно о тревоге, отношениях и выгорании.' };
export default function ArticlesPage() {
  return <><Header /><main id="main" className="inner-main"><Breadcrumbs items={[{ label: 'Статьи' }]} />
    <section className="inner-hero"><span className="section-kicker">Почитать в спокойном темпе</span><h1>Лучше понимать себя<br />и друг друга</h1><p>О чувствах и ситуациях, с которыми непросто оставаться наедине.</p></section>
    <section className="article-list"><ArticleCards /><p className="demo-note">Образцы материалов для дизайна. Перед запуском тексты пройдут проверку специалистов клиники.</p></section><Cta title="Можно обсудить то, что откликнулось" /></main><Footer /></>;
}
