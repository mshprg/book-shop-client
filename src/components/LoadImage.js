import React, {useEffect, useState} from 'react';

const LoadImage = ({className = null, style = null, onClick = null, src = '', alt = 'image'}) => {

    const [isImageLoaded, setIsImageLoaded] = useState(true);

    useEffect(() => {
        const img = new Image();
        img.src = src;

        img.onload = () => {
            setIsImageLoaded(true);
        };

        img.onerror = () => {
            setIsImageLoaded(false);
        };
    }, [src]);

    if (isImageLoaded) {
        return (
            <img
                className={className}
                style={style}
                src={src}
                onClick={onClick}
                alt="image"
            />
        );
    } else {
        return (
            <img
                className={className}
                style={style}
                src="../img/alt_preview.jpg"
                onClick={onClick}
                alt={alt}
            />
        );
    }
};

export default LoadImage;