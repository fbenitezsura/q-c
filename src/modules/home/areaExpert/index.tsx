const AreaExpert = () => {
    const area = [
        {
            image: 'https://www.katemu.com/wp-content/uploads/2020/01/Pisos-y-Pavimentos-Industriales-1.svg',
            title: 'Pavimentos Industriales'
        },
        {
            image: 'https://www.katemu.com/wp-content/uploads/2020/01/Pisos-y-Pavimentos-comerciales-decorativos.svg',
            title: 'Pisos Comerciales y Decorativos'
        },
        {
            image: 'https://www.katemu.com/wp-content/uploads/2020/01/Revestimientos-tratamientos-superficiales.svg',
            title: 'Revestimiento para pisos'
        },
        {
            image: 'https://www.katemu.com/wp-content/uploads/2020/01/Agroindustria.svg',
            title: 'Mantención y reparación'
        }
    ];

    return (
    <section className="container mx-auto lg:px-20">
        <div className="text-center mt-10">
            <h2 className="text-[32px] text-[#5D5D5D] font-bold">Áreas donde somos expertos</h2>
        </div>    
        <div className="flex flex-wrap mt-4 bg-[#ff6B00] p-4">
            {area.map((expert, index) => (
                <a key={index} className="w-1/2 md:w-1/4 p-2 flex flex-col items-center justify-center">
                    <img 
                    height="80"
                    width={80}
                    src={expert.image}
                    alt={expert.title}
                    className="max-w-full h-auto"
                    />
                    <p className="mt-2 text-center">{expert.title}</p>
                </a>
            ))}                    
        </div>            
    </section>
    );
};

export default AreaExpert;
