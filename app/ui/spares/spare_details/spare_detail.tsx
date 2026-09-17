'use client'
import Image from "next/image"
import ContactMenu from "../../buttons"

export default function SpareDetail() {
    return <>
  
  <main className="flex-1 p-4 md:p-8 flex items-center justify-center max-w-6xl w-full mx-auto">
    
   
    <div className="bg-white w-full rounded-[32px] shadow-2xl border border-slate-100 overflow-hidden flex flex-col justify-between">
      
    
      <div className="flex flex-col lg:flex-row w-full">
        

        <div className="w-full lg:w-[62%] p-6 lg:p-8 flex items-center justify-center bg-slate-50 border-b lg:border-b-0 lg:border-r border-slate-200/60 min-h-[320px] lg:min-h-[460px]">
          <div className="w-full h-full max-w-lg overflow-hidden rounded-2xl shadow-sm">
            <Image 
              src="/spare_part1.jpg" 
              alt="BRG-720 Precision Machine Component" 
              className="w-full h-full object-cover aspect-[3/2]"
              height={194}
              width={259}
            />
          </div>
        </div>

      
        <div className="w-full lg:w-[38%] flex flex-col justify-between">
          
         
          <div className="p-6 lg:p-8 border-b border-slate-200/60 flex-1">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-black tracking-tight text-[#1e293b]">BRG-720 Bearing</h2>
              <span className="bg-[#e2e8f0] text-[#1e293b] font-black px-3 py-1 rounded-xl text-sm whitespace-nowrap">Rs. 500</span>
            </div>

            <div className="mb-4">
              <h3 className="text-xs font-black uppercase tracking-wider text-slate-400 mb-1">Technical Specifications</h3>
              <div className="w-12 h-[3px] bg-red-600 rounded-full"></div>
            </div>
            
          
            <ul className="space-y-2.5 text-sm text-slate-600 font-medium">
              <li className="flex items-center gap-2">
                <span className="text-[#dc2626] font-bold">•</span> <span><strong>Material:</strong> Reinforced Tool Steel</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#dc2626] font-bold">•</span> <span><strong>Core Diameter:</strong> 20mm Standard Fit</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#dc2626] font-bold">•</span> <span><strong>Compatibility:</strong> HD CCTV Rotators</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#dc2626] font-bold">•</span> <span><strong>Load Rating:</strong> High-Velocity Grade</span>
              </li>
            </ul>
          </div>

        
          <div className="p-6 lg:p-8 bg-slate-50/50 flex gap-4 items-stretch">
            
           
            <div className="flex-1 flex flex-col gap-3 justify-center">
             
              <div className="flex items-center justify-center lg:justify-start gap-3">
              
                <ContactMenu />
              </div>
            </div>

           
            <div className="w-16 bg-white border border-slate-200/80 rounded-2xl shadow-sm flex items-center justify-center shrink-0">
              <button className="w-12 h-12 rounded-xl bg-white border border-slate-100 text-red-500 flex items-center justify-center text-xl hover:bg-red-50 transition-all duration-200 active:scale-95 cursor-pointer" title="Save to local wishlist">
                ❤️
              </button>
            </div>

          </div>

        </div>
      </div>

      <footer className="w-full bg-[#1e293b] text-white px-6 py-4 text-center text-xs font-semibold tracking-wide border-t border-slate-800">
        Notice: We do not sell online as of now. These items are exclusively available at our physical store. Please contact us directly using the shortcuts above to verify real-time stock or request item bookings.
      </footer>

    </div>
  </main>
</>
}