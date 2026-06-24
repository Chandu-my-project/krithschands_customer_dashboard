// import Image from 'next/image'

// export default function Home() {
//     return <> <main className="flex-1 p-6 md:p-2 flex flex-col gap-6 max-w-7xl mx-auto w-full pl-[120px]">
    
//     <header className="flex flex-col lg:flex-row items-center gap-6 justify-between">
    
//       <div className="flex-1 bg-[#94a3b8] text-center p-6 md:p-2 rounded-xl shadow-sm max-w-3xl w-full">
//         <h1 className="font-brand text-4xl md:text-5xl tracking-normal mb-2 text-slate-900">
//           Krith<span className="text-red-600">S</span>Chand<span className="text-red-600">S</span>
//         </h1>
//         <p className="text-white text-xs max-w-lg mx-auto font-bold leading-relaxed uppercase tracking-wider opacity-90">
//          Machine Tools  Services<br></br>
//         No:15, 9th Main Road,  off Bannerugatta Road, New Gurrappan Palya, 
//         BTM Layout, Bangalore - 29
// {/* 
//         GST: 29ADOPS6641NZ                Ph: 9480318615, 9731909015     Email: krithschands21@gmail.com */}
//         </p>
//       </div>


//     </header>

  
//     <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start mt-4">
      
//     <div className="lg:col-span-4 flex flex-col gap-4">
//         <div className="overflow-hidden rounded-xl bg-slate-300 shadow-sm aspect-video flex items-center justify-center">
        
//             <Image
//         src="/images.jpg"
//         width={500}
//         height={500}
//         className="hidden md:block"
//         alt="Machine Repair Setup" />
          
//         </div>
//         <div className="overflow-hidden rounded-xl bg-slate-300 shadow-sm aspect-video flex items-center justify-center">
//           <Image
//         src="/images1.jpg"
//         width={500}
//         height={600}
//         className="hidden md:block"
//         alt="Machine Repair Setup 1" />
//         </div>
//       </div>

//      <div className="lg:col-span-5 bg-white p-8 rounded-2xl shadow-md border border-slate-100 flex flex-col justify-between min-h-[325px]">
//         <div>
//           <h2 className="text-2xl font-black tracking-tight uppercase mb-4 text-slate-900 border-b-2 border-red-600 pb-1 inline-block">
//             Spare part
//           </h2>
//           <p className="text-slate-600 leading-relaxed text-base font-normal max-w-md">
//             It is a long established fact that a reader will be distracted by the readable content of a page.
//           </p>
//         </div>


//         <div className="mt-8">
//           <button className="px-6 py-3 bg-[#1e293b] text-white text-sm font-bold uppercase tracking-wider rounded-lg shadow hover:bg-[#334155] active:scale-98 transition-all cursor-pointer">
//             Know more !
//           </button>
//         </div>
//       </div>


//       <div className="lg:col-span-2 flex lg:flex-col gap-4 items-center justify-center py-4 lg:py-12">
//         <button className="w-12 h-12 rounded-full bg-[#1e293b] text-white flex items-center justify-center shadow-md hover:bg-[#334155] transition-all cursor-pointer" aria-label="Scroll Up">
//           ▲
//         </button>
//         <button className="w-12 h-12 rounded-full bg-[#1e293b] text-white flex items-center justify-center shadow-md hover:bg-[#334155] transition-all cursor-pointer" aria-label="Scroll Down">
//           ▼
//         </button>
//       </div>

//     </section>

//   </main>

// </>
// }

import Image from 'next/image'

