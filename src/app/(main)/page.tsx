import Slider from '@modules/common/components/slider/index';
import AreaExpert from '@modules/home/areaExpert/index';
import DescriptionQC from '@modules/home/descriptionQC/index';
import AllProjects from '@modules/home/allProjects/index';
import OwnClients from '@modules/home/ownClients/index';
export default function Home() {
  return (
    <>
      <div className="grid grid-cols-12 mb-5">
        <div className="col-span-12">
          <Slider
            typeSlider={'banner'}
            data={[1]}
          />
        </div>
      </div>
      <AreaExpert />
      <DescriptionQC />
      <AllProjects />
      <OwnClients />
    </>
  )
}
