export function Cta({ title = 'Не знаете, с кого начать?' }: { title?: string }) {
  return <section className="inner-cta"><div><span className="section-kicker light">Бесплатное знакомство</span><h2>{title}</h2><p>Координатор задаст несколько бережных вопросов и предложит 2–3 подходящих специалиста.</p></div><a className="primary-button light-button" href="/booking">Подобрать специалиста <span>→</span></a></section>;
}
