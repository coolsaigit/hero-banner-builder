import { Signal, Battery, Lock, MapPin, Activity, Smartphone } from "lucide-react";

const features = [
  {
    icon: Signal,
    title: "Real-Time Tracking",
    value: "98%",
    description: "Location signal strength with precision GPS technology",
  },
  {
    icon: Battery,
    title: "Long Battery Life",
    value: "75%",
    description: "Extended battery performance that lasts through every adventure",
  },
  {
    icon: Lock,
    title: "Secure & Protected",
    value: "256-bit",
    description: "Military-grade encryption keeps your data safe at all times",
  },
  {
    icon: MapPin,
    title: "Find My Device",
    value: "< 1m",
    description: "Pinpoint accuracy to locate your gear anywhere on the mountain",
  },
  {
    icon: Activity,
    title: "Ride Analytics",
    value: "Live",
    description: "Track speed, altitude, and performance metrics in real time",
  },
  {
    icon: Smartphone,
    title: "Smart Alerts",
    value: "Instant",
    description: "Push notifications for theft detection and boundary alerts",
  },
];

const FeaturesSection = () => {
  return (
    <section className="relative w-full py-24 lg:py-32 overflow-hidden bg-[hsl(175,40%,8%)]">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(175,60%,15%,0.3),transparent_70%)]" />

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal italic text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-white/60 text-lg max-w-xl mx-auto font-light">
            Everything you need to track, protect, and optimize your ride experience.
          </p>
        </div>

        {/* Feature cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-8 hover:border-[hsl(175,80%,60%)]/40 transition-all duration-500 hover:bg-white/[0.08]"
            >
              {/* Glow accent on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(ellipse_at_top_left,hsl(175,80%,50%,0.08),transparent_60%)]" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5">
                  <feature.icon className="w-6 h-6 text-[hsl(175,80%,60%)]" />
                </div>

                {/* Stat value */}
                <span className="text-2xl font-bold text-[hsl(175,80%,60%)] tracking-tight">
                  {feature.value}
                </span>

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mt-2 mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-white/50 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
