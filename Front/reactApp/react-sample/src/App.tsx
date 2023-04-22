import React, { useState } from 'react';
import FortuneIcon from './components/fortuneicon';
import fortuneApi from './api/fortuneapi';
import './App.css';

const App: React.FC = () => {
  const [fortune, setFortune] = useState<string>('');

  const handleFortuneClick = async () => {
    const data = await fortuneApi.getFortune();
    setFortune(data ? data.fortune : '運勢の取得に失敗しました');
  };

  const fortuneColor = fortune ? '#35B6FF' : '#FF0000';

  return (
    <section className="app-container">
      <FortuneIcon onClick={handleFortuneClick} />
      <p className="fortune-text" style={{ color: fortuneColor }}>
        今日の運勢: {fortune}
      </p>
    </section>
  );
};

export default App;
