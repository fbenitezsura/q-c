import Hero from '@modules/common/components/hero/index';
import Link from 'next/link';
import { serviceList } from '@utils/serviceList';
import OwnClients from '@modules/home/ownClients/index';
const ServiceHomePage = () => {

    return (
        <>
            <Hero
                urlImage={'https://www.katemu.com/wp-content/uploads/2019/06/bg-services-top.jpg'}
                title={'Servicios'}
            />
            <section className="container mx-auto lg:px-20">
                <div className="flex flex-wrap my-4">
                    <div className="w-full lg:w-1/2">
                        <span className="text-[14px] text-[#FF6B00] font-semibold">Una Completa Gama de servicios</span>
                        <h3 className="text-[35px] text-[#5D5D5D] font-bold mt-2">Para resolver las necesidades propias de cada proyecto.</h3>
                    </div>
                    <div className="hidden lg:block lg:w-1/2">
                        <div className="text-base mt-4">
                            <p className="text-[16px] text-[#999999] text-justify">
                                Hemos incorporado las diferentes especialidades a nuestra empresa para poder entregar a nuestros clientes un servicio integral al momento de enfrentar un proyecto. Diseñamos, construimos, reparamos y medimos objetivamente cada trabajo para garantizar resultados tanto en proyectos propios como de terceros.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container mx-auto lg:px-20 mb-10">                
                <div className="grid grid-cols-12">
                    {serviceList.map((service) => (
                        <div key={service.title} className="col-span-12 lg:col-span-4 p-2 relative">
                            <Link href={`/servicios/${service.title.replaceAll(' ', '-').toLowerCase()}`}>
                                <img src={'https://www.katemu.com/wp-content/uploads/2022/04/katemu-ml-3.jpg'} className="h-[400px] w-full"></img>
                            </Link>
                            <div className="absolute w-[80%] h-[140px] top-[62%] left-[0%] grid grid-cols-12 bg-[#FF6B00] p-4 z-[9]">
                                <div className="col-span-8">
                                    <h3 className="text-lg font-semibold">{service.title}</h3>
                                </div>
                                <Link className="col-span-4 flex justify-center" href={`/servicios/${service.title.replaceAll(' ', '-').toLowerCase()}`}>
                                    <img
                                        className="w-10 h-10"
                                        src="https://www.katemu.com/wp-content/themes/Katemu_theme/images/arrow-box.png"
                                        alt="Service Image"
                                    />
                                </Link>                                                                            
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <OwnClients />
        </>
    )

}

export default ServiceHomePage;