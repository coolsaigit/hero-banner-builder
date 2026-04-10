import { ArrowRight } from "lucide-react";
import phonesMockup from "@/assets/phones-mockup.png";

const HeroBanner = () => {
  return (
    <section
      className="relative w-full min-h-[600px] overflow-hidden"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div className="container mx-auto px-6 lg:px-16 py-16 lg:py-24 flex flex-col lg:flex-row items-center gap-12">
        {/* Left content */}
        <div className="flex-1 z-10 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal italic text-primary-foreground leading-tight mb-6">
            Lorem Ipsum
            <br />
            Dolor Sit Amet
          </h1>
          <p className="text-primary-foreground/80 text-lg md:text-xl max-w-md mx-auto lg:mx-0 mb-10 font-light leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="inline-flex items-center gap-2 bg-primary-foreground text-foreground font-semibold tracking-wider text-sm uppercase px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105">
              Get Started
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="inline-flex items-center justify-center font-semibold tracking-wider text-sm uppercase px-8 py-4 rounded-full border border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300">
              Find Out More
            </button>
          </div>
        </div>

        {/* Right content - phone mockups */}
        <div className="flex-1 flex justify-center lg:justify-end">
          <img
            src={phonesMockup}
            alt="App preview on smartphones"
            className="w-[320px] md:w-[400px] lg:w-[480px] drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
