import Image from 'next/image'
import ContactMenu from '../buttons'

export default function Services() {
    return (
        <> 
        {/* Adjusted spacing to avoid content overflows and keep the grid balanced */}
        <main className="flex-1 p-1 md:p-1 lg:p-0 flex flex-col justify-between max-w-6xl mx-auto w-full lg:pl-[60px]">
            
            {/* PERFECTLY CENTERED HEADER BLOCK */}
            <header className="text-center border-b border-slate-200 pb-3 w-full mb-4">
                <h1 className="text-xl md:text-2xl font-black text-slate-800 tracking-tight uppercase">
                    Machine Reconditioning
                </h1>
                <p className="text-xs text-slate-500 font-semibold tracking-wide uppercase mt-0.5">
                    CNC India retrofitting, maintenance, and system upgrades
                </p>
            </header>

            {/* INTEGRATED SERVICE CONTENT GRID */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center w-full">
              
                {/* LEFT COLUMN: HERO MACHINE MEDIA CONTAINER */}
                <div className="lg:col-span-5 w-full flex items-center justify-center">
                    {/* Fixed aspect-square ratio ensures the left element never forces an infinite vertical push */}
                    <div className="overflow-hidden rounded-2xl bg-slate-100 shadow-sm border border-slate-200 aspect-square relative w-full max-w-[360px] lg:max-w-full group">
                        <Image
                            src="/CNC.jpg" 
                            alt="COOPER-HC 500 Machine Setup"
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-102"
                            priority
                        />
                    </div>
                </div>

                {/* RIGHT COLUMN: PROFESSIONAL TECHNICAL DESCRIPTION CARD */}
                <div className="lg:col-span-7 bg-white p-6 rounded-2xl shadow-sm border border-slate-200/60 flex flex-col justify-between w-full h-full">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col">
                            <span className="text-xs font-bold text-red-600 uppercase tracking-widest mb-0.5">
                                Performance Tuning
                            </span>
                            <h2 className="text-lg md:text-xl font-black tracking-tight uppercase text-slate-900">
                                Engineering & Retrofitting
                            </h2>
                        </div>
                        
                        <div className="space-y-3 text-slate-600 leading-relaxed text-xs md:text-sm font-normal text-justify">
                            <p>
                                CNC India recognizes the efforts & investment that our customers have put in their Machinery and Equipment. We have solutions for older and used machinery to bring it back to life and up to par to meet the modern needs of Industry.
                            </p>
                            <div className="border-l-4 border-slate-800 pl-3 italic text-slate-500 bg-slate-50/50 p-2.5 rounded-r-lg">
                                <p className="leading-normal">
                                    Retrofit activities include replacing existing controls with latest generation systems, replacing feedback measurement devices, lubrication paths, ball screws, motors, and electrical wiring.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Action Button: Now entirely visible at all times with no overflow scrollbars */}
                    {/* <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-start">
                        <button className="px-5 py-2.5 bg-[#1e293b] text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow hover:bg-[#334155] active:scale-98 transition-all cursor-pointer">
                            Request Quotation
                        </button>
                        <ContactMenu />
                    </div> */}
                    {/* RESTRUCTURED ACTION ROW WITH VERTICAL LINE SEPARATOR */}
<div className="mt-8 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4 w-full">
    
    {/* Left Zone: Primary Action Button */}
    <div className="flex-1 min-w-[160px]">
        <button className="h-11 px-5 py-2.5 bg-[#1e293b] text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow hover:bg-[#334155] active:scale-98 transition-all cursor-pointer w-fit">
            Request Quotation
        </button>
    </div>

    {/* Center Zone: Sleek Vertical Divider Line */}
    {/* hidden on small screens so elements stack nicely, visible as a line on lg viewports */}
    <div className="hidden sm:block h-8 w-[1px] bg-slate-200 mx-4" aria-hidden="true" />

    {/* Right Zone: Your Unchanged Contact Menu */}
    <div className="flex items-center justify-end">
        <ContactMenu />
    </div>

</div>

        </div>

            </section>

            {/* LOWER PAGINATION CONTROLS */}
            <footer className="flex items-center justify-center gap-4 pt-6 pb-2">
                <button className="w-10 h-10 rounded-full bg-[#1e293b] text-white flex items-center justify-center shadow-md hover:bg-slate-700 transition-all active:scale-95 cursor-pointer" aria-label="Previous Service">
                    <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                </button>
                <button className="w-10 h-10 rounded-full bg-[#1e293b] text-white flex items-center justify-center shadow-md hover:bg-slate-700 transition-all active:scale-95 cursor-pointer" aria-label="Next Service">
                    <svg xmlns="http://w3.org" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                </button>
            </footer>

        </main>
        </>
    )
}
