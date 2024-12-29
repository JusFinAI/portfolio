export default function About() {
  return (
    <section>
      <div className="mb-4">
        <h2 className="text-base font-normal text-blue-400">Introduce</h2>
        <hr className="border-t border-blue-500/50 mt-2" />
      </div>
      <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 shadow-xl">
        <p className="text-gray-300">간단한 자기소개 및 인사말</p>
      </div>
    </section>
  );
}