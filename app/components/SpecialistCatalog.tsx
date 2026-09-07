'use client';

import { useState } from 'react';
import { specialists } from '../lib/content';
import { portraitSrc } from '../lib/media';
import { Photo } from './Photo';

const filters = ['Все', 'Тревога', 'Отношения', 'Выгорание', 'Зависимость'];

export function SpecialistCatalog() {
  const [filter, setFilter] = useState('Все');
  const visible = specialists.filter(doctor => filter === 'Все' || doctor.tags.some(tag => tag === filter));
  return <>
    <div className="filter-row" role="group" aria-label="С чем работает специалист">
      {filters.map(item => <button type="button" key={item} aria-pressed={filter === item}
        onClick={() => setFilter(item)} className={filter === item ? 'active' : ''}>{item}</button>)}
    </div>
    <p className="sr-only" role="status">Найдено специалистов: {visible.length}</p>
    <div className="specialist-grid">
      {visible.map(doctor => <article className="specialist-card" key={doctor.slug}>
        <a className="doctor-portrait" href={`/specialists/${doctor.slug}/`} aria-label={`Профиль: ${doctor.name}`}>
          <Photo src={portraitSrc(doctor.slug)} alt={`Вымышленный образ для макета: ${doctor.name}`} />
          <span className="portrait-label">AI-портрет для макета</span>
        </a>
        <div className="doctor-info">
          <p className="doctor-format">{doctor.formats}</p>
          <h3><a href={`/specialists/${doctor.slug}/`}>{doctor.name}</a></h3>
          <p className="role">{doctor.role}</p>
          <div className="tag-row">{doctor.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
          <div className="card-meta"><span>{doctor.experience} опыта</span><b>от {doctor.price}</b></div>
          <a className="card-link" href={`/specialists/${doctor.slug}/`}>О специалисте <span aria-hidden="true">↗</span></a>
        </div>
      </article>)}
    </div>
    <p className="demo-note">Демонстрационные профили: имена, опыт и цены будут заменены данными клиники.</p>
  </>;
}
