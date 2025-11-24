import React from 'react';
import { Trash2 } from 'lucide-react';

const NoteCard = ({ note, cardBorder, onDelete }) => (
  <div className={`bg-white p-4 rounded-lg shadow-sm border border-gray-100 border-l-4 ${cardBorder} hover:shadow-md transition-all group relative`}>
    <div className="pr-6">
      <h3 className="font-bold text-slate-800 mb-1">{note.title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed whitespace-pre-line">{note.content}</p>
    </div>

    <div className="mt-3 text-xs text-gray-400 flex justify-between items-center">
      <span>{note.timestamp}</span>
    </div>

    <button
      onClick={() => onDelete(note.id)}
      className="absolute top-2 right-2 p-1.5 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-md transition-all opacity-0 group-hover:opacity-100"
      title="Eliminar nota"
    >
      <Trash2 size={16} />
    </button>
  </div>
);

export default NoteCard;
