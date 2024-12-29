import Profile from "@/components/Profile";
import About from "@/components/About";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen pt-20 bg-gray-900 text-gray-100">
      <div className="px-4 md:px-8 lg:px-16">
        <div className="max-w-screen-xl mx-auto w-full space-y-8">
          <Profile />
          <About />
          <Skills />
        </div>
      </div>
    </main>
  );
}