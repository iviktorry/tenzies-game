export default function DieButton({ number, handleClick, isSelected }) {
  return (
    <button
      onClick={handleClick}
      value={number}
      aria-pressed={isSelected}
      aria-label={`Die with value ${number}, ${isSelected ? "id held" : "is not held"}`}
      className={`w-14 h-14 justify-self-center rounded-md shadow-md font-semibold text-2xl ${isSelected ? "bg-lime-400" : "bg-white"}`}
    >
      {number}
    </button>
  );
}
