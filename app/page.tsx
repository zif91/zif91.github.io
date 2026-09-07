import { Header, Footer } from './components/Chrome';
import { SpecialistCatalog } from './components/SpecialistCatalog';
import { ArticleCards } from './components/ArticleCard';
import { Photo } from './components/Photo';
import { BookingForm } from './booking/BookingForm';
import { portraitSrc, roomSrc } from './lib/media';
import { specialists } from './lib/content';
import Link from 'next/link';

const topics = [['Тревога', 'anxiety'], ['Выгорание', 'burnout'], ['Отношения', 'couples'], ['Панические атаки', 'panic'], ['Нарушения сна', 'sleep']];

export default function Home() {
  return <><Header /><main id="main">
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow"><span aria-hidden="true" />Москва и онлайн</p>
        <h1>С вами всё<br />не так сложно,<br />как кажется</h1>
        <p className="hero-lead">Не нужно разбираться в методах терапии и выбирать психолога наугад. Расскажите, что беспокоит, — мы поможем найти своего специалиста.</p>
        <a className="primary-button" href="/booking/">Подобрать психолога <span aria-hidden="true">↗</span></a>
        <p className="free-note">Первый разговор по подбору — бесплатно</p>
        <div className="trust-line"><div className="faces" aria-hidden="true">{specialists.map(doctor => <Photo key={doctor.slug} src={portraitSrc(doctor.slug)} alt="" />)}</div><p>Сначала — разговор.<br /><strong>Потом — ваш выбор.</strong></p></div>
      </div>
      <figure className="hero-visual"><Photo src={roomSrc} alt="Визуализация светлого кабинета: два кресла для спокойного разговора" priority />
        <div className="hero-photo-caption"><span className="caption-mark" aria-hidden="true">“</span><p>Не обязательно справляться<br />со всем в одиночку.</p><span className="caption-small">Место для вашего разговора</span></div>
        <figcaption>Концепция пространства · AI-визуализация</figcaption>
      </figure>
    </section>
    <section className="topic-strip" aria-label="Частые запросы"><p>Что беспокоит<br />вас сейчас?</p><div className="topic-list">{topics.map(([name, slug]) => <a href={`/directions/${slug}/`} key={slug}>{name}<span aria-hidden="true">↗</span></a>)}</div></section>
    <section className="section specialists-section">
      <div className="section-heading"><div><span className="section-kicker">Люди, которые рядом</span><h2>Найдите своего человека</h2></div><p>Важно не только образование и опыт, но и ощущение: вас слышат, понимают и не осуждают.</p></div>
      <SpecialistCatalog />
    </section>
    <section className="section how-section">
      <div className="how-intro"><span className="section-kicker">Первый шаг</span><h2>Можно просто<br />рассказать о себе</h2><p>«Мне тревожно», «не понимаю, что происходит», «мы больше не слышим друг друга». Этого достаточно, чтобы начать разговор.</p><a href="/how-it-works/" className="text-link">Как проходит подбор <span aria-hidden="true">↗</span></a></div>
      <div className="steps">
        <article><span>01</span><div><h3>Расскажите, что беспокоит</h3><p>На бесплатном разговоре уточним вашу ситуацию. Можно говорить только о том, чем готовы поделиться.</p></div></article>
        <article><span>02</span><div><h3>Получите персональный подбор</h3><p>Учтём запрос, пожелания, формат и бюджет. Объясним, почему предлагаем именно этого специалиста.</p></div></article>
        <article><span>03</span><div><h3>Решите, готовы ли начать</h3><p>Задайте вопросы и выберите удобное время. Решение о дальнейших встречах остаётся за вами.</p></div></article>
      </div>
    </section>
    <section className="section service-section">
      <div className="section-heading"><div><span className="section-kicker">С чем помогаем</span><h2>Ваша ситуация важнее<br />названия метода</h2></div><p>Не нужно приходить с готовым диагнозом. Начните с того, что отзывается вам сейчас.</p></div>
      <div className="service-grid">
        <Link href="/directions/anxiety/" className="service-card coral"><span className="service-category">Тревога и панические атаки</span><h3>«Всё понимаю головой,<br />но спокойнее не становится»</h3><p>Напряжение, навязчивые мысли, страх, который мешает жить.</p><span className="service-link">Об этом запросе <span aria-hidden="true">↗</span></span></Link>
        <Link href="/directions/couples/" className="service-card sage"><span className="service-category">Отношения</span><h3>«Мы рядом,<br />но как будто далеко»</h3><p>Повторяющиеся ссоры, потеря доверия, трудности в паре.</p><span className="service-link">Об этом запросе <span aria-hidden="true">↗</span></span></Link>
        <Link href="/directions/burnout/" className="service-card sand"><span className="service-category">Выгорание</span><h3>«Сил нет даже на то,<br />что раньше радовало»</h3><p>Усталость, раздражение и ощущение, что вы живёте на автопилоте.</p><span className="service-link">Об этом запросе <span aria-hidden="true">↗</span></span></Link>
        <Link href="/directions/addiction/" className="service-card dark"><span className="service-category">Зависимость и поддержка близких</span><h3>«Хочу изменить ситуацию,<br />но не справляюсь один»</h3><p>Бережный разговор без осуждения — для самого человека и его семьи.</p><span className="service-link">Об этом запросе <span aria-hidden="true">↗</span></span></Link>
      </div>
      <div className="section-tail"><p>Не нашли свою ситуацию? Не обязательно точно её называть.</p><a className="text-link" href="/booking/">Помогите мне разобраться <span aria-hidden="true">↗</span></a></div>
    </section>
    <section className="section proof-section">
      <div className="proof-copy"><span className="section-kicker">Поддержка на каждом шаге</span><h2>Не просто каталог.<br />Команда на вашей стороне.</h2><p>От первого «мне нужна помощь» до знакомства со специалистом — мы рядом, чтобы вам было проще начать.</p></div>
      <div className="proof-list"><article><span aria-hidden="true">✓</span><div><h3>Понятный выбор</h3><p>Объясняем, как опыт специалиста связан с вашим запросом.</p></div></article><article><span aria-hidden="true">✓</span><div><h3>Без давления</h3><p>Можно задать вопросы и взять время на решение.</p></div></article><article><span aria-hidden="true">✓</span><div><h3>Можно выбрать другого</h3><p>Если контакт не сложился, обсудим, что важно учесть при новом подборе.</p></div></article></div>
    </section>
    <section className="section article-section"><div className="section-heading"><div><span className="section-kicker">Почитать в спокойном темпе</span><h2>Лучше понимать себя</h2></div><Link className="text-link" href="/articles/">Все материалы <span aria-hidden="true">↗</span></Link></div><ArticleCards /></section>
    <section className="booking-section"><div className="booking-copy"><span className="section-kicker">Начнём с разговора</span><h2>Расскажите,<br />что сейчас важно</h2><p>Оставьте заявку на бесплатный подбор. Поможем разобраться в запросе и выбрать психолога — онлайн или очно в Москве.</p><ul><li>Без обязательств</li><li>В вашем темпе</li><li>Без сложной анкеты</li></ul></div><BookingForm compact /></section>
  </main><Footer /></>;
}
