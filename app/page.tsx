'use client';

import { FormEvent, useMemo, useState } from 'react';

const topics = ['Тревога', 'Выгорание', 'Отношения', 'Панические атаки', 'Нарушения сна'];
const filters = ['Все', 'Тревога', 'Отношения', 'Выгорание', 'Зависимость'];
const specialists = [
  { name: 'Мария Соколова', role: 'Психолог, КПТ-терапевт', tags: ['Тревога', 'Выгорание'], exp: '9 лет опыта', price: 'от 6 000 ₽', tone: 'mint', initials: 'МС' },
  { name: 'Антон Власов', role: 'Семейный психолог', tags: ['Отношения', 'Выгорание'], exp: '12 лет опыта', price: 'от 7 000 ₽', tone: 'sand', initials: 'АВ' },
  { name: 'Елена Романова', role: 'Клинический психолог', tags: ['Тревога', 'Зависимость'], exp: '15 лет опыта', price: 'от 7 000 ₽', tone: 'rose', initials: 'ЕР' },
];

export default function Home() {
  const [filter, setFilter] = useState('Все');
  const [sent, setSent] = useState(false);
  const visible = useMemo(() => filter === 'Все' ? specialists : specialists.filter((item) => item.tags.includes(filter)), [filter]);

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Гармония — на главную"><span className="brand-mark">г</span><span>гармония</span></a>
        <nav aria-label="Основная навигация"><a href="#specialists">Специалисты</a><a href="#directions">С чем помогаем</a><a href="#how">Как это работает</a><a href="#articles">Статьи</a></nav>
        <a className="header-action" href="#booking">Подобрать психолога</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="eyebrow"><span /> Психологическая клиника в Москве и онлайн</div>
          <h1>С вами всё<br /><em>не так сложно,</em><br />как кажется</h1>
          <p className="hero-lead">Поможем понять, что происходит, и подберём специалиста, с которым будет спокойно и безопасно.</p>
          <div className="hero-actions"><a className="primary-button" href="#booking">Подобрать специалиста <span>→</span></a><span className="free-note"><b>20 минут бесплатно</b><small>Знакомство с психологом</small></span></div>
          <div className="trust-line"><span className="faces">МСА</span><span><b>4,9</b> · Нам доверяют более 2 000 клиентов</span></div>
        </div>
        <div className="hero-visual" aria-label="Спокойное пространство для разговора"><div className="sun" /><div className="arch"><div className="portrait-shape"><span /></div></div><div className="quote-card">«Не обязательно справляться со всем в одиночку»</div><div className="privacy-card"><b>Конфиденциально</b><span>Без постановки на учёт</span></div></div>
      </section>

      <section className="topic-strip" id="directions"><p>Можно начать с того,<br />что беспокоит сейчас</p><div className="topic-list">{topics.map((topic, index) => <a href="#booking" key={topic}><span>0{index + 1}</span>{topic}</a>)}</div></section>

      <section className="section specialists-section" id="specialists">
        <div className="section-heading"><div><span className="section-kicker">Специалисты</span><h2>Найдите своего человека</h2></div><p>Все специалисты проходят проверку образования, супервизию и регулярно повышают квалификацию.</p></div>
        <div className="filter-row" aria-label="Фильтры специалистов">{filters.map((item) => <button key={item} onClick={() => setFilter(item)} className={filter === item ? 'active' : ''}>{item}</button>)}</div>
        <div className="specialist-grid">
          {visible.map((doctor) => <article className="specialist-card" key={doctor.name}>
            <div className={`doctor-portrait ${doctor.tone}`}><span>{doctor.initials}</span><i /></div>
            <div className="availability"><span /> Ближайшее окно завтра</div>
            <h3>{doctor.name}</h3><p className="role">{doctor.role}</p>
            <div className="tag-row">{doctor.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
            <div className="card-meta"><span>{doctor.exp}</span><b>{doctor.price}</b></div>
            <a href="#booking">Посмотреть профиль <span>↗</span></a>
          </article>)}
        </div>
        {visible.length < 3 && <button className="reset-filter" onClick={() => setFilter('Все')}>Показать всех специалистов</button>}
      </section>

      <section className="section how-section" id="how">
        <div className="how-intro"><span className="section-kicker light">Первый шаг</span><h2>Без тестов на «нормальность»</h2><p>Вы рассказываете столько, сколько готовы. Координатор помогает сформулировать запрос и предлагает 2–3 подходящих специалиста.</p><a href="#booking" className="text-link">Начать подбор <span>→</span></a></div>
        <div className="steps">
          <article><span>01</span><div><h3>Короткая заявка</h3><p>Имя, телефон и удобный формат. Без длинной анкеты и диагноза.</p></div></article>
          <article><span>02</span><div><h3>Звонок координатора</h3><p>Уточним ожидания, расписание и комфортный бюджет — обычно 10 минут.</p></div></article>
          <article><span>03</span><div><h3>Первая встреча</h3><p>20 минут знакомства бесплатно. Решение продолжать всегда остаётся за вами.</p></div></article>
        </div>
      </section>

      <section className="section service-section">
        <div className="section-heading"><div><span className="section-kicker">Направления</span><h2>Помощь под вашу ситуацию</h2></div><p>Не нужно знать название подхода. Выберите формулировку, которая ближе сейчас.</p></div>
        <div className="service-grid">
          <a href="#booking" className="service-card coral"><span>01</span><h3>«Я всё понимаю головой, но ничего не меняется»</h3><p>Тревога, апатия, панические атаки, нарушение сна</p><b>Индивидуальная терапия →</b></a>
          <a href="#booking" className="service-card sage"><span>02</span><h3>«Мы любим друг друга, но жить так уже невозможно»</h3><p>Кризис, конфликты, измена, решение о разводе</p><b>Работа с парой →</b></a>
          <a href="#booking" className="service-card sand"><span>03</span><h3>«Мне нужны конкретные инструменты, а не просто поговорить»</h3><p>Выгорание, раздражительность, потеря мотивации</p><b>Стратегия восстановления →</b></a>
          <a href="#booking" className="service-card dark"><span>04</span><h3>Помощь при зависимости — анонимно</h3><p>Консультации для самого человека и его близких. Без осуждения и постановки на учёт.</p><b>Узнать о процессе →</b></a>
        </div>
      </section>

      <section className="section proof-section">
        <div className="proof-copy"><span className="section-kicker">Почему нам доверяют</span><h2>Клиника — это больше, чем каталог анкет</h2><p>Мы отвечаем за качество помощи: проверяем специалистов, обсуждаем сложные случаи на супервизиях и остаёмся рядом, если подбор не подошёл.</p></div>
        <div className="proof-list"><div><b>100%</b><span>проверенные дипломы и квалификация</span></div><div><b>24/7</b><span>конфиденциальное хранение данных</span></div><div><b>1 день</b><span>в среднем до первой консультации</span></div></div>
      </section>

      <section className="section article-section" id="articles">
        <div className="section-heading"><div><span className="section-kicker">Полезное</span><h2>Разобраться в своём состоянии</h2></div><a className="text-link dark-link" href="#articles">Все статьи <span>→</span></a></div>
        <div className="article-grid">
          <a href="#booking" className="article featured"><span className="article-label">Тревога · 8 минут</span><h3>Что делать, если тревога приходит «из ниоткуда»</h3><p>Почему тело включает тревогу раньше мыслей и как помочь себе в моменте.</p><b>Читать статью →</b></a>
          <a href="#booking" className="article"><span className="article-label">Отношения · 6 минут</span><h3>Мы разговариваем только о быте. Это кризис?</h3><b>Читать →</b></a>
          <a href="#booking" className="article"><span className="article-label">Выгорание · 7 минут</span><h3>Отдых не помогает: как распознать выгорание</h3><b>Читать →</b></a>
        </div>
      </section>

      <section className="booking-section" id="booking">
        <div className="booking-copy"><span className="section-kicker light">Бесплатное знакомство</span><h2>Расскажите, что сейчас важно</h2><p>Координатор перезвонит, задаст несколько бережных вопросов и предложит специалистов. Обычно это занимает 10 минут.</p><ul><li>Никаких обязательств</li><li>Конфиденциально</li><li>Можно онлайн или очно в Москве</li></ul></div>
        {sent ? <div className="success-card" role="status"><span>✓</span><h3>Спасибо. Заявка принята</h3><p>В рабочем прототипе данные никуда не отправляются. На готовом сайте здесь будет подтверждение и срок ответа координатора.</p><button onClick={() => setSent(false)}>Заполнить ещё раз</button></div> :
        <form onSubmit={submitForm}>
          <label>Как к вам обращаться<input name="name" required placeholder="Ваше имя" /></label>
          <label>Телефон<input name="phone" type="tel" required placeholder="+7 999 000-00-00" /></label>
          <label>Что вас беспокоит<select name="topic" defaultValue=""><option value="" disabled>Выберите, если готовы</option>{[...topics, 'Зависимость', 'Другое'].map(item => <option key={item}>{item}</option>)}</select></label>
          <label className="consent"><input type="checkbox" required /><span>Согласен на обработку персональных данных</span></label>
          <button type="submit">Получить подбор <span>→</span></button>
          <small>Это не экстренная помощь. При угрозе жизни звоните 112.</small>
        </form>}
      </section>

      <footer><a className="brand footer-brand" href="#top"><span className="brand-mark">г</span><span>гармония</span></a><div><a href="#specialists">Специалисты</a><a href="#directions">Направления</a><a href="#articles">Статьи</a><a href="#booking">Контакты</a></div><p>Прототип · Москва · 2026<br />Информация на сайте не заменяет консультацию врача.</p></footer>
    </main>
  );
}
