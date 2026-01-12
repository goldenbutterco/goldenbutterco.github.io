import { Instagram, Facebook } from 'lucide-react';

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#7A5C3E] px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Social Icons */}
        <div className="flex items-center gap-4">
          <a href="#" className="text-white hover:opacity-80 transition-opacity">
            <Instagram size={20} />
          </a>
          <a href="#" className="text-white hover:opacity-80 transition-opacity">
            <Facebook size={20} />
          </a>
        </div>

        {/* Center: Logo */}
        <h1 className="text-white text-2xl md:text-3xl font-['Playfair_Display'] absolute left-1/2 -translate-x-1/2">
          Golden Butter
        </h1>

        {/* Right: Contact Button */}
        <button className="border-2 border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-[#7A5C3E] transition-all">
          Contact us
        </button>
      </div>
    </header>
  );
}
