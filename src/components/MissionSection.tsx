import { Heart, Eye, ShieldCheck, Users, BookOpen, Apple } from "lucide-react";
import outreachImage from "@/assets/outreach-pair.jpg";
import officeImage from "@/assets/outreach-office.jpg";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const values = [
  {
    icon: Heart,
    title: "Compassionate Care",
    description: "Free monthly medical consultations, deworming, and treatment for malaria, diabetes, and hypertension in underserved communities.",
  },
  {
    icon: Eye,
    title: "Vision Restoration",
    description: "Comprehensive eye examinations, treatment, and distribution of free reading glasses to those who cannot afford proper eye care.",
  },
  {
    icon: ShieldCheck,
    title: "Cancer Awareness",
    description: "Prostate and breast cancer screening and awareness programs, often delivered in collaboration with Covenant University.",
  },
  {
    icon: Apple,
    title: "Nutritional Support",
    description: "Monthly distribution of raw food items and groceries to low-income families facing food insecurity across Nigerian communities.",
  },
  {
    icon: Users,
    title: "Welfare & Empowerment",
    description: "Free clothing, household essentials, and vocational skill training designed to build self-sufficiency and restore dignity.",
  },
  {
    icon: BookOpen,
    title: "Spiritual Outreach",
    description: "Faith-based counseling and spiritual guidance, having reached over 5,000 individuals through dedicated community missions.",
  },
];

const MissionSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* About block */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div>
            <span className="text-secondary text-sm font-semibold uppercase tracking-wider">Who We Are</span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-2 mb-6 leading-snug">
              Turning Compassion
              into Meaningful Impact
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
              Beulah Health Group (formerly Beulah World Initiative) is a faith-based, non-profit organization founded in 2016. We are dedicated to improving the quality of life in rural and suburban African communities, starting with Nigeria.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
              Under the leadership of Ms. Chichi M. Ononiwu — a Humanitarian Awards Global recipient (2022) — our team conducts monthly outreaches providing comprehensive healthcare, empowerment, and welfare services across six Nigerian states.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Creating Change That Lasts a Lifetime",
                "Building Stronger Communities for All",
                "Where Purpose Meets Positive Change",
                "Headquartered in Abuja, Active Across Nigeria",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-foreground text-sm">
                  <span className="w-2 h-2 bg-secondary rounded-full shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Link to="/about">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 text-sm">
                Learn More About Us
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={outreachImage}
              alt="Community engagement"
              className="rounded-2xl shadow-lg w-full object-cover aspect-[3/4]"
            />
            <img
              src={officeImage}
              alt="Partnership meeting"
              className="rounded-2xl shadow-lg w-full object-cover aspect-[3/4] mt-8"
            />
          </div>
        </div>

        {/* Values block */}
        <div className="bg-section-alt rounded-3xl p-8 md:p-14">
          <div className="text-center mb-12">
            <span className="text-secondary text-sm font-semibold uppercase tracking-wider">Our Core Values</span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-section-alt-foreground mt-2">
              Where Compassion Meets Lasting Impact
            </h2>
            <p className="text-section-alt-foreground/60 mt-3 max-w-xl mx-auto text-sm">
              Every program we run is built on the belief that healthcare and dignity are fundamental rights for every individual.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-card rounded-2xl p-6">
                <div className="w-11 h-11 bg-secondary/20 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
