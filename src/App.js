import React, { useState } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import './App.css';

function App() {
    const [image, setImage] = useState('');

    const handleChange = (e) => {
        let file = e.target.files[0];
        let reader = new FileReader();
        reader.onload = function (e) {
            setImage(e.target.result);
        };
        reader.readAsDataURL(file);
    };

    return (
        <div className="App">
            <input id='file' type='file' accept='image/*' onChange={handleChange} />
            <label htmlFor='file'>
                <span className='material-symbols-outlined'>
                    add_photo_alternate
                </span> &nbsp;
                Choose a Photo
            </label>
            <div style={{ border: '1px dashed black' }}>
                <TransformWrapper defaultScale={1}>
                    <TransformComponent>
                        <div className='image-container'>
                            <img className='image' src={image} />
                        </div>
                    </TransformComponent>
                </TransformWrapper>
            </div>
        </div>
    );
}

export default App;
