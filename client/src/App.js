import { EditableContent } from "./components/editable-content";
import './App.css';
import { WRAPPER_TAGS } from './constants';

function App() {
  return (
    <>
      <header>
        <h1 className="header-logo">САБАЧКУ-Вильня F.A.Q.</h1>
      </header>
      <main>
        <details>
          <EditableContent id='first-summary' wrapperTag={WRAPPER_TAGS.SUMMARY} />
          <EditableContent id='first-section' wrapperTag={WRAPPER_TAGS.SECTION} />
        </details>
        <details>
          <summary><h3>Регистрация</h3></summary>
          <section><p>По новым правилам собаки, прибывшие в страну, должны быть зарегистрированы в Вильнюсском отделении
            Государственной продовольственно-ветеринарной службы.</p>
            <p>Не затягивайте. В течение 2-х недель после приезда нужно зарегистрировать чип и питомца. При себе нужно
              иметь весь пакет документов (белорусский сертификат, вет.паспорт, договор купли-продажи, родословную и
              декларацию на временный ввоз). Сейчас через вет клиники не регистрируют, только через инспектора на
              Конституции 23 по предварительной записи.
              <br/>Гражина, тел. <a href="tel:852491691">852491691</a>.</p></section>
        </details>
        <details>
          <summary><h3>Ветеринария</h3></summary>
          <section>
            <ul className="advantages">
              <li>Рекомендации клиник и врачей</li>
            </ul>
          </section>
        </details>
        <details>
          <summary><h3>Передержка</h3></summary>
          <section>
            <ul>
              <li>Список отелей для животных.</li>
            </ul>
          </section>
        </details>
        <details>
          <summary><h3>Выгул</h3></summary>
          <section>
            <ul>
              <li>Площадки для выгула животных</li>
            </ul>
          </section>
        </details>
        <details>
          <summary><h3>Красота</h3></summary>
          <section>
            <ul>
              <li>Стрижки-укладки, маникюр и прочее</li>
            </ul>
          </section>
        </details>
        <br/>
      </main>
      <div className="footer" role="contentinfo">
        <a className="git" href="https://github.com/SW999/brainless-frontend" rel="nofollow" title="Github page">
          <img src="img/github.svg" alt="github" width="24" height="24"/>
        </a>Serj Vaitehovich<span className="divider"/>v. 1.0.0<span className="divider"/><a
        href="mailto:sergey7w@gmail.com?subject=Brainless-frontend" target="_blank" rel="noopener noreferrer"
        title="Email me"><span
        role="img" aria-label="email me">📧</span></a>
      </div>
      </>
  );
}

export default App;
