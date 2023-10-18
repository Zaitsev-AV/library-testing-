// import { useState } from 'react'
import './App.css'
import {RadixTooltip} from "./radix/radix-tooltip.tsx";
import {PlusIcon} from "@radix-ui/react-icons";
// import s from './tooltip.module.css'
import {ReactAreaTooltip} from "./react-aria-tooltip/react-area-tooltip.tsx";

function App() {
  // const [count, setCount] = useState(0)
  // const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <div style={{position: "absolute", left: '10%'}}>
        Radix
        <RadixTooltip trigger={
          <button className="IconButton">
            <PlusIcon/>
          </button>
        }>
          Добавляет собственный JavaScript-код
          <a>Подробнее</a>
        </RadixTooltip>
      </div>
      <div >
        React area
          <ReactAreaTooltip/>
      </div>
    </div>
  )
}

export default App
