import React, { Fragment, lazy, Suspense, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ChakraProvider } from '@chakra-ui/react';
import { RequestResource } from './api/PROXY';

import Loading from './components/Loading'; // Ensure this component exists and is functional

import './index.css'; // Ensure this file exists and has valid styles

// Initialize React Query Client
const queryClient = new QueryClient();

const Portfolio = lazy(() => import("site_registry/Portfolio"));

// App Component
function App() {

  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    RequestResource()
      .then((data) => setToken(data.token))
      .catch((error) => console.error(error));
    setIsLoading(false);
  }, [])

  if (isLoading || !token) {
    return <Loading />;
  }

  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<Loading />}>
          <Portfolio token={token} />
        </Suspense>
      </QueryClientProvider>
    </ChakraProvider>
  )
}

// Render the App
const rootElement = document.getElementById("app");
if (!rootElement) {
  throw new Error("Failed to find the root element. Ensure your index.html includes a <div id='app'></div>.");
}

const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
