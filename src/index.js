import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// _____________REACT_17______________________
// import React from 'react';
// import ReactDOM from 'react-dom';
// import SimpleReactLightbox from 'simple-react-lightbox';
// import './index.css';
// import './theme/themeStyles.css';

// import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <SimpleReactLightbox>
//       <App />
//     </SimpleReactLightbox>
//   </React.StrictMode>,
//   document.getElementById('root')
// );
