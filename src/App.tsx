import './app.module.css'
import {RadixTooltip} from "./radix/radix-tooltip.tsx";
import {PlusIcon} from "@radix-ui/react-icons";
import {ReactTooltip} from "./react-tooltip/react-tooltip.tsx";
// import s from './app.module.css'

function App() {
  return (
    <div style={{display: "flex", alignItems: "center"}}>
      <div>
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

      <div>
        React-Tooltip
        <button id={'tooltip_react_tooltip'}>✏️</button>
        <ReactTooltip anchorSelect={'#tooltip_react_tooltip'}>
          Добавляет собственный JavaScript-код
          <a>Подробнее</a>
        </ReactTooltip>
      </div>
    </div>
  )
}

export default App
