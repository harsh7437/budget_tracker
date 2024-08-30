import React from 'react';
import ReactDom from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';

import { Provider } from './Components/Context/context';
import App from './App';
import './index.css'

ReactDom.render(
    <SpeechProvider appId='a43b16ed-be6e-4d04-be45-700f1e1f99de' language="en-US" >
        <Provider>
            <App />
        </Provider>,
    </SpeechProvider>,
    document.getElementById('root')
);