import { Github, MessageSquare, Moon, Search, Twitter } from "lucide-react";

const Header = () => {
  return (
    <header className="relative z-10 px-6 py-4">
      <nav className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">CM</span>
          </div>
          <span className="text-white text-xl font-semibold">CheckMate.ai</span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-8">
          {["Docs", "Ecosystem", "Tutorial", "Sandbox", "Blog"].map(
            (item) => (
              <a
                key={item}
                href="#"
                className="text-gray-300 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                {item}
              </a>
            )
          )}
        </div>

        {/* Search and Icons */}
        <div className="flex items-center space-x-4">
          {/* Search Bar */}
          <div className="hidden sm:flex items-center bg-gray-800/50 backdrop-blur-sm border border-blue-500/30 rounded-lg px-3 py-2 min-w-[200px]">
            <Search className="w-4 h-4 text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search"
              className="bg-transparent text-white placeholder-gray-400 text-sm outline-none flex-1"
            />
          </div>

          {/* Action Icons */}
          <div className="flex items-center space-x-2">
            <button
              type="button"
              className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Moon className="w-5 h-5" />
            </button>
            <button
              type="button"
              className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Github className="w-5 h-5" />
            </button>
            <button
              type="button"
              className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <Twitter className="w-5 h-5" />
            </button>
            <button
              type="button"
              className="p-2 text-gray-400 hover:text-white transition-colors duration-200"
            >
              <MessageSquare className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
