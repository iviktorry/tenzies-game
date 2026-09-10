export default function DieButton({ number }) {
  return (
    <button className="w-14 h-14 justify-self-center rounded-md shadow-md font-semibold text-2xl bg-white">
      {number}
    </button>
  );
}
