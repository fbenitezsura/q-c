import { SplideSlide } from '@splidejs/react-splide';

const SlideDescriptionBox = ({
    slideProps
}) => {

    return (
        <SplideSlide>
            <div className="w-full sm:w-1/2 lg:w-1/2 p-2 relative">
                <img
                    src={slideProps?.image}
                    alt=""
                    className="w-full h-[450px]"
                />
                <div className="bg-[#FF6B00] p-4 absolute top-[20%] left-0 w-[90%] h-auto lg:h-[220px]">
                    <h3 className="text-xl font-bold">{slideProps?.title}</h3>
                    <p className="text-justify text-[12px] mt-1">{slideProps?.description}</p>
                </div>
            </div>
        </SplideSlide>
    )
}

export default SlideDescriptionBox;