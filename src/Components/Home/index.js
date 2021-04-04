import React, { useEffect } from 'react'
import { withAuthorization } from '../../Session/index';

import folderImg from '../../Assets/Images/home-upload.svg';
import arrow from '../../Assets/Images/arrow.PNG';

const HomePage = () => {

    useEffect(() => {
        document.title = 'personalCollection / home';
    });

    return (
        <main className="main-home-container min-h-100">
            <div className="div-home-arrow">
                <img src={arrow} alt="arrow"/>
                <div>upload <span>videos</span> or <span>photos</span></div>
            </div>
            <div className="div-home-img">
                <img src={folderImg} alt="upload folder illustration from undraw.co" />
            </div>
        </main>
    )
}

export default withAuthorization(HomePage);
