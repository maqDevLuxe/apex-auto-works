import { ParallaxImage } from "./ScrollReveal";
import racetrackImg from "@/assets/racetrack.jpg";

const RacetrackBanner = () => {
  return (
    <section className="relative h-[50vh] md:h-[70vh]">
      <ParallaxImage className="absolute inset-0">
        <img
          src={racetrackImg}
          alt="Professional racetrack at sunset"
          className="w-full h-[120%] object-cover"
          loading="lazy"
        />
      </ParallaxImage>
      <div className="absolute inset-0 bg-background/50" />
      <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
        <div>
          <p className="text-[11px] tracking-[0.4em] text-primary font-body uppercase mb-4">Born on the Track</p>
          <h2 className="heading-xl text-foreground">Built for<br /><span className="text-chrome">The Circuit</span></h2>
        </div>
      </div>
    </section>
  );
};

export default RacetrackBanner;
