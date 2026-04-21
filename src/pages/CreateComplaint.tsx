import React, { useRef, useState } from 'react';

export default function CreateComplaint({ onNavigate }: { onNavigate: (path: string) => void }) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [urgency, setUrgency] = useState<'low' | 'medium' | 'high'>('medium');
  const [isLocating, setIsLocating] = useState(false);
  const [address, setAddress] = useState('42 Maple Avenue, West District');
  const [mapQuery, setMapQuery] = useState('42+Maple+Avenue');
  
  const [showRecordsDropdown, setShowRecordsDropdown] = useState(false);
  const [showNotificationsDropdown, setShowNotificationsDropdown] = useState(false);

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFiles(Array.from(e.target.files));
    }
  };

  return (
    <div className="bg-surface text-on-surface min-h-screen">
      {/* SideNavBar */}
      <aside className="h-screen w-64 fixed left-0 top-0 hidden md:flex flex-col bg-slate-50 dark:bg-slate-900 border-r border-outline-variant/20 transition-all ease-in-out z-40">
        <div className="p-6 mt-4">
          <h1 className="text-xl font-black text-blue-900 dark:text-blue-50">Resident Portal</h1>
          <p className="text-xs text-on-surface-variant/70 font-bold uppercase tracking-widest mt-1">Sector 42 Ledger</p>
        </div>
        <nav className="flex flex-col p-4 space-y-2">
          <button onClick={() => onNavigate('resident')} className="flex w-full items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:text-blue-600 hover:translate-x-1 duration-200 font-sans text-sm font-medium text-left">
            <span className="material-symbols-outlined">dashboard</span>
            Dashboard
          </button>
          <button className="flex w-full items-center gap-3 px-4 py-3 text-blue-700 dark:text-blue-300 bg-white dark:bg-slate-800 shadow-sm border border-outline-variant/10 rounded-xl hover:translate-x-1 duration-200 font-sans text-sm font-bold text-left">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>assignment_late</span>
            Complaints
          </button>
          <button onClick={() => onNavigate('tracker')} className="flex w-full items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:text-blue-600 hover:translate-x-1 duration-200 font-sans text-sm font-medium text-left">
            <span className="material-symbols-outlined">timeline</span> Tracking
          </button>
        </nav>
        <div className="mt-auto p-4 mb-4">
          <div className="flex items-center gap-3 p-3 rounded-xl bg-surface-container-low border border-outline-variant/10 cursor-pointer hover:bg-surface-container transition-colors" onClick={() => onNavigate('login')}>
            <img alt="Resident Profile" className="w-10 h-10 rounded-full object-cover border border-outline-variant/20" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200" />
            <div className="overflow-hidden">
              <p className="text-sm font-bold truncate">John Doe</p>
              <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold truncate">Unit 402B</p>
            </div>
          </div>
        </div>
      </aside>

      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm dark:shadow-none md:pl-64 border-b border-outline-variant/10 md:border-none">
        <div className="flex justify-between items-center px-6 py-4 w-full">
          <div className="flex items-center gap-4">
            <span className="text-xl font-black tracking-tight text-blue-900 dark:text-blue-100 flex md:hidden">GrievX</span>
          </div>
          <div className="flex items-center gap-6 ml-auto">
            <div className="hidden lg:flex items-center gap-6 relative">
              <span 
                onClick={() => {
                  setShowRecordsDropdown(!showRecordsDropdown);
                  setShowNotificationsDropdown(false);
                }}
                className={`transition-colors text-sm font-bold cursor-pointer px-3 py-1.5 rounded-lg active:scale-95 ${showRecordsDropdown ? 'bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' : 'text-slate-500 dark:text-slate-400 hover:bg-blue-50 dark:hover:bg-blue-900/30'}`}
              >
                My Records
              </span>
              
              {/* My Records Dropdown */}
              {showRecordsDropdown && (
                <div className="absolute top-12 right-0 w-80 bg-surface-container-lowest border border-outline-variant/20 shadow-xl rounded-2xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="p-4 border-b border-outline-variant/10 bg-surface-container-low flex justify-between items-center">
                    <h3 className="font-bold text-sm text-on-surface">Recent Submissions</h3>
                    <button onClick={() => onNavigate('tracker')} className="text-[10px] uppercase tracking-widest font-bold text-primary hover:underline">View All</button>
                  </div>
                  <div className="divide-y divide-outline-variant/10 max-h-[300px] overflow-y-auto">
                    <div className="p-4 hover:bg-surface-container-low cursor-pointer transition-colors" onClick={() => onNavigate('tracker')}>
                      <div className="flex justify-between items-start mb-1">
                        <span className="text-xs font-bold text-on-surface">#GX-9942</span>
                        <span className="text-[10px] font-bold text-tertiary bg-tertiary/10 px-2 py-0.5 rounded-full">Resolved</span>
                      </div>
                      <p className="text-sm font-medium text-on-surface-variant truncate">Lighting issue at Central Park</p>
                      <p className="text-[10px] text-outline mt-2">Oct 24 • Electrical Dept</p>
                    </div>
                    <div className="p-4 hover:bg-surface-container-low cursor-pointer transition-colors" onClick={() => onNavigate('tracker')}>
                      <div className="flex justify-between items-start mb-1">
                        <span className="text-xs font-bold text-on-surface">#GX-9943</span>
                        <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">In Progress</span>
                      </div>
                      <p className="text-sm font-medium text-on-surface-variant truncate">Water pressure very low in Block A</p>
                      <p className="text-[10px] text-outline mt-2">Oct 26 • Plumbing Dept</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="flex items-center gap-3 text-slate-500 relative">
              <button 
                onClick={() => {
                  setShowNotificationsDropdown(!showNotificationsDropdown);
                  setShowRecordsDropdown(false);
                }}
                className={`active:scale-95 duration-200 p-2 rounded-full transition-colors group relative ${showNotificationsDropdown ? 'bg-surface-variant text-primary' : 'hover:bg-surface-variant'}`}
              >
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">notifications</span>
                <span className="absolute top-2 right-2.5 w-2 h-2 bg-error rounded-full border border-surface"></span>
              </button>
              
              {/* Notifications Dropdown */}
              {showNotificationsDropdown && (
                <div className="absolute top-12 right-12 w-80 bg-surface-container-lowest border border-outline-variant/20 shadow-xl rounded-2xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="p-4 border-b border-outline-variant/10 bg-surface-container-low flex justify-between items-center">
                    <h3 className="font-bold text-sm text-on-surface">Notifications</h3>
                    <span className="text-[10px] bg-primary text-on-primary px-2 py-0.5 rounded-full font-bold">2 New</span>
                  </div>
                  <div className="divide-y divide-outline-variant/10 max-h-[300px] overflow-y-auto">
                    <div className="p-4 hover:bg-surface-container-low cursor-pointer transition-colors bg-primary/5">
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 text-primary">
                          <span className="material-symbols-outlined text-sm">engineering</span>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-on-surface mb-0.5">Technician Assigned</p>
                          <p className="text-xs text-on-surface-variant leading-tight">Mike (Plumbing) has been assigned to your complaint #GX-9943.</p>
                          <p className="text-[10px] text-outline mt-1 font-bold">Just now</p>
                        </div>
                      </div>
                    </div>
                    <div className="p-4 hover:bg-surface-container-low cursor-pointer transition-colors bg-primary/5">
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-tertiary/20 flex items-center justify-center flex-shrink-0 text-tertiary">
                          <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                        </div>
                        <div>
                          <p className="text-xs font-bold text-on-surface mb-0.5">Complaint Resolved</p>
                          <p className="text-xs text-on-surface-variant leading-tight">Your complaint #GX-9942 has been marked as resolved.</p>
                          <p className="text-[10px] text-outline mt-1 font-bold">2 hours ago</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 border-t border-outline-variant/10 text-center bg-surface-container-lowest">
                    <button className="text-[11px] font-bold text-on-surface-variant hover:text-primary uppercase tracking-widest">Mark all as read</button>
                  </div>
                </div>
              )}
              
              <button onClick={() => onNavigate('login')} className="active:scale-95 duration-200 p-2 rounded-full hover:bg-surface-variant transition-colors text-on-surface-variant hover:text-primary">
                <span className="material-symbols-outlined">account_circle</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content Canvas */}
      <main className="pt-24 pb-24 md:pb-12 md:pl-64 min-h-screen relative">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 py-8">
          
          {/* Progress Indicator */}
          <div className="mb-12">
            <div className="flex justify-between items-end mb-4">
              <div>
                <h2 className="text-3xl font-black text-on-surface tracking-tight mb-1">Smart Complaint Creation</h2>
                <p className="text-on-surface-variant text-sm font-bold uppercase tracking-widest">Step 2 of 3: Proof & Location</p>
              </div>
              <span className="text-primary font-bold text-xs uppercase tracking-widest bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20">66% Complete</span>
            </div>
            <div className="h-2 bg-surface-container rounded-full overflow-hidden flex gap-1">
              <div className="h-full bg-primary flex-1 rounded-full"></div>
              <div className="h-full bg-primary flex-1 rounded-full"></div>
              <div className="h-full bg-surface-container-highest flex-1 rounded-full"></div>
            </div>
          </div>

          {/* Bento Form Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            
            {/* Step 1 Recap (Collapsed) */}
            <div className="md:col-span-4 space-y-6">
              <div className="bg-surface-container-lowest p-6 rounded-3xl border border-outline-variant/20 shadow-sm border-l-4 border-l-primary relative overflow-hidden group hover:shadow-md transition-all">
                <div className="absolute right-[-20px] top-[-20px] opacity-[0.03] group-hover:opacity-[0.06] transition-opacity">
                   <span className="material-symbols-outlined text-9xl">report_problem</span>
                </div>
                <label className="text-[10px] font-black uppercase tracking-[0.1em] text-primary mb-3 block">Current Issue</label>
                <h3 className="font-black text-lg text-on-surface leading-tight">Pothole on Maple Avenue</h3>
                <div className="mt-5 inline-flex items-center gap-2 bg-tertiary-fixed/30 text-tertiary px-3 py-1.5 flex items-center justify-center rounded-xl text-[11px] font-bold border border-tertiary/20">
                  <span className="material-symbols-outlined text-sm">category</span>
                  Road Infrastructure
                </div>
              </div>
              
              <div className="bg-surface-container-lowest p-6 rounded-3xl border border-outline-variant/20 shadow-sm">
                <h4 className="text-sm font-black text-on-surface uppercase tracking-widest mb-5 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-xl">lightbulb</span> Tips for Resolution
                </h4>
                <ul className="text-sm text-on-surface-variant font-medium space-y-4">
                  <li className="flex gap-3 items-start">
                    <span className="material-symbols-outlined text-base text-tertiary mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span> 
                    <span>Clear photos speed up processing by <strong className="text-primary">40%</strong></span>
                  </li>
                  <li className="flex gap-3 items-start">
                    <span className="material-symbols-outlined text-base text-tertiary mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span> 
                    <span>Precise location helps dispatch teams instantly</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Active Form Area */}
            <div className="md:col-span-8 space-y-8">
              
              {/* Section: Proof */}
              <section className="bg-surface-container-lowest p-8 md:p-10 rounded-3xl shadow-sm border border-outline-variant/20 relative overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8 pb-4 border-b border-outline-variant/20">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined">photo_camera</span>
                    </div>
                    <h3 className="text-xl font-black text-on-surface">Visual Evidence</h3>
                  </div>
                  <div 
                    onClick={handleBrowseClick}
                    className="border-2 border-dashed border-outline-variant/60 rounded-3xl p-12 text-center bg-surface hover:bg-surface-container-low hover:border-primary transition-all cursor-pointer group"
                  >
                    <input 
                      type="file" 
                      className="hidden" 
                      ref={fileInputRef} 
                      onChange={handleFileChange} 
                      multiple 
                      accept="image/png, image/jpeg, video/mp4" 
                    />
                    
                    {selectedFiles.length > 0 ? (
                      <div className="flex flex-col items-center animate-in fade-in zoom-in duration-300">
                        <span className="material-symbols-outlined text-5xl text-primary mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                        <p className="text-xl font-black text-on-surface mb-2">
                          {selectedFiles.length} file{selectedFiles.length !== 1 ? 's' : ''} ready
                        </p>
                        <div className="text-sm text-on-surface-variant font-medium bg-surface-container-highest/20 p-4 rounded-xl w-full max-w-sm overflow-hidden mb-6 mt-2 border border-outline-variant/20">
                          {selectedFiles.map((file, idx) => (
                            <div key={idx} className="flex items-center gap-3 mb-2 last:mb-0">
                               <span className="material-symbols-outlined text-tertiary">image</span>
                               <span className="truncate flex-1 text-left">{file.name}</span>
                            </div>
                          ))}
                        </div>
                        <button 
                          onClick={(e) => { e.stopPropagation(); setSelectedFiles([]); }}
                          className="bg-error/10 text-error px-6 py-2 rounded-xl text-xs font-black hover:bg-error hover:text-white duration-200 transition-colors uppercase tracking-widest shadow-sm"
                        >
                          Clear Selection
                        </button>
                      </div>
                    ) : (
                      <>
                        <span className="material-symbols-outlined text-5xl text-outline mb-4 group-hover:scale-110 group-hover:text-primary transition-all duration-300">cloud_upload</span>
                        <p className="text-base font-bold text-on-surface mb-1">Drag and drop images or videos</p>
                        <p className="text-xs text-on-surface-variant font-medium">Maximum file size: 25MB (PNG, JPG, MP4)</p>
                        <button className="mt-8 bg-surface-container-highest text-on-surface-variant hover:text-on-primary px-8 py-3 rounded-xl text-sm font-black hover:bg-primary duration-300 transition-colors uppercase tracking-widest shadow-sm">
                          Browse Files
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </section>

              {/* Section: Location */}
              <section className="bg-surface-container-lowest p-8 md:p-10 rounded-3xl shadow-sm border border-outline-variant/20">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-outline-variant/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined">location_on</span>
                    </div>
                    <h3 className="text-xl font-black text-on-surface">Pinpoint Location</h3>
                  </div>
                  <button 
                    onClick={() => {
                      setIsLocating(true);
                      setTimeout(() => {
                        setIsLocating(false);
                        setAddress('Central Park, South Avenue, NY');
                        setMapQuery('Central+Park+New+York');
                      }, 2000);
                    }}
                    disabled={isLocating}
                    className="text-primary text-[11px] font-black uppercase tracking-widest flex items-center gap-1.5 hover:underline bg-primary/5 px-4 py-2 rounded-full border border-primary/20 transition-all hover:bg-primary/10 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLocating ? (
                       <span className="material-symbols-outlined text-[14px] animate-spin">autorenew</span>
                    ) : (
                       <span className="material-symbols-outlined text-[14px]">my_location</span>
                    )}
                    {isLocating ? 'Locating...' : 'Use Current Location'}
                  </button>
                </div>
                <div className="h-72 bg-surface-container-low rounded-3xl overflow-hidden relative group border border-outline-variant/30">
                  <iframe 
                    width="100%" 
                    height="100%" 
                    frameBorder="0" 
                    scrolling="no" 
                    marginHeight={0} 
                    marginWidth={0} 
                    src={`https://maps.google.com/maps?q=${mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                    className="w-full h-full object-cover transition-opacity duration-300"
                    style={{ opacity: isLocating ? 0.3 : 1 }}
                  ></iframe>
                  
                  {isLocating && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-surface/50 backdrop-blur-sm z-10">
                       <span className="material-symbols-outlined text-primary text-5xl animate-spin mb-2 w-12 h-12 flex items-center justify-center">autorenew</span>
                       <span className="text-primary font-black uppercase tracking-widest text-sm bg-surface px-4 py-2 rounded-full shadow-sm">Finding GPS Signal...</span>
                    </div>
                  )}

                  {!isLocating && (
                    <div className="absolute bottom-5 left-5 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-outline-variant/20 z-10 pointer-events-none">
                      <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-1 items-center flex gap-1"><span className="material-symbols-outlined text-[12px]">push_pin</span> Selected Address</p>
                      <p className="text-sm font-bold text-on-surface">{address}</p>
                    </div>
                  )}
                </div>
              </section>

              {/* Section: Details & Priority */}
              <section className="bg-surface-container-lowest p-8 md:p-10 rounded-3xl shadow-sm border border-outline-variant/20">
                 <div className="flex items-center gap-3 mb-8 pb-4 border-b border-outline-variant/20">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">priority_high</span>
                  </div>
                  <h3 className="text-xl font-black text-on-surface">Priority & Details</h3>
                </div>
                
                <div className="mb-10">
                  <label className="text-[11px] font-black uppercase tracking-widest text-on-surface-variant mb-4 block">Urgency Level</label>
                  <div className="grid grid-cols-3 gap-4">
                    <button 
                      onClick={() => setUrgency('low')}
                      className={`flex flex-col items-center justify-center py-4 px-2 rounded-2xl border-2 transition-all group cursor-pointer relative overflow-hidden ${
                        urgency === 'low' 
                          ? 'border-tertiary bg-tertiary/10 shadow-sm z-10 scale-105' 
                          : 'border-outline-variant/40 bg-surface hover:border-tertiary hover:bg-tertiary/5'
                      }`}
                    >
                      {urgency === 'low' && <div className="absolute inset-x-0 -top-1 h-1 bg-tertiary blur"></div>}
                      <span className={`text-sm font-black uppercase tracking-widest ${
                        urgency === 'low' ? 'text-tertiary' : 'text-on-surface-variant group-hover:text-tertiary'
                      }`}>Low</span>
                    </button>
                    <button 
                      onClick={() => setUrgency('medium')}
                      className={`flex flex-col items-center justify-center py-4 px-2 rounded-2xl border-2 transition-all group cursor-pointer relative overflow-hidden ${
                        urgency === 'medium' 
                          ? 'border-primary bg-primary/10 shadow-sm z-10 scale-105' 
                          : 'border-outline-variant/40 bg-surface hover:border-primary hover:bg-primary/5'
                      }`}
                    >
                      {urgency === 'medium' && <div className="absolute inset-x-0 -top-1 h-1 bg-primary blur"></div>}
                      <span className={`text-sm font-black uppercase tracking-widest ${
                        urgency === 'medium' ? 'text-primary' : 'text-on-surface-variant group-hover:text-primary'
                      }`}>Medium</span>
                    </button>
                    <button 
                      onClick={() => setUrgency('high')}
                      className={`flex flex-col items-center justify-center py-4 px-2 rounded-2xl border-2 transition-all group cursor-pointer relative overflow-hidden ${
                        urgency === 'high' 
                          ? 'border-error bg-error/10 shadow-sm z-10 scale-105' 
                          : 'border-outline-variant/40 bg-surface hover:border-error hover:bg-error/5'
                      }`}
                    >
                      {urgency === 'high' && <div className="absolute inset-x-0 -top-1 h-1 bg-error blur"></div>}
                      <span className={`text-sm font-black uppercase tracking-widest ${
                        urgency === 'high' ? 'text-error' : 'text-on-surface-variant group-hover:text-error'
                      }`}>High</span>
                    </button>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <label className="text-[11px] font-black uppercase tracking-widest text-on-surface-variant block">Detailed Description</label>
                  <textarea className="w-full bg-surface-container-low border border-transparent focus:border-primary focus:ring-1 focus:ring-primary rounded-2xl p-5 text-base min-h-[140px] transition-all resize-none font-medium placeholder:text-outline-variant text-on-surface shadow-inner" placeholder="Describe the severity and impact on the neighborhood..."></textarea>
                </div>
              </section>

            </div>
          </div>
          
          {/* Sticky Bottom Actions */}
          <div className="mt-14 flex flex-col-reverse md:flex-row items-center justify-between gap-6 pb-12">
            <button onClick={() => onNavigate('resident')} className="w-full md:w-auto px-8 py-4 rounded-xl font-bold text-primary hover:bg-primary/10 transition-colors flex items-center justify-center gap-2 border border-transparent hover:border-primary/20">
              <span className="material-symbols-outlined">arrow_back</span>
              Back to Dashboard
            </button>
            <div className="flex flex-col md:flex-row w-full md:w-auto gap-4">
              <button onClick={() => onNavigate('tracker')} className="w-full md:w-auto bg-primary text-on-primary px-10 py-4 rounded-xl text-lg font-black shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:scale-[0.98] transition-all flex items-center justify-center gap-3 group">
                Submit Grievance
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">send</span>
              </button>
            </div>
          </div>

        </div>
      </main>

      {/* BottomNavBar (Mobile) */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pt-3 pb-6 bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl md:hidden z-50 border-t border-outline-variant/20">
        <button onClick={() => onNavigate('resident')} className="flex flex-col items-center justify-center text-slate-500 hover:text-blue-600 transition-colors w-16">
          <span className="material-symbols-outlined text-2xl">home</span>
          <span className="text-[10px] font-bold uppercase tracking-wider mt-1">Home</span>
        </button>
        <button className="flex flex-col items-center justify-center text-blue-700 bg-blue-50/80 rounded-xl px-5 py-2 transition-colors w-20 shadow-sm border border-outline-variant/10">
          <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>chat_bubble</span>
          <span className="text-[10px] font-bold uppercase tracking-wider mt-1">Issues</span>
        </button>
        <button onClick={() => onNavigate('tracker')} className="flex flex-col items-center justify-center text-slate-500 hover:text-blue-600 transition-colors w-16">
          <span className="material-symbols-outlined text-2xl">query_stats</span>
          <span className="text-[10px] font-bold uppercase tracking-wider mt-1">Track</span>
        </button>
        <button className="flex flex-col items-center justify-center text-slate-500 hover:text-blue-600 transition-colors w-16">
          <span className="material-symbols-outlined text-2xl">person</span>
          <span className="text-[10px] font-bold uppercase tracking-wider mt-1">Profile</span>
        </button>
      </nav>
    </div>
  );
}
