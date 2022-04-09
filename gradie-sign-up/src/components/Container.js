import Mockup from "../assets/iPhone-Mockup.png";
import Form from "./Form";

const Container = () => {
  return (
    <main className="md:w-[900px] md:h-[600px]  flex">
      {/* left */}
      <section className="w-1/2 h-full bg-theme-blue pt-14 px-14 pb-0 text-center lg:rounded-tl-xl lg:rounded-bl-xl relative">
        <h1 className="text-4xl text-white font-medium">Gradie</h1>
        <p className="text-theme-light-blue text-xl">
          Beautiful gradients in seconds.
        </p>
        <img
          src={Mockup}
          className="absolute bottom-0 left-0 w-full h-auto"
          alt="iPhone mockup"
        />
      </section>

      {/* right */}
      <Form />
    </main>
  );
};

export default Container;
