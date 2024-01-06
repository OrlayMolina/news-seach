import  { useContext } from 'react';
import NoticiasContext from '../context/NoticiasProvide';

const useNoticias = () => {
    return useContext(NoticiasContext);
}

export default useNoticias;