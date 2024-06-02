import Hero from '@modules/common/components/hero/index';
import Link from 'next/link';
import OwnClients from '@modules/home/ownClients/index';
const ProjectsHomePage = () => {

    const Proyectos = [{
        img: 'https://www.katemu.com/wp-content/uploads/2022/04/katemu-ml-3.jpg',
        title: 'Edificación',
        ubication: 'Location',
        href: 'edificacion'
    },
    {
        img: 'https://www.katemu.com/wp-content/uploads/2022/04/katemu-ml-3.jpg',
        title: 'Edificación',
        ubication: 'Location',
        href: 'edificacion'
    }]


    return (
        <>
            <Hero
                urlImage={'https://www.katemu.com/wp-content/uploads/2019/06/bg-proyect-top.jpg'}
                title={'Proyectos'}
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
                                Ofrecemos soluciones tecnológicas para todo tipo de proyectos. Nuestro objetivo es dar un soporte integral, proponiendo, diseñando y ejecutando trabajos de la más alta calidad y siempre con tecnología de vanguardia. Estamos en una búsqueda permanente de nuevos productos y procesos para mejorar el servicio a nuestros clientes y ofrecer soluciones a la medida de cada proyecto.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container mx-auto lg:px-20 mb-14">
                <div className="grid grid-cols-12">
                    {Proyectos.map((proyect) => {
                        return (
                            <div className="col-span-12 sm:col-span-12 lg:col-span-6 mt-5">
                                <Link href={`proyectos/${proyect.href}`}>
                                    <div className="relative mx-2">
                                        <div className="hover-proyect-img">
                                            <img
                                                className="h-[270px] w-full"
                                                src={proyect.img}
                                            />
                                        </div>
                                        <div className="absolute top-[80%] left-[2%] grid grid-cols-12 w-full">
                                            <div className="col-span-9 lg:col-span-10">
                                                <p>{proyect.title}</p>
                                                <span className="locacion">{proyect.ubication}</span>
                                            </div>
                                            <div className="col-span-3 lg:col-span-2">
                                                <img
                                                    src="https://www.katemu.com/wp-content/themes/Katemu_theme/images/arrow-box.png">
                                                </img>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
            </section>

            <OwnClients />

        </>
    )

}

export default ProjectsHomePage;