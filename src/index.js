import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import GlobalStyles from './styles/GlobalStyle';
import Typography from './styles/Typography';
import LoadingSection from './components/LoadingSection';

const App = React.lazy(() => import('./App'));

ReactDOM.render(
  <>
    <GlobalStyles />
    <Typography />
    <Suspense fallback={<LoadingSection />}>
      <App />
    </Suspense>
  </>,
  document.getElementById('root')
);
