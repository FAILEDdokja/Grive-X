import React from 'react';

export default function AdminReports({ onNavigate }: { onNavigate: (path: string) => void }) {
  return (
    <div className="bg-surface text-on-surface antialiased min-h-screen">
      {/* SideNavBar Shell */}
      <aside className="fixed left-0 top-0 h-screen w-64 z-50 bg-slate-50 dark:bg-slate-950 flex flex-col p-4 border-r border-slate-200 dark:border-slate-800">
        <div className="mb-8 px-2 mt-4">
          <h1 className="text-xl font-black tracking-tight text-blue-900 dark:text-blue-100 mb-1">GrievX OS</h1>
          <p className="text-[10px] uppercase tracking-[0.1em] text-on-surface-variant font-bold">Editorial Ledger</p>
        </div>
        <nav className="flex-1 space-y-1">
          <button onClick={() => onNavigate('admin')} className="flex w-full items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 rounded-lg transition-all hover:translate-x-1 duration-200 font-sans text-sm font-medium text-left">
            <span className="material-symbols-outlined">dashboard</span>
            <span>Overview</span>
          </button>
          <button onClick={() => onNavigate('admin-queue')} className="flex w-full items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 rounded-lg transition-all hover:translate-x-1 duration-200 font-sans text-sm font-medium text-left">
            <span className="material-symbols-outlined">list_alt</span>
            <span>Complaint Queue</span>
          </button>
          <button onClick={() => onNavigate('admin-workers')} className="flex w-full items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-200/50 dark:hover:bg-slate-800/50 rounded-lg transition-all hover:translate-x-1 duration-200 font-sans text-sm font-medium text-left">
            <span className="material-symbols-outlined">group</span>
            <span>Workers</span>
          </button>
          <button className="flex w-full items-center gap-3 px-3 py-2 text-blue-700 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/20 rounded-lg font-sans text-sm font-bold text-left border border-outline-variant/10">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>analytics</span>
            <span>Reports</span>
          </button>
        </nav>
        <div className="mt-auto space-y-2 pt-4 border-t border-outline-variant/20">
          <button className="w-full bg-primary text-on-primary py-3 rounded-xl font-bold text-sm mb-4 flex items-center justify-center gap-2 shadow-sm hover:bg-primary/95 active:scale-[0.98] transition-all">
            <span className="material-symbols-outlined text-lg">add</span>
            Submit New Action
          </button>
          <button className="flex w-full items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 rounded-lg font-sans text-sm font-medium transition-colors">
            <span className="material-symbols-outlined">contact_support</span>
            <span>Support</span>
          </button>
          <button onClick={() => onNavigate('login')} className="flex w-full items-center gap-3 px-3 py-2 text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 rounded-lg font-sans text-sm font-medium transition-colors">
            <span className="material-symbols-outlined">logout</span>
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="ml-64 min-h-screen">
        {/* TopAppBar */}
        <header className="fixed top-0 right-0 left-64 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl flex justify-between items-center px-8 py-4 shadow-sm border-b border-outline-variant/10">
          <div className="flex items-center gap-4 flex-1">
            <div className="relative w-full max-w-md">
              <span className="absolute inset-y-0 left-4 flex items-center text-slate-400">
                <span className="material-symbols-outlined text-lg">search</span>
              </span>
              <input className="bg-surface-container-low border-none rounded-full py-2.5 pl-12 pr-4 text-sm w-full focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all placeholder:text-outline" placeholder="Search analytics..." type="text"/>
            </div>
          </div>
          <div className="flex items-center gap-5 mr-2">
            <button className="p-2.5 text-slate-500 hover:bg-slate-50 rounded-full transition-colors active:scale-95 duration-150 cursor-pointer">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button className="p-2.5 text-slate-500 hover:bg-slate-50 rounded-full transition-colors active:scale-95 duration-150 cursor-pointer">
              <span className="material-symbols-outlined">help_outline</span>
            </button>
            <div className="h-10 w-10 rounded-full bg-primary-container flex items-center justify-center overflow-hidden border-2 border-outline-variant/20 cursor-pointer hover:border-primary/30 transition-colors">
              <img alt="Admin Profile Avatar" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?auto=format&fit=crop&q=80&w=200"/>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="pt-28 px-10 pb-12 max-w-7xl mx-auto">
          {/* Header & Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-on-surface mb-2">Analytical Ledger</h2>
              <p className="text-on-surface-variant text-sm font-medium">Reviewing civic performance and operational velocity.</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button className="bg-surface-container-low px-4 py-2.5 rounded-xl flex items-center gap-3 text-sm font-bold text-on-surface hover:bg-surface-container-highest transition-colors shadow-sm border border-outline-variant/10 cursor-pointer">
                <span className="material-symbols-outlined text-lg">calendar_today</span>
                Last 30 Days
                <span className="material-symbols-outlined text-lg text-outline">expand_more</span>
              </button>
              <button className="bg-surface-container-low px-4 py-2.5 rounded-xl text-sm font-bold text-on-surface hover:bg-surface-container-highest transition-colors flex items-center gap-2 shadow-sm border border-outline-variant/10 cursor-pointer">
                <span className="material-symbols-outlined text-lg">filter_list</span>
                Category
              </button>
              <button className="bg-primary text-on-primary px-6 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 shadow-md hover:bg-primary/95 active:scale-95 transition-all ml-1 cursor-pointer">
                <span className="material-symbols-outlined text-lg">download</span>
                Download Full Report
              </button>
            </div>
          </div>

          {/* KPI Summary Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/20 shadow-sm hover:-translate-y-1 transition-transform border-t-4 border-t-primary-fixed">
              <div className="flex justify-between items-start mb-5">
                <div className="bg-primary-fixed w-10 h-10 flex items-center justify-center rounded-xl text-on-primary-fixed">
                  <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                </div>
                <span className="text-tertiary font-bold text-[11px] flex items-center bg-tertiary-fixed/30 px-2.5 py-1 rounded-full">
                  +12% <span className="material-symbols-outlined text-sm ml-0.5 font-bold">trending_up</span>
                </span>
              </div>
              <p className="text-label-md uppercase tracking-widest text-outline text-[10px] font-bold mb-1.5">Total Resolved</p>
              <h3 className="text-3xl font-black text-on-surface">1,482</h3>
            </div>
            
            <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/20 shadow-sm hover:-translate-y-1 transition-transform border-t-4 border-t-secondary-fixed">
              <div className="flex justify-between items-start mb-5">
                <div className="bg-secondary-fixed w-10 h-10 flex items-center justify-center rounded-xl text-on-secondary-fixed">
                  <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>timer</span>
                </div>
                <span className="text-tertiary font-bold text-[11px] flex items-center bg-tertiary-fixed/30 px-2.5 py-1 rounded-full">
                  -4h <span className="material-symbols-outlined text-sm ml-0.5 font-bold">trending_down</span>
                </span>
              </div>
              <p className="text-label-md uppercase tracking-widest text-outline text-[10px] font-bold mb-1.5">Avg. Resolution</p>
              <h3 className="text-3xl font-black text-on-surface">18.4 Hours</h3>
            </div>

            <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/20 shadow-sm hover:-translate-y-1 transition-transform border-t-4 border-t-tertiary-fixed">
              <div className="flex justify-between items-start mb-5">
                <div className="bg-tertiary-fixed w-10 h-10 flex items-center justify-center rounded-xl text-on-tertiary-fixed">
                  <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                </div>
                <span className="text-error font-bold text-[11px] flex items-center bg-error-container/40 px-2.5 py-1 rounded-full">
                  -0.5% <span className="material-symbols-outlined text-sm ml-0.5 font-bold">trending_down</span>
                </span>
              </div>
              <p className="text-label-md uppercase tracking-widest text-outline text-[10px] font-bold mb-1.5">SLA Success Rate</p>
              <h3 className="text-3xl font-black text-on-surface">94.2%</h3>
            </div>

            <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/20 shadow-sm hover:-translate-y-1 transition-transform border-t-4 border-t-primary-container">
              <div className="flex justify-between items-start mb-5">
                <div className="bg-primary w-10 h-10 flex items-center justify-center rounded-xl text-on-primary">
                  <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                </div>
                <span className="text-tertiary font-bold text-[11px] flex items-center bg-tertiary-fixed/30 px-2.5 py-1 rounded-full">
                  +0.2 <span className="material-symbols-outlined text-sm ml-0.5 font-bold">trending_up</span>
                </span>
              </div>
              <p className="text-label-md uppercase tracking-widest text-outline text-[10px] font-bold mb-1.5">Citizen Score</p>
              <h3 className="text-3xl font-black text-on-surface">4.8 / 5.0</h3>
            </div>
          </div>

          {/* Main Analytics Bento Grid */}
          <div className="grid grid-cols-12 gap-8">
            
            {/* Complaint Trends Chart */}
            <div className="col-span-12 lg:col-span-8 bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-outline-variant/20">
              <div className="flex justify-between items-center mb-10">
                <div>
                  <h4 className="text-xl font-bold text-on-surface mb-1">Complaint Velocity</h4>
                  <p className="text-sm text-on-surface-variant font-medium">Daily volume of incoming vs. resolved grievances</p>
                </div>
                <div className="flex gap-5">
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded bg-primary"></span>
                    <span className="text-xs font-black uppercase tracking-widest text-outline">New</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-3.5 h-3.5 rounded bg-tertiary"></span>
                    <span className="text-xs font-black uppercase tracking-widest text-outline">Resolved</span>
                  </div>
                </div>
              </div>
              
              {/* Chart Visual Representation */}
              <div className="h-72 w-full relative flex items-end justify-between gap-1 mt-6 border-b border-l border-outline-variant/20 pb-4 pl-4">
                <div className="absolute -left-2 bottom-4 h-full flex flex-col justify-between text-[10px] font-bold text-outline uppercase tracking-widest text-right pr-2">
                  <span>100</span><span>75</span><span>50</span><span>25</span><span>0</span>
                </div>
                <svg className="absolute inset-0 w-full h-full pl-4 pb-4" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <path d="M0,80 Q15,75 25,90 T50,60 T70,85 T90,20 T100,50" fill="none" stroke="#00327d" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                  <path d="M0,90 Q15,85 25,95 T50,70 T70,90 T90,40 T100,60" fill="none" stroke="#00400c" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"></path>
                </svg>
                <div className="absolute -bottom-6 w-full pl-4 flex justify-between text-[10px] font-bold text-outline uppercase tracking-widest">
                  <span>01 OCT</span><span>07 OCT</span><span>14 OCT</span><span>21 OCT</span><span>28 OCT</span>
                </div>
              </div>
            </div>

            {/* Category Distribution */}
            <div className="col-span-12 lg:col-span-4 bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-outline-variant/20 flex flex-col justify-between">
              <div>
                <h4 className="text-xl font-bold text-on-surface mb-8">Top Categories</h4>
                <div className="space-y-7">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm font-bold">
                      <span className="text-on-surface">Security & Policing</span>
                      <span className="text-primary font-black">342</span>
                    </div>
                    <div className="h-2.5 w-full bg-surface-container-high rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full transition-all duration-1000" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm font-bold">
                      <span className="text-on-surface">Water & Plumbing</span>
                      <span className="text-secondary-container font-black">218</span>
                    </div>
                    <div className="h-2.5 w-full bg-surface-container-high rounded-full overflow-hidden">
                      <div className="h-full bg-secondary-container rounded-full transition-all duration-1000" style={{ width: '55%' }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm font-bold">
                      <span className="text-on-surface">Waste Management</span>
                      <span className="text-tertiary font-black">189</span>
                    </div>
                    <div className="h-2.5 w-full bg-surface-container-high rounded-full overflow-hidden">
                      <div className="h-full bg-tertiary rounded-full transition-all duration-1000" style={{ width: '45%' }}></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm font-bold">
                      <span className="text-on-surface">Public Lighting</span>
                      <span className="text-primary-fixed-variant font-black">104</span>
                    </div>
                    <div className="h-2.5 w-full bg-surface-container-high rounded-full overflow-hidden">
                      <div className="h-full bg-primary-fixed-variant rounded-full transition-all duration-1000" style={{ width: '30%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 p-5 bg-surface-variant/30 rounded-xl border border-outline-variant/10 relative overflow-hidden">
                <div className="absolute -right-4 -top-4 opacity-5">
                    <span className="material-symbols-outlined text-8xl">lightbulb</span>
                </div>
                <p className="text-[11px] font-black text-outline uppercase tracking-widest mb-2 flex items-center gap-1.5"><span className="material-symbols-outlined text-sm">insights</span> Key Insight</p>
                <p className="text-sm text-on-surface font-medium italic leading-relaxed">"Security reports have increased by 14% this week due to Precinct 4 expansion."</p>
              </div>
            </div>

            {/* Worker Performance Leaderboard */}
            <div className="col-span-12 lg:col-span-7 bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-outline-variant/20">
              <div className="flex justify-between items-center mb-8">
                <h4 className="text-xl font-bold text-on-surface">Top Response Units</h4>
                <button className="text-primary text-sm font-bold border-b-2 border-primary/20 hover:border-primary transition-colors pb-0.5">View All Staff</button>
              </div>
              <div className="overflow-hidden">
                <table className="w-full text-left">
                  <thead className="text-[10px] font-black text-outline uppercase tracking-widest border-b-2 border-outline-variant/20">
                    <tr>
                      <th className="pb-4 px-2">Worker</th>
                      <th className="pb-4">Efficiency</th>
                      <th className="pb-4">Rating</th>
                      <th className="pb-4 text-right pr-4">Resolved</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-surface-container-low hover:bg-surface/50 transition-colors cursor-pointer group">
                      <td className="py-5 px-2 flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-surface-container overflow-hidden border border-outline-variant/20">
                          <img alt="Elias" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544717302-de2939b7ef71?auto=format&fit=crop&q=80&w=200"/>
                        </div>
                        <div>
                          <p className="font-bold text-on-surface group-hover:text-primary transition-colors text-[15px]">Elias Thorne</p>
                          <p className="text-[11px] font-medium text-on-surface-variant">Emergency Repair</p>
                        </div>
                      </td>
                      <td className="py-5">
                        <div className="bg-tertiary-fixed/30 border border-tertiary/20 px-2.5 py-1.5 rounded-md inline-block text-[10px] font-black tracking-wider text-tertiary">FAST (+24%)</div>
                      </td>
                      <td className="py-5">
                        <div className="flex items-center text-secondary-container">
                          <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                          <span className="font-black text-[15px] ml-1.5">4.9</span>
                        </div>
                      </td>
                      <td className="py-5 text-right font-black text-lg pr-4">124</td>
                    </tr>
                    
                    <tr className="border-b border-surface-container-low hover:bg-surface/50 transition-colors cursor-pointer group">
                      <td className="py-5 px-2 flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-surface-container overflow-hidden border border-outline-variant/20">
                          <img alt="Sarah" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"/>
                        </div>
                        <div>
                          <p className="font-bold text-on-surface group-hover:text-primary transition-colors text-[15px]">Sarah Chen</p>
                          <p className="text-[11px] font-medium text-on-surface-variant">Infrastructure</p>
                        </div>
                      </td>
                      <td className="py-5">
                        <div className="bg-primary-fixed/30 border border-primary/20 px-2.5 py-1.5 rounded-md inline-block text-[10px] font-black tracking-wider text-primary">OPTIMAL</div>
                      </td>
                      <td className="py-5">
                        <div className="flex items-center text-secondary-container">
                          <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                          <span className="font-black text-[15px] ml-1.5">4.8</span>
                        </div>
                      </td>
                      <td className="py-5 text-right font-black text-lg pr-4">112</td>
                    </tr>

                    <tr className="hover:bg-surface/50 transition-colors cursor-pointer group">
                      <td className="py-5 px-2 flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-surface-container overflow-hidden border border-outline-variant/20">
                          <img alt="Marcus" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"/>
                        </div>
                        <div>
                          <p className="font-bold text-on-surface group-hover:text-primary transition-colors text-[15px]">Marcus Vane</p>
                          <p className="text-[11px] font-medium text-on-surface-variant">Public Safety</p>
                        </div>
                      </td>
                      <td className="py-5">
                        <div className="bg-tertiary-fixed/30 border border-tertiary/20 px-2.5 py-1.5 rounded-md inline-block text-[10px] font-black tracking-wider text-tertiary">FAST (+11%)</div>
                      </td>
                      <td className="py-5">
                        <div className="flex items-center text-secondary-container">
                          <span className="material-symbols-outlined text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                          <span className="font-black text-[15px] ml-1.5">4.7</span>
                        </div>
                      </td>
                      <td className="py-5 text-right font-black text-lg pr-4">98</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Satisfaction Trends Heatmap */}
            <div className="col-span-12 lg:col-span-5 bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-outline-variant/20 flex flex-col">
              <h4 className="text-xl font-bold text-on-surface mb-2">Satisfaction Sentiment</h4>
              <p className="text-sm font-medium text-on-surface-variant mb-8">Aggregate feedback scores across residential blocks</p>
              
              <div className="flex-1 grid grid-cols-7 grid-rows-4 gap-3 bg-surface p-4 rounded-xl border border-outline-variant/10">
                {/* Heatmap Blocks - simulating data density with fixed opacities */}
                <div className="bg-tertiary rounded shadow-sm opacity-30 hover:opacity-100 transition-opacity cursor-crosshair"></div>
                <div className="bg-tertiary rounded shadow-sm opacity-40 hover:opacity-100 transition-opacity cursor-crosshair"></div>
                <div className="bg-tertiary rounded shadow-sm opacity-90 hover:opacity-100 transition-opacity cursor-crosshair"></div>
                <div className="bg-tertiary rounded shadow-sm opacity-60 hover:opacity-100 transition-opacity cursor-crosshair"></div>
                <div className="bg-tertiary rounded shadow-sm opacity-100 hover:opacity-100 transition-opacity cursor-crosshair"></div>
                <div className="bg-tertiary rounded shadow-sm opacity-90 hover:opacity-100 transition-opacity cursor-crosshair"></div>
                <div className="bg-tertiary rounded shadow-sm opacity-50 hover:opacity-100 transition-opacity cursor-crosshair"></div>
                
                <div className="bg-tertiary rounded shadow-sm opacity-40 hover:opacity-100 transition-opacity cursor-crosshair"></div>
                <div className="bg-tertiary rounded shadow-sm opacity-60 hover:opacity-100 transition-opacity cursor-crosshair"></div>
                <div className="bg-tertiary rounded shadow-sm opacity-80 hover:opacity-100 transition-opacity cursor-crosshair"></div>
                <div className="bg-tertiary rounded shadow-sm opacity-100 hover:opacity-100 transition-opacity cursor-crosshair"></div>
                <div className="bg-tertiary rounded shadow-sm opacity-70 hover:opacity-100 transition-opacity cursor-crosshair"></div>
                <div className="bg-tertiary rounded shadow-sm opacity-40 hover:opacity-100 transition-opacity cursor-crosshair"></div>
                <div className="bg-tertiary rounded shadow-sm opacity-30 hover:opacity-100 transition-opacity cursor-crosshair"></div>
                
                <div className="bg-tertiary rounded shadow-sm opacity-80 hover:opacity-100 transition-opacity cursor-crosshair"></div>
                <div className="bg-tertiary rounded shadow-sm opacity-90 hover:opacity-100 transition-opacity cursor-crosshair"></div>
                <div className="bg-tertiary rounded shadow-sm opacity-50 hover:opacity-100 transition-opacity cursor-crosshair"></div>
                <div className="bg-tertiary rounded shadow-sm opacity-30 hover:opacity-100 transition-opacity cursor-crosshair"></div>
                <div className="bg-tertiary rounded shadow-sm opacity-40 hover:opacity-100 transition-opacity cursor-crosshair"></div>
                <div className="bg-tertiary rounded shadow-sm opacity-70 hover:opacity-100 transition-opacity cursor-crosshair"></div>
                <div className="bg-tertiary rounded shadow-sm opacity-90 hover:opacity-100 transition-opacity cursor-crosshair"></div>
                
                <div className="bg-tertiary rounded shadow-sm opacity-100 hover:opacity-100 transition-opacity cursor-crosshair"></div>
                <div className="bg-tertiary rounded shadow-sm opacity-80 hover:opacity-100 transition-opacity cursor-crosshair"></div>
                <div className="bg-tertiary rounded shadow-sm opacity-90 hover:opacity-100 transition-opacity cursor-crosshair"></div>
                <div className="bg-tertiary rounded shadow-sm opacity-60 hover:opacity-100 transition-opacity cursor-crosshair"></div>
                <div className="bg-tertiary rounded shadow-sm opacity-50 hover:opacity-100 transition-opacity cursor-crosshair"></div>
                <div className="bg-tertiary rounded shadow-sm opacity-30 hover:opacity-100 transition-opacity cursor-crosshair"></div>
                <div className="bg-tertiary rounded shadow-sm opacity-20 hover:opacity-100 transition-opacity cursor-crosshair"></div>
              </div>
              
              <div className="mt-8 flex justify-between items-end text-[10px] font-black text-outline uppercase tracking-widest">
                <span className="w-16">Low Engagement</span>
                <div className="flex h-3 w-40 bg-gradient-to-r from-tertiary/10 to-tertiary rounded-full border border-outline-variant/20 mx-4"></div>
                <span className="text-right w-16">Peak Satisfaction</span>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
