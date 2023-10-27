import Navbar from './components/Navbar';

const App = () => {
  return (
    // Hero Section
    <main className="bg-veryLightRed bg-hero-mobile md:bg-hero min-h-[70vh] md:min-h-[80vh] rounded-bl-[100px] md:rounded-bl-[200px] bg-center">
      <header className="container md:px-5">
        <Navbar />
      </header>
    </main>
  );
};

export default App;
