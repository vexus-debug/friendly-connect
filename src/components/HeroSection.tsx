import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/medical-outreach.jpg";
import { ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-end pb-20">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Beulah Health Group medical outreach"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/50 to-foreground/20" />
      </div>
      <div className="relative container mx-auto px-4">
        <div className="max-w-2xl">
          <span className="inline-block bg-secondary text-secondary-foreground text-xs font-semibold px-4 py-1.5 rounded-full mb-6 uppercase tracking-wider">
            Faith-Based Healthcare Since 2016
          </span>
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-5 leading-tight">
            Taking Responsibility for Social Transformation
          </h1>
          <p className="text-primary-foreground/80 text-base md:text-lg max-w-xl mb-8 leading-relaxed font-body">
            Beulah Health Group brings free medical care, vision services, and holistic empowerment to rural and suburban African communities — because healthcare and dignity are rights, not privileges.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link to="/about">
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full px-7 py-3 text-sm font-semibold">
                Learn More
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/donate">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-7 py-3 text-sm font-semibold">
                Donate Now
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { value: "2016", label: "Year Founded" },
            { value: "19K+", label: "Lives Touched" },
            { value: "6+", label: "States Reached" },
            { value: "5K+", label: "Spiritual Missions" },
          ].map((stat) => (
            <div key={stat.label} className="bg-primary-foreground/10 backdrop-blur-sm rounded-xl px-4 py-3 border border-primary-foreground/10">
              <div className="text-xl font-bold text-secondary font-heading">{stat.value}</div>
              <div className="text-primary-foreground/60 text-xs mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
