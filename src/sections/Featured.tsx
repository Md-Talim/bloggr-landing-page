const Featured = () => {
  return (
    <section className="max-lg:mt-80 relative bg-veryDarkBlue max-h-fit rounded-tr-[120px] rounded-bl-[120px] bg-circles-pattern bg-no-repeat max-sm:bg-bottom md:bg-left-bottom">
      <div className="Container pt-60 pb-32 xl:pt-32 px-6 flex items-center justify-end">
        <div className="absolute -top-60 left-0 xl:-top-0 xl:left-20 2xl:left-60">
          <img
            src="/images/illustration-phones.svg"
            alt="Phones Illustrations"
            className="2xl:scale-125"
          />
        </div>

        <div className="space-y-8 max-xl:text-center xl:mt-10">
          <h3 className="text-4xl md:text-5xl font-semibold text-white leading-relaxed">
            State of the Art Infrastructure
          </h3>
          <p className="text-white max-w-[55ch] !leading-loose tracking-wider md:text-lg 2xl:text-xl">
            With reliability and speed in mind. worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly. no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Featured;
