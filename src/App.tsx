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
        setRowIndex(prev => prev + 1)
        console.log('hello')
        break
      case 'delete':
        console.log('bye')
        break
      default:
        console.log(button.name)
        setInputLetters(prev => {
          return prev.map((row, index) => {
            if (index === rowIndex) return [...row, button.name]
            else return row
          })
        })
    }
  }

  return (
    <main className="h-screen bg-black flex flex-col items-center text-gray-100 font-open-sans">
      <nav className="font-patua text-4xl">Wordle</nav>
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

