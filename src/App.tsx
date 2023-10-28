import Button from './components/Button';
import Navbar from './components/Navbar';

const App = () => {
  return (
    // Hero Section
    <main className="bg-veryLightRed bg-hero-mobile md:bg-hero min-h-[70vh] md:min-h-[80vh] rounded-bl-[100px] md:rounded-bl-[200px] bg-center">
      <header className="container md:px-5">
        <Navbar />
      </header>

      <section className="container mt-28 md:mt-20 max-sm:px-4">
        <div className="text-center">
          <h1 className="text-4xl md:text-7xl text-white font-bold">
            A modern publishing platform
          </h1>
          <p className="text-lg md:text-xl mt-5 text-white">
            Grow your audience and build your online brand
          </p>
        </div>

        <div className="flex gap-6 mt-10 text-center w-full items-center justify-center">
          <Button label="Start for Free" variant="primary" />
          <Button label="Learn More" variant="underlined" />
        </div>
      </section>
    </main>
  );
};

export default App;
