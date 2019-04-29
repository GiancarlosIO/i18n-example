import React from 'react';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();
  console.log({ data: i18n.services.resourceStore.data })

  const onChange = e => {
    i18n.changeLanguage(e.target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{t('home.title')}</h1>
        <p>
          the actual language is { i18n.languages[0] }
        </p>
        <select onChange={onChange}>
          <option disabled>Select a lang</option>
          {i18n.languages.map(lang => (
            <option key={lang} value={lang}>{lang}</option>
          ))}
        </select>
      </header>
    </div>
  );
}

export default App;
