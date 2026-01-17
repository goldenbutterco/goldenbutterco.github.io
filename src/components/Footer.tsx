import { Instagram, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#7A5C3E] py-8">
      <div className="px-6">
        <div className="max-w-7xl mx-auto">
        {/* Mobile layout (Option 3) */}
        <div className="mobile-only items-start justify-between gap-4">
          <div className="text-white">
            <div className="text-xl font-['Playfair_Display']">Golden Butter</div>
            <div className="mt-2 text-sm text-white/80">
              <div>
                Email:{' '}
                <a
                  href="mailto:co.goldenbutter@gmail.com"
                  className="hover:opacity-80 transition-opacity"
                >
                  co.goldenbutter@gmail.com
                </a>
              </div>
              <div>
                Phone:{' '}
                <a
                  href="tel:0559322738"
                  className="hover:opacity-80 transition-opacity"
                >
                  055-9322738
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/golden.butter.co"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Golden Butter on Instagram"
              className="text-white hover:opacity-80 transition-opacity"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.facebook.com/share/17cSNt4vDR/?mibextid=wwXIfr"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Golden Butter on Facebook"
              className="text-white hover:opacity-80 transition-opacity"
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>

        {/* Desktop layout (Option 1) */}
        <div className="desktop-only w-full items-center justify-between gap-4">
          <div className="text-white text-xl font-['Playfair_Display']">
            Golden Butter
          </div>
          <div className="flex-1 text-center text-sm text-white/70">
            <div>
              Email:{' '}
              <a
                href="mailto:co.goldenbutter@gmail.com"
                className="hover:opacity-80 transition-opacity"
              >
                co.goldenbutter@gmail.com
              </a>
            </div>
            <div>
              Phone:{' '}
              <a
                href="tel:0559322738"
                className="hover:opacity-80 transition-opacity"
              >
                055-9322738
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4 justify-end">
            <a
              href="https://www.instagram.com/golden.butter.co"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Golden Butter on Instagram"
              className="text-white hover:opacity-80 transition-opacity"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.facebook.com/share/17cSNt4vDR/?mibextid=wwXIfr"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit Golden Butter on Facebook"
              className="text-white hover:opacity-80 transition-opacity"
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>
      </div>
      </div>

      <div className="px-6">
        <div className="footer-copyright max-w-7xl mx-auto mt-6 pt-6 border-t border-white/20 text-center text-white/70 text-sm">
          © 2026 Golden Butter. Handcrafted in Tel Aviv.
        </div>
      </div>
    </footer>
  );
}
