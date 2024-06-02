'use client'
import { Splide } from '@splidejs/react-splide';
import SlideBanner from '@modules/common/components/slider/slides/banner/index';
import SlideProject from '@modules/common/components/slider/slides/project/index';
import SlideClient from '@modules/common/components/slider/slides/clients/index';
import SlideDescriptionBox from '@modules/common/components/slider/slides/descriptionBox/index';

interface Slider {
    data?: Array<string>
    typeSlider?: string,
    options?: Array<Object>
}
const Slider = ({
    data,
    typeSlider,
    options
} : Slider ) => {

    return (
        <Splide 
        options={{
        ...options
        }}
        aria-label="Banners">
            {data?.map((slideProps) => {

                if(typeSlider === 'banner'){
                    return (
                        <SlideBanner slideProps={slideProps}/>
                    )
                }

                if(typeSlider === 'project'){
                    return (
                        <SlideProject slideProps={slideProps}/>
                    )
                }

                if(typeSlider === 'client'){
                    return (
                        <SlideClient slideProps={slideProps}/>
                    )
                }

                if(typeSlider === 'description'){
                    return (
                        <SlideDescriptionBox slideProps={slideProps}/>
                    )
                }
                
            })}            
        </Splide>
    )

}

export default Slider;