import React, { useState } from 'react';

export default function AdminQueue({ onNavigate }: { onNavigate: (path: string) => void }) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showExport, setShowExport] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [isExporting, setIsExporting] = useState<'csv' | 'pdf' | null>(null);
  const [isBulkAssigning, setIsBulkAssigning] = useState(false);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState('25');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [activeAssignRow, setActiveAssignRow] = useState<number | null>(null);
  const [row2Worker, setRow2Worker] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <div className="bg-background text-on-surface min-h-screen">
      {/* SideNavBar Component */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-slate-50 dark:bg-slate-950 flex flex-col p-4 border-r border-slate-200/50 dark:border-slate-800/50 z-50">
        <div className="mb-8 px-2 mt-4">
          <h1 className="text-2xl font-black text-blue-900 dark:text-blue-100 tracking-tight">GrievX Admin</h1>
          <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">System Controller</p>
        </div>
        <nav className="flex-1 space-y-1">
          <button onClick={() => onNavigate('admin')} className="flex w-full items-center gap-3 px-3 py-2.5 text-slate-600 hover:bg-slate-200/50 transition-all duration-200 rounded-lg group text-left">
            <span className="material-symbols-outlined text-[22px]">dashboard</span>
            <span className="font-semibold">Overview</span>
          </button>
          
          <button className="flex w-full items-center gap-3 px-3 py-2.5 text-blue-700 font-semibold bg-white rounded-lg shadow-sm transition-all duration-200 text-left border border-outline-variant/10">
            <span className="material-symbols-outlined text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>list_alt</span>
            <span className="font-semibold">Complaint Queue</span>
          </button>

          <button onClick={() => onNavigate('admin-workers')} className="flex w-full items-center gap-3 px-3 py-2.5 text-slate-600 hover:bg-slate-200/50 transition-all duration-200 rounded-lg group text-left">
            <span className="material-symbols-outlined text-[22px]">group</span>
            <span className="font-semibold">Workers</span>
          </button>
          
          <button onClick={() => onNavigate('admin-reports')} className="flex w-full items-center gap-3 px-3 py-2.5 text-slate-600 hover:bg-slate-200/50 transition-all duration-200 rounded-lg text-left">
            <span className="material-symbols-outlined text-[22px]">analytics</span>
            <span className="font-semibold">Reports</span>
          </button>
        </nav>
        
        <div className="mt-auto pt-6 border-t border-slate-200/50">
          <button className="w-full py-3 bg-gradient-to-r from-primary to-primary-container text-on-primary font-bold rounded-xl shadow-md flex items-center justify-center gap-2 hover:opacity-90 active:scale-[0.98] transition-all">
            <span className="material-symbols-outlined text-lg">add_circle</span>
            New Report
          </button>
          
          <div className="flex items-center gap-3 mt-6 px-2 cursor-pointer group" onClick={() => onNavigate('login')}>
            <img alt="Admin User Avatar" className="w-10 h-10 rounded-full bg-slate-200 object-cover border border-outline-variant/20" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?auto=format&fit=crop&q=80&w=200" />
            <div className="overflow-hidden">
              <p className="text-sm font-bold truncate group-hover:text-error transition-colors">Admin User</p>
              <p className="text-[10px] text-slate-500 truncate group-hover:text-error/70 transition-colors">Super Admin Access</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="ml-64 min-h-screen">
        {/* TopAppBar */}
        <header className="fixed top-0 right-0 left-64 bg-white/80 backdrop-blur-md z-40 flex justify-between items-center px-8 py-4 shadow-sm shadow-blue-900/5 border-b border-outline-variant/10">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative">
              <button 
                onClick={() => {
                  setShowFilter(!showFilter);
                  setShowNotifications(false);
                  setShowProfile(false);
                  setShowExport(false);
                }}
                className={`flex items-center gap-2 px-5 py-2.5 text-xs font-bold rounded-full transition-colors uppercase tracking-wider ml-2 ${showFilter ? 'bg-primary text-white' : 'bg-surface-container-low hover:bg-surface-container text-slate-700'}`}
              >
                <span className="material-symbols-outlined text-sm">filter_list</span>
                Advanced Filters
              </button>
              {showFilter && (
                <div className="absolute left-2 mt-2 w-56 bg-surface-container-lowest border border-outline-variant/20 shadow-lg rounded-xl overflow-hidden z-20 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="p-2 bg-surface-container-low border-b border-outline-variant/10">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant px-2">Quick Filters</p>
                  </div>
                  <button className="w-full text-left px-4 py-2.5 text-sm font-medium text-on-surface hover:bg-surface-container transition-colors flex items-center justify-between group">
                    SLA Breached <span className="material-symbols-outlined text-[16px] text-error opacity-0 group-hover:opacity-100 transition-opacity">check</span>
                  </button>
                  <button className="w-full text-left px-4 py-2.5 text-sm font-medium text-on-surface hover:bg-surface-container transition-colors flex items-center justify-between group">
                    High Priority <span className="material-symbols-outlined text-[16px] text-tertiary opacity-0 group-hover:opacity-100 transition-opacity">check</span>
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center gap-6 mr-4 relative">
            <div className="relative">
              <button 
                onClick={() => {
                  setShowNotifications(!showNotifications);
                  setShowProfile(false);
                  setShowFilter(false);
                  setShowExport(false);
                }}
                className={`relative p-2 rounded-full transition-colors cursor-pointer top-1 ${showNotifications ? 'bg-blue-50 text-blue-700' : 'text-slate-600 hover:bg-blue-50'}`}
              >
                <span className="material-symbols-outlined">notifications</span>
                <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-secondary-container rounded-full border-2 border-white"></span>
              </button>
              {showNotifications && (
                <div className="absolute right-0 mt-3 w-80 bg-surface-container-lowest border border-outline-variant/20 shadow-xl rounded-xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="px-4 py-2 border-b border-outline-variant/10 flex justify-between items-center bg-surface-container-low">
                    <span className="font-bold text-sm text-on-surface">Queue Alerts</span>
                    <span className="text-[10px] bg-primary text-white px-2 py-0.5 rounded-full font-bold">New</span>
                  </div>
                  <div className="p-4 hover:bg-surface-container-low cursor-pointer transition-colors border-b border-outline-variant/10">
                    <p className="text-xs font-bold text-on-surface mb-0.5">Bulk Assign Completed</p>
                    <p className="text-[10px] text-on-surface-variant">12 items were successfully assigned to TechOps.</p>
                  </div>
                </div>
              )}
            </div>
            <div className="h-6 w-[1px] bg-slate-200"></div>
            <div className="relative">
              <div 
                className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
                onClick={() => {
                  setShowProfile(!showProfile);
                  setShowNotifications(false);
                  setShowFilter(false);
                  setShowExport(false);
                }}
              >
                <span className="text-sm font-bold text-blue-900">GrievX</span>
                <span className="material-symbols-outlined text-blue-700 text-3xl">account_circle</span>
              </div>
              {showProfile && (
                <div className="absolute right-0 mt-3 w-48 bg-surface-container-lowest border border-outline-variant/20 shadow-xl rounded-xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="px-4 py-3 border-b border-outline-variant/10 bg-surface-container-low">
                    <p className="font-bold text-sm text-on-surface">Admin User</p>
                    <p className="text-[10px] text-on-surface-variant">System Controller</p>
                  </div>
                  <button onClick={() => onNavigate('login')} className="w-full text-left px-4 py-2.5 text-sm font-bold text-error hover:bg-error-container transition-colors flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px]">logout</span> Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Content Canvas */}
        <div className="pt-28 px-10 pb-12 max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-black text-on-surface tracking-tight">Complaint Queue</h2>
              <p className="text-on-surface-variant mt-2 text-sm font-medium">Manage and track all community grievances from a single digital ledger.</p>
            </div>
            <div className="flex gap-4">
              <div className="relative">
                <button 
                  onClick={() => {
                    setShowExport(!showExport);
                    setShowFilter(false);
                    setShowNotifications(false);
                    setShowProfile(false);
                  }}
                  className={`flex items-center gap-2 px-6 py-3 shadow-sm border rounded-xl text-sm font-semibold transition-colors active:scale-95 ${showExport ? 'bg-slate-100 border-slate-300 text-slate-800' : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'}`}
                >
                  <span className="material-symbols-outlined text-lg">ios_share</span>
                  Export Ledger
                </button>
                {showExport && (
                  <div className="absolute right-0 mt-2 w-48 bg-surface-container-lowest border border-outline-variant/20 shadow-lg rounded-xl overflow-hidden z-20 animate-in fade-in slide-in-from-top-2 duration-200">
                    <button 
                      onClick={() => {
                        setIsExporting('csv');
                        setTimeout(() => { setIsExporting(null); setShowExport(false); }, 1500);
                      }}
                      className="w-full text-left px-4 py-3 text-xs font-bold text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors flex items-center gap-3"
                    >
                      {isExporting === 'csv' ? (
                        <span className="w-4 h-4 rounded-full border-2 border-primary border-t-transparent animate-spin"></span>
                      ) : (
                        <span className="material-symbols-outlined text-[18px]">description</span>
                      )}
                      {isExporting === 'csv' ? 'Exporting CSV...' : 'Export as CSV'}
                    </button>
                    <button 
                      onClick={() => {
                        setIsExporting('pdf');
                        setTimeout(() => { setIsExporting(null); setShowExport(false); }, 1500);
                      }}
                      className="w-full text-left px-4 py-3 text-xs font-bold text-on-surface-variant hover:bg-surface-container hover:text-primary transition-colors flex items-center gap-3 border-t border-outline-variant/10"
                    >
                      {isExporting === 'pdf' ? (
                        <span className="w-4 h-4 rounded-full border-2 border-primary border-t-transparent animate-spin"></span>
                      ) : (
                        <span className="material-symbols-outlined text-[18px]">picture_as_pdf</span>
                      )}
                      {isExporting === 'pdf' ? 'Preparing PDF...' : 'Export as PDF'}
                    </button>
                  </div>
                )}
              </div>
              <button 
                onClick={() => {
                  setIsBulkAssigning(true);
                  setTimeout(() => setIsBulkAssigning(false), 800);
                }}
                className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl text-sm font-bold shadow-md hover:bg-primary/95 transition-all hover:shadow-lg active:scale-95"
              >
                {isBulkAssigning ? (
                  <span className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
                ) : (
                  <span className="material-symbols-outlined text-lg">assignment_ind</span>
                )}
                {isBulkAssigning ? 'Assigning...' : 'Bulk Assign'}
              </button>
            </div>
          </div>

          {/* Stats Bar (Bento Minimal) */}
          <div className="grid grid-cols-4 gap-6 mb-10">
            <div className="bg-surface-container-lowest p-6 rounded-2xl flex flex-col gap-1 border border-outline-variant/20 shadow-sm border-l-[6px] border-l-primary-fixed hover:-translate-y-1 transition-transform">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Total Active</span>
              <span className="text-3xl font-black text-primary">1,284</span>
            </div>
            <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/20 shadow-sm border-l-[6px] border-l-error flex flex-col gap-1 hover:-translate-y-1 transition-transform">
              <span className="text-[10px] font-black uppercase tracking-widest text-error mb-1">SLA Breaches</span>
              <span className="text-3xl font-black text-error">12</span>
            </div>
            <div className="bg-surface-container-lowest p-6 rounded-2xl flex flex-col gap-1 border border-outline-variant/20 shadow-sm border-l-[6px] border-l-secondary-fixed hover:-translate-y-1 transition-transform">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Unassigned</span>
              <span className="text-3xl font-black text-secondary">42</span>
            </div>
            <div className="bg-surface-container-lowest p-6 rounded-2xl flex flex-col gap-1 border border-outline-variant/20 shadow-sm border-l-[6px] border-l-tertiary-fixed hover:-translate-y-1 transition-transform">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">Avg. Resolution</span>
              <span className="text-3xl font-black text-tertiary">4.2h</span>
            </div>
          </div>

          {/* The Digital Ledger Table */}
          <div className="bg-surface-container-lowest rounded-2xl overflow-hidden border border-outline-variant/20 shadow-sm">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low border-b border-outline-variant/20">
                  <th className="py-5 px-6 w-12 pt-6 pb-4">
                    <input className="w-4 h-4 rounded appearance-none border border-outline-variant checked:bg-primary checked:border-primary focus:ring-1 focus:ring-primary focus:ring-offset-1 cursor-pointer transition-colors relative after:content-[''] checked:after:content-['✓'] checked:after:text-white checked:after:absolute checked:after:left-[3px] checked:after:-top-[2px] checked:after:text-[10px] checked:after:font-bold" type="checkbox"/>
                  </th>
                  <th className="py-5 px-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant pt-6 pb-4">Complaint ID</th>
                  <th className="py-5 px-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant pt-6 pb-4">Resident & Unit</th>
                  <th className="py-5 px-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant pt-6 pb-4">Category & Title</th>
                  <th className="py-5 px-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant pt-6 pb-4">Priority</th>
                  <th className="py-5 px-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant pt-6 pb-4 cursor-pointer hover:bg-surface-variant/50 transition-colors"><div className="flex items-center gap-1">Status <span className="material-symbols-outlined text-[14px]">arrow_drop_down</span></div></th>
                  <th className="py-5 px-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant pt-6 pb-4">SLA Deadline</th>
                  <th className="py-5 px-4 text-[10px] font-black uppercase tracking-widest text-on-surface-variant pt-6 pb-4">Assigned To</th>
                  <th className="py-5 px-6 text-[10px] font-black uppercase tracking-widest text-on-surface-variant text-right pt-6 pb-4">Actions</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                
                {/* SLA Breach Row */}
                <tr className="border-b border-outline-variant/10 border-l-[3px] border-l-error bg-error/5 hover:bg-error/10 transition-colors cursor-pointer group">
                  <td className="py-6 px-6">
                    <input className="w-4 h-4 rounded appearance-none border border-outline-variant checked:bg-primary checked:border-primary focus:ring-1 focus:ring-primary focus:ring-offset-1 cursor-pointer transition-colors relative after:content-[''] checked:after:content-['✓'] checked:after:text-white checked:after:absolute checked:after:left-[3px] checked:after:-top-[2px] checked:after:text-[10px] checked:after:font-bold" type="checkbox"/>
                  </td>
                  <td className="py-6 px-4 font-bold text-primary group-hover:underline decoration-2 underline-offset-2">#GRV-9821</td>
                  <td className="py-6 px-4">
                    <div className="font-bold text-on-surface text-[13px] mb-0.5">Elena Rodriguez</div>
                    <div className="text-[11px] font-medium text-on-surface-variant">Block C, Unit 402</div>
                  </td>
                  <td className="py-6 px-4">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_6px_rgba(59,130,246,0.6)]"></span>
                      <span className="text-[10px] font-bold text-blue-700 uppercase tracking-widest">Utilities</span>
                    </div>
                    <div className="font-semibold text-[13px] text-on-surface truncate max-w-[200px]">Water leakage in main bathroom...</div>
                  </td>
                  <td className="py-6 px-4">
                    <span className="px-2.5 py-1 bg-error-container text-on-error-container text-[10px] font-extrabold rounded uppercase tracking-widest border border-error/20">SLA Breach</span>
                  </td>
                  <td className="py-6 px-4">
                    <span className="px-3 py-1.5 bg-primary-fixed text-on-primary-fixed text-[11px] font-bold rounded-lg border border-primary-fixed-dim/20 whitespace-nowrap">In Progress</span>
                  </td>
                  <td className="py-6 px-4">
                    <div className="flex items-center gap-1.5 text-error font-black bg-white/50 px-2.5 py-1 rounded-md border border-error/10 w-max">
                      <span className="material-symbols-outlined text-[16px]">timer</span>
                      <span>-02:14:45</span>
                    </div>
                  </td>
                  <td className="py-6 px-4">
                    <div className="flex items-center gap-2.5 bg-white/50 px-2 py-1 rounded-full border border-outline-variant/10 w-max hover:bg-white transition-colors">
                      <img alt="Marcus" className="w-6 h-6 rounded-full object-cover" src="https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&q=80&w=200"/>
                      <span className="font-bold text-[12px] text-on-surface pr-2">Marcus Chen</span>
                    </div>
                  </td>
                  <td className="py-6 px-6">
                    <div className="flex justify-end gap-1">
                      <button onClick={() => showToast('Opening details for #GRV-9821...')} className="p-2 text-slate-400 hover:text-primary hover:bg-primary/5 rounded-lg transition-all" title="View Details"><span className="material-symbols-outlined text-[20px]">visibility</span></button>
                      <button onClick={() => showToast('Editing #GRV-9821...')} className="p-2 text-slate-400 hover:text-primary hover:bg-primary/5 rounded-lg transition-all" title="Edit"><span className="material-symbols-outlined text-[20px]">edit_note</span></button>
                    </div>
                  </td>
                </tr>

                {/* Normal Row */}
                <tr className="border-b border-outline-variant/10 border-l-[3px] border-l-transparent hover:bg-surface-container-low transition-colors cursor-pointer group">
                  <td className="py-6 px-6">
                    <input className="w-4 h-4 rounded appearance-none border border-outline-variant checked:bg-primary checked:border-primary focus:ring-1 focus:ring-primary focus:ring-offset-1 cursor-pointer transition-colors relative after:content-[''] checked:after:content-['✓'] checked:after:text-white checked:after:absolute checked:after:left-[3px] checked:after:-top-[2px] checked:after:text-[10px] checked:after:font-bold" type="checkbox"/>
                  </td>
                  <td className="py-6 px-4 font-bold text-primary group-hover:underline decoration-2 underline-offset-2">#GRV-9844</td>
                  <td className="py-6 px-4">
                    <div className="font-bold text-on-surface text-[13px] mb-0.5">Jamal Williams</div>
                    <div className="text-[11px] font-medium text-on-surface-variant">Block A, Unit 112</div>
                  </td>
                  <td className="py-6 px-4">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                      <span className="text-[10px] font-bold text-orange-600 uppercase tracking-widest">Security</span>
                    </div>
                    <div className="font-semibold text-[13px] text-on-surface truncate max-w-[200px]">Broken lobby door sensor</div>
                  </td>
                  <td className="py-6 px-4">
                    <span className="px-2.5 py-1 bg-secondary-fixed text-on-secondary-fixed text-[10px] font-extrabold rounded uppercase tracking-widest border border-secondary-fixed-dim/20">High</span>
                  </td>
                  <td className="py-6 px-4">
                    <span className="px-3 py-1.5 bg-surface-container-highest text-on-surface-variant text-[11px] font-bold rounded-lg border border-outline-variant/10 whitespace-nowrap">Raised</span>
                  </td>
                  <td className="py-6 px-4">
                    <div className="font-bold text-on-surface-variant px-2.5 py-1 w-max">04:22:00</div>
                  </td>
                  <td className="py-6 px-4 relative">
                    {row2Worker ? (
                      <div className="flex items-center gap-2.5 bg-white/50 px-2 py-1 rounded-full border border-outline-variant/10 w-max hover:bg-white transition-colors">
                        <span className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center font-bold text-[10px]">{row2Worker.charAt(0)}</span>
                        <span className="font-bold text-[12px] text-on-surface pr-2">{row2Worker}</span>
                      </div>
                    ) : (
                      <>
                        <button 
                          onClick={() => setActiveAssignRow(activeAssignRow === 2 ? null : 2)}
                          className={`text-[12px] font-black text-primary px-3 py-1.5 border border-primary/20 rounded-lg hover:bg-primary/10 transition-colors w-max uppercase tracking-wider ${activeAssignRow === 2 ? 'bg-primary/10 ring-2 ring-primary/30' : 'bg-primary/5'}`}
                        >
                          Assign Now
                        </button>
                        {activeAssignRow === 2 && (
                          <div className="absolute left-4 top-14 w-48 bg-surface-container-lowest border border-outline-variant/20 shadow-xl rounded-xl overflow-hidden z-30 animate-in fade-in zoom-in duration-200">
                            <button onClick={() => { setRow2Worker('Security Team Alpha'); setActiveAssignRow(null); showToast('Assigned to Security Team Alpha'); }} className="w-full text-left px-4 py-3 text-xs font-bold hover:bg-surface-container transition-colors">Security Team Alpha</button>
                            <button onClick={() => { setRow2Worker('Marcus Chen'); setActiveAssignRow(null); showToast('Assigned to Marcus Chen'); }} className="w-full text-left px-4 py-3 text-xs font-bold hover:bg-surface-container transition-colors border-t border-outline-variant/10">Marcus Chen</button>
                          </div>
                        )}
                      </>
                    )}
                  </td>
                  <td className="py-6 px-6">
                    <div className="flex justify-end gap-1">
                      <button onClick={() => showToast('Opening details for #GRV-9844...')} className="p-2 text-slate-400 hover:text-primary hover:bg-primary/5 rounded-lg transition-all"><span className="material-symbols-outlined text-[20px]">visibility</span></button>
                      <button onClick={() => showToast('Editing #GRV-9844...')} className="p-2 text-slate-400 hover:text-primary hover:bg-primary/5 rounded-lg transition-all"><span className="material-symbols-outlined text-[20px]">edit_note</span></button>
                    </div>
                  </td>
                </tr>

                {/* Resolved Row */}
                <tr className="border-b border-outline-variant/10 border-l-[3px] border-l-transparent bg-surface-container-lowest hover:bg-surface-container-low transition-colors cursor-pointer group opacity-75 hover:opacity-100">
                  <td className="py-6 px-6">
                    <input className="w-4 h-4 rounded appearance-none border border-outline-variant checked:bg-primary checked:border-primary focus:ring-1 focus:ring-primary focus:ring-offset-1 cursor-pointer transition-colors relative after:content-[''] checked:after:content-['✓'] checked:after:text-white checked:after:absolute checked:after:left-[3px] checked:after:-top-[2px] checked:after:text-[10px] checked:after:font-bold" type="checkbox"/>
                  </td>
                  <td className="py-6 px-4 font-bold text-primary group-hover:underline decoration-2 underline-offset-2">#GRV-9788</td>
                  <td className="py-6 px-4">
                    <div className="font-bold text-on-surface text-[13px] mb-0.5">Sarah Jenkins</div>
                    <div className="text-[11px] font-medium text-on-surface-variant">Block D, Unit 205</div>
                  </td>
                  <td className="py-6 px-4">
                    <div className="flex items-center gap-2 mb-1.5 grayscale group-hover:grayscale-0 transition-all">
                      <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                      <span className="text-[10px] font-bold text-tertiary uppercase tracking-widest">Sanitation</span>
                    </div>
                    <div className="font-semibold text-[13px] text-on-surface truncate max-w-[200px]">Garbage disposal noise issue</div>
                  </td>
                  <td className="py-6 px-4">
                    <span className="px-2.5 py-1 bg-surface-container text-on-surface-variant text-[10px] font-extrabold rounded uppercase tracking-widest border border-outline-variant/10">Low</span>
                  </td>
                  <td className="py-6 px-4">
                    <span className="px-3 py-1.5 bg-tertiary-fixed text-on-tertiary-fixed text-[11px] font-bold rounded-lg border border-tertiary-fixed-dim/20 whitespace-nowrap">Resolved</span>
                  </td>
                  <td className="py-6 px-4 text-[13px] font-medium text-slate-400 italic">Closed</td>
                  <td className="py-6 px-4">
                    <div className="flex items-center gap-2.5 bg-white/50 px-2 py-1 rounded-full w-max grayscale group-hover:grayscale-[0.5] transition-all">
                      <img alt="Anika" className="w-6 h-6 rounded-full object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"/>
                      <span className="font-bold text-[12px] text-slate-500 pr-2">Anika Patel</span>
                    </div>
                  </td>
                  <td className="py-6 px-6">
                    <div className="flex justify-end gap-1">
                      <button onClick={() => showToast('Opening details for #GRV-9788...')} className="p-2 text-slate-400 hover:text-primary hover:bg-primary/5 rounded-lg transition-all"><span className="material-symbols-outlined text-[20px]">visibility</span></button>
                      <button onClick={() => showToast('Editing #GRV-9788...')} className="p-2 text-slate-400 hover:text-primary hover:bg-primary/5 rounded-lg transition-all"><span className="material-symbols-outlined text-[20px]">edit_note</span></button>
                    </div>
                  </td>
                </tr>

                {/* Medium Priority Row */}
                <tr className="border-b-0 border-l-[3px] border-l-transparent hover:bg-surface-container-low transition-colors cursor-pointer group">
                  <td className="py-6 px-6">
                    <input className="w-4 h-4 rounded appearance-none border border-outline-variant checked:bg-primary checked:border-primary focus:ring-1 focus:ring-primary focus:ring-offset-1 cursor-pointer transition-colors relative after:content-[''] checked:after:content-['✓'] checked:after:text-white checked:after:absolute checked:after:left-[3px] checked:after:-top-[2px] checked:after:text-[10px] checked:after:font-bold" type="checkbox"/>
                  </td>
                  <td className="py-6 px-4 font-bold text-primary group-hover:underline decoration-2 underline-offset-2">#GRV-9850</td>
                  <td className="py-6 px-4">
                    <div className="font-bold text-on-surface text-[13px] mb-0.5">David Miller</div>
                    <div className="text-[11px] font-medium text-on-surface-variant">Block B, Unit 309</div>
                  </td>
                  <td className="py-6 px-4">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                      <span className="text-[10px] font-bold text-blue-600 uppercase tracking-widest">Utilities</span>
                    </div>
                    <div className="font-semibold text-[13px] text-on-surface truncate max-w-[200px]">Flickering lights in hallway</div>
                  </td>
                  <td className="py-6 px-4">
                    <span className="px-2.5 py-1 bg-primary-fixed text-on-primary-fixed text-[10px] font-extrabold rounded uppercase tracking-widest border border-primary-fixed-dim/20">Medium</span>
                  </td>
                  <td className="py-6 px-4">
                    <span className="px-3 py-1.5 bg-surface-container-highest text-on-surface-variant text-[11px] font-bold rounded-lg border border-outline-variant/10 whitespace-nowrap">Verified</span>
                  </td>
                  <td className="py-6 px-4">
                     <div className="font-bold text-on-surface px-2.5 py-1 w-max">22:10:15</div>
                  </td>
                  <td className="py-6 px-4">
                    <div className="flex items-center gap-2.5 bg-surface-container-lowest px-2 py-1 rounded-full border border-outline-variant/10 w-max hover:bg-white transition-colors">
                      <img alt="Tom" className="w-6 h-6 rounded-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"/>
                      <span className="font-bold text-[12px] text-on-surface pr-2">Tom Higgins</span>
                    </div>
                  </td>
                  <td className="py-6 px-6">
                    <div className="flex justify-end gap-1">
                      <button onClick={() => showToast('Opening details for #GRV-9850...')} className="p-2 text-slate-400 hover:text-primary hover:bg-primary/5 rounded-lg transition-all"><span className="material-symbols-outlined text-[20px]">visibility</span></button>
                      <button onClick={() => showToast('Editing #GRV-9850...')} className="p-2 text-slate-400 hover:text-primary hover:bg-primary/5 rounded-lg transition-all"><span className="material-symbols-outlined text-[20px]">edit_note</span></button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Pagination & Controls */}
            <div className="px-8 py-6 flex flex-col md:flex-row items-center justify-between border-t border-outline-variant/20 bg-surface-container-lowest/50 gap-4">
              <div className="text-[11px] font-bold text-on-surface-variant uppercase tracking-widest">
                Showing <span className="text-on-surface bg-surface-container-highest px-2 py-1 rounded mx-1">{((currentPage - 1) * parseInt(rowsPerPage)) + 1} - {Math.min(currentPage * parseInt(rowsPerPage), 1284)}</span> of 1,284 Complaints
              </div>
              
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-surface-container-lowest border border-outline-variant/20 text-on-surface-variant hover:bg-surface-container-low transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="material-symbols-outlined text-[18px]">chevron_left</span>
                </button>
                <button onClick={() => handlePageChange(1)} className={`w-10 h-10 flex items-center justify-center rounded-xl font-bold text-sm shadow-sm transition-colors ${currentPage === 1 ? 'bg-primary text-on-primary border-none shadow-md' : 'bg-surface-container-lowest border border-outline-variant/20 text-on-surface hover:bg-surface-container-low'}`}>1</button>
                <button onClick={() => handlePageChange(2)} className={`w-10 h-10 flex items-center justify-center rounded-xl font-bold text-sm shadow-sm transition-colors ${currentPage === 2 ? 'bg-primary text-on-primary border-none shadow-md' : 'bg-surface-container-lowest border border-outline-variant/20 text-on-surface hover:bg-surface-container-low'}`}>2</button>
                <button onClick={() => handlePageChange(3)} className={`w-10 h-10 flex items-center justify-center rounded-xl font-bold text-sm shadow-sm transition-colors ${currentPage === 3 ? 'bg-primary text-on-primary border-none shadow-md' : 'bg-surface-container-lowest border border-outline-variant/20 text-on-surface hover:bg-surface-container-low'}`}>3</button>
                {currentPage > 3 && currentPage < 48 && (
                  <>
                    <span className="px-1 text-outline font-bold">...</span>
                    <button className="w-10 h-10 flex items-center justify-center rounded-xl bg-primary text-on-primary border-none shadow-md font-bold text-sm">{currentPage}</button>
                  </>
                )}
                <span className="px-2 text-outline font-bold">...</span>
                <button onClick={() => handlePageChange(48)} className={`w-10 h-10 flex items-center justify-center rounded-xl font-bold text-sm shadow-sm transition-colors ${currentPage === 48 ? 'bg-primary text-on-primary border-none shadow-md' : 'bg-surface-container-lowest border border-outline-variant/20 text-on-surface hover:bg-surface-container-low'}`}>48</button>
                <button 
                  onClick={() => handlePageChange(Math.min(48, currentPage + 1))}
                  disabled={currentPage === 48}
                  className="w-10 h-10 flex items-center justify-center rounded-xl bg-surface-container-lowest border border-outline-variant/20 text-on-surface-variant hover:bg-surface-container-low transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="material-symbols-outlined text-[18px]">chevron_right</span>
                </button>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[11px] font-bold text-on-surface-variant uppercase tracking-widest">Per page:</span>
                <select 
                  value={rowsPerPage}
                  onChange={(e) => setRowsPerPage(e.target.value)}
                  className="bg-surface-container-low border border-outline-variant/20 rounded-lg text-xs font-bold text-on-surface focus:ring-2 focus:ring-primary/20 py-2 pl-3 pr-8 cursor-pointer shadow-sm focus:outline-none"
                >
                  <option value="10">10</option>
                  <option value="25">25</option>
                  <option value="50">50</option>
                </select>
              </div>
            </div>
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
