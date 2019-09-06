import React from 'react';
import ReactDOM from 'react-dom';

import CalendarDemo from './CalendarDemo';

const getMountPoint = (id: string = 'root'): HTMLElement => {
  let rootEl = document.getElementById(id);
  if (!rootEl) {
    rootEl = document.createElement('div');
    rootEl.id = id;
    document.getElementsByTagName('body')[0].appendChild(rootEl);
  }
  return rootEl;
};

ReactDOM.render(
  <CalendarDemo />,
  getMountPoint('root'),
);
