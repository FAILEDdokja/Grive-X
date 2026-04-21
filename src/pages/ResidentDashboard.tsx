import React from 'react';

export default function ResidentDashboard({ onNavigate }: { onNavigate: (path: string) => void }) {
  return (
    <div className="bg-surface text-on-surface min-h-screen">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-md flex justify-between items-center px-6 py-3 shadow-sm dark:shadow-none">
        <div className="flex items-center gap-4">
          <span className="text-xl font-black tracking-tight text-blue-900 dark:text-blue-100">GrievX</span>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6 text-sm font-semibold">
            <button onClick={() => onNavigate('resident')} className="text-blue-700 dark:text-blue-400 font-bold">Dashboard</button>
            <button onClick={() => onNavigate('complaints')} className="text-slate-500 dark:text-slate-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors px-3 py-1.5 rounded-lg">Complaints</button>
            <button onClick={() => onNavigate('tracker')} className="text-slate-500 dark:text-slate-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors px-3 py-1.5 rounded-lg">Tracking</button>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors active:scale-95 duration-200">
              <span className="material-symbols-outlined text-slate-600">notifications</span>
            </button>
            <button onClick={() => onNavigate('login')} className="p-2 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-colors active:scale-95 duration-200" title="Logout">
              <span className="material-symbols-outlined text-slate-600">logout</span>
            </button>
          </div>
        </div>
      </header>
      
      {/* SideNavBar */}
      <aside className="h-screen w-64 fixed left-0 top-0 hidden md:flex flex-col bg-slate-100 dark:bg-slate-800/50 pt-20">
        <div className="px-6 mb-8 mt-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-primary-fixed flex items-center justify-center">
              <img className="w-full h-full rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuARaOU8OGnBhKf8kdDMDgPsaCrsDLl62TYzo0p6AA-32DQL-XRTpespSac8tgXNjKV6BEZCiNQ3GZskTNZRecS4yPWX4t8r65QYnFaxJPxuQAK5vLY-64z2RV1pjbYfrDsKKC0-yoJyYQNwhMe73UOrEyZoliVvQbGCTaOZNtps6ijfquccUe7eN53VHbLMZt1xbuM71ULcX3AVV8qIVo_x8B96jwALGnvPbH37zBe8VPcDUVcZDJ_OTcQbEHtTth03az8B9DohV281" alt="Profile" />
            </div>
            <div>
              <p className="text-sm font-bold text-blue-900 dark:text-blue-50">Resident Portal</p>
              <p className="text-xs text-slate-500">Sector 42 Ledger</p>
            </div>
          </div>
          <button onClick={() => onNavigate('complaints')} className="w-full bg-secondary-container text-on-secondary-container py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-sm active:scale-95 transition-all cursor-pointer">
            <span className="material-symbols-outlined">add</span>
            Submit Grievance
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-2">
          <button onClick={() => onNavigate('resident')} className="flex items-center gap-3 px-4 py-3 text-blue-700 dark:text-blue-300 bg-white dark:bg-slate-800 shadow-sm rounded-xl transition-all ease-in-out font-sans text-sm font-bold border border-outline-variant/10 text-left">
            <span className="material-symbols-outlined">dashboard</span> Dashboard
          </button>
          <button onClick={() => onNavigate('complaints')} className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-all ease-in-out font-sans text-sm font-medium text-left w-full">
            <span className="material-symbols-outlined">assignment_late</span> Complaints
          </button>
          <button onClick={() => onNavigate('tracker')} className="flex items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-all ease-in-out font-sans text-sm font-medium w-full text-left">
            <span className="material-symbols-outlined">timeline</span> Tracking
          </button>
        </nav>
      </aside>

      <main className="md:ml-64 pt-24 pb-20 px-6 md:px-10 max-w-7xl mx-auto">
        <header className="mb-10">
          <h1 className="text-4xl font-extrabold tracking-tight text-on-surface mb-2">Citizen Ledger</h1>
          <p className="text-on-surface-variant max-w-2xl">Monitor your active submissions and track community resolutions in real-time. Transparency as a service for Sector 42.</p>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="md:col-span-1 bg-surface-container-lowest p-6 rounded-xl border-b-2 border-primary-fixed">
            <div className="flex items-center justify-between mb-4">
              <span className="material-symbols-outlined text-primary-container">pending_actions</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">Real-time Status</span>
            </div>
            <div className="text-3xl font-black text-on-surface mb-1">Active (2)</div>
            <p className="text-sm text-on-surface-variant">Awaiting Verification</p>
          </div>
          
          <div className="md:col-span-1 bg-surface-container-lowest p-6 rounded-xl border-b-2 border-tertiary-fixed">
            <div className="flex items-center justify-between mb-4">
              <span className="material-symbols-outlined text-tertiary-container">verified</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">Archived</span>
            </div>
            <div className="text-3xl font-black text-on-surface mb-1">Resolved (5)</div>
            <p className="text-sm text-on-surface-variant">Historical Success</p>
          </div>

          <div className="md:col-span-1 bg-surface-container-lowest p-6 rounded-xl border-b-2 border-error-container">
            <div className="flex items-center justify-between mb-4">
              <span className="material-symbols-outlined text-error">priority_high</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">Compliance</span>
            </div>
            <div className="text-3xl font-black text-on-surface mb-1">SLA Breached (0)</div>
            <p className="text-sm text-on-surface-variant">All targets met</p>
          </div>

          <div onClick={() => onNavigate('complaints')} className="md:col-span-1 bg-primary-container p-6 rounded-xl flex flex-col justify-between items-start text-on-primary cursor-pointer hover:bg-primary transition-colors">
            <span className="material-symbols-outlined text-4xl">edit_note</span>
            <div>
              <p className="text-xl font-bold leading-tight mb-2">Raise New Complaint</p>
              <p className="text-xs text-on-primary-container">60-second submission process</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">My Grievances</h2>
              <button className="text-sm font-semibold text-primary-fixed-variant underline decoration-2 decoration-primary-fixed/30">View All History</button>
            </div>
            
            <div className="bg-surface-container-lowest p-6 rounded-xl flex flex-col md:flex-row gap-6 hover:translate-y-[-2px] transition-transform cursor-pointer" onClick={() => onNavigate('tracker')}>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-primary-fixed text-on-primary-fixed rounded-full text-[10px] font-bold uppercase tracking-wider">In Progress</span>
                  <span className="text-xs text-on-surface-variant">#GRV-2024-8812</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Street Light Outage - Main Boulevard</h3>
                <p className="text-on-surface-variant text-sm mb-4">The third street light post near the public park has been flickering and eventually went dark yesterday.</p>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-on-surface-variant">event</span>
                    <span className="text-xs font-medium text-on-surface-variant">Deadline: Oct 24</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-on-surface-variant">person</span>
                    <span className="text-xs font-medium text-on-surface-variant">Assignee: Elec-Dept</span>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-32 h-24 rounded-lg bg-surface-container-low overflow-hidden">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKMruudZP7UL1QpzqNrzVdKUWrJU4mhrE-AgiQZQKnHfft6ku8kcIpD26o0XhsRmpedaGK8rj2nEkJ5TdNhv6UTRjU7nObxNc1ai0Dn8_FffYu7Tquib--TeuGcDAI8J_F4QCMRSIwVSDqKoCXGsoQokRUjTZjM43RnlfxEqLTNbBuSYyHG_T2R51MeXsxy5GhbFMPPGH1a2hb-To5thQtEdR3649YZHMN3AGyLwX0bFFbnCRUuPKHgEOeZYY8RZZlcHvxStYEPj1R" alt="Street Light" />
              </div>
            </div>

            <div className="bg-surface-container-low p-6 rounded-xl flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed rounded-full text-[10px] font-bold uppercase tracking-wider">Verified</span>
                  <span className="text-xs text-on-surface-variant">#GRV-2024-7901</span>
                </div>
                <h3 className="text-lg font-bold mb-2">Broken Water Pipeline - Block B</h3>
                <p className="text-on-surface-variant text-sm mb-4">Underground seepage reported near the community center parking lot.</p>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm text-on-surface-variant">event</span>
                    <span className="text-xs font-medium text-on-surface-variant">Deadline: Tomorrow</span>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-32 h-24 rounded-lg bg-surface-container-low flex items-center justify-center border-2 border-dashed border-outline-variant/30">
                <span className="material-symbols-outlined text-outline-variant">image</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-surface-container-low p-6 rounded-xl">
              <h2 className="text-lg font-bold mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-tertiary">history_edu</span> Transparency Feed
              </h2>
              <div className="space-y-8 relative">
                <div className="absolute left-4 top-2 bottom-2 w-[2px] bg-outline-variant/20"></div>
                <div className="relative pl-10">
                  <div className="absolute left-3 top-2 w-2 h-2 rounded-full bg-tertiary border-4 border-surface-container-low box-content"></div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-on-tertiary-fixed-variant mb-1">Resolved Yesterday</p>
                  <h4 className="text-sm font-bold mb-1">Pothole Repair - Ring Road</h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed">Closed within 48 hours. Verified by Sector 42 Admin.</p>
                </div>
                <div className="relative pl-10">
                  <div className="absolute left-3 top-2 w-2 h-2 rounded-full bg-primary border-4 border-surface-container-low box-content"></div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-on-primary-fixed-variant mb-1">Status Update</p>
                  <h4 className="text-sm font-bold mb-1">Waste Collection Schedule</h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed">Service window extended for weekend cycles.</p>
                </div>
                <div className="relative pl-10">
                  <div className="absolute left-3 top-2 w-2 h-2 rounded-full bg-tertiary border-4 border-surface-container-low box-content"></div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-on-tertiary-fixed-variant mb-1">Resolved Oct 20</p>
                  <h4 className="text-sm font-bold mb-1">Elevator Maintenance - Tower A</h4>
                  <p className="text-xs text-on-surface-variant leading-relaxed">Full inspection completed. Safety certificate issued.</p>
                </div>
              </div>
            </div>

            <div className="bg-secondary-fixed p-6 rounded-xl text-on-secondary-fixed">
              <h4 className="font-bold mb-2">System Satisfaction</h4>
              <p className="text-xs mb-4">How effective was the response time for your last grievance?</p>
              <div className="flex gap-2">
                <button className="flex-1 py-2 bg-on-secondary-fixed text-white rounded-lg text-xs font-bold hover:opacity-90">Fast</button>
                <button className="flex-1 py-2 bg-white/20 rounded-lg text-xs font-bold hover:bg-white/30">Average</button>
                <button className="flex-1 py-2 bg-white/20 rounded-lg text-xs font-bold hover:bg-white/30">Slow</button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
