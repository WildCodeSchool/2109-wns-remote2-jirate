import { ApolloClient } from 'apollo-client';
import { ApolloLink, Observable } from 'apollo-link';
import { withClientState } from 'apollo-link-state';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import state from './state';

const SERVER_URL = "http://localhost:8000/graphql"
const cache = new InMemoryCache({});

const request = async operation => {
    const token = await localStorage.getItem('jwt_token');
    // set the token in the request header for authorization
    operation.setContext({
        headers: {
            authorization: token ? `Bearer ${token}` : '',
        },
    });
};

export const requestLink = new ApolloLink(
    (operation, forward) =>
        new Observable(observer => {
            let handle;
            Promise.resolve(operation)
                .then(oper => request(oper))
                .then(() => {
                    handle = forward(operation).subscribe({
                        next: observer.next.bind(observer),
                        error: observer.error.bind(observer),
                        complete: observer.complete.bind(observer),
                    });
                })
                .catch(observer.error.bind(observer));

            return () => {
                if (handle) handle.unsubscribe();
            };
        })
);

const link = ApolloLink.from([
    requestLink,
    withClientState(state(cache)),
    new HttpLink({
        uri: SERVER_URL,
        credentials: 'same-origin',
    }),
]);

const client = new ApolloClient({ link, cache });

export { client };