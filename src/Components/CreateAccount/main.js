import React,{ useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { FirebaseContext } from '../../Firebase/index';
import { SignInLink } from '../SignIn/index';

import * as ROUTES from '../../Constants/routes';
import createAccount from '../../Assets/Images/create-account.svg';

const Main = () => {

    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [passwordOne, setPasswordOne] = useState('');
    const [passwordTwo, setPasswordTwo] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const Firebase = useContext(FirebaseContext);
    const history = useHistory();

    useEffect(() => {
        document.title = 'personalCollection / createAccount';
    });

    async function createUser() {
        setLoading(true);

        try {
            const authUser = await Firebase.auth
                                            .createUserWithEmailAndPassword(
                                                    email, 
                                                    passwordOne
                                            );
            await Firebase.firestore.doc(`users/${authUser.user.uid}`).set(
                                            {
                                                firstname, 
                                                lastname, 
                                                email
                                            });    

            setFirstName('');
            setLastName('');
            setEmail('');
            setPasswordOne('');
            setPasswordTwo('');
            setError(null);
            setLoading(false);
            history.push(ROUTES.SIGN_IN);
        } 
        catch(error) {
            setLoading(false);
            if(error.message === 'The email address is badly formatted.')
            {
                setError('Enter Correct Email !!!');
            }
            else {
                setError(error.message);
            }
        }
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (firstname === '') {
            setError('First Name Is Required');
        } else if(email === '') {
            setError('Email Is Required');
        } else if(passwordOne === '') {
            setError('Password Is Required');
        } else if(passwordOne !== passwordTwo) {
            setError('Confirm Password Should Match With Password');
        } else {
            createUser();
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
                                    <img src={createAccount} alt="opening-window illustration from undraw.co" />
                                </div>
                                <form onSubmit={handleSubmit} className="m-top">
                                    <div className="type-text w-100">
                                        <input type="text"
                                            className="m-top w-100"
                                            value={firstname}
                                            onChange={e => setFirstName(e.target.value)}
                                            placeholder="First Name" />
                                        <input type="text"
                                            className="m-top w-100"
                                            value={lastname}
                                            onChange={e => setLastName(e.target.value)}
                                            placeholder="Last Name" />
                                    </div>

                                    <input type="email"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        placeholder="Email" 
                                        className="m-top w-100" />
                                
                                    <input type="password" 
                                        value={passwordOne}
                                        onChange={e => setPasswordOne(e.target.value)} 
                                        placeholder="Password" 
                                        className="m-top w-100" />
                                
                                    <input type="password" 
                                        value={passwordTwo}
                                        onChange={e => setPasswordTwo(e.target.value)}
                                        placeholder="Confirm Password" 
                                        className="m-top w-100" />
                            
                                    <button className="w-100 form-btn div-p-1" type="submit">
                                        Create Account
                                    </button>
                                </form>
                                <div className="form-link">          
                                    <SignInLink />
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