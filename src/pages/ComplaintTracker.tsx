import React from 'react';

export default function ComplaintTracker({ onNavigate }: { onNavigate: (path: string) => void }) {
  return (
    <div className="bg-surface text-on-surface min-h-screen">
      <header className="sticky top-0 w-full z-50 bg-slate-50/90 dark:bg-slate-900/90 backdrop-blur-md flex items-center px-4 py-4 md:px-8 shadow-sm">
        <button onClick={() => onNavigate('resident')} className="p-2 mr-4 rounded-full hover:bg-surface-variant transition-colors group cursor-pointer">
          <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">arrow_back</span>
        </button>
        <div>
          <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest hidden md:block">Grievance Record</p>
          <h1 className="text-xl font-black text-on-surface">#GRV-2024-8812</h1>
        </div>
        <div className="ml-auto flex items-center gap-3">
            <span className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 bg-surface-container-high rounded text-xs font-bold uppercase tracking-wider text-on-surface">
                <span className="material-symbols-outlined text-[14px] text-primary">public</span> Public Ledger
            </span>
          <button className="p-2 rounded-full hover:bg-surface-variant transition-colors">
            <span className="material-symbols-outlined text-on-surface-variant">share</span>
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8 md:py-12">
        <div className="bg-surface-container-lowest rounded-2xl border border-outline-variant/30 overflow-hidden shadow-sm">
          {/* Header Section */}
          <div className="p-6 md:p-8 border-b border-outline-variant/20">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                    <h2 className="text-2xl md:text-3xl font-black text-on-surface mb-2">Street Light Outage</h2>
                    <p className="text-on-surface-variant text-sm font-medium flex items-center gap-2">
                        <span className="material-symbols-outlined text-[16px]">location_on</span> Main Boulevard, near Park Entry
                    </p>
                </div>
                <div className="bg-primary-fixed text-on-primary-fixed px-4 py-2 rounded-lg">
                    <p className="text-[10px] font-bold uppercase tracking-wider opacity-80 mb-0.5">Current Status</p>
                    <p className="text-sm font-black flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span> In Progress
                    </p>
                </div>
            </div>
            <p className="text-on-surface mt-6 leading-relaxed max-w-2xl bg-surface p-4 rounded-xl border border-outline-variant/10 text-sm">
                "The third street light post near the public park has been flickering for 3 days and eventually went dark yesterday. Given it's a primary walking path, it's causing safety concerns for evening walkers."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-outline-variant/20 bg-surface-container-low">
              <div className="p-6 flex flex-col items-center text-center">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">Filed By</p>
                  <p className="text-sm font-bold bg-primary/10 text-primary px-3 py-1 rounded-full w-max mt-1 mb-2">Verified Resident</p>
                  <p className="text-xs text-on-surface-variant">Block A, Flat 402</p>
              </div>
              <div className="p-6 flex flex-col items-center text-center">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">SLA Target</p>
                  <p className="text-lg font-black text-on-surface mt-1">48 Hours</p>
                  <p className="text-xs text-secondary font-bold mt-1">12h Remaining</p>
              </div>
              <div className="p-6 flex flex-col items-center text-center">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">Assigned Department</p>
                  <div className="flex items-center gap-2 mt-2">
                      <span className="material-symbols-outlined text-tertiary bg-tertiary/10 p-1.5 rounded-full text-sm">bolt</span>
                      <p className="text-sm font-bold text-on-surface">Electrical Maintenance</p>
                  </div>
              </div>
          </div>

          <div className="p-6 md:p-8">
              <h3 className="text-lg font-bold mb-8 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">route</span> Immutable Audit Trail
              </h3>
              
              <div className="space-y-0 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-outline-variant/40 before:to-transparent">
                  
                  {/* Step 3: Current */}
                  <div className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group md:mb-12 mb-8">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-surface-container-lowest bg-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 relative">
                          <span className="material-symbols-outlined text-on-primary text-[16px]">engineering</span>
                          <span className="absolute -right-2 -top-2 w-3 h-3 bg-secondary rounded-full animate-ping"></span>
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-surface p-5 text-sm rounded-2xl border-2 border-primary/20 shadow-md">
                          <div className="flex items-center justify-between mb-2">
                              <span className="font-bold text-primary">Technician Dispatched</span>
                              <span className="text-[10px] font-bold text-on-surface-variant uppercase bg-surface-container p-1 rounded">Today, 2:30 PM</span>
                          </div>
                          <p className="text-on-surface-variant text-xs leading-relaxed">
                              Ramesh (ID: TECH-092) has collected the replacement bulbs and is en route to the location.
                          </p>
                      </div>
                  </div>

                  {/* Step 2 */}
                  <div className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group md:mb-12 mb-8">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-surface-container-lowest bg-tertiary-fixed shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                          <span className="material-symbols-outlined text-on-tertiary-fixed text-[16px]">check_circle</span>
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-surface-container-lowest p-5 text-sm rounded-2xl border border-outline-variant/30 opacity-70 hover:opacity-100 transition-opacity">
                          <div className="flex items-center justify-between mb-2">
                              <span className="font-bold text-on-surface">Verified & Assigned</span>
                              <span className="text-[10px] font-bold text-on-surface-variant uppercase">Oct 22, 9:15 AM</span>
                          </div>
                          <p className="text-on-surface-variant text-xs leading-relaxed">
                              Issue authenticated by automated system. Routed to Electrical Dept. SLA timer started.
                          </p>
                      </div>
                  </div>

                  {/* Step 1 */}
                  <div className="relative flex items-start justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-surface-container-lowest bg-outline-variant shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                          <span className="material-symbols-outlined text-surface text-[16px]">how_to_reg</span>
                      </div>
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-surface-container-lowest p-5 text-sm rounded-2xl border border-outline-variant/20 opacity-50">
                          <div className="flex items-center justify-between mb-2">
                              <span className="font-bold text-on-surface">Grievance Logged</span>
                              <span className="text-[10px] font-bold text-on-surface-variant uppercase">Oct 22, 8:45 AM</span>
                          </div>
                          <p className="text-on-surface-variant text-xs leading-relaxed">
                              Initial submission recorded on the ledger. Digital signature verified.
                          </p>
                      </div>
                  </div>

              </div>
          </div>
        </div>
      </main>
    </div>
  );
}
