import React from 'react';

export default function OptionButton({ label, selected, onClick }) {
  return (
    <button
      type="button"
      className={`option-button ${selected ? 'selected' : ''}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
