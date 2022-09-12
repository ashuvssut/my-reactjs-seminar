import { lazy, Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
// import CounterPage from './CounterPage';
// import CareerPathPage from './CareerPathPage';
import { Header } from './Header';

const CounterPage = lazy(() => import('./CounterPage'));
const CareerPathPage = lazy(() => import('./CareerPathPage'));

export function App() {
  return (
    <>
      <Header />
      <Suspense
        fallback={
          <center
            style={{
              height: '100vh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: 100,
            }}
          >
            Loading...
          </center>
        }
      >
        <Routes>
          <Route path="/counter" element={<CounterPage />} />
          <Route path="/career" element={<CareerPathPage />} />
          <Route path="*" element={<Navigate to="/counter" replace />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
