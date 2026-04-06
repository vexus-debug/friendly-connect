import { Phone, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-secondary-foreground mb-2">
              Looking to make a real difference today?
            </h2>
            <p className="text-secondary-foreground/70 text-sm">
              Whether you want to donate, volunteer, or partner with us — we'd love to hear from you.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:+2347038057507"
              className="flex items-center gap-3 bg-primary text-primary-foreground rounded-full px-6 py-3 font-medium hover:bg-primary/90 transition-colors text-sm"
            >
              <Phone className="h-4 w-4" />
              +234 703 805 7507
            </a>
            <Link to="/contact">
              <Button variant="outline" className="rounded-full border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary px-6 text-sm">
                Contact Us
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
