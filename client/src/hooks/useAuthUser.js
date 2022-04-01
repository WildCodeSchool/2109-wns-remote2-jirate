import { useContext } from 'react';
import { useApolloClient } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { isLoggedInVar } from '../apollo/cache/cache'


const useAuthUser = () => {
    const client = useApolloClient();
    // const { setIsAuthenticated } = useContext(CurrentUserContext);
    const history = useNavigate();

    const setAuthUser = (token) => {
        localStorage.setItem("jwt_token", token);
        if (token) {
            // setIsAuthenticated(true)
            isLoggedInVar(true);
        }
        history('/dashboard/app');
    };

    const logout = () => {
        client.resetStore();
        localStorage.clear();
        history('/register')
    };

    return { logout, setAuthUser };
};

export default useAuthUser;