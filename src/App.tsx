import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import CryptoList from './pages/Crypto/List';
import About from './pages/About';
import ErrorNotFound from './pages/ErrorNotFound';

const App: FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/crypto" element={<CryptoList />} />
          <Route path="*" element={<ErrorNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
