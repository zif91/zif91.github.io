import { articles } from '../lib/content';
import { articleSrc } from '../lib/media';
import { Photo } from './Photo';

export function ArticleCards() {
  return <div className="article-grid">{articles.map(article =>
    <a href={`/articles/${article.slug}/`} className="article-card" key={article.slug}>
      <div className="article-image"><Photo src={articleSrc(article.slug)} alt="" landscape /></div>
      <div className="article-card-copy"><span className="article-label">{article.category}</span>
        <h3>{article.title}</h3><p>{article.summary}</p><span className="article-read">Читать статью <span aria-hidden="true">↗</span></span>
      </div>
    </a>)}</div>;
}
