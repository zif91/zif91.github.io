import { Breadcrumbs, Footer, Header } from '../components/Chrome';
import { BookingForm } from './BookingForm';

export const metadata = { title: 'Подобрать психолога — Гармония', description: 'Начните с бесплатного разговора о своей ситуации. Поможем подобрать психолога.' };
export default function BookingPage() {
  return <><Header /><main id="main" className="inner-main"><Breadcrumbs items={[{ label: 'Подбор психолога' }]} />
    <section className="booking-page"><div><span className="section-kicker">Первый разговор — бесплатно</span><h1>Расскажите,<br />что сейчас важно</h1>
      <p>Вам не нужно заранее выбирать метод терапии или знать, какой специалист подходит. Начнём с вашей ситуации, а с выбором поможем.</p>
      <ul><li>Без обязательств</li><li>Онлайн или очно</li><li>В вашем темпе</li></ul>
      <div className="booking-assurance"><strong>Что будет после заявки?</strong>Консультант свяжется с вами, уточнит запрос, удобный формат и бюджет. Затем предложит подходящего специалиста и ответит на вопросы.</div>
    </div><BookingForm /></section></main><Footer /></>;
}
