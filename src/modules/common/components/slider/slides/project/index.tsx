import { SplideSlide } from '@splidejs/react-splide';

const SlideProject = ({
    slideProps
}) => {

    return (
        <SplideSlide>
            <img src={slideProps.image.web} alt="Image 1" className="h-[323px] w-full"/>
        </SplideSlide>
    )
}

export default SlideProject;