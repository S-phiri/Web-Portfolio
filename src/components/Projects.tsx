import { useState } from 'react';
import { X, Github } from 'lucide-react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { cn } from '@/lib/utils';

const FALLBACK_TOURNEYPRO_IMAGE = 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80';

interface System {
  id: string;
  title: string;
  description: string;
  image: string;
  imageFallback?: string;
  technologies: string[];
  details?: string;
  detailImages?: string[];
  githubUrl?: string;
}

const systemsData: System[] = [
  {
    id: '1',
    title: 'TourneyPro — Tournament Analytics System',
    description: 'Full-stack tournament management platform with group stage tables, knockout fixtures, automatic standings computation, and player stat leaderboards across goals, assists, and clean sheets.',
    image: '/tourneypro/hero.png',
    imageFallback: FALLBACK_TOURNEYPRO_IMAGE,
    technologies: ['Django', 'React', 'PostgreSQL', 'REST API', 'TailwindCSS'],
    details: 'Built a full-stack tournament management platform supporting group stage tables, knockout fixtures, and automatic standings computation across goals, assists, clean sheets, and top scorer leaderboards. Designed a relational PostgreSQL schema handling team profiles, squad management, W-D-L records, and per-player statistical aggregations with real-time leaderboard updates on result entry. REST API backend serving a React frontend with dark-themed dashboard, team badge rendering, and organiser tools for event creation, entry fees, and fixture scheduling.',
    detailImages: [
      '/tourneypro/hero.png',
      '/tourneypro/event-page.png',
      '/tourneypro/comp%20creation.png',
      '/tourneypro/registered-teams.png',
      '/tourneypro/team-profile.png',
      '/tourneypro/format.png',
      '/tourneypro/how.png',
    ],
    githubUrl: 'https://github.com/S-phiri/TourneyPro',
  },
  {
    id: '2',
    title: 'Quantify — Wealth Buddy',
    description: 'Full-stack personal finance app that lets users upload transaction, holding, and trade CSVs and explore a live dashboard with KPIs, spending breakdowns, cash flow, and portfolio views—built with Django and Next.js.',
    image: '/quantify/hero.png',
    imageFallback: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
    technologies: ['Django', 'Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'SQLite', 'pandas'],
    details: 'Quantify is a full-stack personal finance platform (user-facing brand: Wealth Buddy) that turns uploaded CSV data into an interactive analytics experience. I designed and built the end-to-end flow: users select a file type (transactions, holdings, or trades), upload a CSV, and confirm processing; the Django backend parses and stores data in a relational schema (Upload, Transaction, Holding, Trade) and exposes REST-style endpoints for the dashboard. The Next.js frontend delivers a polished, responsive UI with session-based auth, KPI cards, and Recharts visualisations for spending by category, monthly trends, cash flow, and portfolio/trading activity, plus light/dark theme support. The project demonstrates full-stack ownership—from API design and CSV ingestion with pandas to a modern React 19 + TypeScript front end with Radix UI and Tailwind CSS.',
    detailImages: [
      '/quantify/Screenshot%202026-03-17%20003923.png',
      '/quantify/Screenshot%202026-03-17%20004046.png',
      '/quantify/Screenshot%202026-03-17%20004110.png',
      '/quantify/Screenshot%202026-03-17%20004123.png',
      '/quantify/Screenshot%202026-03-17%20004136.png',
      '/quantify/Screenshot%202026-03-17%20004222.png',
      '/quantify/Screenshot%202026-03-17%20004236.png',
    ],
    githubUrl: 'https://github.com/S-phiri/quantify',
  },
  {
    id: '3',
    title: 'Bank Customer Analytics Dashboard',
    description: 'End-to-end analytics pipeline — SQL schema, 11 reusable views, and an interactive Streamlit dashboard tracking churn, balance trends, and branch performance.',
    image: '/bank-dashboard/Hero.png',
    imageFallback: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    technologies: ['Python', 'SQL', 'Streamlit', 'Plotly', 'SQLite'],
    details: 'Interactive bank customer analytics platform built with Streamlit and Plotly, connected to a relational database. Delivers KPIs (total customers, churn rate, average and total balance), churn analysis by branch and account type, balance analysis, customer segmentation, branch performance (churn vs average balance), and data tables with CSV export. Stack: Streamlit (UI) + Plotly (charts) + SQL (views). Roadmap includes DuckDB, synthetic data with Faker, dbt-style models, sidebar filters, anomaly detection, and optional natural-language query via Claude API.',
    detailImages: [
      '/bank-dashboard/Hero.png',
      '/bank-dashboard/Customer%20Churn%20Analysis.png',
      '/bank-dashboard/Branch%20Performance%20Overview.png',
      '/bank-dashboard/Customer%20segregation.png',
      '/bank-dashboard/Balance%20and%20financial%20analysis.png',
    ],
    githubUrl: 'https://github.com/S-phiri/Bank-analysis',
  },
  {
    id: '4',
    title: 'Athlete Performance Analytics System',
    description: 'Time-series training data transformed into derived metrics and performance insights.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80',
    technologies: ['Time Series', 'Metrics Layer', 'Aggregations'],
  },
];

const Projects = () => {
  const [selectedSystem, setSelectedSystem] = useState<System | null>(null);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-neutral-50 mb-4">Featured Systems</h2>
        <p className="text-neutral-400 mb-12 max-w-2xl">
          Analytics-driven systems built around data modelling, ETL workflows, and decision support.
        </p>

        {/* Systems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {systemsData.map((system) => (
            <div
              key={system.id}
              className="bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden hover:scale-[1.02] hover:border-neutral-700 transition-all duration-150 cursor-pointer group"
              onClick={() => setSelectedSystem(system)}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={system.image} 
                  alt={system.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => { if (system.imageFallback) e.currentTarget.src = system.imageFallback; }}
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-neutral-50 mb-3">{system.title}</h3>
                <p className="text-neutral-400 text-sm mb-4 line-clamp-2">{system.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {system.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="text-mono text-xs px-2 py-1 bg-neutral-800 text-neutral-400 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button className="text-sm font-medium text-neutral-300 hover:text-neutral-50 transition-colors duration-150">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* System Modal */}
      <DialogPrimitive.Root open={!!selectedSystem} onOpenChange={(open) => !open && setSelectedSystem(null)}>
        <DialogPrimitive.Portal>
          <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
          <DialogPrimitive.Content
            className={cn(
              "fixed left-[50%] top-[50%] z-50 grid w-full max-w-4xl translate-x-[-50%] translate-y-[-50%] gap-4 border bg-[#0a0a0a] border-neutral-800 text-neutral-50 p-8 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg max-h-[90vh] overflow-y-auto"
            )}
          >
            {selectedSystem && (
              <div>
                <button
                  onClick={() => setSelectedSystem(null)}
                  className="absolute right-4 top-4 p-2 rounded-md hover:bg-neutral-800 transition-colors z-10"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>

                <div className="aspect-video overflow-hidden rounded-lg mb-6">
                  <img 
                    src={selectedSystem.image} 
                    alt={selectedSystem.title}
                    className="w-full h-full object-cover"
                    onError={(e) => { if (selectedSystem.imageFallback) e.currentTarget.src = selectedSystem.imageFallback; }}
                  />
                </div>

                <h2 className="text-3xl font-bold text-neutral-50 mb-4">{selectedSystem.title}</h2>
                <p className="text-neutral-400 mb-6">{selectedSystem.details ?? selectedSystem.description}</p>

                {selectedSystem.detailImages && selectedSystem.detailImages.length > 0 && (
                  <div className="mb-8">
                    <h3 className="text-sm font-semibold text-neutral-50 mb-3">Screenshots</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {selectedSystem.detailImages.map((src, i) => (
                        <div key={i} className="aspect-video rounded-lg overflow-hidden border border-neutral-800">
                          <img
                            src={src}
                            alt={`${selectedSystem.title} screenshot ${i + 1}`}
                            className="w-full h-full object-cover"
                            onError={(e) => { if (selectedSystem.imageFallback) e.currentTarget.src = selectedSystem.imageFallback ?? ''; }}
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-neutral-50 mb-3">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedSystem.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="text-mono text-xs px-3 py-1 bg-neutral-800 text-neutral-300 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {selectedSystem.githubUrl && (
                  <a
                    href={selectedSystem.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-neutral-50 rounded-md text-sm font-medium transition-colors"
                  >
                    <Github size={18} />
                    View on GitHub
                  </a>
                )}
              </div>
            )}
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    </section>
  );
};

export default Projects;
