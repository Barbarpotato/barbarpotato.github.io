import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ChakraProvider } from '@chakra-ui/react';
import { lazy, Suspense } from 'react';

import Loading from './components/Loading';

const Portfolio = lazy(() => import("site_registry/Portfolio"));

import './index.css';

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

// Render the App
const rootElement = document.getElementById("app");
if (!rootElement) {
  throw new Error("Failed to find the root element. Ensure your index.html includes a <div id='app'></div>.");
}

const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
