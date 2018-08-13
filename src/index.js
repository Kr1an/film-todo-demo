import 'typeface-roboto'
import React from 'react';
import ReactDOM from 'react-dom';
import { MuiThemeProvider } from 'material-ui/styles';

import ScrollArea from 'react-scrollbar';


import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux'
import store from './store'


const render = () => (
  <Provider store={store}>
    <ScrollArea style={{ maxHeight: '100vh' }}>
      <MuiThemeProvider>
          <App />
      </MuiThemeProvider>
    </ScrollArea>
  </Provider>
)

ReactDOM.render(render(), document.getElementById('root'));

registerServiceWorker();
