import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Dictionary from './Dictionary/Dictionary';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Dictionary />
      </div>
    </QueryClientProvider>
  );
}

export default App;
