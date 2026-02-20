const experienceData = [
  {
    id: '1',
    title: 'Junior Data Analyst',
    company: 'Wellness Odyssey (Health Sector)',
    bullets: [
      'Analysed operational and performance data to support decision-making',
      'Built structured reporting workflows and dashboards',
      'Cleaned and transformed raw datasets for accurate metric tracking',
      'Identified trends and inefficiencies through data analysis',
    ],
  },
  {
    id: '2',
    title: 'Junior Financial Analyst',
    company: 'Wizit',
    bullets: [
      'Built financial models to evaluate investment and performance scenarios',
      'Conducted ROI and valuation analysis',
      'Automated reporting processes for structured financial insights',
      'Supported strategic decision-making with data-backed analysis',
    ],
  },
  {
    id: '3',
    title: 'Data & Software Facilitator',
    company: 'HyperionDev',
    bullets: [
      'Conducted 100+ structured code reviews across Python, SQL, and full-stack systems',
      'Evaluated data modelling decisions and SQL query performance',
      'Provided technical reporting and architecture-level feedback',
      'Mentored students on analytics pipelines and scalable system design',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-neutral-50 mb-12">Experience & Impact</h2>

        <div className="space-y-8">
          {experienceData.map((entry) => (
            <div
              key={entry.id}
              className="bg-neutral-900 border border-neutral-800 rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold text-neutral-50 mb-1">
                {entry.title} — {entry.company}
              </h3>
              <ul className="mt-4 space-y-2">
                {entry.bullets.map((bullet, index) => (
                  <li key={index} className="text-neutral-400 flex items-start gap-3">
                    <span className="text-neutral-600 mt-1">▸</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
