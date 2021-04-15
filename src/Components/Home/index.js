import React, { useEffect } from 'react'
import { withAuthorization } from '../../session/index';

import folderImg from '../../assets/Images/home-upload.svg';
import arrow from '../../assets/Images/arrow.PNG';

const HomePage = () => {

    useEffect(() => {
        document.title = 'home | personalCollection';
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
