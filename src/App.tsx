// import { useState } from 'react'
import './App.css'
import {RadixTooltip} from "./radix/radix-tooltip.tsx";
import {PlusIcon} from "@radix-ui/react-icons";
import s from './tooltip.module.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className={s.radix_block}>
        <RadixTooltip trigger={
          <button className="IconButton">
            <PlusIcon />
          </button>
        }>
          Add to library
        </RadixTooltip>
      </div>

    </>
  )
}

export default App
