// import './../../../html-css-js-demo/styles.css';

import { Route, Routes, Navigate } from 'react-router-dom';
import CareerPathPage from './CareerPathPage';
import CounterPage from './CounterPage';

export function App() {
  return (
    <Routes>
      <Route path="/counter" element={<CounterPage />} />
      <Route path="/career" element={<CareerPathPage />} />
      <Route path="*" element={<Navigate to="/counter" replace />} />
    </Routes>
  );
}

export default App;
