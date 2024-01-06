import { useState, useEffect, createContext } from 'react';
import PropTypes from 'prop-types';

const NoticiasContext = createContext();

const NoticiasProvider = ({children}) => {

    return (
        <NoticiasContext.Provider 
            value={{}}
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