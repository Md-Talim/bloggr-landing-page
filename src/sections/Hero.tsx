import Button from '../components/Button';
import Navbar from '../components/Navbar';

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <main className="bg-veryLightRed bg-hero-mobile md:bg-hero min-h-[80vh] rounded-bl-[100px] md:rounded-bl-[150px] bg-center">
        <header className="Container">
          <Navbar />
        </header>

        <section className="Container mt-28 md:my-32 max-sm:px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-[78px] text-white font-bold">
              A modern publishing platform
            </h1>
            <p className="text-lg md:text-2xl mt-10 text-white">
              Grow your audience and build your online brand
            </p>
          </div>

          <div className="flex gap-6 mt-20 text-center w-full items-center justify-center">
            <Button label="Start for Free" variant="primary" />
            <Button label="Learn More" variant="underlined" customStyles="" />
          </div>
        </section>
      </main>
    </>
  );
};

export default Hero;
