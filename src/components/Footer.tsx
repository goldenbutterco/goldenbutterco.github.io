import { Instagram, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#7A5C3E] px-6 py-8">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left: Logo */}
        <div className="text-white text-xl font-['Playfair_Display']">
          Golden Butter
        </div>

        {/* Right: Social Icons */}
        <div className="flex items-center gap-4">
          <a href="#" className="text-white hover:opacity-80 transition-opacity">
            <Instagram size={20} />
          </a>
          <a href="#" className="text-white hover:opacity-80 transition-opacity">
            <Facebook size={20} />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-6 pt-6 border-t border-white/20 text-center text-white/70 text-sm">
        © 2026 Golden Butter. Handcrafted in Tel Aviv.
      </div>
    </footer>
  );
}
