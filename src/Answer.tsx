type AnswerProps = {
  array: string[]
}

export default function Answer({ array }: AnswerProps) {



  return <div className="grid grid-cols-5 text-center gap-2">
    {Array(5).fill('').map((box, i) =>
      (<div key={i} className="border-2 border-slate-600 flex items-center justify-center text-3xl">{array[i]?.toUpperCase()}</div>)
    )}
  </div>;
}
