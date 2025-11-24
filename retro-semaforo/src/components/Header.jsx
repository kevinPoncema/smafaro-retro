import React from 'react';
import { Plus } from 'lucide-react';

const Header = ({ onOpenModal }) => (
  <header className="bg-white border-b border-gray-200 sticky top-0 z-20">
    <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold text-slate-700 tracking-tight">Retro Semáforo</h1>

      <button
        onClick={onOpenModal}
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-md transition-all active:scale-95 text-sm font-medium"
      >
        <Plus size={18} />
        Agregar Nota
      </button>
    </div>
  </header>
);

export default Header;
