import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ChakraProvider } from '@chakra-ui/react';

import Main from './pages/Main';

import './index.css'; // Ensure this file exists and has valid styles

const queryClient = new QueryClient();

function App() {
  return (
    <ChakraProvider>
      <QueryClientProvider client={queryClient}>
        <Main />
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
