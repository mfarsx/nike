import { arrowRight } from "../assets/icons";
import Button from "../components/Button";

const Hero = () => {
  return (
    <section
      id="home"
      className="w-full border-2 flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container border-red-300"
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-lg:padding-x pt-28">
        <p>Our Summer Collection</p>
        <h1>
          <span>The New Arrival</span>
          <br />
          <span>Nikey</span>
          Shoes
        </h1>
        <p>
          Discover stylish Nikey arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="Shop now" iconURL={arrowRight} />
      </div>
    </section>
  );
};

export default Hero;
