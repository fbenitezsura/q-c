import Slider from '@modules/common/components/slider/index';

const DescriptionQC = () => {
    const boxes = [
        {
            image: 'https://www.katemu.com/wp-content/uploads/2020/01/experiencia.jpg',
            title: 'Técnicos de terreno',
            description: 'Cada cliente tiene distintas necesidades e incluso dentro de las mismas áreas de trabajo se encuentran con diferentes sustratos, tipos de tránsito, tipos de carga, altas y bajas temperaturas, etc. Y por ello se requiere de una visita a terreno para dar una recomendación y dar un seguimiento de los trabajos a ejecutar, no se trata de solo elegir un color o un producto, se trata de que es mejor en precio costo del cuidado del sustrato y prepararlo para el uso que se le requiere dar.'
        },
        {
            image: 'https://www.katemu.com/wp-content/uploads/2020/01/experiencia.jpg',
            title: 'Equipos',
            description: 'Si bien actualmente muchas empresas se dedican al rubro no cuentan con el equipamiento necesario para realizar un trabajo optimo, nosotros tenemos distintos tipos de maquinarias para los distintos tipos de sustrato además de saber determinar que tipo de rugosidad requiere cada producto y como llegar a ella. Tener estos equipos permiten reducir los tiempos de trabajo y la sobrecarga de trabajo en los trabajadores además de entregar la preparación de superficie adecuada según las distintas fichas técnicas de los distintos productos.'
        },
        {
            image: 'https://www.katemu.com/wp-content/uploads/2020/01/experiencia.jpg',
            title: 'Compromiso con la seguridad',
            description: 'Nuestra empresa está comprometida con la seguridad y salud en el Trabajo además de asegurar el manejo eficiente y cuidadoso de las maquinarias, equipos y actividades que se realizan en las distintas empresas a las que presta sus servicios. Conscientes de los riesgos inherentes en nuestras actividades, hemos establecido como Política de Seguridad y Salud Ocupacional, la protección tanto de nuestros trabajadores como de terceros que puedan verse involucrados en nuestros procesos, la cual debe ser conocida por todos los miembros que conforman nuestra organización.'
        },
        {
            image: 'https://www.katemu.com/wp-content/uploads/2020/01/experiencia.jpg',
            title: 'Autocontrol',
            description: 'Nuestro trabajo contiene etapas que son distinguibles en el proceso de revestimiento y cada una de estas etapas requiere de un cuidado y atención únicos para lograr el resultado deseado. Trabajamos con la norma SSPC (Steel Structures Painting Council, USA.) para la preparación de la superficie y para la aplicacion el soporte técnico del proveedor del producto a aplicar. Contamos con múltiples capacitaciones de varios productos y/o proveedores además de participar activamente en las charlas de los mismos.'
        }
    ]

    return (
        <section className="container mx-auto lg:px-20">
            <div className="text-left mt-10">
                <span className="text-[14px] text-[#FF6B00] font-semibold">Por qué elegir Q&C</span>
                <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-[32px] text-[#5D5D5D] font-bold">
                            Innovación y tecnología en pavimentos y pisos industriales
                        </h2>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <p className="text-[14px] text-[#999999]">
                            Ofreciendo servicios en el mercado chileno durante más 10 años, contamos con personal altamente capacitado para ofrecer soluciones innovadoras en revestimientos de pisos y reparaciones de superficies, contando con la confianza de 35 clientes y más de 100.000 M2 ejecutados. Somos experiencia, calidad y responsabilidad. Somos la solución en revestimientos.
                        </p>
                    </div>
                </div>
            </div>

            <div className="hidden lg:flex flex-wrap mt-5">
                {boxes.map((box, index) => (
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/2 p-2 relative">
                        <img
                            src={box.image}
                            alt=""
                            className="w-full h-[450px]"
                        />
                        <div className="bg-[#FF6B00] p-4 absolute top-[47%] left-0 w-[90%] h-auto lg:h-[220px]">
                            <h3 className="text-xl font-bold">{box.title}</h3>
                            <p className="text-justify text-[12px] mt-1">{box.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="blcok lg:hidden flex flex-wrap p-4">
                <Slider
                    typeSlider={'description'}
                    data={boxes}
                />
            </div>

            <div className="text-center mt-6">
                <button className="bg-gray-500 text-white py-4 px-8 rounded">Te invitamos a conocernos</button>
            </div>
        </section>
    );
};

export default DescriptionQC;