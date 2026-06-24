'use client'

export default function About() {
    return <>
  
  <main className="flex-1 p-8 md:p-16 flex flex-col justify-center max-w-4xl w-full mx-auto gap-8">
    
    <div className="text-center">
      <h2 className="font-brand text-6xl text-[#1e293b] tracking-wide">
        About
      </h2>
    </div>

   
    <div className="w-full text-justify text-slate-700 font-medium text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
     CNC India is serving from 1993 across pan India & also spread across the Middle East serving globally, into various Industries, providing innovative technology solutions, empowering the industry.

We, CNC India, have an Integrated Shop Floor with an area of about 35,000 sq. ft, and house absolute state-of-the-art equipment and machinery required for Design, Engineering, and Manufacturing.
    </div>

    <div className="w-full max-w-3xl mx-auto  p-6 rounded-lg">
      <h3 className="font-brand text-3xl text-[#1e293b] tracking-wide mb-4 border-b-2 border-red-600 pb-1 inline-block">
        Contact Info:
      </h3>
      
      <div className="space-y-3 text-base md:text-lg text-slate-800 font-medium">
        <p><span className="font-bold">Mobile number:</span> 7760494680</p>
        <p><span className="font-bold">Email:</span> krithschands21@gmail.com</p>
      </div>
    </div>

  </main>
</>;
}