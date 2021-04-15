import React, { useState, useEffect, useContext } from 'react';
import AuthUserContext from './context';
import { FirebaseContext } from '../firebase/index';

const withAuthentication = (Component) => {

    return props => {
    
        const [authUser, setAuthUser] = useState(null);
        const { auth } = useContext(FirebaseContext);

        useEffect(() => {
            const unSubscribe = auth.onAuthStateChanged(
                                authUser => authUser ? setAuthUser(authUser) : setAuthUser(null)
                            );

            return () => unSubscribe();
        });

        return (
            <AuthUserContext.Provider value={authUser}>
                <Component {...props} />
            </AuthUserContext.Provider>
        );
    }
};

export default withAuthentication;