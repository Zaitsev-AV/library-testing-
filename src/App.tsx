// import { useState } from 'react'
import './App.css'
import {RadixTooltip} from "./radix/radix-tooltip.tsx";
import {PlusIcon} from "@radix-ui/react-icons";
// import s from './tooltip.module.css'
import {ReactAreaTooltip} from "./react-aria-tooltip(Adobe)/react-area-tooltip.tsx";
import {ReactTooltip} from "./react-tooltip/react-tooltip.tsx";
import {Tooltip} from "react-tooltip";

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

      <div>
        <button id={'tooltip_react_tooltip'}>✏️</button>
        <ReactTooltip anchorSelect={'tooltip_react_tooltip'}>
          Добавляет собственный JavaScript-код
          <a>Подробнее</a>
        </ReactTooltip>
      </div>

      <div>
        <a id="not-clickable">◕‿‿◕</a>
        <Tooltip anchorSelect="#not-clickable">
          <button>You can't click me :(</button>
        </Tooltip>
        <a id="clickable">◕‿‿◕</a>
        <Tooltip anchorSelect="#clickable" clickable>
          <button>You can click me!</button>
        </Tooltip>
      </div>
    </div>
  )
}

export default App
