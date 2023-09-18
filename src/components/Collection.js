import React, { useState } from 'react';
import './Collection.css';

function ImageViewer({ image, title, description }) {
    const [showViewer, setShowViewer] = useState(false);

    const toggleViewer = () => {
        setShowViewer(!showViewer);
    };

    return (
        <div className="image-card" onClick={toggleViewer}>
            <img src={image} alt={title} className="thumbnail" />
            <div className={`viewer ${showViewer ? 'show' : ''}`}>
                <img src={image} alt={title} />
                <div className="caption">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
}

export default ImageViewer;
