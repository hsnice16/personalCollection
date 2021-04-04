import React,{ useEffect, useContext } from 'react';
import AuthUserContext from './context';
import { FirebaseContext } from '../Firebase/index';

import * as ROUTES from '../Constants/routes';
import { useHistory } from 'react-router-dom';

const withAuthorization = Component => {

    return props => { 
        const history = useHistory();
        const Firebase = useContext(FirebaseContext);
        const authUser = useContext(AuthUserContext);

        const condition = authUser => !!authUser ;

        useEffect(() => {
            const unSubscribe = Firebase.auth.onAuthStateChanged(
                authUser => {

                    if(!condition(authUser)) {
                        history.push(ROUTES.SIGN_IN);
                    }
                }
            );

            return () => unSubscribe();
        });

        return (
            condition(authUser) ? <Component {...props} /> : null
        );
    }
}

export default withAuthorization;