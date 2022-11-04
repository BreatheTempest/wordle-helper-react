import { MouseEvent, useState } from 'react';
import { keys } from './keys'

import Key from './Key';
import Answer from './Answer';



function App() {
  const [inputLetters, setInputLetters] = useState<string[][]>([[], [], [], [], [], []])
  const [rowIndex, setRowIndex] = useState(0)

  function buttonClick(e: MouseEvent) {
    const button = e.target as HTMLButtonElement;
    switch (button.name) {
      case 'enter':
        if (inputLetters[rowIndex].length === 5)
          setRowIndex(prev => prev + 1)
        break
      case 'delete':
        setInputLetters(prev => {
          return prev.map((row, index) => {
            if (index === rowIndex) return [...row.slice(0, row.length - 1)]
            else return row
          })
        })
        break
      default:
        setInputLetters(prev => {
          return prev.map((row, index) => {
            if (index === rowIndex && row.length < 5) return [...row, button.name]
            else return row
          })
        })
    }
  }


  return (
    <main className="h-screen bg-black flex flex-col items-center text-gray-100 font-open-sans">
      <nav className="font-patua text-4xl mt-4">Wordle</nav>
      <div className='mt-8 w-80 h-96 grid grid-rows-6 gap-2'>
        {inputLetters.map((array, index) => <Answer key={index} array={array} />)}
      </div>
      <div className="mt-auto mb-2 grid grid-cols-[repeat(20,_minmax(0,_1fr))] gap-2 max-w-lg">
        {keys.map((v, i) => (
          <Key buttonClick={buttonClick} key={i} value={v} />
        ))}
      </div>
    </main>
  );
}

export default App;

