import { Instagram, Facebook } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#7A5C3E] px-3 sm:px-6 py-3 sm:py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Social Icons */}
        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href="https://www.instagram.com/golden.butter.co"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Golden Butter on Instagram"
            className="text-white hover:opacity-80 transition-opacity"
          >
            <Instagram className="w-5 h-5 sm:w-5 sm:h-5" />
          </a>
          <a
            href="https://www.facebook.com/share/17cSNt4vDR/?mibextid=wwXIfr"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Golden Butter on Facebook"
            className="text-white hover:opacity-80 transition-opacity"
          >
            <Facebook className="w-5 h-5 sm:w-5 sm:h-5" />
          </a>
        </div>

        {/* Center: Logo */}
        <h1 className="text-white text-lg xs:text-xl sm:text-2xl md:text-3xl font-['Playfair_Display'] absolute left-1/2 -translate-x-1/2 whitespace-nowrap" style={{ color: '#ffffff' }}>
          Golden Butter
        </h1>

        {/* Right: Contact Button */}
        <a
          href="#contact"
          className="border-2 border-white text-white text-xs sm:text-sm md:text-base px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 rounded-full hover:bg-white hover:text-[#7A5C3E] transition-all whitespace-nowrap font-medium tracking-wide"
          aria-label="Jump to the contact section"
        >
          Contact
        </a>
      </div>
    </header>
  );
}
