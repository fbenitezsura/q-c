'use client'
import Slider from '@modules/common/components/slider/index';
import useCheckMobileScreen from '@lib/hooks/use-check-mobile';
const OwnClients = () => {

    const isMobile = useCheckMobileScreen();

    const banners = [
        {
            image: {
                web: 'https://revestimientosqyc.cl/wp-content/uploads/2018/05/descarga-7-2.jpg'
            }
        },
        {
            image: {
                web: 'https://revestimientosqyc.cl/wp-content/uploads/2018/05/descarga-5-2.jpg'
            }
        },
        {
            image: {
                web: 'https://revestimientosqyc.cl/wp-content/uploads/2018/05/descarga-7-2.jpg'
            }
        },
        {
            image: {
                web: 'https://revestimientosqyc.cl/wp-content/uploads/2018/05/descarga-3-2.jpg'
            }
        },
        {
            image: {
                web: 'https://revestimientosqyc.cl/wp-content/uploads/2018/05/descarga-7-2.jpg'
            }
        },
        {
            image: {
                web: 'https://revestimientosqyc.cl/wp-content/uploads/2018/05/descarga-3-2.jpg'
            }
        }
    ]

    return (
        <section className="container mx-auto lg:px-20">
            <p className="text-center text-[16px] text-[#5D5D5D]">Ellos han confiado en {'Q&C'}</p>
            <div className="">
                <Slider
                    typeSlider={'client'}
                    data={banners}
                    options={{
                        perPage: isMobile ? 1 : 5
                    }}
                />
            </div>
        </section>
    )
}

export default OwnClients;