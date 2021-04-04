import React from 'react';
import { withAuthorization } from '../../Session/index';

import Main from './main';

const PhotosPage = () => {
    return (
        <>
            <Main />
        </>
    )
}

export default withAuthorization(PhotosPage);
