'use client'
import Slider from '@modules/common/components/slider/index';
import useCheckMobileScreen from '@lib/hooks/use-check-mobile';
const AllProjects = () => {

    const isMobile = useCheckMobileScreen();

    const banners = [
        {
            image: {
                web: 'https://revestimientosqyc.cl/wp-content/uploads/2018/06/8.-RAMPAS-DE-ACCESO-2.jpg'
            }
        },
        {
            image: {
                web: 'https://revestimientosqyc.cl/wp-content/uploads/2018/06/6.-ESCARIFICADO-2.jpg'
            }
        },
        {
            image: {
                web: 'https://revestimientosqyc.cl/wp-content/uploads/2018/06/8.-RAMPAS-DE-ACCESO-2.jpg'
            }
        },
        {
            image: {
                web: 'https://revestimientosqyc.cl/wp-content/uploads/2018/06/6.-ESCARIFICADO-2.jpg'
            }
        },
        {
            image: {
                web: 'https://revestimientosqyc.cl/wp-content/uploads/2018/06/8.-RAMPAS-DE-ACCESO-2.jpg'
            }
        },
        {
            image: {
                web: 'https://revestimientosqyc.cl/wp-content/uploads/2018/06/6.-ESCARIFICADO-2.jpg'
            }
        }
    ];

    return (
        <section className="bg-[#f1f1f1]">
            <div className="my-10 container mx-auto lg:px-20 pt-4">
                <span className="text-[14px] text-[#FF6B00]">Proyectos</span>
                <div className="grid grid-cols-12 mb-4">
                    <div className="col-span-12 lg:col-span-6">
                        <h2 className="text-[32px] text-[#5D5D5D]">
                            Proyectos destacados {'Q&C'}
                        </h2>
                    </div>
                    <div className="col-span-12 lg:col-span-6 d-none d-md-block d-lg-block">
                        <p className="text-[16px] text-[#999999] text-justify">
                            Primero se revisa que el sustrato no contenga contaminantes químicos en su superficie antes del
                            pulido, luego se determina que tipo de productos va a aplicarse en el sustrato. Para llegar a la
                            rugosidad adecuada se utilizan pulidoras industriales que nivelan y pulen la superficie,
                            desbastando la capa superficial del sustrato, luego se limpia la superficie completamente y
                            posterior mente se aplica el “primer”, se hace reparación de grietas e imperfecciones para
                            finalmente aplicar el revestimiento.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-12">
                    <div className="col-span-12 flex justify-center mt-5">
                        <Slider
                            typeSlider={'project'}
                            data={banners}
                            options={{
                                perPage: isMobile ? 1 : 3
                            }}
                        />
                    </div>
                </div>
                <div className="text-center mt-6">
                    <button className="bg-gray-500 text-white py-4 mb-5 px-8 rounded">Te invitamos a conocernos</button>
                </div>
            </div>
        </section>
    )
}

export default AllProjects;