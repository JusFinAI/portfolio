import Image from 'next/image';

export default function Profile() {
  return (
    <section>
      <div className="mb-4">
        <h2 className="text-base font-normal text-blue-400">Profile : Title</h2>
        <hr className="border-t border-blue-500/50 mt-2" />
      </div>
      
      <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 shadow-xl">
        <div className="flex gap-8">
          <div className="relative w-32 h-32 rounded-full overflow-hidden">
            <Image
              src="/profile.PNG"
              alt="Profile picture"
              fill
              sizes="(max-width: 128px) 100vw, 128px"
              priority
              className="object-cover"
            />
          </div>
          
          <div className="flex-1 space-y-6">
            <div>
              <h3 className="font-medium mb-2 text-blue-400">_I AM</h3>
              <div className="space-y-1 text-gray-300">
                <p>이름: 최재성</p>
                <p>포지션: <span className="text-purple-400">JusFinAI CEO</span> / <span className="text-blue-400">FE Developer(jr)</span></p>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-2 text-blue-400">_Contact</h3>
              <div className="space-y-1 text-gray-300">
                <p>Email: piguet0325@gmail.com</p>
                <p>Phone: +082-1234-5678</p>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-2 text-blue-400">_Channel</h3>
              <div className="space-y-1 text-gray-300">
                <p>SNS: </p>
                <p>GitHub: </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 