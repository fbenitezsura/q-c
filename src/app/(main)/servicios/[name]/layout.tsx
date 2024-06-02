import { serviceList } from '@utils/serviceList';

export async function generateStaticParams() {
    let defaultServices = [];
    defaultServices = serviceList.map((service) => {
        return {
            name: service.title.toLowerCase()
        }
    });
    return defaultServices;
}

export const metadata = {
    title: 'Servicio de Revestimiento - Q&C',
    description: 'En Q&C disfruta las mejores oferta de revestimiento.',
}

export default function Layout({
    children,
    params: {
        name
    }
}: {
    children: React.ReactNode,
    params: {
        name: string
    }
}) {

    return (
        <>
            {children}
        </>
    )
}
