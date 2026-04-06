import { MapPin, Phone, Mail } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-topbar text-topbar-foreground py-2 text-sm hidden md:block">
      <div className="container mx-auto flex items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-secondary" />
            <span className="text-xs">
              <span className="text-muted-foreground">Our Address</span>
              <br />
              Gwarinpa, Abuja, Nigeria
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-secondary" />
            <span className="text-xs">
              <span className="text-muted-foreground">Call Us</span>
              <br />
              +234 703 805 7507
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-secondary" />
            <span className="text-xs">
              <span className="text-muted-foreground">Email</span>
              <br />
              beulahworld.initiative@gmail.com
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a href="https://instagram.com/beulahworld.initiative" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-full border border-topbar-foreground/30 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-colors">
            <span className="text-xs">IG</span>
          </a>
          <a href="https://facebook.com/BeulahWorldInitiative" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-full border border-topbar-foreground/30 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-colors">
            <span className="text-xs">FB</span>
          </a>
          <a href="https://tiktok.com/@beulahworld.initiative" target="_blank" rel="noopener noreferrer" className="w-7 h-7 rounded-full border border-topbar-foreground/30 flex items-center justify-center hover:bg-secondary hover:border-secondary transition-colors">
            <span className="text-xs">TK</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
