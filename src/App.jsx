import { QueryClient, QueryClientProvider } from 'react-query';
import { Fragment, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loading from './components/loading/index';

const Index = lazy(() => import('./pages/main/index'));
const Labs = lazy(() => import('./pages/labs'));
const LabContentDetail = lazy(() => import('./pages/labs/detail'));

const queryClient = new QueryClient();

function App() {
  return (
    <Fragment>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/labs" element={<Labs />} />
            <Route path='/lab/:blogId' element={<LabContentDetail />} />
          </Routes>
        </Suspense>
      </QueryClientProvider>
    </Fragment>
  );
}

export default App;
