import React from 'react';
import render from '@kevindurb/react-toolbox/render';
import registerServiceWorker from '@kevindurb/react-toolbox/registerServiceWorker';
import App from './src/App';

export default render(<App />);

registerServiceWorker();
