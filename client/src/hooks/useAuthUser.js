import { useApolloClient } from '@apollo/react-hooks';
import { useNavigate } from 'react-router-dom';


const useAuthUser = () => {
    const client = useApolloClient();
    const history = useNavigate();

    const setAuthUser = (token) => {
        localStorage.setItem("x-token", token);
        history('/dashboard/app');
    };

    const logout = () => {
        client.resetStore();
        localStorage.clear();
        history.push('/');
    };

    return { logout, setAuthUser };
};

export default useAuthUser;