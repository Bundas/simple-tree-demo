import './index.css';

import * as React from 'react';
import { ApolloProvider } from 'react-apollo';
import * as ReactDOM from 'react-dom';

import App from './App';
import { ApolloClientFactory } from './domain/apolloClientFactory';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <ApolloProvider client={ApolloClientFactory.GetClient()}>
        <App />
    </ApolloProvider>,
    document.getElementById('root') as HTMLElement
);

registerServiceWorker();
