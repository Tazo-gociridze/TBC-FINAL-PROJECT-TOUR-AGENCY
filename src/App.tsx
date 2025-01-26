import { Suspense } from 'react';
import { Spin } from 'antd';
import { ROUTES } from './routes';

function App() {
  return (
    <main>
      <Suspense fallback={<Spin size="large" />}>{ROUTES}</Suspense>
    </main>
  );
}

export default App;
