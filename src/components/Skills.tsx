const skillsData = {
  'Data & Analytics': [
    'SQL',
    'PostgreSQL',
    'Data Modelling',
    'ETL Pipelines',
    'KPI Design',
    'Time-Series Analysis',
    'pandas',
    'NumPy',
  ],
  'Product & Systems': [
    'React',
    'TypeScript',
    'REST APIs',
    'Architecture Design',
    'API Integration',
    'Performance Optimization',
  ],
  'Infrastructure & Tools': [
    'Docker',
    'GitHub Actions',
    'AWS (if applicable)',
    'Vercel',
    'Postman',
    'Notion',
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 bg-neutral-900/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-neutral-50 mb-12">Technical Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(skillsData).map(([category, skills]) => (
            <div key={category} className="bg-neutral-900 border border-neutral-800 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-neutral-50 mb-6">{category}</h3>
              
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-mono text-xs px-3 py-1.5 bg-neutral-800 text-neutral-300 rounded hover:bg-neutral-700 hover:text-neutral-50 transition-colors duration-150"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
