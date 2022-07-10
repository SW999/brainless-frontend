import React from 'react';
import { hydrate, render } from "react-dom";
import './index.css';
import App from './App';

const container = document.getElementById("root");
if (container.hasChildNodes()) {
  hydrate(<App/>, container);
} else {
  render((<React.StrictMode>
    <App/>
  </React.StrictMode>), container);
}
