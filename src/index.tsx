import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import browserHistory from 'utils/history';
import { ConnectedRouter } from 'connected-react-router';
import { configureAppStore } from 'stores/configureAppStore';
import { ThemeProvider } from 'styles/ThemeProvider';
import { HelmetProvider } from 'react-helmet-async';
import 'locales/i18n';

const store = configureAppStore();

ReactDOM.render(
  <Provider store={store}>
    <HelmetProvider>
      <ThemeProvider>
        <React.StrictMode>
          <ConnectedRouter history={browserHistory}>
            <App />
          </ConnectedRouter>
        </React.StrictMode>
      </ThemeProvider>
    </HelmetProvider>
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
