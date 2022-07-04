import { EditableContent } from "./components/editable-content";
import './App.css';
import { WRAPPER_TAGS } from './constants';

function App() {
  return (
    <>
      <EditableContent id='header' wrapperTag={WRAPPER_TAGS.HEADER} wrapperClass='header-logo' />
      <main>
        <EditableContent id='first-section' wrapperTag={WRAPPER_TAGS.SECTION} />
        <br/>
      </main>
      <div className="footer" role="contentinfo">
        <a className="git" href="https://github.com/SW999/brainless-frontend" rel="nofollow" title="Github page">
          <img src="./static/img/github.svg" width="24" height="24" alt="Github logo" />
        </a>Serj Vaitehovich<span className="divider"/>v. 1.0.0<span className="divider"/><a
        href="mailto:sergey7w@gmail.com?subject=Brainless-frontend" target="_blank" rel="noopener noreferrer"
        title="Email me"><span
        role="img" aria-label="email me">📧</span></a>
      </div>
      </>
  );
}

export default App;
