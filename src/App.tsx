import Routes from './core/routes';

import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import reducers from './core/redux/reducer';
import { GlobalStyle } from './core/styles/global';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

export function App() {
  return (
    <Provider store={ store }>
      <Routes />
      <GlobalStyle />
    </Provider>
  );
}