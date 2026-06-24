'use client'

export default function Spares() {
    return <><main className="flex-1 p-6 md:p-8 flex flex-col gap-8 max-w-6xl w-full mx-auto">
    
   
    <div className="w-full relative shadow-sm rounded-2xl overflow-hidden bg-white">
      <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none text-slate-400">
      
        <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.603 10.603Z" />
        </svg>
      </div>
      <input 
        type="text" 
        placeholder="Search for precision spare parts..." 
        className="w-full pl-12 pr-4 py-4 text-base font-medium placeholder-slate-400 text-slate-800 bg-white border border-transparent focus:outline-none rounded-2xl transition-all"
      />
    </div>

  
    <section className="grid grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
      

      <div className="bg-white aspect-[4/5] rounded-[24px] shadow-sm hover:shadow-md transition-all duration-200 p-4 border border-slate-100 flex flex-col items-center justify-center group cursor-pointer">
        <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">⚙️</div>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider text-center">Part Box Placeholder</p>
      </div>

      <div className="bg-white aspect-[4/5] rounded-[24px] shadow-sm hover:shadow-md transition-all duration-200 p-4 border border-slate-100 flex flex-col items-center justify-center group cursor-pointer">
        <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">⚙️</div>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider text-center">Part Box Placeholder</p>
      </div>

  
      <div className="bg-white aspect-[4/5] rounded-[24px] shadow-sm hover:shadow-md transition-all duration-200 p-4 border border-slate-100 flex flex-col items-center justify-center group cursor-pointer">
        <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">⚙️</div>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider text-center">Part Box Placeholder</p>
      </div>

      <div className="bg-white aspect-[4/5] rounded-[24px] shadow-sm hover:shadow-md transition-all duration-200 p-4 border border-slate-100 flex flex-col items-center justify-center group cursor-pointer">
        <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">⚙️</div>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider text-center">Part Box Placeholder</p>
      </div>


      <div className="bg-white aspect-[4/5] rounded-[24px] shadow-sm hover:shadow-md transition-all duration-200 p-4 border border-slate-100 flex flex-col items-center justify-center group cursor-pointer">
        <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">⚙️</div>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider text-center">Part Box Placeholder</p>
      </div>

   
      <div className="bg-white aspect-[4/5] rounded-[24px] shadow-sm hover:shadow-md transition-all duration-200 p-4 border border-slate-100 flex flex-col items-center justify-center group cursor-pointer">
        <div className="text-4xl mb-2 group-hover:scale-110 transition-transform">⚙️</div>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider text-center">Part Box Placeholder</p>
      </div>

    </section>

    <div className="flex items-center justify-center gap-4 py-2">
    
      <button className="w-12 h-12 rounded-full bg-[#1e293b] text-white flex items-center justify-center shadow-md hover:bg-slate-700 transition-all active:scale-95 cursor-pointer" aria-label="Previous Page">
        <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
      </button>
  
      <button className="w-12 h-12 rounded-full bg-[#1e293b] text-white flex items-center justify-center shadow-md hover:bg-slate-700 transition-all active:scale-95 cursor-pointer" aria-label="Next Page">
        <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
        </svg>
      </button>
    </div>

  </main>
</>;
}