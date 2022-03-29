// eslint-disable-next-line import/no-anonymous-default-export
export default (memoryCache) => ({
    cache: memoryCache,
    defaults: {
        isConnected: true,
        user: {
            token: null,
            __typename: 'user',
        },
    },
    resolvers: {
        Mutation: {
            updateNetworkStatus: (_, isConnected, cache) => {
                cache.writeData({ data: { isConnected } });
                return null;
            },
        },
        Query: {
            getCurrentUser: (_, user) => {
                return user;
            },
        },
    },
});