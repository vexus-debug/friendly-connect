import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ethan Jones",
    role: "Community Member, Lagos",
    rating: 5,
    text: "I never thought a small act of kindness could lead to such a big change in my life. This organization gave me not just support, but also hope they believed in me when no one else did.",
  },
  {
    name: "Noah Alexander",
    role: "Partner, Covenant University",
    rating: 5,
    text: "Working with this nonprofit has shown me that true change begins with compassion. The dedication of their team is unmatched — they go beyond charity; they create lasting impact.",
  },
  {
    name: "Liam Carter",
    role: "Volunteer, Ogun State",
    rating: 5,
    text: "When my community was struggling, they were the first to arrive and the last to leave. Their care, attention, and genuine concern for every person made a lasting difference.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-secondary text-sm font-semibold uppercase tracking-wider">Testimonials</span>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-2">
            Stories That Inspire Change
          </h2>
          <p className="text-muted-foreground mt-3 max-w-lg mx-auto text-sm">
            Hear from the people whose lives have been touched by Beulah Health Group's work.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-card rounded-2xl p-6 shadow-sm border border-border">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-primary rounded-full flex items-center justify-center">
                  <span className="text-primary-foreground text-xs font-bold">
                    {t.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
