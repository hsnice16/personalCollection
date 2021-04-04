import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../../Firebase/index';

import * as ROUTES from '../../Constants/routes';

const SignOut = () => {

    const Firebase = useContext(FirebaseContext);
    const history = useHistory();

    const handleSignOut = () => {
        Firebase.auth.signOut();
        history.push(ROUTES.LANDING);
    }

    useEffect(() => {
        handleSignOut();
    });

    return <></>;
}

export default SignOut;