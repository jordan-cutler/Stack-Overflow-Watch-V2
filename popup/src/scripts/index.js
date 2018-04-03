import React from 'react';
import { render } from 'react-dom';

import App from './components/app/App';

import { Store } from 'react-chrome-redux';
import { Provider } from 'react-redux';

console.log('etnnteed');
const proxyStore = new Store({
  portName: 'example'
});
proxyStore.ready().then(() => {
  console.log('calling render');
  render(
    <Provider store={proxyStore}><App/></Provider>
    , document.getElementById('app'));
});


