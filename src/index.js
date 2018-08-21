import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App';
import registerServiceWorker from './registerServiceWorker';
import { UserProvider } from './contexts/UserContext';



ReactDOM.render( 
        <UserProvider>
            <App/> 
        </UserProvider>,
    document.getElementById('root')
);
registerServiceWorker();

