import React,{ useEffect, useState } from 'react'

const Main = () => {

    const [file, setFile] = useState(null);
    const type = /image\/*/;

    useEffect(() => {
        document.title = 'personalCollection / photos';
    });

    function handleChange(e) {
        let selected = e.target.files[0];
        console.log(selected.type);
        console.log(type);
        console.log(selected);
        if(selected && selected.type === type) {
            setFile(selected);
        console.log(selected);
        }
    }

    return (
        <main className='min-h-100 main-photo-container'>
            <section>
                <h2 className="font-s-2">Your Pictures</h2>
                <form className="">
                    <input type="file" accept="image/*" onChange={handleChange}/>
                </form>
                <div className="photo-container">

                </div>
            </section>
        </main>
    )
}

export default Main;
