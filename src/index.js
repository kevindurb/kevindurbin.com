import React from 'react';
import { render } from 'react-dom';

const root = document.createElement('div');
document.body.appendChild(root);

render(
  <div>hello world</div>,
  root
);
