import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Breadcrumbs, Footer, Header } from '../../components/Chrome';
import { Cta } from '../../components/Cta';
import { Photo } from '../../components/Photo';
import { articles } from '../../lib/content';
import { articleSrc, siteOrigin } from '../../lib/media';
export function generateStaticParams() { return articles.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params; const article = articles.find(x => x.slug === slug); if (!article) return {};
  const image = siteOrigin + articleSrc(slug);
  return { title: `${article.title} — Гармония`, description: article.summary, openGraph: { title: article.title, description: article.summary, images: [image] }, twitter: { title: article.title, description: article.summary, images: [image] } };
}
export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const article = articles.find(x => x.slug === slug); if (!article) notFound();
  return <><Header /><main id="main" className="inner-main"><Breadcrumbs items={[{ label: 'Статьи', href: '/articles/' }, { label: article.title }]} />
    <article className="longread"><header><span className="article-label">{article.category}</span><h1>{article.title}</h1><p>{article.summary}</p><div className="article-review-note">Образец статьи для дизайн-концепции. Редакционная и медицинская проверка — перед запуском.</div></header>
      <div className="longread-hero"><Photo src={articleSrc(slug)} alt="Предметная фотография в спокойной палитре" landscape priority /></div>
      <div className="longread-body"><p className="lead-paragraph">{article.intro}</p>{article.sections.map(section => <section key={section[0]}><h2>{section[0]}</h2><p>{section[1]}</p></section>)}<aside>Материал носит информационный характер и не заменяет диагностику или консультацию специалиста.</aside></div>
    </article><Cta /></main><Footer /></>;
}
