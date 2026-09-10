import { useState } from "react";
import DiceButton from "./DiceButton";

export default function Main() {
  const [randomNumber, setRandomNumber] = useState(0);
  function handleClick() {
    setRandomNumber(Math.floor(Math.random() * 6));
  }

  return (
    <main className="px-6 py-10 flex flex-col gap-8 items-center text-center text-xl  sm:m-auto sm:rounded-2xl sm:max-w-lg bg-neutral-100 ">
      <div className="flex flex-col items-center">
        <h1 className="font-semibold text-4xl">Tenzies</h1>
        <p className="sm:max-w-[80%]">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
      </div>
      <section className="grid grid-cols-2 gap-y-4 gap-x-12 sm:gap-8 sm:grid-cols-5 ">
        {Array.from({ length: 10 }).map((_, index) => (
          <DiceButton key={index + 1} number={randomNumber} />
        ))}
      </section>
      <button
        onClick={handleClick}
        className="px-8 py-2 rounded-md shadow-md shadow-neutral-400 font-semibold text-white bg-indigo-600"
      >
        Roll
      </button>
    </main>
  );
}
