import React from 'react';
import { withAuthorization } from '../../Session/index';

const VideosPage = () => {
    return (
        <div>
            <h1>Videos</h1>
        </div>
    )
}

export default withAuthorization(VideosPage);
