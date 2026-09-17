import React from 'react';

export function AboutContent() {
  return (
    <div className="w-full text-justify text-slate-600 font-normal text-sm md:text-base leading-relaxed max-w-3xl mx-auto space-y-4 shrink-0">
      <p>
        CNC India is serving from 1993 across pan India & also spread across the Middle East serving globally, into various Industries, providing innovative technology solutions, empowering the industry.
      </p>
      <p>
        We, CNC India, have an Integrated Shop Floor with an area of about 35,000 sq. ft, and house absolute state-of-the-art equipment and machinery required for Design, Engineering, and Manufacturing.
      </p>
    </div>
  );
}

export function ContactInfo() {
  return (
    /* Changed background from gray to pure white, and sharpened the gray border stroke */
    <div className="w-full max-w-3xl mx-auto bg-white border border-slate-200/80 p-6 md:p-8 rounded-2xl shadow-sm">
      
      {/* Reintroduced your brand-defining red accent bottom divider line */}
      <h3 className="text-base md:text-lg font-black text-slate-900 tracking-wider mb-6 border-b-2 border-red-600 pb-1 inline-block uppercase">
        Contact Information
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs md:text-sm text-slate-700">
        {/* Left Side: Communications block */}
        <div className="space-y-4">
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">Mobile Numbers</span>
            <span className="font-bold text-slate-900 text-sm md:text-base tracking-wide">9480318615, 9731909015</span>
          </div>
          <div>
            <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-0.5">Email Address</span>
            <span className="font-semibold text-slate-900 break-all text-sm">krithschands21@gmail.com</span>
          </div>
        </div>

        {/* Right Side: Physical Address block with updated vertical border stroke color */}
        <div className="border-t md:border-t-0 md:border-l border-slate-200 pt-4 md:pt-0 md:pl-6">
          <span className="block text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">Registered Address</span>
          <address className="not-italic font-semibold text-slate-800 leading-relaxed text-sm">
            No: 15, 9th Main Road, <br />
            off Bannerugatta Road,<br />
            New Gurrappan Palya, <br />
            BTM Layout, Bangalore - 29
          </address>
        </div>
      </div>
    </div>
  );
}
