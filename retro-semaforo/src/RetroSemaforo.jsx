import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import Semaforo from './components/Semaforo';
import ColumnList from './components/ColumnList';
import NewNoteModal from './components/NewNoteModal';

const RetroSemaforo = () => {
	// --- Estados ---
	const [notes, setNotes] = useState([]);
	const [isModalOpen, setIsModalOpen] = useState(false);

	// Estado para el formulario de nueva nota
	const [newNote, setNewNote] = useState({ type: 'red', title: '', content: '' });

	// --- Efectos (LocalStorage) ---
	useEffect(() => {
		const savedNotes = localStorage.getItem('retro-semaforo-notes');
		if (savedNotes) setNotes(JSON.parse(savedNotes));
	}, []);

	useEffect(() => {
		localStorage.setItem('retro-semaforo-notes', JSON.stringify(notes));
	}, [notes]);

	// --- Funciones ---
	const handleAddNote = () => {
		if (!newNote.title.trim() || !newNote.content.trim()) return;
		const noteToAdd = { id: Date.now(), ...newNote, timestamp: new Date().toLocaleString() };
		setNotes([...notes, noteToAdd]);
		setNewNote({ type: 'red', title: '', content: '' });
		setIsModalOpen(false);
	};

	const handleDeleteNote = (id) => setNotes(notes.filter(note => note.id !== id));

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
			<Header onOpenModal={() => setIsModalOpen(true)} />

			<main className="max-w-6xl mx-auto px-4 py-8 space-y-12">
				<section className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200 flex flex-col md:flex-row gap-8 md:gap-12 items-start justify-center">
					<Semaforo redCount={redNotes.length} yellowCount={yellowNotes.length} greenCount={greenNotes.length} />

					<div className="flex flex-col gap-5 w-full pt-2">
						<div className="h-20 flex items-center">
							<div className="flex flex-wrap gap-2 items-center content-center">
								{redNotes.length === 0 && <span className="text-gray-300 italic text-sm">Sin problemas reportados</span>}
								{redNotes.map(note => (
									<div key={note.id} className="bg-red-50 text-red-700 border border-red-100 px-3 py-1.5 rounded-full text-sm font-medium shadow-sm flex items-center gap-2 animate-in fade-in slide-in-from-left-4 duration-300">
										<span className="sr-only">Red</span>
										{note.title}
									</div>
								))}
							</div>
						</div>

						<div className="h-20 flex items-center pt-5">
							<div className="flex flex-wrap gap-2 items-center content-center">
								{yellowNotes.length === 0 && <span className="text-gray-300 italic text-sm">Sin riesgos identificados</span>}
								{yellowNotes.map(note => (
									<div key={note.id} className="bg-yellow-50 text-yellow-700 border border-yellow-100 px-3 py-1.5 rounded-full text-sm font-medium shadow-sm flex items-center gap-2 animate-in fade-in slide-in-from-left-4 duration-300">
										<span className="sr-only">Yellow</span>
										{note.title}
									</div>
								))}
							</div>
						</div>

						<div className="h-20 flex items-center pt-10">
							<div className="flex flex-wrap gap-2 items-center content-center">
								{greenNotes.length === 0 && <span className="text-gray-300 italic text-sm">Sin aciertos registrados</span>}
								{greenNotes.map(note => (
									<div key={note.id} className="bg-green-50 text-green-700 border border-green-100 px-3 py-1.5 rounded-full text-sm font-medium shadow-sm flex items-center gap-2 animate-in fade-in slide-in-from-left-4 duration-300">
										<span className="sr-only">Green</span>
										{note.title}
									</div>
								))}
							</div>
						</div>
					</div>
				</section>

				<section>
					<div className="flex items-center gap-4 mb-6">
						<h2 className="text-2xl font-bold text-slate-800">Detalle Completo</h2>
						<div className="h-px bg-gray-200 flex-1"></div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						<ColumnList
							title="STOP / Problemas"
							notes={redNotes}
							headerStyle={getHeaderStyles('red')}
							cardBorder={getCardBorder('red')}
							onDelete={handleDeleteNote}
							emptyMsg="¡Genial! Nada crítico."
							type="red"
						/>

						<ColumnList
							title="PRECAUCIÓN / Riesgos"
							notes={yellowNotes}
							headerStyle={getHeaderStyles('yellow')}
							cardBorder={getCardBorder('yellow')}
							onDelete={handleDeleteNote}
							emptyMsg="Todo parece seguro."
							type="yellow"
						/>

						<ColumnList
							title="START / Aciertos"
							notes={greenNotes}
							headerStyle={getHeaderStyles('green')}
							cardBorder={getCardBorder('green')}
							onDelete={handleDeleteNote}
							emptyMsg="¡Anota lo que hicimos bien!"
							type="green"
						/>
					</div>
				</section>
			</main>

			<NewNoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} newNote={newNote} setNewNote={setNewNote} onSave={handleAddNote} />
		</div>
	);
};

export default RetroSemaforo;