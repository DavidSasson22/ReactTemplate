import React, { Fragment } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider } from '@mui/material/styles';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <Fragment>
      <StyledEngineProvider injectFirst>
        <QueryClientProvider client={queryClient}>
          <CssBaseline />
          <div>David</div>
        </QueryClientProvider>
      </StyledEngineProvider>
    </Fragment>
  );
}

export default App;
