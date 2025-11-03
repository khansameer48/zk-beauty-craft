import { Instagram, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">ZK Makeover</h3>
            <p className="text-primary-foreground/80 mb-4">
              Your destination for premium beauty and grooming services in Motihari.
            </p>
            <a 
              href="https://instagram.com/zkmakeover"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
            >
              <Instagram size={20} />
              <span>@zkmakeover</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Price List
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <a href="tel:+918434130774" className="hover:text-primary-foreground transition-colors">
                  +91 8434130774
                </a>
              </li>
              <li className="text-sm">
                Urdu Library Road<br />
                Near Shabnam Tailor<br />
                AmlaPatti, Motihari 845401
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-primary-foreground/60 flex items-center justify-center gap-2">
            Made with <Heart size={16} className="text-accent fill-current" /> by ZK Makeover
            <span className="mx-2">•</span>
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
