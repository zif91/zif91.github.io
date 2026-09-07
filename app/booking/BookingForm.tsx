'use client';
import { FormEvent, useRef, useState } from 'react';

export function BookingForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);
  const confirmation = useRef<HTMLDivElement>(null);
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
    requestAnimationFrame(() => confirmation.current?.focus());
  }
  if (sent) return <div className="success-card" ref={confirmation} tabIndex={-1} role="status">
    <span className="success-mark" aria-hidden="true">✓</span><h3>Так выглядит подтверждение</h3>
    <p>На рабочем сайте здесь будет информация о звонке консультанта. В этой дизайн-концепции заявка не отправляется и данные не сохраняются.</p>
    <button type="button" onClick={() => setSent(false)}>Вернуться к форме</button>
  </div>;
  return <form className="booking-form" onSubmit={submit}>
    <p className="form-title">Бесплатный подбор психолога</p>
    <p className="form-demo">Демонстрационная форма — не вводите реальные персональные данные.</p>
    <label>Как к вам обращаться<input name="name" required placeholder="Ваше имя" autoComplete="off" maxLength={80} /></label>
    <label>Телефон<input name="phone" required type="tel" minLength={7} maxLength={24} placeholder="+7 999 000-00-00" autoComplete="off" /></label>
    {!compact && <label>Удобный формат<select name="format" defaultValue=""><option value="" disabled>Выберите формат</option><option>Онлайн</option><option>Очно в Москве</option><option>Пока не знаю</option></select></label>}
    <label>Что вас беспокоит <span className="optional-label">(необязательно)</span><select name="topic" defaultValue=""><option value="">Пока сложно сформулировать</option><option>Тревога</option><option>Выгорание</option><option>Отношения</option><option>Панические атаки</option><option>Нарушения сна</option><option>Зависимость</option><option>Другое</option></select></label>
    <label className="consent"><input type="checkbox" required /><span>Я понимаю, что это демонстрационная форма и заявка не будет отправлена.</span></label>
    <button type="submit" className="primary-button">Подобрать психолога <span aria-hidden="true">↗</span></button>
    <small>Демонстрация интерфейса, не сервис помощи.</small>
  </form>;
}
