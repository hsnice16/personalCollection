import React,{ useEffect, useState } from 'react'
import { BsFilePlus } from "react-icons/bs";

const Main = () => {

    const [file, setFile] = useState(null);
    const [error, setError] = useState('');
    const validType = /^image\/*/;

    useEffect(() => {
        document.title = 'photos | personalCollection';
    });

    function handleChange(e) {
        let selected = e.target.files[0];
        if (selected) {

            if (validType.test(selected.type)) {
                setFile(selected);
                setError('');
            } else {
                setFile(null);
                setError('Please select an image file');
            }
        } else {
            setFile(null);
        }
    }

    return (
        <main className='min-h-100 main-photo-container'>
            <section>
                <h2 className="font-s-2">Your Pictures</h2>
                <div className="div-file-chooser">
                    <input type="file" id="photo-picker" accept="image/*" onChange={handleChange}/>
                    <label htmlFor="photo-picker"><BsFilePlus className="file-plus" /></label>
                </div>
                {
                    error && 
                    <div className="warning-div font-s-1 div-p-1 pad-1">
                        {error}
                    </div>
                }

                <div className="photo-container">

                </div>
            </section>
        </main>
    )
}

export default Main;
