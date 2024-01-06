import { useState, useEffect, createContext } from 'react';
import PropTypes from 'prop-types';

const NoticiasContext = createContext();

const NoticiasProvider = ({children}) => {

    const [categoria, setCategoria] = useState('general');

    const handleChangeCategoria = e => {
        setCategoria(e.target.value);
    }

    return (
        <NoticiasContext.Provider 
            value={{
                categoria, 
                handleChangeCategoria
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