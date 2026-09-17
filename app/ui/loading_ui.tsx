'use client'

export default function Loading_UI() {
    return <> return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0f172a]">
      {/* Visual Workspace Container */}
      <div className="relative flex flex-col items-center justify-center h-48 w-64">
        
        {/* THE FLOATING ROTATING INDUSTRIAL GEAR */}
        {/* Placed physically on top using absolute positioning, absolute center layout, and z-10 */}
        <div className="absolute top-8 z-10 animate-spin [animation-duration:3s]">
          <svg
            className="w-16 h-16 text-red-600 drop-shadow-[0_4px_12px_rgba(220,38,38,0.3)]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.43l-1.003.754c-.309.232-.475.619-.442 1.013.004.053.006.106.006.16 0 .054-.002.107-.006.16-.033.394.133.781.442 1.013l1.003.754a1.125 1.125 0 0 1 .26 1.43l-1.296 2.247a1.125 1.125 0 0 1-1.37.49l-1.216-.456a1.125 1.125 0 0 0-1.076.124a5.056 5.056 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281a1.125 1.125 0 0 0-.646-.87a4.992 4.992 0 0 1-.22-.127a1.125 1.125 0 0 0-1.074-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.43l1.004-.754c.308-.233.474-.619.442-1.012a4.597 4.597 0 0 1-.006-.16c0-.053.002-.106.006-.16c.032-.393-.134-.78-.442-1.013l-1.004-.754a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.49l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128c.332-.183.582-.495.644-.869l.214-1.28Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
            />
          </svg>
        </div>

        {/* INDUSTRIAL LOADING TEXT PANEL */}
        {/* Sits elegantly underneath the gear with clean spacing and subtle animation */}
        <div className="absolute bottom-10 flex flex-col items-center gap-1.5">
          <span className="text-white text-xs font-black uppercase tracking-[0.25em] animate-pulse">
            Loading System
          </span>
          <div className="flex items-center gap-0">
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
              Krith
            </span>
            <span className="text-[10px] text-red-500 font-bold uppercase tracking-wider">
              S
            </span>
            <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">
              Chand
            </span>
            <span className="text-[10px] text-red-500 font-bold uppercase tracking-wider">
              S
            </span>
          </div>
        </div>

        {/* REFINED TECHNICAL PROGRESS BAR LINING THE BOTTOM */}
        <div className="absolute bottom-4 w-32 h-[2px] bg-slate-800 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-red-600 to-red-400 rounded-full w-1/2 animate-[infinite-loading_1.5s_ease-in-out_infinite]" />
        </div>
      </div>
    </div>
  );</>;
}