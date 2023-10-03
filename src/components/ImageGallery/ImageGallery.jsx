import React, {useRef, useState, useEffect} from "react";
import "./ImageGallery.scss";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/scss/image-gallery.scss";

const images = [
    {
        original: "./images/image-product-1.jpg",
        thumbnail: "./images/image-product-1-thumbnail.jpg",
    },
    {
        original: "./images/image-product-2.jpg",
        thumbnail: "./images/image-product-2-thumbnail.jpg",
    },
    {
        original: "./images/image-product-3.jpg",
        thumbnail: "./images/image-product-3-thumbnail.jpg",
    },
    {
        original: "./images/image-product-4.jpg",
        thumbnail: "./images/image-product-4-thumbnail.jpg",
    },
];

const Images = () => {
    // const toggleFullScreen = () => {
    //     if (!fullscreen) {
    //         // Enter fullscreen mode
    //         if (imageGalleryRef.current) {
    //             imageGalleryRef.current.requestFullscreen();
    //             setFullscreen(true);
    //         }
    //     } else {
    //         if (document.exitFullscreen) {
    //             document.exitFullscreen();
    //             setFullscreen(false);
    //         }
    //     }
    // };
    const imageGalleryRef = useRef(null);
    const [fullscreen, setFullscreen] = useState(false);
    const [showNav, setShowNav] = useState(window.innerWidth < 1000);

    useEffect(() => {
        // Add an event listener for window resize
        const handleResize = () => {
            setShowNav(window.innerWidth < 1000);
        };

        window.addEventListener("resize", handleResize);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="image-gallery-container">
            <div ref={imageGalleryRef}>
                <ImageGallery
                    items={images}
                    infinite={true}
                    showPlayButton={false}
                    showFullscreenButton={false}
                    lazyLoad={true}
                    showNav={showNav}
                    slideDuration={300}
                />
            </div>
        </div>
    );
};

export default Images;
