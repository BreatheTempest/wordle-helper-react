import { MouseEvent, useReducer, useState } from 'react';
import { keys } from './keys'

import Key from './Key';
import Answer from './Answer';

type Action = {
  type: string
  payload?: string | any
}


export type LetterType = {
  value?: string;
  inclusion?: number;
}



// type RowType = [
//   LetterType[] | never[]

// ]


// type State = {
//   rowIndex: number;
//   lettersArray: Array<RowType>
// }




function App() {

  const initialState = { currentRowIndex: 0, lettersArray: [[], [], [], [], [], []] }

  const [state, dispatch] = useReducer(reducer, initialState)


  function reducer(state, action: Action) {
    const { lettersArray, currentRowIndex } = state
    switch (action.type) {
      case 'add_letter':
        return {
          ...state, lettersArray: lettersArray.map((row: LetterType[], index: number) => {
            if (index === currentRowIndex && row.length < 5) return [...row, { value: action.payload, inclusion: 0 }]
            else return row
          })
        }
      case 'remove_letter':
        return {
          ...state, lettersArray: lettersArray.map((row: LetterType[], index: number) => {
            if (index === currentRowIndex) return [...row.slice(0, row.length - 1)]
            else return row
          })
        }
      case 'enter':
        if (lettersArray[currentRowIndex].length === 5) {
          return { ...state, currentRowIndex: currentRowIndex + 1 }
        } else {
          return state
        }
      case 'change_inclusion':

        const { rowIndex, letterIndex } = action.payload
        // console.log(rowIndex, letterIndex)

        return {
          ...state, lettersArray: lettersArray.map((row: LetterType[], index: number) => {
            if (rowIndex === index) {
              return row.map((letter, index) => {
                if (index === letterIndex) return { ...letter, inclusion: letter.inclusion < 3 ? letter.inclusion + 1 : 0 }
                return letter
              })
            }
            else return row
          })
        }
    }
  }



  function buttonClick(e: MouseEvent) {
    const button = e.target as HTMLButtonElement;
    switch (button.name) {
      case 'enter':
        dispatch({ type: 'enter' })
        break
      case 'delete':
        dispatch({ type: 'remove_letter' })
        break
      default:
        dispatch({ type: 'add_letter', payload: button.name })
    }

  }


  function changeInclusion(rowIndex: number, letterIndex: number) {
    dispatch({ type: 'change_inclusion', payload: { rowIndex, letterIndex } })

  }


  return (
    <main className="h-screen bg-black flex flex-col items-center text-gray-100 font-open-sans">
      <nav className="font-patua text-4xl p-4 border-b-2 w-full text-center border-gray-700">Wordle</nav>
      <div className='mt-8 w-80 h-96 grid grid-rows-6 gap-2'>
        {state.lettersArray.map((array: LetterType[], index: number) => <Answer key={index} array={array} rowIndex={index} changeInclusion={changeInclusion} />)}
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

