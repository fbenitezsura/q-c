import Link from 'next/link';
import { capitalizeFirstLetter } from '@utils/Capitalize';
const Breadcrumbs = ({
    section,
    currentPage
} : any) => {

    return (
        <div className="container mx-auto lg:px-20">
            <ol className="flex mt-5">
                <li className="breadcrumb-item">
                    <Link href="/">
                        <span className="text-[16px] text-[#FF6B00]">Inicio /</span>
                    </Link>
                </li>
                <li className="breadcrumb-item">
                    <Link href={`/${section}`}>
                        <span className="text-[16px] text-[#FF6B00] ml-1">{section && capitalizeFirstLetter(section || '')} /</span>
                    </Link>
                </li>
                <li className="breadcrumb-item active">
                    <span className="text-[16px] text-[#6C757D] ml-1">{currentPage}</span>
                </li>
            </ol>
        </div>
    )
}

export default Breadcrumbs;