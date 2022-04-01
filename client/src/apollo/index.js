import { ApolloClient, createHttpLink, InMemoryCache, gql } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { isLoggedInVar } from './cache/cache';

const SERVER_URL = "http://localhost:8000/graphql"
const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                isLoggedIn: {
                    read() {
                        return isLoggedInVar();
                    },
                },
                launches: {
                    // ...field policy definitions...
                },
            },
        },
    },
});

export const typeDefs = gql`
  extend type Query {
    isLoggedIn: Boolean!
  }
`;

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = localStorage.getItem('jwt_token');
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        }
    }
});



const link = createHttpLink({
    uri: SERVER_URL,
    credentials: 'same-origin'
});



const client = new ApolloClient({ link: authLink.concat(link), cache, typeDefs });

export { client };