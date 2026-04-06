import groupImg from "@/assets/outreach-group.jpg";
import { CheckCircle } from "lucide-react";

const stats = [
  { value: "19K+", label: "Lives Touched" },
  { value: "10K+", label: "Medical Consultations" },
  { value: "5K+", label: "Spiritual Missions" },
  { value: "15K+", label: "Community Members Served" },
];

const highlights = [
  "Monthly outreaches across 6+ Nigerian states",
  "Partnerships with Covenant University & government bodies",
  "Recognized by Humanitarian Awards Global (2022)",
  "Over 5,000 individuals reached through spiritual missions",
];

const ImpactSection = () => {
  return (
    <section className="py-20 bg-foreground">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="rounded-2xl overflow-hidden relative">
            <img
              src={groupImg}
              alt="Beulah Health Group team on community outreach"
              className="w-full object-cover aspect-[4/3]"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-primary/90 backdrop-blur-sm rounded-xl p-4">
              <p className="text-primary-foreground text-xs font-medium">
                "Healthcare and dignity are fundamental rights, not privileges."
              </p>
              <p className="text-secondary text-xs mt-1">— Beulah Health Group</p>
            </div>
          </div>
          <div>
            <span className="text-secondary text-sm font-semibold uppercase tracking-wider">Our Impact</span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground mt-2 mb-4 leading-snug">
              Every Gift Creates a
              Brighter Tomorrow
            </h2>
            <p className="text-primary-foreground/60 mb-8 leading-relaxed text-sm">
              Since 2016, Beulah Health Group has been at the frontlines of community healthcare in Nigeria. Each contribution, no matter the size, helps bring hope, healing, and dignity to those who need it most.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat) => (
                <div key={stat.label} className="border-l-2 border-secondary pl-4">
                  <div className="text-2xl font-bold text-secondary font-heading">{stat.value}</div>
                  <div className="text-primary-foreground/50 text-xs mt-1">{stat.label}</div>
                </div>
              ))}
            </div>

            <ul className="space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-2 text-primary-foreground/70 text-sm">
                  <CheckCircle className="h-4 w-4 text-secondary mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
