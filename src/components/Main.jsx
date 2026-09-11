import { useState } from "react";
import DieButton from "./DieButton";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

export default function Main() {
  const [randomNumbers, setRandomNumbers] = useState(generateRandomNumbers());

  function generateRandomNumbers() {
    return Array.from({ length: 10 }, () => ({
      id: nanoid(),
      value: Math.ceil(Math.random() * 6),
      isSelected: false,
    }));
  }

  function rollDice() {
    setRandomNumbers((prev) =>
      prev.map((item) =>
        item.isSelected
          ? item
          : { ...item, value: Math.ceil(Math.random() * 6) },
      ),
    );
  }

  function handleClick(id) {
    setRandomNumbers((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, isSelected: true } : item,
      ),
    );
  }

  const gameWon =
    randomNumbers.every((item) => item.isSelected) &&
    randomNumbers.every((item) => item.value === randomNumbers[0].value);

  return (
    <main className="px-6 py-10 flex flex-col gap-8 items-center text-center text-xl  sm:m-auto sm:rounded-2xl sm:max-w-lg bg-neutral-100 ">
      <div className="flex flex-col items-center">
        {gameWon && <Confetti />}
        <h1 className="font-semibold text-4xl">Tenzies</h1>
        <p className="sm:max-w-[80%]">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
      </div>
      <section className="grid grid-cols-2 gap-y-6 gap-x-10 sm:gap-x-6 sm: sm:grid-cols-5 ">
        {randomNumbers.map((item) => (
          <DieButton
            key={item.id}
            number={item.value}
            isSelected={item.isSelected}
            handleClick={() => handleClick(item.id)}
          />
        ))}
      </section>
      <button
        // onClick={newGame ? rollDice : setRandomNumbers(generateRandomNumbers())}
        onClick={rollDice}
        className="px-12 py-3 rounded-md shadow-md shadow-neutral-400 font-semibold text-white bg-indigo-600"
      >
        {gameWon ? "New game" : "Roll"}
      </button>
    </main>
  );
}
