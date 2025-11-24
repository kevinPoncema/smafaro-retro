import React from 'react';
import { Octagon, AlertCircle, CheckCircle } from 'lucide-react';
import NoteCard from './NoteCard';

const IconForType = ({ type }) => {
  if (type === 'red') return <Octagon size={14} className="fill-red-500 text-red-500 border-none" />;
  if (type === 'yellow') return <AlertCircle size={14} className="fill-yellow-400 text-yellow-600" />;
  if (type === 'green') return <CheckCircle size={14} className="fill-green-500 text-green-100" />;
  return null;
};

const ColumnList = ({ title, notes, headerStyle, cardBorder, onDelete, emptyMsg, type }) => (
  <div className="flex flex-col gap-3">
    <div className={`p-3 rounded-lg font-bold text-sm uppercase tracking-wide border ${headerStyle.replace('text-', 'border-').replace('bg-', 'border-opacity-20 ')} ${headerStyle}`}>
      {title} <span className="opacity-60 ml-1">({notes.length})</span>
    </div>

    <div className="space-y-3">
      {notes.length === 0 ? (
        <div className="p-8 text-center border-2 border-dashed border-gray-200 rounded-lg text-gray-400 text-sm">
          {emptyMsg}
        </div>
      ) : (
        notes.map(note => (
          <div key={note.id} className="relative">
            <div className="flex items-center gap-2 mb-2">
              <IconForType type={type} />
            </div>
            <NoteCard note={note} cardBorder={cardBorder} onDelete={onDelete} />
          </div>
        ))
      )}
    </div>
  </div>
);

export default ColumnList;
