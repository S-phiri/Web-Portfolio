import { useState } from 'react';
import { X } from 'lucide-react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { cn } from '@/lib/utils';

interface System {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
}

const systemsData: System[] = [
  {
    id: '1',
    title: 'Competition Analytics Infrastructure',
    description: 'Relational data system for tournament management, standings computation, and KPI generation.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    technologies: ['SQL', 'Data Modelling', 'Aggregations', 'REST APIs'],
  },
  {
    id: '2',
    title: 'End-to-End Data Pipeline',
    description: 'Raw ingestion → transformation → Postgres schema → analytics tables → dashboard-ready outputs.',
    image: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=800&q=80',
    technologies: ['Python', 'ETL', 'PostgreSQL', 'BI'],
  },
  {
    id: '3',
    title: 'Short-Term Rental ROI Engine',
    description: 'Structured financial analytics tool for evaluating investment performance using scenario modelling and KPI analysis.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    technologies: ['Finance', 'KPI Design', 'SQL', 'Dashboards'],
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
                  />
                </div>

                <h2 className="text-3xl font-bold text-neutral-50 mb-4">{selectedSystem.title}</h2>
                <p className="text-neutral-400 mb-8">{selectedSystem.description}</p>

                <div>
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
              </div>
            )}
          </DialogPrimitive.Content>
        </DialogPrimitive.Portal>
      </DialogPrimitive.Root>
    </section>
  );
};

export default Projects;
