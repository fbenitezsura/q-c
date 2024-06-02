import Hero from '@modules/common/components/hero/index';
import FormContact from '@modules/contact/components/form/index';
const ContactPage = () => {

    return (
        <>
            <Hero
                urlImage={'https://www.katemu.com/wp-content/uploads/2020/01/bg-contact-top.jpg'}
                title={'Contacto'}
            />
            <section className="container mx-auto lg:px-20">
                <div className="flex flex-wrap my-4">
                    <div className="w-full lg:w-1/2 px-2">
                        <span className="text-[14px] text-[#FF6B00] font-semibold">Contáctanos</span>
                        <h3 className="text-[25px] text-[#5D5D5D] font-bold mt-2">Y danos la oportunidad de apoyarte con tu próximo proyecto.</h3>
                        <article className="mt-3">
                            <p className="text-[14px] text-[#999999]">Contáctanos y danos la oportunidad de apoyarte con tu próximo proyecto. Envíanos tus datos y un representante te contactará para entregarte la mejor asesoría adaptada a tu necesidad.</p>
                            <br />
                            <strong className="text-[14px] text-[#000000]">Descubre la calidad y durabilidad de los pisos Katemu</strong>
                        </article>
                        <div className="mt-4 bg-[#F7F7F7] p-4 text-center">
                            <p className="text-[18px] text-[#5D5D5D] font-semibold">Datos de contacto</p>
                            <div className="grid grid-cols-12 mt-2">
                                <div className="col-span-12 lg:col-span-4 text-center px-2">
                                    <span className="font-semibold text-[14px] text-[#5D5D5D]">Dirección</span>
                                    <p className="text-[14px] text-[#5D5D5D]">Camino de la Colina 1455, Huechuraba, Santiago, Chile</p>
                                </div>
                                <div className="col-span-12 lg:col-span-4 text-center px-2 mt-4 lg:mt-0">
                                    <span className="font-semibold text-[14px] text-[#5D5D5D]">Teléfono</span>
                                    <p className="text-[14px] text-[#5D5D5D]">+562 27344069</p>
                                </div>
                                <div className="col-span-12 lg:col-span-4 text-center px-2 mt-4 lg:mt-0">
                                    <span className="font-semibold text-[14px] text-[#5D5D5D]">Correo Electrónico</span>
                                    <p className="text-[14px] text-[#5D5D5D]">epincheira@qyc.cl </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 bg-[#F7F7F7] lg:p-8 p-4 lg:mt-0 mt-5">
                        <FormContact />
                    </div>
                    <div className="w-full mt-5">
                        <h3 className="text-2xl font-bold">Nuestra Ubicación</h3>
                        <iframe
                            width="100%"
                            height="340"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1593.0823837337054!2d-73.15955713501306!3d-37.0058653965143!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9669c6b876995773%3A0x4807f1885e229a59!2sQyC+Quimicos+y+Complementos.!5e0!3m2!1ses-419!2scl!4v1520200792272"
                            frameBorder="0"
                            allowFullScreen={false}
                            style={{ border: '0px' }}
                            className="mt-3"
                        />
                    </div>
                </div>
            </section>
        </>
    )

}

export default ContactPage;