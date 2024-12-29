export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-bold text-xl">Logo</a>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-gray-600">Home</a>
            <a href="#about" className="hover:text-gray-600">About</a>
            <a href="#projects" className="hover:text-gray-600">Projects</a>
            <a href="#skills" className="hover:text-gray-600">Skills</a>
            <a href="#contact" className="hover:text-gray-600">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
}