 import React, { useState, useEffect } from 'react';

import { Plus, Trash2, X, AlertCircle, CheckCircle, Octagon } from 'lucide-react';


const RetroSemaforo = () => {

// --- Estados ---

const [notes, setNotes] = useState([]);

const [isModalOpen, setIsModalOpen] = useState(false);

// Estado para el formulario de nueva nota

const [newNote, setNewNote] = useState({

type: 'red', // red, yellow, green

title: '',

content: ''

});


// --- Efectos (LocalStorage) ---

useEffect(() => {

const savedNotes = localStorage.getItem('retro-semaforo-notes');

if (savedNotes) {

setNotes(JSON.parse(savedNotes));

}

}, []);


useEffect(() => {

localStorage.setItem('retro-semaforo-notes', JSON.stringify(notes));

}, [notes]);


// --- Funciones ---

const handleAddNote = () => {

if (!newNote.title.trim() || !newNote.content.trim()) return;


const noteToAdd = {

id: Date.now(),

...newNote,

timestamp: new Date().toLocaleString()

};


setNotes([...notes, noteToAdd]);

setNewNote({ type: 'red', title: '', content: '' });

setIsModalOpen(false);

};


const handleDeleteNote = (id) => {

const updatedNotes = notes.filter(note => note.id !== id);

setNotes(updatedNotes);

};


// Filtrar notas

const redNotes = notes.filter(n => n.type === 'red');

const yellowNotes = notes.filter(n => n.type === 'yellow');

const greenNotes = notes.filter(n => n.type === 'green');


// Estilos helpers

const getHeaderStyles = (type) => {

switch (type) {

case 'red': return 'text-red-700 bg-red-100';

case 'yellow': return 'text-yellow-700 bg-yellow-100';

case 'green': return 'text-green-700 bg-green-100';

default: return 'text-gray-700';

}

};


const getCardBorder = (type) => {

switch (type) {

case 'red': return 'border-l-red-500';

case 'yellow': return 'border-l-yellow-500';

case 'green': return 'border-l-green-500';

default: return 'border-l-gray-500';

}

};


return (

<div className="min-h-screen bg-gray-50 text-slate-800 font-sans pb-20">

{/* --- HEADER SIMPLE --- */}

<header className="bg-white border-b border-gray-200 sticky top-0 z-20">

<div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">

<h1 className="text-xl font-bold text-slate-700 tracking-tight">Retro Semáforo</h1>

<button

onClick={() => setIsModalOpen(true)}

className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 shadow-md transition-all active:scale-95 text-sm font-medium"

>

<Plus size={18} />

Agregar Nota

</button>

</div>

</header>


<main className="max-w-6xl mx-auto px-4 py-8 space-y-12">

{/* --- SECCIÓN 1: VISUAL SEMÁFORO Y TÍTULOS --- */}

<section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 flex flex-col md:flex-row gap-8 md:gap-12 items-start justify-center">

{/* El Semáforo Dibujado */}

<div className="bg-slate-800 p-5 rounded-[3rem] shadow-2xl flex flex-col gap-5 shrink-0 mx-auto md:mx-0">

{/* Luz Roja */}

<div className={`w-20 h-20 rounded-full border-4 border-slate-700 ${redNotes.length > 0 ? 'bg-red-500 shadow-[0_0_25px_rgba(239,68,68,0.6)] animate-pulse' : 'bg-red-900/40'}`}></div>

{/* Luz Amarilla */}

<div className={`w-20 h-20 rounded-full border-4 border-slate-700 ${yellowNotes.length > 0 ? 'bg-yellow-400 shadow-[0_0_25px_rgba(250,204,21,0.6)] animate-pulse' : 'bg-yellow-900/40'}`}></div>

{/* Luz Verde */}

<div className={`w-20 h-20 rounded-full border-4 border-slate-700 ${greenNotes.length > 0 ? 'bg-green-500 shadow-[0_0_25px_rgba(34,197,94,0.6)] animate-pulse' : 'bg-green-900/40'}`}></div>

</div>


{/* Lista de Títulos Lateral */}

<div className="flex flex-col gap-5 w-full pt-2">

{/* Fila Roja */}

<div className="h-20 flex items-center">

<div className="flex flex-wrap gap-2 items-center content-center">

{redNotes.length === 0 && <span className="text-gray-300 italic text-sm">Sin problemas reportados</span>}

{redNotes.map(note => (

<div key={note.id} className="bg-red-50 text-red-700 border border-red-100 px-3 py-1.5 rounded-full text-sm font-medium shadow-sm flex items-center gap-2 animate-in fade-in slide-in-from-left-4 duration-300">

<Octagon size={14} className="fill-red-500 text-red-500 border-none" />

{note.title}

</div>

))}

</div>

</div>


{/* Fila Amarilla (Espaciador visual manual para alinear con el semáforo) */}

<div className="h-20 flex items-center pt-5">

<div className="flex flex-wrap gap-2 items-center content-center">

{yellowNotes.length === 0 && <span className="text-gray-300 italic text-sm">Sin riesgos identificados</span>}

{yellowNotes.map(note => (

<div key={note.id} className="bg-yellow-50 text-yellow-700 border border-yellow-100 px-3 py-1.5 rounded-full text-sm font-medium shadow-sm flex items-center gap-2 animate-in fade-in slide-in-from-left-4 duration-300">

<AlertCircle size={14} className="fill-yellow-400 text-yellow-600" />

{note.title}

</div>

))}

</div>

</div>


{/* Fila Verde */}

<div className="h-20 flex items-center pt-10">

<div className="flex flex-wrap gap-2 items-center content-center">

{greenNotes.length === 0 && <span className="text-gray-300 italic text-sm">Sin aciertos registrados</span>}

{greenNotes.map(note => (

<div key={note.id} className="bg-green-50 text-green-700 border border-green-100 px-3 py-1.5 rounded-full text-sm font-medium shadow-sm flex items-center gap-2 animate-in fade-in slide-in-from-left-4 duration-300">

<CheckCircle size={14} className="fill-green-500 text-green-100" />

{note.title}

</div>

))}

</div>

</div>


</div>

</section>


{/* --- SECCIÓN 2: DETALLE COMPLETO --- */}

<section>

<div className="flex items-center gap-4 mb-6">

<h2 className="text-2xl font-bold text-slate-800">Detalle Completo</h2>

<div className="h-px bg-gray-200 flex-1"></div>

</div>


<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

{/* Columna Roja */}

<ColumnList

title="STOP / Problemas"

notes={redNotes}

headerStyle={getHeaderStyles('red')}

cardBorder={getCardBorder('red')}

onDelete={handleDeleteNote}

emptyMsg="¡Genial! Nada crítico."

/>

{/* Columna Amarilla */}

<ColumnList

title="PRECAUCIÓN / Riesgos"

notes={yellowNotes}

headerStyle={getHeaderStyles('yellow')}

cardBorder={getCardBorder('yellow')}

onDelete={handleDeleteNote}

emptyMsg="Todo parece seguro."

/>

{/* Columna Verde */}

<ColumnList

title="START / Aciertos"

notes={greenNotes}

headerStyle={getHeaderStyles('green')}

cardBorder={getCardBorder('green')}

onDelete={handleDeleteNote}

emptyMsg="¡Anota lo que hicimos bien!"

/>

</div>

</section>


</main>


{/* --- MODAL (Sin cambios funcionales) --- */}

{isModalOpen && (

<div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">

<div className="bg-white rounded-xl shadow-2xl w-full max-w-md overflow-hidden transform transition-all scale-100">

<div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50">

<h2 className="text-lg font-bold text-gray-700">Nueva Nota</h2>

<button onClick={() => setIsModalOpen(false)} className="text-gray-400 hover:text-gray-600">

<X size={20} />

</button>

</div>

<div className="p-6 space-y-4">

<div>

<label className="block text-sm font-medium text-gray-700 mb-2">Categoría</label>

<div className="flex gap-3">

<TypeButton type="red" selected={newNote.type === 'red'} onClick={() => setNewNote({...newNote, type: 'red'})} label="Stop" />

<TypeButton type="yellow" selected={newNote.type === 'yellow'} onClick={() => setNewNote({...newNote, type: 'yellow'})} label="Riesgo" />

<TypeButton type="green" selected={newNote.type === 'green'} onClick={() => setNewNote({...newNote, type: 'green'})} label="Start" />

</div>

</div>

<div>

<label className="block text-sm font-medium text-gray-700 mb-1">Título</label>

<input

type="text"

className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"

placeholder="Ej: Retraso en QA..."

value={newNote.title}

onChange={(e) => setNewNote({...newNote, title: e.target.value})}

autoFocus

/>

</div>

<div>

<label className="block text-sm font-medium text-gray-700 mb-1">Detalle</label>

<textarea

className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none resize-none h-24"

placeholder="Describe la situación..."

value={newNote.content}

onChange={(e) => setNewNote({...newNote, content: e.target.value})}

></textarea>

</div>

</div>

<div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-end gap-3">

<button onClick={() => setIsModalOpen(false)} className="px-4 py-2 text-gray-600 font-medium hover:bg-gray-200 rounded-lg">Cancelar</button>

<button

onClick={handleAddNote}

disabled={!newNote.title || !newNote.content}

className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg disabled:opacity-50"

>

Guardar

</button>

</div>

</div>

</div>

)}

</div>

);

};


// --- SUB COMPONENTES ACTUALIZADOS ---


const ColumnList = ({ title, notes, headerStyle, cardBorder, onDelete, emptyMsg }) => (

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

<div key={note.id} className={`bg-white p-4 rounded-lg shadow-sm border border-gray-100 border-l-4 ${cardBorder} hover:shadow-md transition-all group relative`}>

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

))

)}

</div>

</div>

);


const TypeButton = ({ type, selected, onClick, label }) => {

let colorClass = "";

if (type === 'red') colorClass = "bg-red-100 text-red-700 hover:bg-red-200 ring-red-500";

if (type === 'yellow') colorClass = "bg-yellow-100 text-yellow-700 hover:bg-yellow-200 ring-yellow-500";

if (type === 'green') colorClass = "bg-green-100 text-green-700 hover:bg-green-200 ring-green-500";


return (

<button

onClick={onClick}

className={`flex-1 py-2 rounded-lg font-medium text-sm transition-all border-2 ${selected ? 'border-current ring-1' : 'border-transparent opacity-60 hover:opacity-100'} ${colorClass}`}

>

{label}

</button>

);

};


export default RetroSemaforo; 