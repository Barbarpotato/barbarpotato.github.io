import { QueryClient, QueryClientProvider } from 'react-query'
import { Fragment } from 'react';
import Index from './pages/main/index'
import Labs from './pages/labs'
import LabContentDetail from './pages/labs/detail';
import { Routes, Route } from 'react-router-dom';

const queryClient = new QueryClient()

function App() {
  return (
    <Fragment>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/labs" element={<Labs />} />
          <Route path='/lab/:blogId' element={<LabContentDetail />} />
        </Routes>
      </QueryClientProvider>
    </Fragment>
  )
}

export default App
