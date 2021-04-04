import React, { useState, useEffect, useContext } from 'react';
import AuthUserContext from './context';
import { FirebaseContext } from '../Firebase/index';

const withAuthentication = (Component) => {

    return props => {
    
        const [authUser, setAuthUser] = useState(null);
        const Firebase = useContext(FirebaseContext);

        useEffect(() => {
            const unSubscribe = Firebase.auth.onAuthStateChanged(
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