export default function Home() {
    return (
        <> 
        <main className="flex-1 p-6 md:p-8 flex flex-col gap-8 max-w-7xl mx-auto w-full pl-[120px]">
            
            {/* CLEAN DASHBOARD HEADER WITH THE 3 FUNCTIONAL CIRCLES */}
            {/* Added pt-4 (Padding Top) to push the header elements down into perfect alignment */}
<header className="flex flex-col lg:flex-row items-center gap-6 justify-between pt-4 w-full">
  <h1 className="text-3xl font-black text-[#1e293b] tracking-wide uppercase">
    Dashboard
  </h1>
  
  {/* Your circular top-right actions menu container */}
  <div className="flex gap-4">
    {/* Icons sit inside here */}
       <button 
                        className="w-10 h-10 rounded-full bg-[#1E293B] hover:bg-[#334155] text-[#94A3B8] flex items-center justify-center shadow-sm transition-all cursor-pointer text-lg"
                        title="Guest Profile"
                    >
                        👤
                    </button>

                    {/* Circle 2: Wishlist (State changes to bg-[#DC2626] and text-white when active) */}
                    <button 
                        className="w-10 h-10 rounded-full bg-[#1E293B] hover:bg-[#334155] text-[#94A3B8] flex items-center justify-center shadow-sm transition-all cursor-pointer text-sm"
                        title="Wishlist"
                    >
                        ❤️
                    </button>

                    {/* Circle 3: Theme Toggle (State changes to bg-[#FFFFFF] and dark icon when clicked) */}
                    <button 
                        className="w-10 h-10 rounded-full bg-[#1E293B] hover:bg-[#334155] text-[#94A3B8] flex items-center justify-center shadow-sm transition-all cursor-pointer text-sm"
                        title="Toggle Theme"
                    >
                        🌓
                    </button>
  </div>
</header>

          

            {/* INTERACTIVE CONTENT GRID SECTION */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              
                {/* LEFT COLUMN: VISUAL GALLERY IMAGES */}
                <div className="lg:col-span-4 flex flex-col gap-4">
                    <div className="overflow-hidden rounded-xl bg-slate-300 shadow-sm aspect-video flex items-center justify-center">
                        <Image
                            src="/images.jpg"
                            width={500}
                            height={500}
                            className="hidden md:block object-cover w-full h-full"
                            alt="Machine Repair Setup" 
                        />
                    </div>
                    <div className="overflow-hidden rounded-xl bg-slate-300 shadow-sm aspect-video flex items-center justify-center">
                        <Image
                            src="/images1.jpg"
                            width={500}
                            height={600}
                            className="hidden md:block object-cover w-full h-full"
                            alt="Machine Repair Setup 1" 
                        />
                    </div>
                </div>

                {/* MIDDLE COLUMN: SPARE PARTS CONTENT DISPLAY */}
                <div className="lg:col-span-6 bg-white p-8 rounded-2xl shadow-md border border-slate-100 flex flex-col justify-between min-h-[325px]">
                    <div>
                        <h2 className="text-2xl font-black tracking-tight uppercase mb-4 text-slate-900 border-b-2 border-red-600 pb-1 inline-block">
                            Spare part
                        </h2>
                        <p className="text-slate-600 leading-relaxed text-base font-normal max-w-md">
                            It is a long established fact that a reader will be distracted by the readable content of a page.
                        </p>
                    </div>

                    <div className="mt-8">
                        <button className="px-6 py-3 bg-[#1e293b] text-white text-sm font-bold uppercase tracking-wider rounded-lg shadow hover:bg-[#334155] active:scale-98 transition-all cursor-pointer">
                            Know more !
                        </button>
                    </div>
                </div>

                {/* RIGHT COLUMN: CAROUSEL UP/DOWN SLIDER TRIGGERS */}
                <div className="lg:col-span-2 flex lg:flex-col gap-4 items-center justify-center py-4 lg:py-12">
                    <button className="w-12 h-12 rounded-full bg-[#1e293b] text-white flex items-center justify-center shadow-md hover:bg-[#334155] transition-all cursor-pointer" aria-label="Scroll Up">
                        ▲
                    </button>
                    <button className="w-12 h-12 rounded-full bg-[#1e293b] text-white flex items-center justify-center shadow-md hover:bg-[#334155] transition-all cursor-pointer" aria-label="Scroll Down">
                        ▼
                    </button>
                </div>

            </section>

        </main>
        </>
    )
}
