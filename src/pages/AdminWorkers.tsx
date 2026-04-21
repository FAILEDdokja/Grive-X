import React, { useState } from 'react';

export default function AdminWorkers({ onNavigate }: { onNavigate: (path: string) => void }) {
  const [activeTab, setActiveTab] = useState<'all'|'field'|'tech'>('all');
  const [showCategoryFilter, setShowCategoryFilter] = useState(false);
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [showStatusFilter, setShowStatusFilter] = useState(false);
  const [statusFilter, setStatusFilter] = useState('Online');
  const [isGridView, setIsGridView] = useState(true);
  
  const [currentPage, setCurrentPage] = useState(1);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <div className="bg-surface text-on-surface min-h-screen">
      {/* SideNavBar Component */}
      <nav className="fixed left-0 top-0 h-full w-64 bg-slate-100 dark:bg-slate-950 flex flex-col py-8 z-50 border-r border-outline-variant/20">
        <div className="px-6 mb-10 flex items-center gap-3">
          <div className="w-10 h-10 bg-primary-container rounded-xl flex items-center justify-center text-on-primary">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>account_balance</span>
          </div>
          <div>
            <h1 className="text-lg font-bold text-blue-900 dark:text-blue-100 leading-none">GrievX Admin</h1>
            <p className="text-[11px] font-bold uppercase tracking-widest text-slate-500">Digital Ledger OS</p>
          </div>
        </div>
        <div className="flex-1 px-4 space-y-2">
          <button onClick={() => onNavigate('admin')} className="flex w-full items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 hover:text-blue-600 transition-transform hover:scale-[0.98] text-left">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="font-sans uppercase tracking-widest text-[11px] font-bold">Overview</span>
          </button>
          <button onClick={() => onNavigate('admin')} className="flex w-full items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 hover:text-blue-600 transition-transform hover:scale-[0.98] text-left">
            <span className="material-symbols-outlined">list_alt</span>
            <span className="font-sans uppercase tracking-widest text-[11px] font-bold">Complaint Queue</span>
          </button>
          <button className="flex w-full items-center gap-3 px-4 py-3 text-blue-700 dark:text-blue-400 border-r-4 border-blue-700 dark:border-blue-400 bg-white dark:bg-slate-900 transition-transform hover:scale-[0.98] text-left shadow-sm">
            <span className="material-symbols-outlined">engineering</span>
            <span className="font-sans uppercase tracking-widest text-[11px] font-bold">Workers</span>
          </button>
          <button onClick={() => onNavigate('admin-reports')} className="flex w-full items-center gap-3 px-4 py-3 text-slate-500 dark:text-slate-400 hover:text-blue-600 transition-transform hover:scale-[0.98] text-left">
            <span className="material-symbols-outlined">analytics</span>
            <span className="font-sans uppercase tracking-widest text-[11px] font-bold">Reports</span>
          </button>
        </div>
        <div className="px-6 mt-auto">
          <button className="w-full py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-xl font-bold text-[11px] uppercase tracking-widest flex items-center justify-center gap-2 shadow-lg shadow-primary/20 hover:scale-[0.98] transition-transform">
            <span className="material-symbols-outlined text-sm">add</span>
            New Report
          </button>
        </div>
      </nav>

      {/* TopAppBar Component */}
      <header className="fixed top-0 right-0 left-64 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-md z-40 shadow-sm dark:shadow-none flex justify-between items-center px-8 py-3">
        <div className="flex items-center gap-8 flex-1">
          <div className="relative w-full max-w-md">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
            <input className="w-full bg-surface-container-low border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all font-sans placeholder:text-outline" placeholder="Search workers, IDs, or categories..." type="text"/>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <button className="p-2 text-slate-500 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 rounded-full transition-all duration-300 relative cursor-pointer">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-1.5 right-2 w-2 h-2 bg-error rounded-full border border-surface"></span>
          </button>
          <button className="p-2 text-slate-500 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 rounded-full transition-all duration-300">
            <span className="material-symbols-outlined">help_outline</span>
          </button>
          <div className="h-8 w-px bg-outline-variant/30 mx-2"></div>
          <div className="flex items-center gap-3 relative group">
            <img alt="Admin profile" className="w-10 h-10 rounded-full object-cover border-2 border-primary-fixed" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQBmXE3zVN_8ZLdWyxB207P7Lzg4JriTB1h9I7HWvuqmAvrIQntmP70rNiiomZ5yGmH1Kl61xEm5jHsvdKgjerAWwAfNngIHUbFgf6l77Mc_UQr49bINpEcMktyzXsid_UaH-eJnrE7nvcaBEXL7MrO7bNO9jFxo05PYIH1ENPCb7FVmVyKVkgOeutHpoIoER2ZNtccfUb_S5b7HQRt6Mg96BYCD2zQv8MrLrvLDFM6qeIs2tD9qYyEd0HgjUtQKNTu8DhOQZOVSpK"/>
            <div className="flex flex-col cursor-pointer">
              <span className="text-sm font-bold text-on-surface leading-none">James Wilson</span>
              <span className="text-[10px] uppercase tracking-tighter text-on-surface-variant font-bold">Super Admin</span>
            </div>
            {/* Minimal Dropdown for flow */}
            <div className="absolute right-0 top-full mt-1 w-48 bg-surface-container-lowest rounded-xl shadow-lg border border-outline-variant/20 py-2 hidden group-hover:block z-50">
                <button onClick={() => onNavigate('login')} className="w-full text-left px-4 py-2 text-sm text-error hover:bg-error-container/50 flex items-center gap-2 font-bold cursor-pointer transition-colors">
                  <span className="material-symbols-outlined text-sm">logout</span> Logout
                </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Canvas */}
      <main className="ml-64 pt-24 p-8 min-h-screen bg-surface">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <h2 className="text-3xl font-black text-on-surface tracking-tight mb-2">Workers Directory</h2>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest bg-primary-fixed text-on-primary-fixed px-3 py-1 rounded-full border border-primary/10">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_rgba(0,50,125,0.6)]"></span>
                142 Active Now
              </span>
              <span className="text-[11px] font-bold uppercase tracking-widest text-on-surface-variant ml-2">System Status: Optimal</span>
            </div>
          </div>
          <button 
            onClick={() => showToast('Opening New Worker Form...')}
            className="px-6 py-3.5 bg-gradient-to-r from-primary to-primary-container text-on-primary rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-transform cursor-pointer"
          >
            <span className="material-symbols-outlined text-lg">person_add</span>
            Add New Worker
          </button>
        </div>

        {/* Filter & Control Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 p-1.5 bg-surface-container-low rounded-2xl border border-outline-variant/10 shadow-sm">
          <div className="flex gap-2 p-1 bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/20 overflow-x-auto">
            <button 
              onClick={() => setActiveTab('all')}
              className={`px-6 py-2 rounded-lg text-sm font-bold transition-all whitespace-nowrap ${activeTab === 'all' ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:bg-surface-container-low'}`}
            >
              All Personnel
            </button>
            <button 
              onClick={() => setActiveTab('field')}
              className={`px-6 py-2 rounded-lg text-sm font-bold transition-all whitespace-nowrap ${activeTab === 'field' ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:bg-surface-container-low'}`}
            >
              On-Field
            </button>
            <button 
              onClick={() => setActiveTab('tech')}
              className={`px-6 py-2 rounded-lg text-sm font-bold transition-all whitespace-nowrap ${activeTab === 'tech' ? 'bg-primary text-on-primary' : 'text-on-surface-variant hover:bg-surface-container-low'}`}
            >
              Technical
            </button>
          </div>
          <div className="flex items-center gap-3 mr-2">
            <div className="relative">
              <button 
                onClick={() => {
                  setShowCategoryFilter(!showCategoryFilter);
                  setShowStatusFilter(false);
                }}
                className={`flex items-center gap-2 px-4 py-2 bg-surface-container-lowest rounded-xl border hover:border-outline-variant/40 transition-all cursor-pointer shadow-sm ${showCategoryFilter ? 'border-primary ring-1 ring-primary/20' : 'border-outline-variant/20'}`}
              >
                <span className="material-symbols-outlined text-lg text-on-surface-variant">filter_list</span>
                <span className="text-sm font-semibold text-on-surface-variant">Category: {categoryFilter}</span>
              </button>
              {showCategoryFilter && (
                <div className="absolute right-0 mt-2 w-48 bg-surface-container-lowest border border-outline-variant/20 shadow-lg rounded-xl overflow-hidden z-20 animate-in fade-in zoom-in duration-200">
                  {['All', 'Civil', 'Electrical', 'Plumbing', 'Sanitation'].map(cat => (
                    <button 
                      key={cat}
                      onClick={() => { setCategoryFilter(cat); setShowCategoryFilter(false); }}
                      className="w-full text-left px-4 py-2.5 text-sm font-bold hover:bg-surface-container transition-colors"
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <div className="relative">
              <button 
                onClick={() => {
                  setShowStatusFilter(!showStatusFilter);
                  setShowCategoryFilter(false);
                }}
                className={`flex items-center gap-2 px-4 py-2 bg-surface-container-lowest rounded-xl border hover:border-outline-variant/40 transition-all cursor-pointer shadow-sm ${showStatusFilter ? 'border-primary ring-1 ring-primary/20' : 'border-outline-variant/20'}`}
              >
                <span className="material-symbols-outlined text-lg text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>radio_button_checked</span>
                <span className="text-sm font-semibold text-on-surface">Status: {statusFilter}</span>
              </button>
              {showStatusFilter && (
                <div className="absolute right-0 mt-2 w-48 bg-surface-container-lowest border border-outline-variant/20 shadow-lg rounded-xl overflow-hidden z-20 animate-in fade-in zoom-in duration-200">
                  {['All', 'Online', 'Busy', 'Offline'].map(stat => (
                    <button 
                      key={stat}
                      onClick={() => { setStatusFilter(stat); setShowStatusFilter(false); }}
                      className="w-full text-left px-4 py-2.5 text-sm font-bold hover:bg-surface-container transition-colors"
                    >
                      {stat}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button 
              onClick={() => setIsGridView(!isGridView)}
              className={`p-2 rounded-xl transition-colors shadow-sm cursor-pointer ml-1 ${isGridView ? 'bg-surface-container-highest text-on-surface hover:bg-outline-variant/30' : 'bg-surface-container-low text-on-surface-variant hover:text-on-surface hover:bg-surface-variant'}`}
            >
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>{isGridView ? 'grid_view' : 'view_list'}</span>
            </button>
          </div>
        </div>

        {/* Workers Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          
          {/* Worker Card 1 */}
          <div className="bg-surface-container-lowest rounded-[2rem] p-6 shadow-sm border border-outline-variant/20 hover:shadow-md hover:-translate-y-1 transition-all group">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img alt="Marcus Chen" className="w-16 h-16 rounded-[1.25rem] object-cover ring-4 ring-tertiary-fixed border border-transparent shadow-sm" src="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&q=80&w=200" />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-tertiary rounded-full border-4 border-surface-container-lowest shadow-sm z-10"></div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-on-surface group-hover:text-primary transition-colors">Marcus Chen</h3>
                  <p className="text-[10px] font-black uppercase tracking-widest text-outline mt-0.5">ID: GX-2024-8812</p>
                </div>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed rounded-full shadow-sm">Online</span>
            </div>
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="px-3 py-1.5 bg-primary-fixed text-on-primary-fixed text-[11px] font-bold rounded-lg flex items-center gap-1.5 shadow-sm border border-primary-fixed-dim/20">
                <span className="material-symbols-outlined text-sm">electrical_services</span>
                ELECTRICAL
              </span>
              <span className="px-3 py-1.5 bg-surface-container text-on-surface-variant text-[11px] font-bold rounded-lg border border-outline-variant/10">Senior Expert</span>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-outline-variant/20">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-widest text-outline mb-1.5">Completion Rate</span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl font-black text-on-surface">98.4%</span>
                  <span className="text-[11px] font-bold text-tertiary flex items-center mb-1"><span className="material-symbols-outlined text-[10px] mr-0.5" style={{ fontVariationSettings: "'wght' 700" }}>arrow_upward</span> 2%</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-widest text-outline mb-1.5">Avg. Resolve Time</span>
                <span className="text-2xl font-black text-on-surface">42m</span>
              </div>
            </div>
          </div>

          {/* Worker Card 2 */}
          <div className="bg-surface-container-lowest rounded-[2rem] p-6 shadow-sm border border-outline-variant/20 hover:shadow-md hover:-translate-y-1 transition-all group">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img alt="Elena Rodriguez" className="w-16 h-16 rounded-[1.25rem] object-cover ring-4 ring-secondary-fixed border border-transparent shadow-sm" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200" />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-secondary rounded-full border-4 border-surface-container-lowest shadow-sm z-10"></div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-on-surface group-hover:text-primary transition-colors">Elena Rodriguez</h3>
                  <p className="text-[10px] font-black uppercase tracking-widest text-outline mt-0.5">ID: GX-2024-9901</p>
                </div>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-secondary-fixed text-on-secondary-fixed rounded-full shadow-sm">Busy</span>
            </div>
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="px-3 py-1.5 bg-primary-fixed text-on-primary-fixed text-[11px] font-bold rounded-lg flex items-center gap-1.5 shadow-sm border border-primary-fixed-dim/20">
                <span className="material-symbols-outlined text-sm">sanitizer</span>
                SANITATION
              </span>
              <span className="px-3 py-1.5 bg-surface-container text-on-surface-variant text-[11px] font-bold rounded-lg border border-outline-variant/10">Shift Lead</span>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-outline-variant/20">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-widest text-outline mb-1.5">Completion Rate</span>
                <div className="flex items-baseline gap-1.5">
                  <span className="text-2xl font-black text-on-surface">94.2%</span>
                  <span className="text-[11px] font-bold text-secondary flex items-center mb-1"><span className="material-symbols-outlined text-[10px] mr-0.5" style={{ fontVariationSettings: "'wght' 700" }}>arrow_downward</span> 1%</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-widest text-outline mb-1.5">Avg. Resolve Time</span>
                <span className="text-2xl font-black text-on-surface">1.2h</span>
              </div>
            </div>
          </div>

          {/* Worker Card 3 */}
          <div className="bg-surface-container-lowest rounded-[2rem] p-6 shadow-sm border border-outline-variant/20 hover:shadow-md hover:-translate-y-1 transition-all group opacity-75 hover:opacity-100">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="relative cursor-pointer grayscale group-hover:grayscale-0 transition-all">
                  <img alt="David Kim" className="w-16 h-16 rounded-[1.25rem] object-cover ring-4 ring-surface-variant border border-transparent shadow-sm" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-outline rounded-full border-4 border-surface-container-lowest shadow-sm z-10"></div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-on-surface group-hover:text-primary transition-colors">David Kim</h3>
                  <p className="text-[10px] font-black uppercase tracking-widest text-outline mt-0.5">ID: GX-2024-4423</p>
                </div>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-surface-variant text-on-surface-variant rounded-full shadow-sm">Offline</span>
            </div>
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="px-3 py-1.5 bg-primary-fixed text-on-primary-fixed text-[11px] font-bold rounded-lg flex items-center gap-1.5 shadow-sm border border-primary-fixed-dim/20">
                <span className="material-symbols-outlined text-sm">plumbing</span>
                PLUMBING
              </span>
              <span className="px-3 py-1.5 bg-surface-container text-on-surface-variant text-[11px] font-bold rounded-lg border border-outline-variant/10">Specialist</span>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-outline-variant/20">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-widest text-outline mb-1.5">Completion Rate</span>
                <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl font-black text-on-surface">99.1%</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-widest text-outline mb-1.5">Avg. Resolve Time</span>
                <span className="text-2xl font-black text-on-surface">38m</span>
              </div>
            </div>
          </div>

          {/* Worker Card 4 */}
          <div className="bg-surface-container-lowest rounded-[2rem] p-6 shadow-sm border border-outline-variant/20 hover:shadow-md hover:-translate-y-1 transition-all group">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img alt="Sarah Jenkins" className="w-16 h-16 rounded-[1.25rem] object-cover ring-4 ring-tertiary-fixed border border-transparent shadow-sm" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200" />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-tertiary rounded-full border-4 border-surface-container-lowest shadow-sm z-10"></div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-on-surface group-hover:text-primary transition-colors">Sarah Jenkins</h3>
                  <p className="text-[10px] font-black uppercase tracking-widest text-outline mt-0.5">ID: GX-2024-1109</p>
                </div>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed rounded-full shadow-sm">Online</span>
            </div>
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="px-3 py-1.5 bg-primary-fixed text-on-primary-fixed text-[11px] font-bold rounded-lg flex items-center gap-1.5 shadow-sm border border-primary-fixed-dim/20">
                <span className="material-symbols-outlined text-sm">engineering</span>
                CIVIL WORKS
              </span>
              <span className="px-3 py-1.5 bg-surface-container text-on-surface-variant text-[11px] font-bold rounded-lg border border-outline-variant/10">Director</span>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-outline-variant/20">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-widest text-outline mb-1.5">Completion Rate</span>
                 <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl font-black text-on-surface">96.8%</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-widest text-outline mb-1.5">Avg. Resolve Time</span>
                <span className="text-2xl font-black text-on-surface">2.4d</span>
              </div>
            </div>
          </div>

          {/* Worker Card 5 */}
          <div className="bg-surface-container-lowest rounded-[2rem] p-6 shadow-sm border border-outline-variant/20 hover:shadow-md hover:-translate-y-1 transition-all group">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img alt="Ahmed Khan" className="w-16 h-16 rounded-[1.25rem] object-cover ring-4 ring-tertiary-fixed border border-transparent shadow-sm" src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&q=80&w=200" />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-tertiary rounded-full border-4 border-surface-container-lowest shadow-sm z-10"></div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-on-surface group-hover:text-primary transition-colors">Ahmed Khan</h3>
                  <p className="text-[10px] font-black uppercase tracking-widest text-outline mt-0.5">ID: GX-2024-7721</p>
                </div>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-tertiary-fixed text-on-tertiary-fixed rounded-full shadow-sm">Online</span>
            </div>
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="px-3 py-1.5 bg-primary-fixed text-on-primary-fixed text-[11px] font-bold rounded-lg flex items-center gap-1.5 shadow-sm border border-primary-fixed-dim/20">
                <span className="material-symbols-outlined text-sm">bolt</span>
                GRID OPS
              </span>
              <span className="px-3 py-1.5 bg-surface-container text-on-surface-variant text-[11px] font-bold rounded-lg border border-outline-variant/10">Sr. Technician</span>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-outline-variant/20">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-widest text-outline mb-1.5">Completion Rate</span>
                <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl font-black text-on-surface">97.5%</span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-widest text-outline mb-1.5">Avg. Resolve Time</span>
                <span className="text-2xl font-black text-on-surface">55m</span>
              </div>
            </div>
          </div>

          {/* Empty State / Add Card */}
          <div className="rounded-[2rem] p-6 border-2 border-dashed border-outline-variant/40 flex flex-col items-center justify-center text-center group cursor-pointer hover:bg-surface-container-lowest hover:border-primary/40 hover:shadow-sm transition-all min-h-[300px]">
            <div className="w-16 h-16 rounded-2xl bg-surface-container flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary-container group-hover:text-on-primary transition-all shadow-sm">
              <span className="material-symbols-outlined text-primary group-hover:text-on-primary text-3xl">add</span>
            </div>
            <h4 className="text-on-surface font-bold text-lg mb-2">Onboard New Personnel</h4>
            <p className="text-on-surface-variant text-sm max-w-[200px] leading-relaxed">Scale your department capacity</p>
          </div>
        </div>

        {/* Pagination Ledger Style */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between px-4 py-8 border-t border-outline-variant/20 gap-6">
          <span className="text-[11px] font-bold uppercase tracking-widest text-on-surface-variant">Showing {((currentPage - 1) * 12) + 1}-{Math.min(currentPage * 12, 248)} of 248 Workers</span>
          <div className="flex gap-3">
            <button 
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="w-12 h-12 flex items-center justify-center rounded-xl bg-surface-container-high hover:bg-outline-variant/30 transition-colors shadow-sm cursor-pointer border border-outline-variant/10 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="material-symbols-outlined text-on-surface">chevron_left</span>
            </button>
            <div className="flex items-center gap-2 px-6 bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/20">
              <span className="text-base font-black text-primary">{currentPage.toString().padStart(2, '0')}</span>
              <span className="text-sm font-bold text-outline-variant mx-1">/</span>
              <span className="text-sm font-bold text-outline">21</span>
            </div>
            <button 
              onClick={() => setCurrentPage(Math.min(21, currentPage + 1))}
              disabled={currentPage === 21}
              className="w-12 h-12 flex items-center justify-center rounded-xl bg-primary hover:bg-primary/90 transition-colors text-on-primary shadow-md cursor-pointer border-none disabled:bg-surface-variant disabled:text-on-surface-variant disabled:cursor-not-allowed"
            >
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </main>

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-surface-container-highest text-on-surface px-6 py-3 rounded-xl shadow-lg border border-outline-variant/20 z-50 animate-in fade-in slide-in-from-bottom-5 duration-300 font-bold text-sm flex items-center gap-3">
          <span className="material-symbols-outlined text-primary">info</span>
          {toastMessage}
        </div>
      )}
    </div>
  );
}
