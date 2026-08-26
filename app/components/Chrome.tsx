export function Header() {
  return <header className="site-header inner-header">
    <a className="brand" href="/" aria-label="Гармония — на главную"><span className="brand-mark">г</span><span>гармония</span></a>
    <nav aria-label="Основная навигация"><a href="/specialists">Специалисты</a><a href="/directions">С чем помогаем</a><a href="/how-it-works">Как это работает</a><a href="/articles">Статьи</a></nav>
    <a className="header-action" href="/booking">Подобрать психолога</a>
  </header>;
}

export function Footer() {
  return <footer><a className="brand footer-brand" href="/"><span className="brand-mark">г</span><span>гармония</span></a><div><a href="/specialists">Специалисты</a><a href="/directions">Направления</a><a href="/articles">Статьи</a><a href="/booking">Запись</a></div><p>Прототип · Москва · 2026<br />Информация на сайте не заменяет консультацию врача.</p></footer>;
}

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return <div className="breadcrumbs"><a href="/">Главная</a>{items.map((item) => <span key={item.label}>/ {item.href ? <a href={item.href}>{item.label}</a> : item.label}</span>)}</div>;
}
