import React, { useEffect } from 'react';

import landingPageOne from '../../assets/Images/landing-page-1.jpg';
import landingPageTwo from '../../assets/Images/landing-page-2.jpg';

const Main = () => {

    const horseRunningOne = 
    "https://firebasestorage.googleapis.com/v0/b/personal-collection-589d3.appspot.com/o/landingPage%2Fhorse-running.mp4?alt=media&token=485681a7-6d31-4ea3-9b19-813edbceed2a";
    const horseRunningTwo = 
    "https://firebasestorage.googleapis.com/v0/b/personal-collection-589d3.appspot.com/o/landingPage%2Fhorse-running.webm?alt=media&token=b0f258ff-aa01-4698-8cd9-d30090a71995";

    useEffect(() => {
        document.title = 'personalCollection';
    });

    return (
        <main>
            <section id="section-1" className="min-h-50 pad-2 display-grid grid-t-c-bs-2">
                <div className="col1">
                    <h1 className="font-s-2 pad-s-1">
                        <span className="span">Now, </span>
                        You can collect your videos at one place.
                    </h1>
                </div>
                <div className="col2 pad-2 pad-s-1">
                    <div className="div-video">
                        <video className="div-video-content" autoPlay loop muted>
                            <source src={horseRunningOne} type="video/mp4" />
                            <source src={horseRunningTwo} type="video/webm" />
                            Your browser either does not support mp4 video type
                            or video tag.
                        </video>
                    </div>
                </div>
            </section>
            <section id="section-2" className="min-h-50 pad-2 display-grid grid-t-c-bs-2">
                <div className="col1 position-rel pad-2 pad-s-0">
                    <div className="div-card position-rel animation-down-5">
                        <img className="div-card-img" src={landingPageOne} 
                            alt="img 1: a man holding an open book" />
                    </div>   
                    <div className="div-card position-abs animation-up-5">
                        <img className="div-card-img" src={landingPageTwo} 
                            alt="img 2: three girls standing"/>
                    </div>   
                </div>
                <div className="col2">
                    <h1 className="font-s-2 pad-2 pad-1-0"> 
                        You can collect your pics at one place{' '}
                        <span className="span">Too</span>.
                    </h1>
                </div>
            </section>
        </main>
    )
}

export default Main
