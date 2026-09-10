export default function DieButton({ number }) {
  function handleClick(event) {
    console.log(event.currentTarget.value);
  }
  return (
    <button
      onClick={handleClick}
      value={number}
      aria-label={`Number ${number}`}
      className="w-14 h-14 justify-self-center rounded-md shadow-md font-semibold text-2xl bg-white"
    >
      {number}
    </button>
  );
}
