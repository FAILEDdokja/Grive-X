import React, { useState } from 'react';

export default function ComplaintFeedback({ onNavigate }: { onNavigate: (path: string) => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitting(true);
    // Simulate network delay
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        onNavigate('resident');
      }, 1500);
    }, 1000);
  };

  return (
    <div className="bg-surface text-on-surface min-h-screen font-sans">
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-md flex justify-between items-center px-6 py-3 shadow-sm dark:shadow-none border-b border-outline-variant/20 md:border-none">
        <div className="flex items-center gap-4">
          <span className="text-xl font-black tracking-tight text-blue-900 dark:text-blue-100">GrievX</span>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center bg-surface-container-low px-4 py-1.5 rounded-full border border-outline-variant/20 focus-within:ring-2 focus-within:ring-primary/20">
            <span className="material-symbols-outlined text-outline text-sm">search</span>
            <input className="bg-transparent border-none focus:ring-0 focus:outline-none text-sm ml-2 w-48 text-on-surface placeholder:text-outline" placeholder="Search records..." type="text"/>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-full hover:bg-surface-variant transition-colors active:scale-95 duration-200">
              <span className="material-symbols-outlined text-on-surface-variant">notifications</span>
            </button>
            <button onClick={() => onNavigate('login')} className="p-2 rounded-full hover:bg-surface-variant transition-colors active:scale-95 duration-200" title="Logout">
              <span className="material-symbols-outlined text-on-surface-variant">logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* SideNavBar */}
      <aside className="h-screen w-64 fixed left-0 top-0 hidden md:flex flex-col bg-slate-100 dark:bg-slate-800/50 pt-20 border-r border-outline-variant/20">
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
          <button className="w-full bg-primary text-on-primary py-3 rounded-xl font-bold flex items-center justify-center gap-2 shadow-sm active:scale-95 transition-all">
            <span className="material-symbols-outlined">add</span>
            Submit Grievance
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-2">
          <button onClick={() => onNavigate('resident')} className="flex w-full items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-all ease-in-out font-sans text-sm font-medium text-left">
            <span className="material-symbols-outlined">dashboard</span> Dashboard
          </button>
          <button className="flex w-full items-center gap-3 px-4 py-3 text-blue-700 dark:text-blue-300 bg-white dark:bg-slate-800 shadow-sm border border-outline-variant/10 rounded-xl transition-all ease-in-out font-sans text-sm font-bold text-left">
            <span className="material-symbols-outlined">assignment_late</span> Complaints
          </button>
          <button onClick={() => onNavigate('tracker')} className="flex w-full items-center gap-3 px-4 py-3 text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-all ease-in-out font-sans text-sm font-medium text-left">
            <span className="material-symbols-outlined">timeline</span> Tracking
          </button>
        </nav>
      </aside>

      {/* Main Content Canvas */}
      <main className="md:ml-64 pt-24 pb-12 px-6 min-h-screen">
        <div className="max-w-5xl mx-auto">
          {/* Success Hero Section */}
          <div className="relative overflow-hidden rounded-[2rem] mb-10 p-10 bg-surface-container-low border border-outline-variant/20 shadow-sm flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-center md:text-left z-10">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
                <span className="material-symbols-outlined text-sm mr-1.5" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span> Resolved
              </div>
              <h1 className="text-4xl md:text-5xl font-black text-on-surface tracking-tight mb-4 leading-tight">Complaint #GX-9942 Resolved</h1>
              <p className="text-on-surface-variant max-w-lg leading-relaxed text-lg">
                The lighting maintenance issue at Central Park North has been successfully addressed by the technical team. Your participation drives communal excellence.
              </p>
            </div>
            <div className="w-48 h-48 md:w-72 md:h-72 flex-shrink-0 z-10 rounded-2xl overflow-hidden shadow-lg border-4 border-surface-container-lowest">
              <img alt="Resolved Illustration" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" />
            </div>
          </div>

          {/* Feedback Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Rating Card */}
            <div className="md:col-span-5 bg-surface-container-lowest p-8 rounded-3xl shadow-sm border border-outline-variant/20 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold text-on-surface mb-3">Rate your experience</h2>
                <p className="text-base text-on-surface-variant mb-10 leading-relaxed">How would you describe the speed and quality of our response to this grievance?</p>
                <div className="flex justify-between items-center px-2">
                  <button className="flex flex-col items-center group">
                    <span className="material-symbols-outlined text-4xl text-outline-variant group-hover:text-primary transition-colors" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="text-[10px] mt-3 font-bold text-outline-variant uppercase tracking-widest group-hover:text-primary">Poor</span>
                  </button>
                  <button className="flex flex-col items-center group">
                    <span className="material-symbols-outlined text-4xl text-outline-variant group-hover:text-primary transition-colors" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="text-[10px] mt-3 font-bold text-outline-variant uppercase tracking-widest group-hover:text-primary">Fair</span>
                  </button>
                  <button className="flex flex-col items-center group">
                    <span className="material-symbols-outlined text-4xl text-outline-variant group-hover:text-primary transition-colors" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="text-[10px] mt-3 font-bold text-outline-variant uppercase tracking-widest group-hover:text-primary">Good</span>
                  </button>
                  <button className="flex flex-col items-center group">
                    <span className="material-symbols-outlined text-4xl text-outline-variant group-hover:text-primary transition-colors" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="text-[10px] mt-3 font-bold text-outline-variant uppercase tracking-widest group-hover:text-primary">Great</span>
                  </button>
                  <button className="flex flex-col items-center group transform scale-110">
                    <span className="material-symbols-outlined text-5xl text-secondary-container drop-shadow-md" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                    <span className="text-[11px] mt-2 font-black text-secondary-container uppercase tracking-widest">Excellent</span>
                  </button>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-outline-variant/20 text-center">
                <p className="text-on-surface font-bold italic text-sm">"Your feedback makes the society better."</p>
              </div>
            </div>

            {/* Detailed Feedback Card */}
            <div className="md:col-span-7 bg-surface-container-low p-8 rounded-3xl border border-outline-variant/20 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold text-on-surface">Detailed Feedback</h2>
                  <span className="text-[11px] bg-surface-container-lowest px-3 py-1.5 rounded-md font-bold text-on-surface-variant uppercase tracking-widest border border-outline-variant/20">Optional</span>
                </div>
                <div className="space-y-6">
                  <div>
                    <label className="block text-[11px] font-black text-on-surface-variant uppercase tracking-widest mb-3">Message for the Department</label>
                    <textarea 
                      className="w-full bg-surface-container-lowest rounded-2xl border border-outline-variant/30 p-5 text-on-surface placeholder:text-outline-variant focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none min-h-[140px] text-base" 
                      placeholder="Was the technician helpful? Did the resolution meet your expectations?"
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="mt-6">
                  <div className="flex items-center space-x-3 bg-surface-container-highest/40 p-5 rounded-2xl mb-6 border border-outline-variant/10">
                    <span className="material-symbols-outlined text-primary text-2xl">verified_user</span>
                    <span className="text-sm text-on-surface-variant font-medium">Feedback will be shared anonymously with the maintenance team.</span>
                  </div>
                  <button 
                    onClick={handleSubmit}
                    disabled={isSubmitting || isSubmitted}
                    className={`w-full py-4 flex items-center justify-center gap-2 rounded-xl font-bold text-lg shadow-md transition-all ${
                      isSubmitted 
                        ? 'bg-tertiary text-on-tertiary cursor-not-allowed' 
                        : 'bg-primary text-on-primary hover:bg-primary/95 active:scale-[0.98]'
                    }`}
                  >
                    {isSubmitting && (
                      <span className="material-symbols-outlined animate-spin text-lg">autorenew</span>
                    )}
                    {!isSubmitting && isSubmitted && (
                      <span className="material-symbols-outlined text-lg">check_circle</span>
                    )}
                    {isSubmitting ? 'Submitting...' : isSubmitted ? 'Review Submitted!' : 'Submit Review'}
                  </button>
              </div>
            </div>
          </div>

          {/* Resolution Context Footer */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 md:p-8 rounded-3xl bg-surface-container-lowest border border-outline-variant/20 flex flex-col items-start shadow-sm">
              <div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-on-surface">schedule</span>
              </div>
              <h4 className="font-black text-[11px] uppercase tracking-widest text-on-surface-variant mb-1">Resolution Time</h4>
              <p className="text-2xl font-black text-primary">14h 22m</p>
            </div>
            <div className="p-6 md:p-8 rounded-3xl bg-surface-container-lowest border border-outline-variant/20 flex flex-col items-start shadow-sm">
              <div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-on-surface">engineering</span>
              </div>
              <h4 className="font-black text-[11px] uppercase tracking-widest text-on-surface-variant mb-1">Department</h4>
              <p className="text-2xl font-black text-primary">Electrical & Power</p>
            </div>
            <div className="p-6 md:p-8 rounded-3xl bg-surface-container-lowest border border-outline-variant/20 flex flex-col items-start shadow-sm">
              <div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-on-surface">location_on</span>
              </div>
              <h4 className="font-black text-[11px] uppercase tracking-widest text-on-surface-variant mb-1">Location</h4>
              <p className="text-2xl font-black text-primary">Sector 42, Park N.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
