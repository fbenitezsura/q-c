import Hero from '@modules/common/components/hero/index';
import OwnClients from '@modules/home/ownClients/index';
const EmpresaPage = () => {

    return (
        <div>
            <Hero
                urlImage={'https://www.katemu.com/wp-content/uploads/2019/06/bg-about-us-top.jpg'}
                title={'Empresa'}
            />
            <div className="container mx-auto lg:px-20">
                <div className="flex flex-wrap my-8 mb-16">
                    <div className="lg:w-2/3 mb-5">
                        <span className="text-[14px] text-[#FF6B00] font-semibold">Nuestro compromiso con la calidad</span>
                        <h3 className="text-[25px] text-[#5D5D5D] font-bold mt-2">Nos hace hoy día la empresa líder en pisos de hormigón en Chile</h3>
                        <article className="mt-3">
                            <p className="text-[14px] leading-relaxed text-[#999999] text-justify">
                                Somos una empresa con más de 15 años de experiencia y trayectoria. Todas nuestras obras han cumplido con las normas de calidad impuestas por los distintos organismos, sobre todo en el área alimentos donde los controles de higiene, calidad y seguridad son de máxima exigencia. Cada uno de nuestros trabajadores se encuentra apto y capacitado en sus tareas lo cual permite los resultados entregados hasta el momento. Todos nuestros trabajos son revisados y garantizados, ofrecemos además para mayor seguridad trabajos de mantención y restauración de todo tipo de revestimientos. Nuestra mayor obra es la realizada en pesquera Orizon S.A. Perteneciente al grupo Copec, llegando a cubrir más de veinte mil metros cuadrados de superficie.
                            </p>
                        </article>
                    </div>
                    <div className="lg:w-1/3 mb-5 flex justify-center">
                        <img
                            src="https://www.katemu.com/wp-content/uploads/2020/04/katemu.jpg"
                            alt="Katemu"
                            className="max-w-full h-[430px]"
                        />
                    </div>
                    <div className="w-full lg:w-1/2 mt-5">
                        <span className="text-[18px] text-[#5D5D5D] font-semibold">Visión</span>
                        <p className="mt-2 text-[14px] text-[#999999]">
                            Seremos indispensables a la hora de proteger la vida útil de las edificaciones y estructuras...
                        </p>
                    </div>
                    <div className="w-full lg:w-1/2 mt-5">
                        <span className="text-[18px] text-[#5D5D5D] font-semibold">Misión</span>
                        <p className="mt-2 text-[14px] text-[#999999]">
                            Ayudar a nuestros clientes y sus distintas necesidades de manera rápida, eficiente y de calidad...
                        </p>
                    </div>
                </div>
                <OwnClients />
            </div>
        </div>
    )

}

export default EmpresaPage;