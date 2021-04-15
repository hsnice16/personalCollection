import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../../firebase/index';

import * as ROUTES from '../../constants/routes';

const SignOut = () => {

    const { auth } = useContext(FirebaseContext);
    const history = useHistory();

    const handleSignOut = () => {
        auth.signOut();
        history.push(ROUTES.LANDING);
    }

    useEffect(() => {
        handleSignOut();
    });

    return <></>;
}

export default SignOut;