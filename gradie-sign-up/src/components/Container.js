import Mockup from "../assets/iPhone-Mockup.png";
import Form from "./Form";

const Container = () => {
  return (
    <main className="w-screen h-screen md:w-2/5 md:h-5/6 lg:w-[900px] lg:h-[600px] flex flex-col lg:flex-row">
      {/* left */}
      <section className="w-full h-1/2 lg:w-1/2 lg:h-full bg-theme-blue pt-8 lg:pt-14 px-14 pb-0 text-center lg:rounded-tl-xl lg:rounded-bl-xl relative">
        <h1 className="text-4xl text-white font-semibold">Gradie</h1>

        <p className="text-theme-light-blue text-md lg:text-xl">
          Beautiful gradients in seconds.
        </p>

        <img
          src={Mockup}
          className="absolute bottom-0 left-0 w-full h-auto"
          alt="iPhone mockup"
        />
      </section>

      {/* right */}
      <section className="w-full h-1/2 lg:w-1/2 lg:h-full bg-white p-14 border border-slate-400 lg:rounded-tr-xl lg:rounded-br-xl py-10">
        <Form />
      </section>
    </main>
  );
};

export default Container;
