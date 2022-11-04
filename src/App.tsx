import { MouseEvent } from 'react';

import Key from './Key';
import { keys } from './keys'

function App() {
  function buttonClick(e: MouseEvent) {
    e.stopPropagation()
    const button = e.target as HTMLButtonElement;
    console.log(button.name);
  }

  return (
    <main className="h-screen bg-black flex flex-col items-center text-gray-100 font-open-sans">
      <nav className="font-patua text-4xl">Wordle</nav>
      <div className="mt-auto mb-2 grid grid-cols-[repeat(20,_minmax(0,_1fr))] gap-2 max-w-lg">
        {keys.map((v, i) => (
          <Key buttonClick={buttonClick} key={i} value={v} />
        ))}
      </div>
    </main>
  );
}

export default App;

