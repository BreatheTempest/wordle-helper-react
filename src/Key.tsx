import { MouseEvent } from 'react';

import BackSpace from './assets/backspace_FILL0_wght400_GRAD0_opsz48.svg';

export default function Key(props: { value: string; buttonClick: (value: MouseEvent) => void }) {
  return (
    <>
      {props.value === 'space' ? (
        <div className="span-1"></div>
      ) : (
        <button
          onClick={(e) => {
            e.stopPropagation()
            e.preventDefault
            props.buttonClick(e)
          }}
          name={props.value}
          className={`flex items-center justify-center bg-gray-500 text-gray-100 h-14 px-3 py-4 uppercase rounded text-xs font-bold ${props.value === 'enter' || props.value === 'delete'
            ? 'col-span-3'
            : 'col-span-2'
            }`}
        >
          {props.value === 'delete' ? (
            <img className="h-8 pointer-events-none" src={BackSpace} />
          ) : (
            props.value
          )}
        </button>
      )}
    </>
  );
}
