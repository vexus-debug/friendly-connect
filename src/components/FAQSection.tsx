import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import meetingImg from "@/assets/outreach-meeting.jpg";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    question: "How are my donations used?",
    answer: "Every donation goes directly to our core programs — providing free medical consultations, cancer screenings, eye care, nutritional support, and community welfare. We maintain full transparency and share quarterly impact reports with our donors.",
  },
  {
    question: "Can I choose where my donation goes?",
    answer: "Yes. You can designate your donation to a specific program such as medical outreach, vision restoration, cancer screening, nutritional support, or community welfare and empowerment.",
  },
  {
    question: "Do you provide updates after I donate?",
    answer: "Absolutely. We send quarterly impact reports, stories from the communities we serve, and photo/video updates so you can see the tangible difference your contribution makes in people's lives.",
  },
  {
    question: "How can I volunteer with Beulah Health Group?",
    answer: "We welcome volunteers — both medical professionals and general supporters — for our monthly community outreaches. Visit our Get Involved page or email us at beulahworld.initiative@gmail.com to learn about upcoming opportunities.",
  },
  {
    question: "Where does Beulah Health Group operate?",
    answer: "Our headquarters is in Abuja, and we conduct monthly outreaches across Lagos (Idimu, Ogba, Ejigbo, Gbagada), Ogun State (Ota, Atan), Edo State (Benin City), and Rivers State (Eleme).",
  },
  {
    question: "Is Beulah Health Group a registered organization?",
    answer: "Yes. Beulah Health Group (formerly Beulah World Initiative) is a registered faith-based, non-profit organization that has been operating since 2016, led by Ms. Chichi M. Ononiwu.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-secondary text-sm font-semibold uppercase tracking-wider">Frequently Asked Questions</span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-2 mb-4 leading-snug">
              Answers to Questions That
              Inspire Your Giving Journey
            </h2>
            <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
              We value your trust. Here you'll find honest answers about how your donations are used, how to get involved, and how we operate across Nigeria.
            </p>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-border">
                  <AccordionTrigger className="text-left font-medium text-foreground text-sm hover:text-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-sm leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="mt-6">
              <Link to="/contact">
                <Button variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground text-sm">
                  Have More Questions? Contact Us
                </Button>
              </Link>
            </div>
          </div>
          <div className="space-y-4 sticky top-24">
            <img
              src={meetingImg}
              alt="Team meeting and planning"
              className="w-full object-cover rounded-2xl aspect-[4/3]"
            />
            <div className="bg-section-alt rounded-2xl p-6">
              <h3 className="font-heading text-lg font-semibold text-section-alt-foreground mb-2">Need Direct Support?</h3>
              <p className="text-section-alt-foreground/70 text-sm mb-3">
                Call us at <span className="font-semibold text-secondary">+234 703 805 7507</span> or email us for immediate assistance.
              </p>
              <a href="mailto:beulahworld.initiative@gmail.com" className="text-secondary text-sm font-medium hover:underline">
                beulahworld.initiative@gmail.com →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
