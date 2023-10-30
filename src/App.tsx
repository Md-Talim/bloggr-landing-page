import { features } from './data';
import Hero from './sections/Hero';
import Overview from './sections/Overview';

const Description = ({
  label,
  description,
}: {
  label: string;
  description: string;
}) => (
  <div className="space-y-4">
    <h3 className="text-3xl font-semibold text-veryDarkBlue">{label}</h3>
    <p className="text-veryDarkGrayishBlue max-w-[55ch] leading-relaxed md:text-lg">
      {description}
    </p>
  </div>
);

const App = () => {
  return (
    <>
      <Hero />
      <Overview />
      <section className="max-sm:mt-80 relative bg-veryDarkBlue max-h-fit rounded-tr-[100px] rounded-bl-[100px] bg-circles-pattern bg-no-repeat max-sm:bg-bottom md:bg-left-bottom">
        <div className="Container pt-60 pb-32 md:pt-32 px-6 flex items-center justify-end">
          <div className="absolute -top-60 md:-top-10 md:left-40">
            <img
              src="/images/illustration-phones.svg"
              alt="Phones Illustrations"
            />
          </div>

          <div className="space-y-4 max-sm:text-center">
            <h3 className="text-4xl md:text-5xl font-semibold text-white leading-relaxed">
              State of the Art Infrastructure
            </h3>
            <p className="text-white max-w-[55ch] leading-relaxed tracking-wider md:text-lg">
              With reliability and speed in mind. worldwide data centers provide
              the backbone for ultra-fast connectivity. This ensures your site
              will load instantly. no matter where your readers are, keeping
              your site competitive.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-20 md:mt-60 xl:mr-40 flex flex-col xl:flex-row max-sm:gap-10 items-center xl:justify-between">
        <div className="xl:-translate-x-[23%] xl:scale-125">
          <picture>
            <source
              media="(min-width:768px)"
              srcSet="/images/illustration-laptop-desktop.svg"
            />
            <img
              src="/images/illustration-laptop-mobile.svg"
              alt="Laptop Illustration"
            />
          </picture>
        </div>

        <div className="space-y-8 max-sm:text-center px-8">
          {features.map((feature) => (
            <Description {...feature} />
          ))}
        </div>
      </section>
    </>
  );
};

export default App;
