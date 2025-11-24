import React from 'react';
import { X } from 'lucide-react';
import TypeButton from './TypeButton';

const NewNoteModal = ({ isOpen, onClose, newNote, setNewNote, onSave }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all scale-100">
        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">
          <h2 className="text-lg font-bold text-gray-700">Nueva Nota</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X size={20} />
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Categoría</label>
            <div className="flex gap-3">
              <TypeButton type="red" selected={newNote.type === 'red'} onClick={() => setNewNote({ ...newNote, type: 'red' })} label="Stop" />
              <TypeButton type="yellow" selected={newNote.type === 'yellow'} onClick={() => setNewNote({ ...newNote, type: 'yellow' })} label="Riesgo" />
              <TypeButton type="green" selected={newNote.type === 'green'} onClick={() => setNewNote({ ...newNote, type: 'green' })} label="Start" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Título</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              placeholder="Ej: Retraso en QA..."
              value={newNote.title}
              onChange={(e) => setNewNote({ ...newNote, title: e.target.value })}
              autoFocus
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Detalle</label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none resize-none h-24"
              placeholder="Describe la situación..."
              value={newNote.content}
              onChange={(e) => setNewNote({ ...newNote, content: e.target.value })}
            ></textarea>
          </div>
        </div>

        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-end gap-3">
          <button onClick={onClose} className="px-4 py-2 text-gray-600 font-medium hover:bg-gray-200 rounded-lg">Cancelar</button>
          <button
            onClick={onSave}
            disabled={!newNote.title || !newNote.content}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg disabled:opacity-50"
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewNoteModal;
