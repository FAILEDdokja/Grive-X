import React, { useState } from 'react';

export default function AdminDashboard({ onNavigate }: { onNavigate: (path: string) => void }) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [showExport, setShowExport] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [activeActionRow, setActiveActionRow] = useState<number | null>(null);

  // States for search and export
  const [searchQuery, setSearchQuery] = useState('');
  const [isExporting, setIsExporting] = useState<'csv' | 'pdf' | null>(null);

  // States to persist simulated triaging
  const [row1Status, setRow1Status] = useState<'unassigned'|'utilities'|'maintenance'|'invalid'>('unassigned');
  const [row2Status, setRow2Status] = useState<'assigned'|'notified'|'critical'>('assigned');
  const [row3Status, setRow3Status] = useState<'unassigned'|'animal'|'security'|'rejected'>('unassigned');

  // Helper actions
  const handleAssignRow1 = (status: 'utilities'|'maintenance'|'invalid') => {
    setRow1Status(status);
    setActiveActionRow(null);
  };

  const handleAssignRow3 = (status: 'animal'|'security'|'rejected') => {
    setRow3Status(status);
    setActiveActionRow(null);
  };

  return (
    <div className="bg-surface text-on-surface min-h-screen">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-md flex justify-between items-center px-6 py-3 shadow-sm dark:shadow-none border-b border-outline-variant/20">
        <div className="flex items-center gap-4">
          <span className="text-xl font-black tracking-tight text-blue-900 dark:text-blue-100 uppercase">GrievX Admin</span>
          <span className="hidden md:inline-flex px-2 py-0.5 bg-error-container text-on-error-container rounded text-[10px] font-bold uppercase tracking-wider">Control Center</span>
        </div>
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="relative">
              <button 
                onClick={() => {
                  setShowNotifications(!showNotifications);
                  setShowProfile(false);
                }}
                className={`p-2 rounded-full transition-colors relative ${showNotifications ? 'bg-surface-variant' : 'hover:bg-surface-variant'}`}
              >
                <span className="material-symbols-outlined text-on-surface-variant">notifications</span>
                <span className="absolute top-1 right-2 w-2 h-2 bg-error rounded-full"></span>
              </button>
              
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-surface-container-lowest rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-outline-variant/20 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="px-4 py-2 border-b border-outline-variant/10 flex justify-between items-center mb-2">
                    <span className="font-bold text-sm text-on-surface">System Alerts</span>
                    <span className="text-[10px] bg-error text-white px-2 py-0.5 rounded-full font-bold">1 Critical</span>
                  </div>
                  <div className="flex flex-col">
                    <div className="px-4 py-3 hover:bg-surface-container-low cursor-pointer flex gap-3 border-l-2 border-error bg-error/5">
                      <span className="material-symbols-outlined text-error text-lg flex-shrink-0">warning</span>
                      <div>
                        <p className="text-xs font-bold text-on-surface mb-0.5">SLA Breached x3</p>
                        <p className="text-[10px] text-on-surface-variant">Security Gate Malfunction has breached SLA by 1 hour.</p>
                      </div>
                    </div>
                    <div className="px-4 py-3 hover:bg-surface-container-low cursor-pointer flex gap-3">
                      <span className="material-symbols-outlined text-primary text-lg flex-shrink-0">info</span>
                      <div>
                        <p className="text-xs font-bold text-on-surface mb-0.5">New Export Ready</p>
                        <p className="text-[10px] text-on-surface-variant">Weekly utility report is ready for download.</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="relative">
              <button 
                onClick={() => {
                  setShowProfile(!showProfile);
                  setShowNotifications(false);
                }}
                className={`w-8 h-8 rounded-full bg-primary text-on-primary font-bold flex items-center justify-center transition-transform ${showProfile ? 'ring-2 ring-primary ring-offset-2' : 'hover:scale-105'}`}
              >
                A
              </button>
              
              {showProfile && (
                <div className="absolute right-0 mt-2 w-48 bg-surface-container-lowest rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-outline-variant/20 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="px-4 py-2 border-b border-outline-variant/20 mb-2">
                    <p className="font-bold text-sm">System Admin</p>
                    <p className="text-xs text-on-surface-variant">admin@sector42.gov</p>
                  </div>
                  <button onClick={() => onNavigate('login')} className="w-full text-left px-4 py-2 text-sm text-error hover:bg-error-container/50 flex items-center gap-2 transition-colors">
                    <span className="material-symbols-outlined text-sm">logout</span> Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      
      {/* SideNavBar */}
      <aside className="h-screen w-64 fixed left-0 top-0 flex flex-col bg-slate-100 dark:bg-slate-800/50 pt-16 border-r border-outline-variant/20 z-40">
        <nav className="flex flex-col p-4 space-y-1 overflow-y-auto w-full">
          <p className="px-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2 mt-4 w-full">Overview</p>
          <button onClick={() => onNavigate('admin')} className="flex items-center gap-3 px-4 py-2.5 text-primary bg-primary/10 rounded-lg transition-all ease-in-out font-sans text-sm font-bold w-full text-left">
            <span className="material-symbols-outlined text-lg">space_dashboard</span> Control Panel
          </button>
          
          <p className="px-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2 mt-6 w-full">Management</p>
          <button onClick={() => onNavigate('admin-queue')} className="flex items-center gap-3 px-4 py-2.5 text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/50 rounded-lg transition-all ease-in-out font-sans text-sm font-medium w-full text-left">
            <span className="material-symbols-outlined text-lg">list_alt</span> Queue
          </button>
          <button onClick={() => onNavigate('admin-workers')} className="flex items-center gap-3 px-4 py-2.5 text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/50 rounded-lg transition-all ease-in-out font-sans text-sm font-medium w-full text-left">
            <span className="material-symbols-outlined text-lg">engineering</span> Workers
          </button>

          <p className="px-4 text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2 mt-6 w-full">System</p>
          <button onClick={() => onNavigate('admin-reports')} className="flex items-center gap-3 px-4 py-2.5 text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/50 rounded-lg transition-all ease-in-out font-sans text-sm font-medium w-full text-left">
            <span className="material-symbols-outlined text-lg">analytics</span> Reports
          </button>
        </nav>
      </aside>

      <main className="ml-64 pt-20 pb-12 px-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h1 className="text-3xl font-black tracking-tight text-on-surface mb-1">Command Center</h1>
            <p className="text-on-surface-variant text-sm font-medium">Sector 42 • Live Operational Status</p>
          </div>
          <div className="flex gap-3">
            <div className="relative">
              <button 
                onClick={() => {
                  setShowExport(!showExport);
                  setShowFilter(false);
                }}
                className={`px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 transition-colors ${showExport ? 'bg-outline-variant/30 text-on-surface' : 'bg-surface-container-highest hover:bg-outline-variant/30 text-on-surface'}`}
              >
                <span className="material-symbols-outlined text-sm">download</span> Export
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

            <div className="relative">
              <button 
                onClick={() => {
                  setShowFilter(!showFilter);
                  setShowExport(false);
                }}
                className={`px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 shadow-sm transition-all ${showFilter ? 'bg-primary-container text-on-primary-container shadow-primary/40' : 'bg-primary text-on-primary shadow-primary/30 hover:bg-primary/95'}`}
              >
                <span className="material-symbols-outlined text-sm">filter_list</span> Filter View
              </button>

              {showFilter && (
                <div className="absolute right-0 mt-2 w-48 bg-surface-container-lowest border border-outline-variant/20 shadow-lg rounded-xl overflow-hidden z-20 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="p-2 bg-surface-container-low border-b border-outline-variant/10">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant px-2">Quick Filters</p>
                  </div>
                  <button className="w-full text-left px-4 py-2.5 text-sm font-medium text-on-surface hover:bg-surface-container transition-colors flex items-center justify-between group">
                    Show Active Only <span className="material-symbols-outlined text-[16px] text-tertiary opacity-0 group-hover:opacity-100 transition-opacity">check</span>
                  </button>
                  <button className="w-full text-left px-4 py-2.5 text-sm font-medium text-on-surface hover:bg-surface-container transition-colors flex items-center justify-between group">
                    SLA Breached <span className="material-symbols-outlined text-[16px] text-error opacity-0 group-hover:opacity-100 transition-opacity">check</span>
                  </button>
                  <button className="w-full text-left px-4 py-2.5 text-sm font-medium text-on-surface hover:bg-surface-container transition-colors flex items-center justify-between group">
                    Unassigned Tasks <span className="material-symbols-outlined text-[16px] text-secondary opacity-0 group-hover:opacity-100 transition-opacity">check</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Global SLA Counters */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant/30 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">New Submissions</span>
              <span className="material-symbols-outlined text-primary text-lg">fiber_new</span>
            </div>
            <div className="flex items-end gap-2">
              <span className="text-3xl font-black">12</span>
              <span className="text-xs font-medium text-tertiary mb-1 flex items-center"><span className="material-symbols-outlined text-[10px]">arrow_upward</span> +4 today</span>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant/30 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">In Progress</span>
              <span className="material-symbols-outlined text-secondary text-lg">pending</span>
            </div>
            <div className="flex items-end gap-2">
              <span className="text-3xl font-black">45</span>
              <span className="text-xs font-medium text-on-surface-variant mb-1">Accurate to SLA</span>
            </div>
          </div>
          <div className="bg-error-container text-on-error-container p-5 rounded-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -right-4 -top-4 opacity-10">
              <span className="material-symbols-outlined text-8xl">warning</span>
            </div>
            <div className="flex items-center justify-between mb-2 relative z-10">
              <span className="text-xs font-bold uppercase tracking-wider">SLA Breached</span>
              <span className="material-symbols-outlined text-lg">warning</span>
            </div>
            <div className="flex items-end gap-2 relative z-10">
              <span className="text-3xl font-black text-error">3</span>
              <span className="text-xs font-bold mb-1">Requires immediate action</span>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-5 rounded-xl border border-outline-variant/30 flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-on-surface-variant">Resolution Rate</span>
              <span className="material-symbols-outlined text-tertiary text-lg">temp_preferences_custom</span>
            </div>
            <div className="flex items-end gap-2">
              <span className="text-3xl font-black">94%</span>
              <span className="text-xs font-medium text-on-surface-variant mb-1">7-day rolling</span>
            </div>
            <div className="w-full bg-surface-variant h-1.5 rounded-full mt-3 overflow-hidden">
              <div className="bg-tertiary h-full rounded-full" style={{ width: '94%' }}></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2 space-y-6">
            <h2 className="text-lg font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">priority</span> High Priority Queue
            </h2>
            
            {/* Triage Table */}
            <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-surface-container-low border-b border-outline-variant/30 text-[10px] uppercase tracking-wider text-on-surface-variant">
                    <th className="p-4 font-bold">ID & Issue</th>
                    <th className="p-4 font-bold">Category</th>
                    <th className="p-4 font-bold">Time Lapsed</th>
                    <th className="p-4 font-bold">Status</th>
                    <th className="p-4 font-bold">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/20">
                  <tr className="hover:bg-surface/50 transition-colors group">
                    <td className="p-4">
                      <p className="font-bold text-sm mb-0.5">Water Contamination</p>
                      <p className="text-xs text-on-surface-variant font-mono">#GRV-8821 • Block D</p>
                    </td>
                    <td className="p-4">
                      <span className="inline-flex items-center gap-1 text-xs font-medium px-2 py-1 bg-tertiary/10 text-tertiary rounded">
                        <span className="material-symbols-outlined text-[12px]">water_drop</span> Utility
                      </span>
                    </td>
                    <td className="p-4 text-sm font-medium text-error">
                      23h <span className="font-normal text-xs text-on-surface-variant">(1h to SLA)</span>
                    </td>
                    <td className="p-4">
                      {row1Status === 'unassigned' && (
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-secondary">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span> Unassigned
                        </span>
                      )}
                      {row1Status === 'utilities' && (
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Assigned: Utilities
                        </span>
                      )}
                      {row1Status === 'maintenance' && (
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Assigned: Maintenance
                        </span>
                      )}
                      {row1Status === 'invalid' && (
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-error">
                          <span className="w-1.5 h-1.5 rounded-full bg-error"></span> Invalid
                        </span>
                      )}
                    </td>
                    <td className="p-4 relative">
                      {row1Status === 'unassigned' ? (
                        <>
                          <button 
                            onClick={() => setActiveActionRow(activeActionRow === 1 ? null : 1)}
                            className={`text-xs font-bold text-on-primary bg-primary px-3 py-1.5 rounded shadow-sm transition-opacity ${activeActionRow === 1 ? 'opacity-100 ring-2 ring-primary ring-offset-1' : 'opacity-0 group-hover:opacity-100'}`}
                          >
                            Triage
                          </button>
                          {activeActionRow === 1 && (
                            <div className="absolute right-4 top-12 w-48 bg-surface-container-lowest border border-outline-variant/20 shadow-xl rounded-xl overflow-hidden z-30 animate-in fade-in zoom-in duration-200">
                              <button onClick={() => handleAssignRow1('utilities')} className="w-full text-left px-4 py-3 text-xs font-bold hover:bg-surface-container transition-colors">Assign to Utilities</button>
                              <button onClick={() => handleAssignRow1('maintenance')} className="w-full text-left px-4 py-3 text-xs font-bold hover:bg-surface-container transition-colors border-t border-outline-variant/10">Assign to Maintenance</button>
                              <button onClick={() => handleAssignRow1('invalid')} className="w-full text-left px-4 py-3 text-xs font-bold text-error hover:bg-error-container hover:text-error transition-colors border-t border-outline-variant/10">Mark Invalid</button>
                            </div>
                          )}
                        </>
                      ) : (
                        <button className="text-xs font-bold text-on-surface-variant bg-surface-variant px-3 py-1.5 rounded shadow-sm cursor-default">
                          Triaged
                        </button>
                      )}
                    </td>
                  </tr>
                  
                  <tr className="hover:bg-surface/50 transition-colors group bg-error/5">
                    <td className="p-4">
                      <p className="font-bold text-sm mb-0.5 text-error">Security Gate Malfunction</p>
                      <p className="text-xs text-on-surface-variant font-mono">#GRV-8810 • Main Entry</p>
                    </td>
                    <td className="p-4">
                      <span className="inline-flex items-center gap-1 text-xs font-medium px-2 py-1 bg-error/10 text-error rounded">
                        <span className="material-symbols-outlined text-[12px]">shield</span> Security
                      </span>
                    </td>
                    <td className="p-4 text-sm font-medium text-error font-bold">
                      49h <span className="text-xs uppercase tracking-wider ml-1">Breached</span>
                    </td>
                    <td className="p-4">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Assigned: TechOps
                      </span>
                    </td>
                    <td className="p-4 relative">
                      {row2Status === 'assigned' ? (
                        <>
                          <button 
                            onClick={() => setActiveActionRow(activeActionRow === 2 ? null : 2)}
                            className={`text-xs font-bold text-on-surface-variant border border-outline-variant/50 px-3 py-1.5 rounded hover:bg-surface-variant transition-colors ${activeActionRow === 2 ? 'bg-surface-variant text-on-surface ring-2 ring-outline-variant/50' : ''}`}
                          >
                            Escalate
                          </button>
                          {activeActionRow === 2 && (
                            <div className="absolute right-4 top-12 w-48 bg-surface-container-lowest border border-error/20 shadow-lg shadow-error/10 rounded-xl overflow-hidden z-30 animate-in fade-in zoom-in duration-200">
                              <button onClick={() => { setRow2Status('notified'); setActiveActionRow(null); }} className="w-full text-left px-4 py-2.5 text-xs font-bold text-error hover:bg-error-container transition-colors flex items-center gap-2">
                                <span className="material-symbols-outlined text-[16px]">campaign</span> Notify Department Head
                              </button>
                              <button onClick={() => { setRow2Status('critical'); setActiveActionRow(null); }} className="w-full text-left px-4 py-2.5 text-xs font-bold text-error hover:bg-error-container transition-colors flex items-center gap-2 border-t border-outline-variant/10">
                                <span className="material-symbols-outlined text-[16px]">priority_high</span> Mark as CRITICAL
                              </button>
                            </div>
                          )}
                        </>
                      ) : (
                        <button className="text-xs font-bold text-error bg-error-container px-3 py-1.5 rounded shadow-sm cursor-default flex items-center gap-1">
                          <span className="material-symbols-outlined text-[14px]">{row2Status === 'notified' ? 'campaign' : 'priority_high'}</span> Escalated
                        </button>
                      )}
                    </td>
                  </tr>

                  <tr className="hover:bg-surface/50 transition-colors group">
                    <td className="p-4">
                      <p className="font-bold text-sm mb-0.5">Stray Animal Incident</p>
                      <p className="text-xs text-on-surface-variant font-mono">#GRV-8825 • Park Area</p>
                    </td>
                    <td className="p-4">
                      <span className="inline-flex items-center gap-1 text-xs font-medium px-2 py-1 bg-secondary/10 text-secondary rounded">
                        <span className="material-symbols-outlined text-[12px]">pets</span> Safety
                      </span>
                    </td>
                    <td className="p-4 text-sm font-medium">
                      2h
                    </td>
                    <td className="p-4">
                      {row3Status === 'unassigned' && (
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-secondary">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse"></span> Unassigned
                        </span>
                      )}
                      {row3Status === 'animal' && (
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Assigned: Animal Ctrl
                        </span>
                      )}
                      {row3Status === 'security' && (
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-primary">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Assigned: Security
                        </span>
                      )}
                      {row3Status === 'rejected' && (
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-error">
                          <span className="w-1.5 h-1.5 rounded-full bg-error"></span> Rejected
                        </span>
                      )}
                    </td>
                    <td className="p-4 relative">
                      {row3Status === 'unassigned' ? (
                        <>
                          <button 
                            onClick={() => setActiveActionRow(activeActionRow === 3 ? null : 3)}
                            className={`text-xs font-bold text-on-primary bg-primary px-3 py-1.5 rounded shadow-sm transition-opacity ${activeActionRow === 3 ? 'opacity-100 ring-2 ring-primary ring-offset-1' : 'opacity-0 group-hover:opacity-100'}`}
                          >
                            Triage
                          </button>
                          {activeActionRow === 3 && (
                            <div className="absolute right-4 top-12 w-48 bg-surface-container-lowest border border-outline-variant/20 shadow-xl rounded-xl overflow-hidden z-30 animate-in fade-in zoom-in duration-200">
                              <button onClick={() => handleAssignRow3('animal')} className="w-full text-left px-4 py-3 text-xs font-bold hover:bg-surface-container transition-colors">Assign to Animal Ctrl</button>
                              <button onClick={() => handleAssignRow3('security')} className="w-full text-left px-4 py-3 text-xs font-bold hover:bg-surface-container transition-colors border-t border-outline-variant/10">Assign to Security</button>
                              <button onClick={() => handleAssignRow3('rejected')} className="w-full text-left px-4 py-3 text-xs font-bold text-error hover:bg-error-container hover:text-error transition-colors border-t border-outline-variant/10">Reject Request</button>
                            </div>
                          )}
                        </>
                      ) : (
                        <button className="text-xs font-bold text-on-surface-variant bg-surface-variant px-3 py-1.5 rounded shadow-sm cursor-default">
                          Triaged
                        </button>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="p-3 border-t border-outline-variant/30 text-center">
                <button onClick={() => onNavigate('admin-queue')} className="text-xs font-bold text-primary uppercase tracking-wider hover:underline underline-offset-2 hover:text-primary-container transition-colors">View All Pending (34)</button>
              </div>
            </div>
          </div>
          
          <div className="col-span-1 space-y-6">
            <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/30">
              <h3 className="font-bold text-sm uppercase tracking-wider text-on-surface-variant mb-4">Department Load</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span>Utilities (Plumbing/Elec)</span>
                    <span className="text-error">92%</span>
                  </div>
                  <div className="w-full bg-surface-variant h-2 rounded-full overflow-hidden">
                    <div className="bg-error h-full rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span>Cleanliness & Sanitation</span>
                    <span className="text-secondary">65%</span>
                  </div>
                  <div className="w-full bg-surface-variant h-2 rounded-full overflow-hidden">
                    <div className="bg-secondary h-full rounded-full" style={{ width: '65%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-bold mb-1">
                    <span>Security & Access</span>
                    <span className="text-tertiary">30%</span>
                  </div>
                  <div className="w-full bg-surface-variant h-2 rounded-full overflow-hidden">
                    <div className="bg-tertiary h-full rounded-full" style={{ width: '30%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
