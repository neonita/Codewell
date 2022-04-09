import Mockup from "../assets/iPhone-Mockup.png";

const Container = () => {
  return (
    <main className="md:w-[900px] md:h-[600px] lg:rounded-lg border border-slate-400 overflow-hidden flex">
      {/* left */}
      <section className="w-1/2 h-full bg-theme-blue p-14 text-center">
        <h1 className="text-4xl text-white font-medium">Gradie</h1>
        <p className="text-theme-light-blue text-xl">
          Beautiful gradients in seconds.
        </p>
        <img src={Mockup} className="relative top-14" alt="iPhone mockup" />
      </section>

      {/* right */}
      <section className="w-1/2 h-full bg-white p-14">
        <h1 className="text-4xl text-theme-black font-medium">Login</h1>
      </section>
    </main>
  );
};

export default Container;
