
import './App.css';
import { useState } from 'react';
import Weather from './Compinents/Weather';
import SearchBar from './Compinents/SearchBar';
import NewsList from './Compinents/NewsList';

function App() {
  const [query, setQuery] = useState('');
  const [language, setLanguage] = useState('en');

  return (
    <div className="App">
      <header className="my-4">
    <Weather />
      </header>
      <SearchBar setQuery={setQuery} setLanguage={setLanguage} />
      <NewsList  query={query} language={language} />
    </div>
  );
}

export default App;
