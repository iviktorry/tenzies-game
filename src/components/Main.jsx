export default function Main() {
  return (
    <main className="px-8 py-8 flex flex-col gap-8 items-center text-center text-xl  sm:m-auto sm:rounded-2xl sm:max-w-xl bg-neutral-100 ">
      <div className="flex flex-col items-center">
        <h1 className="font-semibold text-4xl">Tenzies</h1>
        <p className="sm:max-w-[80%]">
          Roll until all dice are the same. Click each die to freeze it at its
          current value between rolls.
        </p>
      </div>
      <section className="grid grid-cols-2 gap-y-2 w-full sm:gap-y-6 sm:grid-cols-5 ">
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
      </section>
      <button className="px-6 py-2 rounded-md text-white bg-indigo-600">
        Roll
      </button>
    </main>
  );
}
