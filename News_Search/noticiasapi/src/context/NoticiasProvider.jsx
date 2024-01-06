import { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const NoticiasContext = createContext();

const NoticiasProvider = ({children}) => {

    const [categoria, setCategoria] = useState('general');
    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        const consultarAPI = async () => {
            const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`

            const { data } = await axios(url);
            setNoticias(data.articles);

        }
        consultarAPI()
    }, [categoria]) 

    const handleChangeCategoria = e => {
        setCategoria(e.target.value);
    }

    return (
        <NoticiasContext.Provider 
            value={{
                categoria, 
                handleChangeCategoria,
                noticias
            }}
        >
            {children}
        </NoticiasContext.Provider>
    );
}

NoticiasProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export {

    NoticiasProvider
}

export default NoticiasContext;