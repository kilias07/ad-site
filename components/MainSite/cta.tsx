import Image from "next/image";

const Cta = () => {
  return (
    <section className="max-w-screen-3xl mx-auto flex justify-center flex-wrap gap-10 my-20">
      <div className="w-[20rem] text-center">
        <div className="w-1/2 mx-auto">
          <Image
            src="/assets/cta/1.webp"
            alt="title"
            layout="responsive"
            priority
            width="225"
            height="436"
            objectFit="contain"
          />
        </div>
        <h3 className="text-2xl h-16 flex items-center justify-center">
          Rzeźba
        </h3>
        <p className="flex items-center justify-center h-20">
          przestrzenne autorskie formy wykonane nie tylko w kamieniu
        </p>
      </div>
      <div className="w-[20rem] text-center">
        <div className="w-1/2 mx-auto">
          <Image
            src="/assets/cta/2.webp"
            alt="title"
            layout="responsive"
            priority
            width="225"
            height="436"
            objectFit="contain"
          />
        </div>
        <h3 className="text-2xl h-16 flex items-center justify-center">
          Kompozycje półprzestrzenne/instalacje
        </h3>
        <p className="flex items-center justify-center h-20">
          twory niepasujące do kategorii ani po lewej, ani prawej stronie
        </p>
      </div>
      <div className="w-[20rem] text-center">
        <div className="w-1/2 mx-auto">
          <Image
            src="/assets/cta/3.webp"
            alt="title"
            layout="responsive"
            priority
            width="225"
            height="436"
            objectFit="contain"
          />
        </div>
        <h3 className="text-2xl h-16 flex items-center justify-center">
          Realizacje na zamówienie
        </h3>
        <p className="flex items-center justify-center h-20">
          różności powstałe na zlecenie lub w celach konkursowych
        </p>
      </div>
      <div className="w-[20rem] text-center">
        <div className="w-1/2 mx-auto">
          <Image
            src="/assets/cta/4.webp"
            alt="title"
            layout="responsive"
            priority
            width="225"
            height="436"
            objectFit="contain"
          />
        </div>
        <h3 className="text-2xl h-16 flex items-center justify-center">
          Rysunek
        </h3>
        <p className="flex items-center justify-center h-20">
          Prace wykonane najczęściej na płaszczyźnie, za pomocą własnych technik
          i rozwiązań
        </p>
      </div>
    </section>
  );
};

export default Cta;
