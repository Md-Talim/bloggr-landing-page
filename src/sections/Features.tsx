import Description from '../components/Description';
import { features } from '../data';

const Features = () => {
  return (
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
          <Description key={feature.label} {...feature} />
        ))}
      </div>
    </section>
  );
};

export default Features;
