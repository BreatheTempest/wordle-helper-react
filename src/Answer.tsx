import { LetterType } from './App'

type AnswerProps = {
  array: LetterType[]
  rowIndex: number
  changeInclusion: (rowIndex: number, i: number) => void
}


export default function Answer({ array, rowIndex, changeInclusion }: AnswerProps) {


  return <div className="grid grid-cols-5 text-center gap-2">
    {Array(5).fill('').map((h, i) => {

      const inclusionColor = array[i]?.inclusion === 1 ? 'bg-slate-600 ' : array[i]?.inclusion === 2 ? 'bg-yellow-600 border-yellow-600' : array[i]?.inclusion === 3 ? 'bg-green-600 border-green-600' : ''

      return (<button onClick={() => changeInclusion(rowIndex, i)} key={i} className={`border-2 border-slate-600 flex items-center justify-center text-3xl font-bold ${inclusionColor}`}>{array[i]?.value?.toUpperCase()}</button>)
    }
    )}
  </div>;
}
