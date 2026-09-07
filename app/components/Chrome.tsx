const links = [
  ['/directions/', 'С чем помогаем'], ['/specialists/', 'Специалисты'],
  ['/how-it-works/', 'Как это работает'], ['/articles/', 'Статьи'],
];

export function Header() {
  return <>
    <a className="skip-link" href="#main">Перейти к содержимому</a>
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Гармония — на главную"><span className="brand-mark" aria-hidden="true">г</span><span>гармония<small>психологическая клиника</small></span></Link>
      <nav className="desktop-nav" aria-label="Основная навигация">{links.map(([href, name]) => <a href={href} key={href}>{name}</a>)}</nav>
      <a className="header-action" href="/booking/">Подобрать психолога</a>
      <details className="mobile-menu"><summary aria-label="Открыть меню">Меню <span aria-hidden="true">☰</span></summary><nav aria-label="Мобильная навигация">{links.map(([href, name]) => <a href={href} key={href}>{name}</a>)}<a href="/booking/">Подобрать психолога</a></nav></details>
    </header>
  </>;
}

export function Footer() {
  return <footer className="site-footer">
    <div className="footer-top"><div><Link className="brand" href="/"><span className="brand-mark" aria-hidden="true">г</span><span>гармония<small>психологическая клиника</small></span></Link><p>Можно не знать, с чего начать.<br />Для этого мы и рядом.</p></div>
      <nav aria-label="Навигация в подвале">{links.map(([href, name]) => <a href={href} key={href}>{name}</a>)}</nav>
      <div className="footer-contact"><span>Москва и онлайн</span><a href="/booking/">Обсудить свою ситуацию <span aria-hidden="true">↗</span></a><p>Первый разговор по подбору — бесплатно.</p></div>
    </div>
    <div className="footer-bottom"><p>© Гармония, 2026 · Дизайн-концепция</p><p>Портреты и интерьер созданы с помощью ИИ для демонстрации дизайна. Профили специалистов и цены условные. Формы не отправляют данные. Это не действующий сайт клиники.</p></div>
  </footer>;
}

export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return <nav className="breadcrumbs" aria-label="Хлебные крошки"><Link href="/">Главная</Link>{items.map(item => <span key={item.label}><span aria-hidden="true">/ </span>{item.href ? <Link href={item.href}>{item.label}</Link> : <span aria-current="page">{item.label}</span>}</span>)}</nav>;
}
import Link from 'next/link';
