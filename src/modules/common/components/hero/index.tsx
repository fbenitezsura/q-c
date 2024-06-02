const HeroBanner = ({
    urlImage,
    title
} : {
    urlImage: string,
    title: string
}) => {

    return (
        <section className="pt-16 bg-cover bg-center h-[500px] flex justify-center items-center" style={{backgroundImage: `url(${urlImage})`}}>
            <h2 className="text-[35px] font-bold uppercase text-white">
                {title}
            </h2>
        </section>        
    )
}

export default HeroBanner;
