import React from 'react';

export default function Login({ onLogin }: { onLogin: (role: string) => void }) {
  return (
    <div className="bg-surface text-on-surface min-h-screen flex flex-col">
      <main className="flex-grow flex flex-col md:flex-row min-h-screen">
        <section className="md:w-7/12 lg:w-3/5 bg-surface-container-low p-8 md:p-16 flex flex-col justify-center relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-secondary-container/5 rounded-full blur-2xl"></div>
          <div className="relative z-10 max-w-2xl">
            <div className="mb-12">
              <span className="text-primary font-black text-3xl tracking-tighter uppercase">GrievX</span>
              <div className="h-1 w-12 bg-secondary-container mt-1"></div>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-on-surface leading-tight tracking-tight mb-6">
              Welcome to GrievX: Your Society's <span className="text-liquid-gradient">Ledger for Accountability.</span>
            </h1>
            <p className="text-lg md:text-xl text-on-surface-variant mb-12 font-medium leading-relaxed max-w-xl">
              A high-fidelity operating system for civic action. Experience transparency through data-driven governance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-surface-container-lowest p-6 rounded-xl border-b-2 border-transparent hover:border-primary transition-all duration-300">
                <span className="material-symbols-outlined text-primary mb-4">account_balance</span>
                <h3 className="text-on-surface font-bold text-sm uppercase tracking-wider mb-2">Transparency</h3>
                <p className="text-on-surface-variant text-sm leading-snug">Public ledger of all community requests and resolutions.</p>
              </div>
              <div className="bg-surface-container-lowest p-6 rounded-xl border-b-2 border-transparent hover:border-primary transition-all duration-300">
                <span className="material-symbols-outlined text-primary mb-4">speed</span>
                <h3 className="text-on-surface font-bold text-sm uppercase tracking-wider mb-2">SLA Tracking</h3>
                <p className="text-on-surface-variant text-sm leading-snug">Real-time monitoring of response times and efficiency.</p>
              </div>
              <div className="bg-surface-container-lowest p-6 rounded-xl border-b-2 border-transparent hover:border-primary transition-all duration-300">
                <span className="material-symbols-outlined text-primary mb-4">verified</span>
                <h3 className="text-on-surface font-bold text-sm uppercase tracking-wider mb-2">Resolution</h3>
                <p className="text-on-surface-variant text-sm leading-snug">Verified completion protocols for every submitted grievance.</p>
              </div>
            </div>
          </div>
          <div className="mt-16 md:absolute md:bottom-12 md:left-16 flex items-center gap-4">
            <div className="flex -space-x-3">
              <img className="w-10 h-10 rounded-full border-2 border-surface-container-lowest object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3vwegmKxB-IuAtuQc-9rYUKjF6qRIWp6Z--MBcY0YmbK4_nqX0hTCDBOXWMBPw8CTMRlRF65FlotmsI__Qvy3l0b6ZBclG7M7p8WtfuRn_apqDtiB3FmCPOQuXLKY2q3utmjfWNd7MbQuzaNIG87CKk3_i5oa0q7WvD-A1903ELStpTikGZpgxnwmLzJBnp-l_PwWaFK9y7oEKSXQZ1PpWRykJBV-H6NuCbqUOSBqEOatcSMCLxe5xt7-KLZiuP7dyrxDNOl2OLmJ" alt="Resident" />
              <img className="w-10 h-10 rounded-full border-2 border-surface-container-lowest object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbDcshh2wvpPlK2UGYnXqyFEmFbGNzfaiExrQ3zlzjnB2ONftwtEhHH1EHONfT5k2MOr0emagd448YX9Eg_VuZheZI9081GVlWgoGolxBnIMY_DWrtEbt-oTD0Dzl06_jdulhTjI6IO4uRMnyh2wL6TT-AKJdhk7lvVXOnEyPR_0E4c7cRmwIG9l0WEkb8gqAklNxtYEkC9s3bilWAJP-_hb7a_Q27BiBoAkstTXQzI5LI7h060aPbpCDwH87Vs4UF9HY7fCv87ryc" alt="Resident" />
              <img className="w-10 h-10 rounded-full border-2 border-surface-container-lowest object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJ1KboTmSSTp8OVdyQUtlzomN9FTkVj9nH5Tgq0HQsi-J4Y3qDN-U2MVVlvXVgkuQruRcOM4RabI3AOHMJwBAS22lvR3-p43yXodCdbGIIMwda6McMVdJSk2viFGmc3W8qh_Aj7Gc5gKfS-1KvlXFFfNyP1qgP_ofmy87b7KvmzSXN9XTe0pxIvpcl4xmzNI3WZPg26j_HV4qdS7vg9IeNXlxQceOVsRRNWfNP56PZJqVprqhSx-2-vw9FNAsT8OIqjyuzYh0yq6ap" alt="Resident" />
            </div>
            <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Trusted by 2,400+ Residents</p>
          </div>
        </section>
        
        <section className="md:w-5/12 lg:w-2/5 bg-surface-container-lowest flex items-center justify-center p-8 border-l border-outline-variant/20">
          <div className="w-full max-w-md">
            <div className="mb-10 text-center md:text-left">
              <h2 className="text-2xl font-bold text-on-surface mb-2">Portal Access</h2>
              <p className="text-on-surface-variant">Enter your registered credentials to access the ledger.</p>
            </div>
            <form className="space-y-8" onSubmit={(e) => { e.preventDefault(); onLogin('resident'); }}>
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant px-1" htmlFor="phone">Phone Number</label>
                <div className="relative">
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 text-on-surface-variant font-medium pl-2">+91</span>
                  <input className="w-full bg-surface-container-low border-0 border-b-2 border-transparent focus:border-primary focus:ring-0 py-4 pl-12 pr-4 text-on-surface font-semibold text-lg transition-all rounded-t-lg" id="phone" placeholder="00000 00000" type="tel" />
                </div>
              </div>
              <div className="space-y-6">
                <button type="submit" className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary py-4 rounded-xl font-bold text-lg shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5 active:scale-95 transition-all flex justify-center items-center gap-2">
                  Request OTP
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
                
                <div className="relative flex items-center py-2">
                  <div className="flex-grow border-t border-outline-variant/30"></div>
                  <span className="flex-shrink mx-4 text-xs font-bold text-outline uppercase tracking-widest">Or Demo As</span>
                  <div className="flex-grow border-t border-outline-variant/30"></div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <button onClick={() => onLogin('admin')} className="bg-surface-container-high text-on-primary-fixed-variant py-3 px-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-surface-variant transition-colors" type="button">
                    <span className="material-symbols-outlined text-lg">admin_panel_settings</span>
                    Admin
                  </button>
                  <button onClick={() => onLogin('resident')} className="bg-surface-container-high text-on-primary-fixed-variant py-3 px-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-surface-variant transition-colors" type="button">
                    <span className="material-symbols-outlined text-lg">person</span>
                    Resident
                  </button>
                </div>
              </div>
            </form>
            <div className="mt-12 p-6 rounded-2xl bg-surface-container-low/50">
              <div className="flex items-start gap-4">
                <div className="bg-secondary-fixed p-2 rounded-lg">
                  <span className="material-symbols-outlined text-on-secondary-fixed">info</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-on-surface mb-1 uppercase tracking-tight">First-time resident?</p>
                  <p className="text-xs text-on-surface-variant leading-relaxed">Please contact your Block Administrator to register your phone number for digital ledger access.</p>
                </div>
              </div>
            </div>
            <div className="mt-12 text-center">
              <a className="text-primary-fixed-variant font-bold text-xs uppercase tracking-widest hover:underline decoration-2 underline-offset-4 opacity-70 hover:opacity-100 transition-opacity" href="#">Privacy Protocol & Legal Terms</a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
