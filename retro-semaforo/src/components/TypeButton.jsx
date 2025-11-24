import React from 'react';

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

export default TypeButton;
