import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import init from './i18next';

init().then((response) => {
  console.log('locales loaded', response);
    const Main = () => (
      <App />
    )

    ReactDOM.render(<Main />, document.getElementById('root'));
})

