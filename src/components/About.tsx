const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-neutral-50 mb-12">About</h2>

        <div className="max-w-3xl bg-neutral-900 border border-neutral-800 rounded-lg p-8">
          <p className="text-neutral-300 leading-relaxed mb-6">
            I began my career in finance and health analytics, working with structured data to support operational and investment decisions. Building financial models and analysing performance metrics taught me the importance of clearly defined KPIs, traceable assumptions, and reliable reporting systems.
          </p>

          <p className="text-neutral-300 leading-relaxed">
            Today, I build analytics-driven products that combine structured data modelling, ETL workflows, and modern web interfaces. My background across finance, health data, and technical code review allows me to approach systems with both analytical rigor and engineering discipline — designing platforms that turn raw information into actionable insight.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
