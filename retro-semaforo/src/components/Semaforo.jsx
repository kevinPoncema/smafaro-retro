import React from 'react';

const Semaforo = ({ redCount, yellowCount, greenCount }) => (
  <div className="bg-slate-800 p-5 rounded-[3rem] shadow-2xl flex flex-col gap-5 shrink-0 mx-auto md:mx-0">
    <div className={`w-20 h-20 rounded-full border-4 border-slate-700 ${redCount > 0 ? 'bg-red-500 shadow-[0_0_25px_rgba(239,68,68,0.6)] animate-pulse' : 'bg-red-900/40'}`}></div>
    <div className={`w-20 h-20 rounded-full border-4 border-slate-700 ${yellowCount > 0 ? 'bg-yellow-400 shadow-[0_0_25px_rgba(250,204,21,0.6)] animate-pulse' : 'bg-yellow-900/40'}`}></div>
    <div className={`w-20 h-20 rounded-full border-4 border-slate-700 ${greenCount > 0 ? 'bg-green-500 shadow-[0_0_25px_rgba(34,197,94,0.6)] animate-pulse' : 'bg-green-900/40'}`}></div>
  </div>
);

export default Semaforo;
