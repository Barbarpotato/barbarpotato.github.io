import { QueryClient, QueryClientProvider } from 'react-query';
import { ChakraProvider } from '@chakra-ui/react';
import { Suspense, lazy } from 'react';

import Loading from './components/Loading';

const Portfolio = lazy(() => import('./exposes/Main'));

const queryClient = new QueryClient();

function App() {
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<Loading />}>
          <Portfolio />
        </Suspense>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default App