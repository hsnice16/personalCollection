import React, { useState, useEffect, useContext } from 'react';
// import { useHistory } from 'react-router-dom';
import { FirebaseContext } from '../../firebase/index';

// import * as ROUTES from '../../Constants/routes';

import {CreateAccountLink} from '../CreateAccount/index';
import forgotPassword from '../../assets/Images/forgot-password.svg';

const Main = () => {

    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const Firebase = useContext(FirebaseContext);
    // const history = useHistory();

    useEffect(() => {
        document.title = 'forgetPassword | personalCollection';
    });

    async function changePassword() {
        setLoading(true);
        
        try {
            await Firebase.auth.sendPasswordResetEmail(email);

            setEmail('');
            setError('Password reset email sent, check your inbox.');
            setLoading(false);
            // history.push(ROUTES.HOME);
        } 
        catch(error) {
            setLoading(false);
            if (error.message ===  "There is no user record corresponding to this identifier. The user may have been deleted.")
                setError('First Create Account !!!');
            else
                setError(error.message);
        }
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (email === '') {
            setError('Email Is Required');
        } else {
            changePassword();
        }
    }

    return (
            <main className="div-p-1 min-h-100 main-form-container">
                {loading === false ? 
                    (
                        <section className="section-form pad-2">
                            {error && 
                            <div className="warning-div font-s-1 div-p-1 pad-1">
                                {error}
                            </div>}
                            
                            <div className="form-container pad-2 m-top">
                                <div className="form-img-container pad-1">
                                    <img src={forgotPassword} alt="Forgot Password illustration from undraw.co" />
                                </div>
                                <form onSubmit={handleSubmit} className="m-top">
                                    <input type="email"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        placeholder="Email" 
                                        className="m-top w-100" />

                                    <button className="w-100 form-btn div-p-1" type="submit">
                                        Change Password
                                    </button>
                                </form>
                                <div className="form-link">          
                                    <CreateAccountLink />
                                </div>
                            </div>
                        </section>
                    )
                    : (
                        <section className="section-form">
                            <div className="loading pad-2" role="status">
                                <div className="circle circle1 list-item-inline"></div>
                                <div className="circle circle2 list-item-inline"></div>
                                <div className="circle circle3 list-item-inline"></div>
                            </div>
                        </section>
                    )
                }
            </main>
        )
}

export default Main;