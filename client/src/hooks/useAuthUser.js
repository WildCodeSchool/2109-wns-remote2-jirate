import { useContext } from 'react';
import { useApolloClient } from '@apollo/react-hooks';
import { useNavigate } from 'react-router-dom';
import CurrentUserContext from '../contexts/currentUser';


const useAuthUser = () => {
    const client = useApolloClient();
    const { setIsAuthenticated } = useContext(CurrentUserContext);
    const history = useNavigate();

    const setAuthUser = (token) => {
        localStorage.setItem("jwt_token", token);
        if (token) {
            setIsAuthenticated(true)
        }
        history('/dashboard/app');
    };

    const logout = () => {
        client.resetStore();
        localStorage.clear();
        history('/login')
    };

    return { logout, setAuthUser };
};

export default useAuthUser;