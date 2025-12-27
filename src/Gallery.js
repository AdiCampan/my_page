import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import './Gallery.css';

const Gallery = ({ images }) => {
    const [currentIndex, setCurrentIndex] = useState(-1);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (currentIndex === -1) return;
            if (e.key === 'ArrowRight') nextImage(e);
            if (e.key === 'ArrowLeft') prevImage(e);
            if (e.key === 'Escape') closeGallery();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentIndex]);

    const openGallery = (index = 0) => {
        setCurrentIndex(index);
        document.body.style.overflow = 'hidden';
    };

    const closeGallery = () => {
        setCurrentIndex(-1);
        document.body.style.overflow = 'unset';
    };

    const nextImage = (e) => {
        if (e) e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = (e) => {
        if (e) e.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const lightbox = currentIndex !== -1 ? (
        <div className="lightbox-portal-wrapper" onClick={closeGallery}>
            {/* Navigation Layer */}
            <div className="lightbox-nav-wrapper">
                <button className="lightbox-nav-btn prev" onClick={prevImage} aria-label="Previous">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>
                <button className="lightbox-nav-btn next" onClick={nextImage} aria-label="Next">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </button>
            </div>

            {/* Content Layer */}
            <div className="lightbox-content-container" onClick={(e) => e.stopPropagation()}>
                <img src={images[currentIndex].url} alt={images[currentIndex].caption} className="main-zoom-image" />
                <div className="lightbox-metadata">
                    <p className="lightbox-caption">{images[currentIndex].caption}</p>
                    <div className="lightbox-counter">{currentIndex + 1} / {images.length}</div>
                </div>
                <button className="close-portal-btn" onClick={closeGallery} aria-label="Close">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>
        </div>
    ) : null;

    return (
        <div className="gallery-container">
            <button className="view-gallery-btn" onClick={() => openGallery(0)}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <polyline points="21 15 16 10 5 21" />
                </svg>
                View Project Gallery ({images.length} photos)
            </button>

            {currentIndex !== -1 && createPortal(lightbox, document.body)}
        </div>
    );
};

export default Gallery;
