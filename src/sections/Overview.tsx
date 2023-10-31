import { info } from '../data';

const Description = ({
  label,
  description,
}: {
  label: string;
  description: string;
}) => (
  <div className="space-y-8">
    <h3 className="text-3xl xl:text-4xl font-semibold text-veryDarkBlue">
      {label}
    </h3>
    <p className="text-veryDarkGrayishBlue max-w-[55ch] !leading-loose md:text-lg xl:text-xl">
      {description}
    </p>
  </div>
);

const Overview = () => {
  return (
    <section className="pt-40 pb-60 space-y-28 text-center overflow-y-hidden overflow-x-hidden md:text-left px-10">
      <h2 className="text-4xl xl:text-[50px] md:text-5xl md:translate-y-full tracking-tight font-bold text-center text-veryDarkBlue">
        Designed for the future
      </h2>

      <div className="Container flex -mt-40 flex-col md:flex-row-reverse container md:justify-between items-center gap-10">
        <div className="md:translate-x-1/2 md:scale-150 overflow-visible">
          <img
            src="/images/illustration-editor-desktop.svg"
            alt="Illustrator editor"
            className="overflow-visible"
          />
        </div>
        <div className="space-y-8 md:space-y-24">
          {info.map(({ label, description }) => (
            <Description key={label} label={label} description={description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Overview;
