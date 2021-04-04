import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../Constants/routes';
import Main from './main';

const PasswordForgetPage = () => (
    <>
        <Main />
    </>
);


const PasswordForgetLink = () => (
    <p>forgot Password ? <Link to={ROUTES.PASSWORD_FORGET}>Help</Link></p>
);

export default PasswordForgetPage;

export { PasswordForgetLink };
