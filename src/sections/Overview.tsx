import { info } from '../data';

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

const Overview = () => {
  return (
    <section className="my-28 space-y-10 text-center overflow-y-clip overflow-x-hidden md:text-left px-5">
      <h2 className="text-4xl md:text-5xl md:translate-y-full tracking-tight font-bold text-center text-veryDarkBlue">
        Designed for the future
      </h2>

      <div className="Container flex -mt-40 flex-col md:flex-row-reverse container md:justify-between items-center gap-10">
        <div className="md:translate-x-1/2 md:scale-125">
          <img
            src="/images/illustration-editor-desktop.svg"
            alt="Illustrator editor"
          />
        </div>
        <div className="space-y-8 md:space-y-20">
          {info.map(({ label, description }) => (
            <Description key={label} label={label} description={description} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Overview;
