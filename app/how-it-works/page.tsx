import { Breadcrumbs, Footer, Header } from '../components/Chrome';
import { Cta } from '../components/Cta';
import { Photo } from '../components/Photo';
import { roomSrc } from '../lib/media';
export const metadata = { title: 'Как проходит подбор — Гармония', description: 'От разговора о вашей ситуации до выбора подходящего психолога.' };
export default function HowPage() {
  return <><Header /><main id="main" className="inner-main"><Breadcrumbs items={[{ label: 'Как это работает' }]} />
    <section className="inner-hero process-intro"><div><span className="section-kicker">Первый шаг</span><h1>Начните с разговора.<br />С выбором поможем.</h1><p>Вы рассказываете только то, чем готовы поделиться. Мы помогаем сформулировать запрос и найти подходящего специалиста.</p></div><Photo src={roomSrc} alt="AI-визуализация кабинета для спокойного разговора" /></section>
    <section className="process-page"><article><span>01</span><div><h2>Оставьте короткую заявку</h2><p>В рабочей версии достаточно имени и телефона. Подробная история и готовый диагноз не нужны.</p></div></article><article><span>02</span><div><h2>Расскажите, что беспокоит</h2><p>На бесплатном разговоре уточним ситуацию, пожелания к специалисту, удобный формат и бюджет.</p></div></article><article><span>03</span><div><h2>Познакомьтесь с рекомендацией</h2><p>Покажем профиль и объясним, почему предлагаем этого психолога. Можно задать вопросы и взять время на решение.</p></div></article><article><span>04</span><div><h2>Начните, когда будете готовы</h2><p>Согласуем время и формат первой встречи. Если контакт не сложится, поможем обсудить другой подбор.</p></div></article></section><Cta /></main><Footer /></>;
}
