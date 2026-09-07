export function Cta({ title = 'Не обязательно выбирать в одиночку' }: { title?: string }) {
  return <section className="inner-cta"><div><span className="section-kicker">Бесплатный подбор</span><h2>{title}</h2><p>Расскажите, что беспокоит. Мы поможем сформулировать запрос и предложим специалиста, с которым можно начать.</p></div><a className="primary-button light-button" href="/booking/">Подобрать психолога <span aria-hidden="true">↗</span></a></section>;
}
