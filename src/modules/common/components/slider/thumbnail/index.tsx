'use client';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Options } from '@splidejs/splide';
import React, { useRef, useEffect } from 'react';

const ThumbnailsExample = () => {
    const mainRef = useRef<Splide>(null);
    const thumbsRef = useRef<Splide>(null);

    useEffect(() => {
        if (mainRef.current && thumbsRef.current && thumbsRef.current.splide) {
            mainRef.current.sync(thumbsRef.current.splide);
        }
    }, []);

    const renderSlides = () => {
        return [{
            src: 'https://www.katemu.com/wp-content/uploads/2022/04/katemu-ml-3.jpg',
            alt: 'slide'
        }, {
            src: 'https://www.katemu.com/wp-content/uploads/2022/04/katemu-ml-3.jpg',
            alt: 'slide'
        }, {
            src: 'https://www.katemu.com/wp-content/uploads/2022/04/katemu-ml-3.jpg',
            alt: 'slide'
        }].map(slide => (
            <SplideSlide key={slide.src}>
                <img src={slide.src} alt={slide.alt} />
            </SplideSlide>
        ));
    };

    const mainOptions: Options = {
        type: 'loop',
        perPage: 1,
        perMove: 1,
        gap: '1rem',
        pagination: false,
        height: '20rem',
    };

    const thumbsOptions: Options = {
        type: 'slide',
        rewind: true,
        gap: '1rem',
        pagination: false,
        fixedWidth: 110,
        fixedHeight: 70,
        cover: true,
        focus: 'center',
        isNavigation: true,
    };

    return (
        <>
            <Splide
                options={mainOptions}
                ref={mainRef}
                aria-labelledby="thumbnail-slider-example"
                className="mb-2"
            >
                {renderSlides()}
            </Splide>

            <Splide
                options={thumbsOptions}
                ref={thumbsRef}
                aria-label="The carousel with thumbnails. Selecting a thumbnail will change the main carousel"
            >
                {renderSlides()}
            </Splide>
        </>
    );
};

export default ThumbnailsExample;
