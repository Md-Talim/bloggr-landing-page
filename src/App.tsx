import Hero from './sections/Hero';
import Overview from './sections/Overview';

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
    </>
  );
};

export default App;
