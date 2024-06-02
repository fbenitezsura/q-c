import { SplideSlide } from '@splidejs/react-splide';

const SlideClient = ({
    slideProps
}) => {

    return (
        <SplideSlide>
            <img src={slideProps.image.web} alt="Image 1" className="h-[250px] w-full"/>
        </SplideSlide>
    )
}

export default SlideClient;