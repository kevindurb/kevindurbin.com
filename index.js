import React from 'react';
import render from '@kevindurb/react-toolbox/render';
import registerServiceWorker from '@kevindurb/react-toolbox/registerServiceWorker';
import App from './src/components/App';

export default render(<App />);

registerServiceWorker();
