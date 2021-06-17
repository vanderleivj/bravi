import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';
import {App} from './App';

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/themeSettings', () => {
      return [
        {
          "id": 1,
          "name": "Tema Netflix",
          "background_color": "#141414",
          "primary_text_color": "#E50814",
          "secondary_text_color": "#FFFF",
          "accent_color": "#000000"
        },
        {
          "id": 2,
          "name": "Tema Facebook",
          "background_color": "#F0F2F5",
          "primary_text_color": "#000000",
          "secondary_text_color": "#FFFF",
          "accent_color": "#1877F2"
        }
      ]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

