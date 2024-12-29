export default function Skills() {
  const skills = [
    { name: 'Machine Learning', color: 'from-yellow-400 to-yellow-600' },
    { name: 'Deep Learning', color: 'from-blue-400 to-blue-600' },
    { name: 'Deep Reinforcement Learning', color: 'from-cyan-400 to-cyan-600' },
    { name: 'Algorithm Trading', color: 'from-teal-400 to-teal-600' },
    { name: 'Finance Data Analysis', color: 'from-purple-400 to-purple-600' }
  ];
  
  return (
    <section>
      <div className="mb-4">
        <h2 className="text-base font-normal text-blue-400">Tech Skill</h2>
        <hr className="border-t border-blue-500/50 mt-2" />
      </div>
      <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-8 shadow-xl">
        <div className="flex gap-4 flex-wrap">
          {skills.map((skill) => (
            <span 
              key={skill.name} 
              className={`px-4 py-2 rounded-full bg-gradient-to-r ${skill.color} text-white font-medium shadow-lg hover:scale-105 transition-transform cursor-pointer`}
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}