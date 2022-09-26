import { BiChart } from "react-icons/bi";
import Image from "next/image";

const Cta = () => {
  return (
    <section className="max-w-screen-3xl mx-auto flex justify-center flex-wrap gap-10">
      <div className="w-[20rem]">
        <div className="w-1/2 mx-auto">
          <Image
            src="/assets/cta/1-01.png"
            alt="title"
            layout="responsive"
            priority
            width="225"
            height="436"
            objectFit="contain"
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
          cupiditate error ex, harum maxime molestias nobis, obcaecati officiis
          quas quia quibusdam, voluptatibus? A eaque expedita, fugiat fugit
          porro tempore temporibus!
        </p>
      </div>
      <div className="w-[20rem]">
        <div className="w-1/2 mx-auto">
          <Image
            src="/assets/cta/2-02.png"
            alt="title"
            layout="responsive"
            priority
            width="225"
            height="436"
            objectFit="contain"
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
          cupiditate error ex, harum maxime molestias nobis, obcaecati officiis
          quas quia quibusdam, voluptatibus? A eaque expedita, fugiat fugit
          porro tempore temporibus!
        </p>
      </div>
      <div className="w-[20rem]">
        <div className="w-1/2 mx-auto">
          <Image
            src="/assets/cta/3-03.png"
            alt="title"
            layout="responsive"
            priority
            width="225"
            height="436"
            objectFit="contain"
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
          cupiditate error ex, harum maxime molestias nobis, obcaecati officiis
          quas quia quibusdam, voluptatibus? A eaque expedita, fugiat fugit
          porro tempore temporibus!
        </p>
      </div>
      <div className="w-[20rem]">
        <div className="w-1/2 mx-auto">
          <Image
            src="/assets/cta/3-03.png"
            alt="title"
            layout="responsive"
            priority
            width="225"
            height="436"
            objectFit="contain"
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
          cupiditate error ex, harum maxime molestias nobis, obcaecati officiis
          quas quia quibusdam, voluptatibus? A eaque expedita, fugiat fugit
          porro tempore temporibus!
        </p>
      </div>
    </section>
  );
};

export default Cta;
