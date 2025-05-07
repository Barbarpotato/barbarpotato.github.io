import { ResponsiveProvider } from './hooks/useResponsive';
import { ChakraProvider } from '@chakra-ui/react';
import { Suspense, lazy } from 'react';

import Loading from './components/Loading';

const Portfolio = lazy(() => import('./exposes/Main'));

function App() {
  return (
    <ChakraProvider>
      <Suspense fallback={<Loading />}>
        <ResponsiveProvider>
          <Portfolio />
        </ResponsiveProvider>
      </Suspense>
    </ChakraProvider>
  );
}

export default App