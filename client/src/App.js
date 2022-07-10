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
          <EditableContent id='first-summary' wrapperTag={WRAPPER_TAGS.SUMMARY}  />
          <EditableContent id='first-section' wrapperTag={WRAPPER_TAGS.SECTION} />
        </details>
        <details>
          <EditableContent id='reg-summary' wrapperTag={WRAPPER_TAGS.SUMMARY} />
          <EditableContent id='reg-section' wrapperTag={WRAPPER_TAGS.SECTION} />
        </details>
        <details>
          <EditableContent id='vet-summary' wrapperTag={WRAPPER_TAGS.SUMMARY} />
          <EditableContent id='vet-section' wrapperTag={WRAPPER_TAGS.SECTION} />
        </details>
        <details>
          <EditableContent id='per-summary' wrapperTag={WRAPPER_TAGS.SUMMARY} />
          <EditableContent id='per-section' wrapperTag={WRAPPER_TAGS.SECTION} />
        </details>
        <details>
          <EditableContent id='vigul-summary' wrapperTag={WRAPPER_TAGS.SUMMARY} />
          <EditableContent id='vigul-section' wrapperTag={WRAPPER_TAGS.SECTION} />
        </details>
        <details>
          <EditableContent id='beauty-summary' wrapperTag={WRAPPER_TAGS.SUMMARY} />
          <EditableContent id='beauty-section' wrapperTag={WRAPPER_TAGS.SECTION} />
        </details>
        <br/>
      </main>
      <div className="footer" role="contentinfo">
        <p>Здесь могла быть ваша реклама 🐶</p>
      </div>
      </>
  );
}

export default App;
