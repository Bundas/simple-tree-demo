import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { ApolloLink, from } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';

import { graphQLEndpoint } from '../config';

export class ApolloClientFactory {
    public static GetClient() {
        // tslint:disable-next-line:triple-equals
        if (this.instance == undefined) {
            const httpLink = createHttpLink({
                uri: graphQLEndpoint
            });

            const authMiddleware = new ApolloLink((operation, forward) => {
                operation.setContext({
                    headers: {
                        // Authorization: localStorage.getItem('token') ? `${localStorage.getItem('token')}` : null
                    }
                });

                return forward ? forward(operation) : null;
            });

            this.instance = new ApolloClient({
                cache: new InMemoryCache(),
                link: from([authMiddleware, httpLink])
            });
        }

        return this.instance;
    }

    private static instance: ApolloClient<NormalizedCacheObject>;

    private constructor() {}
}
