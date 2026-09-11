export default function DieButton({ number, handleClick, isSelected }) {
  return (
    <button
      onClick={handleClick}
      value={number}
      aria-label={`Number ${number}`}
      className={`w-14 h-14 justify-self-center rounded-md shadow-md font-semibold text-2xl ${isSelected ? "bg-lime-300" : "bg-white"}`}
    >
      {number}
    </button>
  );
}
