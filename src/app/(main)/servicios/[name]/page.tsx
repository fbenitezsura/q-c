import OwnClients from '@modules/home/ownClients/index';
import { capitalizeFirstLetter } from '@utils/Capitalize';
import Link from 'next/link';
import SliderThumbnail from '@modules/common/components/slider/thumbnail/index';
import { serviceList } from '@utils/serviceList';
import Breadcrumbs from '@modules/common/components/breadcrumb/index';

export async function getDataService(name: string) {
    const service = serviceList.find((item) => {
        return item.title.replace(/\s+/g, '-').toLowerCase() === name
    })
    return service;
}

const ServiceDetailPage = async ({
    params: { name },
}: {
    params: { name: string }
}) => {


    const service = await getDataService(name);

    return (
        <>
            <Breadcrumbs 
            section={'servicios'}
            currentPage={capitalizeFirstLetter(name?.replaceAll('-', ' '))}
            />
            <section className="container mx-auto lg:px-20">
                <div className="grid grid-cols-12 mt-10">
                    <div className="col-span-12 md:col-span-6 lg:col-span-8 lg:mr-10">
                        <h3 className="text-[25px] text-[#5D5D5D] mb-2">
                            {capitalizeFirstLetter(service?.title)}
                        </h3>
                        <article className="mb-4 text-justify">
                            <p className="text-[14px] text-[#999999]">{service?.description}</p>
                        </article>
                        <div className="bg-[#F7F7F7] p-10">
                            <div className="text-xs-center">
                                <img src="https://www.katemu.com/wp-content/themes/Katemu_theme/images/icon-ben.png"></img>
                            </div>
                            <span className="text-[#5D5D5D] text-[30px]">Beneficios</span>
                            {service?.benefits?.map((benefit) => {
                                return (
                                    <ul className="my-2">
                                        <li className="text-[14px] text-[#5D5D5D]">{benefit.description}</li>
                                    </ul>
                                )
                            })}
                        </div>
                        <div className="text-start mt-6">
                            <Link
                                href={`/contacto`}>
                                <button className="bg-gray-500 text-white py-4 mb-5 px-8 rounded">Solicitar una cotización</button>
                            </Link>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-6 lg:col-span-4">
                        <SliderThumbnail />
                    </div>
                </div>
            </section>
            <OwnClients />
        </>
    )

}

export default ServiceDetailPage;